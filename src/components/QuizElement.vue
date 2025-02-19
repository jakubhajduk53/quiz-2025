<script setup lang="ts">
import { useQuizStore } from "../stores/store";
import { ref } from "vue";
import { ElRadio, ElRadioGroup } from "element-plus";

const quizStore = useQuizStore();
const selectedAnswer = ref<string>("");

const saveQuizAnswer = (answer: string) => {
  selectedAnswer.value = answer;
  quizStore.saveAnswer(answer);
};
</script>
<template>
  <div v-if="quizStore?.quizData?.results?.length">
    <div>
      {{ quizStore.quizData.results[quizStore.currentQuestion].question }}
    </div>
    <el-radio-group
      v-model="selectedAnswer"
      @change="(answer) => saveQuizAnswer(answer as string)"
    >
      <el-radio
        v-for="answer in [
          ...quizStore.quizData.results[quizStore.currentQuestion]
            .incorrect_answers,
          quizStore.quizData.results[quizStore.currentQuestion].correct_answer,
        ].sort()"
        :key="answer"
        :label="answer"
      >
        {{ answer }}
      </el-radio>
    </el-radio-group>
  </div>
  <div v-else>Loading...</div>
</template>

<style scoped></style>
