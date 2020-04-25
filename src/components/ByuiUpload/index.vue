<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogFormVisible"
    width="909px"
    :before-close="handleClose"
    :close-on-click-modal="false"
  >
    <div class="upload">
      <el-alert
        :closable="false"
        :title="`支持jpg、jpeg、png格式，单次可最多选择${limit}张图片，每张不可大于${size}M，如果大于${size}M会自动为您过滤`"
        type="info"
      >
      </el-alert>
      <br />
      <el-upload
        ref="upload"
        class="upload-content"
        :name="name"
        :data="data"
        :action="action"
        :headers="headers"
        :on-change="handleChange"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :on-exceed="handleExceed"
        :on-success="handleSuccess"
        :on-progress="handleProgress"
        :on-error="handleError"
        :file-list="fileList"
        :multiple="true"
        :auto-upload="false"
        accept="image/png, image/jpeg"
        :limit="limit"
        list-type="picture-card"
        :close-on-click-modal="false"
      >
        <i slot="trigger" class="el-icon-plus"></i>
        <el-dialog
          title="查看大图"
          append-to-body
          :visible.sync="dialogVisible"
        >
          <div style="padding-bottom: 20px !important;">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </div>
        </el-dialog>
      </el-upload>
    </div>
    <div
      slot="footer"
      class="dialog-footer"
      style="position: relative; text-align: right; padding-right: 15px;"
    >
      <div
        v-if="show"
        style="position: absolute; top: 10px; left: 15px; color: #999;"
      >
        正在上传中... 当前上传成功数:{{ imgSuccessNum }}张 当前上传失败数:{{
          imgErrorNum
        }}张
      </div>
      <el-button type="primary" @click="handleClose">关闭</el-button>
      <el-button
        style="margin-left: 10px;"
        size="small"
        type="success"
        :loading="loading"
        @click="submitUpload"
        >开始上传
      </el-button>
    </div>
  </el-dialog>
</template>

<script>
import { tokenName } from "@/config/settings";

export default {
  name: "ByuiUpload",
  props: {
    url: {
      type: String,
      default: "/upload",
      required: true,
    },
    name: {
      type: String,
      default: "file",
      required: true,
    },
    limit: {
      type: Number,
      default: 50,
      required: true,
    },
    size: {
      type: Number,
      default: 1,
      required: true,
    },
  },
  data() {
    return {
      show: false,
      loading: false,
      dialogVisible: false,
      dialogImageUrl: "",
      action: "",
      headers: {},
      fileList: [],
      picture: "picture",
      imgNum: 0,
      imgSuccessNum: 0,
      imgErrorNum: 0,
      typeList: null,
      title: "上传",
      dialogFormVisible: false,
      data: {},
    };
  },
  computed: {
    percentage() {
      if (this.allImgNum == 0) return 0;
      return this.$baseLodash.round(this.imgNum / this.allImgNum, 2) * 100;
    },
  },
  created() {
    if ("development" === process.env.NODE_ENV) {
      this.api = process.env.VUE_APP_BASE_API;
    } else {
      this.api = `${window.location.protocol}//${window.location.host}`;
    }

    this.action = this.api + this.url;
    this.headers[tokenName] = this.$baseAccessToken();
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleProgress(event, file, fileList) {
      this.loading = true;
      this.show = true;
    },
    handleChange(file, fileList) {
      if (file.size > 1048576 * this.size) {
        fileList.map((item, index) => {
          if (item === file) {
            fileList.splice(index, 1);
          }
        });
        this.fileList = fileList;
      } else {
        this.allImgNum = fileList.length;
      }
    },
    handleSuccess(response, file, fileList) {
      this.imgNum = this.imgNum + 1;
      this.imgSuccessNum = this.imgSuccessNum + 1;
      if (fileList.length === this.imgNum) {
        setTimeout(() => {
          this.$emit("fetchDatas");
          this.$baseMessage(
            `上传完成! 共上传${fileList.length}张图片`,
            "success"
          );
        }, 1000);
      }

      setTimeout(() => {
        this.loading = false;
        this.show = false;
      }, 1000);
    },
    handleError(err, file, fileList) {
      this.imgNum = this.imgNum + 1;
      this.imgErrorNum = this.imgErrorNum + 1;
      this.$baseMessage(
        `文件[${file.raw.name}]上传失败,文件大小为${this.$baseLodash.round(
          file.raw.size / 1024,
          0
        )}KB`,
        "error"
      );
      setTimeout(() => {
        this.loading = false;
        this.show = false;
      }, 1000);
    },
    handleRemove(file, fileList) {
      this.imgNum = this.imgNum - 1;
      this.allNum = this.allNum - 1;
    },
    handlePreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleExceed(files, fileList) {
      this.$baseMessage(
        `当前限制选择 ${this.limit} 个文件，本次选择了
             ${files.length}
             个文件`,
        "error"
      );
    },
    handleShow(data) {
      this.title = "上传";
      this.data = data;
      this.dialogFormVisible = true;
    },
    handleClose() {
      this.fileList = [];
      this.picture = "picture";
      this.allImgNum = 0;
      this.imgNum = 0;
      this.imgSuccessNum = 0;
      this.imgErrorNum = 0;
      if ("development" === process.env.NODE_ENV) {
        this.api = process.env.VUE_APP_BASE_API;
      } else {
        this.api = `${window.location.protocol}//${window.location.host}`;
      }

      this.action = this.api + this.url;
      this.headers[tokenName] = this.$baseAccessToken();
      this.dialogFormVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.upload {
  height: 600px;

  .upload-content {
    .el-upload__tip {
      display: block;
      height: 30px;
      line-height: 30px;
    }

    ::v-deep {
      .el-upload--picture-card {
        border: 2px dashed #c0ccda;
      }

      .el-upload-list--picture {
        margin-bottom: 20px;
      }

      .el-upload--picture-card {
        width: 128px;
        height: 128px;
        margin: 3px 8px 8px 8px;
      }

      .el-upload-list--picture-card {
        .el-upload-list__item {
          width: 128px;
          height: 128px;
          margin: 3px 8px 8px 8px;
        }
      }
    }
  }
}
</style>
