<template>
  <div class="content" :style="styleObj">
    <div v-for="(item, index) in 200" :key="index" class="snow"></div>
  </div>
</template>

<script>
  export default {
    name: 'VabSnow',
    props: {
      styleObj: {
        type: Object,
        default: () => {
          return {}
        },
      },
    },
    data() {
      return {}
    },
    created() {},
    mounted() {},
    methods: {},
  }
</script>

<style lang="scss" scoped>
  .content {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    filter: drop-shadow(0 0 10px white);
  }

  @function random_range($min, $max) {
    $rand: random();
    $random_range: $min + floor($rand * (($max - $min) + 1));

    @return $random_range;
  }

  .snow {
    $total: 200;

    position: absolute;
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;

    @for $i from 1 through $total {
      $random-x: random(1000000) * 0.0001vw;
      $random-offset: random_range(-100000, 100000) * 0.0001vw;
      $random-x-end: $random-x + $random-offset;
      $random-x-end-yoyo: $random-x + ($random-offset / 2);
      $random-yoyo-time: random_range(30000, 80000) / 100000;
      $random-yoyo-y: $random-yoyo-time * 100vh;
      $random-scale: random(10000) * 0.0001;
      $fall-duration: random_range(10, 30) * 1s;
      $fall-delay: random(30) * -1s;

      &:nth-child(#{$i}) {
        opacity: random(10000) * 0.0001;
        transform: translate($random-x, -10px) scale($random-scale);
        animation: fall-#{$i} $fall-duration $fall-delay linear infinite;
      }

      @keyframes fall-#{$i} {
        #{percentage($random-yoyo-time)} {
          transform: translate($random-x-end, $random-yoyo-y)
            scale($random-scale);
        }

        to {
          transform: translate($random-x-end-yoyo, 100vh) scale($random-scale);
        }
      }
    }
  }
</style>
