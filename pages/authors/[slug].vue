<template>
  <div class="author-container">
    <h1>
      <img :src="author.profilePicture" alt="a picture of an animal" />
      <span>{{ author.displayName }} </span> |
      <span>{{ author.position }}</span>
    </h1>
    <article>
      <ContentDoc :v-slot="author.body" />
    </article>

    <!-- <main v-if="blogs.length">
      <h2>
        <div class="line"></div>
        <span> Blogs Written By {{ author.name }} </span>
        <div class="line"></div>
      </h2>
      <div class="blogs-container author-blog-container" v-if="blogs.length">
        <BlogsLink v-for="blog in blogs" :key="blog._path" :blog="blog" />
      </div>
    </main> -->
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
// const { blogs, getBlogs } = useLoadBlogsByAuthor(route.params.slug as string);
// getBlogs();
</script>

<style scoped lang="scss">
h1 {
  font-size: 3rem;
  display: flex;
  align-items: center;
  height: 3rem;
  line-height: 1.5rem;
  span:first-child {
    border-right: 2px solid black;
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    object-fit: cover;
    object-position: center;
  }
  span {
    padding: 20px;
  }
}
.author-container,
main {
  margin-top: 60px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  article {
    width: 80%;
    padding: 20px;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    line-height: 1.5;
    :deep(a) {
      text-decoration: none;
      cursor: default;
      color: black;
    }
  }
  .author-blog-container {
    width: 100%;
  }
  .img-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 60%;
    img {
      border-radius: 5px;
      max-width: 100%;
    }
  }
  main {
    margin-top: 0;

    h2 {
      gap: 20px;
      width: 100%;
      display: flex;
      align-items: center;
      font-size: 2rem;
    }
  }
}
</style>
