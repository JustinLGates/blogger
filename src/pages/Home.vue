<template>
  <div class="home container-fluid pt-4">
    <div class="row pt-5 pb-4">
      <div class="col-12 d-flex justify-content-center add-blog-btn">
        <div class="mx-2 mx-lg-5">
          <button class="btn btn-success">+ New blog +</button>
        </div>
        <div class="mx-2 mx-lg-5">
          <button class="btn btn-light">My blogs</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 col-12 pt-3 m-auto text-center">
        <form class="blog-form shadow bg-light" @submit.prevent="createNewBlog()">
          <div class="text-dark m-2 p-2">
            <input
              required
              v-model="blogFormData.title"
              class="blog-input m-1 p-1"
              type="text"
              placeholder="Blog Title....... required"
            />
            <input
              required
              v-model="blogFormData.body"
              class="blog-input m-1 p-1"
              type="text"
              placeholder="content.... required"
            />
            <input
              v-model="blogFormData.img"
              class="blog-input m-1 p-1"
              type="text"
              placeholder="img url optional...."
            />
            <div class="d-flex justify-content-center m-2 p-2">
              <button type="submit" class="m-1 p-1 btn btn-success">Post</button>
              <!-- todo hide form -->
              <button class="m-1 p-1 btn btn-danger">Cancel</button>
              <!--  TODO  hide form -->
            </div>
          </div>
        </form>
      </div>
    </div>
    <BlogComp v-for="blog in blogs" :key="blog.id" :blog="blog" />
  </div>
</template>

<script>
import BlogComp from "../components/BlogComp.vue";
export default {
  mounted() {
    this.$store.dispatch("getAllBlogs");
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    }
  },
  name: "home",
  data() {
    return {
      blogFormData: {}
    };
  },

  components: {
    BlogComp
  },
  methods: {
    createNewBlog() {
      this.$Store.dispatch("createNewBlog", this.blogFormData);
    }
  }
};
</script>


<style>
.blog-form {
  width: 100%;
  border-radius: 6px;
}
.blog-input {
  width: 80%;
}
.add-blog-btn {
  position: absolute;

  position: fixed;
  z-index: 1;
}
.bg-dark-glass {
}
</style>