<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useQuizStore } from "../stores/store";
import { onMounted } from "vue";

const quizStore = useQuizStore();

onMounted(() => {
  quizStore.resetQuiz();
});
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
      ><UButton
        icon="i-lucide-rocket"
        variant="solid"
        color="secondary"
        class="h-[28px] md:h-[40px] px-3 md:px-5 md:text-base cursor-pointer"
        >Start</UButton
      >
    </RouterLink>
  </div>
</template>

<style scoped></style>
