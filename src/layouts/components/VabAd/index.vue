<template>
  <div class="vab-ad">
    <el-carousel v-if="adList" :autoplay="true" :interval="3000" direction="vertical" height="30px" indicator-position="none">
      <el-carousel-item v-for="(item, index) in adList" :key="index">
        <el-tag type="warning">付费版本 Ad</el-tag>
        <a :href="item.url" target="_blank">{{ item.title }}</a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
  import { getList } from '@/api/ad'

  export default {
    name: 'VabAd',
    data() {
      return {
        nodeEnv: process.env.NODE_ENV,
        adList: [],
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      async fetchData() {
        const { data } = await getList()
        this.adList = data
      },
    },
  }
</script>
<style lang="scss" scoped>
  .vab-ad {
    margin-top: 7px;
    height: 30px;
    padding-right: $base-padding;
    padding-left: $base-padding;
    margin-bottom: -20px;
    line-height: 32px;
    cursor: pointer;

    a {
      margin-left: 5px;
      color: #888;
    }

    ::v-deep {
      .el-carousel__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
</style>
