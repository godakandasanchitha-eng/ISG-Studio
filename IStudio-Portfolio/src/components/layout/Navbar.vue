<script setup lang="ts">
import { ref } from 'vue'
import { motion } from 'motion-v'
import { ArrowUpRight } from '@lucide/vue'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Work', href: '#work' },
  { name: 'About Us', href: '#about' }
]

const activeItem = ref('Home')
</script>

<template>
  <motion.header
    :initial="{ y: -40, opacity: 0 }"
    :animate="{ y: 0, opacity: 1 }"
    :transition="{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }"
    class="fixed top-6 left-1/2 z-50 flex w-11/12 max-w-5xl -translate-x-1/2 items-center justify-between rounded-2xl border border-[#D4FF33]/15 bg-[#0D0E11]/85 px-4 py-3 shadow-2xl shadow-black/60 backdrop-blur-md md:px-6"
    style="font-family: 'DM Sans', sans-serif;"
  >
    <!-- Logo -->
    <a href="#home" class="flex items-center gap-3 transition-transform hover:scale-105">
      <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-[#D4FF33] p-1">
        <img 
          src="/images/IStudio_Logo.jpg" 
          alt="ISGStudio Logo" 
          class="h-full w-full object-contain mix-blend-multiply" 
        />
      </div><span class="text-[#ffffff]">Studio</span>
    </a>

    <!-- Center Navigation -->
    <nav class="hidden items-center gap-8 md:flex">
      <a
        v-for="item in navItems"
        :key="item.name"
        :href="item.href"
        @click="activeItem = item.name"
        :class="cn(
          'text-sm transition-colors duration-200',
          activeItem === item.name
            ? 'font-semibold text-[#D4FF33]'
            : 'font-medium text-white/60 hover:text-white'
        )"
      >
        {{ item.name }}
      </a>
    </nav>

    <!-- Right CTA Button -->
    <a 
      href="#contact" 
      class="group flex items-center gap-2 rounded-xl bg-[#D4FF33] px-5 py-2.5 text-sm font-bold text-[#0D0E11] transition-all hover:bg-white hover:shadow-lg hover:shadow-[#D4FF33]/20"
    >
      Book a call
      <ArrowUpRight class="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  </motion.header>
</template>