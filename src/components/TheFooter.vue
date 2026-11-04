<template>
  <footer class="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

        <div class="lg:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-600 to-amber-500 flex items-center justify-center text-xl">🍌</div>
            <span class="text-xl font-bold font-heading text-white">Panabo City</span>
          </div>
          <p class="text-sm text-slate-400 leading-relaxed mb-4 max-w-sm">
            Panabo is a premier component city of Davao del Norte, Philippines. Known worldwide as the Banana Capital of the Philippines, fostering sustainable agriculture, peaceful communities, and inclusive economic opportunities.
          </p>
          <p class="text-xs text-slate-500">📍 City Hall Compound, Brgy. Gredu, Panabo City, Davao del Norte, Philippines, 8105</p>
        </div>

        <div>
          <h4 class="text-sm font-bold font-heading text-white uppercase tracking-wider mb-4">Quick Links</h4>
          <ul class="space-y-2.5 text-sm">
            <li><a href="#about" @click.prevent="$emit('navigate', 'home', 'about')" class="hover:text-emerald-400 transition-colors">About &amp; History</a></li>
            <li><a href="#attractions" @click.prevent="$emit('navigate', 'home', 'attractions')" class="hover:text-emerald-400 transition-colors">Tourism Spots</a></li>
            <li><a href="#tourist-spots" @click.prevent="$emit('navigate', 'tourist-spots', null)" class="hover:text-emerald-400 transition-colors">Explore Tourist Spots ✨</a></li>
            <li><a href="#economy" @click.prevent="$emit('navigate', 'home', 'economy')" class="hover:text-emerald-400 transition-colors">Banana Industry</a></li>
            <li><a href="#government" @click.prevent="$emit('navigate', 'government', null)" class="hover:text-emerald-400 transition-colors">Government Portal</a></li>
            <li><a href="#executive" @click.prevent="$emit('navigate', 'executive', null)" class="hover:text-emerald-400 transition-colors">Executive Leadership</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-bold font-heading text-white uppercase tracking-wider mb-4">Festivals &amp; Culture</h4>
          <ul class="space-y-2.5 text-sm">
            <li><a href="#about" @click.prevent="$emit('navigate', 'home', 'about')" class="hover:text-emerald-400 transition-colors">Binulig Festival (Oct)</a></li>
            <li><a href="#about" @click.prevent="$emit('navigate', 'home', 'about')" class="hover:text-emerald-400 transition-colors">Araw ng Panabo (March 31)</a></li>
            <li><a href="#about" @click.prevent="$emit('navigate', 'home', 'about')" class="hover:text-emerald-400 transition-colors">Tadeco Banana Weaving</a></li>
            <li><a href="#attractions" @click.prevent="$emit('navigate', 'home', 'attractions')" class="hover:text-emerald-400 transition-colors">Mangrove Sanctuary</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-bold font-heading text-white uppercase tracking-wider mb-4">Government Portal</h4>
          <p class="text-xs text-slate-400 mb-4 leading-relaxed">Access official directories, 40 component barangays, and 24/7 disaster response hotlines.</p>
          <button @click="$emit('navigate', 'government', null)" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2.5 px-4 rounded-full transition-colors flex items-center justify-center gap-2">
            <span>🏛️</span>
            <span>View Government Portal</span>
          </button>
        </div>

      </div>

      <div class="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© 2026 Panabo City Government • Banana Capital of the Philippines. All rights reserved.</p>
        <p>Powered by Vue 3 &amp; Tailwind CSS v4 • Vite SFC</p>
      </div>

    </div>
  </footer>
</template>

<script setup>
defineEmits(['navigate'])
</script>
