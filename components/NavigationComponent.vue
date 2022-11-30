<template>
  <nav>
    <NuxtLink to="/" />
    <NuxtLink to="/about" />
    <NuxtLink to="/blog" />
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
nav {
  display: flex;
  gap: 20px;
}
</style>
