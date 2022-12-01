<template>
  <div>
    <li v-for="blog of blogs" :key="blog.slug">
      <NuxtLink :to="blog.slug">{{ blog.title }}</NuxtLink>
    </li>
  </div>
</template>

<script setup lang="ts">
const blogs = await queryContent("blogs").find();
</script>
