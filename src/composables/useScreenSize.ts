import { ref, onMounted, onUnmounted, computed } from "vue";

export const useScreenSize = () => {
  const screenWidth = ref(window.innerWidth);

  const updateSize = () => {
    screenWidth.value = window.innerWidth;
  };

  onMounted(() => {
    window.addEventListener("resize", updateSize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateSize);
  });

  const primaryButton = computed(() =>
    screenWidth.value < 768 ? "small" : "large"
  );
  const secondaryButton = computed(() =>
    screenWidth.value < 768 ? "small" : "default"
  );

  return {
    screenWidth,
    primaryButton,
    secondaryButton,
  };
};
