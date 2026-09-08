<script setup lang="ts">
const { $supabase } = useNuxtApp()
const { isOpen, close } = useSignupModal()

const form = reactive({ full_name: '', email: '', phone: '' })
const status = ref<'idle' | 'saving' | 'done' | 'error'>('idle')
const errorMsg = ref('')

function reset() {
  form.full_name = ''
  form.email = ''
  form.phone = ''
  status.value = 'idle'
  errorMsg.value = ''
}

function onClose() {
  close()
  setTimeout(reset, 200)
}

const emailValid = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
const canSubmit = computed(
  () =>
    form.full_name.trim().length > 1 &&
    emailValid.value &&
    form.phone.trim().length >= 7 &&
    status.value !== 'saving',
)

async function submit() {
  if (!canSubmit.value) return
  status.value = 'saving'
  errorMsg.value = ''

  const { error } = await $supabase.from('stock_signups').insert({
    full_name: form.full_name.trim(),
    email: form.email.trim(),
    phone: form.phone.trim(),
  })

  if (error) {
    status.value = 'error'
    errorMsg.value = 'Something went wrong saving your details. Please try again.'
    return
  }

  status.value = 'done'
}
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm"
        @click.self="onClose"
      >
        <div class="w-full max-w-md bg-white rounded-3xl shadow-2xl p-7 sm:p-9 relative">
          <button
            class="absolute top-5 right-5 w-9 h-9 rounded-full bg-mint text-navy flex items-center justify-center hover:bg-line transition-colors"
            aria-label="Close"
            @click="onClose"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          <template v-if="status !== 'done'">
            <span class="eyebrow">Get trade-ready</span>
            <h2 class="text-2xl font-bold text-navy tracking-tight mt-3 mb-1.5">
              Set up your trading account
            </h2>
            <p class="text-sm text-ink-soft mb-6">
              Takes about 5 minutes. We'll get your verification and trading account ready before launch day.
            </p>

            <form class="space-y-4" @submit.prevent="submit">
              <div>
                <label class="block text-sm font-medium text-navy mb-1.5" for="full_name">Full name</label>
                <input
                  id="full_name"
                  v-model="form.full_name"
                  type="text"
                  autocomplete="name"
                  placeholder="Adaeze Okafor"
                  class="w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink outline-none transition-colors focus:border-green focus:bg-white"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-navy mb-1.5" for="email">Email address</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  autocomplete="email"
                  placeholder="you@example.com"
                  class="w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink outline-none transition-colors focus:border-green focus:bg-white"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-navy mb-1.5" for="phone">Phone number</label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  autocomplete="tel"
                  placeholder="080 1234 5678"
                  class="w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink outline-none transition-colors focus:border-green focus:bg-white"
                />
              </div>

              <p v-if="status === 'error'" class="text-sm text-red-600">{{ errorMsg }}</p>

              <button type="submit" class="btn w-full" :class="{ 'opacity-60 cursor-not-allowed': !canSubmit }" :disabled="!canSubmit">
                {{ status === 'saving' ? 'Setting up…' : 'Complete my setup' }}
              </button>
              <p class="text-xs text-ink-soft text-center">
                Free · Verification + trading account setup
              </p>
            </form>
          </template>

          <div v-else class="text-center py-6">
            <div class="w-16 h-16 rounded-full bg-mint text-green flex items-center justify-center mx-auto mb-5">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-navy tracking-tight mb-2">You're launch-ready!</h2>
            <p class="text-sm text-ink-soft mb-7 max-w-xs mx-auto">
              We've got your details. We'll reach out to finish your verification so you can trade the moment the market opens.
            </p>
            <button class="btn btn-dark w-full" @click="onClose">Done</button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
