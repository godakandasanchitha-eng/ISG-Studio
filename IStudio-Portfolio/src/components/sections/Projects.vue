<script setup lang="ts">
import { motion } from 'motion-v'
import { ArrowUpRight } from '@lucide/vue'

// Sample projects data using Unsplash images and fake titles/categories matching your layout
const projects = [
  {
    id: 1,
    title: 'Flux — Product Design',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    tags: ['Motion Design', 'UI Design'],
    link: '#project-flux'
  },
  {
    id: 2,
    title: 'Nexo — Immersive VR UI',
    image: 'https://images.unsplash.com/photo-1618172193763-c511deb635ca?q=80&w=1200&auto=format&fit=crop',
    tags: ['3D Motion', 'Frontend'],
    link: '#project-nexo'
  },
  {
    id: 3,
    title: 'Aura — Fintech Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    tags: ['UX Research', 'Design System'],
    link: '#project-aura'
  }
]
</script>

<template>
  <section 
    id="work" 
    class="relative flex w-full flex-col items-center justify-center bg-white px-6 py-28"
    style="font-family: 'DM Sans', sans-serif;"
  >
    <!-- Section Header -->
    <div class="mb-16 flex w-full max-w-7xl flex-col items-start md:items-center text-left md:text-center">
      <motion.span 
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true }"
        :transition="{ duration: 0.6 }"
        class="rounded-full bg-[#D4FF33] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0D0E11]"
      >
        Selected Works
      </motion.span>
      <motion.h2 
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true }"
        :transition="{ duration: 0.6, delay: 0.1 }"
        class="mt-4 text-3xl font-bold tracking-tight text-[#0D0E11] md:text-5xl"
      >
        Crafted with <span class="rounded-xl bg-[#D4FF33] px-3 py-0.5 text-[#0D0E11]">Precision</span>
      </motion.h2>
    </div>

    <!-- 3 Cards in a Row Grid Layout -->
    <div class="grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
      <motion.div
        v-for="(project, index) in projects"
        :key="project.id"
        :initial="{ opacity: 0, y: 40 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true }"
        :transition="{ duration: 0.7, delay: index * 0.15 }"
        class="group flex flex-col gap-3"
      >
        <!-- 1. Top Image Box -->
        <a :href="project.link" class="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-[#0D0E11]/10 bg-[#F8F9FA] shadow-md transition-all duration-300 group-hover:border-[#0D0E11]/30 group-hover:-translate-y-1.5">
          <img 
            :src="project.image" 
            :alt="project.title"
            class="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60"></div>
          
          <!-- Floating Arrow Icon on Hover -->
          <div class="absolute right-5 top-5 flex h-10 w-10 translate-y-2 opacity-0 items-center justify-center rounded-full bg-[#D4FF33] text-[#0D0E11] shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight class="h-5 w-5" />
          </div>
        </a>

        <!-- 2. Bottom Details Box (Thin rectangle with title and tags in a single row) -->
        <div class="flex w-full items-center justify-between gap-3 rounded-xl border border-[#0D0E11]/10 bg-[#F8F9FA] px-5 py-3.5 shadow-sm transition-all duration-300 group-hover:border-[#0D0E11]/25">
          <!-- Title -->
          <h3 class="text-sm font-bold tracking-tight text-[#0D0E11] truncate lg:text-base">
            {{ project.title }}
          </h3>

          <!-- Tag Pills in a Row -->
          <div class="flex items-center gap-1.5 shrink-0">
            <span 
              v-for="tag in project.tags" 
              :key="tag"
              class="rounded-full border border-[#0D0E11]/10 bg-white px-2.5 py-1 text-[10px] font-semibold text-[#0D0E11]/80 transition-colors"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
</template>