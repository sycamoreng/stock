export const LAUNCH_LABEL = 'Friday, 28 August 2026'

export function useCountdown() {
  const launch = new Date('2026-08-28T00:00:00+01:00').getTime()

  const days = ref(0)
  const hours = ref(0)
  const mins = ref(0)
  const isLive = ref(false)

  let timer: ReturnType<typeof setInterval> | null = null

  function tick() {
    const diff = Math.max(0, launch - Date.now())
    isLive.value = diff === 0
    days.value = Math.floor(diff / (1000 * 60 * 60 * 24))
    hours.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    mins.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  }

  onMounted(() => {
    tick()
    timer = setInterval(tick, 30000)
  })

  onUnmounted(() => {
    if (timer) clearInterval(timer)
  })

  return { days, hours, mins, isLive }
}
