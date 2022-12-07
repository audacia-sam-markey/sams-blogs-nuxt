export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  content: {
    documentDriven: true,
  },
  generate: {
    exclude: [
      /^\/admin/, // path starts with /admin
    ],
  },
});
