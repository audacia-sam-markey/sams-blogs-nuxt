<template>
  <h1>Categories</h1>
  <div class="grid-container" v-if="categories">
    <nuxt-link
      class="grid-link-container"
      v-for="category in categories"
      :key="category._path"
      :to="category._path"
      >#{{ category.categoryName }}</nuxt-link
    >
  </div>
</template>

<script setup lang="ts">
import { ComputedRef } from "nuxt/dist/app/compat/vue-demi";
import { Category } from "~~/models/category.model";

const categories: ComputedRef<ICategory[] | null> = computed(() =>
  parsedContentArray.value.map(
    (parsedContent) => new Category(parsedContent).categoryDetails
  )
);

const { getContent, parsedContentArray } = useLoadAllContent("/categories");
getContent();
</script>

<style scoped lang="scss"></style>
