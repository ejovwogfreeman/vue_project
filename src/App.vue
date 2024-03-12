<script setup>
  import { useRouter, RouterLink, RouterView } from "vue-router";
  import Navbar from "./components/Navbar.vue";
  import Footer from "./components/Footer.vue";

  // Load blogs from local storage or use default if not present
  let blogs = JSON.parse(localStorage.getItem("blogs")) || [
    {
      id: 1,
      title: "My First Publication",
      content:
        "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
      date: "12 jan 2020",
    },
    {
      id: 2,
      title: "The Ninja Method",
      content:
        "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
      date: "13 jan 2020",
    },
    {
      id: 3,
      title: "Traversy Rocks",
      content:
        "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
      date: "14 jan 2020",
    },
  ];

  const router = useRouter();

  const deleteBlog = (id) => {
    // Filter out the blog to delete
    blogs = blogs.filter((blog) => blog.id !== id);
    // Update local storage
    localStorage.setItem("blogs", JSON.stringify(blogs));
    // Redirect to home
    router.push({ name: "home" });
  };

  const addBlog = (blog) => {
    // Add new blog to the beginning of the array
    blogs = [blog, ...blogs];
    // Update local storage
    localStorage.setItem("blogs", JSON.stringify(blogs));
    // Redirect to home
    router.push({ name: "home" });
  };
</script>

<template>
  <header>
    <Navbar />
    <RouterView
      v-bind:blogs="blogs"
      v-bind:id="$route.params.id"
      @delete-blog="deleteBlog"
      @add-blog="addBlog"
    />
    <Footer />
  </header>
</template>

<style scoped></style>
