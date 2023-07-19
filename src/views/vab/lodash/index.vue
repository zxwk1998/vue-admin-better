<template>
  <div class="lodash-container">
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card shadow="hover">
          <el-link
            href="https://www.lodashjs.com/"
            target="_blank"
            type="primary"
          >
            lodashjs官网
          </el-link>
        </el-card>
      </el-col>

      <el-col :lg="8" :md="12" :sm="24" :xl="6" :xs="24">
        <el-card shadow="hover">
          <div slot="header">
            <span>去除数组array中的最后一个元素</span>
          </div>
          <div class="lodash-content">
            this.$baseLodash.initial([1, 2, 3])
            <br />
            // => [1, 2]
          </div>
        </el-card>
      </el-col>

      <el-col :lg="8" :md="12" :sm="24" :xl="6" :xs="24">
        <el-card shadow="hover">
          <div slot="header">
            <span>返回数组 array的第一个元素</span>
          </div>
          <div class="lodash-content">
            this.$baseLodash.head([1, 2, 3])
            <br />
            // => 1
          </div>
        </el-card>
      </el-col>

      <el-col :lg="8" :md="12" :sm="24" :xl="6" :xs="24">
        <el-card shadow="hover">
          <div slot="header">
            <span>合并数组</span>
          </div>
          <div class="lodash-content">
            this.$baseLodash.concat([1],[2])
            <br />
            // => [1,2]
          </div>
        </el-card>
      </el-col>

      <el-col :lg="8" :md="12" :sm="24" :xl="6" :xs="24">
        <el-card shadow="hover">
          <div slot="header">
            <span>左切片</span>
          </div>
          <div class="lodash-content">
            this.$baseLodash.drop([1, 2, 3],2切除的数量)
            <br />
            // => [3]
          </div>
        </el-card>
      </el-col>

      <el-col :lg="8" :md="12" :sm="24" :xl="6" :xs="24">
        <el-card shadow="hover">
          <div slot="header">
            <span>右切片</span>
          </div>
          <div class="lodash-content">
            this.$baseLodash.dropRight([1, 2, 3],2切除的数量)
            <br />
            // => [1]
          </div>
        </el-card>
      </el-col>

      <el-col :lg="8" :md="12" :sm="24" :xl="6" :xs="24">
        <el-card shadow="hover">
          <div slot="header">
            <span>修改拼接</span>
          </div>
          <div class="lodash-content">
            this.$baseLodash.join(['a', 'b', 'c'], '~');
            <br />
            // => 'a~b~c'
          </div>
        </el-card>
      </el-col>

      <el-col :lg="8" :md="12" :sm="24" :xl="6" :xs="24">
        <el-card shadow="hover">
          <div slot="header">
            <span>获取数组最后一个元素</span>
          </div>
          <div class="lodash-content">
            this.$baseLodash.last(['a', 'b', 'c']);
            <br />
            // => 'c'
          </div>
        </el-card>
      </el-col>

      <el-col :lg="8" :md="12" :sm="24" :xl="6" :xs="24">
        <el-card shadow="hover">
          <div slot="header">
            <span>数组去重</span>
          </div>
          <div class="lodash-content">
            this.$baseLodash.uniq(['a', 'b', 'a']);
            <br />
            // => ['a','b']
          </div>
        </el-card>
      </el-col>

      <el-col :lg="8" :md="12" :sm="24" :xl="6" :xs="24">
        <el-card shadow="hover">
          <div slot="header">
            <span>获取数组的最大值</span>
          </div>
          <div class="lodash-content">
            this.$baseLodash.max([4, 2, 8, 6])
            <br />
            // => 8
          </div>
        </el-card>
      </el-col>

      <el-col :lg="8" :md="12" :sm="24" :xl="6" :xs="24">
        <el-card shadow="hover">
          <div slot="header">
            <span>获取数组的最小值</span>
          </div>
          <div class="lodash-content">
            this.$baseLodash.min([4, 2, 8, 6])
            <br />
            // => 2
          </div>
        </el-card>
      </el-col>

      <el-col :lg="8" :md="12" :sm="24" :xl="6" :xs="24">
        <el-card shadow="hover">
          <div slot="header">
            <span>四舍五入(保留任意位小数)</span>
          </div>
          <div class="lodash-content">
            this.$baseLodash.round(4.006,2保持几位小数)
            <br />
            // => 4.01
          </div>
        </el-card>
      </el-col>

      <el-col :lg="8" :md="12" :sm="24" :xl="6" :xs="24">
        <el-card shadow="hover">
          <div slot="header">
            <span>数组内数据相加</span>
          </div>
          <div class="lodash-content">
            this.$baseLodash.sum([4, 2, 8, 6])
            <br />
            // => 20
          </div>
        </el-card>
      </el-col>

      <el-col :lg="8" :md="12" :sm="24" :xl="6" :xs="24">
        <el-card shadow="hover">
          <div slot="header">
            <span>返回随机数</span>
          </div>
          <div class="lodash-content">
            this.$baseLodash.random(0, 5)
            <br />
            // => 0到5任意数
          </div>
        </el-card>
      </el-col>

      <el-col :lg="8" :md="12" :sm="24" :xl="6" :xs="24">
        <el-card shadow="hover">
          <div slot="header">
            <span>返回数组内的随机数</span>
          </div>
          <div class="lodash-content">
            this.$baseLodash.sample([1, 2, 3, 4])
            <br />
            // => 数组1到4任意数
          </div>
        </el-card>
      </el-col>

      <el-col :lg="8" :md="12" :sm="24" :xl="6" :xs="24">
        <el-card shadow="hover">
          <div slot="header">
            <span>事件防抖动</span>
          </div>
          <div class="lodash-content">
            this.$baseLodash.debounce(@click的事件,延迟的毫秒数)
            <br />
            // => 点击后多久不可以点击
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Lodash',
    data() {
      return {}
    },
    created() {},
    mounted() {},
    methods: {},
  }
</script>
<style lang="scss" scoped>
  .lodash-container {
    text-align: left;

    ::v-deep {
      .lodash-content {
        min-height: 150px;
      }
    }
  }
</style>
