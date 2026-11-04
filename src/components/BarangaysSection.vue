<script setup>
defineProps({
  barangaySearch: String,
  barangayCategory: String,
  barangays: Array,
  filteredBarangays: Array
})
defineEmits(['update:barangaySearch', 'update:barangayCategory', 'open-modal'])
</script>

<template>
  <section id="barangays" class="py-20 bg-slate-100/70 dark:bg-slate-900/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="text-center max-w-2xl mx-auto mb-14">
        <span class="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3.5 py-1.5 rounded-full mb-3">Local Government Units</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight mb-4">Explore the 40 Barangays of Panabo</h2>
        <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Panabo is composed of 40 thriving barangays spanning bustling urban centers, fertile agricultural communities, and coastal marine villages.
        </p>
      </div>

      <!-- Search & Filter -->
      <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-md mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div class="relative w-full md:w-1/2">
          <svg class="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input
            type="text"
            :value="barangaySearch"
            @input="$emit('update:barangaySearch', $event.target.value)"
            placeholder="Search barangay by name, zone, or keyword..."
            class="w-full pl-11 pr-4 py-2.5 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
        </div>
        <div class="flex items-center gap-3 w-full md:w-auto">
          <select
            :value="barangayCategory"
            @change="$emit('update:barangayCategory', $event.target.value)"
            class="px-4 py-2.5 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer">
            <option value="all">All Classifications</option>
            <option value="urban">Urban &amp; Poblacion</option>
            <option value="agricultural">Agricultural Belt</option>
            <option value="coastal">Coastal &amp; Marine</option>
          </select>
          <span class="text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-full whitespace-nowrap">
            {{ filteredBarangays.length }} of {{ barangays.length }}
          </span>
        </div>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div
          v-for="b in filteredBarangays"
          :key="b.id"
          class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all flex flex-col justify-between">

          <div>
            <div class="flex items-start justify-between gap-2 mb-3">
              <h3 class="text-base font-bold font-heading text-slate-900 dark:text-white">Brgy. {{ b.name }}</h3>
              <span
                :class="{
                  'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300': b.type === 'agricultural',
                  'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300': b.type === 'urban',
                  'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300': b.type === 'coastal'
                }"
                class="text-[0.65rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full flex-shrink-0">
                {{ b.type }}
              </span>
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 mb-4 leading-relaxed">{{ b.notes }}</p>
          </div>

          <button @click="$emit('open-modal', b)" class="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 self-start">
            <span>View Profile</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      </div>

    </div>
  </section>
</template>


