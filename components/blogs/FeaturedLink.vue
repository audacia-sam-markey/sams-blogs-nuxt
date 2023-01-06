<template>
  <article>
    <nuxt-link :to="blog._path" v-if="blog._path">
      <img :src="props.blog.thumbnail" alt="a picture of the blogs thumbnail" />

      <h1>{{ blog.title }}</h1>
    </nuxt-link>
    <span class="description">{{ blog.introduction }}</span>
    <!-- <author-link v-if="blog.author" :author-slug="blog.author" /> -->
    <span>Date Published: {{ formattedDate }}</span>
    <span>#{{ blog.categories }}</span>
  </article>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { IBlog } from "~~/models/blog.interface";
const props = defineProps({
  blog: { required: true, type: Object as PropType<IBlog> },
});
const formattedDate: string = useFormatDate(props.blog.date.toString());
</script>

<style scoped lang="scss">
article {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  transition: transform 200ms ease;
  background-color: var(--background-color);
  z-index: 1;
  gap: 30px;

  img {
    max-width: 100%;
  }
  h1 {
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    margin: 1rem 0;
    padding: 2rem 0;
    font-size: 1.5rem;
  }
  :deep(.description) {
    max-height: 300px;
    overflow-y: hidden;
  }

  &:nth-child(even) {
    height: 100%;

    h1 {
      font-size: 2rem;
    }
  }
  span {
    color: gray;
  }
  &:hover {
    transform: scale(1.01);
  }
}
</style>
