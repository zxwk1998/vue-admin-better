<template>
  <div class="index-container">
    <a
      target="_blank"
      href="https://github.com/chuzhixin/vue-admin-beautiful/tree/vue3.0-antdv"
    >
      <img
        style="margin-right: 10px"
        src="https://img.shields.io/github/stars/chuzhixin/vue-admin-beautiful?style=flat-square&label=Stars&logo=github"
      />
    </a>
    <version-information />
  </div>
</template>

<script>
  import VersionInformation from "./components/VersionInformation";
  export default {
    name: "Index",
    components: { VersionInformation },
  };
</script>
