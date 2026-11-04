<script setup>
import { useAppState } from './composables/useAppState.js'

import TheTopBar         from './components/TheTopBar.vue'
import TheNavbar         from './components/TheNavbar.vue'
import HeroSection       from './components/HeroSection.vue'
import StatsSection      from './components/StatsSection.vue'
import StorySection      from './components/StorySection.vue'
import AttractionsSection from './components/AttractionsSection.vue'
import EconomySection    from './components/EconomySection.vue'
import TriviaSection     from './components/TriviaSection.vue'
import GovernmentPage    from './components/GovernmentPage.vue'
import ExecutivePage     from './components/ExecutivePage.vue'
import TouristSpotsPage from './components/TouristSpotsPage.vue'
import TheFooter         from './components/TheFooter.vue'
import AttractionModal   from './components/AttractionModal.vue'
import BarangayModal     from './components/BarangayModal.vue'

const {
  currentPage, activeGovAccordion, navigateTo,
  isDarkMode, toggleTheme,
  mobileMenuOpen, toggleMobileMenu, closeMobileMenu,
  currentTime, weather,
  activeStoryTab, setStoryTab, stories,
  attractionFilter, attractions, filteredAttractions,
  activeAttractionModal, openAttractionModal, closeAttractionModal,
  barangaySearch, barangayCategory, barangays, filteredBarangays,
  activeBarangayModal, openBarangayModal, closeBarangayModal,
  hotlines, copyHotline,
  triviaList, currentTriviaIndex, nextTrivia, prevTrivia,
  toastMessage,
  showBackToTop, scrollToTop
} = useAppState()
</script>

<template>
  <div class="min-h-screen flex flex-col justify-between bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 font-body antialiased">

    <!-- Top Live Notification Bar -->
    <TheTopBar :currentTime="currentTime" :weather="weather" />

    <!-- Navigation -->
    <TheNavbar
      :isDarkMode="isDarkMode"
      :mobileMenuOpen="mobileMenuOpen"
      :currentPage="currentPage"
      @toggle-theme="toggleTheme"
      @toggle-mobile-menu="toggleMobileMenu"
      @close-mobile-menu="closeMobileMenu"
      @navigate="navigateTo"
    />

    <main class="flex-grow">
      <!-- Home Page View -->
      <div v-show="currentPage === 'home'">
        <!-- Hero -->
        <HeroSection @navigate="navigateTo" />

        <!-- Stats -->
        <StatsSection />

        <!-- Heritage & Story -->
        <StorySection
          :activeStoryTab="activeStoryTab"
          :stories="stories"
          @set-tab="setStoryTab"
        />

        <!-- Attractions -->
        <AttractionsSection
          :attractionFilter="attractionFilter"
          :attractions="attractions"
          :filteredAttractions="filteredAttractions"
          @set-filter="attractionFilter = $event"
          @open-modal="openAttractionModal"
        />

        <!-- Economy -->
        <EconomySection />

        <!-- Trivia -->
        <TriviaSection
          :triviaList="triviaList"
          :currentTriviaIndex="currentTriviaIndex"
          @prev="prevTrivia"
          @next="nextTrivia"
        />
      </div>

      <!-- Dedicated Government Page View -->
      <div v-show="currentPage === 'government'">
        <GovernmentPage
          @navigate-home="navigateTo('home')"
          @navigate="navigateTo"
        />
      </div>

      <!-- Dedicated Executive Page View -->
      <div v-show="currentPage === 'executive'">
        <ExecutivePage
          :isDarkMode="isDarkMode"
          @navigate-home="navigateTo('home')"
          @navigate-government="navigateTo('government')"
          @navigate="navigateTo"
          @copy-contact="copyHotline"
        />
      </div>

      <!-- Explore Tourist Spots Page View -->
      <div v-show="currentPage === 'tourist-spots'">
        <TouristSpotsPage
          :isDarkMode="isDarkMode"
          @navigate-home="navigateTo('home')"
          @navigate="navigateTo"
          @show-toast="showToast"
        />
      </div>
    </main>

    <!-- Footer -->
    <TheFooter @navigate="navigateTo" />

    <!-- Back to Top -->
    <button
      @click="scrollToTop"
      :class="showBackToTop ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'"
      class="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-600/30 transition-all duration-300"
      title="Scroll to top"
      aria-label="Back to Top">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
    </button>

    <!-- Toast -->
    <div v-if="toastMessage" class="fixed bottom-6 right-6 z-50 bg-slate-900 text-white border-l-4 border-emerald-500 px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 text-sm font-semibold animate-bounce">
      <svg class="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      <span>{{ toastMessage }}</span>
    </div>

    <!-- Modals -->
    <AttractionModal
      v-if="activeAttractionModal"
      :attraction="activeAttractionModal"
      @close="closeAttractionModal"
    />

    <BarangayModal
      v-if="activeBarangayModal"
      :barangay="activeBarangayModal"
      @close="closeBarangayModal"
      @copy="copyHotline"
    />

  </div>
</template>
