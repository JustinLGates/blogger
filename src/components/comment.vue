<template>
  <div class="p-1">
    <div class="bg-light">
      <div class="text-right">
        <p class="text-dark pt-1 pr-2">{{comment.createdAt}}</p>
      </div>
      <div class="d-flex align-items-end pl-2">
        <img class="profile-img" :src="comment.creator.picture" />
        <h5 class="pl-1">{{comment.creatorEmail}}</h5>
      </div>
      <p class="p-1">{{comment.body}}</p>

      <div v-if="isCreator">
        <button @click="deleteComment" class="btn btn-danger">Delete</button>
        <button @click="editComment" class="btn btn-secondary">Edit</button>

        <input type="text" v-model="editForm.body" placeholder="update your comment" />
      </div>
      <div class="d-flex justify-content-between"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editForm: {}
    };
  },
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
    deleteComment() {
      this.$store.dispatch("deleteComment", this.comment);
    },
    editComment() {
      let update = {
        blogId: this.comment.blogId,
        id: this.comment.id,
        body: this.editForm.body
      };
      this.$store.dispatch("editComment", update);
    }
  }
};
</script>

<style>
</style>