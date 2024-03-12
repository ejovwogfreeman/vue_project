<template>
  <footer>
    copyright &copy;
    <a href="https://github.com/ejovwogfreeman/vue_project.git">vue_project</a>
    {{ new Date().getFullYear() }}
  </footer>
</template>

<script>
  export default {
    name: "Footer",
  };
</script>

<style scoped>
  footer {
    text-align: center;
    color: black;
  }
</style>
