<template>
  <section id="attractions" class="py-20 bg-slate-100/70 dark:bg-slate-900/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="text-center max-w-2xl mx-auto mb-14">
        <span class="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3.5 py-1.5 rounded-full mb-3">Agri-Tourism &amp; Nature</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight mb-4">Places to Experience in Panabo</h2>
        <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          From picturesque mangrove wooden boardwalks to boundless Cavendish plantations and celebratory street festivals.
        </p>
      </div>

      <!-- Category Filter -->
      <div class="flex flex-wrap items-center justify-center gap-2 mb-10" role="group">
        <button v-for="f in filters" :key="f.value"
          @click="$emit('set-filter', f.value)"
          :class="attractionFilter === f.value ? 'bg-emerald-600 text-white shadow-md' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-500'"
          class="px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all">
          {{ f.label }}{{ f.value === 'all' ? ` (${attractions.length})` : '' }}
        </button>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="item in filteredAttractions"
          :key="item.id"
          class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">

          <div class="relative h-56 overflow-hidden">
            <img :src="item.image" :alt="item.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <span class="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
              {{ item.badge }}
            </span>
          </div>

          <div class="p-6 flex flex-col flex-grow justify-between">
            <div>
              <div class="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>{{ item.location }}</span>
              </div>
              <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2 leading-tight">{{ item.title }}</h3>
              <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">{{ item.desc }}</p>
            </div>
            <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <button @click="$emit('open-modal', item)" class="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">
                <span>Explore Details</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
defineProps({
  attractionFilter: String,
  attractions: Array,
  filteredAttractions: Array
})
defineEmits(['set-filter', 'open-modal'])

const filters = [
  { value: 'all',    label: 'All Sights' },
  { value: 'agri',   label: 'Agri-Tourism' },
  { value: 'nature', label: 'Eco-Parks & Nature' },
  { value: 'civic',  label: 'Civic & Culture' }
]
</script>
