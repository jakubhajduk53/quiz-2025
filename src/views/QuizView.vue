<script setup lang="ts">
import QuizElement from "../components/QuizElement.vue";
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
    class="flex flex-col h-full justify-center items-center text-center transform -translate-y-50"
  >
    <p>Open Trivia Database</p>
    <template v-if="quizStore.quizData">
      <QuizElement />
    </template>
    <p v-else>Ładowanie...</p>
    <div class="flex">
      <el-button plain @click="quizStore.previousQuestion">
        PREVIOUS
      </el-button>
      <el-button
        plain
        @click="quizStore.nextQuestion"
        v-if="
          quizStore.currentQuestion !== quizStore?.quizData?.results?.length - 1
        "
      >
        NEXT
      </el-button>
      <el-button plain v-else>
        <RouterLink to="results">END</RouterLink>
      </el-button>
    </div>
  </div>
</template>

<style scoped></style>
