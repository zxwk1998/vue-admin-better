<template>
  <div class="page-header" :class="customClass">
    <div class="header-content">
      <div class="header-left">
        <h1 class="page-title">
          <vab-icon v-if="icon" :icon="icon" />
          {{ title }}
        </h1>
        <p v-if="description" class="page-description" v-html="description"></p>
      </div>
      <div v-if="rightIcon || rightText" class="header-right">
        <slot name="right">
          <vab-icon v-if="rightIcon" :icon="rightIcon" />
          <span v-if="rightText">{{ rightText }}</span>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VabPageHeader',
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        default: '',
      },
      icon: {
        type: Array,
        default: () => [],
      },
      rightIcon: {
        type: Array,
        default: () => [],
      },
      rightText: {
        type: String,
        default: '',
      },
      customClass: {
        type: String,
        default: '',
      },
    },
  }
</script>

<style lang="scss">
  .page-header {
    background: linear-gradient(135deg, #4d8af0 0%, #1a56db 100%);
    border-radius: 12px;
    padding: 30px;
    margin-bottom: 24px;
    color: white;
    box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .header-left {
        .page-title {
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 8px 0;
          display: flex;
          align-items: center;
          gap: 12px;

          .vab-icon {
            font-size: 1.8rem;
          }
        }

        .page-description {
          font-size: 1rem;
          opacity: 0.9;
          margin: 0;
        }
      }

      .header-right {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 1.1rem;
        font-weight: 600;

        .vab-icon {
          font-size: 1.3rem;
        }
      }
    }
  }
</style>
