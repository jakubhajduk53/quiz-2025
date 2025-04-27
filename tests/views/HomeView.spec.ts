import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HomeView from "../../src/views/HomeView.vue";
import { RouterLink } from "vue-router";
import { createPinia } from "pinia";

// describe("HomeView.vue", () => {
//   it("navigates to QuizView when button is clicked", async () => {
//     const pinia = createPinia();
//     const wrapper = mount(HomeView, {
//       global: {
//         plugins: [pinia],
//         stubs: {
//           RouterLink,
//         },
//       },
//     });

//     const button = wrapper.find("el-button");

//     expect(button.exists()).toBe(true);

//     await button.trigger("click");

//     const routerLink = wrapper.findComponent(RouterLink);
//     expect(routerLink.props().to).toBe("/quiz");
//   });
// });
