<template>
  <el-col :lg="span" :md="24" :sm="24" :xl="span" :xs="24">
    <div class="left-panel">
      <slot></slot>
    </div>
  </el-col>
</template>

<script>
  export default {
    name: 'VabQueryFormLeftPanel',
    props: {
      span: {
        type: Number,
        default: 14,
      },
    },
    data() {
      return {}
    },
    created() {},
    mounted() {},
    methods: {},
  }
</script>
