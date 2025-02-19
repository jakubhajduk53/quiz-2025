import { defineStore } from "pinia";
import { useFetchQuiz } from "../composables/useFetchQuiz";
import type { QuizResponse, AnswerDetail } from "../interfaces/interfaces";
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
      if (!this.quizData) return { score: 0, details: [] };

      const result = this.quizData.results.reduce(
        (acc, question, index) => {
          const isCorrect = question.correct_answer === this.userAnswers[index];

          acc.details.push({
            user_answer: this.userAnswers[index],
            correct_answer: question.correct_answer,
            is_correct: isCorrect,
          });

          if (isCorrect) {
            acc.score++;
          }

          return acc;
        },
        { score: 0, details: [] as AnswerDetail[] }
      );

      return result;
    },
  },
});
