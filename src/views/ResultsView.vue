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
  <div class="flex flex-col gap-5 items-center justify-center text-center">
    <div>
      <p>Your Score: {{ score }}/{{ quizStore.getQuizLength }}</p>
      <DetailsElement></DetailsElement>
    </div>
    <el-button plain @click="quizStore.resetQuiz"
      ><RouterLink to="/">Home</RouterLink>
    </el-button>
  </div>
</template>

<style scoped></style>
