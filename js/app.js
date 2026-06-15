/**
 * Aurelia Estates - Premium Luxury Real Estate Portal
 * Application JavaScript Code
 */

const defaultSiteContent = {
  brandName: "AURELIA ESTATES",
  contactPhone: "+1 (305) 555-0199",
  contactEmail: "contact@aureliaestates.com",
  contactAddress: "800 Brickell Avenue, Suite 1200, Miami, FL 33131, United States",
  whatsappPhone: "13055550199",
  googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.1895689408643!2d-80.19326162382449!3d25.76431997735398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69e46a78225%3A0xe54d92eeeb41b777!2s800%20Brickell%20Ave%2C%20Miami%2C%20FL%2033131!5e0!3m2!1sen!2sus!4v1717800000000!5m2!1sen!2sus",
  googleMapsBusinessLink: "https://www.google.com/maps/place/Google+Miami/@25.76432,-80.193262,17z",
  footerDesc: "Curating world-class luxury residences, cliffside estates, and penthouses. Offering certified titles, transparent transactions, and premier mortgage consultation advisory.",
  heroTitle: "Find Your <span>Dream</span> Property",
  heroSubtitle: "Discover our exclusive portfolio of ultra-luxury modernist villas, private penthouses, and breathtaking oceanfront estates curated for sophisticated living.",
  heroBgImage: "assets/images/hero_background.png",
  aboutPreTitle: "About Our Agency",
  aboutTitle: "Defining Luxury Living in the Luxury Market",
  aboutLead: "At Aurelia Estates, we specialize in high-end residential, private estates, and luxury investments across primary global hubs.",
  aboutDesc: "Our mission is to bring bespoke architectural marvels to discerning buyers. With a legacy of luxury advisory, we merge expert negotiations, exclusive off-market listings, and white-glove real estate marketing services under one roof.",
  aboutExpYears: "15+",
  aboutImage: "assets/images/hero_background.png",
  stat1Val: 1250,
  stat1Lbl: "Properties Sold",
  stat2Val: 950,
  stat2Lbl: "Happy Clients",
  stat3Val: 15,
  stat3Lbl: "Years Experience",
  propSectionPreTitle: "Featured Properties",
  propSectionTitle: "Our Exclusive Listings",
  propSectionSubtitle: "Browse our hand-selected selection of prime luxury properties available for acquisition and lease.",
  servicesPreTitle: "What We Offer",
  servicesTitle: "Our Real Estate Services",
  servicesSubtitle: "Providing unparalleled white-glove services to buyers, sellers, and property investors globally.",
  serv1Title: "Property Buying",
  serv1Desc: "Exclusive access to premier curated listings, off-market opportunities, and comprehensive neighborhood inspections.",
  serv2Title: "Property Selling",
  serv2Desc: "Luxury staging, 3D interactive virtual tours, high-impact marketing campaigns, and global outreach channels.",
  serv3Title: "Property Management",
  serv3Desc: "Full-service tenant management, maintenance, billing, legal compliance, and regular property appraisals.",
  serv4Title: "Investment Consulting",
  serv4Desc: "Tailored reports, financial profiling, market trend analyses, capital gain forecasting, and local tax advice.",
  serv5Title: "Mortgage Assistance",
  serv5Desc: "Connections with institutional lenders, loan package compilation support, and customized interest negotiations.",
  serv6Title: "Legal & Advisory",
  serv6Desc: "Escrow mediation, title verification audits, real estate transfer contract checks, and high-stakes legal consulting.",
  whyPreTitle: "Why Choose Us",
  whyTitle: "Redefining Property Acquisition",
  whyDesc: "We elevate the home buying and selling process by offering direct concierge services, unparalleled transparency, and direct communication.",
  whyImage: "assets/images/hero_background.png",
  whyCard1Title: "Trusted & Verified Agents",
  whyCard1Desc: "Our professional agents are fully licensed, vetted, and rank in the top percentile of luxury transactions.",
  whyCard2Title: "100% Verified Listings",
  whyCard2Desc: "We authenticate property deeds, building structural codes, and interior layouts before adding properties.",
  whyCard3Title: "Best Market Appraisals",
  whyCard3Desc: "We pull accurate MLS historic charts to guarantee your investment lines up with historical yields.",
  whyCard4Title: "24/7 Concierge Support",
  whyCard4Desc: "Speak directly to an agent or coordinate dynamic showings round-the-clock, including virtual site reviews.",
  testSectionPreTitle: "Testimonials",
  testSectionTitle: "What Our Clients Say",
  testSectionSubtitle: "Read honest reviews from home buyers and premium investors.",
  test1Name: "Eleanor Vance",
  test1Text: "\"Working with Aurelia Estates was an absolute dream. Their team secured a stunning modernist oceanfront penthouse for our family off-market. Their attention to detail, negotiation skills, and discretion were unmatched.\"",
  test1Img: "assets/images/agent_1.png",
  test2Name: "Dr. Jameson Stark",
  test2Text: "\"We utilized their commercial advisory to expand our firm's footprint. They analyzed MLS historic transaction indexes and secured our headquarters below appraisal values. Professionalism at its finest!\"",
  test2Img: "assets/images/agent_2.png",
  faqSectionPreTitle: "FAQ",
  faqSectionTitle: "Frequently Asked Questions",
  faqSectionSubtitle: "Find instant answers to common questions about luxury property acquisition.",
  faq1Q: "What documents do international buyers need to close on a luxury estate?",
  faq1A: "International buyers typically need a valid passport, proof of funds (bank statements or institutional guarantee letters), tax identification filings, and custom entity incorporation paperwork if buying under LLCs. Our legal specialists facilitate full processing.",
  faq2Q: "What is a title audit and title verification process?",
  faq2A: "A title audit involves examining historically registered deeds, property tax files, boundary surveys, and mortgage liens to confirm the seller holds 100% legal power to transfer the asset. This guarantees that your investment remains immune to third-party claims.",
  faq3Q: "Are off-market listings available for review?",
  faq3A: "Yes, a significant percent of our luxury portfolio is managed off-market due to seller privacy concerns. Please schedule an introductory call with Aurelia Sterling or Marcus Vane to access these exclusive estates.",
  faq4Q: "How does the mortgage pre-approval advisory work?",
  faq4A: "Our team packages your tax logs, credit indexes, and banking statement portfolios, directly presenting them to institutional lenders we work with to secure lower fixed interest rates.",
  footerNewsletterDesc: "Subscribe to get seasonal property catalogs, market updates, and off-market announcements."
};

document.addEventListener("DOMContentLoaded", () => {
  loadSiteContent();
  initLoader();
  initTheme();
  initNavbarScroll();
  initCounters();
  loadPropertiesFromStorage();
  initProperties();
  initComparison();
  initLiveChat();
  initContactForm();
  initScrollTop();
  initScrollReveal();
});

/* ==========================================================================
   1. LOADER SYSTEM
   ========================================================================== */
function initLoader() {
  const loader = document.getElementById("loader");
  if (loader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
      }, 600);
    });
  }
}

/* ==========================================================================
   2. DARK/LIGHT THEME SYSTEM
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "light";
  
  // Apply initial theme
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      let theme = document.documentElement.getAttribute("data-theme");
      let newTheme = theme === "dark" ? "light" : "dark";
      
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector("#theme-toggle i");
  if (icon) {
    if (theme === "dark") {
      icon.className = "fas fa-sun";
    } else {
      icon.className = "fas fa-moon";
    }
  }
}

/* ==========================================================================
   3. STICKY NAVBAR EFFECT
   ========================================================================== */
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    });
  }
}

/* ==========================================================================
   4. STATS COUNTER ANIMATION
   ========================================================================== */
function initCounters() {
  const counters = document.querySelectorAll(".counter-val");
  const speed = 200; // The lower the speed value, the faster the count

  const startCounting = (counter) => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(() => startCounting(counter), 10);
    } else {
      counter.innerText = target;
    }
  };

  // Intersection Observer to trigger when visible
  const observerOptions = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounting(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach((counter) => observer.observe(counter));
}

/* ==========================================================================
   5. PROPERTIES CATALOG & FILTERING
   ========================================================================== */
const defaultPropertiesData = [
  {
    id: 1,
    title: "The Azure Penthouse",
    price: "₹4,850,000",
    numericPrice: 4850000,
    location: "South Beach, Miami",
    beds: 4,
    baths: 4.5,
    sqft: 4200,
    type: "Luxury Homes",
    status: "Buy",
    image: "assets/images/prop_oceanfront.png",
    description: "Suspended in the sky above Miami's world-famous South Beach, this iconic oceanfront penthouse features floor-to-ceiling glass walls, book-matched Calacatta marble flooring, a custom Italian kitchen, and a private wraparound terrace offering views of the shoreline."
  },
  {
    id: 2,
    title: "Elysian Modernist Mansion",
    price: "₹8,900,000",
    numericPrice: 8900000,
    location: "Coral Gables, Florida",
    beds: 6,
    baths: 7,
    sqft: 9800,
    type: "Luxury Homes",
    status: "Buy",
    image: "assets/images/prop_mansion.png",
    description: "An architectural tour de force, this modernist mansion in exclusive Coral Gables delivers grand-scale luxury. Highlights include geometric white concrete framing, custom wood detailing, double-height ceilings, a professional chef's kitchen, custom sports car showcase garage, and a resort-style infinity pool."
  },
  {
    id: 3,
    title: "Aurelia City Penthouse",
    price: "₹8,500 / mo",
    numericPrice: 8500,
    location: "Brickell, Miami",
    beds: 3,
    baths: 3.5,
    sqft: 2800,
    type: "Luxury Homes",
    status: "Rent",
    image: "assets/images/prop_oceanfront.png",
    description: "This premium high-rise penthouse in Brickell features stunning skyline panoramas, modern furniture, automated lighting, double height glazing, and top-tier amenities including spa access, private valet, and concierge desk."
  },
  {
    id: 4,
    title: "Villa d'Azur Estate",
    price: "₹12,500,000",
    numericPrice: 12500000,
    location: "Nice, French Riviera",
    beds: 5,
    baths: 5,
    sqft: 6100,
    type: "Luxury Homes",
    status: "Buy",
    image: "assets/images/prop_estate.png",
    description: "Nestled on a cliffside overlooking the Mediterranean, this classic French Riviera estate is a masterpiece of timeless design. Features include hand-dressed stone walls, lush gardens of lavender, infinity-edge pool, and sun-drenched terraced balconies."
  },
  {
    id: 5,
    title: "Brickell Heights Townhouse",
    price: "₹4,500 / mo",
    numericPrice: 4500,
    location: "Brickell, Miami",
    beds: 3,
    baths: 3.5,
    sqft: 2600,
    type: "Residential",
    status: "Rent",
    image: "assets/images/prop_townhouse.png",
    description: "Located in the heart of Miami's financial and fashion hub, this contemporary townhouse boasts floor-to-ceiling glass panels, natural light throughout, a designer kitchen with state-of-the-art appliances, and a cozy private garden balcony."
  },
  {
    id: 6,
    title: "Prime Commercial Plaza",
    price: "₹15,000,000",
    numericPrice: 15000000,
    location: "Downtown Miami",
    beds: 0,
    baths: 8,
    sqft: 15000,
    type: "Commercial",
    status: "Buy",
    image: "assets/images/prop_mansion.png",
    description: "A state-of-the-art multi-tenant commercial plaza in a high-density zone. Features expansive office layouts, modern design, eco-friendly cooling systems, underground secure parking, and highly functional meeting areas."
  }
];

let propertiesData = [];

function loadPropertiesFromStorage() {
  const stored = localStorage.getItem("properties");
  if (stored) {
    propertiesData = JSON.parse(stored);
    // Migration check: Reset to defaults if stored properties use USD ($) symbols instead of INR (₹)
    const containsUSD = propertiesData.some(p => p.price && p.price.includes("$"));
    if (containsUSD) {
      console.log("Migrating properties storage from USD to INR default catalog...");
      if (window.customSiteConfig && window.customSiteConfig.properties) {
        propertiesData = [...window.customSiteConfig.properties];
      } else {
        propertiesData = [...defaultPropertiesData];
      }
      localStorage.setItem("properties", JSON.stringify(propertiesData));
    }
  } else {
    if (window.customSiteConfig && window.customSiteConfig.properties) {
      propertiesData = [...window.customSiteConfig.properties];
    } else {
      propertiesData = [...defaultPropertiesData];
    }
    localStorage.setItem("properties", JSON.stringify(propertiesData));
  }
}

let selectedCategory = "all";
let compareList = [];

function initProperties() {
  renderProperties(propertiesData);
  setupFilterTabs();
  setupSearchForm();
}

function renderProperties(properties) {
  const grid = document.getElementById("properties-grid");
  if (!grid) return;

  if (properties.length === 0) {
    grid.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="fas fa-search-minus fa-3x text-muted mb-3"></i>
        <h4 class="text-secondary">No matching properties found</h4>
        <p class="text-muted">Adjust your search parameters and try again.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = properties.map(prop => {
    const isCompared = compareList.some(item => item.id === prop.id);
    return `
      <div class="col-lg-4 col-md-6 mb-4 filter-item fade-up">
        <div class="property-card">
          <div class="property-img-container">
            <span class="property-badge">${prop.status === "Buy" ? "For Sale" : "For Rent"}</span>
            <div class="property-compare-check" onclick="event.stopPropagation();">
              <input type="checkbox" id="compare-check-${prop.id}" ${isCompared ? 'checked' : ''} onchange="toggleCompare(${prop.id})">
              <label for="compare-check-${prop.id}">Compare</label>
            </div>
            <img src="${prop.image}" alt="${prop.title}" loading="lazy">
            <span class="property-price">${prop.price}</span>
          </div>
          <div class="property-details">
            <div class="property-type">${prop.type}</div>
            <h3 class="property-title">${prop.title}</h3>
            <div class="property-location"><i class="fas fa-map-marker-alt"></i> ${prop.location}</div>
            <div class="property-specs">
              <div class="spec-item"><i class="fas fa-bed"></i> ${prop.beds ? prop.beds + ' Beds' : 'N/A'}</div>
              <div class="spec-item"><i class="fas fa-bath"></i> ${prop.baths ? prop.baths + ' Baths' : 'N/A'}</div>
              <div class="spec-item"><i class="fas fa-ruler-combined"></i> ${prop.sqft.toLocaleString()} Sq Ft</div>
            </div>
            <button class="btn btn-outline-gold w-100 btn-sm" onclick="viewPropertyDetails(${prop.id})">View Details</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Stagger entry animations for properties grid
  setTimeout(() => {
    const items = grid.querySelectorAll(".filter-item");
    items.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.08}s`;
      item.classList.add("active");
    });
  }, 50);
}

function setupFilterTabs() {
  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      selectedCategory = tab.getAttribute("data-filter");
      filterCatalog();
    });
  });
}

function setupSearchForm() {
  const searchBtn = document.getElementById("hero-search-btn");
  if (searchBtn) {
    searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      filterCatalog();
      // Smooth scroll to results
      const section = document.getElementById("featured-properties");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}

function filterCatalog() {
  // Get inputs
  const keyword = document.getElementById("search-keyword")?.value.toLowerCase() || "";
  const type = document.getElementById("search-type")?.value || "all";
  const price = document.getElementById("search-price")?.value || "all";
  const beds = document.getElementById("search-beds")?.value || "all";
  const baths = document.getElementById("search-baths")?.value || "all";

  const filtered = propertiesData.filter(prop => {
    // 1. Quick Tabs
    if (selectedCategory !== "all") {
      if (selectedCategory === "buy" && prop.status !== "Buy") return false;
      if (selectedCategory === "rent" && prop.status !== "Rent") return false;
      if (selectedCategory === "commercial" && prop.type !== "Commercial") return false;
      if (selectedCategory === "luxury" && prop.type !== "Luxury Homes") return false;
    }

    // 2. Location Keyword
    if (keyword && !prop.location.toLowerCase().includes(keyword) && !prop.title.toLowerCase().includes(keyword)) return false;

    // 3. Property Type
    if (type !== "all" && prop.type.toLowerCase() !== type.toLowerCase()) return false;

    // 4. Price Ranges
    if (price !== "all") {
      const numericPrice = prop.numericPrice;
      if (price === "under-500k" && numericPrice >= 500000) return false;
      if (price === "500k-1m" && (numericPrice < 500000 || numericPrice > 1000000)) return false;
      if (price === "1m-5m" && (numericPrice < 1000000 || numericPrice > 5000000)) return false;
      if (price === "over-5m" && numericPrice <= 5000000) return false;
    }

    // 5. Bedrooms
    if (beds !== "all") {
      if (parseInt(beds) === 4 && prop.beds < 4) return false;
      if (parseInt(beds) !== 4 && prop.beds !== parseInt(beds)) return false;
    }

    // 6. Bathrooms
    if (baths !== "all") {
      if (parseInt(baths) === 3 && prop.baths < 3) return false;
      if (parseInt(baths) !== 3 && prop.baths !== parseInt(baths)) return false;
    }

    return true;
  });

  renderProperties(filtered);
}

/* ==========================================================================
   6. PROPERTY DETAILS MODAL
   ========================================================================== */
window.viewPropertyDetails = function(id) {
  const prop = propertiesData.find(p => p.id === id);
  if (!prop) return;

  window.activeInquiryPropertyTitle = prop.title;

  const modalEl = document.getElementById("propertyDetailModal");
  if (!modalEl) return;

  const modalBody = modalEl.querySelector(".modal-body");
  if (modalBody) {
    modalBody.innerHTML = `
      <div class="row">
        <div class="col-md-7">
          <div id="modalPropertyCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner rounded">
              <div class="carousel-item active">
                <img src="${prop.image}" class="d-block w-100" style="height: 400px; object-fit: cover;" alt="${prop.title}">
              </div>
              <div class="carousel-item">
                <img src="assets/images/hero_background.png" class="d-block w-100" style="height: 400px; object-fit: cover;" alt="Interior View">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#modalPropertyCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#modalPropertyCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <h3 class="mt-4 mb-2 font-heading">${prop.title}</h3>
          <p class="text-gold fw-bold mb-3" style="font-size: 1.5rem;">${prop.price}</p>
          <p class="text-muted"><i class="fas fa-map-marker-alt text-gold"></i> ${prop.location}</p>
          <hr>
          <h5 class="font-heading">Property Description</h5>
          <p style="line-height: 1.6;">${prop.description}</p>
        </div>
        
        <div class="col-md-5">
          <div class="card p-4 border-0 bg-light-custom" style="background-color: var(--bg-secondary); border: 1px solid var(--border-color) !important;">
            <h5 class="mb-4 font-heading text-gold">Key Features</h5>
            <ul class="list-unstyled mb-4">
              <li class="d-flex justify-content-between py-2 border-bottom">
                <span class="text-secondary"><i class="fas fa-home text-gold me-2"></i> Type:</span>
                <span class="fw-bold">${prop.type}</span>
              </li>
              <li class="d-flex justify-content-between py-2 border-bottom">
                <span class="text-secondary"><i class="fas fa-bed text-gold me-2"></i> Bedrooms:</span>
                <span class="fw-bold">${prop.beds || 'N/A'}</span>
              </li>
              <li class="d-flex justify-content-between py-2 border-bottom">
                <span class="text-secondary"><i class="fas fa-bath text-gold me-2"></i> Bathrooms:</span>
                <span class="fw-bold">${prop.baths || 'N/A'}</span>
              </li>
              <li class="d-flex justify-content-between py-2 border-bottom">
                <span class="text-secondary"><i class="fas fa-ruler-combined text-gold me-2"></i> Lot Area:</span>
                <span class="fw-bold">${prop.sqft.toLocaleString()} Sq Ft</span>
              </li>
              <li class="d-flex justify-content-between py-2">
                <span class="text-secondary"><i class="fas fa-check-circle text-gold me-2"></i> Status:</span>
                <span class="fw-bold text-success">${prop.status === "Buy" ? "For Sale" : "For Lease"}</span>
              </li>
            </ul>
            
            <h5 class="mb-3 font-heading">Inquire About Property</h5>
            <form id="inquiryForm" onsubmit="handleInquirySubmit(event)">
              <div class="mb-3">
                <input type="text" class="form-control form-control-sm" placeholder="Your Name" required>
              </div>
              <div class="mb-3">
                <input type="email" class="form-control form-control-sm" placeholder="Your Email" required>
              </div>
              <div class="mb-3">
                <textarea class="form-control form-control-sm" rows="3" placeholder="I am interested in this property..." required></textarea>
              </div>
              <button type="submit" class="btn btn-gold btn-sm w-100">Send Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    `;
  }

  // Show bootstrap modal
  const bsModal = new bootstrap.Modal(modalEl);
  bsModal.show();
}

window.handleInquirySubmit = function(event) {
  event.preventDefault();
  
  const form = event.target;
  const name = form.querySelector('input[placeholder="Your Name"]').value.trim();
  const email = form.querySelector('input[placeholder="Your Email"]').value.trim();
  const message = form.querySelector('textarea').value.trim();
  
  saveInquiry(name, email, `Property Inquiry - ${window.activeInquiryPropertyTitle || 'General'}`, message, window.activeInquiryPropertyTitle || 'General');
  
  alert("Inquiry successfully logged! Our private agent will contact you shortly.");
  form.reset();
  
  // Close the modal programmatically
  const modalEl = document.getElementById("propertyDetailModal");
  const bsModal = bootstrap.Modal.getInstance(modalEl);
  if (bsModal) {
    bsModal.hide();
  }
}

/* ==========================================================================
   7. PROPERTY COMPARISON SYSTEM
   ========================================================================== */
function initComparison() {
  const compareBtn = document.getElementById("compare-trigger-btn");
  if (compareBtn) {
    compareBtn.addEventListener("click", () => {
      openComparisonModal();
    });
  }
  
  const launchCompareBtn = document.getElementById("launch-compare-btn");
  if (launchCompareBtn) {
    launchCompareBtn.addEventListener("click", () => {
      openComparisonModal();
    });
  }
}

window.toggleCompare = function(id) {
  const prop = propertiesData.find(p => p.id === id);
  if (!prop) return;

  const idx = compareList.findIndex(item => item.id === id);
  if (idx > -1) {
    // Remove it
    compareList.splice(idx, 1);
  } else {
    // Add it (limit to 3)
    if (compareList.length >= 3) {
      alert("You can compare up to 3 properties at a time.");
      // Uncheck the checkbox
      const chk = document.getElementById(`compare-check-${id}`);
      if (chk) chk.checked = false;
      return;
    }
    compareList.push(prop);
  }

  updateComparisonUI();
}

function updateComparisonUI() {
  // Update badge counts
  const badgeCounts = document.querySelectorAll(".compare-count");
  badgeCounts.forEach(bc => {
    bc.innerText = compareList.length;
  });

  const tray = document.getElementById("compare-tray");
  const listContainer = document.getElementById("compare-tray-list");

  if (!tray || !listContainer) return;

  if (compareList.length > 0) {
    tray.classList.add("show");
    
    listContainer.innerHTML = compareList.map(prop => `
      <div class="compare-tray-item">
        <span>${prop.title}</span>
        <span class="remove" onclick="removeCompare(${prop.id})">&times;</span>
      </div>
    `).join('');
  } else {
    tray.classList.remove("show");
  }
}

window.removeCompare = function(id) {
  compareList = compareList.filter(item => item.id !== id);
  
  // Uncheck corresponding checkbox in the grid if rendered
  const chk = document.getElementById(`compare-check-${id}`);
  if (chk) chk.checked = false;

  updateComparisonUI();
}

function openComparisonModal() {
  if (compareList.length < 2) {
    alert("Please select at least 2 properties to compare.");
    return;
  }

  const modalEl = document.getElementById("comparisonModal");
  if (!modalEl) return;

  const tableBody = document.getElementById("comparison-table-body");
  if (tableBody) {
    // Generate Rows dynamically
    const fields = [
      { label: "Image", key: "image", isImage: true },
      { label: "Title", key: "title" },
      { label: "Price", key: "price" },
      { label: "Location", key: "location" },
      { label: "Property Type", key: "type" },
      { label: "Bedrooms", key: "beds" },
      { label: "Bathrooms", key: "baths" },
      { label: "Area (Sq Ft)", key: "sqft" },
    ];

    tableBody.innerHTML = fields.map(field => {
      let rowHtml = `<tr><td class="fw-bold bg-light" style="width: 200px; text-align: left;">${field.label}</td>`;
      
      compareList.forEach(prop => {
        if (field.isImage) {
          rowHtml += `<td><img src="${prop[field.key]}" alt="${prop.title}" class="compare-modal-img"></td>`;
        } else if (field.key === "sqft") {
          rowHtml += `<td>${prop[field.key].toLocaleString()} Sq Ft</td>`;
        } else {
          rowHtml += `<td>${prop[field.key] !== undefined ? prop[field.key] : 'N/A'}</td>`;
        }
      });

      // Fill empty columns if less than 3 properties compared
      for (let i = compareList.length; i < 3; i++) {
        rowHtml += `<td>-</td>`;
      }

      rowHtml += `</tr>`;
      return rowHtml;
    }).join('');

    // Set headers
    const headerRow = document.getElementById("comparison-headers");
    if (headerRow) {
      headerRow.innerHTML = `
        <th style="width: 200px; text-align: left;">Feature</th>
        ${compareList.map(prop => `<th>${prop.title}</th>`).join('')}
        ${Array.from({ length: 3 - compareList.length }).map(() => `<th>Empty Slot</th>`).join('')}
      `;
    }
  }

  const bsModal = new bootstrap.Modal(modalEl);
  bsModal.show();
}



/* ==========================================================================
   9. LIVE CHAT WIDGET SYSTEM
   ========================================================================== */
function initLiveChat() {
  const bubble = document.getElementById("chat-bubble");
  const drawer = document.getElementById("chat-drawer");
  const closeBtn = document.getElementById("chat-close-btn");
  const sendBtn = document.getElementById("chat-send-btn");
  const input = document.getElementById("chat-input");
  const body = document.getElementById("chat-body");

  if (!bubble || !drawer) return;

  // Toggle drawer open
  bubble.addEventListener("click", () => {
    drawer.classList.toggle("open");
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      drawer.classList.remove("open");
    });
  }

  // Handle Send Button click
  if (sendBtn && input) {
    sendBtn.addEventListener("click", () => {
      sendUserMessage();
    });

    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendUserMessage();
      }
    });
  }

  // Handle Quick Replies
  const quickReplies = document.querySelectorAll(".chat-quick-btn");
  quickReplies.forEach(btn => {
    btn.addEventListener("click", () => {
      const text = btn.innerText;
      addUserMessage(text);
      
      // Auto reply logic
      showTypingIndicator();
      setTimeout(() => {
        let reply = "";
        if (text.includes("Schedule a Viewing")) {
          reply = "I'd love to help you schedule a viewing. Could you let me know which property you are interested in? Also, what date and time works best for you?";
        } else if (text.includes("Property Availability")) {
          reply = "All properties listed on our website are currently active! Let me know if you want to request brochures or reserve a showing for properties like The Azure Penthouse or Villa d'Azur.";
        } else if (text.includes("Request Callback")) {
          reply = "Sure! Please drop your contact number and preferred time to call. One of our senior luxury consultants will call you within 15 minutes.";
        }
        removeTypingIndicator();
        addAgentMessage(reply);
      }, 1000);
    });
  });
}

function sendUserMessage() {
  const input = document.getElementById("chat-input");
  if (!input) return;
  const msg = input.value.trim();
  if (!msg) return;

  addUserMessage(msg);
  input.value = "";

  showTypingIndicator();
  
  // Generic responsive bot behavior
  setTimeout(() => {
    removeTypingIndicator();
    let reply = "Thank you for reaching out! Your message has been logged. Let me know if you would like me to connect you with our live luxury real estate advisor immediately.";
    addAgentMessage(reply);
  }, 1200);
}

function addUserMessage(text) {
  const body = document.getElementById("chat-body");
  if (!body) return;

  const msgDiv = document.createElement("div");
  msgDiv.className = "chat-msg sent";
  msgDiv.innerText = text;
  body.appendChild(msgDiv);
  body.scrollTop = body.scrollHeight;
}

function addAgentMessage(text) {
  const body = document.getElementById("chat-body");
  if (!body) return;

  const msgDiv = document.createElement("div");
  msgDiv.className = "chat-msg received";
  msgDiv.innerText = text;
  body.appendChild(msgDiv);
  body.scrollTop = body.scrollHeight;
}

function showTypingIndicator() {
  const body = document.getElementById("chat-body");
  if (!body) return;

  const indicator = document.createElement("div");
  indicator.className = "chat-msg received typing-indicator-msg";
  indicator.id = "chat-typing-indicator";
  indicator.innerHTML = `<span class="spinner-grow spinner-grow-sm text-gold" role="status"></span> Typing...`;
  body.appendChild(indicator);
  body.scrollTop = body.scrollHeight;
}

function removeTypingIndicator() {
  const ind = document.getElementById("chat-typing-indicator");
  if (ind) {
    ind.remove();
  }
}

/* ==========================================================================
   10. CONTACT FORM VALIDATION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("siteContactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      // Simple custom validation feedback
      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const subject = document.getElementById("contact-subject").value.trim();
      const message = document.getElementById("contact-message").value.trim();

      if (!name || !email || !subject || !message) {
        alert("Please fill in all required fields.");
        return;
      }

      // Save Inquiry to local storage
      saveInquiry(name, email, subject, message, "General Desk");

      // Successful simulated submit
      alert(`Thank you, ${name}! Your inquiry has been logged successfully. We will get in touch at ${email}.`);
      form.reset();
    });
  }

  // Newsletter signup
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector("input[type='email']");
      if (emailInput && emailInput.value) {
        alert(`Thank you for subscribing to Aurelia Insights! A verification email has been sent to ${emailInput.value}.`);
        newsletterForm.reset();
      }
    });
  }
}

/* ==========================================================================
   11. SCROLL TO TOP SYSTEM
   ========================================================================== */
function initScrollTop() {
  const btn = document.getElementById("scroll-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* ==========================================================================
   12. ADMIN INQUIRIES DESK LOGIC
   ========================================================================== */
window.saveInquiry = function(name, email, subject, message, propertyTitle) {
  const inquiries = JSON.parse(localStorage.getItem("inquiries")) || [];
  const newInquiry = {
    id: Date.now(),
    name: name,
    email: email,
    subject: subject,
    message: message,
    propertyTitle: propertyTitle || "General",
    date: new Date().toLocaleString()
  };
  inquiries.push(newInquiry);
  localStorage.setItem("inquiries", JSON.stringify(inquiries));
}

window.openAdminDesk = function(event) {
  if (event) event.preventDefault();
  
  renderAdminInquiries();
  
  const modalEl = document.getElementById("adminDeskModal");
  if (modalEl) {
    const bsModal = new bootstrap.Modal(modalEl);
    bsModal.show();
  }
}

function renderAdminInquiries() {
  const tableBody = document.getElementById("admin-inquiries-table-body");
  const emptyState = document.getElementById("admin-empty-state");
  const countSpan = document.getElementById("admin-inquiry-count");
  
  if (!tableBody) return;
  
  const inquiries = JSON.parse(localStorage.getItem("inquiries")) || [];
  countSpan.innerText = inquiries.length;
  
  if (inquiries.length === 0) {
    tableBody.innerHTML = "";
    emptyState.classList.remove("d-none");
    return;
  }
  
  emptyState.classList.add("d-none");
  tableBody.innerHTML = inquiries.map(inq => `
    <tr>
      <td style="font-size: 0.8rem; white-space: nowrap;">${inq.date}</td>
      <td>
        <div class="fw-bold">${inq.name}</div>
        <div class="text-muted" style="font-size: 0.8rem;">${inq.email}</div>
      </td>
      <td>
        <span class="badge bg-navy text-gold border border-gold-light" style="background-color: var(--bg-navy) !important; color: var(--gold); border-color: var(--gold-light) !important;">${inq.propertyTitle}</span>
        <div class="fw-semibold mt-1" style="font-size: 0.85rem;">${inq.subject}</div>
      </td>
      <td style="font-size: 0.85rem; max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${inq.message}">
        ${inq.message}
      </td>
      <td>
        <button class="btn btn-outline-danger btn-xs" onclick="deleteInquiry(${inq.id})"><i class="fas fa-trash"></i></button>
      </td>
    </tr>
  `).join('');
}

window.deleteInquiry = function(id) {
  let inquiries = JSON.parse(localStorage.getItem("inquiries")) || [];
  inquiries = inquiries.filter(inq => inq.id !== id);
  localStorage.setItem("inquiries", JSON.stringify(inquiries));
  renderAdminInquiries();
}

window.clearAllInquiries = function() {
  if (confirm("Are you sure you want to clear all inquiries?")) {
    localStorage.removeItem("inquiries");
    renderAdminInquiries();
  }
}

window.exportInquiriesCSV = function() {
  const inquiries = JSON.parse(localStorage.getItem("inquiries")) || [];
  if (inquiries.length === 0) {
    alert("No inquiries available to export.");
    return;
  }
  
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Date,Client Name,Client Email,Property/Context,Subject,Message\n";
  
  inquiries.forEach(inq => {
    const row = [
      `"${inq.date}"`,
      `"${inq.name.replace(/"/g, '""')}"`,
      `"${inq.email.replace(/"/g, '""')}"`,
      `"${inq.propertyTitle.replace(/"/g, '""')}"`,
      `"${inq.subject.replace(/"/g, '""')}"`,
      `"${inq.message.replace(/"/g, '""')}"`
    ].join(",");
    csvContent += row + "\n";
  });
  
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `Aurelia_Estates_Inquiries_${Date.now()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/* ==========================================================================
   13. ADMIN PROPERTIES MANAGEMENT DESK
   ========================================================================== */
window.renderAdminProperties = function() {
  const tableBody = document.getElementById("admin-properties-table-body");
  const countSpan = document.getElementById("admin-property-count");
  if (!tableBody) return;

  countSpan.innerText = propertiesData.length;

  tableBody.innerHTML = propertiesData.map(prop => `
    <tr>
      <td>
        <div class="d-flex align-items-center gap-2">
          <img src="${prop.image}" alt="${prop.title}" class="rounded" style="width: 40px; height: 30px; object-fit: cover;">
          <div class="fw-bold" style="font-size: 0.85rem;">${prop.title}</div>
        </div>
      </td>
      <td style="font-size: 0.85rem;">${prop.location}</td>
      <td style="font-size: 0.8rem;"><span class="badge bg-secondary">${prop.type}</span></td>
      <td style="font-size: 0.8rem;"><span class="badge bg-navy text-gold" style="background-color: var(--bg-navy) !important; color: var(--gold); border-color: var(--gold-light) !important;">${prop.status === 'Buy' ? 'For Sale' : 'For Rent'}</span></td>
      <td class="fw-semibold text-gold" style="font-size: 0.85rem;">${prop.price}</td>
      <td>
        <div class="d-flex gap-1">
          <button class="btn btn-outline-gold btn-xs" onclick="editProperty(${prop.id})"><i class="fas fa-edit"></i></button>
          <button class="btn btn-outline-danger btn-xs" onclick="deleteProperty(${prop.id})"><i class="fas fa-trash"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
}

window.showPropertyForm = function() {
  document.getElementById("property-list-container").classList.add("d-none");
  document.getElementById("property-form-container").classList.remove("d-none");
  document.getElementById("property-form-title").innerText = "Add New Property";
  document.getElementById("adminPropertyForm").reset();
  document.getElementById("edit-property-id").value = "";
  
  // Reset photo sources to preset by default
  document.getElementById("sourcePreset").checked = true;
  document.getElementById("prop-custom-image-base64").value = "";
  togglePhotoSource();
}

window.hidePropertyForm = function() {
  document.getElementById("property-list-container").classList.remove("d-none");
  document.getElementById("property-form-container").classList.add("d-none");
}

window.editProperty = function(id) {
  const prop = propertiesData.find(p => p.id === id);
  if (!prop) return;

  document.getElementById("property-list-container").classList.add("d-none");
  document.getElementById("property-form-container").classList.remove("d-none");
  document.getElementById("property-form-title").innerText = "Edit Property Information";

  document.getElementById("edit-property-id").value = prop.id;
  document.getElementById("prop-title").value = prop.title;
  document.getElementById("prop-location").value = prop.location;
  document.getElementById("prop-price").value = prop.price;
  document.getElementById("prop-numeric-price").value = prop.numericPrice;
  document.getElementById("prop-type").value = prop.type;
  document.getElementById("prop-status").value = prop.status;
  
  // Detect if image is custom upload or preset
  if (prop.image.startsWith("data:image/")) {
    document.getElementById("sourceUpload").checked = true;
    document.getElementById("prop-custom-image-base64").value = prop.image;
    document.getElementById("prop-preset-image").value = "assets/images/prop_oceanfront.png"; // default option fallback
  } else {
    document.getElementById("sourcePreset").checked = true;
    document.getElementById("prop-preset-image").value = prop.image;
    document.getElementById("prop-custom-image-base64").value = "";
  }
  togglePhotoSource();

  document.getElementById("prop-beds").value = prop.beds;
  document.getElementById("prop-baths").value = prop.baths;
  document.getElementById("prop-sqft").value = prop.sqft;
  document.getElementById("prop-desc").value = prop.description;
}

window.deleteProperty = function(id) {
  if (confirm("Are you sure you want to delete this property? This will remove it from the home page listings immediately.")) {
    propertiesData = propertiesData.filter(p => p.id !== id);
    localStorage.setItem("properties", JSON.stringify(propertiesData));
    
    // Refresh views
    renderAdminProperties();
    renderProperties(propertiesData); // refresh main grid
    alert("Property deleted successfully.");
  }
}

window.handlePropertyFormSubmit = function(event) {
  event.preventDefault();
  
  const idVal = document.getElementById("edit-property-id").value;
  const title = document.getElementById("prop-title").value.trim();
  const location = document.getElementById("prop-location").value.trim();
  const price = document.getElementById("prop-price").value.trim();
  const numericPrice = parseInt(document.getElementById("prop-numeric-price").value);
  const type = document.getElementById("prop-type").value;
  const status = document.getElementById("prop-status").value;
  
  // Determine active photo selection
  let image = "";
  const isPreset = document.getElementById("sourcePreset").checked;
  if (isPreset) {
    image = document.getElementById("prop-preset-image").value;
  } else {
    image = document.getElementById("prop-custom-image-base64").value;
    if (!image) {
      alert("Please choose a file to upload or select a preset photo.");
      return;
    }
  }

  const beds = parseInt(document.getElementById("prop-beds").value);
  const baths = parseFloat(document.getElementById("prop-baths").value);
  const sqft = parseInt(document.getElementById("prop-sqft").value);
  const description = document.getElementById("prop-desc").value.trim();

  if (idVal) {
    // Edit existing property
    const id = parseInt(idVal);
    const propIdx = propertiesData.findIndex(p => p.id === id);
    if (propIdx > -1) {
      propertiesData[propIdx] = {
        id, title, location, price, numericPrice, type, status, image, beds, baths, sqft, description
      };
      alert("Property updated successfully!");
    }
  } else {
    // Create new property
    const newProp = {
      id: Date.now(),
      title, location, price, numericPrice, type, status, image, beds, baths, sqft, description
    };
    propertiesData.push(newProp);
    alert("New property added successfully!");
  }

  // Save changes to localStorage
  localStorage.setItem("properties", JSON.stringify(propertiesData));
  
  // Refresh views
  hidePropertyForm();
  renderAdminProperties();
  renderProperties(propertiesData); // refresh main grid
}

window.togglePhotoSource = function() {
  const isPreset = document.getElementById("sourcePreset").checked;
  const presetSelect = document.getElementById("prop-preset-image");
  const fileInput = document.getElementById("prop-upload-image");

  if (isPreset) {
    presetSelect.classList.remove("d-none");
    fileInput.classList.add("d-none");
  } else {
    presetSelect.classList.add("d-none");
    fileInput.classList.remove("d-none");
  }
}

window.handleImageUpload = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById("prop-custom-image-base64").value = e.target.result;
  };
  reader.readAsDataURL(file);
}

/* ==========================================================================
   14. DYNAMIC WEBSITE CONTENT EDITOR (CMS)
   ========================================================================== */
window.loadSiteContent = function() {
  let content = null;
  const stored = localStorage.getItem("siteContent");
  if (stored) {
    content = JSON.parse(stored);
  } else if (window.customSiteConfig && window.customSiteConfig.siteContent) {
    content = window.customSiteConfig.siteContent;
    localStorage.setItem("siteContent", JSON.stringify(content));
  } else {
    content = defaultSiteContent;
  }
  
  const formatBrandName = (name) => {
    const words = name.trim().split(" ");
    if (words.length > 1) {
      const lastWord = words.pop();
      return `${words.join(" ")} <span>${lastWord}</span>`;
    }
    return name;
  };
  
  const navBrand = document.getElementById("navbar-brand-logo");
  if (navBrand) {
    navBrand.innerHTML = `<i class="fas fa-gem text-gold"></i> ${formatBrandName(content.brandName)}`;
  }
  const footerBrand = document.getElementById("footer-brand-logo");
  if (footerBrand) {
    footerBrand.innerHTML = `<i class="fas fa-gem text-gold"></i> ${formatBrandName(content.brandName)}`;
  }
  
  document.title = `${content.brandName} | Find Your Dream Luxury Property`;
  
  const contactPhone = document.getElementById("contact-phone");
  if (contactPhone) contactPhone.innerText = content.contactPhone;
  const contactEmail = document.getElementById("contact-email");
  if (contactEmail) contactEmail.innerText = content.contactEmail;
  const contactAddress = document.getElementById("contact-address");
  if (contactAddress) contactAddress.innerText = content.contactAddress;
  
  const waBtn = document.getElementById("contact-whatsapp-btn");
  if (waBtn) {
    waBtn.href = `https://wa.me/${content.whatsappPhone.replace(/\D/g, "")}`;
  }
  
  const mapIframe = document.getElementById("contact-map-iframe");
  if (mapIframe) {
    mapIframe.src = content.googleMapsUrl;
  }
  
  const footerDesc = document.getElementById("footer-desc");
  if (footerDesc) footerDesc.innerText = content.footerDesc;
  
  const heroTitle = document.getElementById("hero-title");
  if (heroTitle) heroTitle.innerHTML = content.heroTitle;
  const heroSubtitle = document.getElementById("hero-subtitle");
  if (heroSubtitle) heroSubtitle.innerText = content.heroSubtitle;
  const heroHeader = document.getElementById("hero-header");
  if (heroHeader) {
    heroHeader.style.backgroundImage = `url('${content.heroBgImage}')`;
  }
  
  const aboutPreTitle = document.getElementById("about-pre-title");
  if (aboutPreTitle) aboutPreTitle.innerText = content.aboutPreTitle;
  const aboutTitle = document.getElementById("about-title");
  if (aboutTitle) aboutTitle.innerText = content.aboutTitle;
  const aboutLead = document.getElementById("about-lead");
  if (aboutLead) aboutLead.innerText = content.aboutLead;
  const aboutDesc = document.getElementById("about-desc");
  if (aboutDesc) aboutDesc.innerText = content.aboutDesc;
  const aboutExpYears = document.getElementById("about-exp-years");
  if (aboutExpYears) aboutExpYears.innerText = content.aboutExpYears;
  const aboutImg = document.getElementById("about-img");
  if (aboutImg) aboutImg.src = content.aboutImage;
  
  const stat1Val = document.getElementById("about-stat-1-val");
  if (stat1Val) stat1Val.setAttribute("data-target", content.stat1Val);
  const stat1Lbl = document.getElementById("about-stat-1-label");
  if (stat1Lbl) stat1Lbl.innerText = content.stat1Lbl;
  
  const stat2Val = document.getElementById("about-stat-2-val");
  if (stat2Val) stat2Val.setAttribute("data-target", content.stat2Val);
  const stat2Lbl = document.getElementById("about-stat-2-label");
  if (stat2Lbl) stat2Lbl.innerText = content.stat2Lbl;
  
  const stat3Val = document.getElementById("about-stat-3-val");
  if (stat3Val) stat3Val.setAttribute("data-target", content.stat3Val);
  const stat3Lbl = document.getElementById("about-stat-3-label");
  if (stat3Lbl) stat3Lbl.innerText = content.stat3Lbl;
  
  const propSectionPreTitle = document.getElementById("prop-section-pre-title");
  if (propSectionPreTitle) propSectionPreTitle.innerText = content.propSectionPreTitle;
  const propSectionTitle = document.getElementById("prop-section-title");
  if (propSectionTitle) propSectionTitle.innerText = content.propSectionTitle;
  const propSectionSubtitle = document.getElementById("prop-section-subtitle");
  if (propSectionSubtitle) propSectionSubtitle.innerText = content.propSectionSubtitle;

  const servicesPreTitle = document.getElementById("services-pre-title");
  if (servicesPreTitle) servicesPreTitle.innerText = content.servicesPreTitle;
  const servicesTitle = document.getElementById("services-title");
  if (servicesTitle) servicesTitle.innerText = content.servicesTitle;
  const servicesSubtitle = document.getElementById("services-subtitle");
  if (servicesSubtitle) servicesSubtitle.innerText = content.servicesSubtitle;
  
  for (let i = 1; i <= 6; i++) {
    const servTitle = document.getElementById(`service-${i}-title`);
    if (servTitle) servTitle.innerText = content[`serv${i}Title`];
    const servDesc = document.getElementById(`service-${i}-desc`);
    if (servDesc) servDesc.innerText = content[`serv${i}Desc`];
  }

  const whyPreTitle = document.getElementById("why-pre-title");
  if (whyPreTitle) whyPreTitle.innerText = content.whyPreTitle;
  const whyTitle = document.getElementById("why-title");
  if (whyTitle) whyTitle.innerText = content.whyTitle;
  const whyDesc = document.getElementById("why-desc");
  if (whyDesc) whyDesc.innerText = content.whyDesc;
  const whyImg = document.getElementById("why-img");
  if (whyImg) whyImg.src = content.whyImage;
  
  for (let i = 1; i <= 4; i++) {
    const whyCardTitle = document.getElementById(`why-card-${i}-title`);
    if (whyCardTitle) whyCardTitle.innerText = content[`whyCard${i}Title`];
    const whyCardDesc = document.getElementById(`why-card-${i}-desc`);
    if (whyCardDesc) whyCardDesc.innerText = content[`whyCard${i}Desc`];
  }
  
  const reviewsSection = document.getElementById("testimonials-section");
  const businessLink = content.googleMapsBusinessLink || "";
  
  if (reviewsSection) {
    if (businessLink.trim() !== "") {
      reviewsSection.classList.remove("d-none");
      
      // Parse business name from the Google Maps link
      let businessName = content.brandName; // fallback
      try {
        if (businessLink.includes("/place/")) {
          const part = businessLink.split("/place/")[1];
          if (part) {
            const rawName = part.split("/")[0];
            if (rawName) {
              businessName = decodeURIComponent(rawName.replace(/\+/g, " "));
            }
          }
        } else if (businessLink.includes("query=")) {
          const part = businessLink.split("query=")[1];
          if (part) {
            const rawName = part.split("&")[0];
            if (rawName) {
              businessName = decodeURIComponent(rawName.replace(/\+/g, " "));
            }
          }
        }
      } catch (err) {
        console.error("Error parsing Google Maps business name:", err);
      }
      
      const testSectionPreTitle = document.getElementById("test-section-pre-title");
      if (testSectionPreTitle) testSectionPreTitle.innerText = "Google Reviews";
      
      const testSectionTitle = document.getElementById("test-section-title");
      if (testSectionTitle) {
        testSectionTitle.innerHTML = `<i class="fab fa-google text-primary me-2"></i> Client Reviews for ${businessName}`;
      }
      
      const testSectionSubtitle = document.getElementById("test-section-subtitle");
      if (testSectionSubtitle) {
        testSectionSubtitle.innerText = `Verified customer experiences imported directly from Google Maps.`;
      }

      const test1Text = document.getElementById("test-1-text");
      if (test1Text) {
        test1Text.innerHTML = `<span style="display:block; font-size:0.8rem; color:var(--gold); margin-bottom:0.5rem;"><i class="fab fa-google-plus-g"></i> Reviewed on Google</span>` + content.test1Text;
      }
      const test1Name = document.getElementById("test-1-name");
      if (test1Name) test1Name.innerText = content.test1Name;
      const test1Img = document.getElementById("test-1-img");
      if (test1Img) test1Img.src = content.test1Img;
      
      const test2Text = document.getElementById("test-2-text");
      if (test2Text) {
        test2Text.innerHTML = `<span style="display:block; font-size:0.8rem; color:var(--gold); margin-bottom:0.5rem;"><i class="fab fa-google-plus-g"></i> Reviewed on Google</span>` + content.test2Text;
      }
      const test2Name = document.getElementById("test-2-name");
      if (test2Name) test2Name.innerText = content.test2Name;
      const test2Img = document.getElementById("test-2-img");
      if (test2Img) test2Img.src = content.test2Img;

      // Add/update "Write a Google Review" button below the carousel controls
      let writeReviewContainer = document.getElementById("google-maps-write-review-btn");
      if (!writeReviewContainer) {
        const carousel = document.getElementById("testimonialCarousel");
        if (carousel) {
          writeReviewContainer = document.createElement("div");
          writeReviewContainer.id = "google-maps-write-review-btn";
          writeReviewContainer.className = "text-center mt-4";
          writeReviewContainer.innerHTML = `<a href="${businessLink}" target="_blank" class="btn btn-outline-gold"><i class="fab fa-google me-2"></i> Write a Google Review</a>`;
          carousel.parentNode.insertBefore(writeReviewContainer, carousel.nextSibling);
        }
      } else {
        writeReviewContainer.style.display = "block";
        const link = writeReviewContainer.querySelector("a");
        if (link) {
          link.href = businessLink;
          link.innerHTML = `<i class="fab fa-google me-2"></i> Write a Google Review`;
        }
      }
    } else {
      // Hide the testimonials section completely if link is empty
      reviewsSection.classList.add("d-none");
      const writeReviewContainer = document.getElementById("google-maps-write-review-btn");
      if (writeReviewContainer) {
        writeReviewContainer.style.display = "none";
      }
    }
  }

  const faqSectionPreTitle = document.getElementById("faq-section-pre-title");
  if (faqSectionPreTitle) faqSectionPreTitle.innerText = content.faqSectionPreTitle;
  const faqSectionTitle = document.getElementById("faq-section-title");
  if (faqSectionTitle) faqSectionTitle.innerText = content.faqSectionTitle;
  const faqSectionSubtitle = document.getElementById("faq-section-subtitle");
  if (faqSectionSubtitle) faqSectionSubtitle.innerText = content.faqSectionSubtitle;

  for (let i = 1; i <= 4; i++) {
    const faqQ = document.getElementById(`faq-${i}-q`);
    if (faqQ) faqQ.innerText = content[`faq${i}Q`];
    const faqA = document.getElementById(`faq-${i}-a`);
    if (faqA) faqA.innerText = content[`faq${i}A`];
  }
  
  const footerNewsletterTitle = document.getElementById("footer-newsletter-title");
  if (footerNewsletterTitle) footerNewsletterTitle.innerText = content.brandName + " Insights Newsletter";
  const footerNewsletterDesc = document.getElementById("footer-newsletter-desc");
  if (footerNewsletterDesc) footerNewsletterDesc.innerText = content.footerNewsletterDesc || "Subscribe to get seasonal property catalogs, market updates, and off-market announcements.";
};

window.renderAdminContent = function() {
  const content = JSON.parse(localStorage.getItem("siteContent")) || defaultSiteContent;
  
  document.getElementById("edit-brand-name").value = content.brandName;
  document.getElementById("edit-contact-phone").value = content.contactPhone;
  document.getElementById("edit-contact-email").value = content.contactEmail;
  document.getElementById("edit-whatsapp-phone").value = content.whatsappPhone;
  document.getElementById("edit-contact-address").value = content.contactAddress;
  document.getElementById("edit-google-maps-url").value = content.googleMapsUrl;
  document.getElementById("edit-google-maps-business-link").value = content.googleMapsBusinessLink || "";
  document.getElementById("edit-footer-desc").value = content.footerDesc;
  
  document.getElementById("edit-hero-title").value = content.heroTitle;
  document.getElementById("edit-hero-subtitle").value = content.heroSubtitle;
  
  if (content.heroBgImage.startsWith("data:image/")) {
    document.getElementById("heroBgUpload").checked = true;
    document.getElementById("edit-hero-custom-img-base64").value = content.heroBgImage;
    document.getElementById("edit-hero-preset-img").value = "assets/images/hero_background.png";
  } else {
    document.getElementById("heroBgPreset").checked = true;
    document.getElementById("edit-hero-preset-img").value = content.heroBgImage;
    document.getElementById("edit-hero-custom-img-base64").value = "";
  }
  toggleHeroBgSource();

  document.getElementById("edit-about-pre-title").value = content.aboutPreTitle;
  document.getElementById("edit-about-title").value = content.aboutTitle;
  document.getElementById("edit-about-lead").value = content.aboutLead;
  document.getElementById("edit-about-desc").value = content.aboutDesc;
  document.getElementById("edit-about-years").value = content.aboutExpYears;
  
  if (content.aboutImage.startsWith("data:image/")) {
    document.getElementById("aboutImgUpload").checked = true;
    document.getElementById("edit-about-custom-img-base64").value = content.aboutImage;
    document.getElementById("edit-about-preset-img").value = "assets/images/hero_background.png";
  } else {
    document.getElementById("aboutImgPreset").checked = true;
    document.getElementById("edit-about-preset-img").value = content.aboutImage;
    document.getElementById("edit-about-custom-img-base64").value = "";
  }
  toggleAboutImgSource();

  document.getElementById("edit-stat-1-val").value = content.stat1Val;
  document.getElementById("edit-stat-1-lbl").value = content.stat1Lbl;
  document.getElementById("edit-stat-2-val").value = content.stat2Val;
  document.getElementById("edit-stat-2-lbl").value = content.stat2Lbl;
  document.getElementById("edit-stat-3-val").value = content.stat3Val;
  document.getElementById("edit-stat-3-lbl").value = content.stat3Lbl;

  document.getElementById("edit-services-pre-title").value = content.servicesPreTitle;
  document.getElementById("edit-services-title").value = content.servicesTitle;
  document.getElementById("edit-services-subtitle").value = content.servicesSubtitle;
  
  for (let i = 1; i <= 6; i++) {
    document.getElementById(`edit-serv-${i}-title`).value = content[`serv${i}Title`];
    document.getElementById(`edit-serv-${i}-desc`).value = content[`serv${i}Desc`];
  }

  document.getElementById("edit-why-pre-title").value = content.whyPreTitle;
  document.getElementById("edit-why-title").value = content.whyTitle;
  document.getElementById("edit-why-desc").value = content.whyDesc;
  
  if (content.whyImage.startsWith("data:image/")) {
    document.getElementById("whyImgUpload").checked = true;
    document.getElementById("edit-why-custom-img-base64").value = content.whyImage;
    document.getElementById("edit-why-preset-img").value = "assets/images/hero_background.png";
  } else {
    document.getElementById("whyImgPreset").checked = true;
    document.getElementById("edit-why-preset-img").value = content.whyImage;
    document.getElementById("edit-why-custom-img-base64").value = "";
  }
  toggleWhyImgSource();

  for (let i = 1; i <= 4; i++) {
    document.getElementById(`edit-why-${i}-title`).value = content[`whyCard${i}Title`];
    document.getElementById(`edit-why-${i}-desc`).value = content[`whyCard${i}Desc`];
  }

  document.getElementById("edit-test-pre-title").value = content.testSectionPreTitle;
  document.getElementById("edit-test-title").value = content.testSectionTitle;
  document.getElementById("edit-test-subtitle").value = content.testSectionSubtitle;

  document.getElementById("edit-test-1-name").value = content.test1Name;
  document.getElementById("edit-test-1-txt").value = content.test1Text;
  if (content.test1Img.startsWith("data:image/")) {
    document.getElementById("test1Upload").checked = true;
    document.getElementById("edit-test-1-custom-img-base64").value = content.test1Img;
    document.getElementById("edit-test-1-preset-img").value = "assets/images/agent_1.png";
  } else {
    document.getElementById("test1Preset").checked = true;
    document.getElementById("edit-test-1-preset-img").value = content.test1Img;
    document.getElementById("edit-test-1-custom-img-base64").value = "";
  }
  toggleTest1ImgSource();

  document.getElementById("edit-test-2-name").value = content.test2Name;
  document.getElementById("edit-test-2-txt").value = content.test2Text;
  if (content.test2Img.startsWith("data:image/")) {
    document.getElementById("test2Upload").checked = true;
    document.getElementById("edit-test-2-custom-img-base64").value = content.test2Img;
    document.getElementById("edit-test-2-preset-img").value = "assets/images/agent_2.png";
  } else {
    document.getElementById("test2Preset").checked = true;
    document.getElementById("edit-test-2-preset-img").value = content.test2Img;
    document.getElementById("edit-test-2-custom-img-base64").value = "";
  }
  toggleTest2ImgSource();

  document.getElementById("edit-faq-pre-title").value = content.faqSectionPreTitle;
  document.getElementById("edit-faq-title").value = content.faqSectionTitle;
  document.getElementById("edit-faq-subtitle").value = content.faqSectionSubtitle;

  for (let i = 1; i <= 4; i++) {
    document.getElementById(`edit-faq-${i}-qn`).value = content[`faq${i}Q`];
    document.getElementById(`edit-faq-${i}-ans`).value = content[`faq${i}A`];
  }
};

window.toggleHeroBgSource = function() {
  const isPreset = document.getElementById("heroBgPreset").checked;
  const presetSelect = document.getElementById("edit-hero-preset-img");
  const fileInput = document.getElementById("edit-hero-upload-img");
  if (isPreset) {
    presetSelect.classList.remove("d-none");
    fileInput.classList.add("d-none");
  } else {
    presetSelect.classList.add("d-none");
    fileInput.classList.remove("d-none");
  }
}
window.toggleAboutImgSource = function() {
  const isPreset = document.getElementById("aboutImgPreset").checked;
  const presetSelect = document.getElementById("edit-about-preset-img");
  const fileInput = document.getElementById("edit-about-upload-img");
  if (isPreset) {
    presetSelect.classList.remove("d-none");
    fileInput.classList.add("d-none");
  } else {
    presetSelect.classList.add("d-none");
    fileInput.classList.remove("d-none");
  }
}
window.toggleWhyImgSource = function() {
  const isPreset = document.getElementById("whyImgPreset").checked;
  const presetSelect = document.getElementById("edit-why-preset-img");
  const fileInput = document.getElementById("edit-why-upload-img");
  if (isPreset) {
    presetSelect.classList.remove("d-none");
    fileInput.classList.add("d-none");
  } else {
    presetSelect.classList.add("d-none");
    fileInput.classList.remove("d-none");
  }
}
window.toggleTest1ImgSource = function() {
  const isPreset = document.getElementById("test1Preset").checked;
  const presetSelect = document.getElementById("edit-test-1-preset-img");
  const fileInput = document.getElementById("edit-test-1-upload-img");
  if (isPreset) {
    presetSelect.classList.remove("d-none");
    fileInput.classList.add("d-none");
  } else {
    presetSelect.classList.add("d-none");
    fileInput.classList.remove("d-none");
  }
}
window.toggleTest2ImgSource = function() {
  const isPreset = document.getElementById("test2Preset").checked;
  const presetSelect = document.getElementById("edit-test-2-preset-img");
  const fileInput = document.getElementById("edit-test-2-upload-img");
  if (isPreset) {
    presetSelect.classList.remove("d-none");
    fileInput.classList.add("d-none");
  } else {
    presetSelect.classList.add("d-none");
    fileInput.classList.remove("d-none");
  }
}

window.handleHeroImageUpload = function(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById("edit-hero-custom-img-base64").value = e.target.result;
  };
  reader.readAsDataURL(file);
}
window.handleAboutImageUpload = function(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById("edit-about-custom-img-base64").value = e.target.result;
  };
  reader.readAsDataURL(file);
}
window.handleWhyImageUpload = function(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById("edit-why-custom-img-base64").value = e.target.result;
  };
  reader.readAsDataURL(file);
}
window.handleTest1ImageUpload = function(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById("edit-test-1-custom-img-base64").value = e.target.result;
  };
  reader.readAsDataURL(file);
}
window.handleTest2ImageUpload = function(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById("edit-test-2-custom-img-base64").value = e.target.result;
  };
  reader.readAsDataURL(file);
}

window.handleContentFormSubmit = function(event) {
  event.preventDefault();
  
  let heroBgImage = "";
  if (document.getElementById("heroBgPreset").checked) {
    heroBgImage = document.getElementById("edit-hero-preset-img").value;
  } else {
    heroBgImage = document.getElementById("edit-hero-custom-img-base64").value;
    if (!heroBgImage) {
      alert("Please upload a file for the Hero background or select a preset.");
      return;
    }
  }

  let aboutImage = "";
  if (document.getElementById("aboutImgPreset").checked) {
    aboutImage = document.getElementById("edit-about-preset-img").value;
  } else {
    aboutImage = document.getElementById("edit-about-custom-img-base64").value;
    if (!aboutImage) {
      alert("Please upload a file for the About image or select a preset.");
      return;
    }
  }

  let whyImage = "";
  if (document.getElementById("whyImgPreset").checked) {
    whyImage = document.getElementById("edit-why-preset-img").value;
  } else {
    whyImage = document.getElementById("edit-why-custom-img-base64").value;
    if (!whyImage) {
      alert("Please upload a file for the Why Choose Us image or select a preset.");
      return;
    }
  }

  let test1Img = "";
  if (document.getElementById("test1Preset").checked) {
    test1Img = document.getElementById("edit-test-1-preset-img").value;
  } else {
    test1Img = document.getElementById("edit-test-1-custom-img-base64").value;
    if (!test1Img) {
      alert("Please upload a file for Testimonial 1 image or select a preset.");
      return;
    }
  }

  let test2Img = "";
  if (document.getElementById("test2Preset").checked) {
    test2Img = document.getElementById("edit-test-2-preset-img").value;
  } else {
    test2Img = document.getElementById("edit-test-2-custom-img-base64").value;
    if (!test2Img) {
      alert("Please upload a file for Testimonial 2 image or select a preset.");
      return;
    }
  }

  const updatedContent = {
    brandName: document.getElementById("edit-brand-name").value.trim(),
    contactPhone: document.getElementById("edit-contact-phone").value.trim(),
    contactEmail: document.getElementById("edit-contact-email").value.trim(),
    whatsappPhone: document.getElementById("edit-whatsapp-phone").value.trim(),
    contactAddress: document.getElementById("edit-contact-address").value.trim(),
    googleMapsUrl: document.getElementById("edit-google-maps-url").value.trim(),
    googleMapsBusinessLink: document.getElementById("edit-google-maps-business-link").value.trim(),
    footerDesc: document.getElementById("edit-footer-desc").value.trim(),
    
    heroTitle: document.getElementById("edit-hero-title").value.trim(),
    heroSubtitle: document.getElementById("edit-hero-subtitle").value.trim(),
    heroBgImage,
    
    aboutPreTitle: document.getElementById("edit-about-pre-title").value.trim(),
    aboutTitle: document.getElementById("edit-about-title").value.trim(),
    aboutLead: document.getElementById("edit-about-lead").value.trim(),
    aboutDesc: document.getElementById("edit-about-desc").value.trim(),
    aboutExpYears: document.getElementById("edit-about-years").value.trim(),
    aboutImage,
    
    stat1Val: parseInt(document.getElementById("edit-stat-1-val").value),
    stat1Lbl: document.getElementById("edit-stat-1-lbl").value.trim(),
    stat2Val: parseInt(document.getElementById("edit-stat-2-val").value),
    stat2Lbl: document.getElementById("edit-stat-2-lbl").value.trim(),
    stat3Val: parseInt(document.getElementById("edit-stat-3-val").value),
    stat3Lbl: document.getElementById("edit-stat-3-lbl").value.trim(),
    
    propSectionPreTitle: document.getElementById("edit-services-pre-title").value.trim(),
    propSectionTitle: document.getElementById("prop-section-title") ? document.getElementById("prop-section-title").innerText : "Our Exclusive Listings",
    propSectionSubtitle: document.getElementById("prop-section-subtitle") ? document.getElementById("prop-section-subtitle").innerText : "Browse our hand-selected selection of prime luxury properties...",
    
    servicesPreTitle: document.getElementById("edit-services-pre-title").value.trim(),
    servicesTitle: document.getElementById("edit-services-title").value.trim(),
    servicesSubtitle: document.getElementById("edit-services-subtitle").value.trim(),
    
    serv1Title: document.getElementById("edit-serv-1-title").value.trim(),
    serv1Desc: document.getElementById("edit-serv-1-desc").value.trim(),
    serv2Title: document.getElementById("edit-serv-2-title").value.trim(),
    serv2Desc: document.getElementById("edit-serv-2-desc").value.trim(),
    serv3Title: document.getElementById("edit-serv-3-title").value.trim(),
    serv3Desc: document.getElementById("edit-serv-3-desc").value.trim(),
    serv4Title: document.getElementById("edit-serv-4-title").value.trim(),
    serv4Desc: document.getElementById("edit-serv-4-desc").value.trim(),
    serv5Title: document.getElementById("edit-serv-5-title").value.trim(),
    serv5Desc: document.getElementById("edit-serv-5-desc").value.trim(),
    serv6Title: document.getElementById("edit-serv-6-title").value.trim(),
    serv6Desc: document.getElementById("edit-serv-6-desc").value.trim(),
    
    whyPreTitle: document.getElementById("edit-why-pre-title").value.trim(),
    whyTitle: document.getElementById("edit-why-title").value.trim(),
    whyDesc: document.getElementById("edit-why-desc").value.trim(),
    whyImage,
    
    whyCard1Title: document.getElementById("edit-why-1-title").value.trim(),
    whyCard1Desc: document.getElementById("edit-why-1-desc").value.trim(),
    whyCard2Title: document.getElementById("edit-why-2-title").value.trim(),
    whyCard2Desc: document.getElementById("edit-why-2-desc").value.trim(),
    whyCard3Title: document.getElementById("edit-why-3-title").value.trim(),
    whyCard3Desc: document.getElementById("edit-why-3-desc").value.trim(),
    whyCard4Title: document.getElementById("edit-why-4-title").value.trim(),
    whyCard4Desc: document.getElementById("edit-why-4-desc").value.trim(),
    
    testSectionPreTitle: document.getElementById("edit-test-pre-title").value.trim(),
    testSectionTitle: document.getElementById("edit-test-title").value.trim(),
    testSectionSubtitle: document.getElementById("edit-test-subtitle").value.trim(),
    
    test1Name: document.getElementById("edit-test-1-name").value.trim(),
    test1Text: document.getElementById("edit-test-1-txt").value.trim(),
    test1Img,
    
    test2Name: document.getElementById("edit-test-2-name").value.trim(),
    test2Text: document.getElementById("edit-test-2-txt").value.trim(),
    test2Img,
    
    faqSectionPreTitle: document.getElementById("edit-faq-pre-title").value.trim(),
    faqSectionTitle: document.getElementById("edit-faq-title").value.trim(),
    faqSectionSubtitle: document.getElementById("edit-faq-subtitle").value.trim(),
    
    faq1Q: document.getElementById("edit-faq-1-qn").value.trim(),
    faq1A: document.getElementById("edit-faq-1-ans").value.trim(),
    faq2Q: document.getElementById("edit-faq-2-qn").value.trim(),
    faq2A: document.getElementById("edit-faq-2-ans").value.trim(),
    faq3Q: document.getElementById("edit-faq-3-qn").value.trim(),
    faq3A: document.getElementById("edit-faq-3-ans").value.trim(),
    faq4Q: document.getElementById("edit-faq-4-qn").value.trim(),
    faq4A: document.getElementById("edit-faq-4-ans").value.trim()
  };

  localStorage.setItem("siteContent", JSON.stringify(updatedContent));
  loadSiteContent();
  initCounters();

  alert("Website content updated successfully!");
  
  const modalEl = document.getElementById("adminDeskModal");
  const bsModal = bootstrap.Modal.getInstance(modalEl);
  if (bsModal) {
    bsModal.hide();
  }
}

function initScrollReveal() {
  const animatedElements = document.querySelectorAll(".fade-up, .fade-in, .scale-up");
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  animatedElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   15. EXPORT CONFIGURATION SYSTEM
   ========================================================================== */
window.exportSiteConfig = function() {
  const siteContent = JSON.parse(localStorage.getItem("siteContent")) || defaultSiteContent;
  const properties = JSON.parse(localStorage.getItem("properties")) || defaultPropertiesData;

  const configObj = {
    siteContent: siteContent,
    properties: properties
  };

  const fileContent = `/**
 * Aurelia Estates - Custom Configuration Fallback
 * 
 * Generated on: ${new Date().toLocaleString()}
 */
window.customSiteConfig = ${JSON.stringify(configObj, null, 2)};
`;

  const blob = new Blob([fileContent], { type: "application/javascript" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "config.js";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  
  alert("Configuration file (config.js) generated and downloaded! Please save/replace this file in the 'js/' folder of your project, then commit and push to GitHub.");
}

