<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="text-3xl">Random 10 questions</div>
    <RouterLink to="quiz">
      <button class="text-xl border rounded-xl p-1 cursor-pointer">
        Start
      </button>
    </RouterLink>
  </div>
</template>

<style scoped></style>
