<template>
  <div class="word-container">
    <el-button type="primary" @click="exportWord"
      >根据json导出word demo</el-button
    >
    <app-link to="/image" target="_blank">
      <el-button
        style="margin-left: 10px;"
        type="primary"
        @click="handleOpenWindow"
        >根据json打印图片demo</el-button
      ></app-link
    >
  </div>
</template>
<script>
import AppLink from "@/layouts/components/Link";
import JSZipUtils from "jszip-utils";
import "docxtemplater/build/docxtemplater.js";
import "pizzip/dist/pizzip.js";
import "pizzip/dist/pizzip-utils.js";
import "file-saver";
import { getList } from "@/api/word";
export default {
  name: "Word",
  components: { AppLink },
  data() {
    return {
      chanquan_list_1: [],
      chanquan_list_2: [],
      list: [],
      checklist: [],
    };
  },
  created() {
    getList().then((res) => {
      res.data.checklist.forEach((items) => {
        items.sub.forEach((item) => {
          if (item.res == 1) {
            item.res = "√";
          } else {
            item.res = "";
          }
          if ("" == item.remark) {
            item.remark = null;
          }
          item.type = null;
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
    exportWord() {
      let _this = this;
      JSZipUtils.getBinaryContent("template.docx", (error, content) => {
        if (error) {
          console.error(error);
          return;
        }
        let opts = {};
        let zip = new PizZip(content);
        let doc = new docxtemplater().loadZip(
          zip,
          { paragraphLoop: true },
          { linebreaks: true }
        );

        doc.setData({
          table: _this.checklist,
          single: _this.chanquan_list_1,
          multi: _this.chanquan_list_2,
        });
        doc.render();
        var out = doc.getZip().generate({
          type: "blob",
          mimeType:
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        });
        saveAs(out, "业园区安全生产分级监管工作实施.docx");
      });
    },
  },
};
</script>
