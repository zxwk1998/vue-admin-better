<template>
  <div>
    <div slot="header" class="clearfix" style="margin-bottom: 15px;">
      <el-button type="primary" @click="prettierJSON">生成表格</el-button>
    </div>
    <json-editor v-model="value" @change="prettierNewJSON" />
  </div>
</template>

<script>
  import JsonEditor from "@/components/JsonEditor/index";

  const jsonData =
    '{"code": 200, "msg": "操作成功", "pageNo": 1, "pageSize": 10, "totalPages": 4, "totalCount": 238, "data": [{"id": "", "title": "", "status": "", "author": "", "datetime": "", "pageViews": "", "img": "", "switch": ""}]}';

  export default {
    components: { JsonEditor },
    data() {
      return {
        value: JSON.parse(jsonData),
      };
    },
    computed: {},
    created() {
      this.prettierJSON();
    },

    methods: {
      prettierJSON() {
        this.$emit("change", jsonData);
      },
      prettierNewJSON(jsonData) {
        this.$emit("change", jsonData);
      },
    },
  };
</script>
