<script setup lang="ts">
defineProps<{ light?: boolean }>()
const { days, hours, mins } = useCountdown()
</script>

<template>
  <div class="flex gap-2.5 flex-wrap">
    <div
      v-for="item in [
        { num: days, lbl: 'Days' },
        { num: hours, lbl: 'Hours' },
        { num: mins, lbl: 'Mins' },
      ]"
      :key="item.lbl"
      class="rounded-2xl px-4 py-2.5 text-center min-w-[64px]"
      :class="light ? 'bg-white/55' : 'bg-mint'"
    >
      <div class="text-xl font-bold text-navy leading-none">{{ item.num }}</div>
      <div class="text-[10px] uppercase tracking-wider text-ink-soft mt-1">{{ item.lbl }}</div>
    </div>
  </div>
</template>
