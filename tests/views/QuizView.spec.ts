import { describe, expect, test } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import QuizView from "../../src/views/QuizView.vue";
import { createPinia } from "pinia";
import router from "../../src/router";
import { useQuizStore } from "../../src/stores";

const mockQuizData = {
  response_code: 0,
  results: [
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "What is the capital of France?",
      correct_answer: "Paris",
      incorrect_answers: ["Berlin", "Madrid", "Rome"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Entertainment: Video Games",
      type: "multiple",
      difficulty: "hard",
      question: "In the Half-Life series, which enemy is known for headcrabs?",
      correct_answer: "Zombie",
      incorrect_answers: ["Houndeye", "Vortigaunt", "Barnacle"],
    },
  ],
};

describe("Buttons & Pagination", () => {
  test("Switching pages", async () => {
    const pinia = createPinia();
    const wrapper = mount(QuizView, {
      global: {
        plugins: [pinia, router],
      },
    });

    const store = useQuizStore();

    store.quizData = mockQuizData;
    store.currentQuestion = 0;

    await wrapper.vm.$nextTick();

    await wrapper.get('[data-test="next-button"]').trigger("click");

    expect(store.currentQuestion).toBe(1);

    await wrapper.get('[data-test="previous-button"]').trigger("click");

    expect(store.currentQuestion).toBe(0);
  });

  test("Previous button is disabled on first question", async () => {
    const pinia = createPinia();
    const wrapper = mount(QuizView, {
      global: {
        plugins: [pinia, router],
      },
    });

    const store = useQuizStore();

    store.quizData = mockQuizData;
    store.currentQuestion = 0;

    await wrapper.vm.$nextTick();

    const previousButton = wrapper.get('[data-test="previous-button"]');

    expect(previousButton.attributes()).toHaveProperty("disabled");
  });

  test("End button on last question", async () => {
    const pinia = createPinia();
    const wrapper = mount(QuizView, {
      global: {
        plugins: [pinia, router],
      },
    });

    const store = useQuizStore();

    store.quizData = mockQuizData;
    store.currentQuestion = store.getLastQuestionId ?? 0;

    await wrapper.vm.$nextTick();

    await expect(wrapper.get('[data-test="end-button"]').isVisible()).toBe(
      true
    );
  });

  test("Navigation works correctly after quiz is finished", async () => {
    const pinia = createPinia();
    const wrapper = mount(QuizView, {
      global: {
        plugins: [pinia, router],
      },
    });

    const store = useQuizStore();

    store.quizData = mockQuizData;
    store.currentQuestion = store.getLastQuestionId ?? 0;

    await wrapper.vm.$nextTick();

    await wrapper.get('[data-test="end-button"]').trigger("click");
    await router.isReady();

    await flushPromises();

    expect(router.currentRoute.value.path).toBe("/results");
  });
});
