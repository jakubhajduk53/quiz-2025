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
    class="flex flex-col justify-center items-center text-center gap-5 md:gap-10 w-[600px] m-5 px-5 py-10 rounded-sm transform -translate-y-25 bg-white/90 shadow-sm"
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
      <el-button type="primary" @click="quizStore.resetQuiz">Home</el-button>
    </RouterLink>
  </div>
</template>

<style scoped></style>
