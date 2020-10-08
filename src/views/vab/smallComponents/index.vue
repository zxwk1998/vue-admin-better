<template>
  <div class="small-components-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-divider content-position="left">小组件</el-divider>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <el-card shadow="hover">
          <div slot="header">
            <span>snow</span>
          </div>
          <vab-snow></vab-snow>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <el-card shadow="hover">
          <div slot="header">
            <span>profile</span>
            <el-button
              style="float: right; padding: 3px 0"
              type="text"
              @click="handleProfile"
            >
              重载
            </el-button>
          </div>
          <vab-profile
            v-if="profileShow"
            avatar="https://picsum.photos/80/80?random=2"
            user-name="chuzhixin"
          ></vab-profile>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <el-card shadow="hover">
          <div slot="header">
            <span>charge</span>
          </div>
          <vab-charge :start-val="startVal" :end-val="endVal"></vab-charge>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import VabSnow from '@/components/VabSnow'
  import VabProfile from '@/components/VabProfile'
  import VabCharge from '@/components/VabCharge'

  export default {
    name: 'Sticky',
    components: {
      VabSnow,
      VabProfile,
      VabCharge,
    },
    data() {
      return {
        profileShow: true,
        faultTextShow: true,
        solidTextShow: true,
        startVal: 0,
        endVal: 20,
        timeInterval: null,
      }
    },
    mounted() {
      this.handleProfile()
      this.handleSolidText()
      this.timeInterval = setInterval(() => {
        if (this.endVal < 100) {
          this.startVal = this.endVal
          this.endVal++
        }
      }, 5000)
    },
    beforeDestroy() {
      if (this.clearInterval) {
        clearInterval(this.timeInterval)
      }
    },
    methods: {
      handleProfile() {
        this.profileShow = false
        setTimeout(() => {
          this.profileShow = true
        })
      },
      handleSolidText() {
        this.solidTextShow = false
        setTimeout(() => {
          this.solidTextShow = true
        })
      },
    },
  }
</script>
<style lang="scss" scoped>
  .small-components-container {
    ::v-deep {
      .el-card__body {
        display: flex;
        align-items: center; /* 垂直居中 */
        justify-content: center; /* 水平居中 */
        height: 430px;
      }
    }
  }
</style>
