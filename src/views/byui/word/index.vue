<template>
  <div>
    <div class="threeLevelMain">
      <!-- 底部按钮容器 -->
      <div class="botmBtnContainer">
        <el-button size="small" type="primary" @click="exportWord"
          >导出word</el-button
        >
        <!-- <el-button @click="exportExcelClick" size="small" type="primary">导出excel</el-button> -->
      </div>
    </div>
  </div>
</template>
<script>
import JSZipUtils from "jszip-utils";
import "docxtemplater/build/docxtemplater.js";
import "pizzip/dist/pizzip.js";
import "pizzip/dist/pizzip-utils.js";
import "file-saver";
import { getList } from "@/api/word";
import ImageModule from "open-docxtemplater-image-module";
export default {
  name: "Home",
  data() {
    return {
      imageBase64: "",
      chanquan_list_1: [],
      chanquan_list_2: [],
      list: [],
      checklist: [],
      imgSrc: "favicon.png",
    };
  },
  created() {
    let _this = this;
    let image = new Image();
    image.src = this.imgSrc;
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0, image.width, image.height);
      _this.imageBase64 = canvas.toDataURL("image/png");
    };

    getList().then((res) => {
      res.data.checklist.forEach((items) => {
        items.sub.forEach((item) => {
          if (item.res == 1) {
            item.res = "√";
          } else {
            item.res = "";
          }
        });
      });
      res.data.info.chanquan_list_1.forEach((itemCqs) => {
        if (res.data.info.chanquan_single == itemCqs.sort) {
          itemCqs.sort = "";
        } else {
          itemCqs.sort = "";
        }
      });
      res.data.info.chanquan_list_2.forEach((itemCqm) => {
        if (
          JSON.parse(res.data.info.chanquan_multi).indexOf(itemCqm.sort) != -1
        ) {
          itemCqm.sort = "";
        } else {
          itemCqm.sort = "";
        }
      });
      this.chanquan_list_1 = res.data.info.chanquan_list_1;
      this.chanquan_list_2 = res.data.info.chanquan_list_2;
      this.checklist = res.data.checklist;
    });
  },
  methods: {
    base64DataURLToArrayBuffer(dataURL) {
      const base64Regex = /^data:image\/(png|jpg|svg|svg\+xml);base64,/;
      if (!base64Regex.test(dataURL)) {
        return false;
      }
      const stringBase64 = dataURL.replace(base64Regex, "");
      let binaryString;
      if (typeof window !== "undefined") {
        binaryString = window.atob(stringBase64);
      } else {
        binaryString = new Buffer(stringBase64, "base64").toString("binary");
      }
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        const ascii = binaryString.charCodeAt(i);
        bytes[i] = ascii;
      }
      return bytes.buffer;
    },
    exportWord() {
      let _this = this;
      JSZipUtils.getBinaryContent("template.docx", (error, content) => {
        if (error) {
          throw error;
        }
        let opts = {};
        opts.centered = false;
        opts.fileType = "docx";
        opts.getImage = () => {
          return _this.base64DataURLToArrayBuffer(_this.imageBase64);
        };
        opts.getSize = () => {
          return [200, 200];
        };
        let imageModule = new ImageModule(opts);
        let zip = new PizZip(content);
        let doc = new docxtemplater()
          /* .attachModule(imageModule) */
          .loadZip(zip)
          .setData({
            table: _this.checklist,
            single: _this.chanquan_list_1,
            multi: _this.chanquan_list_2,
            /* image: _this.imageBase64, */
          });
        try {
          doc.render();
        } catch (error) {
          let e = {
            message: error.message,
            name: error.name,
            stack: error.stack,
            properties: error.properties,
          };
          throw error;
        }
        let out = doc.getZip().generate({
          type: "blob",
          mimeType:
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        });
        saveAs(out, "工业园区安全生产分级监管工作实施.docx");
      });
    },
  },
};
</script>
