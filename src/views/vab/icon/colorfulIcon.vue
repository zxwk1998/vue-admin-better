<template>
  <div class="colorful-icon-container">
    <el-row :gutter="20">
      <el-col :span="24">
        <el-divider content-position="left">
          多彩图标在演示环境中使用的是cdn加速服务，开发时需存储到本地，点击图标即可复制源码
        </el-divider>
      </el-col>
      <el-col :span="24">
        <el-form :inline="true" label-width="80px" @submit.native.prevent>
          <el-form-item label="图标名称">
            <el-input v-model="queryForm.title" />
          </el-form-item>
          <el-form-item label-width="0">
            <el-button native-type="submit" type="primary" @click="queryData">搜索</el-button>
          </el-form-item>

          <!-- <el-form-item label-width="0">
            <el-input :value="copyText" type="text"></el-input>
          </el-form-item>-->
        </el-form>
      </el-col>

      <el-col
        v-for="(item, index) in queryIcon"
        :key="index"
        :lg="2"
        :md="3"
        :sm="8"
        :xl="2"
        :xs="6"
      >
        <el-card
          shadow="hover"
          style="cursor: pointer"
          @click.native="handleCopyIcon(index, $event)"
        >
          <vab-colorful-icon
            :icon-class="`https://fastly.jsdelivr.net/gh/chuzhixin/zx-colorful-icon@master/${item}.svg`"
          />
        </el-card>
        <div class="icon-text">
          {{ item }}
        </div>
      </el-col>
      <el-col :span="24">
        <el-pagination
          :background="background"
          :current-page="queryForm.pageNo"
          :layout="layout"
          :page-size="queryForm.pageSize"
          :page-sizes="[72, 144, 216, 288]"
          :total="total"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { getIconList } from '@/api/colorfulIcon'
  import clip from '@/utils/clipboard'

  export default {
    name: 'ColorfulIcon',
    data() {
      return {
        copyText: '',
        layout: 'total, sizes, prev, pager, next, jumper',
        total: 0,
        background: true,
        height: 0,
        selectRows: '',
        elementLoadingText: '正在加载...',
        queryIcon: [],
        queryForm: {
          pageNo: 1,
          pageSize: 72,
          title: '',
        },
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      handleSizeChange(val) {
        this.queryForm.pageSize = val
        this.fetchData()
      },
      handleCurrentChange(val) {
        this.queryForm.pageNo = val
        this.fetchData()
      },
      queryData() {
        this.queryForm.pageNo = 1
        this.fetchData()
      },
      async fetchData() {
        const { data, totalCount } = await getIconList(this.queryForm)
        this.queryIcon = data
        this.allIcon = data
        this.total = totalCount
      },
      handleCopyIcon(index, event) {
        //const copyText = `<vab-colorful-icon icon-class="https://fastly.jsdelivr.net/gh/chuzhixin/zx-colorful-icon@master/${this.queryIcon[index]}.svg" />`;
        const copyText = `<vab-colorful-icon icon-class="${this.queryIcon[index]}" />`
        this.copyText = copyText
        clip(copyText, event)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .colorful-icon-container {
    ::v-deep {
      .el-card__body {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center; /* 垂直居中 */
        justify-content: center; /* 水平居中 */

        svg:not(:root) {
          font-size: 16px;
          font-weight: bold;
          color: $base-color-gray;
          text-align: center;
          vertical-align: middle;
          pointer-events: none;
          cursor: pointer;
        }

        .svg-external-icon {
          width: 20px;
          height: 18px;
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
