<script setup lang="ts">
import { ElSteps, ElStep } from "element-plus";
import { useQuizStore } from "../stores";

const quizStore = useQuizStore();
const stepColor = (id: number) => {
  if (quizStore.currentQuestion == id) {
    return "process";
  } else if (quizStore.userAnswers[id]) {
    return "finish";
  } else {
    return "wait";
  }
};
</script>
<template>
  <el-steps
    :active="quizStore.getCurrentQuestionId"
    align-center
    class="flex items-center w-[30em] max-w-full h-10"
  >
    <el-step
      v-for="i in quizStore.getQuizLength"
      :key="i"
      @click="quizStore.changeQuestion(i - 1)"
      class="cursor-pointer"
      :status="stepColor(i - 1)"
    />
  </el-steps>
</template>
<style scoped>
.el-step ::v-deep(.is-process) {
  border-color: hsl(338, 85%, 30%);
  color: hsl(338, 85%, 30%);
}
.el-step ::v-deep(.is-finish) {
  border-color: hsl(338, 85%, 46%);
  color: hsl(338, 85%, 46%);
}
.el-step ::v-deep(.is-wait) {
  border-color: hsl(39, 10%, 40%);
  color: hsl(39, 10%, 40%);
}
.el-step ::v-deep(.el-step__icon) {
  background: hsl(39, 50%, 92%);
}
.el-step ::v-deep(.el-step__line) {
  background-color: hsl(39, 10%, 40%);
}
</style>
