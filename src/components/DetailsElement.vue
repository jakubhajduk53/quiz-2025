<script setup lang="ts">
import { useQuizStore } from "../stores/store";
import { ref, onMounted } from "vue";
import type { AnswerDetail } from "../stores/store";
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
  <el-table :data="details" :row-class-name="rowClassName">
    <el-table-column label="Index" type="index" width="100" />
    <el-table-column label="User Answer" prop="user_answer" width="200" />
    <el-table-column label="Correct Answer" prop="correct_answer" width="200" />
  </el-table>
</template>

<style scoped>
.el-table ::v-deep(.warning-row) {
  --el-table-tr-bg-color: var(--el-color-danger-light-5);
}
.el-table ::v-deep(.success-row) {
  --el-table-tr-bg-color: var(--el-color-success-light-5);
}
</style>
