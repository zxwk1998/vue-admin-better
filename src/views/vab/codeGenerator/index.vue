<template>
  <div class="code-generator-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="4" :lg="6" :xl="6">
        <TableEditor @change="setTableData" />
      </el-col>
      <el-col :xs="24" :sm="24" :md="20" :lg="18" :xl="18">
        <TableExhibition :table-data="tableData" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TableEditor from "./components/TableEditor";
import TableExhibition from "./components/TableExhibition";

export default {
  name: "Index",
  components: {
    TableEditor,
    TableExhibition,
  },
  data() {
    return {
      tableData: {},
      getTableAPI: "",
    };
  },
  methods: {
    setTableData(val) {
      this.tableData = JSON.parse(val);
    },
  },
};
</script>
