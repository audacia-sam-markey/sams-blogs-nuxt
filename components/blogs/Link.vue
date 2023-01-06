<template>
  <NuxtLink class="grid-link-container" :to="props.blog._path">
    <img :src="blog.thumbnail" alt="" />
    <h5>
      {{ blog.title }}
    </h5>

    <AuthorLink
      v-if="blog.author && !hideAuthorLink"
      :author-slug="blog.author"
    />
    <span>{{ useFormatDate(blog.date.toString()) }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { IBlog } from "~~/models/blog.interface";

const props = defineProps({
  blog: { required: true, type: Object as PropType<IBlog> },
  hideAuthorLink: { required: false, type: Boolean },
});
</script>

<style scoped lang="scss">
a {
  height: 100%;
  width: 100%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  color: #000;
  font-weight: 600;
  gap: 5px;
  justify-content: space-between;

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  span {
    width: 100%;
    font-size: 1rem;
    color: #000;
    font-weight: 400;
  }
}
</style>
