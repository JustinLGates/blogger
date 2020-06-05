<template>
  <div class="row">
    <!--  -->
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 m-auto">
      <div class="bg-light p-1">
        <div class="bg-light">
          <h3 class="pl-2 p-1">{{blog.title}}</h3>
          <div class="m-1">
            <img class="img" src="https://placehold.it/150" alt />
          </div>
          <div class="bg-light p-1 m-1">
            <div class="text-right">
              <p class="text-dark">11/25 8:23pm</p>
            </div>
            <div class="d-flex align-items-end">
              <img class="profile-img" src="https://placehold.it/100" alt />
              <h4 class="pl-1"></h4>
            </div>
            <p class="p-1"></p>
            <div class="d-flex justify-content-between">
              <div class="m-2 p-1">
                <button class="btn btn-success">comments</button>
              </div>
              <div class="m-2 p-1">
                <button class="btn btn-danger">delete</button>
              </div>
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
    return {};
  },
  computed: {
    isCreator() {
      return this.$store.state.profile.email == this.post.creatorEmail;
    }
  },
  methods: {}
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