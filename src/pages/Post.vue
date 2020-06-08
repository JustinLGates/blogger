<template>
  <div class="p-0 m-0 pt-4">
    <div class="home container-fluid pt-5">
      <div class="gray">
        <!--blog  -->
        <h5 v-if="!this.$auth.user">Login to share your thoughts</h5>
        <BlogComp :blog="blog" />
        <div class="row">
          <div class="col-12">
            <form v-if="this.$auth.user">
              <div class="d-flex m-1">
                <div class="flex-grow-1 m-1 mr-3">
                  <input
                    v-model="comment.body"
                    class="w-100 h-100"
                    type="text"
                    placeholder="comment"
                  />
                </div>
                <div class="flex-grow-2 m-1 mr-2">
                  <button @click="postComment" type="submit" class="btn btn-success w-100">Post</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <!-- comment -->
        <Comment v-for="(comment, index) in comments" :key="index" :comment="comment" />
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "../components/comment";
import BlogComp from "../components/BlogComp";
export default {
  data() {
    return {
      comment: {}
    };
  },
  mounted() {
    this.$store.dispatch("getBlogById", this.$route.params.id);
  },
  computed: {
    activeBlog() {
      return this.$store.state.activeBlog;
    },
    comments() {
      return this.$store.state.blogById.comments;
    },
    blog() {
      return this.$store.state.activeBlog;
    }
  },
  name: "blogDetails",
  components: {
    Comment,
    BlogComp
  },
  methods: {
    postComment() {
      let commentData = {
        body: this.comment.body,
        blogId: this.$route.params.id,
        creatorEmail: this.$auth.user.email
      };
      console.log(
        "data being passed to he post/Commnet :" + JSON.stringify(commentData)
      );

      this.$store.dispatch("postComment", commentData);
    }
  }
};
</script>


<style >
.gray {
  background-color: rgb(168, 168, 168);
}
</style>