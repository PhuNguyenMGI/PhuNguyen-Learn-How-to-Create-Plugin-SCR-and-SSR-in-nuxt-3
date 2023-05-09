<template>
  <div
    class="notification bg-red-100 border flex gap-3 border-red-400 text-red-700 px-4 py-3 rounded relative"
    role="alert"
  >
    <strong class="font-bold">Error!</strong>
    <span class="block sm:inline">Something seriously bad happened.</span>
  </div>
</template>

<script setup>
</script>

<style>
@keyframes slide-from-right {
  0% {
    opacity: 0;
    transform: translateX(-200px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.notification {
  animation-name: slide-from-right;
  animation-duration: 0.5s;
  animation-delay: 0s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

</style>
