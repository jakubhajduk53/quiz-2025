<script setup lang="ts">
import { useQuizStore } from "../stores/store";

const quizStore = useQuizStore();
</script>
<template>
  <div class="flex flex-col gap-3 md:gap-5">
    <div
      v-html="quizStore.getCurrentQuestionText"
      class="text-base md:text-xl font-semibold"
    ></div>
    <URadioGroup
      :model-value="quizStore.userAnswers[quizStore.currentQuestion]"
      @update:model-value="quizStore.saveAnswer($event as string)"
      :items="quizStore.getQuestions"
      orientation="vertical"
      class="flex items-center justify-center"
    />
  </div>
</template>

<style scoped></style>
