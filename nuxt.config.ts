export default defineNuxtConfig({
  css: ["~/assets/base.scss"],
  //ssr: false,
  modules: ["@nuxt/content"],
  content: {
    // documentDriven: true,
  },

  generate: {
    exclude: ["/admin/"],
    // async routes() {
    //   const res = await queryContent("/blog/").find();
    //   console.log(res);

    // },
  },
});
