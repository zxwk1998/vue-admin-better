<template>
  <el-menu-item :index="handlePath(routeChildren.path)" @click="handleLink">
    <vab-icon
      v-if="routeChildren.meta.icon"
      :icon="['fas', routeChildren.meta.icon]"
      class="vab-fas-icon"
    />
    <span>{{ routeChildren.meta.title }}</span>
    <el-tag
      v-if="routeChildren.meta && routeChildren.meta.badge"
      effect="dark"
      type="danger"
    >
      {{ routeChildren.meta.badge }}
    </el-tag>
  </el-menu-item>
</template>

<script>
  import { isExternal } from '@/utils/validate'
  import path from 'path'

  export default {
    name: 'VabMenuItem',
    props: {
      routeChildren: {
        type: Object,
        default() {
          return null
        },
      },
      item: {
        type: Object,
        default() {
          return null
        },
      },
      fullPath: {
        type: String,
        default: '',
      },
    },
    methods: {
      handlePath(routePath) {
        if (isExternal(routePath)) {
          return routePath
        }
        if (isExternal(this.fullPath)) {
          return this.fullPath
        }
        return path.resolve(this.fullPath, routePath)
      },
      handleLink() {
        const routePath = this.routeChildren.path
        const target = this.routeChildren.meta.target

        if (target === '_blank') {
          if (isExternal(routePath)) {
            window.open(routePath)
          } else if (isExternal(this.fullPath)) {
            window.open(this.fullPath)
          } else if (
            this.$route.path !== path.resolve(this.fullPath, routePath)
          ) {
            let routeData = this.$router.resolve(
              path.resolve(this.fullPath, routePath)
            )
            window.open(routeData.href)
          }
        } else {
          if (isExternal(routePath)) {
            window.location.href = routePath
          } else if (isExternal(this.fullPath)) {
            window.location.href = this.fullPath
          } else if (
            this.$route.path !== path.resolve(this.fullPath, routePath)
          ) {
            this.$router.push(path.resolve(this.fullPath, routePath))
          }
        }
      },
    },
  }
</script>
