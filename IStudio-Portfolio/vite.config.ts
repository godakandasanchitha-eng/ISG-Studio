import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/https://github.com/godakandasanchitha-eng/ISG-Studio.git/', // Replace 'istudio' with your exact repository name
  plugins: [vue()],
  // ...keep any existing resolve/alias config you already have
})
