<template>
  <div class="p-1 gray">
    <div class="bg-light">
      <div class="text-right">
        <p class="text-dark pt-1 pr-2">
          11/25 8:23pm
          {{commentData}}
        </p>
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
</template>

<script>
export default {
  props: ["commentData"]
};
</script>

<style>
</style>