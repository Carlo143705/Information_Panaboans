<script setup>
defineProps({ barangay: Object })
defineEmits(['close', 'copy'])
</script>

<template>
  <div class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4" @click.self="$emit('close')">
    <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full shadow-2xl p-6 sm:p-8">

      <div class="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-6">
        <h3 class="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">Brgy. {{ barangay.name }}</h3>
        <button @click="$emit('close')" class="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-red-100 dark:hover:bg-red-950 text-slate-600 dark:text-slate-300 hover:text-red-600 flex items-center justify-center text-base" aria-label="Close modal">✕</button>
      </div>

      <div class="flex gap-2 mb-6">
        <span class="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
          Classification: {{ barangay.type }}
        </span>
        <span class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold px-3 py-1 rounded-full">
          Zone: {{ barangay.zone }}
        </span>
      </div>

      <p class="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed mb-6">{{ barangay.notes }}</p>

      <div class="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 mb-6">
        <div class="font-bold text-slate-900 dark:text-white mb-1">Local Assistance Desk</div>
        <p>Contact the Barangay Hall during public service hours (Monday to Friday, 8:00 AM - 5:00 PM) for clearances and community concerns.</p>
      </div>

      <button @click="$emit('copy', '(084) 628-8251'); $emit('close')" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm py-3 rounded-full transition-colors">
        Contact Panabo City LGU Assistance
      </button>

    </div>
  </div>
</template>


