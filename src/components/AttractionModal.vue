<template>
  <div class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4" @click.self="$emit('close')">
    <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8">

      <div class="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-6">
        <h3 class="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">{{ attraction.title }}</h3>
        <button @click="$emit('close')" class="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-red-100 dark:hover:bg-red-950 text-slate-600 dark:text-slate-300 hover:text-red-600 flex items-center justify-center text-base" aria-label="Close modal">✕</button>
      </div>

      <div class="rounded-2xl overflow-hidden mb-6 h-60">
        <img :src="attraction.image" :alt="attraction.title" class="w-full h-full object-cover">
      </div>

      <div class="flex flex-wrap gap-2 mb-4">
        <span class="bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">{{ attraction.badge }}</span>
        <span class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold px-3 py-1 rounded-full">📍 {{ attraction.location }}</span>
      </div>

      <p class="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">{{ attraction.desc }}</p>

      <div class="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl text-xs sm:text-sm space-y-2 mb-6">
        <div><strong class="text-slate-900 dark:text-white">Visitor Access:</strong> {{ attraction.admission }}</div>
        <div><strong class="text-slate-900 dark:text-white">Recommended Visiting Hours:</strong> {{ attraction.bestTime }}</div>
      </div>

      <h4 class="text-sm font-bold font-heading text-slate-900 dark:text-white mb-2">Key Highlights:</h4>
      <ul class="list-disc list-inside text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-1">
        <li v-for="(feat, i) in attraction.features" :key="i">{{ feat }}</li>
      </ul>

    </div>
  </div>
</template>

<script setup>
defineProps({ attraction: Object })
defineEmits(['close'])
</script>
