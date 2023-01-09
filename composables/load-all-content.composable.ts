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

      parsedContentArray.value = await queryContent(contentPath).find();
    }
  };

  return { getContent, parsedContentArray };
}
