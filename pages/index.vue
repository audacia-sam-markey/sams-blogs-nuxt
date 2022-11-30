<template>
  <div>Home page</div>
</template>

<script lang="ts">
export default {
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
      ],
    };
  },
};
// useHead({
//   script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
// });
</script>

<style scoped></style>
