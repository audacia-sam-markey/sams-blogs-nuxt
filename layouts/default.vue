<template>
  <div>
    <header>
      <h1>Sams Blogs</h1>
      <Navigation />
    </header>
    <slot />
  </div>
</template>

<style lang="scss">
header {
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
}
</style>
