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
    class="flex flex-col justify-center items-center text-center gap-5 md:gap-10 w-[600px] m-5 px-5 py-10 rounded-sm transform -translate-y-25 bg-white/90 shadow-sm"
    v-loading="quizStore.loadingStatus"
  >
    <template v-if="quizStore.quizData">
      <StepBarElement />
      <QuizElement />
      <div class="flex">
        <el-button
          plain
          type="primary"
          @click="quizStore.previousQuestion"
          :disabled="quizStore.isFirstQuestion"
        >
          PREVIOUS
        </el-button>
        <RouterLink to="results" v-if="quizStore.isLastQuestion" class="ml-3">
          <el-button type="primary">END</el-button>
        </RouterLink>
        <el-button type="primary" @click="quizStore.nextQuestion" v-else>
          NEXT
        </el-button>
      </div>
    </template>
    <p v-else-if="quizStore.errorStatus">
      {{ quizStore.errorStatus + ". Please try again later." }}
    </p>
  </div>
</template>

<style scoped></style>
