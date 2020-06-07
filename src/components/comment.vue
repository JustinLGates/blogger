<template>
  <div class="p-1">
    <div class="bg-light">
      <div class="text-right">
        <p class="text-dark pt-1 pr-2">{{comment.createdAt}}</p>
      </div>
      <div class="d-flex align-items-end pl-2">
        <img class="profile-img" src="https://placehold.it/100" alt />
        <h5 class="pl-1">{{comment.creatorEmail}}</h5>
      </div>
      <p class="p-1">{{comment.body}}</p>

      <button @click="deleteComment" class="btn btn-danger" v-if="isCreator">delete</button>

      <div class="d-flex justify-content-between"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["comment"],
  computed: {
    isCreator() {
      if (!this.$auth.user) {
        return false;
      }
      return this.$auth.user.email == this.comment.creatorEmail;
    }
  },
  methods: {
    async deleteComment() {
      console.log("comment obj deleted" + JSON.stringify(this.comment));
      await this.$store.dispatch("deleteComment", this.comment);
      this.$store.dispatch("setActiveBlog", this.comment.blogId);
    }
  }
};
</script>

<style>
</style>