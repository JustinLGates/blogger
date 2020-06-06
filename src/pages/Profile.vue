<template>
  <div class="about text-center pt-5">
    <h1 class="pt-4">Welcome to the profile</h1>
    <img class="rounded" :src="profile.picture" alt />
    <p>{{ profile.email }}</p>
  </div>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    profile() {
      return this.$store.state.profile;
    }
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
