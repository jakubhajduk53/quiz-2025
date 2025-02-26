<script setup lang="ts">
import { useQuizStore } from "../stores/store";
import { ElRadio, ElRadioGroup } from "element-plus";

const quizStore = useQuizStore();
</script>
<template>
  <div v-if="quizStore.getQuizLength">
    <div v-html="quizStore.getCurrentQuestionText"></div>
    <el-radio-group
      v-model="quizStore.userAnswers[quizStore.currentQuestion]"
      @update:model-value="quizStore.saveAnswer($event as string)"
      class="flex justify-center"
    >
      <el-radio
        v-for="answer in quizStore.getQuestions"
        :key="answer"
        :value="answer"
        ><div v-html="answer"></div>
      </el-radio>
    </el-radio-group>
  </div>
  <div v-else>Loading...</div>
</template>

<style scoped></style>
