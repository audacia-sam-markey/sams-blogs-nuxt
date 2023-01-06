<template>
  <h1>Out Writing Team</h1>

  <main>
    <div v-for="author in parsedContentArray" :key="author._path">
      <nuxt-link :to="author._path">
        {{ author["display-name"] }}
      </nuxt-link>
    </div>
  </main>
</template>

<script setup lang="ts">
const { getContent, parsedContentArray } = useLoadAllContent("/author");
getContent();
</script>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  gap: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  width: 60%;
  div {
    display: flex;
    width: 100%;
  }
  a {
    cursor: pointer;
    text-align: center;
    width: 100%;
    text-decoration: none;
    color: var(--link-inactive);
    font-size: 1.4rem;
    padding: 1.4rem;
    line-height: 1.4rem;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    transition: transform 200ms linear;

    &:hover {
      color: var(--link-active);
      border-color: var(--link-active);
      transform: scale(1.01);
    }
  }
}
</style>
