<script setup lang="ts">
import { ElButton } from "element-plus";
import { RouterLink } from "vue-router";
import { useQuizStore } from "../stores/store";
import { onMounted } from "vue";
import { useScreenSize } from "../composables/useScreenSize";

const { primaryButton } = useScreenSize();

const quizStore = useQuizStore();

onMounted(() => {
  quizStore.resetQuiz();
});
</script>

<template>
  <div
    class="flex flex-col justify-center items-center text-center gap-5 md:gap-10 sm:w-[600px] m-5 px-5 py-10 rounded-sm transform -translate-y-25 bg-white/90 shadow-[0px_3px_5px_hsla(0,0%,0%,20%)] inset-shadow-[0px_3px_0px_hsl(0,0%,95%)]"
  >
    <div class="flex flex-col items-center gap-1 md:gap-2">
      <div class="text-xl md:text-3xl font-semibold">Random 10 questions</div>
      <div class="text-sm md:text-base">
        From free to use, user-contributed trivia question database
      </div>
    </div>
    <RouterLink to="quiz"
      ><el-button type="primary" :size="primaryButton" class="shadow-sm"
        >START</el-button
      >
    </RouterLink>
  </div>
</template>

<style scoped></style>
