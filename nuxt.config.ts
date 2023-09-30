// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias:{
    assets:"/<rootDir>/assets",
  },
  ssr: false,
  css: [
    '@/assets/css/main.css',
  ],
  imports: {
    dirs: ['stores'],
  },
  modules: [
    '@vueuse/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],
plugins: [
  //toast
  { src: '~/plugins/toast.js', mode: 'client' },
  { src: '~/plugins/scrollbar.js', mode: 'client' },

],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
})