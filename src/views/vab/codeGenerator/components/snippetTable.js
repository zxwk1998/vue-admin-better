import { genTableColumnSnippet } from "./snippetTableColumn";

export const genTableSnippet = (headers = "getList") => {
  return `<template>
  <div class="改成你的组件名-container">
    <vab-query-form>
      <vab-query-form-left-panel :span="12">
        <el-button icon="el-icon-plus" type="primary">添加</el-button>
        <el-button icon="el-icon-edit" type="warning">修改</el-button>
        <el-button
          icon="el-icon-delete"
          type="danger"
          @click="handleDelete"
        >批量删除
        </el-button
        >
      </vab-query-form-left-panel>
      <vab-query-form-right-panel :span="12">
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
      </vab-query-form-right-panel>
    </vab-query-form>

    <el-table
      v-loading="listLoading"
      :height="height"
      :data="list"
      :element-loading-text="elementLoadingText"
      @selection-change="setSelectRows"
    >
      <el-table-column show-overflow-tooltip type="selection"></el-table-column>
      ${genTableColumnSnippet(headers)}
      <el-table-column show-overflow-tooltip label="操作" width="200">
        <template #default="{row}">
          <el-button type="text" @click="editList(row)"
          >编辑
          </el-button
          >
          <el-button type="text" @click="tableDelete(row)"
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
    async  fetchData() {
        this.listLoading = true;
        const { data, totalCount }= await getList(this.queryForm);
        this.list = data;
        this.total = totalCount;
        setTimeout(() => {
          this.listLoading = false;
        }, 300);
      },
    },
  };
</script>
<style lang="scss" scoped></style>
`;
};
