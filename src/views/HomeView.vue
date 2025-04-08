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
    class="flex flex-col justify-center items-center text-center gap-5 md:gap-10 sm:w-[600px] m-5 px-5 py-10 rounded-sm -translate-y-25 bg-radial from-gray-tertiary to-gray-secondary shadow-[0px_3px_5px_hsla(39,15%,50%,50%)] inset-shadow-[0px_3px_0px_hsl(39,30%,90%)]"
  >
    <div class="flex flex-col items-center gap-1 md:gap-2">
      <div class="text-xl md:text-3xl font-semibold">Random 10 questions</div>
      <div class="text-sm md:text-base text-dark-gray-secondary">
        From free to use, user-contributed trivia question database
      </div>
    </div>
    <RouterLink to="quiz"
      ><el-button
        :size="primaryButton"
        color="hsl(338,85%,46%)"
        class="shadow-[0px_3px_5px_hsla(39,15%,50%,50%)] inset-shadow-[0px_0px_5px_hsl(39,30%,90%)]"
        >START</el-button
      >
    </RouterLink>
  </div>
</template>

<style scoped></style>
