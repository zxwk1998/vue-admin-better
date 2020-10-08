<template>
  <div class="index-container">
    <version-information />
  </div>
</template>

<script>
  import VersionInformation from './components/VersionInformation'
  export default {
    name: 'Index',
    components: { VersionInformation },
  }
</script>
