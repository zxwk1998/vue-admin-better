<template>
  <div class="icon-container">
    <el-row :gutter="15">
      <el-col :span="24">
        <el-divider content-position="left">点击图标即可复制源码</el-divider>
      </el-col>
      <el-col :span="24">
        <el-form :inline="true" label-width="80px" @submit.native.prevent>
          <el-form-item label="图标名称">
            <el-input v-model="queryForm.title"></el-input>
          </el-form-item>
          <el-form-item label-width="0">
            <el-button native-type="submit" type="primary" @click="queryData"
              >搜索
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>

      <el-col
        v-for="(item, index) in queryIcon"
        :key="index"
        :xs="6"
        :sm="8"
        :md="3"
        :lg="2"
        :xl="2"
      >
        <el-card
          shadow="hover"
          style="cursor: pointer;"
          @click.native="handleCopyIcon(index, $event)"
        >
          <byui-icon :icon="['fas', item]" />
        </el-card>
        <div class="icon-text">{{ item }}</div>
      </el-col>
      <el-col :span="24">
        <el-pagination
          :background="background"
          :current-page="queryForm.pageNo"
          :page-size="queryForm.pageSize"
          :page-sizes="[72, 144, 216, 288]"
          :layout="layout"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import clip from "@/utils/clipboard";
import { getIconList } from "@/api/icon";

export default {
  name: "Icon",
  data() {
    return {
      copyText: "",
      layout: "total, sizes, prev, pager, next, jumper",
      total: 0,
      background: true,
      height: 0,
      selectRows: "",
      elementLoadingText: "正在加载...",
      queryIcon: [],
      queryForm: {
        pageNo: 1,
        pageSize: 72,
        title: "",
      },
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
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
      getIconList(this.queryForm).then((res) => {
        const data = res.data;
        this.queryIcon = data;
        this.allIcon = data;
        this.total = res.totalCount;
      });
    },
    handleCopyIcon(index, event) {
      const copyText = `<byui-icon :icon="['fas', '${this.queryIcon[index]}']"></byui-icon>`;
      this.copyText = copyText;
      clip(copyText, event);
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-container {
  ::v-deep {
    .el-card__body {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center; /* 垂直居中 */
      justify-content: center; /* 水平居中 */

      svg:not(:root).svg-inline--fa {
        font-size: 30px;
        font-weight: bold;
        color: $base-color-gray;
        text-align: center;
        vertical-align: middle;
        pointer-events: none;
        cursor: pointer;
      }
    }
  }

  .icon-text {
    height: 30px;
    margin-top: -15px;
    overflow: hidden;
    font-size: 12px;
    line-height: 30px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
