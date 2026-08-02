import { config, resolveProductImages, resolveMaterialImages, FORM_ENDPOINT } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('page-enter');
  document.body.dataset.page = getPageVariant();

  // 1. Inject Shared Layout Components (Header, Footer, Floating CTAs)
  injectHeader();
  injectFooter();
  injectFloatingWidgets();

  // 1.5 Global scroll reveal (smooth animations)
  prepareRevealTargets();
  initScrollReveal();


  // 2. Initialize Dynamic Config Population (socials, phones, address, maps)
  populateConfigData();

  // 2.5 Site-wide structured data (Organization + WebSite; skips static pages that already define them)
  injectStructuredData();

  // 3. Highlight Active Navigation Item
  highlightActiveNav();

  // 4. Mobile Menu Navigation Event Handlers
  initMobileMenu();
  initStickyHeader();

  // 5. Hero Slider (if on homepage)
  if (document.querySelector('.hero-slider')) {
    initHeroSlider();
  }

  // 6. Stats Counter Animation on Scroll (if on homepage)
  if (document.querySelector('.stats-section')) {
    initStatsCounter();
  }

  // 6.5 Populate dynamic homepage sections if on homepage
  populateHomepageSections();


  // 7. Products Catalog Dynamic Population (if on products page)
  if (document.getElementById('products-catalog-container')) {
    populateProductsPage();
  }

  // 7.5 Product Details Page (if on product details page)
  if (document.getElementById('product-details-layout')) {
    populateProductDetailsPage();
  }

  // 7.6 Materials Catalog Page (if on materials page)
  if (document.getElementById('materials-catalog-container')) {
    populateMaterialsPage();
  }

  // 7.7 Material Details Page (if on material detail page)
  if (document.getElementById('material-details-layout')) {
    populateMaterialDetailsPage();
  }


  // 9. Lead Capture Form Integration (Web3Forms API + AJAX fallback)
  initInquiryForms();
});

// --- Inject Reusable Header Template ---
function injectHeader() {
  const headerRoot = document.getElementById('header-root');
  if (!headerRoot) return;

  headerRoot.innerHTML = `
    <header class="site-header" id="site-header">
      <div class="top-bar">
        <div class="container top-bar-content">
          <ul class="top-bar-center">
            <li><a href="#" data-config="phone-link"></a></li>
            <li><a href="#" data-config="email-link"></a></li>
            <li><span>GSTIN: <strong data-config="gstin"></strong></span></li>
          </ul>
        </div>
      </div>

      <nav class="nav-bar">
        <div class="container nav-logo-row">
          <a href="/index.html" class="logo-link">
            <img class="logo-img" src="" alt="Sujal Enterprise Logo" data-config="logo" loading="eager" />
          </a>

          <div class="header-actions">
            <a href="/products.html" class="header-icon-btn" aria-label="Search products"><i class="fa fa-magnifying-glass"></i></a>
            <a href="#" class="header-icon-btn header-whatsapp-btn" data-config="whatsapp-link" target="_blank" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
            <a href="/products.html#inquiry" class="quote-btn">Get Quote</a>
          </div>

          <button class="menu-toggle" aria-label="Toggle Menu" aria-controls="primary-nav" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div class="nav-menu-row">
          <div class="container">
          <ul class="nav-menu" id="primary-nav">
            <li class="mobile-panel-brand">
              <img src="" alt="Sujal Enterprise Logo" data-config="logo" loading="lazy" />
              <span data-config="tagline"></span>
            </li>
            <li><a href="/index.html" class="nav-link" data-nav="home">Home</a></li>
            <li><a href="/about-us.html" class="nav-link" data-nav="about">About</a></li>
            <li class="nav-item has-dropdown">
              <a href="/products.html" class="nav-link" data-nav="products" aria-haspopup="true" aria-expanded="false">
                Products <i class="fa fa-chevron-down"></i>
              </a>
              <div class="product-mega-menu" aria-label="Product categories">
                <div class="container mega-menu-inner">
                  <div class="mega-menu-head">
                    <strong>Product Catalog</strong>
                    <a href="/products.html">View Complete Catalog <i class="fa fa-arrow-right"></i></a>
                  </div>
                  <div class="mega-menu-groups">
                    ${(config.products || []).map(cat => `
                      <div class="mega-group">
                        <a class="mega-group-title" href="/products.html#cat-${cat.id}">${cat.title}</a>
                        <ul>
                          ${(config.productDetails || [])
                            .filter(product => (product.categoryIds || []).includes(cat.id))
                            .slice(0, 8)
                            .map(product => `<li><a href="${getProductUrl(product)}">${product.title}</a></li>`)
                            .join('')}
                        </ul>
                      </div>
                    `).join('')}
                  </div>
              </div>
            </li>
            <li class="nav-item has-dropdown compact-dropdown">
              <a href="/materials.html" class="nav-link" data-nav="materials" aria-haspopup="true" aria-expanded="false">
                Materials <i class="fa fa-chevron-down"></i>
              </a>
              <div class="simple-dropdown" aria-label="Materials">
                ${(config.materials || []).map(m => `
                  <a href="/materials/${m.slug}/">${m.title}</a>
                `).join('')}
              </div>
            </li>
            <li><a href="/certifications-quality.html" class="nav-link" data-nav="quality">Certifications</a></li>
            <li><a href="/certifications-quality.html#quality-policy" class="nav-link" data-nav="quality-policy">Quality Policy</a></li>
            <li><a href="/contact-us.html" class="nav-link" data-nav="contact">Contact</a></li>
            <li class="mobile-panel-contact">
              <a href="#" data-config="phone-link"></a>
              <a href="#" data-config="email-link"></a>
              <a href="#" class="mobile-whatsapp-action" data-config="whatsapp-link" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i> WhatsApp Inquiry</a>
              <a href="/products.html#inquiry" class="mobile-quote-action">Get Quote</a>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    </header>
  `;
}

function getPageVariant() {
  const path = window.location.pathname;
  if (path === '/' || path.endsWith('index.html')) return 'home';
  if (path.includes('/products/')) return 'product-detail';
  if (path.endsWith('products.html')) return 'products';
  if (path.includes('/materials/')) return 'material-detail';
  if (path.endsWith('materials.html')) return 'materials';
  return 'subpage';
}

// --- Inject Reusable Footer Template ---
function injectFooter() {
  const footerRoot = document.getElementById('footer-root');
  if (!footerRoot) return;

  footerRoot.innerHTML = `
    <footer class="footer">
      <div class="container grid-4">
        <div>
          <h3 data-config="name">Sujal Enterprise</h3>
          <p class="footer-desc">ISO 9001, 45001 & PED Certified manufacturer, supplier and stockist of premium industrial steel products — Flanges, Pipes, Round Bars, Sheets, Plates, Buttweld & Forged Fittings, and Channel & Angle — in Stainless Steel, Mild Steel, Alloy Steel & IBR, based at Bharat Lokhand Bazaar, Mumbai.</p>
          <ul class="social-links" id="footer-socials-list">
            <!-- Populated dynamically if socials are set -->
          </ul>
        </div>
        
        <div>
          <h3>Quick Links</h3>
          <ul class="footer-links">
            <li><a href="/index.html"><i class="fa fa-chevron-right"></i> Home</a></li>
            <li><a href="/about-us.html"><i class="fa fa-chevron-right"></i> About Us</a></li>
            <li><a href="/products.html"><i class="fa fa-chevron-right"></i> Products</a></li>
            <li><a href="/materials.html"><i class="fa fa-chevron-right"></i> Materials</a></li>
            <li><a href="/certifications-quality.html"><i class="fa fa-chevron-right"></i> Certifications</a></li>
            <li><a href="/contact-us.html"><i class="fa fa-chevron-right"></i> Contact Us</a></li>
          </ul>
        </div>
        
        <div>
          <h3>Our Products</h3>
          <ul class="footer-links" id="footer-product-links">
          </ul>
        </div>
        
        <div>
          <h3>Contact Info</h3>
          <ul class="footer-contact">
            <li>
              <i class="fa fa-map-marker-alt" style="margin-top: 4px;"></i>
              <span data-config="address"></span>
            </li>
            <li>
              <i class="fa fa-envelope"></i>
              <a href="#" class="config-email-plain" data-config="email-plain"></a>
            </li>
            <li>
              <i class="fa fa-phone"></i>
              <span data-config="phone-list"></span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="container">
          <p>&copy; <span id="year">2026</span> <span data-config="name">Sujal Enterprise</span>. Developed & Design by Varun Digital Hub</p>
        </div>
      </div>
    </footer>
  `;
}

// --- Inject Floating WhatsApp, Scroll-to-Top, and Mobile Action CTAs ---
function injectFloatingWidgets() {
  const ctaContainer = document.createElement('div');
  ctaContainer.innerHTML = `
    <!-- Sticky WhatsApp Button -->
    <a href="#" class="whatsapp-float" data-config="whatsapp-link" target="_blank" aria-label="Chat on WhatsApp">
      <i class="fab fa-whatsapp"></i>
    </a>

    <!-- Scroll to Top Button -->
    <button class="scroll-top" id="scroll-top-btn" aria-label="Scroll to top">
      <i class="fa fa-chevron-up"></i>
    </button>

    <!-- Sticky Mobile CTA Bar -->
    <div class="mobile-cta-bar">
      <a href="#" class="mobile-cta-btn call" data-config="phone-link"><i class="fa fa-phone"></i> Call Now</a>
      <a href="#" class="mobile-cta-btn whatsapp" data-config="whatsapp-link" target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp</a>
    </div>
  `;
  document.body.appendChild(ctaContainer);

  // Scroll-to-top show/hide and click handler
  const scrollBtn = document.getElementById('scroll-top-btn');
  if (scrollBtn) {
    const handleScroll = () => {
      scrollBtn.classList.toggle('visible', window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// --- Dynamic Business Configuration Ingest ---
function populateConfigData() {
  const { business } = config;

  // Set page titles to include business name if not set
  if (!document.title.includes(business.name)) {
    document.title = `${document.title} | ${business.name}`;
  }

  // Populate business name
  document.querySelectorAll('[data-config="name"]').forEach(el => {
    el.textContent = business.name;
  });

  // Populate logo image
  document.querySelectorAll('[data-config="logo"]').forEach(el => {
    if (business.logo) {
      el.src = business.logo;
      el.alt = business.name + ' Logo';
      
      // Apply lazy loading for non-header logos (e.g., footer/other areas)
      if (el.closest('.footer')) {
        el.loading = 'lazy';
      }
    }
  });

  // Inject favicon using the logo if available
  const existingFavicon = document.querySelector('link[rel="icon"]');
  if (business.logo) {
    // Create a PNG favicon from the logo if an ico favicon isn't already explicitly set
    if (!existingFavicon || existingFavicon.getAttribute('href')?.endsWith('.ico')) {
      if (existingFavicon) existingFavicon.remove();
      const faviconLink = document.createElement('link');
      faviconLink.rel = 'icon';
      faviconLink.type = 'image/png';
      // Use the logo path for favicon (browsers will auto-convert)
      faviconLink.href = business.logo;
      document.head.appendChild(faviconLink);
      
      // Also add apple-touch-icon
      const appleIcon = document.createElement('link');
      appleIcon.rel = 'apple-touch-icon';
      appleIcon.href = business.logo;
      document.head.appendChild(appleIcon);
    }
  }
  
  document.querySelectorAll('[data-config="address"]').forEach(el => {
    el.textContent = business.address;
  });

  // Populate GSTIN
  document.querySelectorAll('[data-config="gstin"]').forEach(el => {
    el.textContent = business.gstin || '';
  });

  // Populate tagline
  document.querySelectorAll('[data-config="tagline"]').forEach(el => {
    el.textContent = business.tagline || '';
  });

  // Populate business type
  document.querySelectorAll('[data-config="type"]').forEach(el => {
    el.textContent = business.type || '';
  });

  // Populate phone links
  document.querySelectorAll('[data-config="phone-link"]').forEach(el => {
    const phone = business.phones[0];
    el.setAttribute('href', `tel:${phone.replace(/\s+/g, '')}`);
    el.innerHTML = `<i class="fa fa-phone"></i> ${phone}`;
  });

  // Populate secondary phones / bulk lists
  document.querySelectorAll('[data-config="phone-list"]').forEach(el => {
    el.innerHTML = business.phones.map((phone, idx) => {
      const divider = idx > 0 ? ' / ' : '';
      return `${divider}<a href="tel:${phone.replace(/\s+/g, '')}">${phone}</a>`;
    }).join('');
  });

  // Populate emails
  document.querySelectorAll('[data-config="email-link"]').forEach(el => {
    el.setAttribute('href', `mailto:${business.email}`);
    el.innerHTML = `<i class="fa fa-envelope"></i> ${business.email}`;
  });

  document.querySelectorAll('[data-config="email-plain"]').forEach(el => {
    el.textContent = business.email;
    el.setAttribute('href', `mailto:${business.email}`);
  });

  // Populate WhatsApp links
  document.querySelectorAll('[data-config="whatsapp-link"]').forEach(el => {
    const waNum = business.whatsapp.replace(/\+/g, '').replace(/\s+/g, '');
    el.setAttribute('href', `https://wa.me/${waNum}?text=Hello%20${encodeURIComponent(business.name)},%20I%20have%20an%20industrial%20inquiry.`);
  });

  // Populate Google Map Embed Iframe (Contact Page / Home Page)
  document.querySelectorAll('[data-config="map-iframe"]').forEach(el => {
    el.setAttribute('src', business.googleMapsEmbedUrl);
  });

  // Render social links ONLY if configured (non-empty strings)
  const headerSocials = document.getElementById('header-socials-list');
  const footerSocials = document.getElementById('footer-socials-list');
  
  let socialsHtml = '';
  const mappings = [
    { key: 'facebook', icon: 'fab fa-facebook-f' },
    { key: 'instagram', icon: 'fab fa-instagram' },
    { key: 'youtube', icon: 'fab fa-youtube' },
    { key: 'twitter', icon: 'fab fa-x-twitter' }
  ];

  let hasSocials = false;
  mappings.forEach(map => {
    const link = business.socials[map.key];
    if (link && link.trim() !== '') {
      socialsHtml += `<li><a href="${link}" target="_blank" aria-label="${map.key}"><i class="${map.icon}"></i></a></li>`;
      hasSocials = true;
    }
  });

  if (headerSocials) {
    if (hasSocials) {
      headerSocials.innerHTML = `<li>Follow Us:</li>` + socialsHtml;
    } else {
      headerSocials.parentElement.style.display = 'none'; // Hide social container if empty
    }
  }

  if (footerSocials) {
    if (hasSocials) {
      footerSocials.innerHTML = socialsHtml;
    } else {
      const parent = footerSocials.parentElement;
      if (parent && parent.querySelector('h3')) {
        parent.querySelector('h3').style.display = 'none';
      }
      footerSocials.style.display = 'none';
    }
  }

  // Populate footer product links dynamically
  const footerProductLinks = document.getElementById('footer-product-links');
  if (footerProductLinks && config.productDetails && config.productDetails.length) {
    footerProductLinks.innerHTML = config.productDetails.map(p => `
      <li><a href="${getProductUrl(p)}"><i class="fa fa-chevron-right"></i> ${p.title}</a></li>
    `).join('');
  }

  // Update copyright year dynamically
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear().toString();
}

// --- Active Nav Highlighting ---
function highlightActiveNav() {
  const path = window.location.pathname;
  const hash = window.location.hash;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const nav = link.getAttribute('data-nav');
    if (!nav) return;
    
    // Home
    if (nav === 'home' && (path === '/' || path.endsWith('index.html'))) {
      link.classList.add('active');
      return;
    }
    
    // Products catalog + detail pages
    if (nav === 'products' && (path.endsWith('products.html') || path.includes('/products/'))) {
      link.classList.add('active');
      return;
    }
    
    // Materials catalog + detail pages
    if (nav === 'materials' && (path.endsWith('materials.html') || path.includes('/materials/'))) {
      link.classList.add('active');
      return;
    }
    
    // Quality policy (hash on quality page)
    if (nav === 'quality-policy' && path.includes('certifications-quality') && hash === '#quality-policy') {
      link.classList.add('active');
      return;
    }
    
    // Certifications page (only if no quality-policy hash)
    if (nav === 'quality' && path.includes('certifications-quality') && !hash) {
      link.classList.add('active');
      return;
    }
    
    // Generic page match
    const href = link.getAttribute('href') || '';
    if (nav !== 'home' && nav !== 'products' && nav !== 'materials' && nav !== 'quality' && nav !== 'quality-policy') {
      const [hrefPathOnly] = href.split('#');
      const hrefClean = hrefPathOnly.replace(/^\//, '').replace(/\.html$/, '');
      const pathClean = path.replace(/^\//, '').replace(/\.html$/, '').replace(/\/$/, '');
      if (hrefClean && pathClean.startsWith(hrefClean)) {
        link.classList.add('active');
      }
    }
  });
}

// --- Responsive Menu toggle ---
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-menu');
  
  if (toggle && menu) {
    let previousFocusedElement = null;

    const getFocusableElements = () =>
      menu.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');

    const closeMenu = () => {
      menu.classList.remove('active');
      document.body.classList.remove('mobile-nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.querySelectorAll('span').forEach(bar => {
        bar.style.transform = 'none';
        bar.style.opacity = '1';
      });
      // Restore focus to toggle button
      if (previousFocusedElement) {
        toggle.focus();
        previousFocusedElement = null;
      }
    };

    const openMenu = () => {
      menu.classList.add('active');
      document.body.classList.add('mobile-nav-open');
      toggle.setAttribute('aria-expanded', 'true');
      previousFocusedElement = document.activeElement;
      // Focus first focusable element in menu
      const focusable = getFocusableElements();
      if (focusable.length) focusable[0].focus();
    };

    const toggleMenu = () => {
      const isOpen = menu.classList.contains('active');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    };

    toggle.addEventListener('click', toggleMenu);

    // Focus trap inside mobile menu
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menu.classList.contains('active')) {
        closeMenu();
        return;
      }

      if (e.key === 'Tab' && menu.classList.contains('active') && window.innerWidth <= 991) {
        const focusable = getFocusableElements();
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    // Close when any nav link is clicked (except dropdown toggles)
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth > 991) return;
        if (link.closest('.has-dropdown') && link.closest('.has-dropdown').querySelector('.product-mega-menu, .simple-dropdown')) {
          if (link.getAttribute('href') && !link.getAttribute('href').startsWith('#')) {
            closeMenu();
            return;
          }
          return;
        }
        closeMenu();
      });
    });

    // Close on backdrop overlay click
    const handleOverlayClick = (e) => {
      if (menu.classList.contains('active') && window.innerWidth <= 991 && e.target === document.body) {
        closeMenu();
      }
    };
    document.body.addEventListener('click', handleOverlayClick);
  }

  // Mobile dropdown toggles (expandable categories)
  document.querySelectorAll('.has-dropdown > .nav-link').forEach(link => {
    link.addEventListener('click', (event) => {
      if (window.innerWidth > 991) return;
      const item = link.closest('.has-dropdown');
      if (!item) return;
      event.preventDefault();
      const isOpen = item.classList.toggle('open');
      link.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      // Animate dropdown content
      const dropdown = item.querySelector('.product-mega-menu, .simple-dropdown');
      if (dropdown) {
        if (isOpen) {
          dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
        } else {
          dropdown.style.maxHeight = '0';
        }
      }
    });
  });
}

function initStickyHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const update = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
}

// --- Home Hero Slider ---
function initHeroSlider() {
  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.querySelector('.slider-btn.next');
  const prevBtn = document.querySelector('.slider-btn.prev');
  let currentSlideIndex = 0;
  let slideInterval;

  const showSlide = (index) => {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlideIndex = (index + slides.length) % slides.length;
    slides[currentSlideIndex].classList.add('active');
  };

  const nextSlide = () => showSlide(currentSlideIndex + 1);
  const prevSlide = () => showSlide(currentSlideIndex - 1);

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });
  }

  const startInterval = () => {
    slideInterval = setInterval(nextSlide, 5000);
  };

  const resetInterval = () => {
    clearInterval(slideInterval);
    startInterval();
  };

  startInterval();
}

// --- Stats Counters ---
function initStatsCounter() {
  const section = document.querySelector('.stats-section');
  const statsElements = document.querySelectorAll('.stat-number');
  let animated = false;

  const animateCounters = () => {
    statsElements.forEach((el, index) => {
      const target = config.stats[index] ? config.stats[index].count : 100;
      let count = 0;
      const speed = Math.max(1, Math.floor(target / 50));
      const interval = setInterval(() => {
        count += speed;
        if (count >= target) {
          el.textContent = target.toLocaleString() + (index === 0 || index === 2 ? '+' : index === 3 ? '+' : '');
          clearInterval(interval);
        } else {
          el.textContent = count.toLocaleString();
        }
      }, 30);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !animated) {
      animateCounters();
      animated = true;
    }
  }, { threshold: 0.5 });

  observer.observe(section);
}

// --- Populate Dynamic Homepage Sections from config ---
function populateHomepageSections() {
  // Why Choose Us grid
  const whyGrid = document.getElementById('why-choose-us-grid');
  if (whyGrid && config.whyChooseUs && config.whyChooseUs.length) {
    whyGrid.innerHTML = config.whyChooseUs.map(item => `
      <div class="feature-card">
        <div class="feature-card-icon"><i class="fa ${item.icon}"></i></div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `).join('');
  }

  // Featured Products grid (show all 8 products with images)
  const featuredGrid = document.getElementById('featured-products-grid');
  if (featuredGrid && config.productDetails && config.productDetails.length) {
    featuredGrid.innerHTML = config.productDetails.map(product => {
      const resolved = resolveProductImages(product);
      const image = resolved.image || product.image || '';
      const description = product.shortDescription || product.description || '';
      return `
        <div class="premium-card">
          <div class="premium-card-img-wrapper">
            <img src="${image}" alt="${product.title}" loading="lazy" style="width:100%; height:100%; object-fit:cover; display:block;"/>
          </div>
          <div class="premium-card-content">
            <h3>${product.title}</h3>
            <p>${description}</p>
            <a href="${getProductUrl(product)}" class="btn btn-dark" style="margin-top: auto;">View Details <i class="fa fa-arrow-right"></i></a>
          </div>
        </div>
      `;
    }).join('');
  }
}

// --- Products Catalog Population ---
function populateProductsPage() {
  const container = document.getElementById('products-catalog-container');
  if (!container) return;
  container.innerHTML = '';

  const filterBtns = document.querySelectorAll('.products-filter-btn');
  const countLabel = document.getElementById('products-result-label');
  const searchInput = document.getElementById('products-search-input');
  const searchWrap = document.getElementById('products-search-wrap');
  const searchClear = document.getElementById('products-search-clear');
  const productDetails = (config.productDetails || []).slice();

  let activeFilter = 'all';
  let searchQuery = '';

  const getCategoryName = (categoryId) => {
    return (config.products || []).find(c => c.id === categoryId)?.title || '';
  };

  const renderCards = () => {
    container.innerHTML = '';
    let results = productDetails;

    if (activeFilter !== 'all') {
      results = results.filter(p => (p.categoryIds || []).includes(activeFilter));
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      results = results.filter(p => {
        const text = [
          p.title,
          p.shortDescription,
          p.fullDescription,
          ...(p.standards || []),
          ...(p.categoryIds || []).map(getCategoryName)
        ].join(' ').toLowerCase();
        return text.includes(q);
      });
    }

    if (!results.length) {
      container.innerHTML = `
        <div class="products-empty">
          <i class="fa fa-box-open"></i>
          <p>No products found</p>
          <span class="sub">Try a different category or search term.</span>
        </div>
      `;
      if (countLabel) countLabel.textContent = '0 products';
      initScrollReveal();
      return;
    }

    if (countLabel) {
      const catName = activeFilter !== 'all' ? getCategoryName(activeFilter) : 'all';
      const parts = [`Showing ${results.length} product${results.length === 1 ? '' : 's'}`];
      if (activeFilter !== 'all') parts.push(`in ${catName}`);
      if (searchQuery) parts.push(`matching "${searchQuery}"`);
      countLabel.textContent = parts.join(' ');
    }

    results.forEach((p, idx) => {
      const resolved = resolveProductImages(p);
      const catTitle = getCategoryName((p.categoryIds || [])[0]) || 'Industrial Product';
      const url = getProductUrl(p);

      const card = document.createElement('a');
      card.className = 'product-card-premium reveal';
      card.href = url;
      card.style.animationDelay = `${idx * 60}ms`;

      const standards = (p.standards || []).slice(0, 2);

      card.innerHTML = `
        <div class="card-img-wrap">
          <img src="${resolved.image || ''}" alt="${p.title}" loading="lazy"/>
          <div class="card-img-overlay"></div>
        </div>
        <div class="card-body">
          <span class="card-category">${catTitle}</span>
          <h3 class="card-title">${p.title}</h3>
          <p class="card-desc">${p.shortDescription || ''}</p>
        </div>
        <div class="card-footer">
          <div class="card-standards">
            ${standards.map(s => `<span>${s}</span>`).join('')}
          </div>
          <span class="card-view-btn">
            View Product <i class="fa fa-arrow-right"></i>
          </span>
        </div>
      `;
      container.appendChild(card);
    });

    initScrollReveal();
  };

  // Filter button handlers
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter || 'all';

      if (activeFilter !== 'all') {
        history.replaceState(null, '', `#${activeFilter}`);
      } else {
        history.replaceState(null, '', window.location.pathname);
      }

      renderCards();
    });
  });

  // Search input handler
  const handleSearch = () => {
    const val = searchInput ? searchInput.value.trim() : '';
    searchQuery = val;
    if (searchWrap) searchWrap.classList.toggle('has-value', !!val);
    renderCards();
  };

  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
  }
  if (searchClear) {
    searchClear.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      handleSearch();
    });
  }

  // Check initial hash for category
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const match = Array.from(filterBtns).find(b => b.dataset.filter === hash);
    if (match) {
      filterBtns.forEach(b => b.classList.remove('active'));
      match.classList.add('active');
      activeFilter = hash;
    }
  }

  renderCards();

  // Populate inquiry form product dropdown
  const inquirySelect = document.getElementById('inquiry-product');
  if (inquirySelect) {
    const hasOptions = Array.from(inquirySelect.options).length > 1;
    if (!hasOptions) {
      productDetails.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.title;
        opt.textContent = p.title;
        inquirySelect.appendChild(opt);
      });
    }
  }
}

// --- Inquiry Forms Lead Capturing with Formspree Integration ---
function initInquiryForms() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    // Skip forms that have their own specialized handlers (product/material detail pages)
    if (form.closest('#product-details-layout') || form.closest('#material-details-layout')) return;

    const requiredInputs = Array.from(form.querySelectorAll('input[required], select[required], textarea[required]'));
    const submitBtn = form.querySelector('button[type="submit"]');
    // Locate the status region either inside the form or inside its card wrapper
    const statusCard = form.closest('.inquiry-form-card, .inquiry-card-form');
    const statusEl = statusCard ? statusCard.querySelector('.success-message') : form.querySelector('.success-message');

    // Accessibility: link inline errors to their fields and make status regions live
    requiredInputs.forEach(input => {
      const errorEl = getFormError(input);
      if (errorEl) {
        if (!errorEl.id) errorEl.id = `${input.id || input.name || 'field'}-error`;
        errorEl.setAttribute('aria-live', 'polite');
        input.setAttribute('aria-describedby', errorEl.id);
      }
    });
    if (statusEl) statusEl.setAttribute('aria-live', 'polite');

    // Remember the original inline error copy for each field
    requiredInputs.forEach(input => {
      const errorEl = getFormError(input);
      if (errorEl && !errorEl.dataset.message) errorEl.dataset.message = errorEl.textContent.trim();
    });

    const validateField = (input) => {
      const value = input.value.trim();
      const errorEl = getFormError(input);
      const fallback = errorEl ? errorEl.dataset.message : '';

      let valid = value.length > 0;
      if (valid && input.type === 'email' && !validateEmail(value)) valid = false;
      if (valid && input.type === 'tel' && !validatePhone(value)) valid = false;

      input.classList.toggle('invalid', !valid);
      input.setAttribute('aria-invalid', String(!valid));
      if (errorEl) {
        if (!value) errorEl.textContent = fallback || 'This field is required.';
        else if (!valid) errorEl.textContent = fallback || 'Please enter a valid value.';
        else errorEl.textContent = fallback;
      }
      return valid;
    };

    // Re-validate a field as the user types (once it has been flagged)
    requiredInputs.forEach(input => {
      input.addEventListener('input', () => {
        if (input.classList.contains('invalid')) validateField(input);
      });
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Validate every required field; stop submission if anything is invalid
      let isValid = true;
      requiredInputs.forEach(input => {
        if (!validateField(input)) isValid = false;
      });
      if (!isValid) {
        const firstInvalid = form.querySelector('.invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Disable button, show loading state, and prevent double submission
      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn && submitBtn.dataset.sending === 'true') return;
      if (submitBtn) {
        submitBtn.dataset.sending = 'true';
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Sending...';
      }

      // Do NOT pretend the form was sent if no endpoint is configured
      if (!FORM_ENDPOINT || FORM_ENDPOINT.includes('YOUR_FORM_ID')) {
        showFormStatus(statusEl, 'warning', 'Contact form is not connected yet. Please contact us via email/phone/WhatsApp, or ask your admin to set <strong>FORM_ENDPOINT</strong> in <strong>js/config.js</strong>.');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
          submitBtn.dataset.sending = 'false';
        }
        return;
      }

      // Build payload with Formspree-friendly field names
      const nameField = form.querySelector('input[type="text"]');
      const emailField = form.querySelector('input[type="email"]');
      const phoneField = form.querySelector('input[type="tel"]');
      const messageField = form.querySelector('textarea');
      const subjectField = form.querySelector('select');

      const formData = new FormData();
      if (nameField) formData.append('name', nameField.value.trim());
      if (emailField) formData.append('email', emailField.value.trim());
      if (phoneField) formData.append('phone', phoneField.value.trim());
      if (messageField) formData.append('message', messageField.value.trim());
      if (subjectField && subjectField.value) formData.append('_subject', subjectField.value);
      if (emailField) formData.append('_replyto', emailField.value.trim());
      formData.append('_gotcha', '');
      // Remaining required fields (e.g. company)
      requiredInputs.forEach(input => {
        if (input === nameField || input === emailField || input === phoneField || input === messageField || input === subjectField) return;
        formData.append(input.id || input.name || 'field', input.value.trim());
      });

      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          showFormStatus(statusEl, 'success', '<i class="fa fa-circle-check"></i> Thank you! Your message has been sent successfully. Our team will contact you shortly.');
          form.reset();
          requiredInputs.forEach(input => {
            input.classList.remove('invalid');
            input.setAttribute('aria-invalid', 'false');
          });
          if (statusEl) setTimeout(() => { statusEl.style.display = 'none'; }, 8000);
        } else {
          let errorText = 'Your message could not be sent. Please check your details and try again.';
          try {
            const result = await response.json();
            if (result && result.errors && result.errors.length) {
              errorText = 'Your message could not be sent: ' + result.errors.map(err => err.message || err).join(' ');
            }
          } catch (err) { /* keep the default error message */ }
          showFormStatus(statusEl, 'error', errorText);
        }
      } catch (error) {
        console.error('Submission Error:', error);
        showFormStatus(statusEl, 'error', 'Unable to send your message due to a network issue. Please try again.');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
          submitBtn.dataset.sending = 'false';
        }
      }
    });
  });
}

// Returns the inline validation error element that belongs to a field
function getFormError(input) {
  const next = input.nextElementSibling;
  return next && next.classList.contains('validation-error') ? next : null;
}

// Displays form status through the existing .success-message region (no layout changes)
function showFormStatus(statusEl, type, html) {
  const styles = {
    warning: { background: '#fff7ed', border: '#f59e0b', color: '#7c2d12' },
    error:   { background: '#fef2f2', border: '#ef4444', color: '#991b1b' },
    success: { background: '', border: '', color: '' }
  };
  const s = styles[type] || styles.success;

  if (!statusEl) {
    alert(html.replace(/<[^>]+>/g, ''));
    return;
  }
  statusEl.style.display = 'block';
  statusEl.style.backgroundColor = s.background;
  statusEl.style.borderColor = s.border;
  statusEl.style.color = s.color;
  statusEl.innerHTML = html;
}

function getCategoryTitleById(categoryId) {
  return (config.products || []).find(c => c.id === categoryId)?.title || '';
}

function getProductUrl(product) {
  return product && product.slug ? `/products/${product.slug}/` : '/products.html';
}

function getProductSlugFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const querySlug = params.get('slug');
  if (querySlug) return querySlug;

  const parts = window.location.pathname.split('/').filter(Boolean);
  const productsIndex = parts.indexOf('products');
  if (productsIndex !== -1 && parts[productsIndex + 1]) {
    return parts[productsIndex + 1];
  }

  return '';
}


function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  const re = /^[0-9+\s-]{8,15}$/;
  return re.test(String(phone));
}

// =========================================================================
// PRODUCT DETAILS PAGE — Premium 70/30 Layout (Config-Driven)
// =========================================================================
function populateProductDetailsPage() {
  const loader = document.getElementById('pd-loading');
  if (!loader && !document.getElementById('product-details-layout')) return;

  const slug = getProductSlugFromUrl();
  if (!slug) {
    if (loader) loader.innerHTML = `<p style="color:var(--text-muted);">Missing product slug in URL. <a href="/products.html">Back to products</a></p>`;
    return;
  }

  const product = (config.productDetails || []).find(p => p.slug === slug);
  if (!product) {
    if (loader) loader.innerHTML = `<p style="color:var(--text-muted);">Product not found. <a href="/products.html">Back to products</a></p>`;
    return;
  }

  const resolved = resolveProductImages(product);
  const waNum = config.business.whatsapp.replace(/\+/g, '').replace(/\s+/g, '');
  const waMsg = encodeURIComponent(`Hello ${config.business.name}, I want to inquire about: ${product.title}.`);
  const waHref = `https://wa.me/${waNum}?text=${waMsg}`;
  const phoneHref = `tel:${config.business.phones[0].replace(/\s+/g, '')}`;
  const emailHref = `mailto:${config.business.email}`;
  const businessName = config.business.name;

  // --- SEO ---
  document.title = product.metaTitle || `${product.title} | ${businessName}`;
  updateMetaTag('description', product.metaDescription || product.shortDescription || '');
  updateMetaTag('keywords', [...(product.keywords || []), ...(product.standards || []), businessName].join(', '));
  updateMetaProperty('og:title', document.title);
  updateMetaProperty('og:description', product.shortDescription || '');
  updateMetaProperty('og:url', window.location.href);
  updateMetaProperty('og:image', resolved.image || '');
  updateMetaName('twitter:card', 'summary_large_image');
  updateMetaName('twitter:title', document.title);
  updateMetaName('twitter:description', product.shortDescription || '');
  updateMetaName('twitter:image', resolved.image || '');
  updateCanonical(window.location.href);
  injectProductJsonLd(product);
  injectBreadcrumbJsonLd(product);
  if (product.faqs && product.faqs.length) injectFaqJsonLd(product.faqs);

  // Helpers
  const setText = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text || ''; };
  const setHtml = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html || ''; };
  const setAttr = (id, attr, val) => { const el = document.getElementById(id); if (el) el.setAttribute(attr, val); };

  const catId = (product.categoryIds && product.categoryIds[0]) || '';
  const catTitle = getCategoryTitleById(catId) || 'Category';

  // --- HERO ---
  setText('pd-breadcrumb-current', product.title);
  setText('pd-category-chip', catTitle);
  setText('pd-title', product.title);
  setText('pd-short-desc', product.shortDescription || '');
  setAttr('pd-hero-call', 'href', phoneHref);
  setAttr('pd-hero-whatsapp', 'href', waHref);

  // --- COMPANY INTRO ---
  const introHeading = document.getElementById('pd-intro-heading');
  if (introHeading) introHeading.textContent = `${product.title} Manufacturer in India`;
  const introContent = document.getElementById('pd-intro-content');
  if (introContent) {
    introContent.innerHTML = product.companyIntro || `<p>${businessName} is a trusted manufacturer and supplier of premium quality ${product.title} in India. We provide high-quality industrial products to domestic and global markets with complete material traceability and certification.</p>`;
  }

  // --- GALLERY ---
  const galleryMain = document.getElementById('pd-gallery-main-img');
  const thumbs = document.getElementById('pd-gallery-thumbs');
  let images = (resolved.galleryImages && resolved.galleryImages.length) ? resolved.galleryImages : (resolved.image ? [resolved.image] : []);
  let currentImgIdx = 0;

  if (galleryMain && images.length) {
    galleryMain.src = images[0];
    galleryMain.alt = product.title;
  }

  if (thumbs) {
    thumbs.innerHTML = '';
    images.forEach((src, idx) => {
      const btn = document.createElement('button');
      btn.className = 'pd-thumb-btn' + (idx === 0 ? ' active' : '');
      btn.setAttribute('aria-label', `View image ${idx + 1}`);
      btn.innerHTML = `<img src="${src}" alt="${product.title}" loading="lazy"/>`;
      btn.addEventListener('click', () => {
        currentImgIdx = idx;
        if (galleryMain) { galleryMain.src = src; galleryMain.alt = product.title; }
        thumbs.querySelectorAll('.pd-thumb-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
      thumbs.appendChild(btn);
    });
  }

  // Gallery zoom button
  const zoomBtn = document.getElementById('pd-gallery-zoom-btn');
  if (zoomBtn) {
    zoomBtn.addEventListener('click', () => {
      openLightbox(images[currentImgIdx], product.title, images, currentImgIdx);
    });
  }

  // Gallery main image click -> lightbox
  if (galleryMain) {
    galleryMain.addEventListener('click', () => {
      openLightbox(images[currentImgIdx], product.title, images, currentImgIdx);
    });
  }

  // Gallery nav
  const prevBtn = document.querySelector('.pd-gallery-prev');
  const nextBtn = document.querySelector('.pd-gallery-next');
  if (prevBtn && images.length > 1) {
    prevBtn.addEventListener('click', () => {
      currentImgIdx = (currentImgIdx - 1 + images.length) % images.length;
      if (galleryMain) galleryMain.src = images[currentImgIdx];
      if (thumbs) thumbs.querySelectorAll('.pd-thumb-btn').forEach((b, i) => b.classList.toggle('active', i === currentImgIdx));
    });
  }
  if (nextBtn && images.length > 1) {
    nextBtn.addEventListener('click', () => {
      currentImgIdx = (currentImgIdx + 1) % images.length;
      if (galleryMain) galleryMain.src = images[currentImgIdx];
      if (thumbs) thumbs.querySelectorAll('.pd-thumb-btn').forEach((b, i) => b.classList.toggle('active', i === currentImgIdx));
    });
  }

  // --- TECHNICAL SPECS TABLE ---
  const specsBody = document.getElementById('pd-specs-body');
  if (specsBody && product.technicalSpecifications && product.technicalSpecifications.length) {
    specsBody.innerHTML = product.technicalSpecifications.map(spec => `
      <tr>
        <td>${spec.label || ''}</td>
        <td>${spec.value || ''}</td>
      </tr>
    `).join('');
  }

  // Specs search
  const specsSearch = document.getElementById('pd-specs-search-input');
  if (specsSearch && specsBody) {
    specsSearch.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const rows = specsBody.querySelectorAll('tr');
      let visibleCount = 0;
      const emptyMsg = document.getElementById('pd-specs-empty');
      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (!q || text.includes(q)) {
          row.style.display = '';
          visibleCount++;
        } else {
          row.style.display = 'none';
        }
      });
      if (emptyMsg) emptyMsg.style.display = visibleCount === 0 ? 'block' : 'none';
    });
  }

  // Specs copy button
  const copyBtn = document.getElementById('pd-specs-copy-btn');
  if (copyBtn && specsBody) {
    copyBtn.addEventListener('click', () => {
      const rows = specsBody.querySelectorAll('tr');
      let text = 'Particular\tSpecification\n';
      rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length === 2) {
          text += `${cells[0].textContent}\t${cells[1].textContent}\n`;
        }
      });
      navigator.clipboard.writeText(text).then(() => {
        copyBtn.innerHTML = '<i class="fa fa-check"></i> Copied!';
        setTimeout(() => { copyBtn.innerHTML = '<i class="fa fa-copy"></i> Copy'; }, 2000);
      }).catch(() => {
        alert('Could not copy. Please select and copy manually.');
      });
    });
  }

  // --- APPLICATIONS ---
  const appsGrid = document.getElementById('pd-apps-grid');
  if (appsGrid && product.applications && product.applications.length) {
    appsGrid.innerHTML = product.applications.map(app => `
      <div class="pd-app-card reveal">
        <div class="pd-app-icon"><i class="fa ${app.icon}"></i></div>
        <h4>${app.name}</h4>
        <p>${app.description || ''}</p>
      </div>
    `).join('');
  }

  // --- DELIVERY & PACKAGING ---
  const deliveryGrid = document.getElementById('pd-delivery-grid');
  if (deliveryGrid && product.deliveryInfo && product.deliveryInfo.length) {
    deliveryGrid.innerHTML = product.deliveryInfo.map(d => `
      <div class="pd-delivery-card reveal">
        <div class="pd-delivery-icon"><i class="fa ${d.icon}"></i></div>
        <h3>${d.title}</h3>
        <p>${d.text}</p>
      </div>
    `).join('');
  }

  // --- CITIES ---
  const citiesGrid = document.getElementById('pd-cities-grid');
  if (citiesGrid && product.cities && product.cities.length) {
    citiesGrid.innerHTML = product.cities.map(city => `<span class="pd-city-chip">${city}</span>`).join('');
  }

  // --- COUNTRIES ---
  const countriesGrid = document.getElementById('pd-countries-grid');
  if (countriesGrid && product.countries && product.countries.length) {
    countriesGrid.innerHTML = product.countries.map(c => `
      <div class="pd-country-card ${c.highlight ? 'pd-country-highlight' : ''} reveal">
        <i class="fa fa-globe"></i>
        <span>${c.name}</span>
      </div>
    `).join('');
  }

  // --- FAQ ---
  const faqList = document.getElementById('pd-faq-list');
  if (faqList && product.faqs && product.faqs.length) {
    faqList.innerHTML = product.faqs.map((faq, idx) => `
      <div class="pd-faq-item reveal">
        <button class="pd-faq-question" aria-expanded="false" aria-controls="pd-faq-answer-${idx}">
          <span>${faq.question}</span>
          <i class="fa fa-chevron-down"></i>
        </button>
        <div class="pd-faq-answer" id="pd-faq-answer-${idx}">
          <p>${faq.answer}</p>
        </div>
      </div>
    `).join('');

    faqList.querySelectorAll('.pd-faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const isOpen = btn.getAttribute('aria-expanded') === 'true';
        faqList.querySelectorAll('.pd-faq-question').forEach(b => b.setAttribute('aria-expanded', 'false'));
        faqList.querySelectorAll('.pd-faq-answer').forEach(a => a.style.maxHeight = '0');
        if (!isOpen) {
          btn.setAttribute('aria-expanded', 'true');
          const answer = btn.nextElementSibling;
          if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  }

  // --- RELATED PRODUCTS ---
  const relatedGrid = document.getElementById('pd-related-grid');
  const relatedEmpty = document.getElementById('pd-related-empty');
  if (relatedGrid) {
    const slugs = (product.relatedProductSlugs || []).filter(Boolean);
    let related = slugs.map(s => (config.productDetails || []).find(p => p.slug === s)).filter(Boolean);
    if (!related.length && product.categoryIds && product.categoryIds.length) {
      related = (config.productDetails || []).filter(p => p.slug !== product.slug && p.categoryIds && p.categoryIds.some(cid => product.categoryIds.includes(cid))).slice(0, 4);
    }
    if (!related.length) { if (relatedEmpty) relatedEmpty.style.display = 'block'; }
    else {
      if (relatedEmpty) relatedEmpty.style.display = 'none';
      relatedGrid.innerHTML = related.map(p => {
        const r = resolveProductImages(p);
        return `
          <a href="${getProductUrl(p)}" class="pd-related-card reveal">
            <div class="pd-related-img"><img src="${r.image || ''}" alt="${p.title}" loading="lazy"/></div>
            <div class="pd-related-body">
              <h3>${p.title}</h3>
              <p>${(p.shortDescription || '').slice(0, 80)}${(p.shortDescription || '').length > 80 ? '...' : ''}</p>
              <span class="btn btn-dark btn-sm"><i class="fa fa-arrow-right"></i> View</span>
            </div>
          </a>
        `;
      }).join('');
    }
  }

  // --- INQUIRY FORM ---
  const productField = document.getElementById('pd-inq-product');
  if (productField) productField.value = product.title;

  const form = document.getElementById('pd-inquiry-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const required = form.querySelectorAll('[required]');
      let valid = true;
      required.forEach(inp => {
        inp.classList.remove('invalid');
        if (!inp.value.trim()) { inp.classList.add('invalid'); valid = false; }
        if (inp.type === 'email' && inp.value.trim() && !validateEmail(inp.value)) { inp.classList.add('invalid'); valid = false; }
        if (inp.type === 'tel' && inp.value.trim() && !validatePhone(inp.value)) { inp.classList.add('invalid'); valid = false; }
      });
      if (!valid) return;
      const btn = form.querySelector('button[type="submit"]');
      const orig = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Sending...';
      const fd = new FormData();
      fd.append('name', document.getElementById('pd-inq-name')?.value || '');
      fd.append('company', document.getElementById('pd-inq-company')?.value || '');
      fd.append('email', document.getElementById('pd-inq-email')?.value || '');
      fd.append('phone', document.getElementById('pd-inq-phone')?.value || '');
      fd.append('country', document.getElementById('pd-inq-country')?.value || '');
      fd.append('product', document.getElementById('pd-inq-product')?.value || '');
      fd.append('quantity', document.getElementById('pd-inq-qty')?.value || '');
      fd.append('message', document.getElementById('pd-inq-msg')?.value || '');
      fd.append('access_key', config.business.web3forms_key);
      fd.append('subject', `Product Inquiry: ${product.title}`);
      fd.append('from_name', businessName);

      if (!config.business.web3forms_key || config.business.web3forms_key === 'YOUR_ACCESS_KEY_HERE') {
        const successMsg = document.getElementById('pd-inquiry-success');
        if (successMsg) {
          successMsg.style.display = 'block';
          successMsg.style.backgroundColor = '#fff7ed';
          successMsg.style.borderColor = '#f59e0b';
          successMsg.style.color = '#7c2d12';
          successMsg.innerHTML = `<i class="fa fa-triangle-exclamation"></i> Inquiry form not connected yet. Please contact us via phone/WhatsApp.`;
        }
        btn.disabled = false;
        btn.innerHTML = orig;
        return;
      }

      try {
        const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
        const data = await res.json();
        if (data.success) {
          const successMsg = document.getElementById('pd-inquiry-success');
          if (successMsg) {
            successMsg.style.display = 'block';
            successMsg.style.backgroundColor = '#ecfdf5';
            successMsg.style.borderColor = '#10b981';
            successMsg.style.color = '#065f46';
            successMsg.innerHTML = '<i class="fa fa-circle-check"></i> Thank you! Your inquiry has been submitted. We will contact you shortly.';
          }
          form.reset();
        } else {
          alert('Submission failed: ' + data.message);
        }
      } catch {
        alert('An error occurred. Please contact us directly via WhatsApp or email.');
      } finally {
        btn.disabled = false;
        btn.innerHTML = orig;
      }
    });
  }

  // --- SIDEBAR SETUP ---
  // Populate materials in sidebar from config
  const sidebarMaterials = document.getElementById('pd-sidebar-materials');
  if (sidebarMaterials) {
    sidebarMaterials.innerHTML = (config.materials || []).map(m => {
      const url = `/materials/${m.slug}/`;
      return `<a href="${url}" class="pd-sidebar-link" style="display:inline-block; padding:4px 10px; margin:3px; font-size:0.8125rem;">${m.title}</a>`;
    }).join('');
  }

  // Set active category in sidebar
  const sidebarLinks = document.querySelectorAll('.pd-sidebar-link');
  sidebarLinks.forEach(link => {
    const cat = link.dataset.category;
    if (cat && cat === catId) {
      link.classList.add('active');
    }
  });

  // Set sidebar contact links
  const sidebarCall = document.getElementById('pd-sidebar-call');
  const sidebarWa = document.getElementById('pd-sidebar-wa');
  const sidebarEmail = document.getElementById('pd-sidebar-email');
  if (sidebarCall) sidebarCall.href = phoneHref;
  if (sidebarWa) sidebarWa.href = waHref;
  if (sidebarEmail) sidebarEmail.href = emailHref;

  // Sidebar inquiry form
  const sidebarForm = document.getElementById('pd-sidebar-inquiry-form');
  if (sidebarForm) {
    sidebarForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const inputs = sidebarForm.querySelectorAll('input[required], textarea[required]');
      let valid = true;
      inputs.forEach(inp => {
        inp.classList.remove('invalid');
        if (!inp.value.trim()) { inp.classList.add('invalid'); valid = false; }
        if (inp.type === 'email' && inp.value.trim() && !validateEmail(inp.value)) { inp.classList.add('invalid'); valid = false; }
        if (inp.type === 'tel' && inp.value.trim() && !validatePhone(inp.value)) { inp.classList.add('invalid'); valid = false; }
      });
      if (!valid) return;

      const btn = sidebarForm.querySelector('button[type="submit"]');
      const orig = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Sending...';
      const fd = new FormData();
      fd.append('name', inputs[0]?.value || '');
      fd.append('email', inputs[1]?.value || '');
      fd.append('phone', inputs[2]?.value || '');
      fd.append('message', inputs[3]?.value || '');
      fd.append('product', product.title);
      fd.append('access_key', config.business.web3forms_key);
      fd.append('subject', `Quick Inquiry: ${product.title}`);
      fd.append('from_name', businessName);

      if (!config.business.web3forms_key || config.business.web3forms_key === 'YOUR_ACCESS_KEY_HERE') {
        alert('Inquiry form not connected. Please call or WhatsApp us.');
        btn.disabled = false;
        btn.innerHTML = orig;
        return;
      }

      try {
        const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
        const data = await res.json();
        if (data.success) {
          alert('Inquiry submitted! We will contact you shortly.');
          sidebarForm.reset();
        } else {
          alert('Submission error: ' + data.message);
        }
      } catch {
        alert('Error submitting. Please contact us directly.');
      } finally {
        btn.disabled = false;
        btn.innerHTML = orig;
      }
    });
  }

  // --- LIGHTBOX ---
  setupLightbox();

  // --- LOADING ---
  if (loader) loader.style.display = 'none';

  // --- SHOW LAYOUT ---
  const layout = document.getElementById('product-details-layout');
  if (layout) layout.style.display = 'grid';

  // Reveal animations
  prepareRevealTargets();
  initScrollReveal();
}

function setupLightbox() {
  const lightbox = document.getElementById('product-lightbox');
  if (!lightbox) return;

  const closeBtn = document.getElementById('pd-lightbox-close');
  const prevBtn = document.getElementById('pd-lightbox-prev');
  const nextBtn = document.getElementById('pd-lightbox-next');
  const img = document.getElementById('pd-lightbox-img');
  const counter = document.getElementById('pd-lightbox-counter');

  let images = [];
  let currentIdx = 0;

  // Expose open function globally for gallery clicks
  window.openLightbox = (imageSrc, title, imgs = [], startIdx = 0) => {
    images = imgs.length ? imgs : [imageSrc];
    currentIdx = startIdx;
    lightbox.style.display = 'flex';
    updateLightboxImage();
  };

  function updateLightboxImage() {
    if (!img || !images.length) return;
    img.src = images[currentIdx];
    img.alt = `Product image ${currentIdx + 1}`;
    if (counter) counter.textContent = `${currentIdx + 1} / ${images.length}`;
    prevBtn.style.display = images.length > 1 ? 'flex' : 'none';
    nextBtn.style.display = images.length > 1 ? 'flex' : 'none';
  }

  function closeLightbox() {
    lightbox.style.display = 'none';
  }

  function prevImage() {
    if (images.length < 2) return;
    currentIdx = (currentIdx - 1 + images.length) % images.length;
    updateLightboxImage();
  }

  function nextImage() {
    if (images.length < 2) return;
    currentIdx = (currentIdx + 1) % images.length;
    updateLightboxImage();
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', prevImage);
  if (nextBtn) nextBtn.addEventListener('click', nextImage);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (lightbox.style.display !== 'flex') return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  });
}

function injectBreadcrumbJsonLd(product) {
  const old = document.getElementById('breadcrumb-jsonld');
  if (old) old.remove();
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'breadcrumb-jsonld';
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sujalenterprise.com/' },
      { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://sujalenterprise.com/products.html' },
      { '@type': 'ListItem', position: 3, name: product.title, item: `https://sujalenterprise.com${getProductUrl(product)}` }
    ]
  });
  document.head.appendChild(script);
}

function injectFaqJsonLd(faqs) {
  const old = document.getElementById('faq-jsonld');
  if (old) old.remove();
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'faq-jsonld';
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }))
  });
  document.head.appendChild(script);
}

function prepareRevealTargets() {
  document.querySelectorAll([
    '.section-padding > .container',
    '.page-header-content',
    '.premium-card',
    '.feature-card',
    '.inquiry-form-card',
    '.product-summary',
    '.stats-section .stat-item'
  ].join(',')).forEach(el => {
    if (!el.classList.contains('reveal') && !el.closest('.nav-bar') && !el.closest('.footer')) {
      el.classList.add('reveal');
    }
  });
}

function initScrollReveal() {

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  const elements = document.querySelectorAll('.reveal:not(.visible)');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  elements.forEach(el => observer.observe(el));
}

// =========================================================================
// MATERIALS CATALOG PAGE - Config-Driven Material Cards
// =========================================================================
function populateMaterialsPage() {
  const container = document.getElementById('materials-catalog-container');
  if (!container) return;
  container.innerHTML = '';

  const searchInput = document.getElementById('materials-search-input');
  const countLabel = document.getElementById('materials-result-label');
  const materials = (config.materialDetails || []).slice();

  const renderCards = (results) => {
    container.innerHTML = '';
    if (!results.length) {
      container.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:60px 20px; color:var(--text-muted);"><i class="fa fa-cube" style="font-size:2.5rem; margin-bottom:16px; display:block;"></i><p>No materials found.</p></div>';
      if (countLabel) countLabel.textContent = '0 materials';
      return;
    }
    if (countLabel) countLabel.textContent = `Showing ${results.length} material${results.length === 1 ? '' : 's'}`;

    results.forEach((m, idx) => {
      const resolved = resolveMaterialImages(m);
      const card = document.createElement('a');
      card.className = 'product-card-premium reveal';
      card.href = `/materials/${m.slug}/`;
      card.style.animationDelay = `${idx * 60}ms`;
      card.innerHTML = `
        <div class="card-img-wrap">
          <img src="${resolved.image || ''}" alt="${m.name}" loading="lazy"/>
          <div class="card-img-overlay"></div>
        </div>
        <div class="card-body">
          <h3 class="card-title">${m.name}</h3>
          <p class="card-desc">${m.shortDescription || ''}</p>
        </div>
        <div class="card-footer">
          <div class="card-standards">
            ${(m.grades || []).slice(0, 3).map(g => `<span>${g}</span>`).join('')}
          </div>
          <span class="card-view-btn">View Material <i class="fa fa-arrow-right"></i></span>
        </div>
      `;
      container.appendChild(card);
    });
    initScrollReveal();
  };

  // Search handler
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.trim().toLowerCase();
      if (!q) { renderCards(materials); return; }
      const filtered = materials.filter(m => {
        const text = [
          m.name, m.shortDescription, m.longDescription,
          ...(m.grades || []), ...(m.applications || []).map(a => a.name),
          ...(m.keywords || [])
        ].join(' ').toLowerCase();
        return text.includes(q);
      });
      renderCards(filtered);
    });
  }

  renderCards(materials);

  // Populate material inquiry dropdown dynamically
  const matSelect = document.getElementById('materials-inquiry-select');
  if (matSelect && matSelect.options.length <= 1) {
    (config.materials || []).forEach(m => {
      const opt = document.createElement('option');
      opt.value = m.title;
      opt.textContent = m.title;
      matSelect.appendChild(opt);
    });
  }
}

// =========================================================================
// MATERIAL DETAILS PAGE — Premium 70/30 Layout (Config-Driven)
// =========================================================================
function populateMaterialDetailsPage() {
  const loader = document.getElementById('md-loading');
  if (!loader && !document.getElementById('material-details-layout')) return;

  const slug = getMaterialSlugFromUrl();
  if (!slug) {
    if (loader) loader.innerHTML = '<p style="color:var(--text-muted);">Missing material slug in URL. <a href="/materials.html">Back to materials</a></p>';
    return;
  }

  const material = (config.materialDetails || []).find(m => m.slug === slug);
  if (!material) {
    if (loader) loader.innerHTML = '<p style="color:var(--text-muted);">Material not found. <a href="/materials.html">Back to materials</a></p>';
    return;
  }

  const resolved = resolveMaterialImages(material);
  const waNum = config.business.whatsapp.replace(/\+/g, '').replace(/\s+/g, '');
  const waMsg = encodeURIComponent(`Hello ${config.business.name}, I want to inquire about: ${material.name}.`);
  const waHref = `https://wa.me/${waNum}?text=${waMsg}`;
  const phoneHref = `tel:${config.business.phones[0].replace(/\s+/g, '')}`;
  const emailHref = `mailto:${config.business.email}`;
  const businessName = config.business.name;

  // --- SEO ---
  document.title = material.metaTitle || `${material.name} | ${businessName}`;
  updateMetaTag('description', material.metaDescription || material.shortDescription || '');
  updateMetaTag('keywords', [...(material.keywords || []), businessName].join(', '));
  updateMetaProperty('og:title', document.title);
  updateMetaProperty('og:description', material.shortDescription || '');
  updateMetaProperty('og:url', window.location.href);
  updateMetaProperty('og:image', resolved.image || '');
  updateMetaName('twitter:card', 'summary_large_image');
  updateMetaName('twitter:title', document.title);
  updateMetaName('twitter:description', material.shortDescription || '');
  updateMetaName('twitter:image', resolved.image || '');
  updateCanonical(window.location.href);
  injectMaterialJsonLd(material);
  injectMaterialBreadcrumbJsonLd(material);
  if (material.faqs && material.faqs.length) injectFaqJsonLd(material.faqs);

  const setText = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text || ''; };
  const setHtml = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html || ''; };
  const setAttr = (id, attr, val) => { const el = document.getElementById(id); if (el) el.setAttribute(attr, val); };

  // --- HERO ---
  setText('md-breadcrumb-current', material.name);
  setText('md-material-badge', material.name);
  setText('md-title', material.name);
  setText('md-short-desc', material.shortDescription || '');
  setAttr('md-hero-call', 'href', phoneHref);
  setAttr('md-hero-whatsapp', 'href', waHref);

  // --- OVERVIEW ---
  const introHeading = document.getElementById('md-overview-heading');
  if (introHeading) introHeading.textContent = `About ${material.name}`;
  const introContent = document.getElementById('md-intro-content');
  if (introContent) {
    introContent.innerHTML = `<p>${material.longDescription || material.shortDescription || ''}</p>`;
  }

  // --- GALLERY ---
  const galleryMain = document.getElementById('md-gallery-main-img');
  const thumbs = document.getElementById('md-gallery-thumbs');
  let images = (resolved.galleryImages && resolved.galleryImages.length) ? resolved.galleryImages : (resolved.image ? [resolved.image] : []);
  let currentImgIdx = 0;

  if (galleryMain && images.length) {
    galleryMain.src = images[0];
    galleryMain.alt = material.name;
  }

  if (thumbs) {
    thumbs.innerHTML = '';
    images.forEach((src, idx) => {
      const btn = document.createElement('button');
      btn.className = 'pd-thumb-btn' + (idx === 0 ? ' active' : '');
      btn.setAttribute('aria-label', `View image ${idx + 1}`);
      btn.innerHTML = `<img src="${src}" alt="${material.name}" loading="lazy"/>`;
      btn.addEventListener('click', () => {
        currentImgIdx = idx;
        if (galleryMain) { galleryMain.src = src; galleryMain.alt = material.name; }
        thumbs.querySelectorAll('.pd-thumb-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
      thumbs.appendChild(btn);
    });
  }

  const zoomBtn = document.getElementById('md-gallery-zoom-btn');
  if (zoomBtn) {
    zoomBtn.addEventListener('click', () => {
      openLightbox(images[currentImgIdx], material.name, images, currentImgIdx);
    });
  }

  if (galleryMain) {
    galleryMain.addEventListener('click', () => {
      openLightbox(images[currentImgIdx], material.name, images, currentImgIdx);
    });
  }

  const prevBtn = document.querySelector('.pd-gallery-prev');
  const nextBtn = document.querySelector('.pd-gallery-next');
  if (prevBtn && images.length > 1) {
    prevBtn.addEventListener('click', () => {
      currentImgIdx = (currentImgIdx - 1 + images.length) % images.length;
      if (galleryMain) galleryMain.src = images[currentImgIdx];
      if (thumbs) thumbs.querySelectorAll('.pd-thumb-btn').forEach((b, i) => b.classList.toggle('active', i === currentImgIdx));
    });
  }
  if (nextBtn && images.length > 1) {
    nextBtn.addEventListener('click', () => {
      currentImgIdx = (currentImgIdx + 1) % images.length;
      if (galleryMain) galleryMain.src = images[currentImgIdx];
      if (thumbs) thumbs.querySelectorAll('.pd-thumb-btn').forEach((b, i) => b.classList.toggle('active', i === currentImgIdx));
    });
  }

  // --- SPECS TABLE ---
  const specsBody = document.getElementById('md-specs-body');
  if (specsBody && material.specifications && material.specifications.length) {
    specsBody.innerHTML = material.specifications.map(s => `
      <tr><td>${s.label || ''}</td><td>${s.value || ''}</td></tr>
    `).join('');
  }

  const specsSearch = document.getElementById('md-specs-search-input');
  if (specsSearch && specsBody) {
    specsSearch.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const rows = specsBody.querySelectorAll('tr');
      let visibleCount = 0;
      const emptyMsg = document.getElementById('md-specs-empty');
      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (!q || text.includes(q)) { row.style.display = ''; visibleCount++; }
        else { row.style.display = 'none'; }
      });
      if (emptyMsg) emptyMsg.style.display = visibleCount === 0 ? 'block' : 'none';
    });
  }

  const copyBtn = document.getElementById('md-specs-copy-btn');
  if (copyBtn && specsBody) {
    copyBtn.addEventListener('click', () => {
      const rows = specsBody.querySelectorAll('tr');
      let text = 'Particular\tSpecification\n';
      rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length === 2) text += `${cells[0].textContent}\t${cells[1].textContent}\n`;
      });
      navigator.clipboard.writeText(text).then(() => {
        copyBtn.innerHTML = '<i class="fa fa-check"></i> Copied!';
        setTimeout(() => { copyBtn.innerHTML = '<i class="fa fa-copy"></i> Copy'; }, 2000);
      }).catch(() => { alert('Could not copy. Please select and copy manually.'); });
    });
  }

  // --- GRADES ---
  const gradesGrid = document.getElementById('md-grades-grid');
  if (gradesGrid && material.grades && material.grades.length) {
    gradesGrid.innerHTML = material.grades.map(g => `<span class="pd-city-chip">${g}</span>`).join('');
  }

  // --- APPLICATIONS ---
  const appsGrid = document.getElementById('md-apps-grid');
  if (appsGrid && material.applications && material.applications.length) {
    appsGrid.innerHTML = material.applications.map(a => `
      <div class="pd-app-card reveal">
        <div class="pd-app-icon"><i class="fa ${a.icon}"></i></div>
        <h4>${a.name}</h4>
        <p>${a.description || ''}</p>
      </div>
    `).join('');
  }

  // --- PRODUCTS USING THIS MATERIAL ---
  const productsGrid = document.getElementById('md-products-grid');
  const productsEmpty = document.getElementById('md-products-empty');
  if (productsGrid) {
    const productSlugs = material.products || [];
    let relatedProducts = productSlugs.map(s => (config.productDetails || []).find(p => p.slug === s)).filter(Boolean);
    if (!relatedProducts.length) {
      if (productsEmpty) productsEmpty.style.display = 'block';
    } else {
      if (productsEmpty) productsEmpty.style.display = 'none';
      productsGrid.innerHTML = relatedProducts.map(p => {
        const r = resolveProductImages(p);
        return `
          <a href="${getProductUrl(p)}" class="pd-related-card reveal">
            <div class="pd-related-img"><img src="${r.image || ''}" alt="${p.title}" loading="lazy"/></div>
            <div class="pd-related-body">
              <h3>${p.title}</h3>
              <p>${(p.shortDescription || '').slice(0, 80)}${(p.shortDescription || '').length > 80 ? '...' : ''}</p>
              <span class="btn btn-dark btn-sm"><i class="fa fa-arrow-right"></i> View</span>
            </div>
          </a>
        `;
      }).join('');
    }
  }

  // --- PACKAGING ---
  const packagingGrid = document.getElementById('md-packaging-grid');
  if (packagingGrid && material.packaging && material.packaging.length) {
    packagingGrid.innerHTML = material.packaging.map(p => `
      <div class="pd-delivery-card reveal">
        <div class="pd-delivery-icon"><i class="fa ${p.icon}"></i></div>
        <h3>${p.title}</h3>
        <p>${p.text}</p>
      </div>
    `).join('');
  }

  // --- CITIES ---
  const citiesGrid = document.getElementById('md-cities-grid');
  if (citiesGrid && material.citiesSupplied && material.citiesSupplied.length) {
    citiesGrid.innerHTML = material.citiesSupplied.map(c => `<span class="pd-city-chip">${c}</span>`).join('');
  }

  // --- COUNTRIES ---
  const countriesGrid = document.getElementById('md-countries-grid');
  if (countriesGrid && material.countriesExported && material.countriesExported.length) {
    countriesGrid.innerHTML = material.countriesExported.map(c => `
      <div class="pd-country-card ${c.highlight ? 'pd-country-highlight' : ''} reveal">
        <i class="fa fa-globe"></i>
        <span>${c.name}</span>
      </div>
    `).join('');
  }

  // --- FAQ ---
  const faqList = document.getElementById('md-faq-list');
  if (faqList && material.faqs && material.faqs.length) {
    faqList.innerHTML = material.faqs.map((faq, idx) => `
      <div class="pd-faq-item reveal">
        <button class="pd-faq-question" aria-expanded="false" aria-controls="md-faq-answer-${idx}">
          <span>${faq.question}</span>
          <i class="fa fa-chevron-down"></i>
        </button>
        <div class="pd-faq-answer" id="md-faq-answer-${idx}">
          <p>${faq.answer}</p>
        </div>
      </div>
    `).join('');
    faqList.querySelectorAll('.pd-faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const isOpen = btn.getAttribute('aria-expanded') === 'true';
        faqList.querySelectorAll('.pd-faq-question').forEach(b => b.setAttribute('aria-expanded', 'false'));
        faqList.querySelectorAll('.pd-faq-answer').forEach(a => a.style.maxHeight = '0');
        if (!isOpen) {
          btn.setAttribute('aria-expanded', 'true');
          const answer = btn.nextElementSibling;
          if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  }

  // --- RELATED MATERIALS ---
  const relatedGrid = document.getElementById('md-related-grid');
  const relatedEmpty = document.getElementById('md-related-empty');
  if (relatedGrid) {
    const slugs = (material.relatedMaterials || []).filter(Boolean);
    const related = slugs.map(s => (config.materialDetails || []).find(m => m.slug === s)).filter(Boolean);
    if (!related.length) { if (relatedEmpty) relatedEmpty.style.display = 'block'; }
    else {
      if (relatedEmpty) relatedEmpty.style.display = 'none';
      relatedGrid.innerHTML = related.map(m => {
        const r = resolveMaterialImages(m);
        return `
          <a href="/materials/${m.slug}/" class="pd-related-card reveal">
            <div class="pd-related-img"><img src="${r.image || ''}" alt="${m.name}" loading="lazy"/></div>
            <div class="pd-related-body">
              <h3>${m.name}</h3>
              <p>${(m.shortDescription || '').slice(0, 80)}${(m.shortDescription || '').length > 80 ? '...' : ''}</p>
              <span class="btn btn-dark btn-sm"><i class="fa fa-arrow-right"></i> View</span>
            </div>
          </a>
        `;
      }).join('');
    }
  }

  // --- CTA ---
  const ctaName = document.getElementById('md-cta-name');
  if (ctaName) ctaName.textContent = material.name;
  const ctaCall = document.getElementById('md-cta-call');
  const ctaWa = document.getElementById('md-cta-wa');
  if (ctaCall) ctaCall.href = phoneHref;
  if (ctaWa) ctaWa.href = waHref;

  // --- INQUIRY FORM ---
  const materialField = document.getElementById('md-inq-material');
  if (materialField) materialField.value = material.name;

  const form = document.getElementById('md-inquiry-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const required = form.querySelectorAll('[required]');
      let valid = true;
      required.forEach(inp => {
        inp.classList.remove('invalid');
        if (!inp.value.trim()) { inp.classList.add('invalid'); valid = false; }
        if (inp.type === 'email' && inp.value.trim() && !validateEmail(inp.value)) { inp.classList.add('invalid'); valid = false; }
        if (inp.type === 'tel' && inp.value.trim() && !validatePhone(inp.value)) { inp.classList.add('invalid'); valid = false; }
      });
      if (!valid) return;
      const btn = form.querySelector('button[type="submit"]');
      const orig = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Sending...';
      const fd = new FormData();
      fd.append('name', document.getElementById('md-inq-name')?.value || '');
      fd.append('company', document.getElementById('md-inq-company')?.value || '');
      fd.append('email', document.getElementById('md-inq-email')?.value || '');
      fd.append('phone', document.getElementById('md-inq-phone')?.value || '');
      fd.append('country', document.getElementById('md-inq-country')?.value || '');
      fd.append('material', document.getElementById('md-inq-material')?.value || '');
      fd.append('quantity', document.getElementById('md-inq-qty')?.value || '');
      fd.append('message', document.getElementById('md-inq-msg')?.value || '');
      fd.append('access_key', config.business.web3forms_key);
      fd.append('subject', `Material Inquiry: ${material.name}`);
      fd.append('from_name', businessName);

      if (!config.business.web3forms_key || config.business.web3forms_key === 'YOUR_ACCESS_KEY_HERE') {
        const successMsg = document.getElementById('md-inquiry-success');
        if (successMsg) {
          successMsg.style.display = 'block';
          successMsg.style.backgroundColor = '#fff7ed';
          successMsg.style.borderColor = '#f59e0b';
          successMsg.style.color = '#7c2d12';
          successMsg.innerHTML = '<i class="fa fa-triangle-exclamation"></i> Inquiry form not connected yet. Please contact us via phone/WhatsApp.';
        }
        btn.disabled = false;
        btn.innerHTML = orig;
        return;
      }

      try {
        const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
        const data = await res.json();
        if (data.success) {
          const successMsg = document.getElementById('md-inquiry-success');
          if (successMsg) {
            successMsg.style.display = 'block';
            successMsg.style.backgroundColor = '#ecfdf5';
            successMsg.style.borderColor = '#10b981';
            successMsg.style.color = '#065f46';
            successMsg.innerHTML = '<i class="fa fa-circle-check"></i> Thank you! Your inquiry has been submitted. We will contact you shortly.';
          }
          form.reset();
        } else {
          alert('Submission failed: ' + data.message);
        }
      } catch {
        alert('An error occurred. Please contact us directly via WhatsApp or email.');
      } finally {
        btn.disabled = false;
        btn.innerHTML = orig;
      }
    });
  }

  // --- SIDEBAR SETUP ---
  const sidebarNav = document.getElementById('md-sidebar-nav');
  if (sidebarNav) {
    sidebarNav.innerHTML = (config.materials || []).map(m => `
      <a href="/materials/${m.slug}/" class="pd-sidebar-link ${m.slug === slug ? 'active' : ''}" data-slug="${m.slug}">${m.title}</a>
    `).join('');
  }

  const sidebarProducts = document.getElementById('md-sidebar-products');
  if (sidebarProducts) {
    const productSlugs = material.products || [];
    const products = productSlugs.map(s => (config.productDetails || []).find(p => p.slug === s)).filter(Boolean);
    if (products.length) {
      sidebarProducts.innerHTML = products.map(p => `<a href="${getProductUrl(p)}" class="pd-sidebar-link">${p.title}</a>`).join('');
    } else {
      const block = document.getElementById('md-sidebar-products-block');
      if (block) block.style.display = 'none';
    }
  }

  const sidebarCall = document.getElementById('md-sidebar-call');
  const sidebarWa = document.getElementById('md-sidebar-wa');
  const sidebarEmail = document.getElementById('md-sidebar-email');
  if (sidebarCall) sidebarCall.href = phoneHref;
  if (sidebarWa) sidebarWa.href = waHref;
  if (sidebarEmail) sidebarEmail.href = emailHref;

  const sidebarForm = document.getElementById('md-sidebar-inquiry-form');
  if (sidebarForm) {
    sidebarForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const inputs = sidebarForm.querySelectorAll('input[required], textarea[required]');
      let valid = true;
      inputs.forEach(inp => {
        inp.classList.remove('invalid');
        if (!inp.value.trim()) { inp.classList.add('invalid'); valid = false; }
        if (inp.type === 'email' && inp.value.trim() && !validateEmail(inp.value)) { inp.classList.add('invalid'); valid = false; }
        if (inp.type === 'tel' && inp.value.trim() && !validatePhone(inp.value)) { inp.classList.add('invalid'); valid = false; }
      });
      if (!valid) return;
      const btn = sidebarForm.querySelector('button[type="submit"]');
      const orig = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Sending...';
      const fd = new FormData();
      fd.append('name', inputs[0]?.value || '');
      fd.append('email', inputs[1]?.value || '');
      fd.append('phone', inputs[2]?.value || '');
      fd.append('message', inputs[3]?.value || '');
      fd.append('material', material.name);
      fd.append('access_key', config.business.web3forms_key);
      fd.append('subject', `Quick Material Inquiry: ${material.name}`);
      fd.append('from_name', businessName);
      if (!config.business.web3forms_key || config.business.web3forms_key === 'YOUR_ACCESS_KEY_HERE') {
        alert('Inquiry form not connected. Please call or WhatsApp us.');
        btn.disabled = false; btn.innerHTML = orig; return;
      }
      try {
        const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
        const data = await res.json();
        if (data.success) { alert('Inquiry submitted! We will contact you shortly.'); sidebarForm.reset(); }
        else { alert('Submission error: ' + data.message); }
      } catch { alert('Error submitting. Please contact us directly.'); }
      finally { btn.disabled = false; btn.innerHTML = orig; }
    });
  }

  // --- LIGHTBOX ---
  setupLightbox();

  // --- LOADING ---
  if (loader) loader.style.display = 'none';

  // --- SHOW LAYOUT ---
  const materialLayout = document.getElementById('material-details-layout');
  if (materialLayout) materialLayout.style.display = 'grid';

  prepareRevealTargets();
  initScrollReveal();
}

function getMaterialSlugFromUrl() {
  const parts = window.location.pathname.split('/').filter(Boolean);
  const materialsIndex = parts.indexOf('materials');
  if (materialsIndex !== -1 && parts[materialsIndex + 1]) {
    return parts[materialsIndex + 1];
  }
  return '';
}

function injectMaterialBreadcrumbJsonLd(material) {
  const old = document.getElementById('breadcrumb-jsonld');
  if (old) old.remove();
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'breadcrumb-jsonld';
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sujalenterprise.com/' },
      { '@type': 'ListItem', position: 2, name: 'Materials', item: 'https://sujalenterprise.com/materials.html' },
      { '@type': 'ListItem', position: 3, name: material.name, item: `https://sujalenterprise.com/materials/${material.slug}/` }
    ]
  });
  document.head.appendChild(script);
}

function updateMetaTag(name, content) {
  const tag = document.querySelector(`meta[name="${name}"]`);
  if (tag && content) tag.setAttribute('content', content);
}

function updateMetaProperty(property, content) {
  const tag = document.querySelector(`meta[property="${property}"]`);
  if (tag && content) tag.setAttribute('content', content);
}

function updateMetaName(name, content) {
  const tag = document.querySelector(`meta[name="${name}"]`);
  if (tag && content) tag.setAttribute('content', content);
}

function injectProductJsonLd(product) {
  const old = document.getElementById('product-jsonld');
  if (old) old.remove();

  const resolved = resolveProductImages(product);

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'product-jsonld';
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    url: `https://sujalenterprise.com/products/${product.slug}/`,
    image: resolved.galleryImages || [resolved.image],
    description: product.fullDescription || product.shortDescription,
    brand: {
      '@type': 'Brand',
      name: config.business.name
    },
    manufacturer: {
      '@type': 'Organization',
      name: config.business.name,
      url: 'https://sujalenterprise.com/'
    },
    category: (product.categoryIds || []).map(getCategoryTitleById).filter(Boolean).join(', '),
    additionalProperty: (product.technicalSpecifications || []).map(spec => ({
      '@type': 'PropertyValue',
      name: spec.label,
      value: spec.value
    }))
  });
  document.head.appendChild(script);
}

function updateCanonical(url) {
  if (!url) return;
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = url;
}

function injectMaterialJsonLd(material) {
  const old = document.getElementById('material-jsonld');
  if (old) old.remove();

  const resolved = resolveMaterialImages(material);

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'material-jsonld';
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: material.name,
    url: `https://sujalenterprise.com/materials/${material.slug}/`,
    image: resolved.galleryImages || [resolved.image],
    description: material.fullDescription || material.shortDescription || material.description,
    brand: {
      '@type': 'Brand',
      name: config.business.name
    },
    manufacturer: {
      '@type': 'Organization',
      name: config.business.name,
      url: 'https://sujalenterprise.com/'
    },
    category: 'Materials',
    additionalProperty: (material.grades || []).slice(0, 20).map(grade => ({
      '@type': 'PropertyValue',
      name: 'Grade',
      value: typeof grade === 'string' ? grade : (grade.name || '')
    }))
  });
  document.head.appendChild(script);
}

function injectStructuredData() {
  const b = config.business;
  if (!b) return;

  // Organization (site-wide)
  if (!document.getElementById('org-jsonld')) {
    const org = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: b.legalName || b.name,
      url: 'https://sujalenterprise.com/',
      logo: 'https://sujalenterprise.com' + (b.logo || ''),
      description: b.description,
      telephone: b.phones && b.phones[0],
      email: b.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: b.address,
        addressCountry: 'IN'
      }
    };
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.id = 'org-jsonld';
    s.textContent = JSON.stringify(org);
    document.head.appendChild(s);
  }

  // WebSite (site-wide)
  if (!document.getElementById('website-jsonld')) {
    const site = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: b.name,
      url: 'https://sujalenterprise.com/',
      description: b.description
    };
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.id = 'website-jsonld';
    s.textContent = JSON.stringify(site);
    document.head.appendChild(s);
  }
}


