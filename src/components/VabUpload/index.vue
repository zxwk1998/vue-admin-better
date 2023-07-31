<template>
  <el-dialog
    :before-close="handleClose"
    :close-on-click-modal="false"
    :title="title"
    :visible.sync="dialogFormVisible"
    width="909px"
  >
    <div class="upload">
      <el-alert
        :closable="false"
        :title="`支持jpg、jpeg、png格式，单次可最多选择${limit}张图片，每张不可大于${size}M，如果大于${size}M会自动为您过滤`"
        type="info"
      />
      <br />
      <el-upload
        ref="upload"
        accept="image/png, image/jpeg"
        :action="action"
        :auto-upload="false"
        class="upload-content"
        :close-on-click-modal="false"
        :data="data"
        :file-list="fileList"
        :headers="headers"
        :limit="limit"
        list-type="picture-card"
        :multiple="true"
        :name="name"
        :on-change="handleChange"
        :on-error="handleError"
        :on-exceed="handleExceed"
        :on-preview="handlePreview"
        :on-progress="handleProgress"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
      >
        <i slot="trigger" class="el-icon-plus"></i>
        <el-dialog
          append-to-body
          title="查看大图"
          :visible.sync="dialogVisible"
        >
          <div>
            <img alt="" :src="dialogImageUrl" width="100%" />
          </div>
        </el-dialog>
      </el-upload>
    </div>
    <div
      slot="footer"
      class="dialog-footer"
      style="position: relative; padding-right: 15px; text-align: right"
    >
      <div
        v-if="show"
        style="position: absolute; top: 10px; left: 15px; color: #999"
      >
        正在上传中... 当前上传成功数:{{ imgSuccessNum }}张 当前上传失败数:{{
          imgErrorNum
        }}张
      </div>
      <el-button type="primary" @click="handleClose">关闭</el-button>
      <el-button
        :loading="loading"
        size="small"
        style="margin-left: 10px"
        type="success"
        @click="submitUpload"
      >
        开始上传
      </el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    name: 'VabUpload',
    props: {
      url: {
        type: String,
        default: '/upload',
        required: true,
      },
      name: {
        type: String,
        default: 'file',
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
        dialogImageUrl: '',
        action: 'https://vab-unicloud-3a9da9.service.tcloudbase.com/upload',
        headers: {},
        fileList: [],
        picture: 'picture',
        imgNum: 0,
        imgSuccessNum: 0,
        imgErrorNum: 0,
        typeList: null,
        title: '上传',
        dialogFormVisible: false,
        data: {},
      }
    },
    computed: {
      percentage() {
        if (this.allImgNum == 0) return 0
        return this.$baseLodash.round(this.imgNum / this.allImgNum, 2) * 100
      },
    },
    methods: {
      submitUpload() {
        this.$refs.upload.submit()
      },
      handleProgress() {
        this.loading = true
        this.show = true
      },
      handleChange(file, fileList) {
        if (file.size > 1048576 * this.size) {
          fileList.map((item, index) => {
            if (item === file) {
              fileList.splice(index, 1)
            }
          })
          this.fileList = fileList
        } else {
          this.allImgNum = fileList.length
        }
      },
      handleSuccess(response, file, fileList) {
        this.imgNum = this.imgNum + 1
        this.imgSuccessNum = this.imgSuccessNum + 1
        if (fileList.length === this.imgNum) {
          setTimeout(() => {
            this.$baseMessage(
              `上传完成! 共上传${fileList.length}张图片`,
              'success'
            )
          }, 1000)
        }

        setTimeout(() => {
          this.loading = false
          this.show = false
        }, 1000)
      },
      handleError() {
        this.imgNum = this.imgNum + 1
        this.imgErrorNum = this.imgErrorNum + 1
        this.$baseMessage(
          `文件[${file.raw.name}]上传失败,文件大小为${this.$baseLodash.round(
            file.raw.size / 1024,
            0
          )}KB`,
          'error'
        )
        setTimeout(() => {
          this.loading = false
          this.show = false
        }, 1000)
      },
      handleRemove() {
        this.imgNum = this.imgNum - 1
        this.allNum = this.allNum - 1
      },
      handlePreview(file) {
        this.dialogImageUrl = file.url
        this.dialogVisible = true
      },
      handleExceed(files, fileList) {
        this.$baseMessage(
          `当前限制选择 ${this.limit} 个文件，本次选择了
             ${files.length}
             个文件`,
          'error'
        )
      },
      handleShow(data) {
        this.title = '上传'
        this.data = data
        this.dialogFormVisible = true
      },
      handleClose() {
        this.fileList = []
        this.picture = 'picture'
        this.allImgNum = 0
        this.imgNum = 0
        this.imgSuccessNum = 0
        this.imgErrorNum = 0
        /* if ("development" === process.env.NODE_ENV) {
      this.api = process.env.VUE_APP_BASE_API;
    } else {
      this.api = `${window.location.protocol}//${window.location.host}`;
    }

    this.action = this.api + this.url; */
        this.dialogFormVisible = false
      },
    },
  }
</script>

<style lang="scss" scoped>
  .upload {
    height: 500px;

    .upload-content {
      .el-upload__tip {
        display: block;
        height: 30px;
        line-height: 30px;
      }

      ::v-deep {
        .el-upload--picture-card {
          width: 128px;
          height: 128px;
          margin: 3px 8px 8px 8px;
          border: 2px dashed #c0ccda;
        }

        .el-upload-list--picture {
          margin-bottom: 20px;
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
