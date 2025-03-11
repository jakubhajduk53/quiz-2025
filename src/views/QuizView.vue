<script setup lang="ts">
import QuizElement from "../components/QuizElement.vue";
import StepBarElement from "../components/StepBarElement.vue";
import { ElButton } from "element-plus";
import { RouterLink } from "vue-router";
import { useQuizStore } from "../stores/store";
import { onMounted } from "vue";

const quizStore = useQuizStore();

onMounted(async () => {
  await quizStore.fetch();
});
</script>

<template>
  <div
    class="flex flex-col h-full justify-center items-center text-center transform -translate-y-50 gap-7"
    v-loading="quizStore.loadingStatus"
  >
    <template v-if="quizStore.quizData">
      <StepBarElement />
      <QuizElement />
      <div class="flex">
        <el-button
          plain
          @click="quizStore.previousQuestion"
          :disabled="quizStore.getCurrentQuestionId == 0"
        >
          PREVIOUS
        </el-button>
        <el-button
          plain
          @click="quizStore.nextQuestion"
          v-if="quizStore.getCurrentQuestionId !== quizStore?.getLastQuestionId"
        >
          NEXT
        </el-button>
        <RouterLink to="results" v-else class="ml-3">
          <el-button plain>END</el-button>
        </RouterLink>
      </div>
    </template>
    <p v-else-if="quizStore.errorStatus">
      {{ quizStore.errorStatus + ". Please try again later." }}
    </p>
  </div>
</template>

<style scoped></style>
