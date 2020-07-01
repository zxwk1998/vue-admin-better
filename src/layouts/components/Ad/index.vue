<template>
  <el-carousel
    v-if="adList"
    height="30px"
    direction="vertical"
    :autoplay="true"
    :interval="3000"
    indicator-position="none"
  >
    <el-carousel-item v-for="(item, index) in adList" :key="index">
      <div class="vab-ad">
        <el-tag type="warning"> Ad</el-tag>
        <a target="_blank" :href="item.url"> {{ item.title }}</a>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
import { getList } from "@/api/ad";
export default {
  data() {
    return {
      adList: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const { data } = await getList();
      this.adList = data;
    },
  },
};
</script>
<style lang="scss" scoped>
.vab-ad {
  height: 30px;
  padding-right: $base-padding;
  padding-left: $base-padding;
  line-height: 30px;
  cursor: pointer;
  background: #eef1f6;

  a {
    color: #999;
  }
}
</style>
