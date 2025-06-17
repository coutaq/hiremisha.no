<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: "antialiased h-full bg-zinc-900 text-zinc-100",
  },
  bodyAttrs: {
    class: "h-full",
  },
});

</script>

<template>
  <main class="h-full w-full grid grid-cols-1 md:grid-cols-2 px-[10vw] pt-20 gap-4 overflow-y-scroll pb-20">
    <NuxtPage />
  </main>
</template>
