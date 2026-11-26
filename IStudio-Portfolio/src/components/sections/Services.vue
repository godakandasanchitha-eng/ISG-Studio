<script setup lang="ts">
import { motion } from 'motion-v'
import { 
  Search, 
  Smartphone, 
  ShoppingCart, 
  Zap, 
  Database, 
  Sparkles 
} from '@lucide/vue'

const secondaryServices = [
  { 
    icon: Search, 
    title: 'SEO Optimization', 
    desc: 'Boost visibility and rank higher on search engines.' 
  },
  { 
    icon: Smartphone, 
    title: 'Responsive Design', 
    desc: 'Flawless experiences across all devices and screen sizes.' 
  },
  { 
    icon: ShoppingCart, 
    title: 'E-commerce Solutions', 
    desc: 'Scalable online stores built for conversion and growth.' 
  },
  { 
    icon: Zap, 
    title: 'Performance Audits', 
    desc: 'Lightning-fast load times and optimized core web vitals.' 
  },
  { 
    icon: Database, 
    title: 'CMS Integration', 
    desc: 'Easy content management with modern headless systems.' 
  },
  { 
    icon: Sparkles, 
    title: 'Web Animation', 
    desc: 'Engaging micro-interactions that bring your site to life.' 
  }
]
</script>

<template>
  <section 
    id="services" 
    class="relative flex w-full flex-col items-center justify-center bg-[#0D0E11] px-6 py-28"
    style="font-family: 'DM Sans', sans-serif;"
  >
    <div class="w-full max-w-7xl">
      
      <!-- Section Header -->
      <div class="mb-12 flex flex-col items-start">
        <motion.div 
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.6 }"
          class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4FF33]"
        >
          <span>+</span>
          <span>Service</span>
        </motion.div>
        
        <motion.h2 
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.6, delay: 0.1 }"
          class="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          Smart digital solutions for modern brands
        </motion.h2>
      </div>

      <!-- Bento Grid Layout -->
      <div class="grid w-full grid-cols-1 gap-6 md:grid-cols-6">
        
        <!-- LARGE CARD 1: UI/UX Design (Spans 3 cols) -->
        <motion.div 
          :initial="{ opacity: 0, y: 40 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.7 }"
          class="group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-3xl border border-[#D4FF33]/15 bg-[#12141C] p-8 transition-colors hover:border-[#D4FF33]/40 md:col-span-3"
        >
          <!-- Subtle Glow Background -->
          <div class="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#D4FF33]/10 blur-[80px] transition-opacity group-hover:bg-[#D4FF33]/20"></div>
          
          <div class="relative z-10">
            <h3 class="text-xl font-bold text-[#D4FF33]">UI/UX Design</h3>
            <p class="mt-2 text-sm font-medium text-white/70 max-w-sm">
              Craft intuitive and engaging user experiences from initial wireframes to high-fidelity prototypes.
            </p>
          </div>

          <!-- CSS UI Mockup Graphic -->
          <div class="relative z-10 mt-12 flex h-64 w-full flex-col overflow-hidden rounded-t-2xl border-x border-t border-[#D4FF33]/20 bg-[#1A1D27] p-5 shadow-2xl">
            <!-- Browser Dots -->
            <div class="mb-6 flex gap-2">
              <div class="h-3 w-3 rounded-full bg-white/20"></div>
              <div class="h-3 w-3 rounded-full bg-white/20"></div>
              <div class="h-3 w-3 rounded-full bg-white/20"></div>
            </div>
            <!-- Mock Chat/UI Elements -->
            <div class="flex flex-col gap-4">
              <div class="ml-auto w-2/3 rounded-2xl rounded-tr-sm bg-[#D4FF33]/10 p-3">
                <div class="h-2 w-3/4 rounded bg-white/40"></div>
              </div>
              <div class="w-3/4 rounded-2xl rounded-tl-sm bg-[#0D0E11] p-3 border border-[#D4FF33]/10">
                <div class="mb-2 h-2 w-full rounded bg-[#D4FF33]/60"></div>
                <div class="h-2 w-1/2 rounded bg-[#D4FF33]/40"></div>
              </div>
              <div class="w-1/2 rounded-2xl rounded-tl-sm bg-[#0D0E11] p-3 border border-[#D4FF33]/10">
                <div class="h-2 w-2/3 rounded bg-white/30"></div>
              </div>
            </div>
          </div>
        </motion.div>

        <!-- LARGE CARD 2: Web Development (Spans 3 cols) -->
        <motion.div 
          :initial="{ opacity: 0, y: 40 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.7, delay: 0.15 }"
          class="group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-3xl border border-[#D4FF33]/15 bg-[#12141C] p-8 transition-colors hover:border-[#D4FF33]/40 md:col-span-3"
        >
          <div class="relative z-10">
            <h3 class="text-xl font-bold text-white/50 group-hover:text-white transition-colors">Frontend Architecture</h3>
            <p class="mt-2 text-sm font-medium text-white/90 max-w-sm">
              Build robust, scalable web applications from dynamic concept to seamless deployment.
            </p>
          </div>

          <!-- CSS Workflow Diagram Graphic -->
          <div class="relative z-10 mt-12 flex h-64 w-full flex-col items-center justify-center rounded-xl bg-[#0D0E11]/50 border border-[#D4FF33]/5">
            <!-- Node 1 -->
            <div class="rounded-full border border-white/20 bg-[#1A1D27] px-4 py-1.5 text-xs font-semibold text-white/70">
              Vue / React Client
            </div>
            <!-- Line -->
            <div class="h-8 w-px bg-white/20"></div>
            <!-- Node 2 (Active) -->
            <div class="flex items-center gap-2 rounded-full bg-[#D4FF33] px-4 py-2 text-xs font-bold text-[#0D0E11] shadow-[0_0_20px_rgba(212,255,51,0.2)]">
              <Database class="h-3 w-3" />
              API Gateway
            </div>
            <!-- Split Lines -->
            <div class="flex w-32 h-8">
              <div class="w-1/2 border-b border-l border-white/20 rounded-bl-lg"></div>
              <div class="w-1/2 border-b border-r border-white/20 rounded-br-lg"></div>
            </div>
            <!-- Nodes 3 & 4 -->
            <div class="flex w-40 justify-between mt-0">
              <div class="w-px h-4 bg-white/20 ml-[-1px]"></div>
              <div class="w-px h-4 bg-white/20 mr-[-1px]"></div>
            </div>
            <div class="flex w-48 justify-between">
              <div class="rounded-full border border-[#D4FF33]/30 bg-[#D4FF33]/10 px-3 py-1 text-[10px] font-semibold text-[#D4FF33]">Headless CMS</div>
              <div class="rounded-full border border-white/20 bg-[#1A1D27] px-3 py-1 text-[10px] font-semibold text-white/50">Database</div>
            </div>
          </div>
        </motion.div>

        <!-- SMALL CARDS (Span 2 cols each, creating a row of 3) -->
        <motion.div 
          v-for="(service, index) in secondaryServices"
          :key="service.title"
          :initial="{ opacity: 0, y: 30 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.6, delay: 0.1 * index }"
          class="group col-span-1 flex flex-col justify-between rounded-3xl border border-[#D4FF33]/10 bg-[#12141C] p-8 transition-all hover:-translate-y-1 hover:border-[#D4FF33]/30 md:col-span-2"
        >
          <!-- Icon Box -->
          <div class="mb-12 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#1A1D27] text-white/70 transition-colors group-hover:border-[#D4FF33]/30 group-hover:bg-[#D4FF33]/10 group-hover:text-[#D4FF33]">
            <component :is="service.icon" class="h-5 w-5" />
          </div>

          <!-- Text Content -->
          <div>
            <h4 class="text-sm font-bold text-white/60 transition-colors group-hover:text-white">
              {{ service.title }}
            </h4>
            <p class="mt-2 text-xs font-medium leading-relaxed text-white/50">
              {{ service.desc }}
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
</template>