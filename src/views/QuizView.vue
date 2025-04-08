<script setup lang="ts">
import QuizElement from "../components/QuizElement.vue";
import StepBarElement from "../components/StepBarElement.vue";
import { ElButton } from "element-plus";
import { RouterLink } from "vue-router";
import { useQuizStore } from "../stores/store";
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
    class="flex flex-col justify-center items-center text-center gap-5 md:gap-10 w-[600px] min-h-[300px] m-5 px-5 py-10 rounded-sm -translate-y-25 bg-radial from-gray-tertiary to-gray-secondary shadow-[0px_3px_5px_hsla(39,15%,50%,50%)] inset-shadow-[0px_3px_0px_hsl(39,30%,90%)]"
    v-loading="quizStore.loadingStatus"
  >
    <template v-if="quizStore.quizData">
      <StepBarElement />
      <QuizElement />
      <div class="flex">
        <el-button
          plain
          color="hsl(338,85%,46%)"
          class="shadow-[0px_1px_3px_hsla(39,15%,50%,50%)] inset-shadow-[0px_0px_3px_hsl(39,30%,90%)]"
          :size="secondaryButton"
          @click="quizStore.previousQuestion"
          :disabled="quizStore.isFirstQuestion"
        >
          PREVIOUS
        </el-button>
        <RouterLink to="results" v-if="quizStore.isLastQuestion" class="ml-3">
          <el-button
            color="hsl(338,85%,46%)"
            class="shadow-[0px_1px_3px_hsla(39,15%,50%,50%)] inset-shadow-[0px_0px_3px_hsl(39,30%,90%)]"
            :size="secondaryButton"
            >END</el-button
          >
        </RouterLink>
        <el-button
          color="hsl(338,85%,46%)"
          class="shadow-[0px_1px_3px_hsla(39,15%,50%,50%)] inset-shadow-[0px_0px_3px_hsl(39,30%,90%)]"
          :size="secondaryButton"
          @click="quizStore.nextQuestion"
          v-else
        >
          NEXT
        </el-button>
      </div>
    </template>
    <p
      v-else-if="quizStore.errorStatus"
      class="min-h-[300px] bg-radial from-gray-tertiary to-gray-secondary shadow-[0px_3px_5px_hsla(39,15%,50%,50%)] inset-shadow-[0px_3px_0px_hsl(39,30%,90%)]"
    >
      {{ quizStore.errorStatus + ". Please try again later." }}
    </p>
  </div>
</template>

<style scoped></style>
