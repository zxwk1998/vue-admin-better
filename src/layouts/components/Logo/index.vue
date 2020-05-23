<template>
  <div :class="'logo-container-' + layout">
    <router-link to="/">
      <byui-remix-icon v-if="logo" class="logo" icon-class="vuejs-fill" />
      <span class="title" :title="title">
        {{ title }}
      </span>
    </router-link>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { logo } from "@/config/settings";
export default {
  name: "Logo",
  data() {
    return {
      title: this.$baseTitle,
      logo,
    };
  },
  computed: {
    ...mapGetters({
      logo: "settings/logo",
      layout: "settings/layout",
    }),
  },
};
</script>
<style lang="scss" scoped>
@mixin container {
  position: relative;
  height: 56px;
  overflow: hidden;
  line-height: 56px;
  background: $base-color-header;
}

@mixin logo {
  display: inline-block;
  width: 32px;
  height: 32px;
  margin-right: 5px;
  color: $base-title-color;
  vertical-align: middle;
}

@mixin title {
  display: inline-block;
  overflow: hidden;
  font-size: $base-font-size-max;
  font-weight: 600;
  line-height: 55px;
  color: $base-title-color;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
}

.logo-container-horizontal {
  @include container;

  .logo {
    @include logo;
  }

  .title {
    @include title;
  }
}

.logo-container-vertical {
  @include container;

  text-align: center;

  .logo {
    @include logo;
  }

  .title {
    @include title;

    max-width: 140px;
  }
}
</style>
