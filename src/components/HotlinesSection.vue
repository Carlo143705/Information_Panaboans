<template>
  <section id="hotlines" class="py-20 bg-slate-100/70 dark:bg-slate-900/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="text-center max-w-2xl mx-auto mb-14">
        <span class="inline-block text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-3.5 py-1.5 rounded-full mb-3">Public Safety &amp; Assistance</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight mb-4">Emergency Hotlines</h2>
        <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Panabo City emergency services are on alert 24 hours a day, 7 days a week. Click any contact to copy immediately.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(hl, idx) in hotlines"
          :key="idx"
          class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-red-500 transition-all flex flex-col justify-between">

          <div>
            <div class="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center text-xl mb-4">🚨</div>
            <h3 class="text-base font-bold font-heading text-slate-900 dark:text-white mb-1">{{ hl.dept }}</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-4">{{ hl.role }}</p>
            <div class="font-mono text-base font-bold text-slate-900 dark:text-white mb-4">{{ hl.number }}</div>
          </div>

          <div class="flex flex-col gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            <button @click="$emit('copy', hl.number)" class="w-full text-xs font-bold py-2 px-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white text-slate-700 dark:text-slate-200 transition-colors flex items-center justify-center gap-1.5">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              <span>Copy Landline</span>
            </button>
            <button @click="$emit('copy', hl.mobile)" class="w-full text-xs font-bold py-2 px-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white text-slate-700 dark:text-slate-200 transition-colors flex items-center justify-center gap-1.5">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
              <span>Copy Mobile ({{ hl.mobile }})</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
defineProps({ hotlines: Array })
defineEmits(['copy'])
</script>
