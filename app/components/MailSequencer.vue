<script setup lang="ts">
const open = ref(false)
const images = [
  '../../images/sequencer1.jpg',
  '../../images/sequencer2.jpg',

]
</script>
<template>
  <div class="mx-auto p-6">
    <section class="max-w-7xl mx-auto">
        <h1 class="text-3xl font-bold mb-6 text-primary">Mail Sequencer — Email Automation Platform</h1>
        <NuxtImg
          src="../../images/sequencer1.jpg"
          alt="Mail Sequencer Dashboard"
          class="w-full rounded-lg mb-6 shadow-md"
        />
        <p class="mb-4 text-zinc-100 leading-relaxed">
          Led the development of a web-based email automation platform designed to streamline multi-stage email campaigns for recruitment teams. The platform integrates with Gmail API to enable personalized, sequenced email sending.
        </p>
        <h2 class="text-2xl font-semibold mb-3">Key Responsibilities</h2>
        <ul class="list-disc list-inside mb-6 text-zinc-200">
          <li>Full-stack development using <code>Vue.js</code> for the frontend and <code>Python (Flask) + MySQL</code> for the backend.</li>
          <li>Designing and implementing core features including user roles, email sequence creation, scheduling, and personalization with dynamic variables.</li>
          <li>Developed a Google Chrome plugin for quick recipient addition and campaign management.</li>
          <li>Managed a junior backend developer, delegating tasks and ensuring quality delivery of backend services.</li>
          <li>Coordinated the project through multiple phases: UI/UX design, backend CRUD functionality, email sending logic, and deployment.</li>
        </ul>
        <p class="text-zinc-100 leading-relaxed">
          The project improved internal recruitment communications by automating outreach and tracking email interactions with prospects efficiently.
        </p>
        <h2 class="text-2xl font-semibold mb-3 mt-6">Screenshots</h2>
    </section>
    <ScreenshotPreview :images="images"></ScreenshotPreview>
  </div>
</template>
