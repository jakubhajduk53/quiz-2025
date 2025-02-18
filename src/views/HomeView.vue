<script setup lang="ts">
import { ElButton } from "element-plus";
import { RouterLink } from "vue-router";
import { useQuizStore } from "../stores/store";
import { onMounted } from "vue";

const quizStore = useQuizStore();

onMounted(() => {
  quizStore.resetQuiz();
});
</script>

<template>
  <div
    class="flex flex-col h-full justify-center items-center text-center gap-3 transform -translate-y-50"
  >
    <div class="flex flex-col items-center">
      <div class="text-3xl">Random 10 questions</div>
      <div class="text-lg">
        From free to use, user-contributed trivia question database
      </div>
    </div>
    <el-button plain size="large">
      <RouterLink to="quiz">Start</RouterLink>
    </el-button>
  </div>
</template>

<style scoped></style>
