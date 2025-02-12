import { defineStore } from "pinia";
import { useFetchQuiz } from "../composables/useFetchQuiz";
import type { QuizResponse } from "../composables/useFetchQuiz";
import { ref } from "vue";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    quizData: ref<QuizResponse | null>(null),
    currentQuestion: 0,
  }),

  actions: {
    async fetch() {
      const { result, fetchQuiz } = useFetchQuiz();
      await fetchQuiz();
      this.quizData = result.value;
    },
    nextQuestion() {
      if (this.currentQuestion < 9) {
        this.currentQuestion++;
      }
    },
    previousQuestion() {
      if (this.currentQuestion > 0) {
        this.currentQuestion--;
      }
    },
  },
});
