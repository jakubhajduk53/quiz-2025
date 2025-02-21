<script setup lang="ts">
import { useQuizStore } from "../stores/store";
import { ElSteps, ElStep } from "element-plus";
const quizStore = useQuizStore();
</script>
<template>
  <el-steps
    :active="quizStore.getCurrentQuestionId"
    finish-status="wait"
    align-center=""
    class="flex gap-3 mb-2"
  >
    <el-step
      v-for="i in quizStore.getQuizLength"
      :key="i"
      @click="quizStore.changeQuestion(i - 1)"
      class="cursor-pointer"
    />
  </el-steps>
</template>
<style scoped></style>
