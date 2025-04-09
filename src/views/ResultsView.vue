<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useQuizStore } from "../stores/store";
import { ElButton, ElProgress } from "element-plus";
import { ref, onMounted, computed } from "vue";
import DetailsElement from "../components/DetailsElement.vue";
import { useScreenSize } from "../composables/useScreenSize";

const { secondaryButton } = useScreenSize();

const quizStore = useQuizStore();
const score = ref<number>(0);

onMounted(() => {
  score.value = quizStore.calculateScore().score;
});

const percentage = computed(() => {
  return score.value * 10;
});
</script>

<template>
  <div
    class="flex flex-col justify-center items-center text-center gap-5 md:gap-10 w-[600px] m-5 px-5 py-10 rounded-sm -translate-y-25 bg-radial from-gray-tertiary to-gray-secondary shadow-[0px_3px_5px_hsla(39,15%,50%,50%)] inset-shadow-[0px_3px_0px_hsl(39,30%,90%)]"
  >
    <div class="flex flex-col gap-1">
      <div v-if="quizStore.getQuizLength">
        <p>Your Score: {{ score }}/{{ quizStore.getQuizLength }}</p>
        <el-progress
          :text-inside="true"
          :stroke-width="24"
          :percentage="percentage"
          status="success"
        />
      </div>
      <div v-else>You need to fill the quiz before checking results</div>
      <DetailsElement />
    </div>
    <RouterLink to="/">
      <el-button
        color="hsl(338,85%,46%)"
        class="shadow-[0px_1px_3px_hsla(39,15%,50%,50%)] inset-shadow-[0px_0px_3px_hsl(39,30%,90%)]"
        :size="secondaryButton"
        @click="quizStore.resetQuiz"
        >HOME</el-button
      >
    </RouterLink>
  </div>
</template>

<style scoped>
::v-deep(.el-table) {
  --el-table-border-color: hsla(39, 15%, 50%, 50%);
  --el-table-text-color: hsl(39, 10%, 20%);
  --el-table-header-text-color: hsl(39, 10%, 20%);
  --el-table-header-bg-color: hsl(39, 50%, 85%);
  --el-table-bg-color: hsl(39, 50%, 92%);
}
::v-deep(.el-progress-bar) {
  --el-border-color-lighter: hsl(39, 50%, 85%);
}
.el-progress.is-success ::v-deep(.el-progress-bar__inner) {
  background-color: hsl(338, 85%, 46%);
}
</style>
