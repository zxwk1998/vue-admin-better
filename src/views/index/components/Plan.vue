<template>
  <el-card shadow="hover">
    <template #header>
      <vab-icon icon="send-plane-2-line" />
      <!-- 计划 -->
      <el-tag class="card-header-tag" type="success">祝用框架的小伙伴都能住上别墅，开上保时捷</el-tag>
    </template>
    <el-table :data="tableData" height="283px" row-key="title">
      <el-table-column align="center" label="拖拽" width="50px">
        <template #default="{}">
          <vab-icon :icon="['fas', 'arrows-alt']" style="cursor: pointer" />
        </template>
      </el-table-column>
      <el-table-column width="20px" />
      <el-table-column label="目标" prop="title" width="230px" />
      <el-table-column label="进度" width="220px">
        <template #default="{ row }">
          <el-progress :color="row.color" :percentage="row.percentage" />
        </template>
      </el-table-column>
      <el-table-column width="50px" />
      <el-table-column label="完成时间" prop="endTIme" />
    </el-table>
  </el-card>
</template>
<script>
  import Sortable from 'sortablejs'

  export default {
    data() {
      return {
        tableData: [
          {
            title: '帮助中小企业盈利1个亿',
            endTIme: '2099-12-31',
            percentage: 50,
            color: '#95de64',
          },
          {
            title: '帮助10万个人',
            endTIme: '2029-12-31',
            percentage: 8,
            color: '#69c0ff',
          },
          {
            title: '交个帅气的男朋友',
            endTIme: '2021-12-31',
            percentage: 76,
            color: '#1890FF',
          },
          {
            title: 'vue-admin-beautiful标星过1K',
            endTIme: '2020-03-31',
            percentage: 100,
            color: '#ffc069',
          },
          {
            title: '活到老，学到老',
            endTIme: '2094-12-16',
            percentage: 25,
            color: '#5cdbd3',
          },
          {
            title: '变成像尤雨溪一样优秀的人',
            endTIme: '此生无望',
            percentage: 1,
            color: '#b37feb',
          },
        ],
      }
    },
    mounted() {
      const tbody = document.querySelector('.el-table__body-wrapper tbody')
      const _this = this
      Sortable.create(tbody, {
        onEnd({ newIndex, oldIndex }) {
          const currRow = _this.tableData.splice(oldIndex, 1)[0]
          _this.tableData.splice(newIndex, 0, currRow)
        },
      })
    },
  }
</script>
