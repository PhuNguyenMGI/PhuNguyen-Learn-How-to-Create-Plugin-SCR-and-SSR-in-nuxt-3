<template>
  <div class="w-full h-full">
    <div id="notification" class="fixed top-10 left-10 h-8"></div>
    <div class="justify-center flex items-center">
      <input
        id="default-checkbox"
        type="checkbox"
        v-model="status"
        value=""
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        for="default-checkbox"
        class="ml-2 text-sm font-medium"
        >Status change</label
      >
    </div>
  </div>
</template>

<script setup>
const { $globalNotification, $event } = useNuxtApp();
const status = ref(false);

watch(() => status.value, (val) => {
    if (val) {
        $globalNotification();
    } else {
        $event('close');
    }
})
</script>

<style></style>
