<script setup lang="ts">
interface Question {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
}

defineProps<Question>();
</script>

<template>
  <div class="flex flex-col">
    <div>{{ type }}</div>
    <div>{{ difficulty }}</div>
    <div>{{ category }}</div>
    <div>{{ question }}</div>
    <div>{{ correct_answer }}</div>
    <div>{{ incorrect_answers }}</div>
  </div>
</template>

<style scoped></style>
