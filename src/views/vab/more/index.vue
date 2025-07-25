<template>
  <div class="more-container">
    <vab-page-header description="开源版本、商业版本和VIP群相关信息" :icon="['fas', 'ellipsis-h']" title="更多功能" />

    <el-row :gutter="24">
      <!-- 开源版本卡片 -->
      <el-col :lg="12" :md="24" :sm="24" :xl="12" :xs="24">
        <div class="modern-card open-source">
          <div class="card-background">
            <div class="bg-pattern"></div>
          </div>
          <div class="card-content">
            <div class="card-header">
              <div class="icon-wrapper">
                <vab-icon :icon="['fas', 'user']" />
              </div>
              <div class="header-text">
                <h3 class="card-title">开源版本</h3>
                <div class="card-subtitle">永久免费 · 个人/商业使用</div>
              </div>
              <div class="status-badge">
                <span>免费</span>
              </div>
            </div>

            <div class="card-body">
              <div class="features-grid">
                <div class="feature-item">
                  <div class="feature-icon">
                    <vab-icon :icon="['fas', 'check']" />
                  </div>
                  <span>永久开源免费</span>
                </div>
                <div class="feature-item">
                  <div class="feature-icon">
                    <vab-icon :icon="['fas', 'check']" />
                  </div>
                  <span>支持横纵布局切换</span>
                </div>
                <div class="feature-item">
                  <div class="feature-icon">
                    <vab-icon :icon="['fas', 'check']" />
                  </div>
                  <span>保留控制台打印即可商用</span>
                </div>
                <div class="feature-item">
                  <div class="feature-icon">
                    <vab-icon :icon="['fas', 'check']" />
                  </div>
                  <span>作者信息可全部去除</span>
                </div>
                <div class="feature-item">
                  <div class="feature-icon">
                    <vab-icon :icon="['fas', 'check']" />
                  </div>
                  <span>包含打包优化教程</span>
                </div>
                <div class="feature-item">
                  <div class="feature-icon">
                    <vab-icon :icon="['fas', 'check']" />
                  </div>
                  <span>提供讨论群专属文档</span>
                </div>
              </div>

              <div class="card-footer">
                <a class="action-button" href="https://github.com/zxwk1998/vue-admin-better" target="_blank">
                  <vab-icon :icon="['fab', 'github']" />
                  <span>查看源码</span>
                </a>
                <div class="contact-info">
                  <vab-icon :icon="['fab', 'qq']" />
                  <span>QQ群：972435319、1139183756</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>

      <!-- 商业版本卡片 -->
      <el-col :lg="12" :md="24" :sm="24" :xl="12" :xs="24">
        <div class="modern-card commercial">
          <div class="card-background">
            <div class="bg-pattern"></div>
          </div>
          <div class="card-content">
            <div class="card-header">
              <div class="icon-wrapper">
                <vab-icon :icon="['fas', 'crown']" />
              </div>
              <div class="header-text">
                <h3 class="card-title">商业版本</h3>
                <div class="card-subtitle">专业级 · 企业级解决方案</div>
              </div>
              <div class="status-badge">
                <span>PRO</span>
              </div>
            </div>

            <div class="card-body">
              <div class="premium-products">
                <a class="product-card" href="https://vuejs-core.cn/admin-pro" target="_blank">
                  <div class="product-header">
                    <vab-icon :icon="['fas', 'crown']" />
                    <div class="product-badge">PRO</div>
                  </div>
                  <div class="product-info">
                    <div class="product-name">Admin Pro</div>
                    <div class="product-price">￥699</div>
                  </div>
                  <div class="product-arrow">
                    <vab-icon :icon="['fas', 'arrow-right']" />
                  </div>
                </a>

                <a class="product-card" href="https://vuejs-core.cn/admin-plus" target="_blank">
                  <div class="product-header">
                    <vab-icon :icon="['fas', 'gem']" />
                    <div class="product-badge">PLUS</div>
                  </div>
                  <div class="product-info">
                    <div class="product-name">Admin Plus</div>
                    <div class="product-price">￥799</div>
                  </div>
                  <div class="product-arrow">
                    <vab-icon :icon="['fas', 'arrow-right']" />
                  </div>
                </a>

                <a class="product-card featured" href="https://vuejs-core.cn/shop-vite" target="_blank">
                  <div class="product-header">
                    <vab-icon :icon="['fas', 'shopping-cart']" />
                    <div class="product-badge">SHOP</div>
                  </div>
                  <div class="product-info">
                    <div class="product-name">Shop Vite</div>
                    <div class="product-price">￥1899</div>
                  </div>
                  <div class="product-arrow">
                    <vab-icon :icon="['fas', 'arrow-right']" />
                  </div>
                </a>
              </div>

              <div class="card-footer">
                <div class="service-info">
                  <vab-icon :icon="['fas', 'star']" />
                  <span>专业技术支持 · 源码授权 · 定制服务</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 自定义版权服务 -->
    <el-row :gutter="24" style="margin-top: 24px">
      <el-col :span="24">
        <div class="modern-card custom-service">
          <div class="card-background">
            <div class="bg-pattern"></div>
          </div>
          <div class="card-content">
            <div class="service-header">
              <div class="service-icon">
                <vab-icon :icon="['fas', 'paint-brush']" />
              </div>
              <div class="service-info">
                <h3 class="service-title">自定义版权服务</h3>
                <p class="service-desc">如需自定义版权及作者信息，可联系微信客服zxwk-bfq购买</p>
              </div>
              <div class="service-price">
                <div class="price-amount">￥99</div>
                <div class="price-note">自愿原则</div>
              </div>
            </div>

            <div class="service-features">
              <div class="feature-item">
                <vab-icon :icon="['fas', 'check-circle']" />
                <span>移除所有作者信息</span>
              </div>
              <div class="feature-item">
                <vab-icon :icon="['fas', 'check-circle']" />
                <span>自定义版权声明</span>
              </div>
              <div class="feature-item">
                <vab-icon :icon="['fas', 'check-circle']" />
                <span>品牌化定制</span>
              </div>
              <div class="feature-item">
                <vab-icon :icon="['fas', 'check-circle']" />
                <span>自愿原则</span>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import VabPageHeader from '@/components/VabPageHeader'

  export default {
    name: 'More',
    components: {
      VabPageHeader,
    },
    data() {
      return {
        nodeEnv: process.env.NODE_ENV,
      }
    },
    created() {},
    mounted() {},
    methods: {},
  }
</script>

<style lang="scss" scoped>
  .more-container {
    .modern-card {
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      background: white;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
      height: 100%;

      .card-background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;

        .bg-pattern {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
          transition: transform 0.4s ease;
        }
      }

      .card-content {
        position: relative;
        z-index: 1;
        padding: 32px;
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      .card-header {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 24px;

        .icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          color: white;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .header-text {
          flex: 1;

          .card-title {
            margin: 0 0 4px 0;
            font-size: 24px;
            font-weight: 700;
            color: #1a1a1a;
          }

          .card-subtitle {
            font-size: 14px;
            color: #666;
            font-weight: 500;
          }
        }

        .status-badge {
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
      }

      .card-body {
        flex: 1;
        display: flex;
        flex-direction: column;
      }

      .card-footer {
        margin-top: auto;
        padding-top: 20px;
        border-top: 1px solid rgba(0, 0, 0, 0.06);
      }
    }

    // 开源版本样式
    .open-source {
      .icon-wrapper {
        background: linear-gradient(135deg, #4d8af0 0%, #1a56db 100%);
      }

      .status-badge {
        background: linear-gradient(135deg, #67c23a 0%, #85ce61 100%);
      }

      .features-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        margin-bottom: 24px;

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 12px;
          background: rgba(102, 126, 234, 0.05);
          transition: all 0.3s ease;

          &:hover {
            background: rgba(102, 126, 234, 0.1);
            transform: translateX(4px);
          }

          .feature-icon {
            width: 32px;
            height: 32px;
            border-radius: 8px;
            background: linear-gradient(135deg, #4d8af0 0%, #1a56db 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 14px;
          }

          span {
            font-size: 14px;
            font-weight: 500;
            color: #333;
          }
        }
      }

      .action-button {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 24px;
        background: linear-gradient(135deg, #4d8af0 0%, #1a56db 100%);
        color: white;
        text-decoration: none;
        border-radius: 12px;
        font-weight: 600;
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
        }
      }

      .contact-info {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 12px;
        font-size: 14px;
        color: #666;
      }
    }

    // 商业版本样式
    .commercial {
      .icon-wrapper {
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      }

      .status-badge {
        background: linear-gradient(135deg, #e6a23c 0%, #f7ba2a 100%);
      }

      .premium-products {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-bottom: 24px;

        .product-card {
          display: flex;
          align-items: center;
          padding: 16px;
          border-radius: 16px;
          background: linear-gradient(135deg, #4d8af0 0%, #1a56db 100%);
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;

          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s ease;
          }

          &:hover {
            transform: translateX(8px);
            box-shadow: 0 12px 32px rgba(102, 126, 234, 0.3);

            &::before {
              left: 100%;
            }
          }

          &.featured {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            box-shadow: 0 8px 24px rgba(240, 147, 251, 0.3);

            &:hover {
              box-shadow: 0 12px 32px rgba(240, 147, 251, 0.4);
            }
          }

          .product-header {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-right: 16px;

            .vab-icon {
              font-size: 20px;
            }

            .product-badge {
              padding: 2px 8px;
              border-radius: 12px;
              font-size: 10px;
              font-weight: 600;
              background: rgba(255, 255, 255, 0.2);
              text-transform: uppercase;
            }
          }

          .product-info {
            flex: 1;

            .product-name {
              font-size: 16px;
              font-weight: 600;
              margin-bottom: 4px;
            }

            .product-price {
              font-size: 14px;
              opacity: 0.9;
            }
          }

          .product-arrow {
            opacity: 0;
            transition: all 0.3s ease;
          }

          &:hover .product-arrow {
            opacity: 1;
            transform: translateX(4px);
          }
        }
      }

      .service-info {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        color: #666;
      }
    }

    // 自定义版权服务样式
    .custom-service {
      .service-header {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 24px;

        .service-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: linear-gradient(135deg, #e6a23c 0%, #f7ba2a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          color: white;
          box-shadow: 0 8px 24px rgba(230, 162, 60, 0.3);
        }

        .service-info {
          flex: 1;

          .service-title {
            margin: 0 0 8px 0;
            font-size: 24px;
            font-weight: 700;
            color: #1a1a1a;
          }

          .service-desc {
            margin: 0;
            font-size: 14px;
            color: #666;
            line-height: 1.5;
          }
        }

        .service-price {
          text-align: right;

          .price-amount {
            font-size: 32px;
            font-weight: 700;
            color: #e6a23c;
            line-height: 1;
          }

          .price-note {
            font-size: 12px;
            color: #999;
            margin-top: 4px;
          }
        }
      }

      .service-features {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 16px;

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          border-radius: 12px;
          background: rgba(230, 162, 60, 0.05);
          transition: all 0.3s ease;

          &:hover {
            background: rgba(230, 162, 60, 0.1);
            transform: translateY(-2px);
          }

          .vab-icon {
            color: #e6a23c;
            font-size: 18px;
          }

          span {
            font-size: 14px;
            font-weight: 500;
            color: #333;
          }
        }
      }
    }
  }

  // 响应式设计
  @media (max-width: 768px) {
    .more-container {
      .modern-card {
        .card-content {
          padding: 24px;
        }

        .card-header {
          .icon-wrapper {
            width: 56px;
            height: 56px;
            font-size: 24px;
          }

          .header-text {
            .card-title {
              font-size: 20px;
            }
          }
        }

        .open-source .features-grid {
          grid-template-columns: 1fr;
        }

        .custom-service {
          .service-header {
            flex-direction: column;
            text-align: center;

            .service-price {
              text-align: center;
            }
          }

          .service-features {
            grid-template-columns: 1fr;
          }
        }
      }
    }
  }
</style>
