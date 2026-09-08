<script setup lang="ts">
const { open } = useSignupModal()
const { days, hours } = useCountdown()

const crossSell = [
  { icon: '₦', title: 'Grow idle cash', text: "Move money that's just sitting there into Sycamore Savings and let it earn." },
  { icon: '⚡', title: 'Access funds fast', text: 'Get a loan when you need one, without the wait — Sycamore Loans.' },
  { icon: '↻', title: 'Invest on autopilot', text: 'Automate contributions into diversified portfolios with Sycamore Investments.' },
  { icon: '→', title: 'Move money instantly', text: 'Pay bills and send money in seconds, all from the same place.' },
]

const trust = [
  { stat: 'SEC-licensed', desc: 'Sycamore Investment & Asset Management' },
  { stat: 'FCCPC-approved', desc: 'Sycamore Integrated Solutions' },
  { stat: 'NDPC', desc: 'Data privacy compliant' },
  { stat: 'Over 400,000 Nigerians', desc: 'investing and growing' },
]

const chips = [
  { label: 'MTN', size: 'med', pos: 'top-[6%] left-[6%] -rotate-[7deg]' },
  { label: 'GTCO', size: 'small', pos: 'top-[10%] right-[8%] rotate-[6deg]' },
  { label: 'BUA', size: 'med', pos: 'bottom-[10%] left-[4%] rotate-[5deg]' },
  { label: 'ACCESS', size: 'small', pos: 'bottom-[6%] right-[22%] -rotate-[5deg]' },
  { label: 'ZENITH', size: 'small', pos: 'top-[48%] right-[5%] rotate-[4deg]' },
  { label: 'ARADEL', size: 'med', pos: 'bottom-[30%] right-[2%] -rotate-[4deg]' },
  { label: 'ETI', size: 'small', pos: 'top-[56%] left-[2%] rotate-[7deg]' },
]
</script>

<template>
  <div>
    <!-- ANNOUNCEMENT BAR -->
    <div class="bg-navy text-white text-center text-[13.5px] font-medium py-2.5 px-4">
      🚀 <b class="font-bold text-green-light">Sycamore Stock launches Friday, 28 August.</b>
      Get your trading account set up now.
      <span class="font-bold bg-white/10 px-2.5 py-0.5 rounded-full ml-1.5 inline-block">
        {{ days }}d {{ hours }}h left
      </span>
    </div>

    <!-- NAV -->
    <header class="sticky top-0 z-50 bg-paper/85 backdrop-blur-md border-b border-line">
      <div class="max-w-wrap mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
        <div class="flex items-center gap-2 font-bold text-[19px] tracking-tight text-navy">
          <span class="w-2 h-2 rounded-full bg-green" />Sycamore
        </div>
        <button
          class="bg-navy text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-150 hover:bg-green hover:-translate-y-px"
          @click="open"
        >
          Set up my account
        </button>
      </div>
    </header>

    <!-- HERO -->
    <section class="pt-11 sm:pt-20 pb-10">
      <div class="wrap grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        <div>
          <span class="eyebrow mb-4">Sycamore Stock · Launches Friday, 28 Aug 2026</span>
          <h1 class="text-navy font-bold tracking-tight leading-[1.06] text-[38px] sm:text-5xl lg:text-[64px] mb-5">
            Get Ready Before Dangote Stock Opens
          </h1>
          <p class="text-lg text-ink-soft max-w-[520px] mb-9 leading-relaxed">
            Complete your verification and trading account setup now, so you can trade Dangote
            Industries and Nigeria's biggest names the moment the market opens.
          </p>
          <button class="btn" @click="open">Set up my trading account</button>
          <div class="mt-8">
            <CountdownStrip />
          </div>
          <p class="text-[13px] text-ink-soft mt-3.5">
            Free · Takes about 5 minutes · Verification + trading account setup
          </p>
        </div>

        <!-- Brand chip scatter -->
        <div
          class="relative overflow-hidden rounded-[28px] min-h-[360px] lg:min-h-[460px] bg-mint"
          style="background-image:radial-gradient(circle at 18% 20%, rgba(38,193,101,0.16), transparent 55%),radial-gradient(circle at 85% 78%, rgba(0,160,255,0.14), transparent 55%)"
        >
          <div
            v-for="chip in chips"
            :key="chip.label"
            class="absolute rounded-full bg-white flex items-center justify-center text-center font-bold text-navy tracking-tight shadow-[0_14px_30px_-10px_rgba(7,48,66,0.18)]"
            :class="[
              chip.pos,
              chip.size === 'med'
                ? 'w-16 h-16 text-[10px] lg:w-[84px] lg:h-[84px] lg:text-xs'
                : 'w-[50px] h-[50px] text-[9px] lg:w-16 lg:h-16 lg:text-[10.5px]',
            ]"
          >
            {{ chip.label }}
          </div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5] min-w-[180px] lg:min-w-[220px] bg-white rounded-[20px] px-5 py-4 lg:px-7 lg:py-6 shadow-[0_28px_54px_-16px_rgba(7,48,66,0.32)]">
            <div class="text-[11px] font-bold text-green mb-2">🔒 Opens Fri, 28 Aug</div>
            <div class="text-[15px] lg:text-lg font-bold text-navy leading-tight">Dangote Industries</div>
            <div class="text-[11.5px] text-ink-soft mt-1.5">DANGIND · Price unlocks at launch</div>
          </div>
        </div>
      </div>
    </section>

    <!-- VALUE 1 -->
    <section class="border-t border-line py-20 sm:py-28">
      <div class="wrap grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div class="max-w-[460px]">
          <span class="eyebrow mb-4">Don't wait for launch day</span>
          <h2 class="text-navy font-bold tracking-tight text-3xl sm:text-4xl leading-tight mb-4">
            Setup today. Trading the second it opens.
          </h2>
          <p class="text-lg text-ink-soft mb-7 leading-relaxed">
            Everyone who waits until Friday will be setting up their account at the same time you're
            trying to place your first trade. Get verified now and skip the rush entirely.
          </p>
          <button class="btn" @click="open">Start my setup</button>
        </div>
        <div class="bg-mint rounded-[20px] aspect-[5/4] flex items-center justify-center p-8 sm:p-10">
          <div class="bg-white rounded-2xl p-5 w-full max-w-[320px] shadow-mock">
            <div class="flex justify-between items-center py-2.5 border-b border-line text-sm">
              <span>Verification</span><span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-mint text-green">Complete</span>
            </div>
            <div class="flex justify-between items-center py-2.5 border-b border-line text-sm">
              <span>Trading account</span><span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#FFF6D6] text-[#8A6A00]">In progress</span>
            </div>
            <div class="flex justify-between items-center py-2.5 text-sm">
              <span>Dangote Industries</span><span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue/10 text-blue">Ready Fri</span>
            </div>
            <div class="h-1.5 rounded-full bg-line overflow-hidden mt-3.5">
              <div class="h-full bg-green" style="width:70%" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- VALUE 2 -->
    <section class="border-t border-line py-20 sm:py-28">
      <div class="wrap grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div class="bg-mint rounded-[20px] aspect-[5/4] flex items-center justify-center p-8 sm:p-10 order-first md:order-last">
          <div class="flex items-end gap-2 h-[120px] w-full max-w-[320px]">
            <div class="flex-1 rounded-t-md bg-line" style="height:30%" />
            <div class="flex-1 rounded-t-md bg-line" style="height:42%" />
            <div class="flex-1 rounded-t-md bg-green" style="height:58%" />
            <div class="flex-1 rounded-t-md bg-green" style="height:70%" />
            <div class="flex-1 rounded-t-md bg-green" style="height:88%" />
            <div class="flex-1 rounded-t-md bg-green" style="height:100%" />
          </div>
        </div>
        <div class="max-w-[460px]">
          <span class="eyebrow mb-4">Why now</span>
          <h2 class="text-navy font-bold tracking-tight text-3xl sm:text-4xl leading-tight mb-4">
            Cash sitting still is cash losing value.
          </h2>
          <p class="text-lg text-ink-soft mb-7 leading-relaxed">
            The naira moves one way most years. The businesses behind Nigeria's biggest brands don't
            stand still — put your money where the growth is happening, not where it's shrinking.
          </p>
          <button class="btn" @click="open">Get trade-ready</button>
        </div>
      </div>
    </section>

    <!-- VALUE 3 -->
    <section class="border-t border-line py-20 sm:py-28">
      <div class="wrap grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div class="max-w-[460px]">
          <span class="eyebrow mb-4">No broker. No forms. No jargon.</span>
          <h2 class="text-navy font-bold tracking-tight text-3xl sm:text-4xl leading-tight mb-4">
            Three steps. About five minutes.
          </h2>
          <p class="text-lg text-ink-soft mb-7 leading-relaxed">
            Verify your identity, create your trading account, and you're done — no stockbroker
            calls, no branch visits. Finish it now, forget about it until Friday.
          </p>
          <button class="btn" @click="open">Complete my setup</button>
        </div>
        <div class="bg-mint rounded-[20px] aspect-[5/4] flex items-center justify-center p-8 sm:p-10">
          <div class="bg-white rounded-2xl p-5 w-full max-w-[320px] shadow-mock">
            <div class="flex justify-between items-center py-2.5 border-b border-line text-sm">
              <span>1. Verify your identity</span><span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-mint text-green">2 min</span>
            </div>
            <div class="flex justify-between items-center py-2.5 border-b border-line text-sm">
              <span>2. Create trading account</span><span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-mint text-green">3 min</span>
            </div>
            <div class="flex justify-between items-center py-2.5 text-sm">
              <span>3. You're launch-ready</span><span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue/10 text-blue">🎉</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TRUST STRIP -->
    <section class="bg-navy text-white py-20 sm:py-24">
      <div class="wrap">
        <span class="eyebrow text-green-light mb-4">Built on regulated ground</span>
        <h2 class="text-white font-bold tracking-tight text-3xl sm:text-4xl leading-tight max-w-[640px] mb-12">
          Your money, your investments — held to the same standard as everything else on Sycamore.
        </h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="item in trust" :key="item.stat" class="border-l-2 border-white/[0.18] pl-5">
            <div class="text-[15px] font-semibold text-white mb-1.5">{{ item.stat }}</div>
            <div class="text-sm text-white/60">{{ item.desc }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CROSS-SELL -->
    <section class="border-t border-line py-20 sm:py-28">
      <div class="wrap">
        <span class="eyebrow mb-4">One app, more ways to grow</span>
        <h2 class="text-navy font-bold tracking-tight text-3xl sm:text-4xl leading-tight max-w-[520px] mb-14">
          Stock is just the beginning.
        </h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="card in crossSell"
            :key="card.title"
            class="bg-white border border-line rounded-[18px] p-6 transition-all duration-150 hover:-translate-y-1 hover:shadow-card"
          >
            <div class="w-9 h-9 rounded-[10px] bg-mint text-green font-bold flex items-center justify-center mb-5">
              {{ card.icon }}
            </div>
            <h3 class="text-base font-semibold text-navy mb-2 leading-snug">{{ card.title }}</h3>
            <p class="text-[13.5px] text-ink-soft leading-relaxed">{{ card.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="pb-24 sm:pb-32">
      <div class="mx-4 sm:mx-8 rounded-[32px] px-7 py-16 sm:px-14 sm:py-24 text-center relative overflow-hidden bg-gradient-to-br from-green to-green-light">
        <span class="eyebrow text-navy/65 mb-4">Launch day is coming, ready or not</span>
        <h2 class="text-navy font-bold tracking-tight text-3xl sm:text-4xl leading-tight max-w-[640px] mx-auto mb-5">
          Set up your trading account before Friday, 28 August.
        </h2>
        <p class="text-lg text-navy/75 max-w-[520px] mx-auto mb-9 leading-relaxed">
          It only takes about 5 minutes — and once it's done, you're ready to trade the moment the
          market opens.
        </p>
        <div class="flex justify-center mb-9">
          <CountdownStrip light />
        </div>
        <button class="btn btn-dark" @click="open">Set up my trading account</button>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="pt-16 pb-10 text-[12.5px] text-ink-soft leading-[1.7]">
      <div class="wrap">
        <div class="flex flex-wrap justify-between items-start gap-6 pb-9 border-b border-line mb-7">
          <div>
            <div class="flex items-center gap-2 font-bold text-[19px] tracking-tight text-navy mb-2">
              <span class="w-2 h-2 rounded-full bg-green" />Sycamore
            </div>
            <div>Nigeria's everyday finance app.</div>
          </div>
          <button class="btn btn-dark !px-5 !py-3 !text-sm" @click="open">Set up my account</button>
        </div>
        <div class="max-w-[900px]">
          Sycamore Stock launches Friday, 28 August 2026. Trading account registration requires
          Tier 2 verification. Securities-related services are provided in partnership with an
          SEC-registered entity. Investing involves risk, including possible loss of principal.
          Sycamore Microfinance Bank is regulated by the Central Bank of Nigeria. Sycamore
          Investment and Asset Management Limited is licensed by the Securities and Exchange
          Commission. Sycamore Integrated Solutions Limited is approved by the FCCPC.
          © 2026 Sycamore. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>
