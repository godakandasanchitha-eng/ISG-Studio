<script setup lang="ts">
import { motion } from 'motion-v'
import { ArrowUpRight } from '@lucide/vue'
</script>

<template>
  <section 
    id="home" 
    class="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0D0E11] px-6 pt-32 pb-20"
    style="font-family: 'DM Sans', sans-serif;"
  >
    <!-- Subtle Ambient Acid Lime Glow -->
    <div class="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4FF33]/5 blur-[130px]"></div>

    <!-- 
      ORBITAL SYSTEM MASK WRAPPER (WITH ENTRANCE EXPANSION)
      Starts scaled down and hidden behind the center title, then smoothly expands outward.
    -->
    <motion.div 
      :initial="{ scale: 0.2, opacity: 0 }"
      :animate="{ scale: 1, opacity: 1 }"
      :transition="{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }"
      class="pointer-events-none absolute inset-0 z-0"
      style="mask-image: linear-gradient(to bottom, transparent 42%, black 46%); -webkit-mask-image: linear-gradient(to bottom, transparent 42%, black 46%);"
    >
      <!-- ORBITAL SYSTEM CONTAINER -->
      <div class="absolute left-1/2 top-[45%] flex h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 items-center justify-center md:h-[1000px] md:w-[1000px]">
        
        <!-- LAYER 1: THE TRACK -->
        <motion.div
          :animate="{ rotate: 360 }"
          :transition="{ duration: 50, repeat: Infinity, ease: 'linear' }"
          class="absolute inset-0 rounded-full border border-dashed border-[#D4FF33]/25"
        ></motion.div>

        <!-- LAYER 2: THE ICONS -->
        <motion.div
          :animate="{ rotate: 360 }"
          :transition="{ duration: 50, repeat: Infinity, ease: 'linear' }"
          class="absolute inset-0"
        >
          <!-- 1. Top (0°) - Figma -->
          <div class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <motion.div :animate="{ rotate: -360 }" :transition="{ duration: 50, repeat: Infinity, ease: 'linear' }" class="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4FF33]/20 bg-[#0D0E11] shadow-xl shadow-black/80 md:h-16 md:w-16">
              <svg class="h-8 w-8" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/><path d="M0 47.5a9.5 9.5 0 0 1 9.5-9.5H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/><path d="M19 0L9.5 0A9.5 9.5 0 0 0 0 9.5v0A9.5 9.5 0 0 0 9.5 19H19V0z" fill="#F24E1E"/><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/><path d="M38 9.5A9.5 9.5 0 0 0 28.5 0H19v19h9.5A9.5 9.5 0 0 0 38 9.5z" fill="#FF7262"/></svg>
            </motion.div>
          </div>

          <!-- 2. Top Right (45°) - Antigravity -->
          <div class="absolute left-[85.35%] top-[14.65%] -translate-x-1/2 -translate-y-1/2">
            <motion.div :animate="{ rotate: -360 }" :transition="{ duration: 50, repeat: Infinity, ease: 'linear' }" class="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4FF33]/20 bg-[#0D0E11] shadow-xl shadow-black/80 md:h-16 md:w-16">
              <img src="/images/antigravity-color.svg" alt="Antigravity" class="h-8 w-8 object-contain" />
            </motion.div>
          </div>

          <!-- 3. Right (90°) - GitHub (White BG) -->
          <div class="absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div :animate="{ rotate: -360 }" :transition="{ duration: 50, repeat: Infinity, ease: 'linear' }" class="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl shadow-black/80 md:h-16 md:w-16">
              <svg class="h-8 w-8 text-[#0D0E11]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </motion.div>
          </div>

          <!-- 4. Bottom Right (135°) - Gemini -->
          <div class="absolute left-[85.35%] top-[85.35%] -translate-x-1/2 -translate-y-1/2">
            <motion.div :animate="{ rotate: -360 }" :transition="{ duration: 50, repeat: Infinity, ease: 'linear' }" class="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4FF33]/20 bg-[#0D0E11] shadow-xl shadow-black/80 md:h-16 md:w-16">
              <svg class="h-9 w-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gemini-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#4285F4"/>
                    <stop offset="33%" stop-color="#9B72CB"/>
                    <stop offset="66%" stop-color="#D96570"/>
                    <stop offset="100%" stop-color="#F49C56"/>
                  </linearGradient>
                </defs>
                <path d="M12 2C12.38 7.42 16.58 11.62 22 12C16.58 12.38 12.38 16.58 12 22C11.62 16.58 7.42 12.38 2 12C7.42 11.62 11.62 7.42 12 2Z" fill="url(#gemini-grad-1)"/>
              </svg>
            </motion.div>
          </div>

          <!-- 5. Bottom (180°) - Figma -->
          <div class="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2">
            <motion.div :animate="{ rotate: -360 }" :transition="{ duration: 50, repeat: Infinity, ease: 'linear' }" class="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4FF33]/20 bg-[#0D0E11] shadow-xl shadow-black/80 md:h-16 md:w-16">
              <svg class="h-8 w-8" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/><path d="M0 47.5a9.5 9.5 0 0 1 9.5-9.5H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/><path d="M19 0L9.5 0A9.5 9.5 0 0 0 0 9.5v0A9.5 9.5 0 0 0 9.5 19H19V0z" fill="#F24E1E"/><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/><path d="M38 9.5A9.5 9.5 0 0 0 28.5 0H19v19h9.5A9.5 9.5 0 0 0 38 9.5z" fill="#FF7262"/></svg>
            </motion.div>
          </div>

          <!-- 6. Bottom Left (225°) - Antigravity -->
          <div class="absolute left-[14.65%] top-[85.35%] -translate-x-1/2 -translate-y-1/2">
            <motion.div :animate="{ rotate: -360 }" :transition="{ duration: 50, repeat: Infinity, ease: 'linear' }" class="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4FF33]/20 bg-[#0D0E11] shadow-xl shadow-black/80 md:h-16 md:w-16">
              <img src="/images/antigravity-color.svg" alt="Antigravity" class="h-8 w-8 object-contain" />
            </motion.div>
          </div>

          <!-- 7. Left (270°) - GitHub (White BG) -->
          <div class="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div :animate="{ rotate: -360 }" :transition="{ duration: 50, repeat: Infinity, ease: 'linear' }" class="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl shadow-black/80 md:h-16 md:w-16">
              <svg class="h-8 w-8 text-[#0D0E11]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </motion.div>
          </div>

          <!-- 8. Top Left (315°) - Gemini -->
          <div class="absolute left-[14.65%] top-[14.65%] -translate-x-1/2 -translate-y-1/2">
            <motion.div :animate="{ rotate: -360 }" :transition="{ duration: 50, repeat: Infinity, ease: 'linear' }" class="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4FF33]/20 bg-[#0D0E11] shadow-xl shadow-black/80 md:h-16 md:w-16">
              <svg class="h-9 w-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gemini-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#4285F4"/>
                    <stop offset="33%" stop-color="#9B72CB"/>
                    <stop offset="66%" stop-color="#D96570"/>
                    <stop offset="100%" stop-color="#F49C56"/>
                  </linearGradient>
                </defs>
                <path d="M12 2C12.38 7.42 16.58 11.62 22 12C16.58 12.38 12.38 16.58 12 22C11.62 16.58 7.42 12.38 2 12C7.42 11.62 11.62 7.42 12 2Z" fill="url(#gemini-grad-2)"/>
              </svg>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </motion.div>

    <!-- Centered Hero Content -->
    <motion.div 
      :initial="{ opacity: 0, y: 30 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.8, delay: 0.1 }"
      class="z-10 mt-8 flex max-w-4xl flex-col items-center text-center"
    >
      <h1 class="text-[2.75rem] font-bold leading-[1.1] tracking-tight text-white md:text-7xl lg:text-[5rem]">
        Vision Through <br />
        <span class="mt-2 flex flex-wrap items-center justify-center gap-2 md:gap-4">
          <span class="font-serif text-[#D4FF33] italic font-light">Design & Code</span> 
        </span>
      </h1>

      <p class="mt-8 max-w-2xl text-lg font-medium text-white/60 md:text-xl">
        ISGStudio is a hybrid creative workspace shaping distinctive brand identities and engineering flawless digital journeys from wireframe to deployment.
      </p>

      <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <!-- Primary CTA -->
        <a 
          href="#contact" 
          class="group flex items-center gap-2 rounded-2xl bg-[#D4FF33] px-8 py-4 text-base font-bold text-[#0D0E11] shadow-lg shadow-[#D4FF33]/15 transition-all hover:bg-white hover:shadow-white/20 hover:-translate-y-1"
        >
          Book a call
          <ArrowUpRight class="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        
        <!-- Secondary CTA -->
        <a 
          href="#work" 
          class="group flex items-center gap-2 rounded-2xl border border-[#D4FF33]/25 bg-[#0D0E11]/80 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-[#D4FF33] hover:bg-[#D4FF33]/10 hover:text-[#D4FF33] hover:-translate-y-1"
        >
          View Our Works
        </a>
      </div>
    </motion.div>
  </section>
</template>