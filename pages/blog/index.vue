<template>
  <h1>Blogs</h1>

  <div class="blogs-container">
    <!-- <BlogsLink :blog="blog" v-for="blog in blogs" :key="blog._path" /> -->
  </div>
</template>

<script setup lang="ts">
import { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { ComputedRef } from "vue";
import { IBlog } from "~~/models/blog.interface";
import { Blog } from "~~/models/interfaces/blog.model";

const { getContent, contentArray } = useLoadAllContent("/blog");
getContent();

// const blogs: ComputedRef<IBlog[]> = computed(() =>
//   contentArray.value.map(
//     (content: ParsedContent) => new Blog(content).blogDetails
//   )
// );
</script>

<style scoped lang="scss"></style>
