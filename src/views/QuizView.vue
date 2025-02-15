<script setup lang="ts">
import QuizElement from "../components/QuizElement.vue";
import { RouterLink } from "vue-router";
import { useQuizStore } from "../stores/store";
import { onMounted } from "vue";

const quizStore = useQuizStore();

onMounted(async () => {
  await quizStore.fetch();
});
</script>

<template>
  <div class="flex flex-col items-center">
    <p>Quiz</p>
    <template v-if="quizStore.quizData">
      <QuizElement />
    </template>
    <p v-else>Ładowanie...</p>
    <div class="flex gap-5">
      <button
        class="cursor-pointer p-5 bg-red-50"
        @click="quizStore.previousQuestion"
      >
        PREVIOUS
      </button>
      <button
        class="cursor-pointer p-5 bg-red-50"
        @click="quizStore.nextQuestion"
        v-if="
          quizStore.currentQuestion !== quizStore?.quizData?.results?.length - 1
        "
      >
        NEXT
      </button>
      <RouterLink to="results" v-else>
        <button class="cursor-pointer p-5 bg-red-50">End</button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
