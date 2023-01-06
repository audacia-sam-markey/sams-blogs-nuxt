<template>
  <main v-if="featuredBlogs">
    <BlogsFeaturedLink
      v-for="blog in featuredBlogs"
      :key="blog._path"
      :blog="blog"
    />
  </main>
</template>

<script setup lang="ts">
import { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { ComputedRef, Ref } from "vue";
import { IBlog } from "~~/models/blog.interface";
import { Blog } from "~~/models/interfaces/blog.model";

useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});

const featuredBlogs: Ref<IBlog[]> = ref([]);
const { getContent, contentArray } = useLoadAllContent("/featured-blogs");
getContent();

const featuredBlogList: ComputedRef<string[]> = computed((): string[] => {
  if (contentArray.value[0]) {
    return contentArray.value[0]["featured-blogs"].map(
      (featuredBlog: ParsedContent) => featuredBlog["featured-blog-id"]
    );
  }
  return [];
});
watch(featuredBlogList, () => getFeaturedBlogs());

async function getFeaturedBlogs(): Promise<void> {
  featuredBlogs.value = (
    await queryContent("/blog")
      .where({ _file: { $containsAny: featuredBlogList.value } })
      .find()
  ).map((parsedContent) => new Blog(parsedContent).blogDetails);
}
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
