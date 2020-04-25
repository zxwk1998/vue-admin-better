<template>
  <div class="card-container">
    <el-row :gutter="15">
      <el-col
        v-for="(item, index) in list"
        :key="index"
        :xs="24"
        :sm="8"
        :md="8"
        :lg="8"
        :xl="4"
      >
        <el-card shadow="hover">
          <div slot="header">
            <span>{{ item.title }}</span>
          </div>
          <div style="width: 100%; height: 200px;">
            <byui-image
              :big-src="item.img"
              :percent="item.percent"
              :small-src="item.smalImg"
              @clickBig="bigClick(item)"
              @clickSmall="smallClick(item)"
            ></byui-image>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-pagination
      :background="background"
      :current-page="pageNo"
      :layout="layout"
      :page-size="pageSize"
      :total="total"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    ></el-pagination>
  </div>
</template>

<script>
import { getList } from "@/api/table";
import ByuiImage from "@/components/ByuiImage";

export default {
  name: "Card",
  components: {
    ByuiImage,
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger",
      };
      return statusMap[status];
    },
  },
  data() {
    return {
      value: true,
      currentDate: new Date(),
      list: null,
      listLoading: true,
      pageNo: 1,
      pageSize: 10,
      layout: "total, sizes, prev, pager, next, jumper",
      total: 0,
      background: true,
      height: 0,
      elementLoadingText: "正在加载...",
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  created() {
    this.fetchData();
    this.height = this.$baseTableHeight(1);
  },
  methods: {
    bigClick(val) {
      this.$baseAlert("点击了大图");
    },
    smallClick(val) {
      this.$baseAlert("点击了小图");
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.pageNo = val;
      this.fetchData();
    },
    fetchData() {
      this.listLoading = true;
      getList({ pageNo: this.pageNo, pageSize: this.pageSize }).then((res) => {
        this.list = res.data;
        this.total = res.totalCount;
        setTimeout(() => {
          this.listLoading = false;
        }, 500);
      });
    },
  },
};
</script>
<style lang="scss" scoped></style>
