<template>
  <h1>{{ homepageData.title }}</h1>
  <img :src="homepageData.image" alt="" />
  {{ homepageData.description }}
</template>

<script setup lang="ts">
useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});
let [...homepage] = await queryContent("/home").limit(1).find();

const homepageData = homepage[0];
console.log(homepageData);
</script>

<style scoped lang="scss"></style>
