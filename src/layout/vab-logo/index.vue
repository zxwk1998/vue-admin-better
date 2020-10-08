<template>
  <div class="vab-logo">
    <vab-icon v-if="logo" :icon="logo"></vab-icon>
    <span class="anticon"></span>
    <span>{{ title }}</span>
  </div>
</template>

<script>
  import VabIcon from '@/layout/vab-icon'
  import { mapGetters } from 'vuex'
  export default {
    name: 'VabLogo',
    components: { VabIcon },
    computed: {
      ...mapGetters({
        logo: 'settings/logo',
        title: 'settings/title',
      }),
    },
  }
</script>
<style lang="less" scoped>
  .vab-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    margin: 16px 5px;
    overflow: hidden;
    overflow: hidden;
    font-size: 15px;
    color: #fff;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
