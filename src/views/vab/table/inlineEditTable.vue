<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      :element-loading-text="elementLoadingText"
    >
      <el-table-column
        show-overflow-tooltip
        type="selection"
        width="55"
      ></el-table-column>
      <el-table-column show-overflow-tooltip label="序号" width="95">
        <template #default="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column show-overflow-tooltip min-width="300px" label="标题">
        <template #default="{ row }">
          <template v-if="row.edit">
            <el-input v-model="row.title" style="width: 300px" />
            <el-button
              class="cancel-btn"
              type="warning"
              @click="cancelEdit(row)"
            >
              取消
            </el-button>
          </template>
          <span v-else>{{ row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        label="作者"
        prop="author"
      ></el-table-column>
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="操作"
        width="200"
      >
        <template #default="{ row }">
          <el-button
            v-if="row.edit"
            type="success"
            size="small"
            @click="confirmEdit(row)"
          >
            保存
          </el-button>
          <el-button
            v-else
            type="primary"
            size="small"
            icon="el-icon-edit"
            @click="row.edit = !row.edit"
          >
            编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { getList } from "@/api/table";

  export default {
    name: "InlineEditTable",
    data() {
      return {
        list: null,
        listLoading: true,
        elementLoadingText: "正在加载...",
        queryForm: {
          pageNo: 1,
          pageSize: 20,
          title: "",
        },
      };
    },
    created() {
      this.getList();
    },
    methods: {
      async getList() {
        this.listLoading = true;
        const { data } = await getList(this.queryForm);
        this.list = data.map((v) => {
          this.$set(v, "edit", false);
          v.originalTitle = v.title;
          return v;
        });
        this.listLoading = false;
      },
      cancelEdit(row) {
        row.title = row.originalTitle;
        row.edit = false;
      },
      confirmEdit(row) {
        row.edit = false;
        row.originalTitle = row.title;
      },
    },
  };
</script>
