<template>
  <div class="small-components-container">
    <el-row :gutter="15">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-divider content-position="left"
          >为演示方便，每隔五5秒重新渲染
        </el-divider>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <el-card shadow="hover">
          <div slot="header">
            <span>snow</span>
          </div>
          <byui-snow></byui-snow>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <el-card shadow="hover">
          <div slot="header">
            <span>profile</span>
            <el-button
              style="float: right; padding: 3px 0;"
              type="text"
              @click="handleProfile"
              >重载
            </el-button>
          </div>
          <byui-profile
            v-if="profileShow"
            avatar="https://picsum.photos/80/80?random=2"
            user-name="初志鑫"
          ></byui-profile>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <el-card shadow="hover">
          <div slot="header">
            <span>solidText</span>
            <el-button
              style="float: right; padding: 3px 0;"
              type="text"
              @click="handleSolidText"
              >重载
            </el-button>
          </div>
          <byui-solid-text
            v-if="solidTextShow"
            text="我爱自由"
          ></byui-solid-text>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <el-card shadow="hover">
          <div slot="header">
            <span>faultText</span>
            <el-button
              style="float: right; padding: 3px 0;"
              type="text"
              @click="handleFaultText"
              >重载
            </el-button>
          </div>
          <byui-fault-text v-if="faultTextShow" ref="faultText" text="我爱自由">
          </byui-fault-text>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <el-card shadow="hover">
          <div slot="header">
            <span>charge</span>
          </div>
          <byui-charge :start-val="startVal" :end-val="endVal"></byui-charge>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ByuiSnow from "@/components/ByuiSnow";
import ByuiProfile from "@/components/ByuiProfile";
import ByuiSolidText from "@/components/ByuiSolidText";
import ByuiFaultText from "@/components/ByuiFaultText";
import ByuiCharge from "@/components/ByuiCharge";

export default {
  name: "Sticky",
  components: {
    ByuiSnow,
    ByuiProfile,
    ByuiSolidText,
    ByuiFaultText,
    ByuiCharge,
  },
  data() {
    return {
      profileShow: true,
      faultTextShow: true,
      solidTextShow: true,
      startVal: 0,
      endVal: 20,
      timeInterval: null,
    };
  },
  mounted() {
    this.timeInterval = setInterval(() => {
      this.handleProfile();
      this.handleSolidText();
      this.handleFaultText();
      if (this.endVal < 100) {
        this.startVal = this.endVal;
        this.endVal++;
      }
    }, 5000);

    /*充电动画*/
  },
  beforeDestroy() {
    if (this.clearInterval) {
      clearInterval(this.interval);
    }
  },
  methods: {
    handleProfile() {
      this.profileShow = false;
      setTimeout(() => {
        this.profileShow = true;
      });
    },
    handleSolidText() {
      this.solidTextShow = false;
      setTimeout(() => {
        this.solidTextShow = true;
      });
    },
    handleFaultText() {
      this.faultTextShow = false;
      setTimeout(() => {
        this.faultTextShow = true;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.small-components-container {
  ::v-deep {
    .el-card__body {
      height: 430px;
      display: flex;
      justify-content: center; /* 水平居中 */
      align-items: center; /* 垂直居中 */
    }
  }
}
</style>
