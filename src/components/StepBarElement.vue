<script setup lang="ts">
// import { useQuizStore } from "../stores/store";

// const quizStore = useQuizStore();

// const stepColor = (id: number) => {
//   if (quizStore.currentQuestion == id) {
//     return "process";
//   } else if (quizStore.userAnswers[id]) {
//     return "finish";
//   } else {
//     return "wait";
//   }
// };
</script>
<template>
  <!-- <el-steps
    :active="quizStore.getCurrentQuestionId"
    align-center
    class="flex gap-1 md:gap-3"
  >
    <el-step
      v-for="i in quizStore.getQuizLength"
      :key="i"
      @click="quizStore.changeQuestion(i - 1)"
      class="cursor-pointer"
      :status="stepColor(i - 1)"
    />
  </el-steps> -->
</template>
<style scoped></style>
