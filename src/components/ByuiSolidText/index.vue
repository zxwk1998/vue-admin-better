<template>
  <div :class="`solid-text-${uuid}`" :style="styleObj">
    {{ text }}
  </div>
</template>

<script>
import { uuid } from "@/utils";

export default {
  name: "ByuiSolidText",
  props: {
    text: {
      type: String,
      default: "",
    },
    styleObj: {
      type: Object,
      default: () => {
        return {
          fontSize: "5em",
        };
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
    color() {
      const arr = [
        "#1890FF",
        "#36CBCB",
        "#4ECB73",
        "#FBD437",
        "#F2637B",
        "#975FE5",
      ];
      let index = Math.floor(Math.random() * arr.length);
      return arr[index];
    },
    init() {
      let solidText = document.querySelector(`.solid-text-${this.uuid}`);
      let letters = solidText.textContent.replace(/\s*/g, "").split("");
      solidText.textContent = "";
      letters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${i / 10}s`;
        span.style.background = this.color();
        solidText.append(span);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@function float-text-3d(
  $shadow-color: rgba($base-color-white, 0.1),
  $depth: 12,
  $floating: false
) {
  $shadows: ();
  @for $i from 1 to $depth {
    @if ($floating == false and $i > $depth / 2) {
      $shadow-color: transparent;
    }
    $shadows: append($shadows, 0 ($i * 1px) $shadow-color, comma);
  }
  @if ($floating == false) {
    $shadows: append($shadows, 0 10px 10px rgba(0, 0, 0, 0.4), comma);
  } @else {
    $shadows: append($shadows, 0 50px 25px rgba(0, 0, 0, 0.2), comma);
  }

  @return $shadows;
}

[class*="solid-text-"] {
  display: flex;
  color: $base-color-white;

  text-transform: uppercase;

  ::v-deep {
    span {
      text-shadow: float-text-3d($floating: false);
      transform: translateY(20px);
      animation: bounce 0.3s ease infinite alternate;
      padding: 7px;
      margin: 5px;
    }
  }
}

@keyframes bounce {
  to {
    text-shadow: float-text-3d($floating: true);
    transform: translateY(-20px);
  }
}
</style>
