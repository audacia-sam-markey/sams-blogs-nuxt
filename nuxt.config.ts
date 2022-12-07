export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  content: {},
  generate: {
    exclude: [
      /^\/admin/, // path starts with /admin
    ],
  },
});
