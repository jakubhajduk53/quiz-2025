<script setup lang="ts">
import QuizElement from "../components/QuizElement.vue";
import StepBarElement from "../components/StepBarElement.vue";
import { RouterLink } from "vue-router";
import { useQuizStore } from "../stores/store";
import { onMounted } from "vue";

const quizStore = useQuizStore();

onMounted(async () => {
  await quizStore.fetch();
});
</script>

<template>
  <div
    class="flex flex-col justify-center items-center text-center gap-5 md:gap-10 w-[600px] m-5 px-5 py-10 rounded-sm transform -translate-y-25 bg-white/90 shadow-sm"
    v-loading="quizStore.loadingStatus"
  >
    <template v-if="quizStore.quizData">
      <StepBarElement />
      <QuizElement />
      <div class="flex justify-center gap-3">
        <UButton
          variant="subtle"
          color="secondary"
          class="h-[28px] md:h-[40px] px-3 md:px-5 md:text-base cursor-pointer"
          @click="quizStore.previousQuestion"
          :disabled="quizStore.isFirstQuestion"
          >PREVIOUS</UButton
        >
        <RouterLink to="results" v-if="quizStore.isLastQuestion">
          <UButton
            variant="solid"
            color="secondary"
            class="h-[28px] md:h-[40px] px-3 md:px-5 md:text-base cursor-pointer"
            >END</UButton
          >
        </RouterLink>
        <UButton
          variant="solid"
          color="secondary"
          class="h-[28px] md:h-[40px] px-3 md:px-5 md:text-base cursor-pointer"
          @click="quizStore.nextQuestion"
          v-else
        >
          NEXT
        </UButton>
      </div>
    </template>
    <p v-else-if="quizStore.errorStatus">
      {{ quizStore.errorStatus + ". Please try again later." }}
    </p>
  </div>
</template>

<style scoped></style>
