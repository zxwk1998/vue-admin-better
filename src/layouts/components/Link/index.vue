<template>
  <a v-bind="linkProps(to, target)">
    <slot />
  </a>
</template>

<script>
import { isExternal } from "@/utils/validate";

export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      required: true,
    },
  },
  methods: {
    linkProps(url, target) {
      if (isExternal(url)) {
        return {
          is: "a",
          href: url,
          target: "_blank",
          rel: "noopener",
        };
      }
      if (target == "_blank") {
        return {
          is: "router-link",
          target: "_blank",
          to: url,
        };
      } else {
        return {
          is: "router-link",
          to: url,
        };
      }
    },
  },
};
</script>
