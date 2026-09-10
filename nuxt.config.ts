// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Own a piece of Dangote Refinery — Sycamore',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        {
          name: 'description',
          content:
            'Apply for shares in the Dangote Petroleum Refinery IPO directly from the Sycamore app. Offer price ₦525 per share, minimum ₦5,250. Simple, secure, and built for Nigerians.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo-1024.png' },
        { rel: 'apple-touch-icon', href: '/logo-1024.png' },
        { rel: 'preconnect', href: 'https://api.fontshare.com' },
        {
          rel: 'stylesheet',
          href: 'https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap',
        },
      ],
      script: [
        { src: 'https://www.googletagmanager.com/gtag/js?id=AW-17637675490', async: true },
        {
          innerHTML:
            "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'AW-17637675490');",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.VITE_SUPABASE_URL,
      supabaseAnonKey: process.env.VITE_SUPABASE_ANON_KEY,
    },
  },
})
