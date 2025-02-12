import { ref } from "vue";
import type { Ref } from "vue";

export type QuizResponse = {
  response_code: number;
  results: Array<{
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }>;
};

export const useFetchQuiz = () => {
  const result: Ref<QuizResponse | null> = ref(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchQuiz = async () => {
    loading.value = true;
    error.value = null;
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
