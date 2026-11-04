<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  isDarkMode: Boolean
})

const emit = defineEmits([
  'navigate-home',
  'navigate',
  'show-toast'
])

// ── Lightbox State & Data ──────────────────────────────────────────────────────
const activeLightboxIndex = ref(null)

const galleryPhotos = [
  {
    id: 1,
    title: 'Panabo Mangrove Sanctuary — Aerial Forest & Estuary',
    spot: 'Panabo Mangrove Park & Boardwalk',
    category: 'Eco-Sanctuary',
    location: 'Brgy. San Pedro & J.P. Laurel',
    src: '/assets/images/tourist-spots/mangrove-aerial-wide.jpg',
    credit: 'Panabo City Eco-Tourism Project',
    desc: 'High-altitude aerial panorama capturing the sprawling mangrove forest canopy flanking the coastal river basin. This protected ecosystem serves as a natural shoreline barrier against storm surges and a rich nursery for native marine life.'
  },
  {
    id: 2,
    title: 'Canopy Observation Tower & Connecting Boardwalks',
    spot: 'Panabo Mangrove Park & Boardwalk',
    category: 'Eco-Sanctuary',
    location: 'Brgy. San Pedro & J.P. Laurel',
    src: '/assets/images/tourist-spots/mangrove-watchtower-aerial.jpg',
    credit: 'Panabo City Eco-Tourism Project',
    desc: 'An elevated wooden walkway weaving through dense mangrove roots leads to a multi-tiered observation tower and modern over-water gazebos, designed for birdwatching and scenic environmental photography.'
  },
  {
    id: 3,
    title: 'Stilted Overwater Cottages & Breezy Rest Pavilions',
    spot: 'Panabo Mangrove Park & Boardwalk',
    category: 'Eco-Sanctuary',
    location: 'Brgy. San Pedro & J.P. Laurel',
    src: '/assets/images/tourist-spots/mangrove-cottages-water.jpg',
    credit: 'Panabo City Eco-Tourism Project',
    desc: 'Modern angular teal-roofed cottages perched serenely on concrete stilts above tidal waters. Visitors can sit, enjoy the sea breeze, and watch schools of small fish and mudskippers in their natural habitat.'
  },
  {
    id: 4,
    title: 'Panabo Mariculture Park — Sunset Reflections',
    spot: 'Panabo Mariculture Coastal Park',
    category: 'Marine Seascape',
    location: 'Davao Gulf Coastal Waters, Panabo City',
    src: '/assets/images/tourist-spots/mariculture-park-sunset.jpg',
    credit: 'Photograph by Jasper Resari (Mariculture Park, Panabo City)',
    desc: 'A world-class fine-art photograph highlighting the tranquil mirror reflections of the sunset sky across calm low-tide waters, young mangrove trees, and tide stones along the Panabo Mariculture zone.'
  },
  {
    id: 5,
    title: 'Panabo Giant Banana Monument & Cultural Heritage Plaza',
    spot: 'Freedom Park & Cultural Center',
    category: 'Civic Monument',
    location: 'Freedom Park, Brgy. Gredu & New Pandan',
    src: '/assets/images/tourist-spots/banana-monument-landmark.jpg',
    credit: 'City Government of Panabo Cultural Landmark',
    desc: 'The iconic symbol of the Banana Capital of the Philippines: a majestic golden-green Cavendish banana bunch crowned with the Philippine eagle, surrounded by bronze sculptures celebrating farmers, fisherfolk, and community unity.'
  }
]

const openLightbox = (index) => {
  activeLightboxIndex.value = index
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  activeLightboxIndex.value = null
  document.body.style.overflow = ''
}

const nextLightboxImage = () => {
  if (activeLightboxIndex.value === null) return
  activeLightboxIndex.value = (activeLightboxIndex.value + 1) % galleryPhotos.length
}

const prevLightboxImage = () => {
  if (activeLightboxIndex.value === null) return
  activeLightboxIndex.value = (activeLightboxIndex.value - 1 + galleryPhotos.length) % galleryPhotos.length
}

const handleKeyDown = (e) => {
  if (activeLightboxIndex.value === null) return
  if (e.key === 'Escape') closeLightbox()
  else if (e.key === 'ArrowRight') nextLightboxImage()
  else if (e.key === 'ArrowLeft') prevLightboxImage()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
  document.body.style.overflow = ''
})

// ── Mangrove Multi-Angle Interactive Viewer ───────────────────────────────────
const activeMangroveAngle = ref(0)
const mangroveAngles = [
  {
    label: 'Aerial Panorama',
    icon: '🦅',
    image: '/assets/images/tourist-spots/mangrove-aerial-wide.jpg',
    badge: 'Drone Overview',
    caption: '100+ Hectares of pristine mangrove canopy meeting the coastal waters of Panabo.'
  },
  {
    label: 'Observation Tower',
    icon: '🗼',
    image: '/assets/images/tourist-spots/mangrove-watchtower-aerial.jpg',
    badge: '3-Tier Watchtower',
    caption: 'Canopy walkways leading to multi-level birdwatching decks and scenic bridges.'
  },
  {
    label: 'Overwater Gazebos',
    icon: '🏡',
    image: '/assets/images/tourist-spots/mangrove-cottages-water.jpg',
    badge: 'Cottages on Stilts',
    caption: 'Signature aqua-teal pavilions hovering over calm tidal estuaries for resting.'
  }
]

// ── Category Filter ───────────────────────────────────────────────────────────
const activeCategory = ref('all')
const categories = [
  { id: 'all', label: 'All Tourist Spots', count: 5, icon: '🌟' },
  { id: 'eco', label: 'Mangrove & Eco-Parks', count: 2, icon: '🌿' },
  { id: 'marine', label: 'Marine & Mariculture', count: 1, icon: '🌊' },
  { id: 'heritage', label: 'Monuments & Landmarks', count: 1, icon: '🏛️' },
  { id: 'agri', label: 'Agri-Tourism & Culture', count: 1, icon: '🍌' }
]

// ── Copy Helper ───────────────────────────────────────────────────────────────
const copyText = (text, message = 'Copied to clipboard!') => {
  if (navigator && navigator.clipboard) {
    navigator.clipboard.writeText(text)
  }
  emit('show-toast', message)
}

// ── Itinerary State ───────────────────────────────────────────────────────────
const itineraryCopied = ref(false)
const copyItinerary = () => {
  const plan = `PANABO CITY 1-DAY TOURIST ITINERARY:
05:45 AM - Sunrise & Birdwatching at Panabo Mangrove Park Boardwalk
08:30 AM - Fresh Banana Breakfast & Local Coffee at City Plaza
10:00 AM - Agri-Educational Tour at Tadeco Banana Plantation & Crafts
02:00 PM - Souvenir Photos at Giant Banana Monument (Freedom Park)
05:00 PM - Sunset Golden Hour Photography at Panabo Mariculture Park
07:30 PM - Night Street Food & Lighted Fountains at Panabo City Hall`
  copyText(plan, '1-Day Itinerary copied to clipboard!')
  itineraryCopied.value = true
  setTimeout(() => { itineraryCopied.value = false }, 3000)
}
</script>

<template>
  <div class="py-10 sm:py-16 selection:bg-emerald-500 selection:text-white">
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
          <span class="text-slate-500 dark:text-slate-400 font-semibold">Destinations</span>
          <span>/</span>
          <span class="text-emerald-600 dark:text-emerald-400 font-bold">Explore Tourist Spots</span>
        </nav>

        <button
          @click="$emit('navigate-home')"
          class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          <span>Back to Main Site</span>
        </button>
      </div>

      <!-- ── HERO SHOWCASE BANNER ────────────────────────────────────────────── -->
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white p-8 sm:p-12 lg:p-16 mb-12 shadow-2xl border border-emerald-500/20">
        <!-- Ambient Glowing Orbs -->
        <div class="absolute -right-24 -top-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute right-1/3 -bottom-24 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -left-20 top-1/2 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <!-- Text Content -->
          <div class="lg:col-span-7">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider mb-5">
              <span>🌴</span>
              <span>Official Tourism &amp; Scenic Spots • Panabo City</span>
            </div>

            <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight mb-5 leading-tight text-white">
              Explore Panabo’s <br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                Eco-Parks &amp; Landmarks
              </span>
            </h1>

            <p class="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Immerse yourself in elevated mangrove canopy trails over tranquil coastal waters, fine-art sunset seascapes at the Mariculture Park, and the proud monument commemorating the Banana Capital of the Philippines.
            </p>

            <!-- Quick Pill Highlights -->
            <div class="flex flex-wrap gap-3 text-xs sm:text-sm font-semibold mb-8">
              <span class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-slate-200">
                <span>🌿</span> 100+ Hectares Mangrove Reserve
              </span>
              <span class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-slate-200">
                <span>🌊</span> Davao Gulf Marine Corridor
              </span>
              <span class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300">
                <span>🍌</span> Banana Capital Monument
              </span>
            </div>

            <!-- Action buttons -->
            <div class="flex flex-wrap items-center gap-4">
              <a
                href="#mangrove-spotlight"
                class="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-lg shadow-emerald-900/30 transition-all hover:scale-105 inline-flex items-center gap-2">
                <span>Explore Featured Spots</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
              </a>

              <button
                @click="copyItinerary"
                class="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all hover:scale-105 inline-flex items-center gap-2 backdrop-blur-md">
                <span v-if="itineraryCopied">✓ Itinerary Copied!</span>
                <span v-else>📋 Copy 1-Day Itinerary</span>
              </button>
            </div>
          </div>

          <!-- Quick Preview Card Carousel / Photo Hero Widget -->
          <div class="lg:col-span-5">
            <div class="relative rounded-3xl overflow-hidden border-2 border-emerald-500/30 shadow-2xl bg-slate-900/80 backdrop-blur-xl p-3 group">
              <!-- Top Preview Image -->
              <div class="relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer" @click="openLightbox(0)">
                <img
                  src="/assets/images/tourist-spots/mangrove-aerial-wide.jpg"
                  alt="Panabo Mangrove Sanctuary Aerial View"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20"></div>

                <div class="absolute top-3 left-3 bg-emerald-600/90 backdrop-blur-md text-white text-[0.7rem] font-extrabold uppercase px-3 py-1 rounded-full shadow">
                  Must Visit Spotlight
                </div>

                <div class="absolute bottom-3 left-3 right-3 text-left">
                  <div class="text-xs text-emerald-300 font-bold uppercase tracking-wider">San Pedro &amp; J.P. Laurel</div>
                  <div class="text-base font-bold text-white leading-tight">Panabo Mangrove Park &amp; Boardwalk</div>
                  <div class="text-[0.75rem] text-slate-300 flex items-center gap-2 mt-1">
                    <span>🔍 Click to inspect in Full HD</span>
                  </div>
                </div>
              </div>

              <!-- Mini Thumbnails Bar -->
              <div class="grid grid-cols-4 gap-2 mt-2">
                <div
                  v-for="(photo, pIdx) in galleryPhotos.slice(1, 5)"
                  :key="photo.id"
                  @click="openLightbox(pIdx + 1)"
                  class="relative h-16 rounded-xl overflow-hidden border border-white/10 hover:border-emerald-400 cursor-pointer transition-all hover:scale-105 group/thumb">
                  <img :src="photo.src" :alt="photo.title" class="w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-black/30 group-hover/thumb:bg-black/0 transition-colors"></div>
                  <span class="absolute bottom-1 right-1 bg-black/60 text-white text-[0.55rem] px-1 rounded font-bold">HD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── CATEGORY FILTER TABS ────────────────────────────────────────────── -->
      <div class="flex items-center justify-between flex-wrap gap-4 mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
            Curated Destinations
          </h2>
          <p class="text-sm text-slate-600 dark:text-slate-400">
            Select a theme to explore Panabo City’s premier tourist attractions and natural reserves.
          </p>
        </div>

        <div class="flex flex-wrap gap-2">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="activeCategory = cat.id"
            class="px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5"
            :class="activeCategory === cat.id
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 scale-105'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-500'">
            <span>{{ cat.icon }}</span>
            <span>{{ cat.label }}</span>
          </button>
        </div>
      </div>

      <!-- ── SPOTLIGHT 1: PANABO MANGROVE PARK & CANOPY BOARDWALK ────────────── -->
      <section
        id="mangrove-spotlight"
        v-show="activeCategory === 'all' || activeCategory === 'eco'"
        class="mb-16 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-xl overflow-hidden">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <!-- Interactive Multi-Angle Gallery Viewer -->
          <div class="lg:col-span-7 flex flex-col gap-4">
            <div class="relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner group">
              <transition mode="out-in" enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 scale-95" leave-active-class="transition duration-200 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
                <img
                  :key="activeMangroveAngle"
                  :src="mangroveAngles[activeMangroveAngle].image"
                  :alt="mangroveAngles[activeMangroveAngle].label"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cursor-pointer"
                  @click="openLightbox(activeMangroveAngle)"
                />
              </transition>

              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none"></div>

              <!-- Top Left Badge -->
              <div class="absolute top-4 left-4 bg-emerald-600/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow">
                {{ mangroveAngles[activeMangroveAngle].badge }}
              </div>

              <!-- Top Right Click Fullscreen Prompt -->
              <button
                @click="openLightbox(activeMangroveAngle)"
                class="absolute top-4 right-4 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-colors border border-white/20">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
                <span>Inspect HD</span>
              </button>

              <!-- Bottom Caption -->
              <div class="absolute bottom-4 left-4 right-4 text-white">
                <p class="text-xs sm:text-sm text-slate-200 font-medium drop-shadow">
                  {{ mangroveAngles[activeMangroveAngle].caption }}
                </p>
              </div>
            </div>

            <!-- Angle Switcher Buttons / Thumbnails -->
            <div class="grid grid-cols-3 gap-3">
              <button
                v-for="(angle, idx) in mangroveAngles"
                :key="angle.label"
                @click="activeMangroveAngle = idx"
                class="flex items-center gap-2.5 p-2.5 rounded-2xl border text-left transition-all"
                :class="activeMangroveAngle === idx
                  ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 shadow-md ring-2 ring-emerald-500/20'
                  : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 hover:border-slate-300 dark:hover:border-slate-700'">
                <img :src="angle.image" :alt="angle.label" class="w-12 h-12 rounded-xl object-cover flex-shrink-0" />
                <div class="overflow-hidden">
                  <div class="text-xs font-bold text-slate-900 dark:text-white truncate flex items-center gap-1">
                    <span>{{ angle.icon }}</span>
                    <span>{{ angle.label }}</span>
                  </div>
                  <div class="text-[0.68rem] text-slate-500 dark:text-slate-400 truncate">View Angle</div>
                </div>
              </button>
            </div>
          </div>

          <!-- Spot Content & Guide -->
          <div class="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
                <span>🌿</span>
                <span>Premier Eco-Tourism Sanctuary</span>
              </div>

              <h3 class="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white mb-3 leading-tight">
                Panabo Mangrove Boardwalk &amp; Coastal Sanctuary
              </h3>

              <div class="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Barangays San Pedro &amp; J.P. Laurel, Panabo City</span>
              </div>

              <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Step onto elevated wooden walkways that wind gracefully through dense canopies of thriving Bakawan mangrove trees. With a multi-tiered wooden watchtower offering 360-degree panoramas of the estuary and over-water rest pavilions with distinctive teal roofs, this sanctuary is an idyllic destination for photographers, birdwatchers, and families looking for peace by the Davao Gulf.
              </p>

              <!-- Highlights list -->
              <div class="space-y-2 mb-6">
                <div class="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200">
                  <span class="text-emerald-500 font-bold">✓</span>
                  <span><strong>Multi-Level Observation Watchtower:</strong> Panoramic vista over bird habitats, tree canopies, and tidal sandbars.</span>
                </div>
                <div class="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200">
                  <span class="text-emerald-500 font-bold">✓</span>
                  <span><strong>Stilted Teal-Roofed Gazebos:</strong> Overwater cottages for resting, cooling off in the coastal breeze, and picnic gatherings.</span>
                </div>
                <div class="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200">
                  <span class="text-emerald-500 font-bold">✓</span>
                  <span><strong>Mangrove Reforestation Nursery:</strong> Active educational propagation of native Rhizophora species guarding the Panabo shoreline.</span>
                </div>
              </div>

              <!-- Visitor Specs Table -->
              <div class="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 mb-6 text-xs">
                <div>
                  <span class="text-slate-400 block font-medium">Environmental Fee</span>
                  <span class="font-bold text-slate-900 dark:text-white">₱20 / person</span>
                </div>
                <div>
                  <span class="text-slate-400 block font-medium">Optimal Time</span>
                  <span class="font-bold text-slate-900 dark:text-white">Sunrise &amp; 4:30 PM Sunset</span>
                </div>
                <div>
                  <span class="text-slate-400 block font-medium">Accessibility</span>
                  <span class="font-bold text-slate-900 dark:text-white">10 Mins from City Proper</span>
                </div>
                <div>
                  <span class="text-slate-400 block font-medium">Ideal For</span>
                  <span class="font-bold text-slate-900 dark:text-white">Birdwatching &amp; Eco-Walks</span>
                </div>
              </div>
            </div>

            <!-- Action buttons -->
            <div class="flex flex-wrap items-center gap-3">
              <button
                @click="openLightbox(0)"
                class="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 transition-colors shadow">
                <span>View All 3 Angles in HD</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              </button>

              <button
                @click="copyText('Panabo Mangrove Boardwalk, Brgy. San Pedro, Panabo City, Davao del Norte', 'Location copied!')"
                class="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center gap-1.5 transition-colors">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>
                <span>Copy Directions</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- ── SPOTLIGHT 2 & 3: MARICULTURE PARK & GIANT BANANA MONUMENT ───────── -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

        <!-- MARICULTURE PARK SPOTLIGHT -->
        <div
          v-show="activeCategory === 'all' || activeCategory === 'marine'"
          class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl flex flex-col justify-between group">
          
          <div>
            <!-- Image with Lightbox Link -->
            <div class="relative h-72 sm:h-80 overflow-hidden cursor-pointer" @click="openLightbox(3)">
              <img
                src="/assets/images/tourist-spots/mariculture-park-sunset.jpg"
                alt="Panabo Mariculture Park by Jasper Resari"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20"></div>

              <div class="absolute top-4 left-4 bg-amber-600/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow">
                Fine-Art Seascape
              </div>

              <!-- Photographer Credit Watermark Tag -->
              <div class="absolute bottom-3 right-3 bg-black/75 backdrop-blur-md text-slate-200 text-[0.65rem] px-2.5 py-1 rounded-lg border border-white/10 font-mono flex items-center gap-1">
                <span>📷</span>
                <span>Photo: Jasper Resari</span>
              </div>

              <div class="absolute bottom-3 left-3 text-white">
                <span class="text-[0.7rem] uppercase tracking-wider text-amber-300 font-bold block">Davao Gulf Marine Basin</span>
                <span class="text-lg font-bold">Panabo Mariculture Park</span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6 sm:p-8">
              <div class="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-3">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Panabo Coastal Waters &amp; Davao Gulf</span>
              </div>

              <h3 class="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white mb-3">
                Panabo Mariculture Park &amp; Sunset Seascape
              </h3>

              <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Captured during peak golden hour by acclaimed landscape photographer <strong>Jasper Resari</strong>, the Panabo Mariculture Park is both an ecological sanctuary and a thriving zone for sustainable marine fisheries. As low tide arrives and the sunset paints the sky in vivid gradients, tranquil waters create a stunning mirror reflecting young mangrove shoots and volcanic tide rocks.
              </p>

              <div class="space-y-2 mb-6 text-xs text-slate-700 dark:text-slate-200">
                <div class="flex items-start gap-2">
                  <span class="text-amber-500 font-bold">✓</span>
                  <span><strong>Sustainable Fish Cages:</strong> Leading producer of high-grade Bangus (milkfish) in Mindanao.</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-amber-500 font-bold">✓</span>
                  <span><strong>Landscape Photography Mecca:</strong> Glassy waters and tidal reflections favored by photographers.</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-amber-500 font-bold">✓</span>
                  <span><strong>Coastal Marine Conservation:</strong> Ongoing research preserving Davao Gulf's delicate coral &amp; fish breeding grounds.</span>
                </div>
              </div>
            </div>
          </div>

          <div class="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 mt-4">
            <button
              @click="openLightbox(3)"
              class="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 flex items-center gap-1.5 transition-colors">
              <span>View HD Fine-Art Photo</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
            </button>

            <button
              @click="copyText('Panabo Mariculture Park, Panabo Coastal Waters, Davao del Norte', 'Mariculture Park location copied!')"
              class="text-xs font-semibold text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors flex items-center gap-1">
              <span>Copy Location</span>
            </button>
          </div>
        </div>

        <!-- GIANT BANANA MONUMENT SPOTLIGHT -->
        <div
          v-show="activeCategory === 'all' || activeCategory === 'heritage'"
          class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl flex flex-col justify-between group">
          
          <div>
            <!-- Image with Lightbox Link -->
            <div class="relative h-72 sm:h-80 overflow-hidden cursor-pointer" @click="openLightbox(4)">
              <img
                src="/assets/images/tourist-spots/banana-monument-landmark.jpg"
                alt="Panabo Giant Banana Monument at Freedom Park"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20"></div>

              <div class="absolute top-4 left-4 bg-emerald-600/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow">
                Civic Landmark
              </div>

              <div class="absolute bottom-3 left-3 text-white">
                <span class="text-[0.7rem] uppercase tracking-wider text-amber-300 font-bold block">Freedom Park Civic Grounds</span>
                <span class="text-lg font-bold">Giant Banana Monument &amp; Heritage Statues</span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6 sm:p-8">
              <div class="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-3">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Freedom Park, Brgy. Gredu &amp; New Pandan</span>
              </div>

              <h3 class="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white mb-3">
                Giant Banana Monument &amp; Cultural Heritage Plaza
              </h3>

              <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Standing tall in the heart of Panabo Freedom Park, this monument pays tribute to the city's identity as the "Banana Capital of the Philippines." The magnificent centerpiece features a sculpted giant bunch of bananas capped with the Philippine eagle, surrounded by life-sized bronze statues depicting industrious banana farmers, fisherfolk pulling bountiful nets, and families enjoying harvest peace.
              </p>

              <div class="space-y-2 mb-6 text-xs text-slate-700 dark:text-slate-200">
                <div class="flex items-start gap-2">
                  <span class="text-emerald-500 font-bold">✓</span>
                  <span><strong>The Living Sculptures:</strong> Detailed storytelling of agricultural laborers, coastal fishermen, and cultural roots.</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-emerald-500 font-bold">✓</span>
                  <span><strong>Evening Illuminated Fountains:</strong> Colorful dancing fountains and breezy community open spaces.</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-emerald-500 font-bold">✓</span>
                  <span><strong>Photo Milestone:</strong> The most recognizable photo spot for travelers arriving along the Pan-Philippine highway corridor.</span>
                </div>
              </div>
            </div>
          </div>

          <div class="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 mt-4">
            <button
              @click="openLightbox(4)"
              class="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 flex items-center gap-1.5 transition-colors">
              <span>View Full HD Landmark</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
            </button>

            <button
              @click="copyText('Panabo Freedom Park Giant Banana Monument, Brgy. Gredu, Panabo City', 'Monument location copied!')"
              class="text-xs font-semibold text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors flex items-center gap-1">
              <span>Copy Location</span>
            </button>
          </div>
        </div>

      </div>

      <!-- ── SPOTLIGHT 4 & 5: AGRI-TOURISM & FESTIVALS ───────────────────────── -->
      <div
        v-show="activeCategory === 'all' || activeCategory === 'agri'"
        class="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- TADECO BANANA PLANTATION -->
        <div class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div class="relative h-56 rounded-2xl overflow-hidden mb-6">
              <img src="/assets/images/plantation.jpg" alt="Tadeco Banana Plantation" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
              <span class="absolute top-3 left-3 bg-slate-900/80 text-white text-[0.68rem] font-bold uppercase px-3 py-1 rounded-full border border-white/20">
                Agri-Tourism Leader
              </span>
            </div>

            <div class="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-2">
              📍 Brgy. Dapco &amp; Tibungol, Panabo City
            </div>
            <h4 class="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">
              Tadeco Banana Plantation &amp; Livelihood Center
            </h4>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Tour the world-renowned contiguous Cavendish plantation producing over 30 million export boxes annually. Visit the Tadeco Livelihood Training Center where local artisans handcraft world-class luxury textiles and homeware from banana abaca fiber.
            </p>
          </div>

          <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
            <span class="text-slate-500 dark:text-slate-400">Guided Tours by Appointment</span>
            <button
              @click="$emit('navigate', 'home', 'attractions')"
              class="font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
              See in Main Directory →
            </button>
          </div>
        </div>

        <!-- BINULIG FESTIVAL ARENA -->
        <div class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div class="relative h-56 rounded-2xl overflow-hidden mb-6">
              <img src="/assets/images/festival.jpg" alt="Binulig Festival Grand Arena" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
              <span class="absolute top-3 left-3 bg-amber-600/90 text-white text-[0.68rem] font-bold uppercase px-3 py-1 rounded-full border border-white/20">
                Cultural Festival
              </span>
            </div>

            <div class="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-2">
              📍 Panabo Gymnasium &amp; Freedom Park
            </div>
            <h4 class="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">
              Binulig Banana Festival Cultural Arena
            </h4>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Every October, Panabo erupts into festive drumbeats, street dancing, and banana culinary exhibitions celebrating abundant harvests and cultural solidarity between indigenous Mandaya, Kagan, and settlers.
            </p>
          </div>

          <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
            <span class="text-slate-500 dark:text-slate-400">Annual October Celebration</span>
            <button
              @click="$emit('navigate', 'home', 'about')"
              class="font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
              Read Festival Story →
            </button>
          </div>
        </div>

      </div>

      <!-- ── UNIQUE INTERACTIVE 1-DAY ITINERARY PLANNER ──────────────────────── -->
      <section class="mb-16 rounded-3xl bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white p-8 sm:p-12 border border-emerald-500/20 shadow-2xl relative overflow-hidden">
        <div class="absolute right-0 top-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10 max-w-4xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/30">
            <span>🗺️</span>
            <span>Recommended Experience Guide</span>
          </div>

          <h3 class="text-2xl sm:text-4xl font-extrabold font-heading text-white mb-4">
            The Perfect 1-Day Panabo Tourism Itinerary
          </h3>

          <p class="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
            Maximize your journey through Panabo City with this carefully sequenced morning-to-night eco-tourism route.
          </p>

          <!-- Timeline Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            <!-- Step 1 -->
            <div class="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-emerald-500/50 transition-all">
              <div class="flex items-center justify-between mb-3">
                <span class="text-xs font-bold uppercase px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300">05:45 AM</span>
                <span class="text-xl">🌅</span>
              </div>
              <h5 class="text-base font-bold text-white mb-1">Sunrise Mangrove Walk</h5>
              <p class="text-xs text-slate-300 leading-relaxed">
                Catch low tide reflections, cool sea breezes, and migratory birds at the Panabo Mangrove Boardwalk.
              </p>
            </div>

            <!-- Step 2 -->
            <div class="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-emerald-500/50 transition-all">
              <div class="flex items-center justify-between mb-3">
                <span class="text-xs font-bold uppercase px-2.5 py-1 rounded bg-amber-500/20 text-amber-300">08:30 AM</span>
                <span class="text-xl">☕</span>
              </div>
              <h5 class="text-base font-bold text-white mb-1">Local Banana Breakfast</h5>
              <p class="text-xs text-slate-300 leading-relaxed">
                Sample fresh native banana chips, turon, and hearty Davao del Norte coffee at the downtown plaza.
              </p>
            </div>

            <!-- Step 3 -->
            <div class="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-emerald-500/50 transition-all">
              <div class="flex items-center justify-between mb-3">
                <span class="text-xs font-bold uppercase px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300">10:00 AM</span>
                <span class="text-xl">🍌</span>
              </div>
              <h5 class="text-base font-bold text-white mb-1">Tadeco Plantation Tour</h5>
              <p class="text-xs text-slate-300 leading-relaxed">
                Discover world-class Cavendish farming agro-technology and witness T'nalak artisan fiber weaving.
              </p>
            </div>

            <!-- Step 4 -->
            <div class="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-emerald-500/50 transition-all">
              <div class="flex items-center justify-between mb-3">
                <span class="text-xs font-bold uppercase px-2.5 py-1 rounded bg-teal-500/20 text-teal-300">02:30 PM</span>
                <span class="text-xl">📸</span>
              </div>
              <h5 class="text-base font-bold text-white mb-1">Giant Banana Monument</h5>
              <p class="text-xs text-slate-300 leading-relaxed">
                Snap commemorative souvenir photos at the iconic Freedom Park landmark and cultural bronze statues.
              </p>
            </div>

            <!-- Step 5 -->
            <div class="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-emerald-500/50 transition-all">
              <div class="flex items-center justify-between mb-3">
                <span class="text-xs font-bold uppercase px-2.5 py-1 rounded bg-amber-500/20 text-amber-300">05:00 PM</span>
                <span class="text-xl">🌊</span>
              </div>
              <h5 class="text-base font-bold text-white mb-1">Mariculture Park Sunset</h5>
              <p class="text-xs text-slate-300 leading-relaxed">
                Watch the golden hour mirror reflections across the calm tidal Gulf waters and coastal mangroves.
              </p>
            </div>

            <!-- Step 6 -->
            <div class="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-emerald-500/50 transition-all">
              <div class="flex items-center justify-between mb-3">
                <span class="text-xs font-bold uppercase px-2.5 py-1 rounded bg-purple-500/20 text-purple-300">07:30 PM</span>
                <span class="text-xl">⛲</span>
              </div>
              <h5 class="text-base font-bold text-white mb-1">Night Plaza &amp; Fountains</h5>
              <p class="text-xs text-slate-300 leading-relaxed">
                Unwind with lighted dancing water fountains and dinner at the Panabo City Hall food park promenade.
              </p>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-4">
            <button
              @click="copyItinerary"
              class="px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-2">
              <span v-if="itineraryCopied">✓ Copied to Clipboard!</span>
              <span v-else>📋 Copy Complete Itinerary</span>
            </button>

            <span class="text-xs text-slate-400">
              💡 Tip: Tricycles and multicabs readily connect Panabo City Center with Brgy. San Pedro and Freedom Park.
            </span>
          </div>
        </div>
      </section>

      <!-- ── VISITOR CODE & ECO-GUIDELINES ──────────────────────────────────── -->
      <section class="mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-2xl mb-4">
              🚯
            </div>
            <h4 class="text-base font-bold font-heading text-slate-900 dark:text-white mb-2">Leave No Waste</h4>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Help preserve delicate mangrove root systems and marine fish sanctuaries by avoiding single-use plastics and taking your trash back.
            </p>
          </div>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-2xl mb-4">
              🐦
            </div>
            <h4 class="text-base font-bold font-heading text-slate-900 dark:text-white mb-2">Respect Wildlife</h4>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Maintain quiet voices on the elevated boardwalks to allow migratory kingfishers, egrets, and wetland birds to feed uninterrupted.
            </p>
          </div>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-2xl mb-4">
              🛍️
            </div>
            <h4 class="text-base font-bold font-heading text-slate-900 dark:text-white mb-2">Support Local Goods</h4>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Purchase handmade abaca crafts, fresh Cavendish banana delicacies, and local harvest products directly from Panaboan artisans.
            </p>
          </div>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-2xl mb-4">
              🧭
            </div>
            <h4 class="text-base font-bold font-heading text-slate-900 dark:text-white mb-2">Stay on Designated Trails</h4>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Always remain on wooden footbridges and designated pavilions to safeguard the fragile breathing roots (pneumatophores) of mangroves.
            </p>
          </div>
        </div>
      </section>

      <!-- ── TOURISM ASSISTANCE & EMERGENCY CONTACTS ───────────────────────── -->
      <div class="p-6 sm:p-8 rounded-3xl bg-emerald-500/10 border-2 border-emerald-500/30 dark:bg-emerald-950/20 dark:border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-2xl flex-shrink-0 shadow">
            ℹ️
          </div>
          <div>
            <h4 class="text-lg font-bold font-heading text-slate-900 dark:text-white">
              Need Tourism Assistance or Guided Group Bookings?
            </h4>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
              Contact the Panabo City Tourism &amp; Cultural Affairs Section for official tour guiding, student excursions, and environmental conservation permits.
            </p>
            <div class="flex flex-wrap items-center gap-4 mt-3 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              <span>📞 Tourism Hotline: (084) 822-2179</span>
              <span>•</span>
              <span>📍 City Hall Compound, Brgy. Gredu</span>
              <span>•</span>
              <span>🕒 Mon – Fri: 8:00 AM – 5:00 PM</span>
            </div>
          </div>
        </div>

        <button
          @click="$emit('navigate', 'government', 'hotlines')"
          class="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center gap-2 flex-shrink-0 shadow">
          <span>View All City Hotlines</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>

    </div>

    <!-- ── FULL-SCREEN LIGHTBOX MODAL ──────────────────────────────────────── -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div
        v-if="activeLightboxIndex !== null"
        class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-xl p-4 sm:p-6"
        @click.self="closeLightbox">

        <!-- Close Button -->
        <button
          @click="closeLightbox"
          class="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20"
          aria-label="Close photo viewer">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        <!-- Previous Button -->
        <button
          @click.stop="prevLightboxImage"
          class="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all border border-white/20 hover:scale-110"
          aria-label="Previous photo">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
        </button>

        <!-- Next Button -->
        <button
          @click.stop="nextLightboxImage"
          class="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all border border-white/20 hover:scale-110"
          aria-label="Next photo">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
        </button>

        <!-- Lightbox Content Container -->
        <div class="relative max-w-5xl w-full flex flex-col items-center max-h-[92vh] overflow-hidden" @click.stop>
          
          <!-- Image Box -->
          <div class="relative w-full max-h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black/60 shadow-2xl border border-white/10">
            <img
              :src="galleryPhotos[activeLightboxIndex].src"
              :alt="galleryPhotos[activeLightboxIndex].title"
              class="max-h-[70vh] w-auto max-w-full object-contain rounded-xl select-none"
            />
          </div>

          <!-- Bottom Caption Bar -->
          <div class="w-full bg-slate-900/90 border border-white/10 rounded-2xl p-4 sm:p-5 mt-3 text-white backdrop-blur-md">
            <div class="flex items-center justify-between gap-4 flex-wrap mb-1.5">
              <div class="flex items-center gap-2">
                <span class="text-xs uppercase font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {{ galleryPhotos[activeLightboxIndex].category }}
                </span>
                <span class="text-xs text-slate-400">
                  📍 {{ galleryPhotos[activeLightboxIndex].location }}
                </span>
              </div>

              <!-- Counter -->
              <div class="text-xs font-mono text-slate-400">
                Photo {{ activeLightboxIndex + 1 }} of {{ galleryPhotos.length }}
              </div>
            </div>

            <h4 class="text-base sm:text-lg font-bold text-white mb-1">
              {{ galleryPhotos[activeLightboxIndex].title }}
            </h4>

            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-2">
              {{ galleryPhotos[activeLightboxIndex].desc }}
            </p>

            <div class="text-[0.7rem] text-emerald-300 font-mono">
              {{ galleryPhotos[activeLightboxIndex].credit }}
            </div>
          </div>

        </div>
      </div>
    </transition>

  </div>
</template>

