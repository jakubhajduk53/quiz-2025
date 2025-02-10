<script setup lang="ts">
import QuizElement from "../components/QuizElement.vue";
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
      <QuizElement v-bind="quizStore.quizData.results[0]" />
    </template>
    <p v-else>Ładowanie...</p>
  </div>
</template>

<style scoped></style>
