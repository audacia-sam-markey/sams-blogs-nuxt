<template>
  <h1>{{ content.title }}</h1>

  <p>{{content.description}}</p>
</template>

<script setup lang="ts">
const aboutPageContent = await queryContent("about").limit(1).find();
const content = aboutPageContent[0];
console.log();
</script>

<style scoped></style>
