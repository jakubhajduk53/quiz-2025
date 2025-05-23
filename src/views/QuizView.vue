<script setup lang="ts">
import QuizElement from "../components/QuizElement.vue";
import StepBarElement from "../components/StepBarElement.vue";
import { ElButton } from "element-plus";
import { RouterLink } from "vue-router";
import { useQuizStore } from "../stores";
import { onMounted } from "vue";
import { useScreenSize } from "../composables/useScreenSize";

const { secondaryButton } = useScreenSize();

const quizStore = useQuizStore();

onMounted(async () => {
  await quizStore.fetch();
});
</script>

<template>
  <div
    class="flex flex-col justify-center items-center text-center gap-5 md:gap-10 w-[800px] h-[500px] max-w-[90vw] overflow-x-auto m-5 px-5 py-10 rounded-sm bg-radial from-gray-tertiary to-gray-secondary shadow-[0px_3px_5px_hsla(39,15%,50%,50%)] inset-shadow-[0px_3px_0px_hsl(39,30%,90%)]"
    v-loading="quizStore.loadingStatus"
    element-loading-background="hsl(39, 50%, 92%)"
  >
    <template v-if="quizStore.quizData">
      <div class="flex flex-col w-full h-full justify-center items-center">
        <hr class="text-[hsl(39,10%,20%)] w-full opacity-10 my-1 md:my-3" />
        <StepBarElement />
        <hr class="text-[hsl(39,10%,20%)] w-full opacity-10 my-1 md:my-3" />
        <QuizElement />
        <hr class="text-[hsl(39,10%,20%)] w-full opacity-10 my-1 md:my-3" />
        <div class="flex w-full items-end justify-center gap-5">
          <el-button
            plain
            color="hsl(338,85%,46%)"
            class="shadow-[0px_1px_3px_hsla(39,15%,50%,50%)] inset-shadow-[0px_0px_3px_hsl(39,30%,90%)]"
            :size="secondaryButton"
            @click="quizStore.previousQuestion"
            :disabled="quizStore.isFirstQuestion"
            data-test="previous-button"
          >
            PREVIOUS
          </el-button>
          <RouterLink to="results" v-if="quizStore.isLastQuestion" class="ml-3">
            <el-button
              color="hsl(338,85%,46%)"
              class="shadow-[0px_1px_3px_hsla(39,15%,50%,50%)] inset-shadow-[0px_0px_3px_hsl(39,30%,90%)]"
              :size="secondaryButton"
              data-test="end-button"
              >END</el-button
            >
          </RouterLink>
          <el-button
            color="hsl(338,85%,46%)"
            class="shadow-[0px_1px_3px_hsla(39,15%,50%,50%)] inset-shadow-[0px_0px_3px_hsl(39,30%,90%)]"
            :size="secondaryButton"
            @click="quizStore.nextQuestion"
            data-test="next-button"
            v-else
          >
            NEXT
          </el-button>
        </div>
        <hr class="text-[hsl(39,10%,20%)] w-full opacity-10 my-1 md:my-3" />
      </div>
    </template>
    <p
      v-else-if="quizStore.errorStatus"
      class="min-h-[300px] flex items-center justify-center text-base md:text-xl"
    >
      {{ quizStore.errorStatus + ". Please try again later." }}
    </p>
  </div>
</template>

<style scoped></style>
