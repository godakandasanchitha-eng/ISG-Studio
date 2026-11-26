<script setup lang="ts">
import { motion } from 'motion-v'
import { ArrowUpRight, MessageCircle, User, Mail, Phone, Building, HelpCircle } from '@lucide/vue'
</script>

<template>
  <section 
    id="contact" 
    class="relative flex w-full flex-col items-center justify-center bg-[#0D0E11] px-6 py-28"
    style="font-family: 'DM Sans', sans-serif;"
  >
    <!-- Background Glow Effect (Matching the reference's vertical light streaks conceptually) -->
    <div class="pointer-events-none absolute inset-0 z-0 flex justify-center opacity-30">
      <div class="h-full w-[1px] bg-gradient-to-b from-transparent via-[#D4FF33]/30 to-transparent shadow-[0_0_100px_50px_rgba(212,255,51,0.15)] blur-md mx-[10%]"></div>
      <div class="h-full w-[1px] bg-gradient-to-b from-transparent via-[#D4FF33]/50 to-transparent shadow-[0_0_120px_60px_rgba(212,255,51,0.2)] blur-lg mx-[20%]"></div>
      <div class="h-full w-[1px] bg-gradient-to-b from-transparent via-[#D4FF33]/30 to-transparent shadow-[0_0_100px_50px_rgba(212,255,51,0.15)] blur-md mx-[10%]"></div>
    </div>

    <div class="relative z-10 w-full max-w-6xl grid grid-cols-1 gap-16 lg:grid-cols-2">
      
      <!-- Left Column: Copy & Social Proof -->
      <div class="flex flex-col justify-center">
        <motion.div 
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.6 }"
          class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4FF33]"
        >
          <span>👋</span>
          <span>Get in Touch</span>
        </motion.div>
        
        <motion.h2 
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.6, delay: 0.1 }"
          class="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl leading-[1.1]"
        >
          Let’s build your <br class="hidden lg:block"/> digital presence
        </motion.h2>

        <motion.p 
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.6, delay: 0.2 }"
          class="mt-6 text-sm font-medium text-white/60 md:text-base max-w-md"
        >
          Fill in your details and a lead designer will get back to you within 24 hours to discuss your UI/UX and development needs.
        </motion.p>

        <!-- Social Proof / Quick Contact Box -->
        <motion.div 
          :initial="{ opacity: 0, y: 30 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.6, delay: 0.3 }"
          class="mt-12 flex max-w-md items-center gap-5 rounded-2xl border border-white/10 bg-[#12141C] p-5 shadow-2xl"
        >
          <div class="h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-white/10">
            <!-- Using a professional placeholder headshot -->
            <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop" alt="Consultant" class="h-full w-full object-cover" />
          </div>
          <div class="flex flex-col gap-3">
            <span class="text-sm font-semibold text-white/90">Connect with our lead designer today</span>
            <div class="flex gap-2">
              <a href="#" class="group flex items-center gap-1.5 rounded-lg bg-[#D4FF33] px-3 py-1.5 text-xs font-bold text-[#0D0E11] transition-all hover:bg-white">
                Talk with an expert
                <ArrowUpRight class="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href="#" class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#1A1D27] text-white/70 border border-white/10 transition-colors hover:bg-[#2A3042] hover:text-white">
                <MessageCircle class="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <!-- Right Column: The Form -->
      <motion.div 
        :initial="{ opacity: 0, scale: 0.95 }"
        :while-in-view="{ opacity: 1, scale: 1 }"
        :viewport="{ once: true }"
        :transition="{ duration: 0.7, delay: 0.2 }"
        class="rounded-3xl bg-white p-8 md:p-10 shadow-[0_0_50px_rgba(212,255,51,0.05)]"
      >
        <h3 class="mb-8 text-2xl font-bold tracking-tight text-[#0D0E11]">Got a project in mind?</h3>
        
        <form @submit.prevent class="flex flex-col gap-5">
          <!-- Name Field -->
          <div class="flex flex-col gap-2">
            <label class="text-xs font-semibold text-[#0D0E11]/70">Name</label>
            <div class="relative flex items-center">
              <User class="absolute left-4 h-4 w-4 text-[#0D0E11]/40" />
              <input type="text" placeholder="Full name" class="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-11 pr-4 text-sm font-medium text-[#0D0E11] outline-none transition-all placeholder:text-[#0D0E11]/40 focus:border-[#0D0E11]/20 focus:bg-white focus:ring-4 focus:ring-[#D4FF33]/20" />
            </div>
          </div>

          <!-- Email Field -->
          <div class="flex flex-col gap-2">
            <label class="text-xs font-semibold text-[#0D0E11]/70">Email</label>
            <div class="relative flex items-center">
              <Mail class="absolute left-4 h-4 w-4 text-[#0D0E11]/40" />
              <input type="email" placeholder="Business email" class="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-11 pr-4 text-sm font-medium text-[#0D0E11] outline-none transition-all placeholder:text-[#0D0E11]/40 focus:border-[#0D0E11]/20 focus:bg-white focus:ring-4 focus:ring-[#D4FF33]/20" />
            </div>
          </div>

          <!-- Company & Phone Row (Responsive) -->
          <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div class="flex flex-col gap-2">
              <label class="text-xs font-semibold text-[#0D0E11]/70">Phone Number</label>
              <div class="relative flex items-center">
                <Phone class="absolute left-4 h-4 w-4 text-[#0D0E11]/40" />
                <input type="tel" placeholder="Phone number (optional)" class="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-11 pr-4 text-sm font-medium text-[#0D0E11] outline-none transition-all placeholder:text-[#0D0E11]/40 focus:border-[#0D0E11]/20 focus:bg-white focus:ring-4 focus:ring-[#D4FF33]/20" />
              </div>
            </div>
            
            <div class="flex flex-col gap-2">
              <label class="text-xs font-semibold text-[#0D0E11]/70">Company Name</label>
              <div class="relative flex items-center">
                <Building class="absolute left-4 h-4 w-4 text-[#0D0E11]/40" />
                <input type="text" placeholder="Company name" class="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-11 pr-4 text-sm font-medium text-[#0D0E11] outline-none transition-all placeholder:text-[#0D0E11]/40 focus:border-[#0D0E11]/20 focus:bg-white focus:ring-4 focus:ring-[#D4FF33]/20" />
              </div>
            </div>
          </div>

          <!-- Help Subject -->
          <div class="flex flex-col gap-2">
            <label class="text-xs font-semibold text-[#0D0E11]/70">Help</label>
            <div class="relative flex items-center">
              <HelpCircle class="absolute left-4 h-4 w-4 text-[#0D0E11]/40" />
              <!-- Changed to select for better UX based on services -->
              <select class="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-11 pr-4 text-sm font-medium text-[#0D0E11] outline-none transition-all focus:border-[#0D0E11]/20 focus:bg-white focus:ring-4 focus:ring-[#D4FF33]/20">
                <option value="" disabled selected class="text-[#0D0E11]/40">What do you need help with?</option>
                <option value="uiux">UI/UX Design</option>
                <option value="frontend">Frontend Development</option>
                <option value="ecommerce">E-Commerce Solution</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <!-- Message Field -->
          <div class="flex flex-col gap-2">
            <label class="text-xs font-semibold text-[#0D0E11]/70">Message</label>
            <textarea rows="3" placeholder="Write your message here..." class="w-full resize-none rounded-xl border border-gray-200 bg-gray-50/50 p-4 text-sm font-medium text-[#0D0E11] outline-none transition-all placeholder:text-[#0D0E11]/40 focus:border-[#0D0E11]/20 focus:bg-white focus:ring-4 focus:ring-[#D4FF33]/20"></textarea>
          </div>

          <!-- Submit Button -->
          <button type="submit" class="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#D4FF33] py-4 text-sm font-bold text-[#0D0E11] shadow-lg shadow-[#D4FF33]/20 transition-all hover:-translate-y-0.5 hover:bg-[#c3f022] hover:shadow-xl hover:shadow-[#D4FF33]/30 active:translate-y-0">
            Submit your request
            <ArrowUpRight class="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          
          <p class="mt-2 text-center text-[10px] font-medium text-[#0D0E11]/40">
            🔒 Your information is confidential and never shared with third parties.
          </p>
        </form>
      </motion.div>
    </div>
  </section>
</template>