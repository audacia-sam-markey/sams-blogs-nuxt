import { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { QueryBuilderWhere } from "@nuxt/content/dist/runtime/types";

import { Ref } from "vue";
export function useLoadAllContent(
  contentPath: string,
  whereFilter: QueryBuilderWhere | null = null
) {
  const contentArray: Ref<ParsedContent[]> = ref([]);
  const getContent = async () => {
    if (whereFilter) {

      contentArray.value = await queryContent(contentPath)
        .where(whereFilter)
        .find();
    } else {
      contentArray.value = await queryContent(contentPath).find();
    }
  };

  return { getContent, contentArray };
}
