<template>
  <div :class="`fault-text-${uuid}`" data-slice="20" :style="styleObj">
    {{ text }}
  </div>
</template>

<script>
import { uuid } from "@/utils";

export default {
  name: "ByuiFaultText",
  props: {
    text: {
      type: String,
      default: "",
    },
    styleObj: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      uuid: uuid(),
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      setTimeout(() => {
        const random = (min, max) =>
          min + Math.floor(Math.random() * (max - min + 1));
        let crossBarGlitchTexts = document.querySelectorAll(
          `.fault-text-${this.uuid}`
        );
        crossBarGlitchTexts.forEach((text) => {
          let content = text.textContent;
          text.textContent = "";
          let slice = text.dataset.slice;
          let glitchText = document.createElement("div");
          glitchText.className = "glitch";
          glitchText.style.setProperty("--slice-count", slice);
          for (let i = 0; i <= Number(slice); i++) {
            let span = document.createElement("span");
            span.textContent = content;
            span.style.setProperty("--i", `${i + 1}`);
            if (i !== Number(slice)) {
              span.style.animationDelay = `${800 + random(100, 300)}ms`;
            }
            glitchText.append(span);
          }
          text.appendChild(glitchText);
          let bars = document.createElement("div");
          bars.className = "bars";
          for (let i = 0; i < 5; i++) {
            let bar = document.createElement("div");
            bar.className = "bar";
            bars.append(bar);
          }
          text.append(bars);
        });
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
[class*="fault-text-"] {
  position: relative;

  ::v-deep {
    .bars {
      $bars-dalay: 0.3s, 0.2s, 0.5s, 0.3s, 0.4s;

      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;

      .bar {
        width: 100%;
        flex: 1;
        background: $base-color-blue;
        border-radius: 50px;
        animation: 0.6s cubic-bezier(0.4, 0.2, 0.175, 1) forwards;

        &:nth-child(odd) {
          transform: translateX(100%);
          animation-name: slide-left;
        }

        &:nth-child(even) {
          transform: translateX(-100%);
          animation-name: slide-right;
        }

        @for $i from 1 through 5 {
          &:nth-child(#{$i}) {
            animation-delay: nth($bars-dalay, $i);
          }
        }
      }
    }

    .glitch {
      opacity: 0;
      animation: reveal forwards 0.3s;
      animation-delay: 0.6s;

      span {
        font-weight: bold;
        font-size: 2em;
        letter-spacing: 5px;
        color: $base-color-blue;

        &:not(:last-child) {
          --ratio: calc(100% / var(--slice-count));
          --top: calc(var(--ratio) * (var(--i) - 1));
          --bottom: calc(var(--ratio) * (var(--slice-count) - var(--i)));

          position: absolute;
          white-space: nowrap;
          clip-path: inset(var(--top) 0 var(--bottom) 0);
          animation-duration: 0.3s;
        }

        &:nth-child(odd) {
          animation-name: slide-from-left;
        }

        &:nth-child(even) {
          animation-name: slide-from-right;
        }

        &:last-child {
          opacity: 0;
          animation: reveal steps(1) forwards;
          animation-delay: 0.6s + 0.6s;
        }
      }
    }
  }
}

@keyframes slide-from-left {
  from {
    transform: translateX(-20%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-from-right {
  from {
    transform: translateX(20%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes reveal {
  to {
    opacity: 1;
  }
}

@keyframes slide-left {
  to {
    transform: translateX(-100%);
  }
}

@keyframes slide-right {
  to {
    transform: translateX(100%);
  }
}
</style>
