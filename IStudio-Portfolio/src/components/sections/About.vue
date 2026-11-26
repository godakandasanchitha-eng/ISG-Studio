<script setup lang="ts">
import { motion } from 'motion-v'
import { Sparkles } from '@lucide/vue'
</script>

<template>
  <section 
    id="about" 
    class="relative flex w-full flex-col items-center justify-center bg-white px-6 py-28"
    style="font-family: 'DM Sans', sans-serif;"
  >
    <div class="w-full max-w-6xl">
      
      <!-- Top Centered Intro Block -->
      <div class="mb-20 flex flex-col items-center text-center">
        <motion.h2 
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.6 }"
          class="text-3xl font-bold tracking-tight text-[#0D0E11] md:text-5xl"
        >
          Rooted in digital excellence
        </motion.h2>
        
        <motion.p 
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.6, delay: 0.1 }"
          class="mt-6 max-w-2xl text-base font-medium text-[#0D0E11]/60 md:text-lg"
        >
          ISGStudio is a creative technology agency dedicated to transforming the way brands connect with their audiences through seamless design and code.
        </motion.p>

        <!-- Center Icon Divider -->
        <motion.div 
          :initial="{ opacity: 0, scale: 0.8 }"
          :while-in-view="{ opacity: 1, scale: 1 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.6, delay: 0.2 }"
          class="my-8 flex h-10 w-10 items-center justify-center rounded-full bg-[#D4FF33] text-[#0D0E11]"
        >
          <Sparkles class="h-5 w-5" />
        </motion.div>

        <motion.p 
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.6, delay: 0.3 }"
          class="max-w-xl text-sm font-semibold tracking-wide text-[#0D0E11]/50"
        >
          Founded with a clear vision: to merge aesthetic minimalism with high-performance web architecture.
        </motion.p>
      </div>

      <!-- Two-Column Layout (Our Story & Image) -->
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        
        <!-- Left Column: Our Story Content Box -->
        <motion.div 
          :initial="{ opacity: 0, y: 30 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.7 }"
          class="flex flex-col items-center rounded-3xl border border-[#0D0E11]/10 bg-[#F8F9FA] p-10 text-center shadow-sm md:p-14"
        >
          <h3 class="mb-10 text-2xl font-bold text-[#0D0E11] md:text-3xl">
            Our story
          </h3>

          <h4 class="mb-8 text-lg font-bold leading-snug text-[#0D0E11] underline decoration-[#D4FF33] decoration-4 underline-offset-4 md:text-xl">
            We're helping shape the future of digital experiences.
          </h4>

          <div class="flex flex-col gap-6 text-sm font-medium leading-relaxed text-[#0D0E11]/70 md:text-base">
            <p>
              ISGStudio is a digital design and development agency dedicated to transforming the way modern brands exist online. We combine deep UI/UX expertise with cutting-edge frontend engineering.
            </p>
            <p>
              We believe great web design is both an aesthetic craft and a modern science. Our mission is to bridge the two, giving businesses of every scale access to the same immersive designs and blazing-fast performance once reserved for tech giants.
            </p>
            <p>
              A digital landscape where design and code work in perfect harmony, ensuring scalability and conversion without compromising the user journey.
            </p>
          </div>
        </motion.div>

        <!-- Right Column: Image Box -->
        <motion.div 
          :initial="{ opacity: 0, y: 30 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.7, delay: 0.2 }"
          class="relative aspect-square w-full overflow-hidden rounded-3xl border border-[#0D0E11]/10 lg:aspect-auto"
        >
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
            alt="Team collaborating in studio" 
            class="h-full w-full object-cover object-center"
          />
          <!-- Subtle Overlay -->
          <div class="absolute inset-0 bg-black/5"></div>
        </motion.div>

      </div>
    </div>
  </section>
</template>