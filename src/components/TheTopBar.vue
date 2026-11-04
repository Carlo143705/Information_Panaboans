<template>
  <div class="bg-gradient-to-r from-emerald-900 via-emerald-800 to-amber-700 text-white text-xs sm:text-sm font-medium py-2 px-4 shadow-sm relative z-50">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
      <div class="flex items-center gap-2">
        <span class="live-pulse w-2.5 h-2.5 bg-emerald-400 rounded-full inline-block"></span>
        <span>Philippine Standard Time (PST): <strong class="font-bold tracking-wide">{{ currentTime }}</strong></span>
      </div>
      <div class="flex items-center gap-3 text-emerald-100 text-xs">
        <span>📍 {{ weather.location }}</span>
        <span class="opacity-50">•</span>
        <span>☀️ {{ weather.temp }} ({{ weather.condition }})</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  currentTime: String,
  weather: Object
})
</script>
