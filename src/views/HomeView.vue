<script setup lang="ts">
import { ElButton } from "element-plus";
import { RouterLink } from "vue-router";
import { useQuizStore } from "../stores/store";
import { ref, computed, onMounted, onUnmounted } from "vue";

const quizStore = useQuizStore();

const screenWidth = ref(window.innerWidth);

const updateSize = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateSize);
  quizStore.resetQuiz();
});

onUnmounted(() => {
  window.removeEventListener("resize", updateSize);
});

const isMobile = computed(() => (screenWidth.value < 768 ? "small" : "large"));
</script>

<template>
  <div
    class="flex flex-col justify-center items-center text-center gap-5 md:gap-10 sm:w-[600px] m-5 px-5 py-10 rounded-sm transform -translate-y-25 bg-white/90 shadow-sm"
  >
    <div class="flex flex-col items-center gap-1 md:gap-2">
      <div class="text-xl md:text-3xl font-semibold">Random 10 questions</div>
      <div class="text-sm md:text-base">
        From free to use, user-contributed trivia question database
      </div>
    </div>
    <RouterLink to="quiz"
      ><el-button type="primary" :size="isMobile" class="shadow-sm"
        >Start</el-button
      >
    </RouterLink>
  </div>
</template>

<style scoped></style>
