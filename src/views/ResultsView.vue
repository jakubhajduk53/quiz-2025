<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useQuizStore } from "../stores/store";
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
      <p>{{ percentage }}%</p>
      <DetailsElement />
    </div>
    <RouterLink to="/">
      <UButton
        variant="solid"
        color="secondary"
        class="h-[28px] md:h-[40px] px-3 md:px-5 md:text-base cursor-pointer"
        @click="quizStore.resetQuiz"
        >Home</UButton
      >
    </RouterLink>
  </div>
</template>

<style scoped></style>
