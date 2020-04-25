<template>
  <div class="element-container">
    <el-row :gutter="15">
      <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="16">
        <el-button type="primary" @click="dialogVisible = !dialogVisible"
          >element全部文档点这里
        </el-button>
        <el-dialog
          :fullscreen="true"
          title="element文档"
          :visible.sync="dialogVisible"
        >
          <iframe
            style="
              position: absolute;
              top: 55px;
              right: 0;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 89vh;
            "
            src="https://chu1204505056.gitee.io/element/#/zh-CN/component/installation"
            frameborder="0"
          ></iframe>
        </el-dialog>
        <el-divider content-position="left"
          >Tag 标签
          <a
            target="_blank"
            href="https://chu1204505056.gitee.io/element/#/zh-CN/component/tag"
          >
            文档
          </a>
        </el-divider>
        <el-tag>标签一</el-tag>
        <el-tag type="success">标签二</el-tag>
        <el-tag type="info">标签三</el-tag>
        <el-tag type="warning">标签四</el-tag>
        <el-tag type="danger">标签五</el-tag>
        <el-tag effect="dark">标签一</el-tag>
        <el-tag effect="dark" type="success">标签二</el-tag>
        <el-tag effect="dark" type="info">标签三</el-tag>
        <el-tag effect="dark" type="warning">标签四</el-tag>
        <el-tag effect="dark" type="danger">标签五</el-tag>

        <el-divider content-position="left"
          >进度条
          <a
            target="_blank"
            href="https://chu1204505056.gitee.io/element/#/zh-CN/component/progress"
          >
            文档
          </a>
        </el-divider>
        <el-progress :percentage="50"></el-progress>
        <el-progress :percentage="100" status="success"></el-progress>
        <el-progress :percentage="100" status="warning"></el-progress>
        <el-progress :percentage="50" status="exception"></el-progress>
        <el-progress
          :text-inside="true"
          :stroke-width="26"
          :percentage="70"
        ></el-progress>
        <el-progress
          :text-inside="true"
          :stroke-width="24"
          :percentage="100"
          status="success"
        ></el-progress>
        <el-progress
          :text-inside="true"
          :stroke-width="22"
          :percentage="80"
          status="warning"
        ></el-progress>
        <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="50"
          status="exception"
        ></el-progress>
        <el-progress type="circle" :percentage="0"></el-progress>
        <el-progress type="circle" :percentage="25"></el-progress>
        <el-progress
          type="circle"
          :percentage="100"
          status="success"
        ></el-progress>
        <el-progress
          type="circle"
          :percentage="70"
          status="warning"
        ></el-progress>
        <el-progress
          type="circle"
          :percentage="50"
          status="exception"
        ></el-progress>

        <el-divider content-position="left"
          >按钮
          <a
            target="_blank"
            href="https://chu1204505056.gitee.io/element/#/zh-CN/component/button"
          >
            文档
          </a>
        </el-divider>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
        <el-button plain>朴素按钮</el-button>
        <el-button type="primary" plain>主要按钮</el-button>
        <el-button type="success" plain>成功按钮</el-button>
        <el-button type="info" plain>信息按钮</el-button>
        <el-button type="warning" plain>警告按钮</el-button>
        <el-button type="danger" plain>危险按钮</el-button>
        <el-button round>圆角按钮</el-button>
        <el-button type="primary" round>主要按钮</el-button>
        <el-button type="success" round>成功按钮</el-button>
        <el-button type="info" round>信息按钮</el-button>
        <el-button type="warning" round>警告按钮</el-button>
        <el-button type="danger" round>危险按钮</el-button>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
        <el-button disabled>默认按钮</el-button>
        <el-button type="primary" disabled>主要按钮</el-button>
        <el-button type="success" disabled>成功按钮</el-button>
        <el-button type="info" disabled>信息按钮</el-button>
        <el-button type="warning" disabled>警告按钮</el-button>
        <el-button type="danger" disabled>危险按钮</el-button>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary"
          >上传<i class="el-icon-upload el-icon--right"></i
        ></el-button>
        <el-button type="primary" :loading="true">加载中</el-button>

        <el-divider content-position="left"
          >文字链接
          <a
            target="_blank"
            href="https://chu1204505056.gitee.io/element/#/zh-CN/component/link"
          >
            文档
          </a>
        </el-divider>
        <el-link href="https://element.eleme.io" target="_blank"
          >默认链接
        </el-link>
        <el-link type="primary">主要链接</el-link>
        <el-link type="success">成功链接</el-link>
        <el-link type="warning">警告链接</el-link>
        <el-link type="danger">危险链接</el-link>
        <el-link type="info">信息链接</el-link>
        <el-link disabled>默认链接</el-link>
        <el-link type="primary" disabled>主要链接</el-link>
        <el-link type="success" disabled>成功链接</el-link>
        <el-link type="warning" disabled>警告链接</el-link>
        <el-link type="danger" disabled>危险链接</el-link>
        <el-link type="info" disabled>信息链接</el-link>
        <el-link :underline="false">无下划线</el-link>
        <el-link>有下划线</el-link>
        <el-divider content-position="left"
          >头像
          <a
            target="_blank"
            href="https://chu1204505056.gitee.io/element/#/zh-CN/component/avatar"
          >
            文档
          </a>
        </el-divider>
        <el-avatar icon="el-icon-user-solid"></el-avatar>
        <el-divider content-position="left"
          >步骤条
          <a
            target="_blank"
            href="https://chu1204505056.gitee.io/element/#/zh-CN/component/page-header"
          >
            文档
          </a>
        </el-divider>
        <el-page-header content="详情页面"></el-page-header>
        <el-divider content-position="left"
          >面包屑
          <a
            target="_blank"
            href="https://chu1204505056.gitee.io/element/#/zh-CN/component/breadcrumb"
          >
            文档
          </a>
        </el-divider>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Element",
  components: {},
  data() {
    return {
      dialogVisible: false,
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.element-container {
  ::v-deep {
    .el-dialog__wrapper {
      position: fixed;
      top: 20px;
      right: 20px;
      bottom: 20px;
      left: 20px;
    }

    .el-tag,
    .el-button,
    .el-link {
      margin: 5px;
    }

    .el-progress {
      margin: 20px;
    }
  }
}
</style>
