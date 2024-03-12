<template>
  <nav class="container">
    <RouterLink to="/" style="margin: 0px"><h1>Vue Blog</h1></RouterLink>
    <ul>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/create">Create Blog</RouterLink>
    </ul>
  </nav>
</template>

<script>
  import { RouterLink } from "vue-router";
  export default {
    name: "Navbar",
  };
</script>

<style scoped>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    height: 70px;
  }

  nav h1 {
    color: green;
  }

  nav a {
    text-decoration: none;
    margin-left: 20px;
    color: green;
  }

  nav a:last-child {
    background-color: green;
    color: white;
    padding: 10px;
    border: none;
  }
</style>
