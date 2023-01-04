<template>
  <div>
    <Navigation />

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

main {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 1800px;
  margin-top: calc(100px - 2rem);

  img {
    max-width: 800px;
  }
}
</style>
