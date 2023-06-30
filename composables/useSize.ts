import { IS_SERVER } from "@/utils/config";

export const useSize = () => {
  const x = ref<number>(0);

  const handler = () => {
    x.value = window.innerWidth;
  };
  onMounted(() => {
    window.addEventListener("resize", handler);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", handler);
  });

  return {
    x,
  };
};
