import { genTableColumnSnippet } from "./snippetTableColumn";

export const genTableSnippet = (headers = "getList") => {
  return `<template>
  <div class="改成你的组件名-container">
    <byui-query-form>
      <byui-query-form-left-panel :span="12">
        <el-button icon="el-icon-plus" type="primary">添加</el-button>
        <el-button icon="el-icon-edit" type="warning">修改</el-button>
        <el-button
          icon="el-icon-delete"
          type="danger"
          @click="handleDelete"
        >批量删除
        </el-button
        >
      </byui-query-form-left-panel>
      <byui-query-form-right-panel :span="12">
        <el-form :inline="true" :model="queryForm" @submit.native.prevent>
          <el-form-item>
            <el-input
              v-model.trim="queryForm.${headers[0].key}"
              placeholder="请输入查询条件"
              clearable
            />
          </el-form-item>
          <el-form-item>
            <el-button
              icon="el-icon-search"
              type="primary"
              @click="queryData"
            >查询
            </el-button
            >
          </el-form-item>
        </el-form>
      </byui-query-form-right-panel>
    </byui-query-form>

    <el-table
      v-loading="listLoading"
      :height="height"
      :data="list"
      :element-loading-text="elementLoadingText"
      @selection-change="setSelectRows"
    >
      <el-table-column type="selection"></el-table-column>
      ${genTableColumnSnippet(headers)}
      <el-table-column fixed="right" label="操作" width="150" fixed="right">
        <template v-slot="scope">
          <el-button type="text" @click="editList(scope.row)"
          >编辑
          </el-button
          >
          <el-button type="text" @click="tableDelete(scope.row)"
          >删除
          </el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :background="background"
      :current-page="queryForm.pageNo"
      :page-size="queryForm.pageSize"
      :layout="layout"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>

  import { getList } from "@/api/table";

  export default {
    name: "这里会报错,记住,你的view名称与文件夹名称相同不要忘了首字母大写,且唯一",
    data() {
      return {
        list: null,
        listLoading: true,
        layout: "total, sizes, prev, pager, next, jumper",
        total: 0,
        background: true,
        height: 0,
        selectRows: "",
        elementLoadingText: "正在加载...",
        queryForm: {
          pageNo: 1,
          pageSize: 10,
          ${headers[0].key} : "",
    }
    };
    },
    created() {
      this.fetchData();
      this.height = this.$baseTableHeight(1);
    },
    methods: {
      setSelectRows(val) {
        this.selectRows = val;
      },
      editList(row) {
      },
      handleDelete() {
        if (this.selectRows.length > 0) {
          const ids = this.selectRows.map(item => item.id).join();
          this.$baseConfirm(
            "你确定要删除选中项吗",
            null,
            () => {
              alert(ids);
            },
            () => {
              alert("点击了取消");
            },
          );
        } else {
          this.$baseMessage("未选中任何行", "error");
          return false;
        }
      },
      tableDelete(row) {
        alert(row.id);
      },
      handleSizeChange(val) {
        this.queryForm.pageSize = val;
        this.fetchData();
      },
      handleCurrentChange(val) {
        this.queryForm.pageNo = val;
        this.fetchData();
      },
      queryData() {
        this.queryForm.pageNo = 1;
        this.fetchData();
      },
      fetchData() {
        this.listLoading = true;
        getList(this.queryForm).then(res => {
          this.list = res.data;
          this.total = res.totalCount;
          setTimeout(_ => {
            this.listLoading = false;
          }, 300);
        });
      },
    },
  };
</script>
<style lang="scss" scoped></style>
`;
};
