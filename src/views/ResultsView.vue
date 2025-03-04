<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useQuizStore } from "../stores/store";
import { ElButton } from "element-plus";
import { ref, onMounted } from "vue";
import DetailsElement from "../components/DetailsElement.vue";

const quizStore = useQuizStore();
const score = ref<number>(0);
onMounted(() => {
  score.value = quizStore.calculateScore().score;
});
</script>

<template>
  <div
    class="flex flex-col h-full gap-5 justify-center items-center text-center transform sm:-translate-y-30"
  >
    <div>
      <p>Your Score: {{ score }}/{{ quizStore.getQuizLength }}</p>
      <DetailsElement></DetailsElement>
    </div>
    <RouterLink to="/">
      <el-button plain @click="quizStore.resetQuiz">Home</el-button>
    </RouterLink>
  </div>
</template>

<style scoped></style>
