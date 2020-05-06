<template>
  <div class="card" :style="styleObj">
    <div class="card-borders">
      <div class="border-top"></div>
      <div class="border-right"></div>
      <div class="border-bottom"></div>
      <div class="border-left"></div>
    </div>
    <div class="card-content">
      <el-image :src="avatar" class="avatar"></el-image>
      <div class="username">{{ userName }}</div>
      <div class="social-icons">
        <a
          v-for="(item, index) in iconArray"
          :key="index"
          class="social-icon"
          :href="item.url"
          target="_blank"
        >
          <byui-icon :icon="['fas', item.icon]" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ByuiProfile",
  props: {
    styleObj: {
      type: Object,
      default: () => {
        return {};
      },
    },
    userName: {
      type: String,
      default: "",
    },
    avatar: {
      type: String,
      default: "",
    },
    iconArray: {
      type: Array,
      default: () => {
        return [
          { icon: "bell", url: "" },
          { icon: "bookmark", url: "" },
          { icon: "cloud-sun", url: "" },
        ];
      },
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.card {
  --card-bg-color: hsl(240, 31%, 25%);
  --card-bg-color-transparent: hsla(240, 31%, 25%, 0.7);

  position: relative;
  width: 100%;
  height: 100%;

  .card-borders {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .border-top {
      position: absolute;
      top: 0;
      width: 100%;
      height: 2px;
      background: var(--card-bg-color);
      transform: translateX(-100%);
      animation: slide-in-horizontal 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)
        forwards;
    }

    .border-right {
      position: absolute;
      right: 0;
      width: 2px;
      height: 100%;
      background: var(--card-bg-color);
      transform: translateY(100%);
      animation: slide-in-vertical 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)
        forwards;
    }

    .border-bottom {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: var(--card-bg-color);
      transform: translateX(100%);
      animation: slide-in-horizontal-reverse 0.8s
        cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
    }

    .border-left {
      position: absolute;
      top: 0;
      width: 2px;
      height: 100%;
      background: var(--card-bg-color);
      transform: translateY(-100%);
      animation: slide-in-vertical-reverse 0.8s
        cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
    }
  }

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 40px 0 40px 0;
    background: var(--card-bg-color-transparent);
    box-shadow: 0 0 0.6px rgba(0, 0, 0, 0.028), 0 0 1.3px rgba(0, 0, 0, 0.04),
      0 0 2.5px rgba(0, 0, 0, 0.05), 0 0 4.5px rgba(0, 0, 0, 0.06),
      0 0 8.4px rgba(0, 0, 0, 0.072), 0 0 20px rgba(0, 0, 0, 0.1);
    opacity: 0;
    transform: scale(0.6);
    animation: bump-in 0.5s 0.8s forwards;

    .avatar {
      width: 80px;
      height: 80px;
      border: 1px solid $base-color-white;
      border-radius: 50%;
      opacity: 0;
      transform: scale(0.6);
      animation: bump-in 0.5s 1s forwards;
    }

    .username {
      position: relative;
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 26px;
      color: transparent;
      letter-spacing: 2px;
      animation: fill-text-white 1.2s 2s forwards;

      &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: black;
        content: "";
        background: #35b9f1;
        transform: scaleX(0);
        transform-origin: left;
        animation: slide-in-out 1.2s 1.2s cubic-bezier(0.75, 0, 0, 1) forwards;
      }
    }

    .social-icons {
      display: flex;

      .social-icon {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.5em;
        height: 2.5em;
        margin: 0 15px;
        color: white;
        text-decoration: none;
        border-radius: 50%;

        @for $i from 1 through 3 {
          &:nth-child(#{$i}) {
            &::before {
              animation-delay: 2s + 0.1s * $i;
            }

            &::after {
              animation-delay: 2.1s + 0.1s * $i;
            }

            svg {
              animation-delay: 2.2s + 0.1s * $i;
            }
          }
        }

        &::before,
        &::after {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          content: "";
          border-radius: inherit;
          transform: scale(0);
        }

        &::before {
          background: #f7f1e3;
          animation: scale-in 0.5s cubic-bezier(0.75, 0, 0, 1) forwards;
        }

        &::after {
          background: #2c3e50;
          animation: scale-in 0.5s cubic-bezier(0.75, 0, 0, 1) forwards;
        }

        svg {
          z-index: 99;
          transform: scale(0);
          animation: scale-in 0.5s cubic-bezier(0.75, 0, 0, 1) forwards;
        }
      }
    }
  }
}

@keyframes bump-in {
  50% {
    transform: scale(1.05);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slide-in-horizontal {
  50% {
    transform: translateX(0);
  }

  to {
    transform: translateX(100%);
  }
}

@keyframes slide-in-horizontal-reverse {
  50% {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
}

@keyframes slide-in-vertical {
  50% {
    transform: translateY(0);
  }

  to {
    transform: translateY(-100%);
  }
}

@keyframes slide-in-vertical-reverse {
  50% {
    transform: translateY(0);
  }

  to {
    transform: translateY(100%);
  }
}

@keyframes slide-in-out {
  50% {
    transform: scaleX(1);
    transform-origin: left;
  }

  50.1% {
    transform-origin: right;
  }

  100% {
    transform: scaleX(0);
    transform-origin: right;
  }
}

@keyframes fill-text-white {
  to {
    color: white;
  }
}

@keyframes scale-in {
  to {
    transform: scale(1);
  }
}
</style>
