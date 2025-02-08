<script setup lang="ts">
interface Question {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
}

const props = defineProps<Question>();
</script>

<template>
  <div class="flex flex-col">
    <div>{{ props.type }}</div>
    <div>{{ props.difficulty }}</div>
    <div>{{ props.category }}</div>
    <div>{{ props.question }}</div>
    <div>{{ props.correct_answer }}</div>
    <div>{{ props.incorrect_answers }}</div>
  </div>
</template>

<style scoped></style>
