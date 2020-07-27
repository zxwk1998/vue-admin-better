<template>
  <div class="blacklist-container">
    <el-divider content-position="left">
      vue-admin-beautiful禁止以下人员使用
    </el-divider>
    <el-alert :closable="false">
      这世界嘲笑你的人有很多，你又不是圣人，干嘛对每个人都仁慈，面对无端的辱骂和攻击，你只能选择将他记在这里，时刻提醒自己。
    </el-alert>
    <br />
    <el-table :data="tableData" style="width: 100%;">
      <el-table-column prop="name" label="QQ昵称" width="180"></el-table-column>
      <el-table-column prop="qq" label="QQ号" width="180"></el-table-column>
      <el-table-column prop="excuse" label="是否可原谅"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { getList } from "@/api/blacklist";
  export default {
    name: "Blacklist",
    components: {},
    data() {
      return { tableData: [] };
    },
    created() {
      this.fetchData();
    },
    mounted() {},
    methods: {
      fetchData() {
        getList().then(({ data }) => {
          this.tableData = data;
        });
      },
    },
  };
</script>
