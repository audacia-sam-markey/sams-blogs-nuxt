<script lang="ts" setup>
const navigationLinks = await queryContent("navigation").find();
const navLinksParsed = await navigationLinks[0].items;
</script>

<template>
  <nav>
    <ul>
      <li v-for="link in navLinksParsed" :key="link.path">
        <nuxt-link :to="link.link">{{ link.name }}</nuxt-link>
      </li>
      <li>
        <a href="./admin"> Admin portal</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
ul {
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: flex-end;
  gap: 20px;

  a {
    text-decoration: none;
    padding: 0.5rem;
    border-radius: 1rem;

    &:hover {
      background-color: #f3f3f3;
    }
  }
}
</style>
