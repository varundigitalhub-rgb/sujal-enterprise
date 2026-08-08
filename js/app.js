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
  populateHomepageCarousels();


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
          <ul class="top-bar-left">
            <li><a href="#" data-config="phone-link"></a></li>
            <li><a href="#" data-config="email-link"></a></li>
          </ul>
          <div class="top-bar-right">
            <ul id="header-socials-list">
              <!-- Populated dynamically if socials are set -->
            </ul>
          </div>
        </div>
      </div>

      <nav class="nav-bar">
        <div class="container nav-logo-row">
          <a href="/index.html" class="logo-link">
            <img class="logo-img" src="" alt="Sujal Enterprise Logo" data-config="logo" loading="eager" />
          </a>

          <ul class="nav-menu" id="primary-nav">
            <li class="mobile-panel-brand">
              <img src="" alt="Sujal Enterprise Logo" data-config="logo" loading="lazy" />
              <span data-config="tagline"></span>
            </li>
            <li><a href="/index.html" class="nav-link" data-nav="home">Home</a></li>
            <li><a href="/about-us.html" class="nav-link" data-nav="about">About</a></li>
            <li class="nav-item has-dropdown compact-dropdown">
              <a href="/products.html" class="nav-link" data-nav="products" aria-haspopup="true" aria-expanded="false">
                Products <i class="fa fa-chevron-down"></i>
              </a>
              <div class="simple-dropdown" aria-label="Product categories">
                ${(PRODUCT_NAV_ITEMS || []).map(item => {
                  const p = (config.productDetails || []).find(prod => prod.slug === item.slug);
                  return p ? `<a href="${getProductUrl(p)}">${escapeHtml(p.title)}</a>` : '';
                }).join('')}
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

// --- Homepage Client & Industry Carousels (shared reusable component) ---
function populateHomepageCarousels() {
  renderClientCarousel();
  renderIndustriesCarousel();
}

function renderClientCarousel() {
  const root = document.querySelector('[data-carousel="clients"]');
  const track = root && root.querySelector('.carousel-track');
  if (!track) return;

  track.innerHTML = (config.clients || []).map(client => `
    <div class="carousel-slide" role="group">
      <div class="client-logo-card">
        <img src="${client.logo}" alt="${client.name} logo" loading="lazy" />
      </div>
    </div>
  `).join('');

  initCarousel(root);
}

function renderIndustriesCarousel() {
  const root = document.querySelector('[data-carousel="industries"]');
  const track = root && root.querySelector('.carousel-track');
  if (!track) return;

  track.innerHTML = (config.industries || []).map(industry => `
    <div class="carousel-slide" role="group">
      <article class="premium-card industry-card" tabindex="0">
        <div class="premium-card-img-wrapper">
          <img src="${industry.image}" alt="${industry.name}" loading="lazy" />
        </div>
        <div class="premium-card-content">
          <h3>${industry.name}</h3>
          <p>${industry.description}</p>
        </div>
      </article>
    </div>
  `).join('');

  initCarousel(root);
}

function initCarousel(root) {
  if (!root) return;
  const viewport = root.querySelector('.carousel-viewport');
  const track = root.querySelector('.carousel-track');
  if (!viewport || !track) return;

  const realSlides = Array.from(track.querySelectorAll(':scope > .carousel-slide'));
  const totalReal = realSlides.length;
  if (totalReal <= 1) return;

  const prevBtn = root.querySelector('.carousel-prev');
  const nextBtn = root.querySelector('.carousel-next');
  const dotsWrap = root.querySelector('.carousel-dots');

  const firstClone = realSlides[0].cloneNode(true);
  const lastClone = realSlides[totalReal - 1].cloneNode(true);
  firstClone.setAttribute('aria-hidden', 'true');
  lastClone.setAttribute('aria-hidden', 'true');
  track.appendChild(firstClone);
  track.insertBefore(lastClone, track.firstChild);

  const total = totalReal + 2;
  let current = 1;
  let slideWidth = 0;
  let autoplayId = null;
  let isPaused = false;
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function getPerView() {
    const w = window.innerWidth;
    if (w >= 1200) return 4;
    if (w >= 992) return 3;
    if (w >= 641) return 2;
    return 1;
  }

  function measure() {
    slideWidth = viewport.offsetWidth / getPerView();
  }

  function realIndex(index) {
    return (index - 1 + totalReal) % totalReal;
  }

  function updateDots() {
    if (!dotsWrap) return;
    const active = realIndex(current);
    dotsWrap.querySelectorAll('.carousel-dot').forEach((dot, i) => {
      const isActive = i === active;
      dot.classList.toggle('active', isActive);
      dot.setAttribute('aria-pressed', String(isActive));
    });
  }

  function buildDots() {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = '';
    for (let i = 0; i < totalReal; i++) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'carousel-dot';
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.setAttribute('aria-pressed', String(i === 0));
      dot.addEventListener('click', () => {
        moveTo(i + 1, true);
        restartAutoplay();
      });
      dotsWrap.appendChild(dot);
    }
  }

  function update() {
    track.style.transform = 'translate3d(' + (-current * slideWidth) + 'px, 0, 0)';
    updateDots();
  }

  function moveTo(index, animate) {
    track.classList.toggle('no-transition', !animate);
    current = index;
    update();
  }

  function next() {
    moveTo(current + 1, true);
  }

  function prev() {
    moveTo(current - 1, true);
  }

  function handleTransitionEnd() {
    if (current === 0) moveTo(totalReal, false);
    else if (current === total - 1) moveTo(1, false);
  }

  function stopAutoplay() {
    if (autoplayId) {
      clearInterval(autoplayId);
      autoplayId = null;
    }
  }

  function startAutoplay() {
    if (reduceMotion || isPaused) return;
    stopAutoplay();
    autoplayId = setInterval(next, 3000);
  }

  function restartAutoplay() {
    startAutoplay();
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); restartAutoplay(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { next(); restartAutoplay(); });

  viewport.addEventListener('mouseenter', () => { isPaused = true; stopAutoplay(); });
  viewport.addEventListener('mouseleave', () => { isPaused = false; startAutoplay(); });
  root.addEventListener('focusin', (e) => {
    if (root.contains(e.target) && e.target !== root) {
      isPaused = true;
      stopAutoplay();
    }
  });
  root.addEventListener('focusout', (e) => {
    if (!root.contains(e.relatedTarget)) {
      isPaused = false;
      startAutoplay();
    }
  });

  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); restartAutoplay(); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); next(); restartAutoplay(); }
  });

  let startX = 0;
  let startY = 0;
  let swiping = false;
  viewport.addEventListener('pointerdown', (e) => {
    swiping = true;
    startX = e.clientX;
    startY = e.clientY;
    try { if (e.pointerId !== undefined && viewport.setPointerCapture) viewport.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
  });
  viewport.addEventListener('pointerup', (e) => {
    if (!swiping) return;
    swiping = false;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next(); else prev();
      restartAutoplay();
    }
  });
  viewport.addEventListener('pointercancel', () => { swiping = false; });

  track.addEventListener('transitionend', handleTransitionEnd);
  window.addEventListener('resize', () => {
    measure();
    if (current > totalReal) current = totalReal;
    if (current < 1) current = 1;
    moveTo(current, false);
  });

  measure();
  buildDots();
  if (reduceMotion) track.classList.add('no-transition');
  moveTo(current, false);
  if (!reduceMotion) startAutoplay();
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

async function submitInquiryToEndpoint(fd) {
  if (!FORM_ENDPOINT || FORM_ENDPOINT.includes('YOUR_FORM_ID')) {
    return { ok: false, notConnected: true };
  }
  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      body: fd,
      headers: { 'Accept': 'application/json' }
    });
    return { ok: res.ok };
  } catch (err) {
    return { ok: false };
  }
}

function getCategoryTitleById(categoryId) {
  return (config.products || []).find(c => c.id === categoryId)?.title || '';
}

function getProductUrl(product) {
  return product && product.slug ? `/products/${product.slug}/` : '/products.html';
}

function getSubProductHref(item, parentProduct) {
  if (item && item.href) return item.href;
  if (item && item.slug) return `/products/${item.slug}/`;
  return parentProduct ? '#pd-inquiry-section' : '';
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
// TECHNICAL SPECIFICATIONS TABLE — Reference Design (Config-Driven)
// =========================================================================
// Builds the specification table rows dynamically from config:
//   - Section heading row  (e.g. "Flanges Standard, Size & Specification")
//   - Header row           (Particulars | Specification)
//   - Normal rows          (Size, Type, Standards, Dimension, Material, ...)
//   - Grade divider row    (full width "Grade" band)
//   - Grade rows           (Stainless Steel | value, Carbon Steel | value, ...)
//   - Multi-line values    (kept as line breaks via CSS white-space: pre-line)

function buildSpecTableHtml(product) {
  const specs = product.technicalSpecifications || {};
  const legacy = Array.isArray(product.technicalSpecifications)
    ? product.technicalSpecifications
    : [];
  const rows = legacy.length ? legacy : (specs.rows || []);
  const grades = legacy.length ? [] : (specs.grades || []);
  const parts = [];

  const heading = legacy.length
    ? `${product.title} Standard, Size & Specification`
    : (specs.heading || `${product.title} Standard, Size & Specification`);
  parts.push(`<tr class="pd-specs-title-row"><td colspan="2">${escapeHtml(heading)}</td></tr>`);
  parts.push(`<tr class="pd-specs-header-row"><th scope="col">Particulars</th><th scope="col">Specification</th></tr>`);

  rows.forEach(spec => {
    parts.push(`<tr class="pd-specs-data-row"><td>${escapeHtml(spec.label || '')}</td><td>${escapeHtml(spec.value || '')}</td></tr>`);
  });

  if (grades.length) {
    parts.push(`<tr class="pd-specs-grade-row"><td colspan="2">Grade</td></tr>`);
    grades.forEach(spec => {
      parts.push(`<tr class="pd-specs-data-row pd-specs-grade-data-row"><td>${escapeHtml(spec.label || '')}</td><td>${escapeHtml(spec.value || '')}</td></tr>`);
    });
  }

  return parts.join('');
}

function getProductSpecList(product) {
  const specs = product.technicalSpecifications;
  if (Array.isArray(specs)) return specs;
  if (!specs) return [];
  return [
    ...(specs.rows || []),
    ...(specs.grades || []).map(g => ({ label: `Grade - ${g.label}`, value: g.value }))
  ];
}

function escapeHtml(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// =========================================================================
// PRODUCT DETAILS PAGE — Premium 70/30 Layout (Config-Driven)
// =========================================================================
function populateProductDetailsPage() {
  const loader = document.getElementById('pd-loading');
  if (!loader && !document.getElementById('product-details-layout')) return;

  const slug = getProductSlugFromUrl();
  if (!slug) {
    if (loader) loader.innerHTML = '<p style="color:var(--text-muted);">Missing product slug in URL. <a href="/products.html">Back to products</a></p>';
    return;
  }

  const product = (config.productDetails || []).find(p => p.slug === slug);
  if (!product) {
    if (loader) loader.innerHTML = '<p style="color:var(--text-muted);">Product not found. <a href="/products.html">Back to products</a></p>';
    return;
  }

  const resolved = resolveProductImages(product);
  const category = (product.categoryIds && product.categoryIds[0])
    ? (config.categories || []).find(c => c.id === product.categoryIds[0])
    : null;
  const waNum = String(config.business.whatsapp || '').replace(/\+/g, '').replace(/\s+/g, '');
  const waMsg = encodeURIComponent(`Hello ${config.business.name}, I want to inquire about: ${product.title}.`);
  const waHref = `https://wa.me/${waNum}?text=${waMsg}`;
  const phoneRaw = (config.business.phones && config.business.phones[0]) || '';
  const phoneHref = `tel:${phoneRaw.replace(/\s+/g, '')}`;
  const emailHref = `mailto:${config.business.email}`;
  const businessName = config.business.name;

  // --- SEO ---
  document.title = product.metaTitle || `${product.title} | ${businessName}`;
  updateMetaTag('description', product.metaDescription || product.shortDescription || '');
  updateMetaTag('keywords', [...(product.keywords || []), businessName].join(', '));
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
  injectProductBreadcrumbJsonLd(product);
  if (product.faqs && product.faqs.length) injectFaqJsonLd(product.faqs);

  // --- HERO ---
  const breadcrumbCurrent = document.getElementById('pd-breadcrumb-current');
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = product.title;
  const categoryChip = document.getElementById('pd-category-chip');
  if (categoryChip) categoryChip.textContent = category ? category.title : ((product.categoryIds || []).join(', ') || 'Products');
  const titleEl = document.getElementById('pd-title');
  if (titleEl) titleEl.textContent = product.title;
  const shortDescEl = document.getElementById('pd-short-desc');
  if (shortDescEl) shortDescEl.textContent = product.shortDescription || '';
  const heroCall = document.getElementById('pd-hero-call');
  if (heroCall) heroCall.href = phoneHref;
  const heroWa = document.getElementById('pd-hero-whatsapp');
  if (heroWa) heroWa.href = waHref;

  // --- GALLERY ---
  const galleryImages = (resolved.galleryImages && resolved.galleryImages.length)
    ? resolved.galleryImages
    : (resolved.image ? [resolved.image] : []);
  const galleryMain = document.getElementById('pd-gallery-main-img');
  if (galleryMain) {
    galleryMain.src = galleryImages[0] || '';
    galleryMain.alt = product.title;
  }
  const galleryThumbs = document.getElementById('pd-gallery-thumbs');
  if (galleryThumbs && galleryImages.length > 1) {
    galleryThumbs.innerHTML = galleryImages.map((src, i) => `
      <button class="pd-thumb-btn ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="${escapeHtml(product.title)} image ${i + 1}">
        <img src="${src}" alt="${escapeHtml(product.title)} image ${i + 1}" loading="lazy"/>
      </button>
    `).join('');
  }
  let galleryIndex = 0;
  const showGalleryImage = (i) => {
    galleryIndex = (i + galleryImages.length) % galleryImages.length;
    if (galleryMain) galleryMain.src = galleryImages[galleryIndex] || '';
    if (galleryThumbs) {
      galleryThumbs.querySelectorAll('.pd-thumb-btn').forEach((btn, bi) => {
        btn.classList.toggle('active', bi === galleryIndex);
      });
    }
  };
  const galleryPrev = document.querySelector('.pd-gallery-prev');
  const galleryNext = document.querySelector('.pd-gallery-next');
  if (galleryPrev) galleryPrev.addEventListener('click', () => showGalleryImage(galleryIndex - 1));
  if (galleryNext) galleryNext.addEventListener('click', () => showGalleryImage(galleryIndex + 1));
  if (galleryThumbs) {
    galleryThumbs.querySelectorAll('.pd-thumb-btn').forEach(btn => {
      btn.addEventListener('click', () => showGalleryImage(Number(btn.dataset.index)));
    });
  }
  const zoomBtn = document.getElementById('pd-gallery-zoom-btn');
  if (zoomBtn) zoomBtn.addEventListener('click', () => openLightbox(galleryImages, galleryIndex));
  if (galleryMain) galleryMain.addEventListener('click', () => openLightbox(galleryImages, galleryIndex));

  // --- COMPANY INTRO ---
  const introHeading = document.getElementById('pd-intro-heading');
  if (introHeading) introHeading.textContent = `${product.title} Manufacturer in India`;
  const introContent = document.getElementById('pd-intro-content');
  if (introContent) {
    let html = '';
    if (product.companyIntro) html += product.companyIntro;
    else if (product.fullDescription) html += `<p>${escapeHtml(product.fullDescription)}</p>`;
    introContent.innerHTML = html;
  }

  // --- TECHNICAL SPECIFICATIONS ---
  const specBody = document.getElementById('pd-specs-body');
  if (specBody) {
    specBody.innerHTML = buildSpecTableHtml(product);
  }
  const specSearchInput = document.getElementById('pd-specs-search-input');
  if (specSearchInput) {
    specSearchInput.addEventListener('input', () => {
      const q = specSearchInput.value.trim().toLowerCase();
      const rows = specBody ? specBody.querySelectorAll('tr.pd-specs-data-row') : [];
      let visible = 0;
      rows.forEach(row => {
        const show = !q || row.textContent.toLowerCase().includes(q);
        row.style.display = show ? '' : 'none';
        if (show) visible++;
      });
      const empty = document.getElementById('pd-specs-empty');
      if (empty) empty.style.display = visible ? 'none' : 'block';
    });
  }
  const copyBtn = document.getElementById('pd-specs-copy-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      let text = '';
      const rows = document.querySelectorAll('#pd-specs-body tr');
      rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length === 2) {
          text += `${cells[0].textContent}\t${cells[1].textContent}\n`;
        } else if (cells.length === 1) {
          const cellText = cells[0].textContent.trim();
          if (cellText) text += `\n${cellText}\n`;
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

  // --- TOP SELLING PRODUCTS ---
  const topSellingSection = document.getElementById('pd-top-selling-section');
  const topSellingGrid = document.getElementById('pd-top-selling-grid');
  if (topSellingSection && topSellingGrid) {
    const subProducts = product.subProducts || product.topSelling || [];
    if (subProducts.length) {
      const topSellingTitle = document.getElementById('pd-top-selling-title');
      if (topSellingTitle) topSellingTitle.textContent = `Top Selling ${product.title}`;
      topSellingGrid.innerHTML = subProducts.map((item, idx) => {
        const imgSrc = item.image || resolved.image || '';
        const name = item.name || '';
        const altText = item.alt || name;
        const cardInner = `
          <div class="pd-related-img">
            <img src="${imgSrc}" alt="${escapeHtml(altText)}" loading="lazy"/>
          </div>
          <div class="pd-related-body">
            <h3>${escapeHtml(name)}</h3>
          </div>
        `;
        const revealAttr = `style="animation-delay:${idx * 60}ms"`;
        const href = getSubProductHref(item, product);
        return href
          ? `<a href="${href}" class="pd-related-card pd-top-selling-card reveal" ${revealAttr}>${cardInner}</a>`
          : `<div class="pd-related-card pd-top-selling-card reveal" ${revealAttr}>${cardInner}</div>`;
      }).join('');
    } else {
      topSellingSection.style.display = 'none';
    }
  }

  // --- APPLICATIONS ---
  const appsGrid = document.getElementById('pd-apps-grid');
  if (appsGrid) {
    const apps = product.applications || [];
    appsGrid.innerHTML = apps.length
      ? apps.map(a => `
        <div class="pd-app-card reveal">
          <div class="pd-app-icon"><i class="fa ${a.icon || 'fa-industry'}"></i></div>
          <h4>${escapeHtml(a.name)}</h4>
          <p>${escapeHtml(a.description || '')}</p>
        </div>
      `).join('')
      : '';
  }

  // --- PACKAGING & DELIVERY ---
  const deliveryGrid = document.getElementById('pd-delivery-grid');
  if (deliveryGrid) {
    const deliveryInfo = product.deliveryInfo || product.packaging || [];
    deliveryGrid.innerHTML = deliveryInfo.length
      ? deliveryInfo.map(d => `
        <div class="pd-delivery-card reveal">
          <div class="pd-delivery-icon"><i class="fa ${d.icon || 'fa-box'}"></i></div>
          <h3>${escapeHtml(d.title || '')}</h3>
          <p>${escapeHtml(d.text || '')}</p>
        </div>
      `).join('')
      : '';
  }
  const logisticsList = document.getElementById('pd-logistics-list');
  if (logisticsList) {
    const info = config.logisticsInfo || [];
    logisticsList.innerHTML = info.length
      ? `<ol class="pd-logistics-items">${info.map(item => `
        <li class="pd-logistics-item">
          <strong>${escapeHtml(item.label)}:</strong> ${escapeHtml(item.value)}
        </li>
      `).join('')}</ol>`
      : '';
  }

  // --- CITIES ---
  const citiesGrid = document.getElementById('pd-cities-grid');
  if (citiesGrid) {
    const cities = product.cities || [];
    citiesGrid.innerHTML = cities.length
      ? cities.map(c => `<span class="pd-city-chip"><i class="fa fa-location-dot"></i> ${escapeHtml(c)}</span>`).join('')
      : '';
  }

  // --- COUNTRIES ---
  const countriesGrid = document.getElementById('pd-countries-grid');
  if (countriesGrid) {
    const countries = product.countries || [];
    countriesGrid.innerHTML = countries.length
      ? countries.map(c => `
        <span class="pd-country-card ${c.highlight ? 'pd-country-highlight' : ''}">
          <i class="fa fa-globe"></i> ${escapeHtml(c.name)}
        </span>
      `).join('')
      : '';
  }

  // --- FAQ ---
  const faqList = document.getElementById('pd-faq-list');
  if (faqList) {
    const faqs = product.faqs || [];
    faqList.innerHTML = faqs.length
      ? faqs.map((f, idx) => `
        <div class="pd-faq-item">
          <button class="pd-faq-question" aria-expanded="${idx === 0 ? 'true' : 'false'}" aria-controls="pd-faq-answer-${idx}">
            <span>${escapeHtml(f.question)}</span>
            <i class="fa fa-chevron-down"></i>
          </button>
          <div class="pd-faq-answer" id="pd-faq-answer-${idx}" ${idx === 0 ? 'style="max-height:300px"' : ''}>
            <p>${escapeHtml(f.answer)}</p>
          </div>
        </div>
      `).join('')
      : '';
    faqList.querySelectorAll('.pd-faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const answer = document.getElementById(btn.getAttribute('aria-controls'));
        const isOpen = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!isOpen));
        if (answer) answer.style.maxHeight = isOpen ? '0px' : answer.scrollHeight + 'px';
      });
    });
  }

  // --- RELATED PRODUCTS ---
  const relatedSection = document.getElementById('pd-section-related');
  const relatedGrid = document.getElementById('pd-related-grid');
  const relatedEmpty = document.getElementById('pd-related-empty');
  if (relatedSection && relatedGrid) {
    const related = (product.relatedProductSlugs || [])
      .map(s => (config.productDetails || []).find(p => p.slug === s))
      .filter(Boolean);
    if (related.length) {
      relatedGrid.innerHTML = related.map(p => {
        const r = resolveProductImages(p);
        return `
          <a href="${getProductUrl(p)}" class="pd-related-card reveal">
            <div class="pd-related-img">
              <img src="${r.image || ''}" alt="${escapeHtml(p.title)}" loading="lazy"/>
            </div>
            <div class="pd-related-body">
              <h3>${escapeHtml(p.title)}</h3>
            </div>
          </a>
        `;
      }).join('');
      if (relatedEmpty) relatedEmpty.style.display = 'none';
    } else {
      relatedSection.style.display = 'none';
      if (relatedEmpty) relatedEmpty.style.display = 'block';
    }
  }

  // --- MAIN INQUIRY FORM ---
  const inquiryForm = document.getElementById('pd-inquiry-form');
  if (inquiryForm) {
    const productField = document.getElementById('pd-inq-product');
    if (productField) productField.value = product.title;
    inquiryForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('pd-inq-name');
      const company = document.getElementById('pd-inq-company');
      const email = document.getElementById('pd-inq-email');
      const phone = document.getElementById('pd-inq-phone');
      const country = document.getElementById('pd-inq-country');
      const qty = document.getElementById('pd-inq-qty');
      const msg = document.getElementById('pd-inq-msg');
      const required = [name, company, email, phone, msg];
      let valid = true;
      required.forEach(f => { if (f) f.classList.remove('invalid'); });
      const markInvalid = (f) => { if (f) { f.classList.add('invalid'); valid = false; } };
      if (name && !name.value.trim()) markInvalid(name);
      if (company && !company.value.trim()) markInvalid(company);
      if (email && (!email.value.trim() || !validateEmail(email.value))) markInvalid(email);
      if (phone && (!phone.value.trim() || !validatePhone(phone.value))) markInvalid(phone);
      if (msg && !msg.value.trim()) markInvalid(msg);
      if (!valid) return;
      const btn = inquiryForm.querySelector('button[type="submit"]');
      const orig = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Sending...';
      const fd = new FormData();
      fd.append('name', name ? name.value : '');
      fd.append('company', company ? company.value : '');
      fd.append('email', email ? email.value : '');
      fd.append('phone', phone ? phone.value : '');
      fd.append('country', country ? country.value : '');
      fd.append('quantity', qty ? qty.value : '');
      fd.append('message', msg ? msg.value : '');
      fd.append('product', product.title);
      fd.append('subject', `Product Inquiry: ${product.title}`);
      fd.append('_replyto', email ? email.value : '');
      fd.append('_gotcha', '');
      const result = await submitInquiryToEndpoint(fd);
      const successEl = document.getElementById('pd-inquiry-success');
      if (result.ok) {
        if (successEl) {
          successEl.style.display = 'block';
          successEl.textContent = 'Thank you! Your inquiry has been submitted. Our team will contact you shortly.';
          successEl.style.borderColor = 'var(--success)';
          successEl.style.color = 'var(--success)';
        } else {
          alert('Inquiry submitted! We will contact you shortly.');
        }
        inquiryForm.reset();
        if (productField) productField.value = product.title;
      } else {
        const msg = result.notConnected
          ? 'Inquiry form is not connected yet. Please contact us via WhatsApp or email.'
          : 'Submission failed. Please try again or contact us directly via WhatsApp or email.';
        if (successEl) {
          successEl.style.display = 'block';
          successEl.textContent = msg;
          successEl.style.borderColor = 'var(--error)';
          successEl.style.color = 'var(--error)';
        } else {
          alert(msg);
        }
      }
      btn.disabled = false;
      btn.innerHTML = orig;
    });
  }

  // --- SIDEBAR: MATERIALS ---
  const sidebarMaterials = document.getElementById('pd-sidebar-materials');
  if (sidebarMaterials) {
    sidebarMaterials.innerHTML = (config.materials || []).map(m => `
      <span><a href="/materials/${m.slug}/">${escapeHtml(m.title)}</a></span>
    `).join('');
  }

  // --- SIDEBAR: INQUIRY FORM ---
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
      fd.append('subject', `Product Inquiry: ${product.title}`);
      fd.append('_replyto', inputs[1]?.value || '');
      fd.append('_gotcha', '');
      const result = await submitInquiryToEndpoint(fd);
      if (result.ok) {
        alert('Inquiry submitted! We will contact you shortly.');
        sidebarForm.reset();
      } else {
        alert(result.notConnected ? 'Inquiry form is not connected yet. Please contact us via WhatsApp or email.' : 'Submission failed. Please try again or contact us directly.');
      }
      btn.disabled = false;
      btn.innerHTML = orig;
    });
  }

  // --- SIDEBAR: CTA LINKS ---
  const sidebarCall = document.getElementById('pd-sidebar-call');
  const sidebarWa = document.getElementById('pd-sidebar-wa');
  const sidebarEmail = document.getElementById('pd-sidebar-email');
  if (sidebarCall) sidebarCall.href = phoneHref;
  if (sidebarWa) sidebarWa.href = waHref;
  if (sidebarEmail) sidebarEmail.href = emailHref;

  // --- SHOW LAYOUT ---
  if (loader) loader.style.display = 'none';
  const layout = document.getElementById('product-details-layout');
  if (layout) layout.style.display = 'grid';

  prepareRevealTargets();
  initScrollReveal();
}

// =========================================================================
// SCROLL REVEAL — Smooth Section/Card Entrance Animations
// =========================================================================
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
  if (typeof IntersectionObserver === 'undefined') {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }
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
// GALLERY LIGHTBOX — Zoom Overlay for Product Detail Pages
// =========================================================================
function setupLightbox(images, startIndex = 0) {
  const existing = document.getElementById('pd-lightbox');
  if (existing) existing.remove();
  if (!images || !images.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'pd-lightbox';
  overlay.id = 'pd-lightbox';
  overlay.innerHTML = `
    <button class="pd-lightbox-close" aria-label="Close"><i class="fa fa-times"></i></button>
    <button class="pd-lightbox-prev" aria-label="Previous"><i class="fa fa-chevron-left"></i></button>
    <img class="pd-lightbox-img" src="" alt="Product Image"/>
    <button class="pd-lightbox-next" aria-label="Next"><i class="fa fa-chevron-right"></i></button>
    <div class="pd-lightbox-counter"></div>
  `;
  document.body.appendChild(overlay);
  overlay.style.display = 'flex';

  let index = startIndex;
  const img = overlay.querySelector('.pd-lightbox-img');
  const counter = overlay.querySelector('.pd-lightbox-counter');
  const show = (i) => {
    index = (i + images.length) % images.length;
    img.src = images[index] || '';
    counter.textContent = `${index + 1} / ${images.length}`;
  };
  const close = () => overlay.remove();
  overlay.querySelector('.pd-lightbox-close').addEventListener('click', close);
  overlay.querySelector('.pd-lightbox-prev').addEventListener('click', () => show(index - 1));
  overlay.querySelector('.pd-lightbox-next').addEventListener('click', () => show(index + 1));
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', (e) => {
    if (!document.getElementById('pd-lightbox')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });
  show(startIndex);
}

function openLightbox(images, index = 0) {
  setupLightbox(images, index);
}

// =========================================================================
// MATERIALS CATALOG PAGE - Config-Driven Material Cards
// =========================================================================
function populateMaterialsPage() {
  const container = document.getElementById('materials-catalog-container');
  if (!container) return;

  const materials = (config.materialDetails || []).slice();

  const render = (list) => {
    container.innerHTML = list.length
      ? list.map((m, idx) => `
        <a href="/materials/${m.slug}/" class="material-card reveal" style="animation-delay:${idx * 60}ms">
          <div class="material-icon"><i class="fa fa-cubes"></i></div>
          <h3>${escapeHtml(m.name)}</h3>
          <p>${escapeHtml(((m.shortDescription || '').slice(0, 110))) }${(m.shortDescription || '').length > 110 ? '...' : ''}</p>
        </a>
      `).join('')
      : '<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:40px;">No materials found.</p>';
  };

  render(materials);

  const label = document.getElementById('materials-result-label');
  if (label) label.textContent = `Showing all materials (${materials.length})`;

  const searchInput = document.getElementById('materials-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.trim().toLowerCase();
      const filtered = materials.filter(m => {
        const haystack = [
          m.name,
          m.shortDescription,
          m.longDescription,
          (m.keywords || []).join(' ')
        ].join(' ').toLowerCase();
        return !q || haystack.includes(q);
      });
      render(filtered);
      if (label) label.textContent = q
        ? `Showing ${filtered.length} of ${materials.length} materials`
        : `Showing all materials (${materials.length})`;
    });
  }

  const matSelect = document.getElementById('materials-inquiry-select');
  if (matSelect) {
    matSelect.innerHTML = '<option value="">Select Material</option>' + materials.map(m =>
      `<option value="${escapeHtml(m.name)}">${escapeHtml(m.name)}</option>`
    ).join('');
  }

  prepareRevealTargets();
  initScrollReveal();
}

// =========================================================================
// FAQ STRUCTURED DATA (JSON-LD)
// =========================================================================
function injectFaqJsonLd(faqs) {
  if (!faqs || !faqs.length) return;
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

// =========================================================================
// MATERIAL DETAILS PAGE — Classic Industrial B2B Template (Config-Driven)
// Distinct from the product-detail (pd-*) template. All 4 material pages
// (Mild Steel, Stainless Steel, Alloy Steel, IBR) render via this function.
// =========================================================================
// Main product categories shown in the Products navigation dropdown.
// Order matches the 3-column grid layout (read left-to-right, top-to-bottom).
const PRODUCT_NAV_ITEMS = [
  { slug: 'flanges' },
  { slug: 'round-bar' },
  { slug: 'pipes' },
  { slug: 'sheets' },
  { slug: 'plates' },
  { slug: 'buttweld-fittings' },
  { slug: 'forged-fittings' },
  { slug: 'channel-angle' }
];

const MATERIAL_PRODUCT_ORDER = [
  'buttweld-fittings',
  'forged-fittings',
  'flanges',
  'round-bar',
  'pipes',
  'plates',
  'sheets',
  'channel-angle'
];

// Material-specific "Top Selling" names in the exact category order shown on
// each material detail page. Each card links to the main product category page.
const MATERIAL_TOP_SELLING = {
  'mild-steel': [
    { slug: 'buttweld-fittings', name: 'Mild Steel Buttweld Fittings' },
    { slug: 'flanges', name: 'Mild Steel Flanges' },
    { slug: 'round-bar', name: 'Mild Steel Round Bars' },
    { slug: 'pipes', name: 'Mild Steel Pipes' },
    { slug: 'forged-fittings', name: 'Mild Steel Forged Fittings' },
    { slug: 'plates', name: 'Mild Steel Plates' },
    { slug: 'sheets', name: 'Mild Steel Sheets' },
    { slug: 'channel-angle', name: 'Mild Steel Channel, Angles' }
  ],
  'stainless-steel': [
    { slug: 'buttweld-fittings', name: 'Stainless Steel Buttweld Fittings' },
    { slug: 'flanges', name: 'Stainless Steel Flanges' },
    { slug: 'round-bar', name: 'Stainless Steel Round Bars' },
    { slug: 'pipes', name: 'Stainless Steel Pipes' },
    { slug: 'forged-fittings', name: 'Stainless Steel Forged Fittings' },
    { slug: 'plates', name: 'Stainless Steel Plates' },
    { slug: 'sheets', name: 'Stainless Steel Sheets' },
    { slug: 'channel-angle', name: 'Stainless Steel Channel, Angles' }
  ],
  'alloy-steel': [
    { slug: 'buttweld-fittings', name: 'Alloy Steel Buttweld Fittings' },
    { slug: 'flanges', name: 'Alloy Steel Flanges' },
    { slug: 'round-bar', name: 'Alloy Steel Round Bars' },
    { slug: 'pipes', name: 'Alloy Steel Pipes' },
    { slug: 'forged-fittings', name: 'Alloy Steel Forged Fittings' },
    { slug: 'plates', name: 'Alloy Steel Plates' },
    { slug: 'sheets', name: 'Alloy Steel Sheets' },
    { slug: 'channel-angle', name: 'Alloy Steel Channel, Angles' }
  ],
  'ibr': [
    { slug: 'buttweld-fittings', name: 'IBR Buttweld Fittings' },
    { slug: 'flanges', name: 'IBR Flanges' },
    { slug: 'round-bar', name: 'IBR Round Bars' },
    { slug: 'pipes', name: 'IBR Pipes' },
    { slug: 'forged-fittings', name: 'IBR Forged Fittings' },
    { slug: 'plates', name: 'IBR Plates' },
    { slug: 'sheets', name: 'IBR Sheets' },
    { slug: 'channel-angle', name: 'IBR Channel, Angles' }
  ]
};

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
  const waNum = String(config.business.whatsapp || '').replace(/\+/g, '').replace(/\s+/g, '');
  const waMsg = encodeURIComponent(`Hello ${config.business.name}, I want to inquire about: ${material.name}.`);
  const waHref = `https://wa.me/${waNum}?text=${waMsg}`;
  const phoneRaw = (config.business.phones && config.business.phones[0]) || '';
  const phoneHref = `tel:${phoneRaw.replace(/\s+/g, '')}`;
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

  const setText = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text || ''; };
  const setHtml = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html || ''; };
  const setAttr = (id, attr, val) => { const el = document.getElementById(id); if (el) el.setAttribute(attr, val); };

  // --- HERO BANNER ---
  const breadcrumbCurrent = document.querySelector('#mat-breadcrumb .current');
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = material.name;
  setText('mat-hero-title', `${material.name} Manufacturer in India`);
  setText('mat-hero-subtitle', material.shortDescription || '');

  // --- MATERIAL INTRODUCTION ---
  setText('mat-intro-heading', `About ${material.name}`);
  setText('mat-intro-lead', material.shortDescription || '');
  const longDesc = material.longDescription || material.shortDescription || '';
  setHtml('mat-intro-desc', `<p>${escapeHtml(longDesc)}</p>`);
  const introImg = document.getElementById('mat-intro-img');
  if (introImg) {
    introImg.src = resolved.image || '';
    introImg.alt = `${material.name} Products`;
  }

  // --- MATERIAL STANDARD, SIZE & SPECIFICATION ---
  setText('mat-spec-heading', material.specificationHeading || `${material.name} Standard, Size & Specification`);
  const specBody = document.getElementById('mat-spec-body');
  if (specBody) {
    const specs = material.specifications || [];
    specBody.innerHTML = specs.length
      ? specs.map(s => `
          <tr>
            <td>${escapeHtml(s.material || '').replace(/\n/g, '<br>')}</td>
            <td>${escapeHtml(s.standard || '')}</td>
            <td>${escapeHtml(s.products || '')}</td>
          </tr>
        `).join('')
      : `<tr>
           <td colspan="3" class="mat-empty">
             Specification details will be updated soon.
           </td>
         </tr>`;
  }

  // --- TOP SELLING MATERIAL PRODUCTS ---
  setText('mat-top-heading', `Top Selling ${material.name}`);
  const prodGrid = document.getElementById('mat-prod-grid');
  if (prodGrid) {
    const cardImages = material.cardImages || {};
    const products = (MATERIAL_TOP_SELLING[material.slug] || [])
      .map(entry => {
        const p = (config.productDetails || []).find(prod => prod.slug === entry.slug);
        return p ? { product: p, name: entry.name, image: cardImages[entry.slug] || '' } : null;
      })
      .filter(Boolean);
    prodGrid.innerHTML = products.map(({ product: p, name, image }) => {
      const r = resolveProductImages(p);
      return `
        <a href="${getProductUrl(p)}" class="mat-prod-card reveal">
          <div class="mat-prod-img"><img src="${image || r.image || ''}" alt="${escapeHtml(name)}" loading="lazy"/></div>
          <div class="mat-prod-name">${escapeHtml(name)}</div>
        </a>
      `;
    }).join('');
  }

  // --- CTA BUTTONS ---
  setAttr('mat-cta-call', 'href', phoneHref);
  setAttr('mat-cta-mail', 'href', emailHref);
  setAttr('mat-cta-wa', 'href', waHref);

  // --- APPLICATION & USES ---
  setText('mat-apps-heading', `Application & Uses of ${material.name}`);
  const appsList = document.getElementById('mat-apps-list');
  if (appsList) {
    const apps = material.applications || [];
    appsList.innerHTML = apps.length
      ? apps.map(a => `
        <div class="mat-app-item reveal">
          <div class="mat-app-icon"><i class="fa ${a.icon || 'fa-industry'}"></i></div>
          <div class="mat-app-text">
            <h4>${escapeHtml(a.name)}</h4>
            <p>${escapeHtml(a.description || '')}</p>
          </div>
        </div>
      `).join('')
      : '';
  }
  const appsImg = document.getElementById('mat-apps-img');
  if (appsImg) {
    const visual = (resolved.galleryImages && resolved.galleryImages.length > 1)
      ? resolved.galleryImages[1]
      : (resolved.image || '');
    appsImg.src = visual;
    appsImg.alt = `${material.name} Applications`;
  }

  // --- DELIVERY & PACKAGING ---
  setText('mat-delivery-heading', `${material.name} Delivery & Packaging Information`);
  const logisticsList = document.getElementById('mat-logistics-list');
  if (logisticsList) {
    const info = config.logisticsInfo || [];
    logisticsList.innerHTML = info.length
      ? `<ol class="mat-logistics-items">${info.map(item => `
        <li class="mat-logistics-item">
          <strong>${escapeHtml(item.label)}:</strong> ${escapeHtml(item.value)}
        </li>
      `).join('')}</ol>`
      : '';
  }

  // --- CITIES WE SUPPLY ---
  setText('mat-cities-heading', `Cities We Supply ${material.name}`);
  setText('mat-cities-intro', `Sujal Enterprise supplies ${material.name} products across India. We serve major industrial cities including:`);
  const citiesGrid = document.getElementById('mat-cities-grid');
  if (citiesGrid) {
    const cities = material.citiesSupplied || [];
    citiesGrid.innerHTML = cities.length
      ? cities.map(c => `<span class="mat-city"><i class="fa fa-location-dot"></i> ${escapeHtml(c)}</span>`).join('')
      : '';
  }

  // --- COUNTRIES WE EXPORT ---
  setText('mat-countries-heading', `Countries We Export ${material.name}`);
  setText('mat-countries-intro', `We export ${material.name} products to countries across the Middle East, Asia, Europe, Africa, and the Americas including:`);
  const countriesGrid = document.getElementById('mat-countries-grid');
  if (countriesGrid) {
    const countries = material.countriesExported || [];
    countriesGrid.innerHTML = countries.length
      ? countries.map(c => `
        <span class="mat-country ${c.highlight ? 'mat-country-highlight' : ''}">
          <i class="fa fa-globe"></i> ${escapeHtml(c.name)}
        </span>
      `).join('')
      : '';
  }

  // --- SIDEBAR: OUR PRODUCTS ---
  const sidebarProducts = document.getElementById('mat-sidebar-products');
  if (sidebarProducts) {
    sidebarProducts.innerHTML = MATERIAL_PRODUCT_ORDER
      .map(s => (config.productDetails || []).find(p => p.slug === s))
      .filter(Boolean)
      .map(p => `<a href="${getProductUrl(p)}" class="mat-sidebar-link">${escapeHtml(p.title)}</a>`)
      .join('');
  }

  // --- SIDEBAR: OUR MATERIALS ---
  const sidebarMaterials = document.getElementById('mat-sidebar-materials');
  if (sidebarMaterials) {
    sidebarMaterials.innerHTML = (config.materials || []).map(m => `
      <a href="/materials/${m.slug}/" class="mat-sidebar-link ${m.slug === slug ? 'active' : ''}">${escapeHtml(m.title)}</a>
    `).join('');
  }

  // --- SIDEBAR: CONTACT INFO ---
  setText('mat-contact-name', config.business.name || '');
  setText('mat-contact-type', config.business.type || '');
  setText('mat-contact-address', config.business.address || '');
  setText('mat-contact-phone-link', (config.business.phones || []).join(', '));
  setText('mat-contact-email-link', config.business.email || '');
  setAttr('mat-contact-phone-link', 'href', phoneHref);
  setAttr('mat-contact-email-link', 'href', emailHref);

  // --- SIDEBAR: GET IN TOUCH (inquiry form) ---
  const sidebarForm = document.getElementById('mat-sidebar-inquiry-form');
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
      fd.append('subject', `Material Inquiry: ${material.name}`);
      fd.append('_replyto', inputs[1]?.value || '');
      fd.append('_gotcha', '');
      const result = await submitInquiryToEndpoint(fd);
      if (result.ok) {
        alert('Inquiry submitted! We will contact you shortly.');
        sidebarForm.reset();
      } else {
        alert(result.notConnected ? 'Inquiry form is not connected yet. Please contact us via WhatsApp or email.' : 'Submission failed. Please try again or contact us directly.');
      }
      btn.disabled = false;
      btn.innerHTML = orig;
    });
  }

  // --- SHOW LAYOUT ---
  if (loader) loader.style.display = 'none';
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

function injectProductBreadcrumbJsonLd(product) {
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
      { '@type': 'ListItem', position: 3, name: product.title, item: `https://sujalenterprise.com/products/${product.slug}/` }
    ]
  });
  document.head.appendChild(script);
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
    additionalProperty: getProductSpecList(product).map(spec => ({
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


