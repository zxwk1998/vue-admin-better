<template>
  <div class="colorful-icon-container">
    <el-divider content-position="left"
      >小清新图标在演示环境中使用的是cdn加速服务，开发时需存储到本地，使用方法可查看群文档，点击图标即可复制源码，点击图标即可复制源码
    </el-divider>
    <el-row :gutter="15">
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

          <!-- <el-form-item label-width="0">
            <el-input :value="copyText" type="text"></el-input>
          </el-form-item>-->
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
          <byui-remix-icon
            :icon-class="`https://cdn.jsdelivr.net/gh/chuzhixin/zx-remixicon@master/src/icons/svg/${item}.svg`"
            @click.stop
          ></byui-remix-icon>
          <div class="icon-text">{{ item }}</div>
        </el-card>
      </el-col>

      <el-col :span="24">
        <el-pagination
          :background="background"
          :current-page="queryForm.pageNo"
          :page-size="queryForm.pageSize"
          :page-sizes="[60, 120, 180, 240]"
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
import { getIconList } from "@/api/remixIcon";
import clip from "@/utils/clipboard";

export default {
  name: "RemixIcon",
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
        pageSize: 60,
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
      //const copyText = `<byui-remixicon icon-class="https://cdn.jsdelivr.net/gh/chuzhixin/zx-remixicon@master/src/icons/svg/${this.queryIcon[index]}.svg" />`;
      const copyText = `<byui-remixicon icon-class="${this.queryIcon[index]}" />`;
      this.copyText = copyText;
      clip(copyText, event);
    },
  },
};
</script>

<style lang="scss" scoped>
.colorful-icon-container {
  ::v-deep {
    .el-card__body {
      display: flex;
      justify-content: center; /* 水平居中 */
      align-items: center; /* 垂直居中 */
      position: relative;
      flex-direction: column;

      svg:not(:root),
      .svg-external-icon {
        cursor: pointer;
        color: $base-color-gray;
        vertical-align: middle;
        text-align: center;
        font-size: 28px;
        font-weight: bold;
        pointer-events: none;
      }

      .icon-text {
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        height: 30px;
        line-height: 30px;
      }
    }
  }
}
</style>
