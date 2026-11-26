<script setup lang="ts">
import { motion } from 'motion-v'

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: 'We dive deep into your brand, understanding your goals, audience, and market to craft a tailored digital blueprint.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
    alt: 'Team planning strategy'
  },
  {
    step: '02',
    title: 'UI/UX Design',
    description: 'Our designers map out user journeys and create high-fidelity prototypes, ensuring every interaction is intuitive and engaging.',
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=800&auto=format&fit=crop',
    alt: 'Designer working on UI/UX'
  },
  {
    step: '03',
    title: 'Development & Build',
    description: 'We bring the designs to life using modern frontend architectures, prioritizing speed, responsiveness, and clean code.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
    alt: 'Coding on a laptop'
  },
  {
    step: '04',
    title: 'Testing & Launch',
    description: 'Rigorous QA and performance optimization precede a seamless deployment, setting you up for immediate impact.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    alt: 'Analyzing performance metrics'
  }
]
</script>

<template>
  <section 
    id="process" 
    class="relative flex w-full flex-col items-center justify-center bg-white px-6 py-28"
    style="font-family: 'DM Sans', sans-serif;"
  >
    <div class="w-full max-w-7xl">
      <!-- Section Header -->
      <div class="mb-20 flex flex-col items-start md:items-center text-left md:text-center">
        <motion.span 
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.6 }"
          class="rounded-full bg-[#D4FF33] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0D0E11]"
        >
          Our Process
        </motion.span>
        <motion.h2 
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.6, delay: 0.1 }"
          class="mt-4 text-4xl font-bold tracking-tight text-[#0D0E11] md:text-5xl"
        >
          How we build your vision
        </motion.h2>
      </div>

      <!-- Process Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y divide-[#0D0E11]/10 md:divide-y-0 md:divide-x border-t border-b border-[#0D0E11]/10">
        <div 
          v-for="(step, index) in processSteps" 
          :key="step.step"
          class="group relative flex flex-col justify-between p-8 xl:p-10 min-h-[500px]"
        >
          <!-- Top Content -->
          <motion.div
             :initial="{ opacity: 0, y: 30 }"
             :while-in-view="{ opacity: 1, y: 0 }"
             :viewport="{ once: true, margin: '-100px' }"
             :transition="{ duration: 0.6, delay: index * 0.15 }"
             class="flex flex-col h-full"
          >
            <!-- Step Number -->
            <div class="mb-8 flex h-8 w-8 items-center justify-center rounded-full border border-[#0D0E11]/20 text-xs font-semibold text-[#0D0E11]/60 transition-colors group-hover:border-[#0D0E11] group-hover:bg-[#D4FF33] group-hover:text-[#0D0E11]">
              {{ step.step }}
            </div>

            <h3 class="mb-4 text-2xl font-bold tracking-tight text-[#0D0E11] md:text-3xl">
              {{ step.title }}
            </h3>
            
            <p class="text-sm font-medium leading-relaxed text-[#0D0E11]/60">
              {{ step.description }}
            </p>
          </motion.div>

          <!-- Bottom Image -->
          <motion.div 
            :initial="{ opacity: 0, y: 60 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :viewport="{ once: true, margin: '-50px' }"
            :transition="{ duration: 0.8, delay: 0.2 + (index * 0.1) }"
            class="mt-12 aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#0D0E11]/10"
          >
            <img 
              :src="step.image" 
              :alt="step.alt" 
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
</template>