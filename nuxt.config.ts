export default defineNuxtConfig({
  // ssr: false,
  modules: ["@nuxt/content"],
  content: {
    // documentDriven: true,
  },

  generate: {
    exclude: ["/admin/"],
  },
});
