<script setup lang="ts">
import { useQuizStore } from "../stores/store";
import { computed } from "vue";
import { ElRadio, ElRadioGroup } from "element-plus";

const quizStore = useQuizStore();
const selectedAnswer = computed({
  get: () => quizStore.userAnswers[quizStore.getCurrentQuestionId],
  set: (value: string) => {
    quizStore.saveAnswer(value);
  },
});
</script>
<template>
  <div v-if="quizStore.getQuizLength">
    <div>
      {{ quizStore.getCurrentQuestionText }}
    </div>
    <el-radio-group v-model="selectedAnswer">
      <el-radio
        v-for="answer in quizStore.getQuestions"
        :key="answer"
        :value="answer"
      >
        {{ answer }}
      </el-radio>
    </el-radio-group>
  </div>
  <div v-else>Loading...</div>
</template>

<style scoped></style>
