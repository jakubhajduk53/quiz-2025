<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useQuizStore } from "../stores/store";

const quizStore = useQuizStore();
</script>

<template>
  <div class="flex flex-col gap-5 items-center justify-center">
    <div>
      <p>Your Score: {{ quizStore.calculateScore() }}</p>
    </div>
    <RouterLink to="/">
      <button class="cursor-pointer p-5 bg-red-50" @click="quizStore.resetQuiz">
        Home
      </button>
    </RouterLink>
  </div>
</template>

<style scoped></style>
