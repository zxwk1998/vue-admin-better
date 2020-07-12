<template>
  <div class="export-merge-header-excel-container">
    <vab-query-form>
      <vab-query-form-left-panel :span="24">
        <el-button
          :loading="downloadLoading"
          type="primary"
          @click="handleDownload"
          >导出
        </el-button>
      </vab-query-form-left-panel>
    </vab-query-form>

    <el-table ref="multipleTable" v-loading="listLoading" :data="list">
      <el-table-column show-overflow-tooltip label="序号" width="55">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column show-overflow-tooltip label="Main Information">
        <el-table-column show-overflow-tooltip label="Title">
          <template slot-scope="scope">
            {{ scope.row.title }}
          </template>
        </el-table-column>
        <el-table-column show-overflow-tooltip label="Author">
          <template slot-scope="scope">
            <el-tag>{{ scope.row.author }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column show-overflow-tooltip label="Readings">
          <template slot-scope="scope">
            {{ scope.row.pageViews }}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column show-overflow-tooltip label="Date">
        <template slot-scope="scope">
          <span>{{ scope.row.datetime }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from "@/api/table";
import { parseTime } from "@/utils";

export default {
  name: "MergeHeader",
  data() {
    return {
      list: null,
      listLoading: true,
      downloadLoading: false,
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
    async handleDownload() {
      this.downloadLoading = true;
      const { export_json_to_excel } = await import("@/vendor/ExportExcel");
      const multiHeader = [["Id", "Main Information", "", "", "Date"]];
      const header = ["", "Title", "Author", "Readings", ""];
      const filterVal = ["id", "title", "author", "pageViews", "datetime"];
      const list = this.list;
      const data = this.formatJson(filterVal, list);
      const merges = ["A1:A2", "B1:D1", "E1:E2"];
      export_json_to_excel({
        multiHeader,
        header,
        merges,
        data,
      });
      this.downloadLoading = false;
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          if (j === "timestamp") {
            return parseTime(v[j]);
          } else {
            return v[j];
          }
        })
      );
    },
  },
};
</script>
