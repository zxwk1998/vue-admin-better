<template>
  <el-dropdown @command="handleCommand">
    <span class="avatar-dropdown">
      <el-avatar
        class="user-avatar"
        :src="require('@/assets/user.gif')"
      ></el-avatar>
    </span>

    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>
        <vab-icon :icon="['fas', 'user']"></vab-icon>
        {{ userName }}的个人中心
      </el-dropdown-item>
      <el-dropdown-item command="logout" divided>
        <vab-icon :icon="['fas', 'sign-out-alt']"></vab-icon>
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
      this.$baseConfirm(
        "您确定要退出" + this.$baseTitle + "吗?",
        null,
        async () => {
          const fullPath = this.$route.fullPath;
          await this.$store.dispatch("user/logout");
          this.$router.push(`/login?redirect=${fullPath}`);
        }
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.avatar-dropdown {
  .user-avatar {
    cursor: pointer;
  }

  .user-name {
    position: relative;
    margin-right: 5px;
    margin-left: 5px;
    font-weight: 600;
    cursor: pointer;
  }
}
</style>
