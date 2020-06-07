<template>
  <div class="about text-center pt-5">
    <h4 class="pt-4">Welcome {{profile.name}}</h4>
    <img class="profile-img" :src="profile.picture" alt />
    <BlogComp v-for="blog in blogs" :key="blog.id" :blog="blog" />
  </div>
</template>

<script>
import BlogComp from "../components/BlogComp";
export default {
  mounted() {
    this.$store.dispatch("getProfile");
    this.$store.dispatch("getMyBlogs", this.profile._id);
  },

  name: "Profile",
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    blogs() {
      return this.$store.state.blogs;
    }
  },
  components: {
    BlogComp
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
