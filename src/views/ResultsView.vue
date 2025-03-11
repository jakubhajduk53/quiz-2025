<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useQuizStore } from "../stores/store";
import { ElButton, ElProgress } from "element-plus";
import { ref, onMounted, computed } from "vue";
import DetailsElement from "../components/DetailsElement.vue";

const quizStore = useQuizStore();
const score = ref<number>(0);
onMounted(() => {
  score.value = quizStore.calculateScore().score;
});
const percentage = computed(() => {
  return score.value * 10;
});
</script>

<template>
  <div
    class="flex flex-col h-full gap-5 justify-center items-center text-center transform sm:-translate-y-30"
  >
    <div class="flex flex-col gap-1">
      <p>Your Score: {{ score }}/{{ quizStore.getQuizLength }}</p>
      <el-progress
        :text-inside="true"
        :stroke-width="24"
        :percentage="percentage"
        status="success"
      />
      <DetailsElement />
    </div>
    <RouterLink to="/">
      <el-button plain @click="quizStore.resetQuiz">Home</el-button>
    </RouterLink>
  </div>
</template>

<style scoped></style>
