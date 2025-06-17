<script setup lang="ts">

interface Props {
  images: string[]
}
const props = defineProps<Props>()

const lightboxOpen = ref(false)
const selectedIndex = ref<number>(0)

const openLightbox = (index: number) => {
  selectedIndex.value = index
  lightboxOpen.value = true
}

const prevImage = () => {
  selectedIndex.value = (selectedIndex.value - 1 + props.images.length) % props.images.length
}

const nextImage =() => {
  selectedIndex.value = (selectedIndex.value + 1) % props.images.length
}
</script>

<template>
  <div class="w-full px-4 sm:px-20 relative select-none mb-60">
      <button
        @click="prevImage"
        class=" hover:bg-zinc-700  cursor-pointer absolute left-4 top-1/2 transform -translate-y-1/2 bg-zinc-800 bg-opacity-50 rounded-full flex items-center justify-center text-center aspect-square w-10 hover:bg-opacity-75 text-white z-20"
        aria-label="Previous image"
      >
        <span class="text-xl"><</span>
      </button>
      <button
        @click="nextImage"
        class=" hover:bg-zinc-700 cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 bg-zinc-800 bg-opacity-50  rounded-full flex items-center justify-center  aspect-square w-10 hover:bg-opacity-75 text-white z-20"
        aria-label="Next image"
      >
          <span class=" text-xl">></span>
      </button>
      <div class="flex flex-col h-full">
        <div class="flex justify-end p-4">
         
        </div>
        <div class="flex-1 flex justify-center items-center bg-zinc-800">
          <img
            :src="images[selectedIndex]"
            alt="Enlarged image"
            class="max-w-[80vw] object-contain"
          />
        </div>
      </div>
   
  </div>
</template>

