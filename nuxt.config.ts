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
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Own a piece of Dangote Refinery — Sycamore' },
        {
          property: 'og:description',
          content:
            'Apply for shares in the Dangote Petroleum Refinery IPO directly from the Sycamore app. Offer price ₦525 per share, minimum ₦5,250.',
        },
        { property: 'og:image', content: '/feature-image.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Own a piece of Dangote Refinery — Sycamore' },
        {
          name: 'twitter:description',
          content:
            'Apply for shares in the Dangote Petroleum Refinery IPO directly from the Sycamore app. Offer price ₦525 per share, minimum ₦5,250.',
        },
        { name: 'twitter:image', content: '/feature-image.png' },
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
        {
          innerHTML:
            "!function (w, d, t) {w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=[\"page\",\"track\",\"identify\",\"instances\",\"debug\",\"on\",\"off\",\"once\",\"ready\",\"alias\",\"group\",\"enableCookie\",\"disableCookie\",\"holdConsent\",\"revokeConsent\",\"grantConsent\"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r=\"https://analytics.tiktok.com/i18n/pixel/events.js\",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement(\"script\");n.type=\"text/javascript\",n.async=!0,n.src=r+\"?sdkid=\"+e+\"&lib=\"+t;e=document.getElementsByTagName(\"script\")[0];e.parentNode.insertBefore(n,e)};ttq.load('DAKJVIRC77U208ULGI4G');ttq.page();}(window, document, 'ttq');",
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
