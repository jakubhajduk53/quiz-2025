<script setup lang="ts">
import { useQuizStore } from "../stores/store";

const quizStore = useQuizStore();
</script>
<template>
  <div v-if="quizStore?.quizData?.results?.length">
    <div>
      {{ quizStore.quizData.results[quizStore.currentQuestion].question }}
    </div>
    <ul>
      <li
        v-for="answer in [
          ...quizStore.quizData.results[quizStore.currentQuestion]
            .incorrect_answers,
          quizStore.quizData.results[quizStore.currentQuestion].correct_answer,
        ].sort()"
        :key="answer"
        @click="quizStore.saveAnswer(answer)"
        :class="{
          'bg-blue-500 text-white font-bold cursor-pointer':
            answer === quizStore.userAnswers[quizStore.currentQuestion],
          'bg-gray-200 hover:bg-gray-300  cursor-pointer':
            answer !== quizStore.userAnswers[quizStore.currentQuestion],
        }"
      >
        {{ answer }}
      </li>
    </ul>
  </div>
  <div v-else>Loading...</div>
  <div>{{ quizStore.userAnswers }}</div>
</template>

<style scoped></style>
