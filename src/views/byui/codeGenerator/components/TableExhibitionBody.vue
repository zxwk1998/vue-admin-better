<template>
  <div>
    <el-table :key="table_key" :data="list" @header-click="test">
      <template v-for="header in headers">
        <el-table-column
          v-if="header.show"
          :key="header.key"
          :label="header.label"
          align="center"
        >
          <template slot-scope="{ row }">
            {{ row[header.key] }}
          </template>
        </el-table-column>
      </template>
    </el-table>
    <el-pagination
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="1000"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: null,
      required: true,
    },
    headers: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      query: {
        limit: 20,
        cursor: 1,
      },
      table_key: 0,
      total: 0,
    };
  },
  watch: {
    headers() {
      this.table_key++;
    },
  },
  created() {},
  methods: {
    editdata() {},
    test(val) {},
  },
};
</script>
