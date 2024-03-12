<template>
  <div class="container">
    <div class="cont" v-for="blog in blogs" v-bind:key="blog.id">
      <h2>{{ blog.title }}</h2>
      <p></p>
      <p>
        {{ blog.content.slice(0, 100) }}...
        <RouterLink v-bind:to="{ name: 'blog', params: { id: blog.id } }"
          >Read More</RouterLink
        >
      </p>
      <p>{{ blog.date }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeView",
    props: {
      blogs: {
        type: Array,
      },
    },
  };
</script>

<style scoped>
  .cont {
    background-color: white;
    padding: 10px;
    color: black;
    margin-bottom: 10px;
  }
  p {
    padding: 5px 0px;
  }
</style>
