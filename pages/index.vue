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
// gets the blogs which are on the featured homepage
const { getContent, parsedContentArray } = useLoadAllContent("/featured-blogs");
getContent();
// awaits and when the array has returned in the response it will convert the object values to a string array
const featuredBlogList: ComputedRef<string[]> = computed((): string[] => {
  if (parsedContentArray.value[0]) {
    return parsedContentArray.value[0]["featured-blogs"].map(
      (featuredBlog: ParsedContent) => featuredBlog["featured-blog-id"]
    );
  }
  return [];
});
// once the string featured blog list has changed (has data inside the array) it will get the featured blogs
watch(featuredBlogList, (): Promise<void> => getFeaturedBlogs());

//gets the featured blogs using the $containsAny key which passes in the string array previously mentioned
async function getFeaturedBlogs(): Promise<void> {
  // converts the ParsedContent[] to type Iblog[] using map
  const { getContent, parsedContentArray } = useLoadAllContent("/blog", {
    _file: {
      $containsAny: featuredBlogList.value,
    },
  });

  getContent();

  watch(parsedContentArray, () => {
    featuredBlogs.value = parsedContentArray.value.map(
      (parsedContent) => new Blog(parsedContent).blogDetails
    );
  });
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
