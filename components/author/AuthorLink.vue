<template>
  <span v-if="author"
    >Written By
    <nuxt-link :to="author._path">{{ author.displayName }}</nuxt-link>
  </span>
</template>

<script setup lang="ts">
import { ComputedRef } from "vue";
import { Author } from "~~/models/author.model";
import { IAuthor } from "~~/models/interfaces/author.interface";

const props = defineProps({
  authorSlug: {
    required: true,
    type: String,
  },
});
const { getContent, parsedContent } = useLoadOneContent(
  "/authors",
  props.authorSlug
);
getContent();
const author: ComputedRef<IAuthor | null> = computed(() => {
  if (parsedContent.value) {
    return new Author(parsedContent.value).authorDetails;
  }
  return null;
});
</script>

<style scoped lang="scss">
span {
  width: 100%;
}
</style>
