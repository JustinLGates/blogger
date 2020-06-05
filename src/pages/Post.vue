<template>
  <div class="home container-fluid pt-5">
    <div class="row pt-4">
      <!--  -->

      <div class="col-12 col-sm-6 col-md-4 col-lg-3 m-auto">
        <div class="bg-light p-1">
          <div class="bg-light">
            <h3 class="pl-2 p-1">title</h3>
            <div class="m-1">
              <img class="img" src="https://placehold.it/150" alt />
            </div>
            <div class="bg-light p-1 m-1">
              <div class="text-right">
                <p class="text-dark">11/25 8:23pm</p>
              </div>
              <div class="d-flex align-items-end">
                <img class="profile-img" src="https://placehold.it/100" alt />
                <h4 class="pl-1">username</h4>
              </div>

              <p
                class="p-1"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni omnis exercitationem id molestiae doloremque voluptates. Veniam, nemo, molestias, sit velit harum maxime debitis eligendi alias qui quisquam aliquid eum iste.</p>
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

        <!-- comment -->

        <div class="p-1 gray">
          <div class="bg-light">
            <div class="text-right">
              <p class="text-dark pt-1 pr-2">11/25 8:23pm</p>
            </div>
            <div class="d-flex align-items-end pl-2">
              <img class="profile-img" src="https://placehold.it/100" alt />
              <h5 class="pl-1">username</h5>
            </div>

            <p
              class="p-1"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni omnis exercitationem id molestiae doloremque voluptates. Veniam, nemo, molestias, sit velit harum maxime debitis eligendi alias qui quisquam aliquid eum iste.</p>
            <div class="d-flex justify-content-between"></div>
          </div>
        </div>

        <!--comment end -->
      </div>
      <!--end column  -->
    </div>
  </div>
</template>

<script>
export default {
  name: "postDetails",
  components: {}
};
</script>


<style >
.gray {
  background-color: rgb(168, 168, 168);
}
</style>