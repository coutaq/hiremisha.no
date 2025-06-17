<template>
  <section
    aria-labelledby="experience-title"
    class="col-span-full mx-auto py-12 rounded-md"
  >
    <h2
      id="experience-title"
      class="text-3xl font-bold mb-8 text-zinc-100 border-b border-zinc-700 pb-2"
    >
      Experience
    </h2>

    <div class="flex flex-col gap-8 border-l-4 pl-6 border-zinc-700 u-border-primary">
      <article class="relative" v-motion-pop-visible-once>
        <span
          class="absolute -left-5 top-1.5 w-4 h-4 rounded-full border-2 border-zinc-900 u-bg-primary"
          aria-hidden="true"
        ></span>
        <time class="block text-xs text-zinc-400 mb-1">Sep 2024 – Present</time>
        <h3 class="font-semibold mb-1 u-text-primary">
          Computer Technician, Gardia AS
        </h3>
        <p class="text-zinc-300 text-sm">
          Repaired devices and developed an internal web solution to improve company efficiency.
        </p>
      </article>

      <!-- Computer Salesman -->
      <article class="relative"  v-motion-pop-visible-once>
        <span
          class="absolute -left-5 top-1.5 w-4 h-4 rounded-full border-2 border-zinc-900 u-bg-primary"
          aria-hidden="true"
        ></span>
        <time class="block text-xs text-zinc-400 mb-1">Nov 2023 – Sep 2024</time>
        <h3 class="font-semibold mb-1 u-text-primary">Computer Salesman, Power AS</h3>
        <p class="text-zinc-300 text-sm">
          Delivered great customer experience and met sales targets in a fast-paced environment.
        </p>
      </article>

      <!-- Freelance Developer -->
      <article class="relative"  v-motion-pop-visible-once>
        <span
          class="absolute -left-5 top-1.5 w-4 h-4 rounded-full border-2 border-zinc-900 u-bg-primary"
          aria-hidden="true"
        ></span>
        <time class="block text-xs text-zinc-400 mb-1">Mar 2022 – Present</time>
        <h3 class="font-semibold mb-1 u-text-primary">Freelance Developer</h3>
        <p class="text-zinc-300 text-sm">
          Led projects and managed a small team to deliver stable, modern solutions.
        </p>
      </article>

      <!-- Part-time Fullstack Developer -->
      <article class="relative"  v-motion-pop-visible-once>
        <span
          class="absolute -left-5 top-1.5 w-4 h-4 rounded-full border-2 border-zinc-900 u-bg-primary"
          aria-hidden="true"
        ></span>
        <time class="block text-xs text-zinc-400 mb-1">Sep 2020 – Feb 2022</time>
        <h3 class="font-semibold mb-1 u-text-primary">Part-time Fullstack Developer, Donbass IT</h3>
        <p class="text-zinc-300 text-sm">
          Worked on frontend and backend projects, improved teamwork and git skills.
        </p>
      </article>



      <article class="relative"  v-motion-pop-visible-once>
        <span
          class="absolute -left-5 top-1.5 w-4 h-4 rounded-full border-2 border-zinc-900 u-bg-primary"
          aria-hidden="true"
        ></span>
        <time class="block text-xs text-zinc-400 mb-1">Jun 2020 – Aug 2020</time>
        <h3 class="font-semibold mb-1 u-text-primary">Summer Intern, Donbass IT</h3>
        <p class="text-zinc-300 text-sm">
          Gained experience in software lifecycle and professional systems.
        </p>
      </article>
    </div>
  </section>
</template>
