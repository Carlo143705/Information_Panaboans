<script setup>
defineEmits([
  'navigate-home',
  'navigate'
])
</script>

<template>
  <div class="py-10 sm:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Breadcrumbs & Quick Back -->
      <div class="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
        <nav class="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400" aria-label="Breadcrumb">
          <button
            @click="$emit('navigate-home')"
            class="hover:text-emerald-600 dark:hover:text-emerald-400 font-semibold flex items-center gap-1 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
            <span>Home</span>
          </button>
          <span>/</span>
          <span class="text-slate-800 dark:text-slate-200 font-bold">Government Portal</span>
        </nav>

        <button
          @click="$emit('navigate-home')"
          class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          <span>Back to Main Site</span>
        </button>
      </div>

      <!-- Portal Hero Banner -->
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white p-8 sm:p-12 mb-10 shadow-2xl border border-emerald-500/20">
        <div class="absolute -right-16 -top-16 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -left-16 -bottom-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10 max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider mb-5">
            <span>🏛️</span>
            <span>Local Government Unit • City of Panabo</span>
          </div>

          <h1 class="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mb-4 text-white">
            Panabo City <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">Government Portal</span>
          </h1>

          <p class="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
            Dedicated to servant leadership, transparent public administration, rapid emergency response, and holistic grassroots development across all 40 component barangays.
          </p>

          <div class="flex flex-wrap gap-3 text-xs sm:text-sm font-semibold">
            <span class="px-3.5 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">📍 City Hall Compound, Brgy. Gredu</span>
            <span class="px-3.5 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">🕒 Mon - Fri: 8:00 AM – 5:00 PM</span>
            <span class="px-3.5 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">✓ 40 Component Barangays</span>
          </div>
        </div>
      </div>

      <!-- Ongoing Process Notice Banner -->
      <div class="mb-10 p-6 sm:p-8 rounded-3xl bg-amber-500/10 border-2 border-amber-500/30 dark:bg-amber-950/30 dark:border-amber-500/30 shadow-lg backdrop-blur-sm">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div class="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center text-3xl flex-shrink-0 shadow-sm border border-amber-500/30">
            🚧
          </div>

          <div class="flex-grow">
            <div class="flex items-center gap-2.5 flex-wrap mb-2">
              <h2 class="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
                This Page is an Ongoing Process
              </h2>
              <span class="text-[0.68rem] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30">
                Work in Progress
              </span>
            </div>

            <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              This page is currently an ongoing process. We are actively coordinating with Panabo City Hall departments and the 40 component barangays to verify official directory listings, public safety hotlines, and citizen assistance channels.
            </p>

            <div class="flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-400">
              <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>Our team is standardizing online citizen portals to serve Panaboans with enhanced accessibility and transparency.</span>
            </div>
          </div>

          <div class="self-stretch sm:self-center flex sm:flex-col gap-2 flex-shrink-0">
            <button
              @click="$emit('navigate-home')"
              class="w-full px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-sm flex items-center justify-center gap-1.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Quick Executive Link Feature Card -->
      <div class="mb-12 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 border-2 border-emerald-500/30 p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div class="flex items-start gap-4">
          <div class="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-2xl flex-shrink-0 shadow-md">
            👔
          </div>
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Executive Leadership</span>
              <span class="text-[0.65rem] bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold px-2 py-0.5 rounded-full">Active Section</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white mb-2">
              Explore the Executive Branch
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              View official profiles, policy mandates, and contact channels for the City Mayor, Vice Mayor, City Administrator, and Executive Department leaders.
            </p>
          </div>
        </div>

        <button
          @click="$emit('navigate', 'executive')"
          class="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold shadow-lg shadow-emerald-600/20 transition-all flex items-center gap-2 flex-shrink-0">
          <span>Go to Executive Page</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>

      <!-- Overview Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div class="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-2xl mb-4">
            🏛️
          </div>
          <h4 class="text-lg font-bold font-heading text-slate-900 dark:text-white mb-2">City Hall Administration</h4>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Located in Brgy. Gredu, the City Hall compound houses the Executive Building, Sangguniang Panlungsod Legislative Hall, and public service frontline offices.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div class="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center text-2xl mb-4">
            🏘️
          </div>
          <h4 class="text-lg font-bold font-heading text-slate-900 dark:text-white mb-2">40 Component Barangays</h4>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Panabo exercises local governmental jurisdiction over 40 diverse urban, agricultural, and coastal barangays, coordinating grassroots welfare programs.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div class="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 flex items-center justify-center text-2xl mb-4">
            🤝
          </div>
          <h4 class="text-lg font-bold font-heading text-slate-900 dark:text-white mb-2">Servant Leadership</h4>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Committed to participatory governance, fast disaster relief response, agricultural grower support, and ethical public stewardship.
          </p>
        </div>
      </div>

    </div>
  </div>
</template>
