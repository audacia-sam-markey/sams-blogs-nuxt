<template>
  <nav>
    <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
        </li>
        <li><NuxtLink to="./admin"> Admin portal</NuxtLink></li>
      </ul>
    </ContentNavigation>
  </nav>
</template>

<style lang="scss">
ul {
  display: flex;
  list-style: none;
  gap: 20px;

  li {
    a {
      text-decoration: none;
      padding: 1rem;
      background-color: #f3f3f3;
      border-radius: 1rem;
    }
  }
}
</style>
