<template>
  <div class="p-0 m-0 pt-4">
    <div class="home container-fluid pt-5">
      <!--blog  -->
      <BlogComp :blog="blog" />
      <!-- comment -->
      <Comment />
    </div>
  </div>
</template>

<script>
import Comment from "../components/comment";
import BlogComp from "../components/BlogComp";
export default {
  mounted() {
    this.$store.dispatch("getBlogById", this.blog);
  },
  computed: {
    blog() {
      return this.$store.state.activeBlog;
    }
  },
  name: "blogDetails",
  components: {
    Comment,
    BlogComp
  }
};
</script>


<style >
.gray {
  background-color: rgb(168, 168, 168);
}
</style>