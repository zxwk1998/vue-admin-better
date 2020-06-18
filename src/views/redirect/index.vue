<script>
export default {
  name: "Redirect",
  watch: {
    $route: {
      handler(route) {
        const { params, query } = this.$route;
        const { path } = params;
        this.$router.replace({ path: "/" + path, query });
      },
      immediate: true,
    },
  },
  render(h) {
    return h();
  },
};
</script>
