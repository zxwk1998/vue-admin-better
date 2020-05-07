<template>
  <div class="nav-bar-container">
    <el-row :gutter="15">
      <el-col :xs="4" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="left-panel">
          <i
            :class="collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
            :title="collapse ? '展开' : '收起'"
            class="fold-unfold"
            @click="handleCollapse"
          ></i>
          <breadcrumb class="hidden-xs-only" />
        </div>
      </el-col>
      <el-col :xs="20" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="right-panel">
          <error-log />
          <byui-screenfull @refresh="refreshSelectedTag"></byui-screenfull>
          <theme-bar></theme-bar>
          <byui-icon
            title="重载路由"
            :pulse="pulse"
            :icon="['fas', 'redo']"
            @click="refreshSelectedTag"
          />
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <el-avatar
                class="user-avatar"
                :src="require('@/assets/user.gif')"
              ></el-avatar>
              <span class="user-name">{{ userName }}</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>

            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <byui-icon :icon="['fas', 'user']"></byui-icon>
                个人中心
              </el-dropdown-item>
              <el-dropdown-item command="logout" divided>
                <byui-icon :icon="['fas', 'sign-out-alt']"></byui-icon>
                退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <!--  <byui-icon
            title="退出系统"
            :icon="['fas', 'sign-out-alt']"
            @click="logout"
          />-->
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ErrorLog from "@/components/ErrorLog";
import ByuiScreenfull from "@/components/ByuiScreenfull";
import Breadcrumb from "@/layouts/components/Breadcrumb";
import ThemeBar from "@/layouts/components/ThemeBar";

export default {
  components: {
    Breadcrumb,
    ErrorLog,
    ByuiScreenfull,
    ThemeBar,
  },
  data() {
    return {
      pulse: false,
    };
  },
  computed: {
    ...mapGetters([
      "avatar",
      "collapse",
      "userName",
      "loginTimes",
      "lastLoginTime",
      "selectedTag",
      "device",
    ]),
  },
  methods: {
    handleCollapse() {
      this.$store.dispatch("settings/changeCollapse");
      if ("mobile" == this.device && false === this.collapse) {
      }
    },
    async logout() {
      await this.$baseConfirm(
        "您确定要退出" + this.$baseTitle + "吗?",
        null,
        () => {
          const fullPath = this.$route.fullPath;
          this.$store.dispatch("user/logout").then(() => {
            this.$router.push(`/login?redirect=${fullPath}`);
          });
        }
      );
    },
    refreshSelectedTag() {
      this.pulse = true;
      this.$router
        .replace({
          path: "/redirect" + this.$route.fullPath,
        })
        .then(() => {
          setTimeout(() => {
            this.pulse = false;
          }, 1000);
        })
        .catch(() => {});
    },
    handleCommand(command) {
      switch (command) {
        case "logout":
          this.logout();
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-bar-container {
  position: relative;
  height: 50px;
  overflow: hidden;
  user-select: none;
  background: $base-color-white;
  box-shadow: $base-box-shadow;

  .left-panel {
    display: flex;
    align-items: center;
    justify-items: center;
    height: 50px;
    max-height: 50px;

    .fold-unfold {
      margin-left: 10px;
      font-size: 20px;
      color: $base-color-gray;
      cursor: pointer;
    }

    ::v-deep {
      .breadcrumb-container {
        margin-left: 10px;
      }
    }
  }

  .right-panel {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: flex-end;
    height: 50px;

    .user-avatar {
      margin-right: 5px;
      font-weight: 600;
      cursor: pointer;
    }

    .user-name {
      position: relative;
      top: -14px;
      margin-right: 35px;
      margin-left: 5px;
      font-weight: 600;
      cursor: pointer;
    }

    .user-name + i {
      position: absolute;
      top: 16px;
      right: 15px;
    }

    ::v-deep {
      svg {
        width: 1em;
        height: 1em;
        margin-right: 15px;
        font-size: $base-font-size-big;
        color: $base-color-gray;
        cursor: pointer;
        fill: $base-color-gray;
      }

      button {
        svg {
          margin-right: 0;
          color: $base-color-white;
          cursor: pointer;
          fill: $base-color-white;
        }
      }

      .el-badge {
        margin-right: 15px;
      }
    }
  }
}
</style>
<style>
.el-dropdown-menu--small .el-dropdown-menu__item {
  padding: 0 15px;
  font-size: 13px;
  line-height: 36px !important;
}
</style>
