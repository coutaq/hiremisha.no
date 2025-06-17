<script setup lang="ts">
const open = ref(false)
const images = [
  '../../images/gardia1.jpg',
  '../../images/gardia2.jpg',
    '../../images/gardia3.jpg',
    '../../images/gardia4.jpg',
    '../../images/gardia5.jpg',
    '../../images/gardia6.jpg',
      
]
</script>

<template>
  <div class="mx-auto p-6">
    <section class="max-w-7xl mx-auto">
    
    <h1 class="text-3xl font-bold mb-6 text-primary">
      Gardia AS — Internal Management System
    </h1>

    <NuxtImg
      src="../../images/gardia1.jpg"
      alt="Security System Dashboard"
      class="w-full rounded-lg mb-6 shadow-md"
    />

    <p class="mb-4 text-zinc-100 leading-relaxed">
      Architected and implemented an internal ERP platform for a security services company using Laravel, Vue.js, and MySQL. The system streamlines sales of security equipment, offer generation, email notifications, and customer acceptance workflows.
    </p>

    <h2 class="text-2xl font-semibold mb-3">Core Features</h2>
    <ul class="list-disc list-inside mb-6 text-zinc-200 space-y-1">
      <li>User and role management with granular permissions.</li>
      <li>Catalog and CRUD operations for wares and categories.</li>
      <li>Sales and offer creation module with PDF generation.</li>
      <li>Automated email sending for offers and notifications.</li>
      <li>Comprehensive reporting dashboard with export capabilities.</li>
      <li>Customer-facing acceptance page for digital sign-off.</li>
    </ul>

    <h2 class="text-2xl font-semibold mb-3">Tech Stack & Responsibilities</h2>
    <ul class="list-disc list-inside mb-6 text-zinc-200 space-y-1">
      <li>Backend: <code>Laravel</code>, <code>MySQL</code> — designed RESTful APIs, data models, and PDF export logic.</li>
      <li>Frontend: <code>Vue.js</code> — built dynamic components, forms, and real‑time notifications.</li>
      <li>Implemented email workflows and templating using Laravel Mail.</li>
      <li>Led the project end‑to‑end, from requirements gathering through deployment.</li>
      <li>Coordinated with stakeholders to refine feature scope and rollout phases.</li>
    </ul>

    <p class="text-zinc-100 leading-relaxed">
      This platform significantly reduced manual invoicing and improved response times by centralizing offers, sales, and reporting into a single unified system.
    </p>
    </section>
  </div>
   <h2 class="text-2xl font-semibold mb-3 mt-6">Screenshots</h2>
   <ScreenshotPreview :images="images"></ScreenshotPreview>

</template>
