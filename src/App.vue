<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="flex flex-col w-full h-full items-center justify-center">
    <div class="h-4 md:h-6 w-full bg-[hsl(39,10%,20%)]" />
    <div class="flex flex-1 justify-center items-center w-full max-h-full">
      <RouterView />
    </div>
    <div class="h-4 md:h-6 w-full bg-[hsl(39,10%,20%)]" />
  </div>
</template>

<style scoped></style>
