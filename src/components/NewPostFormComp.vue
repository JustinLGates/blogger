<template>
  <div class="fade-in">
    <div class="row blog-form">
      <div class="col-md-8 col-12 pt-3 m-auto text-center">
        <form class="shadow bg-secondary pt-2 rounded" @submit.prevent="createNewBlog()">
          <div class="text-light m-2 p-1">
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

            <div class="d-flex justify-content-center m-2 p-2">
              <button type="submit" class="m-1 p-1 btn btn-success">Post</button>
              <!-- todo hide form -->
              <button @click="blogFormData={}" class="m-1 p-1 btn text-dark btn-danger">Cancel</button>
              <!--  TODO  hide form and save as draft -->
            </div>
          </div>
        </form>
      </div>
    </div>
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
      this.$store.dispatch("createNewBlog", this.blogFormData);
    }
  }
};
</script>


<style>
.blog-form {
  z-index: 1;
  position: fixed;
}
.blog-input {
  width: 90%;
}
.add-blog-btn {
  position: absolute;
  position: fixed;
  z-index: 1;
}
</style>