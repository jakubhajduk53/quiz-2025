<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useQuizStore } from "../stores/store";
import { ElButton, ElProgress } from "element-plus";
import { ref, onMounted, computed } from "vue";
import DetailsElement from "../components/DetailsElement.vue";
import { useScreenSize } from "../composables/useScreenSize";

const { secondaryButton } = useScreenSize();

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
      <div v-if="quizStore.getQuizLength">
        <p>Your Score: {{ score }}/{{ quizStore.getQuizLength }}</p>
        <el-progress
          :text-inside="true"
          :stroke-width="24"
          :percentage="percentage"
          status="success"
        />
      </div>
      <div v-else>You need to fill the quiz before checking results</div>
      <DetailsElement />
    </div>
    <RouterLink to="/">
      <el-button
        type="primary"
        :size="secondaryButton"
        @click="quizStore.resetQuiz"
        >HOME</el-button
      >
    </RouterLink>
  </div>
</template>

<style scoped></style>
