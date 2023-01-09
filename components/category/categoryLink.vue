<template>

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
  "/author",
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
