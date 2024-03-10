<template>
  <nav>
    <h1>View Tut</h1>
    <ul>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/contact">Login</RouterLink>
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
    padding: 0px 20%;
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
  }

  @media screen and (max-width: 7000px) {
    nav {
      padding: 0px 20px;
    }
  }
</style>
