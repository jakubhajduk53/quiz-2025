<script setup lang="ts">
import { useFetchQuiz } from "../composables/useFetchQuiz";
import { ref } from "vue";

const quizData = ref(useFetchQuiz());
console.log(quizData);
</script>

<template>
  <div class="flex flex-col items-center">
    <p>Quiz</p>
    <p>{{ quizData }}</p>
  </div>
</template>

<style scoped></style>
