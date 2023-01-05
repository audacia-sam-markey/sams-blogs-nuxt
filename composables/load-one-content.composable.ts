import { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { Ref } from "vue";
export function useLoadOneContent(path: string, slug: string) {
  const parsedContent: Ref<ParsedContent | null> = ref(null);
  const getContent = async () => {
    parsedContent.value = await queryContent(path, slug).findOne();
  };
  

  return { getContent, parsedContent };
}
