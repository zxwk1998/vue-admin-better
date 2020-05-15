<template>
  <div class="goodsDetail-container">
    <byui-query-form>
      <byui-query-form-left-panel :span="12">
        <el-button icon="el-icon-plus" type="primary" @click="handleEdit"
          >添加</el-button
        >
        <el-button icon="el-icon-delete" type="danger" @click="handleDelete"
          >批量删除
        </el-button>
      </byui-query-form-left-panel>
      <byui-query-form-right-panel :span="12">
        <el-form :inline="true" :model="queryForm" @submit.native.prevent>
          <el-form-item>
            <el-input
              v-model.trim="queryForm.id"
              placeholder="请输入查询条件"
              clearable
            />
          </el-form-item>
          <el-form-item>
            <el-button icon="el-icon-search" type="primary" @click="queryData"
              >查询
            </el-button>
          </el-form-item>
        </el-form>
      </byui-query-form-right-panel>
    </byui-query-form>

    <el-table
      v-loading="listLoading"
      :data="list"
      :element-loading-text="elementLoadingText"
      @selection-change="setSelectRows"
    >
      <el-table-column type="selection"></el-table-column>
      <el-table-column prop="id" label="id" />
      <el-table-column fixed="right" label="操作" width="200">
        <template v-slot="scope">
          <el-button type="text" @click="handleEdit(scope.row)"
            >编辑
          </el-button>
          <el-button type="text" @click="handleDelete(scope.row)"
            >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      :current-page="queryForm.pageNo"
      :page-size="queryForm.pageSize"
      :layout="layout"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getList } from "@/api/goodsDetail";

export default {
  name: "GoodsDetail",
  data() {
    return {
      list: null,
      listLoading: true,
      layout: "total, sizes, prev, pager, next, jumper",
      total: 0,
      selectRows: "",
      elementLoadingText: "正在加载...",
      queryForm: {
        pageNo: 1,
        pageSize: 10,
        id: "",
      },
    };
  },
  created() {
    this.fetchData();
  },
  methods: {},
};
</script>
