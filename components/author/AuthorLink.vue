<template>
  <span
    >Written By
    <nuxt-link :to="author._path">{{ author.displayName }}</nuxt-link>
  </span>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { Author } from "~~/models/author.model";
import { IAuthor } from "~~/models/interfaces/author.interface";

const props = defineProps({
  authorSlug: {
    required: true,
    type: String,
  },
});
const author: Ref<IAuthor> = ref(
  new Author(await queryContent("/authors", props.authorSlug).findOne())
    .authorDetails
);
</script>

<style scoped lang="scss">
span {
  width: 100%;
}
</style>
