<template>
  <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      <el-avatar
        class="user-avatar"
        :src="require('@/assets/user.gif')"
      ></el-avatar>
      <span class="hidden-md-and-down user-name">{{ userName }}</span>
      <i class="hidden-md-and-down el-icon-arrow-down el-icon--right"></i>
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
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Avatar",
  computed: {
    ...mapGetters({
      avatar: "user/avatar",
      userName: "user/userName",
    }),
  },
  methods: {
    handleCommand(command) {
      switch (command) {
        case "logout":
          this.logout();
          break;
      }
    },
    logout() {
      this.$baseConfirm("您确定要退出" + this.$baseTitle + "吗?", null, () => {
        const fullPath = this.$route.fullPath;
        this.$store.dispatch("user/logout").then(() => {
          this.$router.push(`/login?redirect=${fullPath}`);
        });
      });
    },
  },
};
</script>
