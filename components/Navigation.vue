<script lang="ts" setup>
const navigationLinks = await queryContent("navigation").find();
const navLinksParsed = await navigationLinks[0].items;
</script>

<template>
  <header>
    <h1>Sams Blogs</h1>
    <nav>
      <ul class="navigation">
        <li v-for="link in navLinksParsed" :key="link.path">
          <nuxt-link :to="link.link">{{ link.name }}</nuxt-link>
        </li>
        <li>
          <a href="./admin/"> Admin portal</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  height: 100px;
  background-color: var(--background-color);
  box-shadow: 0 0px 4px 0px rgba($color: #000000, $alpha: 0.1);
  padding: 0 2rem;
  h1 {
    font-size: 64px;
  }
  .navigation {
    right: 25px;
    display: flex;

    list-style: none;
    align-items: flex-end;
    gap: 30px;
    li {
      transition: transform 200ms ease;
      &:hover {
        transform: scale(1.1);
      }

      a {
        font-weight: 600;
        font-size: 20px;
        width: 100%;
        text-decoration: none;
        padding: 0.5rem;
        border-radius: 1rem;
        color: var(--link-inactive);
        position: relative;
        transition: inherit;
        &::before {
          position: absolute;
          content: "";
          width: 100%;
          bottom: 0;
          left: 0;
          height: 1px;
          background-color: #000;
          transform: scaleX(0);
        }
        &:hover::before {
          transform: scaleX(1);
        }
      }
      .router-link-exact-active {
        color: var(--link-active);
        &::before {
          transform: scaleX(1);
        }
      }
    }
  }
}
</style>
