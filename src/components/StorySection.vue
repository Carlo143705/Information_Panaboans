

<script setup>
defineProps({
  activeStoryTab: String,
  stories: Object
})
defineEmits(['set-tab'])

const tabs = [
  { key: 'banana',  icon: '🍌', label: 'Banana Capital Legacy' },
  { key: 'history', icon: '📜', label: 'Origin & Cityhood' },
  { key: 'culture', icon: '🎉', label: 'Binulig Festival' },
  { key: 'vision',  icon: '🌱', label: 'Eco-Agri Future' }
]
</script>

<template>
  <section id="about" class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="text-center max-w-2xl mx-auto mb-14">
        <span class="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3.5 py-1.5 rounded-full mb-3">Identity &amp; Heritage</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight mb-4">The Heart and Soul of Panabo</h2>
        <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Explore the captivating journey of Panabo City: from ancient coastal fishing villages to a globally celebrated agricultural exporter.
        </p>
      </div>

      <!-- Tab Buttons -->
      <div class="flex flex-wrap items-center justify-center gap-3 mb-10" role="tablist">
        <button
          v-for="tab in tabs" :key="tab.key"
          @click="$emit('set-tab', tab.key)"
          :class="activeStoryTab === tab.key ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-emerald-500'"
          class="px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all">
          <span>{{ tab.icon }}</span> {{ tab.label }}
        </button>
      </div>

      <!-- Active Tab Content -->
      <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2 group">
        <div class="relative h-72 sm:h-96 lg:h-full overflow-hidden">
          <img :src="stories[activeStoryTab].image" :alt="stories[activeStoryTab].title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent lg:hidden"></div>
        </div>
        <div class="p-8 sm:p-12 flex flex-col justify-center">
          <span class="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2">{{ stories[activeStoryTab].kicker }}</span>
          <h3 class="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
            {{ stories[activeStoryTab].title }}
          </h3>
          <p class="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
            {{ stories[activeStoryTab].desc }}
          </p>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <li v-for="(item, idx) in stories[activeStoryTab].highlights" :key="idx" class="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
              <svg class="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>


