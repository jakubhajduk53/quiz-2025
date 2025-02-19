import { ref } from "vue";
import type { QuizResponse } from "../interfaces/interfaces";

export const useFetchQuiz = () => {
  const result = ref<QuizResponse>();
  const loading = ref(false);
  const error = ref<string>();

  const fetchQuiz = async () => {
    loading.value = true;
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
    } finally {
      loading.value = false;
    }
  };

  return { result, fetchQuiz, loading, error };
};
