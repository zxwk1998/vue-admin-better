<template>
  <a-table
    :columns="columns"
    :row-key="(record) => record.uuid"
    :data-source="data"
    :pagination="pagination"
    :loading="loading"
    @change="handleTableChange"
  ></a-table>
</template>
<script>
  import { getList } from '@/api/table'
  const columns = [
    {
      title: 'title',
      dataIndex: 'title',
    },
    {
      title: 'description',
      dataIndex: 'description',
    },
    {
      title: 'author',
      dataIndex: 'author',
    },
    {
      title: 'datetime',
      dataIndex: 'datetime',
    },
  ]

  export default {
    data() {
      return {
        data: [],
        pagination: {
          showLessItems: true,
          showQuickJumper: true,
          showSizeChanger: true,
        },
        query: {},
        loading: false,
        columns,
      }
    },
    mounted() {
      this.fetch()
    },
    methods: {
      handleTableChange(pagination) {
        const pager = { ...this.pagination }
        pager.current = pagination.current
        this.pagination = pager
        this.fetch()
      },
      fetch() {
        this.loading = true
        getList({
          pageSize: this.pagination.pageSize,
          current: this.pagination.current,
        }).then(({ data, total }) => {
          const pagination = { ...this.pagination }
          pagination.total = total
          this.loading = false
          this.data = data
          this.pagination = pagination
        })
      },
    },
  }
</script>
