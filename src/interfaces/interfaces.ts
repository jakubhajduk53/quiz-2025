export interface ResultsArray {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuizResponse {
  response_code: number;
  results: ResultsArray[];
}

export interface AnswerDetail {
  user_answer: string;
  correct_answer: string;
  is_correct: boolean;
}

export interface State {
  quizData: QuizResponse | undefined;
  currentQuestion: number;
  userAnswers: string[];
  errorStatus: string | undefined;
  loadingStatus: boolean;
}
