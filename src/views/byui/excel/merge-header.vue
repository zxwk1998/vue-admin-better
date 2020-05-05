<template>
  <div class="merge-header-container">
    <byui-query-form>
      <byui-query-form-left-panel :span="24">
        <el-button
          :loading="downloadLoading"
          type="primary"
          @click="handleDownload"
          >导出
        </el-button>
      </byui-query-form-left-panel>
    </byui-query-form>

    <el-table ref="multipleTable" v-loading="listLoading" :data="list">
      <el-table-column label="序号" width="55">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="Main Information">
        <el-table-column label="Title">
          <template slot-scope="scope">
            {{ scope.row.title }}
          </template>
        </el-table-column>
        <el-table-column label="Author">
          <template slot-scope="scope">
            <el-tag>{{ scope.row.author }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="Readings">
          <template slot-scope="scope">
            {{ scope.row.pageViews }}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="Date">
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
    fetchData() {
      this.listLoading = true;
      getList(this.listQuery).then((response) => {
        this.list = response.data;
        this.listLoading = false;
      });
    },
    handleDownload() {
      this.downloadLoading = true;
      import("@/vendor/Export2Excel").then((excel) => {
        const multiHeader = [["Id", "Main Information", "", "", "Date"]];
        const header = ["", "Title", "Author", "Readings", ""];
        const filterVal = ["id", "title", "author", "pageViews", "datetime"];
        const list = this.list;
        const data = this.formatJson(filterVal, list);
        const merges = ["A1:A2", "B1:D1", "E1:E2"];
        excel.export_json_to_excel({
          multiHeader,
          header,
          merges,
          data,
        });
        this.downloadLoading = false;
      });
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
