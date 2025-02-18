<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useQuizStore } from "../stores/store";
import { ElButton } from "element-plus";
import { ref, onMounted } from "vue";
import type { AnswerDetail } from "../stores/store";

interface Results {
  score: number;
  details: AnswerDetail[];
}

const quizStore = useQuizStore();
const results = ref<Results>({ score: 0, details: [] });
onMounted(() => {
  results.value = quizStore.calculateScore();
});
</script>

<template>
  <div class="flex flex-col gap-5 items-center justify-center text-center">
    <div>
      <p>Your Score: {{ results.score }}</p>
      <p>Details: {{ results.details }}</p>
    </div>
    <el-button plain @click="quizStore.resetQuiz"
      ><RouterLink to="/">Home</RouterLink>
    </el-button>
  </div>
</template>

<style scoped></style>
