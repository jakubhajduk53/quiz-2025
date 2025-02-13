<script setup lang="ts">
import { useQuizStore } from "../stores/store";

const quizStore = useQuizStore();
</script>
<template>
  <div v-if="quizStore?.quizData?.results?.length">
    <ul>
      <li
        v-for="answer in [
          ...quizStore.quizData.results[quizStore.currentQuestion]
            .incorrect_answers,
          quizStore.quizData.results[quizStore.currentQuestion].correct_answer,
        ].sort()"
        :key="answer"
        @click="quizStore.saveAnswer(answer)"
      >
        {{ answer }}
      </li>
    </ul>
  </div>
  <div v-else>Loading...</div>
  <div>{{ quizStore.userAnswers }}</div>
</template>

<style scoped></style>
