<template>
  <div class="select-excel-container">
    <byui-query-form>
      <byui-query-form-left-panel>
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
      </byui-query-form-left-panel>
    </byui-query-form>

    <el-table
      ref="multipleTable"
      v-loading="listLoading"
      :data="list"
      :element-loading-text="elementLoadingText"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" />
      <el-table-column label="序号" width="55">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="标题">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="作者">
        <template slot-scope="scope">
          <el-tag>{{ scope.row.author }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="访问量" width="115">
        <template slot-scope="scope">
          {{ scope.row.pageViews }}
        </template>
      </el-table-column>
      <el-table-column label="时间">
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
    fetchData() {
      this.listLoading = true;
      getList(this.listQuery).then((response) => {
        this.list = response.data;
        this.listLoading = false;
      });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleDownload() {
      if (this.multipleSelection.length) {
        this.downloadLoading = true;
        import("@/vendor/Export2Excel").then((excel) => {
          const tHeader = ["Id", "Title", "Author", "Readings", "Date"];
          const filterVal = ["id", "title", "author", "pageViews", "datetime"];
          const list = this.multipleSelection;
          const data = this.formatJson(filterVal, list);
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: this.filename,
          });
          this.$refs.multipleTable.clearSelection();
          this.downloadLoading = false;
        });
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
