import { ParsedContent } from "@nuxt/content/dist/runtime/types";
export class Category {
  categoryDetails!: ICategory;

  constructor(parsedObj: ParsedContent) {
    this.categoryDetails = {
      _path: parsedObj._path as string,
      categoryName: parsedObj["category-name"],
    };
  }
}
