<script setup lang="ts">
import { ElRadio, ElRadioGroup } from "element-plus";
import { useQuizStore } from "../stores";

const quizStore = useQuizStore();
</script>
<template>
  <div class="flex flex-col w-full h-full justify-center">
    <div
      v-html="quizStore.getCurrentQuestionText"
      class="flex justify-center items-center text-base md:text-xl font-bold overflow-x-auto max-w-[95%] min-h-[5ch]"
    />
    <hr class="text-[hsl(39,10%,20%)] w-full opacity-10 my-1 md:my-3" />
    <div class="flex justify-center items-center flex-1">
      <el-radio-group
        :model-value="quizStore.userAnswers[quizStore.currentQuestion]"
        @update:model-value="quizStore.saveAnswer($event as string)"
        size="large"
        class="flex flex-col max-w-[90%] gap-1 md:gap-3"
      >
        <el-radio
          v-for="answer in quizStore.getQuestions"
          :key="answer"
          :value="answer"
          ><div
            v-html="answer"
            class="text-sm md:text-base overflow-x-auto"
          ></div>
        </el-radio>
      </el-radio-group>
    </div>
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
  display: flex;
  gap: 10px;
}

@media (max-width: 767px) {
  .el-radio ::v-deep() {
    gap: 5px;
  }
}
.el-radio ::v-deep(.el-radio__inner) {
  background-color: hsl(39, 50%, 95%);
}
.el-radio-group {
  align-items: start;
}
</style>
