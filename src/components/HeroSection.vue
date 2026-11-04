<template>
  <section id="hero" class="relative min-h-[86vh] flex items-center justify-center overflow-hidden py-24 sm:py-32">
    <div class="absolute inset-0 z-0">
      <img src="/assets/images/hero.jpg" alt="Aerial view of Panabo City" class="w-full h-full object-cover brightness-[0.7] saturate-[1.15] scale-105 transition-transform duration-[10000ms] hover:scale-110">
      <div class="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-emerald-950/70 to-slate-950/95"></div>
    </div>

    <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 shadow-md">
        <span>✨</span>
        <span>Province of Davao del Norte • Region XI</span>
      </div>

      <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight leading-[1.1] mb-6 drop-shadow-md">
        Discover <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-emerald-300">Panabo City</span>
      </h1>

      <p class="text-lg sm:text-xl lg:text-2xl text-slate-200 font-normal max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow">
        Welcome to the Banana Capital of the Philippines. An agro-industrial powerhouse blessed with fertile soils, rich cultural traditions, scenic coastal sanctuaries, and warm Panaboan hospitality.
      </p>

      <div class="flex flex-wrap items-center justify-center gap-4">
        <a href="#attractions" class="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 px-7 py-3.5 rounded-full text-base font-bold shadow-lg shadow-amber-500/30 hover:-translate-y-0.5 transition-all">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
          <span>Explore Attractions</span>
        </a>
        <button
          @click="$emit('navigate', 'government', null)"
          class="inline-flex items-center gap-2 bg-emerald-600/80 hover:bg-emerald-600 backdrop-blur-md text-white border border-emerald-400/40 px-7 py-3.5 rounded-full text-base font-bold hover:-translate-y-0.5 transition-all shadow-lg shadow-emerald-900/30">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M14 10v11M4 10h16l-8-7-8 7z"/></svg>
          <span>City Government</span>
        </button>
        <button
          @click="$emit('navigate', 'government', 'barangays')"
          class="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/30 px-6 py-3.5 rounded-full text-base font-bold hover:-translate-y-0.5 transition-all">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>40 Barangays</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
defineEmits(['navigate'])
</script>
