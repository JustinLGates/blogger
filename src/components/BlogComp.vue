<template>
  <div class="row">
    <!--  -->
    <div class="col-12 m-auto">
      <!-- col-sm-6 col-md-4 col-lg-3 -->
      <div class="bg-light p-1 m-2">
        <div class="bg-light">
          <div @click="setAcitveBlog">
            <h4 class="pl-2 p-1">{{blog.title}}</h4>
            <!--  TODO add image for posts that have image ......
             <div class="m-1" v-if="blog.img">
            <img class="img" src="https://placehold.it/150" alt />
            </div>-->
            <div class="bg-light p-1 m-1">
              <div class="text-right">
                <p class="text-dark">{{blog.createdAt}}</p>
              </div>
              <div class="d-flex align-items-end">
                <img class="profile-img" :src="blog.creator.picture||'https://placehold.it/150'" />
                <p class="pl-1">{{blog.creator.name}}</p>
              </div>
              <p class="p-1">{{blog.body}}</p>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <div class="m-2 p-1" v-if="isCreator">
              <button @click="deleteBlog(blog._id)" class="btn btn-danger m-1">delete</button>
              <button @click="editBlog(blog._id)" class="btn btn-secondary m-1">edit</button>
              <input v-model="blogBody.body" />
            </div>
            <div class="m-2 p-1">
              <!-- <button @click="setAcitveBlog" class="btn btn-info">comment</button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>


<script>
export default {
  props: ["blog"],
  data() {
    return {
      blogBody: { body: this.blog.body }
    };
  },
  computed: {
    isCreator() {
      if (!this.$auth.user) {
        return false;
      }
      return this.$auth.user.email == this.blog.creator.email;
    }
  },
  methods: {
    editBlog() {
      let update = {
        id: this.blog.id,
        body: this.blogBody.body
      };
      console.log("editing the blog" + JSON.stringify(update));

      this.$store.dispatch("editBlog", update);
    },
    deleteBlog(id) {
      this.$store.dispatch("deleteBlog", id);
    },
    setAcitveBlog() {
      // if (this.$auth.user) {
      // console.log("success");
      // this.$store.dispatch("setActiveBlog", this.blog._id);
      this.$router.push({ name: "Post", params: { id: this.blog._id } });
      // } else {
      // console.log("denied not loged in");
      // }
    }
  }
};
</script>

<style>
.profile-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.blog-card {
  width: 100%;
  background: black;
}
.img {
  width: 100%;
}
.time-stamp {
  left: -1rem;
}
</style>