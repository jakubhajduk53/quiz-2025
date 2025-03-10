import { defineStore } from "pinia";
import { useFetchQuiz } from "../composables/useFetchQuiz";
import type { AnswerDetail, State } from "../interfaces/interfaces";
export const useQuizStore = defineStore("quiz", {
  state: (): State => ({
    quizData: undefined,
    currentQuestion: 0,
    userAnswers: [],
    errorStatus: undefined,
    loadingStatus: false,
  }),
  getters: {
    getQuizLength: (state) => state.quizData?.results.length,
    getLastQuestionId: (state) =>
      state.quizData?.results.length
        ? state.quizData.results.length - 1
        : undefined,
    getCurrentQuestionId: (state) => state.currentQuestion,
    getCurrentQuestionText: (state) =>
      state.quizData?.results[state.currentQuestion].question,
    getQuizDataResults: (state) => state.quizData?.results,
    getQuestions: (state) => {
      const results = state.quizData?.results[state.currentQuestion];
      return [
        ...(results?.incorrect_answers || []),
        results?.correct_answer,
      ].sort();
    },
  },
  actions: {
    async fetch() {
      const { result, error, fetchQuiz } = useFetchQuiz();
      this.loadingStatus = true;
      await fetchQuiz();
      this.loadingStatus = false;
      this.quizData = result.value;
      this.userAnswers = [];
      this.errorStatus = error.value;
    },
    nextQuestion() {
      if (this.currentQuestion < 9) {
        this.currentQuestion++;
      }
    },
    changeQuestion(index: number) {
      this.currentQuestion = index;
    },
    previousQuestion() {
      if (this.currentQuestion > 0) {
        this.currentQuestion--;
      }
    },
    resetQuiz() {
      this.quizData = undefined;
      this.currentQuestion = 0;
      this.userAnswers = [];
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
