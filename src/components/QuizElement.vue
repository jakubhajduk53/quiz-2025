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
    <div v-html="quizStore.getCurrentQuestionText"></div>
    <el-radio-group v-model="selectedAnswer" class="flex justify-center">
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
