import { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { IBlog } from "./../blog.interface";
export class Blog {
  blogDetails: IBlog;

  constructor(parsedBlog: ParsedContent) {
    this.blogDetails = {
      thumbnail: parsedBlog.thumbnail,
      image: parsedBlog.image,
      title: parsedBlog.title as string,
      _path: parsedBlog._path as string,
      date: parsedBlog.date,
      categories: parsedBlog.categories,
      body: parsedBlog.body,
      _file: parsedBlog._file as string,
      author: parsedBlog.author,
      introduction: parsedBlog.introduction,
    };
  }
}
