<template>
  <el-col :lg="span" :md="24" :sm="24" :xl="span" :xs="24">
    <div class="right-panel">
      <slot></slot>
    </div>
  </el-col>
</template>

<script>
  export default {
    name: 'VabQueryFormRightPanel',
    props: {
      span: {
        type: Number,
        default: 10,
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
