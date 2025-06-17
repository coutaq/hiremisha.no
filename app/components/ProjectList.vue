<script setup lang="ts">

const mailOpen = ref(false)
const gardiaOpen = ref(false)
const reportOpen = ref(false)
</script>

<template>
  <section class="flex flex-col gap-4 col-span-full select-none mt-20">
    <h1 class="text-3xl">Projects I've worked on</h1>
    <section class="flex flex-wrap gap-4 w-full">
      <UModal  title="Mail Sequencer" v-model:open="mailOpen" fullscreen >
          <div v-motion-pop-visible-once
          @click="mailOpen = true"
            class="cursor-pointer max-w-md mx-auto border border-zinc-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-zinc-800"
          >
            <NuxtImg
              src="../../images/sequencer1.jpg"
              alt="Mail Sequencer Screenshot"
              class="w-full object-cover"
            />
            <div class="p-4">
              <h3 class="text-xl font-semibold mb-2">Mail Sequencer</h3>
              <p class="text-sm mb-4">
                Full-stack email automation platform built with Vue.js, Python
                Flask, and MySQL. Includes a Chrome plugin, multi-stage
                sequences, and personalized outreach.
              </p>
            </div>
          </div>
        <template #body>
          <MailSequencer/>
        </template>
      </UModal>
       <UModal  title="Gardia's Internal System" v-model:open="gardiaOpen" fullscreen>
          <div v-motion-pop-visible-once
          @click="gardiaOpen = true"
            class="cursor-pointer max-w-md mx-auto border border-zinc-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-zinc-800"
          >
            <NuxtImg
              src="../../images/gardia1.jpg"
              alt="Gardia Screenshot"
              class="w-full object-cover"
            />
            <div class="p-4">
              <h3 class="text-xl font-semibold mb-2">Gardia's Internal System</h3>
              <p class="text-sm mb-4">
               An internal management system built with Laravel, Vue.js, and MySQL. Supports user/role management, ware catalog, offers, email notifications, reporting, PDF exports, and customer acceptance flows.
              </p>
            </div>
          </div>
        <template #body>
          <GardiaInternal/>
        </template>
      </UModal>
 <UModal  title="Gardia's Internal System" v-model:open="reportOpen" fullscreen >
          <div v-motion-pop-visible-once
          @click="reportOpen = true"
            class="cursor-pointer max-w-md mx-auto border border-zinc-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-zinc-800"
          >
            <NuxtImg
              src="../../images/report1.jpg"
              alt="Gardia Screenshot"
              class="w-full object-cover aspect-video object-top"
            />
            <div class="p-4">
              <h3 class="text-xl font-semibold mb-2">Gardia's Reporting App</h3>
              <p class="text-sm mb-4">
              A PWA for generating reports connected to the internal system via REST API.
              </p>
            </div>
          </div>
        <template #body>
          <ReportApp/>
        </template>
      </UModal>
    </section>
  </section>
</template>
