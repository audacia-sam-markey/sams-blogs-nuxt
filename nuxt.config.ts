export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  content: {
    documentDriven: true,
  },
  generate: {
    exclude: ["public/admin"],
  },
});
