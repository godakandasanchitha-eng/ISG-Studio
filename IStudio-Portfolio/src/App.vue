<script setup lang="ts">
import Navbar from '@/components/layout/Navbar.vue'
import Hero from '@/components/sections/Hero.vue'
import About from '@/components/sections/About.vue'
import Projects from '@/components/sections/Projects.vue'
import Process from '@/components/sections/Process.vue'
import Services from '@/components/sections/Services.vue'
import CTA from '@/components/sections/CTA.vue'
</script>

<template>
  <div class="min-h-screen bg-[#0D0E11] text-white">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      <Process />
      <Services />
      <CTA />
    </main>
  </div>
</template>