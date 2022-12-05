<template>
  <div>
    <header>
      <h1>Sams Blogs</h1>
      <Navigation />
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
body {
  font-family: "Playfair Display", serif;
}
header {
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
}
</style>
