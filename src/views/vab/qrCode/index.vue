<template>
  <div class="qrcode-container">
    <vab-page-header description="二维码组件示例" :icon="['fas', 'qrcode']" title="二维码" />
    <el-card shadow="never">
      <div class="qrcode-content">
        <el-tabs v-model="activeTab">
          <el-tab-pane label="生成二维码" name="generate">
            <div class="generate-content">
              <el-row :gutter="20">
                <el-col :span="12">
                  <div class="input-section">
                    <h4>输入内容</h4>
                    <el-input
                      type="textarea"
                      :rows="6"
                      placeholder="请输入要生成二维码的内容，如网址、文本等"
                      v-model="qrContent"
                      maxlength="500"
                      show-word-limit
                    ></el-input>

                    <div class="settings">
                      <h4>二维码设置</h4>
                      <el-form label-width="100px">
                        <el-form-item label="尺寸">
                          <el-slider v-model="qrSize" :min="100" :max="400" :step="10"></el-slider>
                          <span>{{ qrSize }}px</span>
                        </el-form-item>
                        <el-form-item label="前景色">
                          <el-color-picker v-model="qrFgColor"></el-color-picker>
                        </el-form-item>
                        <el-form-item label="背景色">
                          <el-color-picker v-model="qrBgColor"></el-color-picker>
                        </el-form-item>
                        <el-form-item label="容错级别">
                          <el-select v-model="qrLevel">
                            <el-option label="L (7%)" value="L"></el-option>
                            <el-option label="M (15%)" value="M"></el-option>
                            <el-option label="Q (25%)" value="Q"></el-option>
                            <el-option label="H (30%)" value="H"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-form>
                    </div>

                    <el-button type="primary" @click="generateQRCode">生成二维码</el-button>
                    <el-button @click="clearQRCode">清空</el-button>
                    <el-button v-if="qrCodeData" @click="downloadQRCode">下载二维码</el-button>
                  </div>
                </el-col>

                <el-col :span="12">
                  <div class="output-section">
                    <h4>二维码预览</h4>
                    <div class="qrcode-preview" v-if="qrCodeData">
                      <img :src="qrCodeData" :style="{ width: qrSize + 'px', height: qrSize + 'px' }" alt="二维码" />
                      <p class="qrcode-text">{{ qrContent }}</p>
                    </div>
                    <div class="qrcode-placeholder" v-else>
                      <vab-icon :icon="['fas', 'qrcode']" class="qrcode-icon" />
                      <p>请在左侧输入内容并点击生成二维码</p>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-tab-pane>

          <el-tab-pane label="扫描二维码" name="scan">
            <div class="scan-content">
              <el-row :gutter="20">
                <el-col :span="12">
                  <div class="camera-section">
                    <h4>摄像头扫描</h4>
                    <div class="camera-placeholder">
                      <vab-icon :icon="['fas', 'camera']" class="camera-icon" />
                      <p>摄像头扫描区域</p>
                      <el-button type="primary" @click="startCamera">启动摄像头</el-button>
                    </div>
                  </div>

                  <div class="upload-section">
                    <h4>上传图片识别</h4>
                    <el-upload class="upload-demo" drag action="#" :auto-upload="false" :on-change="handleFileUpload" accept="image/*">
                      <i class="el-icon-upload"></i>
                      <div class="el-upload__text">
                        将文件拖到此处，或
                        <em>点击上传</em>
                      </div>
                      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                  </div>
                </el-col>

                <el-col :span="12">
                  <div class="result-section">
                    <h4>识别结果</h4>
                    <div class="result-content" v-if="scanResult">
                      <el-alert title="识别成功" type="success" show-icon></el-alert>
                      <div class="result-text">
                        <p><strong>内容：</strong></p>
                        <p>{{ scanResult }}</p>
                      </div>
                      <div class="result-actions">
                        <el-button @click="copyResult">复制内容</el-button>
                        <el-button v-if="isUrl(scanResult)" @click="openUrl">打开链接</el-button>
                      </div>
                    </div>
                    <div class="result-placeholder" v-else>
                      <vab-icon :icon="['fas', 'file-alt']" class="result-icon" />
                      <p>识别结果将显示在这里</p>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-tab-pane>

          <el-tab-pane label="二维码示例" name="examples">
            <div class="examples-content">
              <h4>常用二维码示例</h4>
              <el-row :gutter="20">
                <el-col :span="8">
                  <div class="example-item">
                    <div class="example-qrcode">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMjMgMjMiPjxyZWN0IHdpZHRoPSIyMyIgaGVpZ2h0PSIyMyIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0xLjUsMS41aDIwdjIwaC0yMHoiLz48L3N2Zz4="
                        alt="网址示例"
                      />
                    </div>
                    <p class="example-title">网址</p>
                    <p class="example-desc">https://vuejs.org</p>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="example-item">
                    <div class="example-qrcode">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMjMgMjMiPjxyZWN0IHdpZHRoPSIyMyIgaGVpZ2h0PSIyMyIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0xLjUsMS41aDIwdjIwaC0yMHoiLz48L3N2Zz4="
                        alt="文本示例"
                      />
                    </div>
                    <p class="example-title">文本</p>
                    <p class="example-desc">这是一段文本</p>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="example-item">
                    <div class="example-qrcode">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMjMgMjMiPjxyZWN0IHdpZHRoPSIyMyIgaGVpZ2h0PSIyMyIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0xLjUsMS41aDIwdjIwaC0yMHoiLz48L3N2Zz4="
                        alt="名片示例"
                      />
                    </div>
                    <p class="example-title">名片</p>
                    <p class="example-desc">张三, 13800138000</p>
                  </div>
                </el-col>
              </el-row>

              <h4 style="margin-top: 30px">二维码应用场景</h4>
              <el-row :gutter="20">
                <el-col :span="12">
                  <div class="application-item">
                    <h5>
                      <vab-icon :icon="['fas', 'shopping-cart']" />
                      电商购物
                    </h5>
                    <p>扫码购买商品，快速下单支付</p>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="application-item">
                    <h5>
                      <vab-icon :icon="['fas', 'ticket-alt']" />
                      电子票务
                    </h5>
                    <p>电影票、火车票、门票等电子凭证</p>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="application-item">
                    <h5>
                      <vab-icon :icon="['fas', 'user-circle']" />
                      个人名片
                    </h5>
                    <p>快速分享联系方式和社交媒体</p>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="application-item">
                    <h5>
                      <vab-icon :icon="['fas', 'wifi']" />
                      WiFi连接
                    </h5>
                    <p>快速连接WiFi，无需输入密码</p>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-card>
  </div>
</template>

<script>
  import VabPageHeader from '@/components/VabPageHeader'
  import { toDataURL } from 'qrcode'

  export default {
    name: 'QrCode',
    components: {
      VabPageHeader,
    },
    data() {
      return {
        activeTab: 'generate',
        qrContent: 'https://github.com/zxwk1998/vue-admin-better',
        qrSize: 200,
        qrFgColor: '#000000',
        qrBgColor: '#ffffff',
        qrLevel: 'M',
        qrCodeData: '',
        scanResult: '',
      }
    },
    methods: {
      async generateQRCode() {
        if (!this.qrContent) {
          this.$message.warning('请输入要生成二维码的内容')
          return
        }

        try {
          const qrData = await toDataURL(this.qrContent, {
            width: this.qrSize,
            color: {
              dark: this.qrFgColor,
              light: this.qrBgColor,
            },
            errorCorrectionLevel: this.qrLevel,
          })

          this.qrCodeData = qrData
          this.$message.success('二维码生成成功')
        } catch (err) {
          this.$message.error('二维码生成失败: ' + err.message)
        }
      },

      clearQRCode() {
        this.qrContent = ''
        this.qrCodeData = ''
      },

      downloadQRCode() {
        const link = document.createElement('a')
        link.href = this.qrCodeData
        link.download = 'qrcode.png'
        link.click()
        this.$message.success('二维码下载成功')
      },

      startCamera() {
        this.$message.info('在实际应用中，这里会启动摄像头进行扫码')
      },

      handleFileUpload(file) {
        this.scanResult = '这是示例识别结果：https://github.com/zxwk1998/vue-admin-better'
        this.$message.success('图片识别成功')
      },

      copyResult() {
        this.$copyText(this.scanResult).then(
          () => {
            this.$message.success('复制成功')
          },
          () => {
            this.$message.error('复制失败')
          }
        )
      },

      openUrl() {
        window.open(this.scanResult, '_blank')
      },

      isUrl(string) {
        try {
          new URL(string)
          return true
        } catch (_) {
          return false
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .qrcode-container {
    padding: 15px;
    background: $base-color-white;

    .qrcode-content {
      min-height: 400px;

      .generate-content,
      .scan-content,
      .examples-content {
        padding: 20px 0;

        .input-section,
        .output-section,
        .camera-section,
        .upload-section,
        .result-section {
          margin-bottom: 20px;

          h4 {
            margin: 0 0 15px 0;
            color: #333;
          }

          .settings {
            margin: 20px 0;

            ::v-deep .el-form-item {
              margin-bottom: 15px;
            }
          }
        }

        .qrcode-preview {
          display: flex;
          flex-direction: column;
          align-items: center;

          img {
            border: 1px solid #dcdfe6;
            padding: 10px;
          }

          .qrcode-text {
            margin-top: 15px;
            text-align: center;
            word-break: break-all;
          }
        }

        .qrcode-placeholder,
        .camera-placeholder,
        .result-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 200px;
          color: #909399;
          border: 1px dashed #dcdfe6;
          border-radius: 4px;

          .qrcode-icon,
          .camera-icon,
          .result-icon {
            font-size: 48px;
            margin-bottom: 20px;
          }
        }

        .camera-placeholder {
          .camera-icon {
            color: #409eff;
          }
        }

        .result-content {
          .result-text {
            margin: 20px 0;
            padding: 15px;
            background: #f5f5f5;
            border-radius: 4px;
            word-break: break-all;
          }
        }

        .example-item {
          text-align: center;
          margin-bottom: 20px;

          .example-qrcode {
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;

            img {
              max-width: 100px;
              max-height: 100px;
            }
          }

          .example-title {
            font-weight: bold;
            margin: 5px 0;
          }

          .example-desc {
            color: #999;
            font-size: 12px;
          }
        }

        .application-item {
          padding: 15px;
          background: #f5f5f5;
          border-radius: 4px;
          margin-bottom: 15px;

          h5 {
            margin: 0 0 10px 0;
            color: #333;

            i {
              margin-right: 8px;
              color: #409eff;
            }
          }

          p {
            margin: 0;
            color: #666;
            font-size: 14px;
          }
        }
      }
    }
  }
</style>
