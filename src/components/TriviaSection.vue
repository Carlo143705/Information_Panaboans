<template>
  <section id="trivia" class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-950 rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
        <span class="inline-flex items-center gap-1.5 bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-6">
          <span>💡</span> Did You Know?
        </span>

        <p class="text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading tracking-tight leading-snug mb-8 max-w-4xl">
          "{{ triviaList[currentTriviaIndex] }}"
        </p>

        <div class="flex items-center gap-4">
          <button @click="$emit('prev')" class="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 hover:text-slate-950 border border-white/20 flex items-center justify-center transition-colors" aria-label="Previous Fact">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button @click="$emit('next')" class="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 hover:text-slate-950 border border-white/20 flex items-center justify-center transition-colors" aria-label="Next Fact">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
          <span class="text-xs font-semibold text-emerald-200">Fact {{ currentTriviaIndex + 1 }} of {{ triviaList.length }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  triviaList: Array,
  currentTriviaIndex: Number
})
defineEmits(['prev', 'next'])
</script>
