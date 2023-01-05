import { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { Ref } from "vue";
export function useLoadAllContent(contentPath: string) {
  const contentArray: Ref<ParsedContent[]> = ref([]);
  const getContent = async () => {
    contentArray.value = await queryContent(contentPath).find();
  };

  return { getContent, contentArray };
}
