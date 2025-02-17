<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useQuizStore } from "../stores/store";
import { ElButton } from "element-plus";

const quizStore = useQuizStore();
</script>

<template>
  <div class="flex flex-col gap-5 items-center justify-center">
    <div>
      <p>Your Score: {{ quizStore.calculateScore() }}</p>
    </div>
    <el-button plain @click="quizStore.resetQuiz"
      ><RouterLink to="/">Home</RouterLink>
    </el-button>
  </div>
</template>

<style scoped></style>
