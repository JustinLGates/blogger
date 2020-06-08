<template>
  <div class="home container-fluid pt-4">
    <!-- hide if not auth -->
    <div class="row pt-5 pb-5">
      <div v-if="this.$auth.isAuthenticated">
        <div class="col-12 d-flex justify-content-center add-blog-btn">
          <div class="mx-2 mx-lg-5">
            <button @click="toggleForm" class="btn btn-success">
              <i class="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <NewPostFormComp v-if="this.isBlogFormShowing" />
    <BlogComp v-for="blog in blogs" :key="blog.id" :blog="blog" />
  </div>
</template>

<script>
import BlogComp from "../components/BlogComp.vue";
import NewPostFormComp from "../components/NewPostFormComp.vue";
export default {
  mounted() {
    this.$store.dispatch("getAllBlogs");
  },
  computed: {
    isBlogFormShowing() {
      return this.$store.state.isBlogFormShowing;
    },
    blogs() {
      return this.$store.state.blogs;
    }
  },
  name: "home",
  data() {
    return {
      blogFormData: {},
      isFormActive: false
    };
  },

  components: {
    BlogComp,
    NewPostFormComp
  },
  methods: {
    createNewBlog() {
      this.$store.dispatch("createNewBlog", this.blogFormData);
    },
    toggleForm() {
      this.$store.dispatch("toggleBlogForm");
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
</style>