import { IBlog } from "./../models/blog.interface";
import { Ref } from "vue";
import { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { Blog } from "~~/models/interfaces/blog.model";
export function useLoadBlogsByAuthor(authorSlug: string): {
  blogs: Ref<IBlog[]>;
  getBlogs: () => Promise<void>;
} {
  const blogs: Ref<IBlog[]> = ref([]);
  const getBlogs = async (): Promise<void> => {
    const parsedArray: ParsedContent[] = await queryContent("/blog")
      .where({ author: { $eq: authorSlug } })
      .find();
    if (parsedArray.length) {
      blogs.value = parsedArray.map((parsed) => new Blog(parsed).blogDetails);
    }
  };
  return { blogs, getBlogs };
}
