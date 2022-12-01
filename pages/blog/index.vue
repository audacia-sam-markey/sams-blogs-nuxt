<template>
  <div>
    <li v-for="blog of blogs" :key="blog.slug">
      <NuxtLink :to="blog._path">{{ blog.title }}</NuxtLink>
    </li>
  </div>
</template>

<script setup lang="ts">
const blogs = await queryContent("blog").find();
</script>


<style lang="scss"></style>