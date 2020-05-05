<template>
  <div class="export-excel-container">
    <byui-query-form>
      <byui-query-form-left-panel :span="24">
        <el-form :inline="true" @submit.native.prevent>
          <el-form-item label="文件名">
            <el-input v-model="filename" placeholder="请输出要导出文件的名称" />
          </el-form-item>
          <el-form-item label="文件类型">
            <el-select v-model="bookType">
              <el-option
                v-for="item in options"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="自动列宽">
            <el-radio-group v-model="autoWidth">
              <el-radio :label="true">
                是
              </el-radio>
              <el-radio :label="false">
                否
              </el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="handleDownload">
              导出 Excel
            </el-button>
          </el-form-item>
        </el-form>
      </byui-query-form-left-panel>
    </byui-query-form>

    <el-table
      v-loading="listLoading"
      :data="list"
      :element-loading-text="elementLoadingText"
    >
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
      <el-table-column label="访问量">
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
  name: "ExportExcel",
  data() {
    return {
      list: null,
      listLoading: true,
      downloadLoading: false,
      filename: "",
      autoWidth: true,
      bookType: "xlsx",
      elementLoadingText: "正在加载...",
      options: ["xlsx", "csv", "txt"],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getList().then((response) => {
        this.list = response.data;
        this.listLoading = false;
      });
    },
    handleDownload() {
      this.downloadLoading = true;
      import("@/vendor/Export2Excel").then((excel) => {
        const tHeader = ["Id", "Title", "Author", "Readings", "Date"];
        const filterVal = ["id", "title", "author", "pageViews", "datetime"];
        const list = this.list;
        const data = this.formatJson(filterVal, list);
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth,
          bookType: this.bookType,
        });
        this.downloadLoading = false;
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          return v[j];
        })
      );
    },
  },
};
</script>
