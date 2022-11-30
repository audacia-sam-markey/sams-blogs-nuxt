<template>
  <ul>
    <li v-for="blog in blogs" :key="blog.id">{{ blog.title }}</li>
  </ul>
</template>

<script setup lang="ts">
const { data: blogs } = await useAsyncData("blogs", () =>
  queryContent("/blog").find()
);
</script>
