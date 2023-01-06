<template>
  <h1>{{ categoryName }}</h1>
  <LoaderSpinner v-if="isLoading && !blogs" />
  <div class="grid-container" v-else-if="blogs && blogs.length">
    <BlogsLink v-for="blog in blogs" :key="blog._path" :blog="blog" />
  </div>
  <div v-else-if="blogs && blogs.length === 0">
    Sorry there are no blogs in this category at the moment 😞
  </div>
</template>

<script setup lang="ts">
import { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { Ref } from "vue";
import { IBlog } from "~~/models/blog.interface";
import { Category } from "~~/models/category.model";
import { Blog } from "~~/models/interfaces/blog.model";

const route = useRoute();
const categoryName: Ref<string> = ref("");
const isLoading: Ref<boolean> = ref(true);
const categoryDetails: ICategory = await getCategoryDetails();
const { getContent, parsedContentArray } = useLoadAllContent("/blog", {
  ["categories"]: { $eq: categoryDetails.categoryName },
});
const blogs: Ref<IBlog[] | null> = ref(null);
await getContent();
categoryName.value = categoryDetails.categoryName;

if (parsedContentArray.value) {
  isLoading.value = false;
  blogs.value = parsedContentArray.value.map(
    (parsedContent) => new Blog(parsedContent).blogDetails
  );
}
else if (blogs.value?.length === 0) {
  isLoading.value = false;
}
async function getCategoryDetails(): Promise<ICategory> {
  const { getContent, parsedContent } = useLoadOneContent(
    "/categories",
    route.params.slug as string
  );

  await getContent();
  return new Category(parsedContent.value as ParsedContent).categoryDetails;
}
</script>

<style scoped lang="scss">
div:last-child {
  font-size: 1.4rem;
}
</style>
