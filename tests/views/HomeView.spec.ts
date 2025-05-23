import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import HomeView from "../../src/views/HomeView.vue";
import { createPinia } from "pinia";
import router from "../../src/router";

test("Clicking START button redirect to the quiz", async () => {
  const pinia = createPinia();
  const wrapper = mount(HomeView, {
    global: {
      plugins: [pinia, router],
    },
  });
  wrapper.get('[data-test="start-button"]').trigger("click");
  await router.isReady();
  expect(router.currentRoute.value.path).toBe("/quiz");
});
