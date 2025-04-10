<script setup lang="ts">
import { useQuizStore } from "../stores/store";
import { ElRadio, ElRadioGroup } from "element-plus";

const quizStore = useQuizStore();
</script>
<template>
  <div class="flex flex-col h-full justify-center gap-2 md:w-[35em]">
    <div
      v-html="quizStore.getCurrentQuestionText"
      class="text-base md:text-xl font-bold"
    ></div>
    <el-radio-group
      :model-value="quizStore.userAnswers[quizStore.currentQuestion]"
      @update:model-value="quizStore.saveAnswer($event as string)"
      class="flex justify-center"
      size="large"
    >
      <el-radio
        v-for="answer in quizStore.getQuestions"
        :key="answer"
        :value="answer"
        ><div v-html="answer" class="text-sm md:text-base"></div>
      </el-radio>
    </el-radio-group>
  </div>
</template>

<style scoped>
.el-radio.is-checked ::v-deep(.el-radio__inner) {
  background: hsl(338, 85%, 46%);
  border-color: hsl(338, 85%, 46%);
}
.el-radio.is-checked ::v-deep(.el-radio__label) {
  color: hsl(338, 85%, 46%);
}
.el-radio ::v-deep() {
  --el-radio-text-color: hsl(39, 10%, 40%);
  --el-radio-input-border-color-hover: hsl(338, 85%, 46%);
  --el-radio-input-border: 1px solid hsl(39, 10%, 40%);
}
.el-radio ::v-deep(.el-radio__inner) {
  background-color: hsl(39, 50%, 95%);
}
</style>
