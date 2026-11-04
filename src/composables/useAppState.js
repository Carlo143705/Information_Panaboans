/**
 * Panabo City Official Information Portal
 * Central Vue 3 Composable — all reactive state & logic
 */

import { ref, computed, onMounted, onUnmounted } from 'vue'

export function useAppState() {
  // ── Theme ──────────────────────────────────────────────────────────────────
  const isDarkMode = ref(false)

  const applyTheme = () => {
    if (isDarkMode.value) {
      document.documentElement.setAttribute('data-theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
      document.documentElement.classList.remove('dark')
    }
  }

  const initTheme = () => {
    const saved = localStorage.getItem('panabo_theme')
    if (saved) {
      isDarkMode.value = saved === 'dark'
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      isDarkMode.value = true
    }
    applyTheme()
  }

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
    localStorage.setItem('panabo_theme', isDarkMode.value ? 'dark' : 'light')
    applyTheme()
    showToast(isDarkMode.value ? 'Dark mode enabled' : 'Light mode enabled')
  }

  // ── Mobile Nav ─────────────────────────────────────────────────────────────
  const mobileMenuOpen = ref(false)
  const toggleMobileMenu = () => { mobileMenuOpen.value = !mobileMenuOpen.value }
  const closeMobileMenu = () => { mobileMenuOpen.value = false }

  // ── Live Clock ─────────────────────────────────────────────────────────────
  const currentTime = ref('')
  let clockInterval = null

  const updateTime = () => {
    const now = new Date()
    currentTime.value = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Manila',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    }).format(now)
  }

  // ── Weather ─────────────────────────────────────────────────────────────────
  const weather = ref({
    temp: '29°C',
    condition: 'Tropical Sunshine',
    humidity: '76%',
    location: 'Panabo City, Davao del Norte'
  })

  // ── Story Tabs ──────────────────────────────────────────────────────────────
  const activeStoryTab = ref('banana')
  const setStoryTab = (tab) => { activeStoryTab.value = tab }

  const stories = {
    banana: {
      kicker: 'Agricultural Crown',
      title: 'The Banana Capital of the Philippines',
      desc: "Panabo City is home to sprawling world-class Cavendish banana plantations, including TADECO (Tagum Agricultural Development Company), one of the largest contiguous banana operations in the world. With fertile volcanic soil, year-round equatorial climate, and sophisticated agro-technology, millions of boxes of premium bananas are harvested here annually and shipped to Japan, China, South Korea, and the Middle East.",
      image: '/assets/images/plantation.jpg',
      highlights: [
        '30M+ Export boxes harvested annually',
        "Tadeco Livelihood Center (T'nalak weaving)",
        'Global leader in Cavendish biotechnology',
        'High-employment agro-industrial hub'
      ]
    },
    history: {
      kicker: 'Origin & Roots',
      title: 'From Early Settlement to Premier Component City',
      desc: 'The name "Panabo" originated from early indigenous terms for hunting and fishing tools, particularly the "pana" (bow and arrow) used by early settlers along river estuaries flowing into the Davao Gulf. Formerly a bustling trading settlement within Tagum and Davao, Panabo was officially inaugurated as an independent component city of Davao del Norte on March 31, 2001 under Republic Act No. 9015.',
      image: '/assets/images/hero.jpg',
      highlights: [
        'Ancient indigenous trading sanctuary',
        'Republic Act No. 9015 Cityhood (March 31, 2001)',
        'Rich Aeta, Kagan, and Mandaya heritage',
        'Fast-growing corridor between Tagum & Davao'
      ]
    },
    culture: {
      kicker: 'Festivities & Spirit',
      title: 'The Vibrant Binulig Banana Festival',
      desc: 'Every October, the streets of Panabo burst into an explosion of golden yellow and emerald green during the Binulig Festival. Named after "bulig" (a Bisaya word for a hearty bunch of bananas), this festival is a spirited civic and cultural thanksgiving for abundant harvests, peace, community resilience, and cultural solidarity across Panaboans.',
      image: '/assets/images/festival.jpg',
      highlights: [
        'Binulig Street Dancing & Drumbeat Parade',
        'Panabo Agro-Trade and Banana Fair',
        'Search for Hiyas ng Panabo Cultural Queen',
        'Banana Culinary Master Showcase'
      ]
    },
    vision: {
      kicker: 'Forward Looking',
      title: 'Sustainable Eco-Agri City of the Future',
      desc: 'Panabo City is actively pioneering green development through extensive mangrove preservation along the Davao Gulf, a dedicated Mariculture Park for sustainable aquaculture, modernized logistics routes, solar-powered civic centers, and continuous education in cooperative agriculture.',
      image: '/assets/images/mangrove.jpg',
      highlights: [
        'Panabo Mariculture Coastal Park',
        'San Pedro Mangrove Protected Sanctuary',
        'Digital City Hall & Citizen e-Portals',
        'Eco-friendly artisan fiber production'
      ]
    }
  }

  // ── Attractions ─────────────────────────────────────────────────────────────
  const attractionFilter = ref('all')
  const attractions = ref([
    {
      id: 1,
      title: 'Tadeco Banana Plantation & Crafts',
      category: 'agri',
      badge: 'Agri-Tourism',
      location: 'Brgy. Dapco & Tibungol',
      image: '/assets/images/plantation.jpg',
      desc: 'A world-class contiguous plantation offering agro-educational tours, tissue-culture research hubs, and the Tadeco Livelihood Training Center where local artisans handcraft luxury items from banana abaca fiber.',
      admission: 'Guided Educational Booking Available',
      bestTime: 'Morning (8:00 AM - 11:30 AM)',
      features: ["Tissue Culture Labs", "T'nalak Weaving", 'Agro-forestry Tours', 'Eco-Gift Shop']
    },
    {
      id: 2,
      title: 'Panabo Coastal Sanctuary & Mangrove Park',
      category: 'nature',
      badge: 'Eco-Park',
      location: 'Brgy. San Pedro & J.P. Laurel',
      image: '/assets/images/mangrove.jpg',
      desc: 'Stroll along elevated wooden footbridges weaving through dense lush mangrove canopies. An idyllic peaceful sanctuary for birdwatchers, nature photographers, and eco-tourists along the Davao Gulf.',
      admission: 'Minimal Environmental Fee (₱20)',
      bestTime: 'Sunrise & Late Afternoon',
      features: ['Wooden Canopy Boardwalk', 'Birdwatching Deck', 'Mangrove Seedling Nursery', 'Breeze Pavilions']
    },
    {
      id: 3,
      title: 'Binulig Festival Grand Arena',
      category: 'civic',
      badge: 'Cultural Event',
      location: 'Panabo City Gymnasium & Freedom Park',
      image: '/assets/images/festival.jpg',
      desc: "The vibrant heart of Panabo's annual harvest celebrations where traditional performers, dancers, and musicians don elaborate banana-themed costumes in a joyous showcase of gratitude.",
      admission: 'Free Public Admission',
      bestTime: 'Annual October Festival Week',
      features: ['Street Parades', 'Live Musical Performances', 'Agro-Craft Stalls', 'Cultural Pageantry']
    },
    {
      id: 4,
      title: 'Panabo City Hall & Freedom Park',
      category: 'civic',
      badge: 'Civic Hub',
      location: 'Brgy. Gredu & Sto. Niño',
      image: '/assets/images/hero.jpg',
      desc: 'A beautifully designed civic plaza featuring illuminated dancing fountains, family picnic grounds, jogging lanes, and the architecturally striking City Hall building.',
      admission: 'Free Public Access',
      bestTime: 'Evening (5:00 PM - 9:00 PM)',
      features: ['Lighted Water Fountains', 'Open Lawn & Promenade', 'Civic Monuments', 'Night Food Stalls']
    },
    {
      id: 5,
      title: 'Panabo Mariculture Park & Gulf Waters',
      category: 'nature',
      badge: 'Marine Park',
      location: 'Panabo Coastal Waters',
      image: '/assets/images/mangrove.jpg',
      desc: 'A modern marine fisheries development zone dedicated to sustainable milkfish (bangus) farming and aquaculture research in the pristine waters of the Davao Gulf.',
      admission: 'Authorized Boat Tours & Research',
      bestTime: 'Early Morning (6:00 AM - 9:00 AM)',
      features: ['Floating Fish Cages', 'Marine Research Units', 'Aquaculture Demonstrations', 'Gulf Views']
    },
    {
      id: 6,
      title: 'Agro-Industrial Innovation Center',
      category: 'agri',
      badge: 'Industry & Trade',
      location: 'Brgy. Nanyo & Gredu',
      image: '/assets/images/plantation.jpg',
      desc: 'Modern facilities supporting post-harvest technology, fruit packaging, cold-storage distribution, and agricultural training for Panaboan farmers and youth.',
      admission: 'Trade & Academic Visits',
      bestTime: 'Regular Office Hours (Mon-Fri)',
      features: ['Cold Storage Logistics', 'Packaging Innovation', 'Farmer Training Classrooms', 'Trade Exhibits']
    }
  ])

  const filteredAttractions = computed(() => {
    if (attractionFilter.value === 'all') return attractions.value
    return attractions.value.filter(a => a.category === attractionFilter.value)
  })

  // ── Attraction Modal ────────────────────────────────────────────────────────
  const activeAttractionModal = ref(null)
  const openAttractionModal = (attraction) => {
    activeAttractionModal.value = attraction
    document.body.style.overflow = 'hidden'
  }
  const closeAttractionModal = () => {
    activeAttractionModal.value = null
    document.body.style.overflow = ''
  }

  // ── Barangays ───────────────────────────────────────────────────────────────
  const barangaySearch = ref('')
  const barangayCategory = ref('all')

  const barangays = ref([
    { id: 1,  name: 'Gredu',           type: 'urban',        zone: 'Poblacion',           notes: 'Administrative and commercial heart, home to Panabo City Hall and Freedom Park.' },
    { id: 2,  name: 'New Pandan',      type: 'urban',        zone: 'Poblacion',           notes: 'Premier commercial district, shopping centers, banks, and academic institutions.' },
    { id: 3,  name: 'San Francisco',   type: 'urban',        zone: 'Poblacion',           notes: 'Bustling residential neighborhood with vibrant community centers and schools.' },
    { id: 4,  name: 'Sto. Niño',       type: 'urban',        zone: 'Poblacion',           notes: 'Major civic center hosting the Panabo Multi-purpose Gymnasium and health facilities.' },
    { id: 5,  name: 'San Vicente',     type: 'urban',        zone: 'Poblacion',           notes: 'Key transport convergence point with active market commerce.' },
    { id: 6,  name: 'Salvacion',       type: 'urban',        zone: 'Urban Core',          notes: 'Central business hub featuring the public market, retail shops, and commercial offices.' },
    { id: 7,  name: 'Cagangohan',      type: 'coastal',      zone: 'Coastal Zone',        notes: 'Historic maritime fishing settlement with coastal fisheries and docking.' },
    { id: 8,  name: 'San Pedro',       type: 'coastal',      zone: 'Coastal Zone',        notes: 'Eco-tourism hub featuring the famed E.C. Boardwalk and Mangrove Park.' },
    { id: 9,  name: 'J.P. Laurel',     type: 'coastal',      zone: 'Coastal Zone',        notes: 'Coastline barangay with thriving artisan fishing and mangrove reforestation belts.' },
    { id: 10, name: 'Aplaya',          type: 'coastal',      zone: 'Coastal Zone',        notes: 'Traditional beachfront fishing community overlooking the calm Davao Gulf.' },
    { id: 11, name: 'Datu Abdul Dadia',type: 'urban',        zone: 'Urban Core',          notes: 'Cultural enclave honoring indigenous Lumad and Muslim Panaboan heritage.' },
    { id: 12, name: 'Manay',           type: 'urban',        zone: 'Urban Fringe',        notes: 'Fast-developing residential subdivisions and light commercial enterprises.' },
    { id: 13, name: 'Nanyo',           type: 'urban',        zone: 'Industrial Corridor', notes: 'Agro-processing plants, export warehouses, and cold chain logistics.' },
    { id: 14, name: 'Buenavista',      type: 'agricultural', zone: 'Agri Belt',           notes: 'Lush agricultural highlands producing tropical fruits, corn, and root crops.' },
    { id: 15, name: 'Cacao',           type: 'agricultural', zone: 'Agri Belt',           notes: 'Verdant orchards cultivating high-grade cacao beans and Cavendish bananas.' },
    { id: 16, name: 'Consolacion',     type: 'agricultural', zone: 'Agri Belt',           notes: 'Fertile foothills with active agricultural cooperatives and organic vegetable farms.' },
    { id: 17, name: 'Dapco',           type: 'agricultural', zone: 'Agri Belt',           notes: 'Part of the vast Tadeco plantation ecosystem with specialized banana packaging centers.' },
    { id: 18, name: 'Kasilak',         type: 'agricultural', zone: 'Agri Belt',           notes: 'Scenic rural farming community with rice fields, coconut groves, and poultry farms.' },
    { id: 19, name: 'Katipunan',       type: 'agricultural', zone: 'Agri Belt',           notes: 'Agricultural zone prioritizing fruit seedling propagation and banana cultivation.' },
    { id: 20, name: 'Katualan',        type: 'agricultural', zone: 'Agri Belt',           notes: 'Elevated agricultural community with cool breezes and mixed tropical crop orchards.' },
    { id: 21, name: 'Kauswagan',       type: 'agricultural', zone: 'Agri Belt',           notes: 'Name means "progress"; famous for agrarian reform success and banana farming.' },
    { id: 22, name: 'Little Panay',    type: 'agricultural', zone: 'Agri Belt',           notes: 'Established agricultural settlement founded by early Ilonggo settlers in Mindanao.' },
    { id: 23, name: 'Lower Panaga',    type: 'agricultural', zone: 'Agri Belt',           notes: 'Riparian farming zone along freshwater creeks, rich in organic soil.' },
    { id: 24, name: 'Mabunao',         type: 'agricultural', zone: 'Agri Belt',           notes: 'Extensive Cavendish banana plantations and farmer cooperative facilities.' },
    { id: 25, name: 'Maduao',          type: 'agricultural', zone: 'Agri Belt',           notes: 'Flat agricultural plains with extensive irrigation and high-yield crop production.' },
    { id: 26, name: 'Malativas',       type: 'agricultural', zone: 'Agri Belt',           notes: 'Rolling terrain supporting banana plantations and coconut intercropping.' },
    { id: 27, name: 'New Malaga',      type: 'agricultural', zone: 'Agri Belt',           notes: 'Peaceful agricultural community with fruit orchards, vegetable gardens, and livestock.' },
    { id: 28, name: 'New Visayas',     type: 'agricultural', zone: 'Agri Belt',           notes: 'Productive banana farms and historical immigrant homestead settlements.' },
    { id: 29, name: 'Quezon',          type: 'agricultural', zone: 'Agri Belt',           notes: 'Upland agricultural district with scenic view decks overlooking plantation greenery.' },
    { id: 30, name: 'San Nicolas',     type: 'agricultural', zone: 'Agri Belt',           notes: 'Vibrant farming community dedicated to coconut copra, banana, and cacao.' },
    { id: 31, name: 'San Roque',       type: 'agricultural', zone: 'Agri Belt',           notes: 'Intercropped farming land with banana packing stations and barangay elementary school.' },
    { id: 32, name: 'Santa Cruz',      type: 'agricultural', zone: 'Agri Belt',           notes: 'Major agricultural plantation community with dedicated youth livelihood initiatives.' },
    { id: 33, name: 'Sindaton',        type: 'agricultural', zone: 'Agri Belt',           notes: 'Inland farming basin known for fresh vegetables, cassava, and banana crops.' },
    { id: 34, name: 'Southern Davao',  type: 'agricultural', zone: 'Agri Belt',           notes: 'Border agricultural barangay adjoining neighboring provincial municipalities.' },
    { id: 35, name: 'Tagpore',         type: 'agricultural', zone: 'Agri Belt',           notes: 'Rich alluvial soil along river systems, ideal for high-grade banana cultivation.' },
    { id: 36, name: 'Tibungol',        type: 'agricultural', zone: 'Agri Belt',           notes: 'Core banana agricultural area hosting packaging plants and agricultural science facilities.' },
    { id: 37, name: 'Upper Licanan',   type: 'agricultural', zone: 'Agri Belt',           notes: 'Southern gateway connecting Panabo to Bunawan and northern Davao City.' },
    { id: 38, name: 'Waterfall',       type: 'agricultural', zone: 'Eco-Agri',            notes: 'Named after scenic natural river cascades, popular for eco-trail excursions.' },
    { id: 39, name: 'Upper Buenavista',type: 'agricultural', zone: 'Agri Belt',           notes: 'Scenic elevated farming ridges with panoramic horizons over Davao del Norte.' },
    { id: 40, name: 'Quezon Hills',    type: 'agricultural', zone: 'Agri Belt',           notes: 'Highland community known for crisp fresh air, agro-tourism, and lush foliage.' }
  ])

  const filteredBarangays = computed(() => {
    const q = barangaySearch.value.trim().toLowerCase()
    const cat = barangayCategory.value
    return barangays.value.filter(b => {
      const matchesCategory = cat === 'all' || b.type === cat
      const matchesQuery = !q ||
        b.name.toLowerCase().includes(q) ||
        b.zone.toLowerCase().includes(q) ||
        b.notes.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  })

  // ── Barangay Modal ──────────────────────────────────────────────────────────
  const activeBarangayModal = ref(null)
  const openBarangayModal = (b) => {
    activeBarangayModal.value = b
    document.body.style.overflow = 'hidden'
  }
  const closeBarangayModal = () => {
    activeBarangayModal.value = null
    document.body.style.overflow = ''
  }

  // ── Hotlines ────────────────────────────────────────────────────────────────
  const hotlines = ref([
    { dept: 'CDRRMO Disaster & Rescue',     role: '24/7 Emergency & Rescue Team',   number: '(084) 628-8251', mobile: '0917-805-4422' },
    { dept: 'Panabo Police Station (PNP)',   role: 'Peace & Order / Crime Response', number: '(084) 628-5111', mobile: '0998-598-7243' },
    { dept: 'Bureau of Fire Protection (BFP)', role: 'Fire Emergencies & HAZMAT',   number: '(084) 628-4222', mobile: '0922-834-8777' },
    { dept: 'Panabo City Health Office',     role: 'Emergency Medical & Ambulance',  number: '(084) 822-1234', mobile: '0919-001-9110' }
  ])

  const fallbackCopyText = (text) => {
    const ta = document.createElement('textarea')
    ta.value = text
    ta.style.position = 'fixed'
    ta.style.left = '-999999px'
    document.body.appendChild(ta)
    ta.focus(); ta.select()
    try { document.execCommand('copy'); showToast(`Copied ${text}!`) }
    catch { showToast(`Hotline: ${text}`) }
    document.body.removeChild(ta)
  }

  const copyHotline = (number) => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(number)
        .then(() => showToast(`Copied hotline ${number} to clipboard!`))
        .catch(() => fallbackCopyText(number))
    } else {
      fallbackCopyText(number)
    }
  }

  // ── Trivia ──────────────────────────────────────────────────────────────────
  const triviaList = [
    'Panabo produces over 30 million boxes of Cavendish bananas each year, exported to Japan, China, the Middle East, and South Korea!',
    "The city's name originated from early indigenous hunting and fishing traditions using 'pana' (bow and arrow) along the coastal rivers of Davao Gulf.",
    "Panabo is officially recognized as the 'Banana Capital of the Philippines' due to world-record contiguous plantation yields.",
    "Banana stems in Panabo don't go to waste: master artisans extract banana abaca fibers to weave luxurious T'nalak cloth and eco-tapestries!",
    'Panabo achieved full cityhood on March 31, 2001 via Republic Act No. 9015 and now spans 40 vibrant, peaceful barangays.'
  ]
  const currentTriviaIndex = ref(0)
  const nextTrivia = () => { currentTriviaIndex.value = (currentTriviaIndex.value + 1) % triviaList.length }
  const prevTrivia = () => { currentTriviaIndex.value = (currentTriviaIndex.value - 1 + triviaList.length) % triviaList.length }

  // ── Page Routing & Government Navigation ────────────────────────────────────
  const currentPage = ref('home') // 'home' | 'government' | 'executive' | 'tourist-spots'
  const activeGovAccordion = ref(null) // 'hotlines' | 'barangays' | 'departments' | null

  const navigateTo = (page, targetSection = null) => {
    currentPage.value = page
    if (page === 'government') {
      window.location.hash = targetSection ? `government-${targetSection}` : 'government'
      if (targetSection) {
        activeGovAccordion.value = targetSection
      }
    } else if (page === 'executive') {
      window.location.hash = targetSection ? `executive-${targetSection}` : 'executive'
    } else if (page === 'tourist-spots') {
      window.location.hash = 'tourist-spots'
    } else {
      window.location.hash = targetSection ? targetSection : ''
      if (targetSection) {
        // If navigating to home section, wait a tick to ensure home is rendered then scroll
        setTimeout(() => {
          const el = document.getElementById(targetSection)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 50)
      }
    }
    if (!targetSection) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    mobileMenuOpen.value = false
  }

  const handleHashChange = () => {
    const rawHash = window.location.hash.replace(/^#\/?/, '')
    if (rawHash.startsWith('executive')) {
      currentPage.value = 'executive'
    } else if (rawHash.startsWith('tourist-spots')) {
      currentPage.value = 'tourist-spots'
    } else if (rawHash.startsWith('government') || rawHash === 'barangays' || rawHash === 'hotlines' || rawHash === 'departments') {
      currentPage.value = 'government'
      if (rawHash === 'government-hotlines' || rawHash === 'hotlines') {
        activeGovAccordion.value = 'hotlines'
      } else if (rawHash === 'government-barangays' || rawHash === 'barangays') {
        activeGovAccordion.value = 'barangays'
      } else if (rawHash === 'government-departments' || rawHash === 'departments' || rawHash === 'services') {
        activeGovAccordion.value = 'departments'
      }
    } else {
      currentPage.value = 'home'
    }
  }

  // ── Toast ───────────────────────────────────────────────────────────────────
  const toastMessage = ref(null)
  let toastTimeout = null
  const showToast = (msg) => {
    toastMessage.value = msg
    if (toastTimeout) clearTimeout(toastTimeout)
    toastTimeout = setTimeout(() => { toastMessage.value = null }, 3500)
  }

  // ── Back to Top ─────────────────────────────────────────────────────────────
  const showBackToTop = ref(false)
  const handleScroll = () => { showBackToTop.value = window.scrollY > 400 }
  const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }) }

  // ── Lifecycle ────────────────────────────────────────────────────────────────
  onMounted(() => {
    initTheme()
    updateTime()
    clockInterval = setInterval(updateTime, 1000)
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('hashchange', handleHashChange)
    handleHashChange()
    setInterval(nextTrivia, 8000)
  })

  onUnmounted(() => {
    if (clockInterval) clearInterval(clockInterval)
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('hashchange', handleHashChange)
  })

  return {
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
    toastMessage, showToast,
    showBackToTop, scrollToTop
  }
}
