<template>
  <main class="blog-container" v-if="blog">
    <div class="headers">
      <h1>{{ blog.title }}</h1>
      <span> Published on {{ useFormatDate(blog.date.toString()) }} | <AuthorLink :author-slug="blog.author"/> </span>
    </div>
    <img :src="blog.image" alt="Picture of the blogging image" />
    <div class="content">
      <ContentDoc slot="default" />
    </div>
  </main>
</template>

<style lang="scss">
.blog-container {
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  .headers {
    display: flex;
    align-items: center;
    flex-direction: column;
    span {
      color: var(--link-inactive);
    }
    h1 {
      font-size: 3rem;
      text-align: center;
    }
  }

  .content {
    div {
      font-size: 1.4rem;
      display: flex;
      flex-direction: column;
      gap: 20px;
      p {
        font-weight: 600;
      }
    }
    ol,
    ul {
      padding-left: 30px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      list-style-position: inside;
      li {
        font-size: 1.1rem;
      }
    }
  }
  img {
    width: 70%;
    aspect-ratio: 16/9;
    object-fit: cover;
  }
}
</style>
<script setup lang="ts">
import { Ref } from "vue";
import { IBlog } from "~~/models/blog.interface";
import { Blog } from "~~/models/interfaces/blog.model";

const route = useRoute();
const { getContent, parsedContent } = useLoadOneContent(
  "/blog",
  route.params.slug as string
);

getContent();
const blog: Ref<IBlog | null> = computed(() => {
  if (parsedContent.value) {
    return new Blog(parsedContent.value).blogDetails;
  }
  return null;
});
</script>
