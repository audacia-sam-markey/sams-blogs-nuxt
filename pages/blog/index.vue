<template>
  <h1>My Blogs</h1>
  <ul>
    <li v-for="blog of blogs" :key="blog.slug">
      <NuxtLink :to="blog._path"
        >{{ blog.title }}
        <span>{{ convertDateToNiceFormat(blog.date) }}</span>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import dayjs from "dayjs";

const blogs = await queryContent("blog").find();

function convertDateToNiceFormat(dateString: string): string {
  return `${dayjs(dateString).format("dddd - DD/MM/YYYY")}`;
}
</script>

<style scoped lang="scss">
ul {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 1.5rem;
  width: 100%;

  li {
    width: 100%;
    list-style: none;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: rgb(250, 250, 250);
    box-shadow: 3px;
    box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.15);
    transition: all 300ms ease;

    a {
      width: 100%;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      span {
        font-size: 1rem;
        color: #000;
      }
    }

    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>
