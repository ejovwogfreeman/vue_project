<template>
  <div class="container">
    <form @submit="submitForm">
      <h2>Create a New Blog</h2>
      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="title" class="form-control" />
      </div>
      <div class="form-group">
        <label for="content">Content:</label>
        <textarea
          id="content"
          v-model="content"
          class="form-control"
          rows="6"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
  import { useRouter } from "vue-router";

  export default {
    name: "CreateView",
    data() {
      return {
        title: "",
        content: "",
      };
    },
    methods: {
      submitForm(e) {
        e.preventDefault();
        if (!this.title || !this.content) {
          return alert("Please fill all fields");
        }

        const newBlog = {
          id: Math.random(),
          title: this.title,
          content: this.content,
          date:
            new Date().toDateString() + " | " + new Date().toLocaleTimeString(),
        };

        console.log(newBlog);
        this.$emit("add-blog", newBlog);
      },
    },
  };
</script>

<style scoped>
  form {
    background-color: white;
    color: black;
    padding: 10px;
  }

  form input {
    margin-bottom: 10px;
    width: 100%;
    outline: none;
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }

  form textarea {
    margin-bottom: 10px;
    width: 100%;
    outline: none;
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }

  form button {
    margin-bottom: 10px;
    width: 100%;
    background-color: green;
    border: none;
    outline: none;
    padding: 10px;
    color: white;
    cursor: pointer;
  }
</style>
