<script setup lang="ts">
import { useQuizStore } from "../stores";
import { ref, onMounted } from "vue";
import type { AnswerDetail } from "../interfaces";
import { ElTable, ElTableColumn } from "element-plus";

const quizStore = useQuizStore();
const details = ref<AnswerDetail[]>([]);
const rowClassName = ({ row }: { row: AnswerDetail }) => {
  return row.is_correct ? "success-row" : "warning-row ";
};

onMounted(() => {
  details.value = quizStore.calculateScore().details;
});
</script>
<template>
  <div class="max-w-[80vw]">
    <el-table :data="details" border :row-class-name="rowClassName">
      <el-table-column label="Index" type="index" width="100" align="center" />
      <el-table-column
        label="User Answer"
        prop="user_answer"
        width="200"
        align="center"
      >
        <template #default="scope">
          <span v-html="scope.row.user_answer" />
        </template>
      </el-table-column>
      <el-table-column
        label="Correct Answer"
        prop="correct_answer"
        width="200"
        align="center"
      >
        <template #default="scope">
          <span v-html="scope.row.correct_answer" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
.el-table ::v-deep(.warning-row) {
  --el-table-tr-bg-color: var(--el-color-danger-light-7);
}
.el-table ::v-deep() {
  --el-table-row-hover-bg-color: hsl(39, 50%, 85%);
}
.el-table ::v-deep(.success-row) {
  --el-table-tr-bg-color: var(--el-color-success-light-5);
}
</style>
