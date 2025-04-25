import { ref } from "vue";
import type { QuizResponse } from "../interfaces";

export const useFetchQuiz = () => {
  const result = ref<QuizResponse>();
  const error = ref<string>();

  const fetchQuiz = async () => {
    error.value = undefined;
    try {
      const response = await fetch("https://opentdb.com/api.php?amount=10");
      if (!response.ok) {
        throw new Error("Failed to fetch quiz data");
      }
      const data: QuizResponse = await response.json();
      result.value = data;
    } catch (e) {
      error.value = (e as Error).message;
    }
  };
  return { result, fetchQuiz, error };
};
