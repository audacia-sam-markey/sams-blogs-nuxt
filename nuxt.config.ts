export default defineNuxtConfig({
  css: ["~/assets/base.css"],
  // ssr: false,
  modules: ["@nuxt/content"],
  content: {
    // documentDriven: true,
  },

  generate: {
    exclude: ["/admin/"],
  },
});
