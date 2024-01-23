<script setup lang="ts">
import gsap, { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const content = ref(null);
const groupname = ref(null);
const artists = ref(null);
const soelink = ref(null);

onMounted(() => {
  gsap
  .timeline({repeat: 0})
  .set(content.value, {
    opacity: 1
  })
  .from(groupname.value, {
    opacity: 0,
    duration: .6,
    y: -100,
    ease: 'power4.out',
    delay: .7,
  })
  .from(artists.value, {
    opacity: 0,
    duration: .6,
    y: -50,
    ease: 'power4.out',
  }, ">-.2")
  .from(soelink.value, {
    opacity: 0,
    duration: .6,
    y: -50,
    ease: 'power4.out',
  }, ">-.2")
})
</script>
<template>
  <div class="flex items-center justify-center font-dm-sans bg-gradient-to-r from-green-100 from-[-30%] via-blue via-[30%] to-black w-screen h-screen">
   <div ref="content" class="opacity-0 w-full md:w-1/2 lg:1/3">
    <h1 ref="groupname" class="relative lowercase text-center z-10 font-dorsa text-7xl md:text-9xl text-white whitespace-nowrap">
      Sages from Earth
    </h1>

    <ul ref="artists" class="-mt-1 flex space-x-1 md:space-x-4 justify-center items-center md:bg-black/20 rounded-lg p-6">
      <li class="artist">
        <NuxtLink to="https://instagram.com/barilutalo" target="_blank" class="inline-flex bg-red text-white px-2 py-1 rounded-sm hover:scale-110 focus:scale-110 duration-300">
          @barilutalo
        </NuxtLink></li>
      <li class="artist">
        <NuxtLink to="https://instagram.com/neezyprice" target="_blank" class="inline-flex bg-blue text-white px-2 py-1 rounded-sm hover:scale-110 focus:scale-110 duration-300">
          @neezyprice
        </NuxtLink>
      </li>
      <li class="artist">
        <NuxtLink to="https://instagram.com/timuism" target="_blank" class="inline-flex bg-green-500 text-black px-2 py-1 rounded-sm hover:scale-110 focus:scale-110 duration-300">
          @subatmc
        </NuxtLink>
      </li>
    </ul>

    <p ref="soelink" class="text-center md:mt-2 relative z-20">
      <NuxtLink to="https://instagram.com/sagesfromearth" target="_blank" class="inline-flex bg-black text-white px-6 py-2 rounded-md hover:scale-110 focus:scale-110 duration-300">
        @sagesfromearth
      </NuxtLink>
    </p>
    
    <div class="text-white text-center mt-8 opacity-0">
      <h3 class="inline-flex uppercase font-light tracking-widest text-sm text-yellow border-b border-yellow pb-1 pr-4">The latest news</h3>
      <p class="mt-2">
        Nothing to see here yet.
      </p>
    </div>
  </div> 


  </div>
</template>
