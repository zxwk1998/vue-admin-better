<template>
  <div class="export-select-excel-container">
    <vab-query-form>
      <vab-query-form-left-panel>
        <el-form :inline="true" @submit.native.prevent>
          <el-form-item>
            <el-input v-model="filename" placeholder="请输出要导出文件的名称" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleDownload">
              导出选中行
            </el-button>
          </el-form-item>
        </el-form>
      </vab-query-form-left-panel>
    </vab-query-form>

    <el-table
      ref="multipleTable"
      v-loading="listLoading"
      :data="list"
      :element-loading-text="elementLoadingText"
      @selection-change="handleSelectionChange"
    >
      <el-table-column show-overflow-tooltip type="selection" />
      <el-table-column show-overflow-tooltip label="序号" width="55">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column show-overflow-tooltip label="标题">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column show-overflow-tooltip label="作者">
        <template slot-scope="scope">
          <el-tag>{{ scope.row.author }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column show-overflow-tooltip label="访问量" width="115">
        <template slot-scope="scope">
          {{ scope.row.pageViews }}
        </template>
      </el-table-column>
      <el-table-column show-overflow-tooltip label="时间">
        <template slot-scope="scope">
          <span>{{ scope.row.datetime }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from "@/api/table";

export default {
  name: "SelectExcel",
  data() {
    return {
      list: null,
      listLoading: true,
      multipleSelection: [],
      downloadLoading: false,
      filename: "",
      elementLoadingText: "正在加载...",
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.listLoading = true;
      const { data } = await getList(this.listQuery);
      this.list = data;
      this.listLoading = false;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    async handleDownload() {
      if (this.multipleSelection.length) {
        this.downloadLoading = true;
        const { export_json_to_excel } = await import("@/vendor/ExportExcel");
        const tHeader = ["Id", "Title", "Author", "Readings", "Date"];
        const filterVal = ["id", "title", "author", "pageViews", "datetime"];
        const list = this.multipleSelection;
        const data = this.formatJson(filterVal, list);
        export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
        });
        this.$refs.multipleTable.clearSelection();
        this.downloadLoading = false;
      } else {
        this.$baseMessage("请至少选择一行", "error");
      }
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) => filterVal.map((j) => v[j]));
    },
  },
};
</script>
