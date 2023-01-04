<template>
  <div>
    <ContentDoc :v-slot="author.body" />
  </div>
</template>

<script setup lang="ts">
import { Author } from "~~/models/author.model";

const route = useRoute();

const authorDetails = await queryContent(
  "/authors",
  route.params.slug as string
).findOne();
const author = ref(new Author(authorDetails).authorDetails);
</script>

<style scoped></style>
