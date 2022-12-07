<script lang="ts" setup>
const navigationLinks = await queryContent("navigation").find();
const navLinksParsed = await navigationLinks[0].items;
</script>

<template>
  <nav>
    <ul class="navigation">
      <li v-for="link in navLinksParsed" :key="link.path">
        <nuxt-link :to="link.link">{{ link.name }}</nuxt-link>
      </li>
      <li>
        <a href="/admin/#/collections/blog"> Admin portal</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.navigation {
  position: fixed;
  top: 0;
  right: 25px;
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: flex-end;
  gap: 30px;
  li {
    transition: all 200ms ease;
    &:hover {
      transform: scale(1.3);
    }

    a {
      width: 100%;
      text-decoration: none;
      padding: 0.5rem;
      border-radius: 1rem;
      background-color: rgb(3, 48, 69);
      color: #fff;
      transition: inherit;
      &:hover {
        background-color: rgb(20, 78, 105);
      }
    }
  }
}
</style>
