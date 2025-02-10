import { defineStore } from "pinia";
import { useFetchQuiz } from "../composables/useFetchQuiz";
import type { QuizResponse } from "../composables/useFetchQuiz";
import { ref } from "vue";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    quizData: ref<QuizResponse | null>(null),
  }),

  actions: {
    async fetch() {
      const { result, fetchQuiz } = useFetchQuiz();
      await fetchQuiz();
      this.quizData = result.value;
    },
  },
});
