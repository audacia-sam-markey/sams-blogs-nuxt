export default defineNuxtConfig({
  css: ["~/assets/base.scss"],
  //ssr: false,
  modules: ["@nuxt/content"],
  content: {
    // documentDriven: true,
  },

  generate: {
    exclude: ["/admin/"],
    async routes(): Promise<any[]> {
      const blogs = await queryContent("/blog").find();
      return blogs.map((blog) => ({
        route: blog._path,
        payload: blog,
      }));
    },
  },
});
