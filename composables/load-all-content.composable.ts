import {
  ParsedContent,
  QueryBuilderWhere,
} from "@nuxt/content/dist/runtime/types";

import { Ref } from "vue";
export function useLoadAllContent(
  contentPath: string,
  whereFilter: QueryBuilderWhere | null = null
) {
  const parsedContentArray: Ref<ParsedContent[]> = ref([]);
  const getContent = async () => {
    if (whereFilter) {
      parsedContentArray.value = await queryContent(contentPath)
        .where(whereFilter)
        .find();
    } else {
      console.log(contentPath);

      parsedContentArray.value = await queryContent(contentPath).find();
      console.log(parsedContentArray.value);
    }
  };

  return { getContent, parsedContentArray };
}
