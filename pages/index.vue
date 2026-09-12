<script setup lang="ts">
const PRICE = 525
const MIN_SHARES = 10
const SHARE_STEP = 10

const mobileOpen = ref(false)
function closeMobile() {
  mobileOpen.value = false
}

function formatNaira(n: number) {
  return '₦' + Math.round(n).toLocaleString('en-NG')
}
function parseInt10(val: string) {
  const digits = val.replace(/[^0-9]/g, '')
  return digits ? parseInt(digits, 10) : 0
}

const sharesText = ref('100')
const shares = computed(() => parseInt10(sharesText.value))
const totalCost = computed(() => shares.value * PRICE)
const warn = computed(() => {
  if (shares.value === 0) return ''
  if (shares.value < MIN_SHARES) return 'The minimum application is 10 shares.'
  if (shares.value % SHARE_STEP !== 0) return 'Shares must be bought in multiples of 10.'
  return ''
})

function setShares(v: number) {
  sharesText.value = String(v)
}
function onSharesInput(e: Event) {
  const el = e.target as HTMLInputElement
  const n = parseInt10(el.value)
  sharesText.value = n ? String(n) : ''
}
function stepShares(delta: number) {
  const next = Math.max(MIN_SHARES, shares.value + delta)
  sharesText.value = String(next)
}

const quickShares = [10, 50, 200, 1000]

const faqs = [
  {
    q: 'What is the Dangote Refinery IPO?',
    a: 'It is a public offer to buy shares in Dangote Petroleum Refinery. Buying shares makes you a part-owner of the business, with the potential to earn dividends and benefit if the value grows.',
    open: true,
  },
  {
    q: 'How much do I need to apply?',
    a: 'The minimum application is ₦5,250, which buys 10 shares at ₦525 each. You can apply for more in multiples of the share price, up to as much as you like.',
  },
  {
    q: 'When does the offer open and close?',
    a: 'The offer period runs from 14 September 2026 to 13 October 2026. Applications must be submitted before the offer closes.',
  },
  {
    q: 'Where will the shares be listed?',
    a: 'The shares are set to list on the Nigerian Exchange (NGX), where their value can be tracked and traded once trading begins.',
  },
  {
    q: 'Is my money safe?',
    a: 'Sycamore is SEC-licensed and FCCPC-approved, and your application is protected with bank-grade encryption. As with any investment, share prices can rise or fall.',
  },
  {
    q: 'Who can apply?',
    a: 'Any Nigerian aged 18 or older with valid identification (BVN or NIN), a Nigerian bank account, and the Sycamore app can apply.',
  },
  {
    q: 'How do I pay for my shares?',
    a: 'Payment is made directly from your Sycamore wallet or a linked bank account when you confirm your application in the app.',
  },
  {
    q: 'What happens after I apply?',
    a: 'You receive a confirmation, and once the offer closes and shares are allotted, they appear in your Sycamore account in your name.',
  },
  {
    q: 'Can I sell my shares later?',
    a: 'Yes. Once the shares are listed on the NGX, you can sell them subject to normal market conditions and trading rules.',
  },
  {
    q: 'What are the risks?',
    a: 'Investing carries risk, including the possible loss of some or all of your money. Share values can go down as well as up. Only invest what you can afford to.',
  },
]
</script>

<template>
  <div>
    <!-- HEADER -->
    <header>
      <div class="nav">
        <a href="#" class="logo">
          <img class="logo-img" src="/sycamore_black.png" alt="Sycamore">
        </a>
        <ul class="nav-links">
          <li><a href="#opportunity">The Opportunity</a></li>
          <li><a href="#glance">IPO at a Glance</a></li>
          <li><a href="#how">How it Works</a></li>
          <li><a href="#calculator">Calculator</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <div class="nav-actions">
          <a class="btn btn-primary" href="https://sycamoreng.onelink.me/Qthc/9lrl1bvq" target="_blank" rel="noopener">Apply for the IPO</a>
          <button class="burger" aria-label="Open menu" @click="mobileOpen = true">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- MOBILE PANEL -->
      <div class="mobile-panel" :class="{ open: mobileOpen }">
        <div class="top">
          <a href="#" class="logo">
            <img class="logo-img" src="/sycamore_black.png" alt="Sycamore">
          </a>
          <button class="close" aria-label="Close menu" @click="closeMobile">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul>
          <li><a href="#opportunity" @click="closeMobile">The Opportunity</a></li>
          <li><a href="#glance" @click="closeMobile">IPO at a Glance</a></li>
          <li><a href="#how" @click="closeMobile">How it Works</a></li>
          <li><a href="#calculator" @click="closeMobile">Calculator</a></li>
          <li><a href="#faq" @click="closeMobile">FAQ</a></li>
        </ul>
        <a class="btn btn-primary btn-block" href="https://sycamoreng.onelink.me/Qthc/9lrl1bvq" target="_blank" rel="noopener" @click="closeMobile">Apply for the IPO</a>
      </div>
    </header>

    <!-- HERO -->
    <section class="hero">
      <div class="wrap">
        <div class="hero-grid">
          <div>
            <h1>Own a piece of Dangote Refinery</h1>
            <p class="lede">
              Nigeria's biggest industrial IPO is open to the public. Apply for shares in the
              world's largest single-train refinery, directly from the Sycamore app.
            </p>
            <div class="hero-cta-row">
              <a class="btn btn-primary" href="https://sycamoreng.onelink.me/Qthc/9lrl1bvq" target="_blank" rel="noopener">Apply for the IPO</a>
              <a href="#how" class="secondary-link">See how it works</a>
            </div>
            <div class="hero-ticker">
              <div class="tick">
                <div class="num">₦525</div>
                <div class="lbl">Offer price per share</div>
              </div>
              <div class="tick">
                <div class="num">₦5,250</div>
                <div class="lbl">Minimum investment (10 shares)</div>
              </div>
              <div class="tick">
                <div class="num">Sep 14 – Oct 13</div>
                <div class="lbl">Offer period, 2026</div>
              </div>
            </div>
          </div>
          <div class="hero-art">
            <div class="hero-art-glow" />
            <img class="hero-coin" src="/hero.png" alt="Dangote Refinery share">
          </div>
        </div>
      </div>
    </section>

    <!-- TRUST BAR -->
    <div class="trust">
      <div class="wrap">
        <div class="trust-box">
          <div class="trust-lead">We operate under these licenses</div>
          <div class="trust-items">
            <div class="trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sage-deep)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              Licensed by the Securities and Exchange Commission (SEC)
            </div>
            <div class="trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sage-deep)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              FCCPC-approved operations
            </div>
            <div class="trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sage-deep)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              Encrypted transactions &amp; data
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- OPPORTUNITY -->
    <section id="opportunity" class="section opportunity">
      <div class="wrap">
        <div class="opp-layout">
          <div class="opp-copy">
            <span class="eyebrow">The Opportunity</span>
            <h2>Why this refinery matters</h2>
            <p>
              Dangote Petroleum Refinery is the world's largest single-train refinery, built to end
              Nigeria's dependence on imported fuel and turn the country into a net exporter of
              refined products and petrochemicals.
            </p>
            <p>
              The public offer gives everyday investors a direct stake in an asset of national scale
              &mdash; one that has already reshaped Nigeria's energy import bill and its industrial
              ambitions.
            </p>
            <p class="fig-note">Figures below are drawn from the official offer prospectus and public regulatory filings as of September 2026. Always confirm final terms in the prospectus before applying.</p>
          </div>
          <div class="opp-stats">
            <div class="opp-stat">
              <div class="num">650,000</div>
              <div class="lbl">Barrels-per-day refining capacity &mdash; the world's largest single-train refinery</div>
            </div>
            <div class="opp-stat">
              <div class="num">4.1bn</div>
              <div class="lbl">Ordinary shares on offer to investors</div>
            </div>
            <div class="opp-stat">
              <div class="num">₦525</div>
              <div class="lbl">Fixed offer price per share</div>
            </div>
            <div class="opp-stat">
              <div class="num">NGX</div>
              <div class="lbl">Listing venue: the Nigerian Exchange, on completion of the offer</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHAT YOU'RE BUYING -->
    <section class="buying">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow">What You're Buying</span>
          <h2>A simple explanation, before you apply</h2>
          <p class="sub">An IPO can sound abstract. Here's what a share in Dangote Refinery represents, in plain terms.</p>
        </div>
        <div class="buying-layout">
          <div class="buying-card">
            <svg class="mark" viewBox="0 0 24 24" fill="none" stroke="var(--sage-deep)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            <h3>Ownership</h3>
            <p>A share makes you a small part-owner of the refinery, alongside its founding shareholders.</p>
          </div>
          <div class="buying-card">
            <svg class="mark" viewBox="0 0 24 24" fill="none" stroke="var(--sage-deep)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
            <h3>Dividends</h3>
            <p>You may receive a share of profits if the board declares them &mdash; policy set out in the prospectus.</p>
          </div>
          <div class="buying-card featured">
            <svg class="mark" viewBox="0 0 24 24" fill="none" stroke="var(--gold-light)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8M21 7v6" /></svg>
            <h3>Growth potential</h3>
            <p>Share value can rise or fall with performance &mdash; there's no guaranteed return.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- IPO AT A GLANCE -->
    <section id="glance" class="section glance">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow">IPO at a Glance</span>
          <h2>Every key figure, in one place</h2>
          <p class="sub">Cross-check these against the official prospectus before you apply.</p>
        </div>
        <div class="glance-grid">
          <div class="glance-cell">
            <div class="k">Offer price</div>
            <div class="v">₦525 / share</div>
          </div>
          <div class="glance-cell">
            <div class="k">Minimum application</div>
            <div class="v">10 shares (₦5,250)</div>
          </div>
          <div class="glance-cell">
            <div class="k">Total shares offered</div>
            <div class="v">4.1 billion</div>
          </div>
          <div class="glance-cell">
            <div class="k">Offer opens</div>
            <div class="v">14 Sep 2026</div>
          </div>
          <div class="glance-cell">
            <div class="k">Offer closes</div>
            <div class="v">13 Oct 2026</div>
          </div>
          <div class="glance-cell">
            <div class="k">Listing venue</div>
            <div class="v">Nigerian Exchange (NGX)</div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY SYCAMORE -->
    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow">Why Sycamore</span>
          <h2>One app for the whole journey</h2>
          <p class="sub">From funding your wallet to tracking your shares after listing.</p>
        </div>

        <div class="why-ticker">
          <div class="why-ticker-track">
            <template v-for="n in 2" :key="n">
              <div class="why-ticker-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--sage-deep)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                SEC-regulated asset management
              </div>
              <div class="why-ticker-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--sage-deep)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                FCCPC-approved operations
              </div>
              <div class="why-ticker-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--sage-deep)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                Encrypted transactions &amp; data
              </div>
            </template>
          </div>
        </div>

        <div class="why-bands">
          <div class="why-band navy">
            <div class="why-band-text">
              <h3>Simple</h3>
              <p>Apply for the IPO from the same app you already use to save, invest and move money &mdash; no extra paperwork to chase.</p>
            </div>
          </div>
          <div class="why-band sage">
            <div class="why-band-text">
              <h3>Secure</h3>
              <p>SIML is licensed by the SEC for fund and portfolio management, with encrypted handling of your data and funds.</p>
            </div>
          </div>
          <div class="why-band teal">
            <div class="why-band-text">
              <h3>Transparent</h3>
              <p>Clear pricing and a visible application status, with no hidden steps between funding and subscribing.</p>
            </div>
          </div>
          <div class="why-band mint">
            <div class="why-band-text">
              <h3>Convenient</h3>
              <p>Your wallet holds Naira, USD, GBP and EUR side by side, so you can fund your subscription directly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section id="how" class="section how">
      <div class="wrap">
        <div class="how-badge-wrap">
          <span class="how-pill">How it Works</span>
          <h2 class="how-heading">Invest in 3 simple steps</h2>
          <p class="how-sub">From verification to payment, the whole process happens inside the Sycamore app.</p>
        </div>
        <div class="how-cards">
          <div class="how-card">
            <div class="how-card-mock">
              <div class="how-mock-frame"><img src="/how_it_works_1.png" alt="Open the Sycamore app"></div>
              <div class="how-mock-float"><span class="dot" />Identity verified</div>
            </div>
            <div class="how-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></svg>
            </div>
            <h3>Verify your identity</h3>
            <p>Confirm your BVN and identity details to get started.</p>
          </div>
          <div class="how-card">
            <div class="how-card-mock">
              <div class="how-mock-frame"><img src="/how_it_works_2.png" alt="Choose your amount"></div>
              <div class="how-mock-float"><span class="dot" />Profile complete</div>
            </div>
            <div class="how-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
            </div>
            <h3>Complete your profile</h3>
            <p>Add your residential address, NIN and next of kin information.</p>
          </div>
          <div class="how-card">
            <div class="how-card-mock">
              <div class="how-mock-frame"><img src="/how_it_works_3.png" alt="Confirm your application"></div>
              <div class="how-mock-float"><span class="dot" />Payment confirmed</div>
            </div>
            <div class="how-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </div>
            <h3>Invest &amp; make payment</h3>
            <p>Enter your number of shares, choose a payment method, and confirm your allocation.</p>
          </div>
        </div>
        <div style="text-align:center;margin-top:44px;">
          <a class="btn btn-primary" href="https://sycamoreng.onelink.me/Qthc/9lrl1bvq" target="_blank" rel="noopener">Apply for the IPO</a>
        </div>
      </div>
    </section>

    <!-- CALCULATOR -->
    <section id="calculator" class="section calc on-navy">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow">Investment Calculator</span>
          <h2>See what your investment gets you</h2>
          <p class="sub">Enter the number of shares you'd like to buy to see your total at the ₦525 offer price.</p>
        </div>
        <div class="calc-panel">
          <div class="calc-input-side">
            <label for="shareCount">Number of shares</label>
            <div class="calc-input-wrap">
              <button type="button" class="step" aria-label="Decrease shares" @click="stepShares(-SHARE_STEP)">&minus;</button>
              <input
                id="shareCount"
                type="text"
                inputmode="numeric"
                :value="sharesText"
                @input="onSharesInput"
              >
              <button type="button" class="step" aria-label="Increase shares" @click="stepShares(SHARE_STEP)">+</button>
            </div>
            <div class="calc-quick">
              <button v-for="q in quickShares" :key="q" @click="setShares(q)">{{ q.toLocaleString('en-NG') }} shares</button>
            </div>
            <div class="calc-warn">{{ warn }}</div>
          </div>
          <div class="calc-output-side">
            <div class="calc-row">
              <div class="k">Shares purchased</div>
              <div class="v">{{ shares.toLocaleString('en-NG') }}</div>
            </div>
            <div class="calc-row">
              <div class="k">Price per share</div>
              <div class="v">₦525.00</div>
            </div>
            <div class="calc-row total">
              <div class="k">Total cost</div>
              <div class="v">{{ formatNaira(totalCost) }}</div>
            </div>
            <p class="fine" style="margin-top:18px;">Illustrative only. Final allocation may be scaled back in the event of oversubscription &mdash; see the official prospectus.</p>
            <a class="btn btn-gold btn-block" style="margin-top:24px;" href="https://sycamoreng.onelink.me/Qthc/9lrl1bvq" target="_blank" rel="noopener">Apply for these shares</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ELIGIBILITY -->
    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow">Eligibility</span>
          <h2>Before you apply</h2>
          <p class="sub">A quick checklist to have ready. Most of this can be completed in the Sycamore app in one sitting.</p>
        </div>
        <div class="elig-grid">
          <div class="elig-item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--sage-deep)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            <div>
              <p>Personal information</p>
              <p class="fine">Gender, marital status, nationality, maiden name and residential address.</p>
            </div>
          </div>
          <div class="elig-item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--sage-deep)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            <div>
              <p>National Identification Number (NIN)</p>
              <p class="fine">Used to verify your identity during onboarding.</p>
            </div>
          </div>
          <div class="elig-item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--sage-deep)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            <div>
              <p>Next of Kin details</p>
              <p class="fine">Required as part of your trading account setup.</p>
            </div>
          </div>
          <div class="elig-item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--sage-deep)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            <div>
              <p>Dividend bank account</p>
              <p class="fine">The account you'll receive your stock dividends into.</p>
            </div>
          </div>
          <div class="elig-item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--sage-deep)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            <div>
              <p>Clearing House Number (CHN)</p>
              <p class="fine">Sycamore can help set this up if you don't already have one.</p>
            </div>
          </div>
        </div>
        <div style="text-align:center;margin-top:44px;">
          <a class="btn btn-primary" href="https://sycamoreng.onelink.me/Qthc/9lrl1bvq" target="_blank" rel="noopener">Apply for the IPO</a>
        </div>
      </div>
    </section>

    <!-- RISK -->
    <div class="risk">
      <div class="wrap">
        <div class="risk-box">
          <div class="risk-inner">
            <h2>A word on risk</h2>
            <div class="risk-body">
              <p>
                The value of shares can go down as well as up, and you may get back less than you
                invest &mdash; including the possible loss of your entire investment. Past performance
                is not a guide to future results.
              </p>
              <p>
                This page is for information only and is not investment advice. Please read the
                official offer documents in full before applying.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SOCIAL PROOF -->
    <section class="section-tight">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow">Social Proof</span>
          <h2>As featured in</h2>
        </div>
        <div class="press-card">
          <img class="press-logo" :src="'/condia.png'" alt="Condia">
          <p class="press-quote">
            &ldquo;Condia listed Sycamore as one of the fintech platforms where Nigerians can buy
            Dangote Refinery IPO shares.&rdquo;
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="section faq">
      <div class="wrap" style="max-width:820px;">
        <div class="section-head">
          <span class="eyebrow">FAQ</span>
          <h2>Frequently asked questions</h2>
          <p class="sub">Still unsure about something? Read the official prospectus, or reach Sycamore support in-app.</p>
        </div>
        <div class="faq-list">
          <details v-for="(f, i) in faqs" :key="i" class="faq-item" :open="f.open">
            <summary>
              {{ f.q }}
              <span class="plus">+</span>
            </summary>
            <div class="faq-a">{{ f.a }}</div>
          </details>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="final-cta">
      <div class="wrap">
        <span class="eyebrow">The offer closes 13 October 2026</span>
        <h2>Ready to own a piece of Dangote Refinery?</h2>
        <p>Get verified today, so you're ready the moment the offer opens.</p>
        <a class="btn btn-gold" href="https://sycamoreng.onelink.me/Qthc/9lrl1bvq" target="_blank" rel="noopener">Apply for the IPO</a>
      </div>
    </section>

    <!-- FOOTER -->
    <footer>
      <div class="wrap">
        <div class="foot-grid">
          <div class="foot-brand">
            <a href="#" class="logo">
              <img class="logo-img" src="/sycamore_white.png" alt="Sycamore">
            </a>
            <p>Save, invest, borrow and grow your wealth with Sycamore &mdash; a regulated financial platform built for Africa.</p>
          </div>
          <div>
            <h4>Products</h4>
            <ul>
              <li><a href="#">Loans</a></li>
              <li><a href="#">Investments</a></li>
              <li><a href="#">Asset Management</a></li>
              <li><a href="#">Target Savings</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Centre</a></li>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Data Rights</a></li>
            </ul>
          </div>
        </div>

        <p class="foot-legal">
          Investing involves risk, including possible loss of principal. The value of shares can go
          down as well as up. This page is informational and does not constitute investment advice or
          an offer to sell securities. Please read the official offer documents before applying.
          Sycamore Investment and Asset Management Limited is licensed by the Securities and Exchange
          Commission. Sycamore Integrated Solutions Limited is approved by the FCCPC.
        </p>
        <div class="foot-bottom">
          <span>&copy; 2026 Sycamore Capital Group. All rights reserved.</span>
          <span>53b, Oduduwa Way, Ikeja GRA &middot; hello@sycamore.ng</span>
        </div>
      </div>
    </footer>
  </div>
</template>
