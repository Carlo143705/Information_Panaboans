<script setup>
import { ref } from 'vue'

defineProps({
  isDarkMode: Boolean,
  mobileMenuOpen: Boolean,
  currentPage: {
    type: String,
    default: 'home'
  }
})


const emit = defineEmits([
  'toggle-theme',
  'toggle-mobile-menu',
  'close-mobile-menu',
  'navigate'
])

const desktopGovOpen = ref(false)
const desktopDestOpen = ref(false)
const mobileGovAccordionOpen = ref(false)
const mobileDestAccordionOpen = ref(true)

const toggleDesktopGov = () => {
  desktopGovOpen.value = !desktopGovOpen.value
  if (desktopGovOpen.value) desktopDestOpen.value = false
}

const toggleDesktopDest = () => {
  desktopDestOpen.value = !desktopDestOpen.value
  if (desktopDestOpen.value) desktopGovOpen.value = false
}

const goTo = (page, section = null) => {
  desktopGovOpen.value = false
  desktopDestOpen.value = false
  emit('close-mobile-menu')
  emit('navigate', page, section)
}
</script>


<template>
  <header class="sticky top-0 z-40 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">

        <!-- Logo -->
        <a
          href="#hero"
          @click.prevent="goTo('home', 'hero')"
          class="flex items-center gap-3 group"
          aria-label="Panabo City Home">
          <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-amber-500 flex items-center justify-center text-2xl shadow-lg shadow-emerald-600/25 -rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-transform duration-300">
            🍌
          </div>
          <div>
            <div class="text-xl font-extrabold font-heading text-slate-900 dark:text-white leading-none tracking-tight">PANABO CITY</div>
            <span class="text-[0.7rem] font-bold tracking-widest text-amber-600 dark:text-amber-400 uppercase">Banana Capital of the Philippines</span>
          </div>
        </a>

        <!-- Desktop Nav -->
        <nav aria-label="Main Navigation" class="hidden md:flex items-center gap-7">
          <a
            href="#about"
            @click.prevent="goTo('home', 'about')"
            class="text-sm font-semibold transition-colors"
            :class="currentPage === 'home' ? 'text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400' : 'text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400'">
            Heritage &amp; Story
          </a>

          <!-- Destinations Dropdown Menu -->
          <div
            class="relative"
            @mouseenter="desktopDestOpen = true"
            @mouseleave="desktopDestOpen = false">

            <button
              @click="toggleDesktopDest"
              class="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors py-2 px-3 rounded-xl"
              :class="currentPage === 'tourist-spots'
                ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-bold'
                : 'text-slate-700 hover:text-emerald-600 dark:text-slate-200 dark:hover:text-emerald-400'"
              aria-haspopup="true"
              :aria-expanded="desktopDestOpen">
              <span>Destinations</span>
              <svg
                class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': desktopDestOpen }"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7"/>
              </svg>
            </button>

            <!-- Dropdown Menu Box -->
            <transition
              enter-active-class="transition duration-150 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0">
              <div
                v-show="desktopDestOpen"
                class="absolute left-0 mt-1 w-80 rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200/90 dark:border-slate-800 p-2 z-50">

                <a
                  href="#tourist-spots"
                  @click.prevent="goTo('tourist-spots', null)"
                  class="flex items-start gap-3 p-3 rounded-xl transition-colors group"
                  :class="currentPage === 'tourist-spots' ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-bold' : 'hover:bg-slate-50 dark:hover:bg-slate-800/80'">
                  <span class="text-xl p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">✨</span>
                  <div class="flex-1">
                    <div class="flex items-center justify-between">
                      <div class="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        Explore Tourist Spots
                      </div>
                      <span class="text-[0.62rem] font-extrabold uppercase px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">
                        New Page
                      </span>
                    </div>
                    <div class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Mangrove boardwalks, mariculture parks &amp; landmarks
                    </div>
                  </div>
                </a>

                <div class="my-1 border-t border-slate-100 dark:border-slate-800"></div>

                <a
                  href="#attractions"
                  @click.prevent="goTo('home', 'attractions')"
                  class="flex items-start gap-3 p-3 rounded-xl transition-colors group hover:bg-slate-50 dark:hover:bg-slate-800/80">
                  <span class="text-xl p-2 rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">📍</span>
                  <div>
                    <div class="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      Destinations Overview
                    </div>
                    <div class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Quick directory of Panabo attractions
                    </div>
                  </div>
                </a>

              </div>
            </transition>
          </div>

          <a
            href="#economy"
            @click.prevent="goTo('home', 'economy')"
            class="text-sm font-semibold transition-colors"
            :class="currentPage === 'home' ? 'text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400' : 'text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400'">
            Banana Economy
          </a>

          <!-- Government Dropdown / Accordion Menu -->
          <div
            class="relative"
            @mouseenter="desktopGovOpen = true"
            @mouseleave="desktopGovOpen = false">

            <button
              @click="toggleDesktopGov"
              class="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors py-2 px-3 rounded-xl"
              :class="currentPage === 'government' || currentPage === 'executive'
                ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-bold'
                : 'text-slate-700 hover:text-emerald-600 dark:text-slate-200 dark:hover:text-emerald-400'"
              aria-haspopup="true"
              :aria-expanded="desktopGovOpen">
              <span>Government</span>
              <svg
                class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': desktopGovOpen }"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7"/>
              </svg>
            </button>

            <!-- Dropdown Menu Box -->
            <transition
              enter-active-class="transition duration-150 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0">
              <div
                v-show="desktopGovOpen"
                class="absolute left-0 mt-1 w-72 rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200/90 dark:border-slate-800 p-2 z-50">

                <a
                  href="#government"
                  @click.prevent="goTo('government', null)"
                  class="flex items-start gap-3 p-3 rounded-xl transition-colors group"
                  :class="currentPage === 'government' ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-bold' : 'hover:bg-slate-50 dark:hover:bg-slate-800/80'">
                  <span class="text-xl p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">🏛️</span>
                  <div>
                    <div class="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      Government Portal
                    </div>
                    <div class="text-xs text-slate-500 dark:text-slate-400">
                      City Hall administration &amp; overview
                    </div>
                  </div>
                </a>

                <div class="my-1 border-t border-slate-100 dark:border-slate-800"></div>

                <a
                  href="#executive"
                  @click.prevent="goTo('executive', null)"
                  class="flex items-start gap-3 p-3 rounded-xl transition-colors group"
                  :class="currentPage === 'executive' ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-bold' : 'hover:bg-slate-50 dark:hover:bg-slate-800/80'">
                  <span class="text-xl p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">👔</span>
                  <div>
                    <div class="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      Executive
                    </div>
                    <div class="text-xs text-slate-500 dark:text-slate-400">
                      City Mayor, Vice Mayor &amp; Leadership
                    </div>
                  </div>
                </a>

              </div>
            </transition>
          </div>
        </nav>

        <!-- Controls -->
        <div class="flex items-center gap-3">
          <button
            @click="$emit('toggle-theme')"
            class="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:scale-105 transition-all text-lg shadow-sm"
            :title="isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
            aria-label="Toggle Theme">
            <span v-if="isDarkMode">☀️</span>
            <span v-else>🌙</span>
          </button>
          
          <button
            @click="$emit('toggle-mobile-menu')"
            class="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle mobile menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu with Accordion for Government -->
      <div v-show="mobileMenuOpen" class="md:hidden py-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
        <a
          href="#about"
          @click.prevent="goTo('home', 'about')"
          class="px-3 py-2 rounded-md text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800">
          Heritage &amp; Story
        </a>

        <!-- Mobile Destinations Accordion -->
        <div class="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden mt-1">
          <button
            @click="mobileDestAccordionOpen = !mobileDestAccordionOpen"
            class="w-full px-3 py-2.5 flex items-center justify-between text-left text-sm font-bold bg-slate-50 dark:bg-slate-800/60 text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <div class="flex items-center gap-2">
              <span>🌴</span>
              <span>Destinations</span>
              <span class="text-[0.62rem] uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300">
                Tourism
              </span>
            </div>
            <svg
              class="w-4 h-4 transition-transform duration-200 text-slate-500"
              :class="{ 'rotate-180': mobileDestAccordionOpen }"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          <div v-show="mobileDestAccordionOpen" class="p-2 space-y-1 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <a
              href="#tourist-spots"
              @click.prevent="goTo('tourist-spots', null)"
              class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800"
              :class="currentPage === 'tourist-spots' ? 'text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50/50 dark:bg-emerald-950/40' : 'text-slate-700 dark:text-slate-200'">
              <span>✨</span>
              <span>Explore Tourist Spots</span>
              <span class="ml-auto text-[0.6rem] uppercase font-extrabold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">New</span>
            </a>

            <a
              href="#attractions"
              @click.prevent="goTo('home', 'attractions')"
              class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200">
              <span>📍</span>
              <span>Destinations Overview</span>
            </a>
          </div>
        </div>

        <a
          href="#economy"
          @click.prevent="goTo('home', 'economy')"
          class="px-3 py-2 rounded-md text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800">
          Banana Economy
        </a>

        <!-- Mobile Government Accordion Item -->
        <div class="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden mt-1">
          <button
            @click="mobileGovAccordionOpen = !mobileGovAccordionOpen"
            class="w-full px-3 py-2.5 flex items-center justify-between text-left text-sm font-bold bg-slate-50 dark:bg-slate-800/60 text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <div class="flex items-center gap-2">
              <span>🏛️</span>
              <span>Government</span>
              <span class="text-[0.65rem] uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300">
                Portal
              </span>
            </div>
            <svg
              class="w-4 h-4 transition-transform duration-200 text-slate-500"
              :class="{ 'rotate-180': mobileGovAccordionOpen }"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          <!-- Sub-items accordion content -->
          <div v-show="mobileGovAccordionOpen" class="p-2 space-y-1 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <a
              href="#government"
              @click.prevent="goTo('government', null)"
              class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800"
              :class="currentPage === 'government' ? 'text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50/50 dark:bg-emerald-950/40' : 'text-slate-700 dark:text-slate-200'">
              <span>🏛️</span>
              <span>Government Portal</span>
            </a>

            <a
              href="#executive"
              @click.prevent="goTo('executive', null)"
              class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800"
              :class="currentPage === 'executive' ? 'text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50/50 dark:bg-emerald-950/40' : 'text-slate-700 dark:text-slate-200'">
              <span>👔</span>
              <span>Executive</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  </header>
</template>


