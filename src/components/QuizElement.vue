<script setup lang="ts">
import { useQuizStore } from "../stores/store";
import { ElRadio, ElRadioGroup } from "element-plus";

const quizStore = useQuizStore();
</script>
<template>
  <div class="flex flex-col gap-2">
    <div
      v-html="quizStore.getCurrentQuestionText"
      class="text-base md:text-xl font-semibold"
    ></div>
    <el-radio-group
      :model-value="quizStore.userAnswers[quizStore.currentQuestion]"
      @update:model-value="quizStore.saveAnswer($event as string)"
      class="flex justify-center"
    >
      <el-radio
        v-for="answer in quizStore.getQuestions"
        :key="answer"
        :value="answer"
        ><div v-html="answer" class="text-sm md:text-base"></div>
      </el-radio>
    </el-radio-group>
  </div>
</template>

<style scoped></style>
