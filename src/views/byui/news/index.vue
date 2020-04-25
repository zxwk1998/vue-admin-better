<template>
  <div class="news-container">
    <el-select v-model="value" placeholder="请选择" @change="handleChange">
      <el-option
        v-for="(item, index) in options"
        :key="index"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-row :gutter="15">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-timeline
          v-loading="listLoading"
          :element-loading-text="elementLoadingText"
        >
          <el-timeline-item
            v-for="(item, index) in newsList"
            :key="index"
            :timestamp="item.time || item.pubDate"
            placement="top"
            type="success"
          >
            <el-card shadow="hover">
              <h4>
                <a target="_blank" :href="item.link">
                  {{ item.title }}
                </a>
              </h4>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-col>
    </el-row>
    <el-pagination
      background
      :current-page="pagination.page"
      :page-size="pagination.pageSize"
      layout="total, prev, pager, next"
      :total="pagination.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
    <el-dialog
      width="60%"
      title="新闻详情（爬取内容无法保证数据与页面格式完整性）"
      :visible.sync="dialogVisible"
    >
      <div class="article-content" v-html="description"></div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
        <a style="margin-left: 10px;" target="_blank" :href="link">
          <el-button type="primary">
            阅读原文
          </el-button>
        </a>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getFbzbList, getQdysjList } from "@/api/news";

export default {
  name: "News",
  data() {
    return {
      listLoading: true,
      elementLoadingText: "正在加载...",
      dialogVisible: false,
      description: "",
      link: "",
      options: [
        {
          value: "0",
          label: "前端艺术家",
        },
        {
          value: "1",
          label: "飞冰早报",
        },
      ],
      value: "0",
      newsList: [],
      pagination: {
        total: 0,
        page: 1,
        pageSize: 10,
      },
    };
  },
  created() {
    this.fetchData();
  },
  mounted() {},
  methods: {
    handleDialog(description, link) {
      this.dialogVisible = true;
      this.description = description;
      this.link = link;
    },
    handleChange(val) {
      this.value = val;
      this.pagination.total = 0;
      this.pagination.page = 1;
      this.pagination.pageSize = 10;
      this.fetchData();
    },
    fetchData() {
      this.listLoading = true;
      switch (this.value) {
        case "0":
          getQdysjList({
            ...this.pagination,
            ...{ page: this.pagination.page - 1 },
          }).then((res) => {
            this.pagination.total = res.total;
            this.newsList = res.data;
          });
          break;
        case "1":
          getFbzbList({
            ...this.pagination,
            ...{ page: this.pagination.page - 1 },
          }).then((res) => {
            this.pagination.total = res.total;
            this.newsList = res.data;
          });
          break;
      }
      setTimeout(() => {
        this.listLoading = false;
      }, 500);
    },
    handleSizeChange(val) {
      this.pagination.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.pagination.page = val;
      this.fetchData();
    },
  },
};
</script>

<style lang="scss" scoped>
.news-container {
  ::v-deep {
    .el-timeline {
      margin-top: 20px;

      &-item {
        padding-bottom: 1px;
      }
    }

    .el-dialog__body {
      ::v-deep {
        .article-content {
          word-break: break-word;
          line-height: 1.75;
          font-weight: 400;
          font-size: 15px;
          overflow-x: hidden;

          * {
            font-family: "微软雅黑" !important;
          }

          h1 {
            line-height: 1.2;
            font-size: 30px;
            margin: 1.3rem 0 5px;

            &.heading {
              & + h2 {
                &.heading {
                  margin-top: 20px;
                }
              }

              & + h3 {
                &.heading {
                  margin-top: 15px;
                }
              }
            }

            & + :not(.heading) {
              margin-top: 25px;
            }
          }

          p {
            line-height: 2.27rem;
            line-height: inherit;
            margin-top: 22px;
            margin-bottom: 22px;
          }

          hr {
            border: none;
            border-top: 1px solid #ddd;
            margin-top: 2.7rem;
            margin-bottom: 2.7rem;
          }

          img {
            max-height: none;

            &.lazyload {
            }

            &.inited {
              background-color: #f8f9fa;
              background-position: 50%;
              background-repeat: no-repeat;
              visibility: visible;
            }

            &.loaded {
              background-image: none;
              background-color: transparent;
            }

            &.error {
              background-image: url(https://b-gold-cdn.xitu.io/v3/static/img/image-error.3338abe.png);
            }

            &.equation {
              margin: 0 0.1em;
              max-width: 100% !important;
              vertical-align: middle;
            }

            &:not(.equation) {
              cursor: zoom-in;
            }
          }

          figure {
            margin: 2.7rem auto;
            text-align: center;
            margin: 22px auto;

            figcaption {
              text-align: center;
              font-size: 1rem;
              line-height: 2.7rem;
              color: #909090;
              margin-top: 2px;
              line-height: 1.6;
            }
          }

          pre {
            line-height: 1.93rem;
            overflow: auto;
            position: relative;
            line-height: 1.75;

            & > code {
              font-size: 1rem;
              padding: 0.67rem 1.3rem;
              margin: 0;
              word-break: normal;
              display: block;
              overflow-x: auto;
              color: #333;
              background: #f8f8f8;
              padding: 15px 12px;

              &.hljs[lang] {
                padding: 18px 15px 12px;
              }

              &.hljs[lang]:before {
                content: attr(lang);
                position: absolute;
                right: 15px;
                top: 2px;
                color: hsla(0, 0%, 54.9%, 0.8);
              }

              &.hljs[lang][lang="bash"]:before {
                content: "";
              }

              &.copyable {
                .copy-code-btn {
                  display: none;
                  position: absolute;
                  top: 6px;
                  right: 15px;
                  font-size: 12px;
                  line-height: 1;
                  cursor: pointer;
                  color: hsla(0, 0%, 54.9%, 0.8);
                  transition: color 0.1s;

                  &:hover {
                    color: #8c8c8c;
                  }
                }
              }
            }
          }

          code {
            font-size: 1rem;
            padding: 0.26rem 0.53em;
            word-break: break-word;
            color: #4e5980;
            background-color: #f8f8f8;
            border-radius: 2px;
            overflow-x: auto;
            background-color: #fff5f5;
            color: #ff502c;
            font-size: 0.87em;
            padding: 0.065em 0.4em;
          }

          a {
            color: #259;
            color: #0269c8;
            border-bottom: 1px solid #d1e9ff;
          }

          table {
            display: inline-block !important;
            font-size: 1rem;
            width: auto;
            max-width: 100%;
            overflow: auto;
            border: 1px solid #f6f6f6;
          }

          thead {
            background: #f6f6f6;
            color: #000;
            text-align: left;
          }

          tr {
            &:nth-child(2n) {
              background-color: #fcfcfc;
            }
          }

          td {
            min-width: 10rem;
          }

          blockquote {
            margin: 1em 0;
            border-left: 4px solid #ddd;
            padding: 0 1.3rem;
            color: #666;
            padding: 1px 23px;
            margin: 22px 0;
            border-left: 4px solid #cbcbcb;
            background-color: #f8f8f8;

            & > p {
              margin: 0.6rem 0;
              margin: 10px 0;
            }

            &:after {
              display: block;
              content: "";
            }

            &.warning {
              position: relative;
              border-left-color: #f75151;
              margin-left: 8px;

              &:before {
                position: absolute;
                top: 14px;
                left: -12px;
                background: #f75151;
                border-radius: 50%;
                content: "!";
                width: 20px;
                height: 20px;
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
              }
            }
          }

          .hljs-subst {
            font-weight: 400;
          }

          .hljs-meta {
            color: #999;
            font-weight: 700;
          }

          .hljs-deletion {
            background: #fdd;
          }

          .hljs-addition {
            background: #dfd;
          }

          .hljs-emphasis {
            font-style: italic;
          }

          .hljs-strong {
            font-weight: 700;
          }

          ol {
            li {
              padding-left: 6px;
            }
          }

          h2 {
            padding-bottom: 12px;
            font-size: 24px;
            border-bottom: 1px solid #ececec;
          }

          h3 {
            font-size: 18px;
            padding-bottom: 0;
          }

          h4 {
            font-size: 16px;
          }

          h5 {
            font-size: 15px;
          }

          h6 {
            margin-top: 5px;
          }

          .heading {
            & + .heading {
              margin-top: 0;
            }
          }
        }

        .article-content embed,
        .article-content iframe,
        .article-content img:not(.equation),
        .article-content video {
          max-width: 100% !important;
          margin: 0;
        }

        .article-content code,
        .article-content pre {
          font-family: Menlo, Monaco, Consolas, Courier New, monospace;
        }

        .article-content a:active,
        .article-content a:hover {
          color: #275b8c;
        }

        .article-content td,
        .article-content th {
          padding: 1rem 0.6rem;
          line-height: 2rem;
        }

        .article-content ol,
        .article-content ul {
          padding-left: 2.7rem;
          padding-left: 28px;
        }

        .article-content ol li,
        .article-content ul li {
          margin-bottom: 0.6rem;
          list-style: inherit;
        }

        .article-content ol ol,
        .article-content ol ul,
        .article-content ul ol,
        .article-content ul ul {
          margin-top: 0.27rem;
        }

        .article-content .hljs-comment,
        .article-content .hljs-quote {
          color: #998;
        }

        .article-content .hljs-keyword,
        .article-content .hljs-selector-tag,
        .article-content .hljs-subst {
          color: #333;
          font-weight: 700;
        }

        .article-content .hljs-literal,
        .article-content .hljs-number,
        .article-content .hljs-tag .hljs-attr,
        .article-content .hljs-template-variable,
        .article-content .hljs-variable {
          color: teal;
        }

        .article-content .hljs-doctag,
        .article-content .hljs-string {
          color: #d14;
        }

        .article-content .hljs-section,
        .article-content .hljs-selector-id,
        .article-content .hljs-title {
          color: #900;
          font-weight: 700;
        }

        .article-content .hljs-class .hljs-title,
        .article-content .hljs-type {
          color: #458;
          font-weight: 700;
        }

        .article-content .hljs-attribute,
        .article-content .hljs-name,
        .article-content .hljs-tag {
          color: navy;
          font-weight: 400;
        }

        .article-content .hljs-link,
        .article-content .hljs-regexp {
          color: #009926;
        }

        .article-content .hljs-bullet,
        .article-content .hljs-symbol {
          color: #990073;
        }

        .article-content .hljs-built_in,
        .article-content .hljs-builtin-name {
          color: #0086b3;
        }

        .article-content ol li.task-list-item,
        .article-content ul li.task-list-item {
          list-style: none;
        }

        .article-content ol li.task-list-item ol,
        .article-content ol li.task-list-item ul,
        .article-content ul li.task-list-item ol,
        .article-content ul li.task-list-item ul {
          margin-top: 0;
        }

        .article-content h1,
        .article-content h2,
        .article-content h3,
        .article-content h4,
        .article-content h5,
        .article-content h6 {
          color: #333;
          line-height: 1.5;
          margin-top: 35px;
          margin-bottom: 10px;
          padding-bottom: 5px;
        }
      }
    }
  }
}
</style>
