<script setup>
import { ref, computed } from 'vue'

defineProps({
  isDarkMode: Boolean
})

defineEmits([
  'navigate-home',
  'navigate-government',
  'navigate',
  'copy-contact'
])

// Mayor Information
const mayor = {
  name: "Hon. Jose E. Relampagos",
  title: "Mayor",
  city: "City of Panabo, Davao Del Norte",
  role: "Local Chief Executive • Punong Lungsod",
  office: "Office of the City Mayor",
  address: "Executive Building, City Hall Compound, Brgy. Gredu, Panabo City",
  phone: "(084) 822-2179",
  email: "mayor@panabocity.gov.ph",
  image: "/assets/images/officials/mayor-relampagos.png",
  mandate: "Dedicated to participatory servant leadership, agricultural modernization for banana growers, comprehensive social safety nets, rapid 24/7 emergency response, and transparent grassroots public administration across all 40 component barangays."
}

// 18 Department Heads from official records
const officials = [
  // ── ROW 1 ──
  {
    id: 1,
    name: "Josie Mary G. Relampagos",
    title: "Executive Secretary",
    office: "Office of the City Mayor",
    phone: "(084) 822-3174",
    category: "admin",
    categoryLabel: "Administration",
    image: "/assets/images/officials/josie-mary-relampagos.png"
  },
  {
    id: 2,
    name: "Pedrito A. Misoles, MAGE, CGE",
    title: "City Administrator",
    office: "Office of the City Administrator",
    phone: "(084) 822-1335",
    category: "admin",
    categoryLabel: "Administration",
    image: "/assets/images/officials/pedrito-misoles.png"
  },
  {
    id: 3,
    name: "Jan Mari G. Cafe, MBA",
    title: "City Human Resource Management Officer",
    office: "City Human Resource Management Office",
    phone: "(084) 822-4441",
    category: "admin",
    categoryLabel: "Administration",
    image: "/assets/images/officials/jan-mari-cafe.png"
  },
  {
    id: 4,
    name: "Dr. Arvin Anthony A. Dumalagan, AICP",
    title: "City Planning & Development Coordinator",
    office: "City Planning and Development Office",
    phone: "(084) 822-4630",
    category: "admin",
    categoryLabel: "Administration",
    image: "/assets/images/officials/arvin-anthony-dumalagan.png"
  },
  {
    id: 5,
    name: "Evelyn A. Somozo, MPA",
    title: "City Civil Registrar",
    office: "City Civil Registrar's Office",
    phone: "(084) 822-7281",
    category: "services",
    categoryLabel: "Public Services",
    image: "/assets/images/officials/evelyn-somozo.png"
  },
  {
    id: 6,
    name: "Marcelina M. Bautista, MLIS",
    title: "City General Services Officer",
    office: "City General Services Office",
    phone: "(084) 823-4914",
    category: "admin",
    categoryLabel: "Administration",
    image: "/assets/images/officials/marcelina-bautista.png"
  },

  // ── ROW 2 ──
  {
    id: 7,
    name: "Jovem M. Sepe, CPA",
    title: "City Budget Officer",
    office: "City Budget Office",
    phone: "(084) 628-5185",
    category: "finance",
    categoryLabel: "Finance & Revenue",
    image: "/assets/images/officials/jovem-sepe.png"
  },
  {
    id: 8,
    name: "Mylene M. Hermosora, CPA",
    title: "City Accountant",
    office: "City Accounting Office",
    phone: "(084) 822-5590",
    category: "finance",
    categoryLabel: "Finance & Revenue",
    image: "/assets/images/officials/mylene-hermosora.png"
  },
  {
    id: 9,
    name: "Kirk B. Samillano",
    title: "City Treasurer",
    office: "City Treasurer's Office",
    phone: "(084) 822-7158",
    category: "finance",
    categoryLabel: "Finance & Revenue",
    image: "/assets/images/officials/kirk-samillano.png"
  },
  {
    id: 10,
    name: "Nancy R. Llana, REA",
    title: "City Assessor",
    office: "Office of the City Assessor",
    phone: "(084) 822-2101",
    category: "finance",
    categoryLabel: "Finance & Revenue",
    image: "/assets/images/officials/nancy-llana.png"
  },
  {
    id: 11,
    name: "Atty. Chervin C. Paculanang",
    title: "City Legal Officer",
    office: "City Legal Office",
    phone: "(084) 822-7322",
    category: "admin",
    categoryLabel: "Administration",
    image: "/assets/images/officials/chervin-paculanang.png"
  },
  {
    id: 12,
    name: "Angeles A. Sangalang-Atamosa, MD",
    title: "City Health Officer",
    office: "City Health Office",
    phone: "(084) 822-4247",
    category: "services",
    categoryLabel: "Health & Welfare",
    image: "/assets/images/officials/angeles-sangalang-atamosa.png"
  },

  // ── ROW 3 ──
  {
    id: 13,
    name: "Chareina Joy G. Lacuin, RSW, MSSW",
    title: "City Social Welfare & Development Officer",
    office: "City Social Welfare and Development Office",
    phone: "(084) 628-5456",
    category: "services",
    categoryLabel: "Health & Welfare",
    image: "/assets/images/officials/chareina-joy-lacuin.png"
  },
  {
    id: 14,
    name: "Dr. Samuel N. Anunciado, MSAg, DPA",
    title: "City Agriculturist",
    office: "City Agriculturist's Office",
    phone: "(084) 822-7455",
    category: "infra",
    categoryLabel: "Agri & Environment",
    image: "/assets/images/officials/samuel-anunciado.png"
  },
  {
    id: 15,
    name: "Engr. Felix Jonasses P. Senajon, MSc, ME, PhD",
    title: "City Environment & Natural Resources Officer",
    office: "City Environment and Natural Resources Office",
    phone: "(084) 822-2934",
    category: "infra",
    categoryLabel: "Agri & Environment",
    image: "/assets/images/officials/felix-jonasses-senajon.png"
  },
  {
    id: 16,
    name: "Engr. Bernardo C. Rabanoz, Jr.",
    title: "City Engineer",
    office: "City Engineer's Office",
    phone: "(084) 822-2934",
    category: "infra",
    categoryLabel: "Infrastructure",
    image: "/assets/images/officials/bernardo-rabanoz.png"
  },
  {
    id: 17,
    name: "Nemesio L. Rasgo, Jr., LLB",
    title: "City Economic Enterprise Manager",
    office: "City Economic Enterprise Management Office",
    phone: "(084) 822-1718",
    category: "finance",
    categoryLabel: "Economic Enterprise",
    image: "/assets/images/officials/nemesio-rasgo.png"
  },
  {
    id: 18,
    name: "Leila P. Saligumba, MPA",
    title: "Secretary to the Sanggunian",
    office: "Office of the Secretary to the Sangguniang Panlungsod",
    phone: "(084) 822-3861",
    category: "admin",
    categoryLabel: "Legislative Liaison",
    image: "/assets/images/officials/leila-saligumba.png"
  }
]

// Search and Category Filter
const searchQuery = ref('')
const selectedCategory = ref('all')

const categories = [
  { id: 'all', label: 'All Officials', count: 18 },
  { id: 'admin', label: 'Administration & Planning', count: 6 },
  { id: 'finance', label: 'Finance & Revenue', count: 5 },
  { id: 'services', label: 'Health & Social Welfare', count: 3 },
  { id: 'infra', label: 'Agriculture & Engineering', count: 4 }
]

const filteredOfficials = computed(() => {
  return officials.filter(o => {
    const matchesCategory = selectedCategory.value === 'all' || o.category === selectedCategory.value
    const q = searchQuery.value.toLowerCase().trim()
    if (!q) return matchesCategory
    const matchesSearch =
      o.name.toLowerCase().includes(q) ||
      o.title.toLowerCase().includes(q) ||
      o.office.toLowerCase().includes(q) ||
      o.phone.toLowerCase().includes(q)
    return matchesCategory && matchesSearch
  })
})
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
          <button
            @click="$emit('navigate-government')"
            class="hover:text-emerald-600 dark:hover:text-emerald-400 font-semibold transition-colors">
            Government Portal
          </button>
          <span>/</span>
          <span class="text-slate-800 dark:text-slate-200 font-bold">Executive Department</span>
        </nav>

        <div class="flex items-center gap-3">
          <button
            @click="$emit('navigate-government')"
            class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            <span>🏛️ Portal Overview</span>
          </button>
          <span class="text-slate-300 dark:text-slate-700">|</span>
          <button
            @click="$emit('navigate-home')"
            class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      <!-- Executive Department Hero Banner -->
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white p-8 sm:p-12 mb-12 shadow-2xl border border-emerald-500/20">
        <div class="absolute -right-20 -top-20 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -left-20 -bottom-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10 max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider mb-5">
            <span>🇵🇭</span>
            <span>Republic of the Philippines • City Government of Panabo</span>
          </div>

          <h1 class="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mb-3 text-white">
            Executive <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">Department</span>
          </h1>

          <div class="text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-400 mb-4">
            Office of the City Mayor
          </div>

          <p class="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-medium">
            The City Mayor, together with the department heads, provides executive leadership and oversees the implementation of policies, programs, and public services for the City Government of Panabo.
          </p>

          <div class="flex flex-wrap gap-3 text-xs sm:text-sm font-semibold">
            <span class="px-3.5 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">🏛️ 18 Executive Offices</span>
            <span class="px-3.5 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">📍 City Hall Compound, Brgy. Gredu</span>
            <span class="px-3.5 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">✓ Verified Official Directory</span>
          </div>
        </div>
      </div>

      <!-- ===================================================================== -->
      <!-- UNIQUE SPOTLIGHT: THE CITY MAYOR (HON. JOSE E. RELAMPAGOS)           -->
      <!-- ===================================================================== -->
      <div class="mb-16">
        <div class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden relative">
          <div class="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div class="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            <!-- Mayor's Portrait Column -->
            <div class="lg:col-span-5 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-950 dark:to-slate-900 p-8 flex flex-col items-center justify-center text-center relative border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800">
              <div class="relative mb-6 group">
                <div class="w-56 h-72 sm:w-64 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-800">
                  <img
                    :src="mayor.image"
                    :alt="mayor.name"
                    class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <!-- LGU Seal Badge -->
                <div class="absolute -top-3 -right-3 w-14 h-14 rounded-full bg-white dark:bg-slate-900 shadow-lg border-2 border-emerald-500 flex items-center justify-center text-2xl">
                  🏛️
                </div>
              </div>

              <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800/60 text-xs font-bold uppercase tracking-wider mb-2">
                <span>⭐</span>
                <span>Local Chief Executive</span>
              </div>
              <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white leading-tight">
                {{ mayor.name }}
              </h2>
              <p class="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                {{ mayor.title }} • {{ mayor.city }}
              </p>
            </div>

            <!-- Mayor's Vision & Mandate Column -->
            <div class="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-2 mb-4">
                  <span class="text-xs font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
                    Executive Mandate
                  </span>
                  <span class="text-xs font-semibold text-slate-400">
                    Service to Panaboans, Service to God!
                  </span>
                </div>

                <h3 class="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white mb-4">
                  Office of the City Mayor
                </h3>

                <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {{ mayor.mandate }}
                </p>

                <!-- Core Pillars Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-start gap-3">
                    <span class="text-xl">🍌</span>
                    <div>
                      <div class="text-xs font-bold text-slate-900 dark:text-white">Banana Agri-Economy</div>
                      <div class="text-[0.7rem] text-slate-500 dark:text-slate-400">Support for smallholder growers &amp; export tech</div>
                    </div>
                  </div>

                  <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-start gap-3">
                    <span class="text-xl">🚨</span>
                    <div>
                      <div class="text-xs font-bold text-slate-900 dark:text-white">24/7 Disaster Safety</div>
                      <div class="text-[0.7rem] text-slate-500 dark:text-slate-400">State-of-the-art rescue &amp; flood monitoring</div>
                    </div>
                  </div>

                  <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-start gap-3">
                    <span class="text-xl">🤝</span>
                    <div>
                      <div class="text-xs font-bold text-slate-900 dark:text-white">Social Welfare</div>
                      <div class="text-[0.7rem] text-slate-500 dark:text-slate-400">Medical subsidies, seniors, and PWD programs</div>
                    </div>
                  </div>

                  <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-start gap-3">
                    <span class="text-xl">⚖️</span>
                    <div>
                      <div class="text-xs font-bold text-slate-900 dark:text-white">Transparent Portals</div>
                      <div class="text-[0.7rem] text-slate-500 dark:text-slate-400">Streamlined e-services with zero red tape</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Contact & Location Footer of Spotlight -->
              <div class="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div class="text-xs text-slate-500 dark:text-slate-400 space-y-1">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-slate-700 dark:text-slate-300">📍 Office:</span>
                    <span>{{ mayor.address }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-slate-700 dark:text-slate-300">📞 Direct Phone:</span>
                    <span class="font-mono font-bold text-slate-900 dark:text-white">{{ mayor.phone }}</span>
                  </div>
                </div>

                <div class="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    @click="$emit('copy-contact', mayor.phone)"
                    class="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-sm flex items-center justify-center gap-1.5">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    <span>Copy Mayor's Hotline</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      <!-- ===================================================================== -->
      <!-- SECTION: DEPARTMENT HEADS DIRECTORY                                  -->
      <!-- ===================================================================== -->
      <div class="mb-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
              <span>📋</span>
              <span>City Executive Cabinet</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
              Panabo City Department Heads
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
              Official leaders directing municipal operations, planning, finances, health, agriculture, and public safety.
            </p>
          </div>

          <!-- Live Search Bar -->
          <div class="relative w-full md:w-80">
            <svg class="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Search by name, position, or office..."
              class="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-xs"
            />
          </div>
        </div>

        <!-- Filter Chips Bar -->
        <div class="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="selectedCategory = cat.id"
            class="px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5"
            :class="selectedCategory === cat.id
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-500'">
            <span>{{ cat.label }}</span>
            <span
              class="text-[0.65rem] px-1.5 py-0.5 rounded-full"
              :class="selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'">
              {{ cat.count }}
            </span>
          </button>
        </div>
      </div>

      <!-- Department Heads Modern Cards Grid (Unique Design) -->
      <div v-if="filteredOfficials.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <div
          v-for="official in filteredOfficials"
          :key="official.id"
          class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all flex flex-col justify-between group">
          
          <div>
            <!-- Header: Avatar Portrait & Category Badge -->
            <div class="flex items-start justify-between gap-4 mb-4">
              <div class="relative">
                <div class="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden border-2 border-emerald-500/30 shadow-md bg-slate-100 dark:bg-slate-800 group-hover:scale-105 transition-transform duration-300">
                  <img
                    :src="official.image"
                    :alt="official.name"
                    class="w-full h-full object-cover object-top"
                  />
                </div>
                <div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" title="Active Official"></div>
              </div>

              <span class="text-[0.65rem] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                {{ official.categoryLabel }}
              </span>
            </div>

            <!-- Official Name & Titles -->
            <h3 class="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-white leading-snug mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              {{ official.name }}
            </h3>

            <!-- Position / Designation -->
            <div class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
              {{ official.title }}
            </div>

            <!-- Department Office Box -->
            <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80 mb-4">
              <div class="text-[0.7rem] uppercase font-bold tracking-wider text-slate-400 mb-0.5">Assigned Department:</div>
              <div class="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <span>🏛️</span>
                <span>{{ official.office }}</span>
              </div>
            </div>
          </div>

          <!-- Contact Hotline & Copy Action -->
          <div class="pt-3 border-t border-slate-100 dark:border-slate-800">
            <div class="flex items-center justify-between text-xs mb-3 font-mono font-bold text-slate-700 dark:text-slate-300">
              <span class="text-slate-400 text-[0.7rem] font-sans font-semibold">Hotline:</span>
              <span>{{ official.phone }}</span>
            </div>

            <button
              @click="$emit('copy-contact', official.phone)"
              class="w-full text-xs font-bold py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-emerald-600 hover:text-white dark:bg-slate-800 dark:hover:bg-emerald-600 text-slate-700 dark:text-slate-200 transition-colors flex items-center justify-center gap-1.5 shadow-xs">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              <span>Copy Direct Contact</span>
            </button>
          </div>

        </div>
      </div>

      <!-- Empty Filter State -->
      <div v-else class="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 mb-16">
        <span class="text-4xl mb-3 block">🔍</span>
        <h4 class="text-lg font-bold text-slate-800 dark:text-white">No officials found</h4>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Try adjusting your keyword search or category filter.</p>
        <button
          @click="searchQuery = ''; selectedCategory = 'all'"
          class="mt-4 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500 transition-colors">
          Reset Filters
        </button>
      </div>

      <!-- Bottom City Hall Assistance & Navigation Card -->
      <div class="rounded-3xl bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white p-8 sm:p-12 text-center border border-emerald-500/20 shadow-2xl relative overflow-hidden">
        <div class="relative z-10 max-w-2xl mx-auto">
          <span class="text-3xl mb-3 block">🏛️</span>
          <h3 class="text-xl sm:text-2xl font-bold font-heading text-white mb-2">
            Panabo City Hall Frontline Assistance
          </h3>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            City Hall offices are open Monday to Friday, 8:00 AM to 5:00 PM (except legal holidays). For official citizen clearances, business permits, or agricultural assistance, visit the City Hall Compound in Brgy. Gredu or contact our frontline department hotlines.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-3">
            <button
              @click="$emit('navigate-government')"
              class="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold backdrop-blur-md border border-white/20 transition-colors flex items-center gap-1.5">
              <span>🏛️</span>
              <span>View Government Portal</span>
            </button>
            <button
              @click="$emit('navigate-home')"
              class="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-lg shadow-emerald-600/30 flex items-center gap-1.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
              <span>Back to Home Site</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
