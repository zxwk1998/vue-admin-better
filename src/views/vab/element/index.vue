<template>
  <div class="element-container">
    <el-row :gutter="20">
      <el-col :lg="18" :md="18" :sm="24" :xl="16" :xs="24">
        <el-button type="primary" @click="dialogVisible = !dialogVisible">
          element全部文档点这里
        </el-button>
        <el-dialog :fullscreen="true" title="element文档" :visible.sync="dialogVisible">
          <iframe
            class="element-iframe"
            frameborder="0"
            src="https://element.eleme.cn/#/zh-CN/component/installation"
          ></iframe>
        </el-dialog>
        <el-divider content-position="left">
          Tag 标签
          <a href="https://element.eleme.cn/#/zh-CN/component/tag" target="_blank">文档</a>
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

        <el-divider content-position="left">
          进度条
          <a href="https://element.eleme.cn/#/zh-CN/component/progress" target="_blank">文档</a>
        </el-divider>
        <el-progress :percentage="50" />
        <el-progress :percentage="100" status="success" />
        <el-progress :percentage="100" status="warning" />
        <el-progress :percentage="50" status="exception" />
        <el-progress :percentage="70" :stroke-width="26" :text-inside="true" />
        <el-progress :percentage="100" status="success" :stroke-width="24" :text-inside="true" />
        <el-progress :percentage="80" status="warning" :stroke-width="22" :text-inside="true" />
        <el-progress :percentage="50" status="exception" :stroke-width="20" :text-inside="true" />
        <el-progress :percentage="0" type="circle" />
        <el-progress :percentage="25" type="circle" />
        <el-progress :percentage="100" status="success" type="circle" />
        <el-progress :percentage="70" status="warning" type="circle" />
        <el-progress :percentage="50" status="exception" type="circle" />

        <el-divider content-position="left">
          按钮
          <a href="https://element.eleme.cn/#/zh-CN/component/button" target="_blank">文档</a>
        </el-divider>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
        <el-button plain>朴素按钮</el-button>
        <el-button plain type="primary">主要按钮</el-button>
        <el-button plain type="success">成功按钮</el-button>
        <el-button plain type="info">信息按钮</el-button>
        <el-button plain type="warning">警告按钮</el-button>
        <el-button plain type="danger">危险按钮</el-button>
        <el-button round>圆角按钮</el-button>
        <el-button round type="primary">主要按钮</el-button>
        <el-button round type="success">成功按钮</el-button>
        <el-button round type="info">信息按钮</el-button>
        <el-button round type="warning">警告按钮</el-button>
        <el-button round type="danger">危险按钮</el-button>
        <el-button circle icon="el-icon-search" />
        <el-button circle icon="el-icon-edit" type="primary" />
        <el-button circle icon="el-icon-check" type="success" />
        <el-button circle icon="el-icon-message" type="info" />
        <el-button circle icon="el-icon-star-off" type="warning" />
        <el-button circle icon="el-icon-delete" type="danger" />
        <el-button disabled>默认按钮</el-button>
        <el-button disabled type="primary">主要按钮</el-button>
        <el-button disabled type="success">成功按钮</el-button>
        <el-button disabled type="info">信息按钮</el-button>
        <el-button disabled type="warning">警告按钮</el-button>
        <el-button disabled type="danger">危险按钮</el-button>
        <el-button icon="el-icon-edit" type="primary" />
        <el-button icon="el-icon-share" type="primary" />
        <el-button icon="el-icon-delete" type="primary" />
        <el-button icon="el-icon-search" type="primary">搜索</el-button>
        <el-button type="primary">
          上传
          <i class="el-icon-upload el-icon--right"></i>
        </el-button>
        <el-button :loading="true" type="primary">加载中</el-button>

        <el-divider content-position="left">
          文字链接
          <a href="https://element.eleme.cn/#/zh-CN/component/link" target="_blank">文档</a>
        </el-divider>
        <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
        <el-link type="primary">主要链接</el-link>
        <el-link type="success">成功链接</el-link>
        <el-link type="warning">警告链接</el-link>
        <el-link type="danger">危险链接</el-link>
        <el-link type="info">信息链接</el-link>
        <el-link disabled>默认链接</el-link>
        <el-link disabled type="primary">主要链接</el-link>
        <el-link disabled type="success">成功链接</el-link>
        <el-link disabled type="warning">警告链接</el-link>
        <el-link disabled type="danger">危险链接</el-link>
        <el-link disabled type="info">信息链接</el-link>
        <el-link :underline="false">无下划线</el-link>
        <el-link>有下划线</el-link>
        <el-divider content-position="left">
          头像
          <a href="https://element.eleme.cn/#/zh-CN/component/avatar" target="_blank">文档</a>
        </el-divider>
        <el-avatar icon="el-icon-user-solid" />
        <el-divider content-position="left">
          页头
          <a href="https://element.eleme.cn/#/zh-CN/component/page-header" target="_blank">文档</a>
        </el-divider>
        <el-page-header content="详情页面" />
        <el-divider content-position="left">
          面包屑
          <a href="https://element.eleme.cn/#/zh-CN/component/breadcrumb" target="_blank">文档</a>
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
    name: 'Element',
    components: {},
    data() {
      return {
        dialogVisible: false,
      }
    },
    created() {},
    mounted() {},
    methods: {},
  }
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

    .element-iframe {
      position: absolute;
      top: 55px;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 89vh;
    }
  }
</style>
