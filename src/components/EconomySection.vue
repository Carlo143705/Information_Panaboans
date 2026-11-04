<template>
  <section id="economy" class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="text-center max-w-2xl mx-auto mb-14">
        <span class="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3.5 py-1.5 rounded-full mb-3">Economic Engine</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight mb-4">The World's Favorite Banana Source</h2>
        <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Panabo's strategic positioning along the Davao Gulf and rich volcanic soil drives billions in foreign trade, empowering thousands of agrarian families.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="card in cards" :key="card.title"
          class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-emerald-500 transition-all relative overflow-hidden group">
          <div :class="card.iconBg" class="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
            {{ card.icon }}
          </div>
          <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white mb-3">{{ card.title }}</h3>
          <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{{ card.desc }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    icon: '🚢',
    iconBg: 'bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400',
    title: 'Cavendish Export Capital',
    desc: "Panabo accounts for a lion's share of Mindanao's fresh banana exports. Advanced cold-chain facilities deliver sweet, fresh fruit directly to international supermarkets across East Asia and Europe."
  },
  {
    icon: '🧵',
    iconBg: 'bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400',
    title: 'Banana Abaca Craft & Fiber',
    desc: "Through the Tadeco Livelihood Center, discarded banana pseudo-stems are upcycled by master indigenous weavers into exquisite T'nalak tapestries, high-fashion fabrics, and eco-friendly home decors."
  },
  {
    icon: '🐟',
    iconBg: 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400',
    title: 'Mariculture & Gulf Fisheries',
    desc: "Beyond agro-farming, Panabo's coastal waters host an expansive Mariculture Park supporting high-density milkfish production, protecting aquatic biodiversity, and generating coastal livelihoods."
  }
]
</script>
