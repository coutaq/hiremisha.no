<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: "antialiased h-full bg-stone-950 text-stone-100 m-10",
  },
  bodyAttrs: {
    class: "h-full",
  },
});
</script>

<template>
  <main class="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <NuxtPage />
  </main>
</template>
