<script setup lang="ts">
import { motion } from 'motion-v'
import { Sparkles } from '@lucide/vue'
</script>

<template>
  <section 
    id="about" 
    class="relative flex w-full flex-col items-center justify-center bg-[#0D0E11] px-6 py-28"
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
          class="text-3xl font-bold tracking-tight text-white md:text-5xl"
        >
          Rooted in digital excellence
        </motion.h2>
        
        <motion.p 
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.6, delay: 0.1 }"
          class="mt-6 max-w-2xl text-base font-medium text-white/60 md:text-lg"
        >
          ISGStudio is a creative technology agency dedicated to transforming the way brands connect with their audiences through seamless design and code.
        </motion.p>

        <!-- Center Icon Divider -->
        <motion.div 
          :initial="{ opacity: 0, scale: 0.8 }"
          :while-in-view="{ opacity: 1, scale: 1 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.6, delay: 0.2 }"
          class="my-8 text-[#D4FF33]"
        >
          <Sparkles class="h-6 w-6" />
        </motion.div>

        <motion.p 
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.6, delay: 0.3 }"
          class="max-w-xl text-sm font-semibold tracking-wide text-white/40"
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
          class="flex flex-col items-center rounded-3xl border border-[#D4FF33]/15 bg-[#12141C] p-10 text-center shadow-2xl md:p-14"
        >
          <h3 class="mb-10 text-2xl font-bold text-white md:text-3xl">
            Our story
          </h3>

          <h4 class="mb-8 text-lg font-bold leading-snug text-[#D4FF33] md:text-xl">
            We're helping shape the future of digital experiences.
          </h4>

          <div class="flex flex-col gap-6 text-sm font-medium leading-relaxed text-white/70 md:text-base">
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
          class="relative aspect-square w-full overflow-hidden rounded-3xl border border-[#D4FF33]/15 lg:aspect-auto"
        >
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
            alt="Team collaborating in studio" 
            class="h-full w-full object-cover object-center"
          />
          <!-- Subtle Dark Overlay to match theme -->
          <div class="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
        </motion.div>

      </div>
    </div>
  </section>
</template>