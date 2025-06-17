<!-- ReportPwaPreview.vue -->
<script setup lang="ts">
const images = [
  '../../images/report1.jpg',
  '../../images/report2.jpg',
  '../../images/report3.jpg',
]

</script>

<template>
  <div class="max-w-4xl mx-auto p-6 bg-zinc-900">
    <h1 class="text-3xl font-bold mb-6 text-primary">Reporting PWA</h1>

    <img
      src="../../images/report1.jpg"
      alt="PWA Reports"
      class="w-full rounded-lg mb-6 shadow-md"
    />

    <p class="mb-4 text-zinc-100 leading-relaxed">
      Led the development of a PWA for generating security reports. This application connects to the internal management REST API.
    </p>

    <h2 class="text-2xl font-semibold mb-3">Key Responsibilities</h2>
    <ul class="list-disc list-inside mb-6 text-zinc-200 space-y-1">
      <li>Architected NuxtJS PWA.</li>
      <li>Implemented secure token-based <code>REST API</code> consumption.</li>
    </ul>

    <p class="text-zinc-100 leading-relaxed">
      The PWA significantly improved reporting efficiency by allowing field agents to generate and share detailed reports.
    </p>

    <h2 class="text-2xl font-semibold mb-3 mt-8">Screenshots</h2>
    <ScreenshotPreview :images="images" />
  </div>
</template>

