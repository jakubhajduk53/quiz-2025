<script setup lang="ts">
import { useQuizStore } from "../stores/store";
import { ref, onMounted } from "vue";
import type { AnswerDetail } from "../interfaces/interfaces";

const quizStore = useQuizStore();
const details = ref<AnswerDetail[]>([]);
// const rowClassName = ({ row }: { row: AnswerDetail }) => {
//   return row.is_correct ? "success-row" : "warning-row ";
// };

onMounted(() => {
  details.value = quizStore.calculateScore().details;
});
</script>
<template>
  <UTable :data="details" class="flex-1" />
</template>

<style scoped></style>
