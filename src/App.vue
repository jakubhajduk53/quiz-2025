<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="flex flex-col w-full h-full items-center justify-center">
    <div class="h-4 md:h-6 w-full bg-[hsl(39,10%,20%)]" />
    <div class="flex flex-1 justify-center items-center w-full max-h-full">
      <Transition name="fade-slide" mode="in-out">
        <RouterView />
      </Transition>
    </div>
    <div class="h-4 md:h-6 w-full bg-[hsl(39,10%,20%)]" />
  </div>
</template>

<style scoped>
.fade-slide-enter-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
  transition-delay: 0.1s;
}
.fade-slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transition-delay: 0s;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
