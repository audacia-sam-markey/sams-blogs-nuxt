<template>
  <main v-if="blogsWhichAreFeatured.length">
    <BlogsFeaturedLink
      v-for="blog in blogsWhichAreFeatured"
      :key="blog._id"
      :blog="new Blog(blog).blogDetails"
    />
  </main>
</template>

<script setup lang="ts">
import { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { Blog } from "~~/models/interfaces/blog.model";

useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});
const featuredBlogs = await queryContent("featured-blogs").find();

const featuredBlogList = featuredBlogs[0]["featured-blogs"];
const blogsWhichAreFeatured: ParsedContent[] = (
  await queryContent("/blog").find()
).filter((blog) => {
  return featuredBlogList.find((featuredBlog: { "featured-blog-id": string }) =>
    blog._file?.includes(featuredBlog["featured-blog-id"])
  );
});
</script>

<style scoped lang="scss">
main {
  overflow: hidden;
  display: grid;
  flex-wrap: wrap;
  width: 100%;
  grid-template-columns: 0.6fr 1fr 0.6fr;
  align-items: flex-start;
  gap: 60px;
}
</style>
