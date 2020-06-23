<template>
  <div class="markdown-container markdown-body">
    <el-select v-model="value" placeholder="请选择" @change="handleChange">
      <el-option
        v-for="(item, index) in options"
        :key="index"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <div v-html="prettierList"></div>
  </div>
</template>

<script>
import marked from "marked";
import "github-markdown-css/github-markdown.css";
import md from "./js/markdown";

export default {
  name: "Markdown",
  data() {
    return {
      listLoading: true,
      elementLoadingText: "正在加载...",
      options: [
        {
          value: "0",
          label: "Prettier",
        },
      ],
      value: "0",
      prettierList: null,
    };
  },
  created() {
    this.fetchData();
  },
  mounted() {},
  methods: {
    handleChange(val) {
      this.value = val;
      this.fetchData();
    },
    fetchData() {
      this.listLoading = true;
      switch (this.value) {
        case "0":
          this.prettierList = marked(md || "", {
            renderer: new marked.Renderer(),
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
          });

          break;
      }
      setTimeout(() => {
        this.listLoading = false;
      }, 500);
    },
  },
};
</script>
