<template>
  <div class="container">
    <div class="cont">
      <div v-if="filteredBlog">
        <h2>{{ filteredBlog.title }}</h2>
        <p>{{ filteredBlog.content }}</p>
        <div class="bottom">
          <p>{{ filteredBlog.date }}</p>
          <button @click="deleteBlog(filteredBlog.id)">DELETE</button>
        </div>
      </div>
      <div v-else>
        <p>No blog post found</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { useRouter } from "vue-router";

  export default {
    name: "BlogView",
    props: {
      id: {
        type: String,
        required: true,
      },
      blogs: {
        type: Array,
        required: true,
      },
    },
    computed: {
      filteredBlog() {
        return this.blogs.find((blog) => blog.id === Number(this.id));
      },
    },
    methods: {
      deleteBlog(id) {
        this.$emit("delete-blog", id);
      },
    },
  };
</script>

<style scoped>
  .cont {
    background-color: white;
    padding: 10px;
    color: black;
  }
  p {
    padding: 5px 0px;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button {
    background-color: green;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
</style>
