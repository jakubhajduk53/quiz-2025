<script setup lang="ts">
import { useFetchQuiz } from "../composables/useFetchQuiz";
import { ref } from "vue";
import QuizElement from "../components/QuizElement.vue";

const quizData = ref(useFetchQuiz());
</script>

<template>
  <div class="flex flex-col items-center">
    <p>Quiz</p>
    <p>{{ quizData?.results[0] }}</p>
    <QuizElement />
  </div>
</template>

<style scoped></style>
