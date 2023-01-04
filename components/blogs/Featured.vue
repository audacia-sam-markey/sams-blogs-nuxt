<template>
  <article>
    <nuxt-link :to="blog._path" v-if="blog._path">
      <img :src="props.blog.thumbnail" alt="a picture of the blogs thumbnail" />

      <h1>{{ blog.title }}</h1>
    </nuxt-link>
    <span class="description">{{ blog.introduction }}</span>
    <span
      >Written By
      <nuxt-link :to="author._path">{{ author.displayName }}</nuxt-link></span
    >
    <span>Date Published: {{ dayjs(blog.date, "DD-MMM-YYYY") }}</span>
    <span>#{{ blog.categories }}</span>
  </article>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import { PropType, Ref } from "vue";
import { Author } from "~~/models/author.model";
import { IBlog } from "~~/models/blog.interface";
import { IAuthor } from "~~/models/interfaces/author.interface";

const props = defineProps({
  blog: { required: true, type: Object as PropType<IBlog> },
});
console.log(await queryContent("/authors", props.blog.author).findOne());

const author: Ref<IAuthor> = ref(
  new Author(await queryContent("/authors", props.blog.author).findOne())
    .authorDetails
);
console.log(props.blog.introduction);
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

  a {
    text-decoration: none;
    color: black;
  }
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
  ::v-deep .description {
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
