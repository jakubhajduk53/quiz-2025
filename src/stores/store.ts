import { defineStore } from "pinia";
import { useFetchQuiz } from "../composables/useFetchQuiz";
import type { QuizResponse } from "../composables/useFetchQuiz";
import { ref } from "vue";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    quizData: ref<QuizResponse | null>(null),
    currentQuestion: 0,
    userAnswers: ref<string[]>([]),
  }),

  actions: {
    async fetch() {
      const { result, fetchQuiz } = useFetchQuiz();
      await fetchQuiz();
      this.quizData = result.value;
      this.userAnswers = [];
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
    resetQuiz() {
      this.quizData = null;
      this.currentQuestion = 0;
      this.userAnswers = [""];
    },
    saveAnswer(answer: string) {
      this.userAnswers[this.currentQuestion] = answer;
    },
    calculateScore() {
      if (!this.quizData) return 0;
      return this.quizData.results.reduce((score, question, index) => {
        return question.correct_answer === this.userAnswers[index]
          ? score + 1
          : score;
      }, 0);
    },
  },
});
