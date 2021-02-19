<template>
  <div class="markdown-editor-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <vab-markdown-editor
          ref="mde"
          v-model="value"
          @show-html="handleShowHtml"
        ></vab-markdown-editor>
        <el-button @click="handleAddText">增加文本</el-button>
        <el-button @click="handleAddImg">增加图片</el-button>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <el-card shadow="hover">
          <div slot="header">
            <span>markdown转换html实时演示区域</span>
          </div>
          <div v-html="html"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import VabMarkdownEditor from '@/plugins/vabMarkdownEditor'

  export default {
    name: 'MarkdownEditor',
    components: { VabMarkdownEditor },
    data() {
      return {
        value: '# vue-admin-beautiful',
        html: '<h1 id="vue-admin-beautiful">vue-admin-beautiful</h1>',
      }
    },
    methods: {
      handleAddText() {
        this.$refs.mde.add('\n### 新增加的内容')
      },
      handleAddImg() {
        this.$refs.mde.add(
          '\n![](https://gitee.com/chu1204505056/image/raw/master/qq_group/vab-2.png)'
        )
      },
      handleShowHtml(html) {
        this.html = html
      },
    },
  }
</script>
