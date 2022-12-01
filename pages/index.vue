<template>
  <main>
    <ContentDoc />
  </main>
</template>

<script setup>
useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});
</script>

<style scoped></style>
