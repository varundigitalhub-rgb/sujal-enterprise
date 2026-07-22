import { config } from './config.js';

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

  // 3. Highlight Active Navigation Item
  highlightActiveNav();

  // 4. Mobile Menu Navigation Event Handlers
  initMobileMenu();

  // 5. Hero Slider (if on homepage)
  if (document.querySelector('.hero-slider')) {
    initHeroSlider();
  }

  // 6. Stats Counter Animation on Scroll (if on homepage)
  if (document.querySelector('.stats-section')) {
    initStatsCounter();
  }

  initHomeSearch();


  // 7. Products Catalog Dynamic Population (if on products page)
  if (document.getElementById('products-catalog-container')) {
    populateProductsPage();
  }

  // 7.5 Product Details Page (if on product details page)
  if (document.getElementById('product-details-layout')) {
    populateProductDetailsPage();
  }


  // 8. Gallery Filter & Population (if on gallery page)
  if (document.getElementById('gallery-grid-container')) {
    populateGalleryPage();
  }

  // 9. Lead Capture Form Integration (Web3Forms API + AJAX fallback)
  initInquiryForms();
});

// --- Inject Reusable Header Template ---
function injectHeader() {
  const headerRoot = document.getElementById('header-root');
  if (!headerRoot) return;

  headerRoot.innerHTML = `
    <!-- Top Bar -->
    <div class="top-bar">
      <div class="container top-bar-content">
        <div class="top-bar-left">
          <ul id="header-socials-list">
            <!-- Populated dynamically if socials are set -->
          </ul>
        </div>
        <div class="top-bar-right">
          <ul>
            <li><a href="#" data-config="email-link"></a></li>
            <li><a href="#" data-config="phone-link"></a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Main Navigation Bar -->
    <nav class="nav-bar">
      <div class="container nav-container">
        <a href="/index.html" class="logo-link">
          <div>
            <span class="logo-text" data-config="name">Sujal Enterprise</span>
            <span class="logo-sub">Pipes & Fittings</span>
          </div>
        </a>
        
        <ul class="nav-menu">
          <li><a href="/index.html" class="nav-link" data-nav="home">Home</a></li>
          <li><a href="/about-us.html" class="nav-link" data-nav="about">About Us</a></li>
          <li><a href="/products.html" class="nav-link" data-nav="products">Products</a></li>
          <li><a href="/services.html" class="nav-link" data-nav="services">Services</a></li>
          <li><a href="/industries-served.html" class="nav-link" data-nav="industries">Industries Served</a></li>
          <li><a href="/certifications-quality.html" class="nav-link" data-nav="quality">Quality & Certs</a></li>
          <li><a href="/gallery.html" class="nav-link" data-nav="gallery">Gallery</a></li>
          <li><a href="/contact-us.html" class="nav-link" data-nav="contact">Contact Us</a></li>
        </ul>
        
        <button class="menu-toggle" aria-label="Toggle Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  `;
}

function getPageVariant() {
  const path = window.location.pathname;
  if (path === '/' || path.endsWith('/index.html') || path.endsWith('index.html')) return 'home';
  if (path.includes('/products/') || path.endsWith('/product.html') || path.endsWith('product.html')) return 'product-detail';
  if (path.endsWith('/products.html') || path.endsWith('products.html')) return 'products';
  if (path.endsWith('/about-us.html') || path.endsWith('about-us.html')) return 'about';
  if (path.endsWith('/services.html') || path.endsWith('services.html')) return 'services';
  if (path.endsWith('/industries-served.html') || path.endsWith('industries-served.html')) return 'industries';
  if (path.endsWith('/certifications-quality.html') || path.endsWith('certifications-quality.html')) return 'quality';
  if (path.endsWith('/gallery.html') || path.endsWith('gallery.html')) return 'gallery';
  if (path.endsWith('/contact-us.html') || path.endsWith('contact-us.html')) return 'contact';
  return 'default';
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
          <p class="footer-desc">Premium wholesale supplier and manufacturer of industrial pipe fittings, flanges, and steel products in Bharat Lokhand Bazar, Mumbai.</p>
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
            <li><a href="/services.html"><i class="fa fa-chevron-right"></i> Services</a></li>
            <li><a href="/gallery.html"><i class="fa fa-chevron-right"></i> Gallery</a></li>
            <li><a href="/contact-us.html"><i class="fa fa-chevron-right"></i> Contact Us</a></li>
          </ul>
        </div>
        
        <div>
          <h3>Our Products</h3>
          <ul class="footer-links">
            <li><a href="/products.html#cat-forged-fittings"><i class="fa fa-chevron-right"></i> Forged Fittings</a></li>
            <li><a href="/products.html#cat-buttweld-fittings"><i class="fa fa-chevron-right"></i> Buttweld Fittings</a></li>
            <li><a href="/products.html#cat-flanges"><i class="fa fa-chevron-right"></i> Flanges</a></li>
            <li><a href="/products.html#cat-pipes-tubes"><i class="fa fa-chevron-right"></i> Steel Pipes</a></li>
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
          <p>&copy; <span id="year">2026</span> <span data-config="name">Sujal Enterprise</span>. All Rights Reserved. Built for high-performance lead generation.</p>
        </div>
      </div>
    </footer>
  `;
}

// --- Inject Floating WhatsApp and Mobile Action CTAs ---
function injectFloatingWidgets() {
  const ctaContainer = document.createElement('div');
  ctaContainer.innerHTML = `
    <!-- Sticky WhatsApp Button -->
    <a href="#" class="whatsapp-float" data-config="whatsapp-link" target="_blank" aria-label="Chat on WhatsApp">
      <i class="fab fa-whatsapp"></i>
    </a>

    <!-- Sticky Mobile CTA Bar -->
    <div class="mobile-cta-bar">
      <a href="#" class="mobile-cta-btn call" data-config="phone-link"><i class="fa fa-phone"></i> Call Now</a>
      <a href="#" class="mobile-cta-btn whatsapp" data-config="whatsapp-link" target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp</a>
    </div>
  `;
  document.body.appendChild(ctaContainer);
}

// --- Dynamic Business Configuration Ingest ---
function populateConfigData() {
  const { business } = config;

  // Set page titles to include business name if not set
  if (!document.title.includes(business.name)) {
    document.title = `${document.title} | ${business.name}`;
  }

  // Populate plain texts
  document.querySelectorAll('[data-config="name"]').forEach(el => {
    el.textContent = business.name;
  });
  
  document.querySelectorAll('[data-config="address"]').forEach(el => {
    el.textContent = business.address;
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
}

// --- Active Nav Highlighting ---
function highlightActiveNav() {
  const path = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (path === '/' || path.endsWith('index.html')) {
      if (link.getAttribute('data-nav') === 'home') link.classList.add('active');
    } else if (path.startsWith('/products/')) {
      if (link.getAttribute('data-nav') === 'products') link.classList.add('active');
    } else if (href && path.includes(href.replace(/^\//, ''))) {
      link.classList.add('active');
    }
  });
}

// --- Responsive Menu toggle ---
function initHomeSearch() {
  const input = document.getElementById('home-search-input');
  const empty = document.getElementById('home-search-empty');
  const resultsBoxId = 'home-search-results';

  if (!input) return;

  let resultsBox = document.getElementById(resultsBoxId);
  if (!resultsBox) {
    resultsBox = document.createElement('div');
    resultsBox.id = resultsBoxId;
    input.closest('.search-box')?.parentElement?.appendChild(resultsBox);
  }

  const productDetails = (config.productDetails || []).slice();

  const render = (query) => {
    const q = (query || '').trim().toLowerCase();
    if (!resultsBox) return;

    if (!q) {
      resultsBox.innerHTML = '';
      if (empty) empty.style.display = 'none';
      return;
    }

    let results = productDetails;
    results = productDetails.filter(p => {
      const categoryIds = p.categoryIds || [];
      const categories = categoryIds
        .map(cid => (config.products || []).find(c => c.id === cid)?.title)
        .filter(Boolean);

      const text = [
        p.title,
        categories.join(' '),
        (p.keywords || []).join(' '),
        p.shortDescription,
        p.fullDescription
      ].join(' ').toLowerCase();

      return text.includes(q);
    });

    resultsBox.innerHTML = '';

    if (!results.length) {
      if (empty) empty.style.display = 'block';
      resultsBox.innerHTML = '';
      return;
    }

    if (empty) empty.style.display = 'none';

    resultsBox.innerHTML = `
      <div class="home-search-results">
        ${results.slice(0, 6).map(p => `
          <a class="home-search-item" href="${getProductUrl(p)}">
            <img src="${p.image || (p.galleryImages && p.galleryImages[0]) || ''}" alt="${p.title}" loading="lazy"/>
            <div>
              <div class="home-search-item-title">${p.title}</div>
              <div class="home-search-item-sub">${(p.shortDescription || '').slice(0, 55)}</div>
            </div>
          </a>
        `).join('')}
        <div class="home-search-more">
          <a href="/products.html?q=${encodeURIComponent(q)}">View all matching products</a>
        </div>
      </div>
    `;
  };

  const debounce = (fn, wait) => {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
  };

  input.addEventListener('input', debounce((e) => render(e.target.value), 120));

  // Close on Escape
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      resultsBox.innerHTML = '';
      if (empty) empty.style.display = 'none';
      input.value = '';
    }
  });
}

function initMobileMenu() {


  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-menu');
  
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      toggle.querySelectorAll('span').forEach((bar, idx) => {
        if (menu.classList.contains('active')) {
          if (idx === 0) bar.style.transform = 'rotate(45deg) translate(6px, 6px)';
          if (idx === 1) bar.style.opacity = '0';
          if (idx === 2) bar.style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
          bar.style.transform = 'none';
          bar.style.opacity = '1';
        }
      });
    });
  }
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

// --- Products Catalog Population ---
function populateProductsPage() {
  const container = document.getElementById('products-catalog-container');
  if (!container) return;
  container.innerHTML = '';

  const searchInput = document.getElementById('products-search-input');
  const searchEmpty = document.getElementById('products-search-empty');

  const productDetails = (config.productDetails || []).slice();
  const initialQuery = new URLSearchParams(window.location.search).get('q') || '';
  // If productDetails is available, we render product cards from it.
  // Otherwise, fallback to legacy category cards.
  const canRenderProducts = productDetails.length > 0;

  const renderCards = (query = '') => {
    const q = (query || '').trim().toLowerCase();
    container.innerHTML = '';

    let results = productDetails;

    if (q) {
      results = results.filter(p => {
        const categoryIds = p.categoryIds || [];
        const categories = categoryIds
          .map(cid => (config.products || []).find(c => c.id === cid)?.title)
          .filter(Boolean);

        const text = [
          p.title,
          categories.join(' '),
          (p.keywords || []).join(' '),
          p.shortDescription,
          p.fullDescription
        ].join(' ').toLowerCase();

        return text.includes(q);
      });
    }

    if (!results.length) {
      if (searchEmpty) searchEmpty.style.display = 'block';
      container.innerHTML = '';
      return;
    }

    if (searchEmpty) searchEmpty.style.display = 'none';

    results.forEach(p => {
      const card = document.createElement('a');
      card.className = 'product-card reveal';
      card.href = getProductUrl(p);
      card.innerHTML = `
        <div class="product-card-img-wrapper">
          <img src="${p.image || (p.galleryImages && p.galleryImages[0]) || ''}" alt="${p.title}" loading="lazy"/>
        </div>
        <div class="product-card-content">
          <span class="product-card-category">${(p.categoryIds || []).map(getCategoryTitleById).filter(Boolean)[0] || 'Industrial Product'}</span>
          <h3>${p.title}</h3>
          <p>${p.shortDescription || ''}</p>
          <span class="btn btn-dark product-view-btn">
            <i class="fa fa-arrow-right"></i> View Product
          </span>
        </div>
      `;
      container.appendChild(card);
    });

    initScrollReveal();
  };

  if (searchInput) {
    if (initialQuery) {
      searchInput.value = initialQuery;
    }

    const debounce = (fn, wait) => {
      let t;
      return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn(...args), wait);
      };
    };

    searchInput.addEventListener('input', debounce((e) => {
      renderCards(e.target.value);
    }, 120));
  }

  // Populate inquiry category dropdown dynamically (keep existing behavior)
  const inquirySelect = document.getElementById('inquiry-subject');
  if (inquirySelect) {
    const existingOptions = Array.from(inquirySelect.querySelectorAll('option')).map(o => o.value);
    const hasOnlyPlaceholder = existingOptions.length === 1 && existingOptions[0] === '';
    if (hasOnlyPlaceholder) {
      inquirySelect.innerHTML = `<option value="">-- Select Category --</option>`;
    }

    // Keep legacy categories for quick quote dropdown on products page.
    (config.products || []).forEach(cat => {
      const opt = document.createElement('option');
      opt.value = `Inquiry about ${cat.title}`;
      opt.textContent = cat.title;
      inquirySelect.appendChild(opt);
    });
  }

  if (canRenderProducts) {
    renderCards(initialQuery);
    return;
  }

  // Legacy fallback: category cards


  // Populate inquiry category dropdown dynamically
  const fallbackInquirySelect = document.getElementById('inquiry-subject');
  if (fallbackInquirySelect) {
    const existingOptions = Array.from(fallbackInquirySelect.querySelectorAll('option')).map(o => o.value);
    const hasOnlyPlaceholder = existingOptions.length === 1 && existingOptions[0] === '';
    if (hasOnlyPlaceholder) {
      fallbackInquirySelect.innerHTML = `<option value="">-- Select Category --</option>`;
    }

    config.products.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = `Inquiry about ${cat.title}`;
      opt.textContent = cat.title;
      fallbackInquirySelect.appendChild(opt);
    });
  }

  config.products.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'premium-card';
    card.id = `cat-${cat.id}`;
    
    const itemsHtml = cat.items.map(item => `
      <li style="margin-bottom: 8px; display: flex; align-items: start; gap: 8px;">
        <i class="fa fa-circle-check" style="color: var(--accent); margin-top: 4px; font-size: 0.875rem;"></i>
        <div>
          <strong style="display: block; color: var(--charcoal); font-size: 0.9375rem;">${item.name}</strong>
          <span style="font-size: 0.75rem; color: var(--text-muted);">${item.spec}</span>
        </div>
      </li>
    `).join('');

    card.innerHTML = `
      <div class="premium-card-img-wrapper">
        <div style="background-color: var(--primary); width:100%; height:100%; display:flex; align-items:center; justify-content:center; color: var(--white); font-size: 4rem;">
          <i class="fa ${getCategoryIcon(cat.id)}"></i>
        </div>
      </div>
      <div class="premium-card-content">
        <h3>${cat.title}</h3>
        <p>${cat.description}</p>
        <h4 style="font-size: 1rem; margin-bottom: 12px; color: var(--primary);">Available Catalog:</h4>
        <ul style="margin-bottom: 24px; flex-grow: 1;">
          ${itemsHtml}
        </ul>
        <a href="#inquiry" class="btn btn-dark inquiry-trigger" data-product="${cat.title}">
          <i class="fa fa-envelope-open-text"></i> Instant Quote
        </a>
      </div>
    `;
    container.appendChild(card);
  });

  // Bind click action for quick quotes
  document.querySelectorAll('.inquiry-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const prodName = btn.getAttribute('data-product');
      const textSelect = document.getElementById('inquiry-subject');
      if (textSelect) {
        // Match against the dynamically generated option values: `Inquiry about ${cat.title}`
        const targetValue = `Inquiry about ${prodName}`;
        const match = Array.from(textSelect.options).some(o => o.value === targetValue);
        if (match) {
          textSelect.value = targetValue;
        } else {
          // Fallback: select based on visible text
          const opt = Array.from(textSelect.options).find(o => (o.textContent || '').trim() === String(prodName).trim());
          if (opt) textSelect.value = opt.value;
        }
        textSelect.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });
  });
}

function getCategoryIcon(id) {
  switch(id) {
    case 'forged-fittings': return 'fa-circle-nodes';
    case 'buttweld-fittings': return 'fa-gears';
    case 'flanges': return 'fa-ring';
    case 'pipes-tubes': return 'fa-lines-leaning';
    default: return 'fa-wrench';
  }
}

// --- Gallery Population & Filters ---
function populateGalleryPage() {
  const grid = document.getElementById('gallery-grid-container');
  const filterWrapper = document.getElementById('gallery-filters-wrapper');
  if (!grid || !filterWrapper) return;
  grid.innerHTML = '';

  config.gallery.forEach(item => {
    const card = document.createElement('div');
    card.className = `gallery-card reveal`;
    card.setAttribute('data-category', item.category);

    card.innerHTML = `
      <div style="background-color: var(--charcoal); width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 3.5rem; color: var(--metal);">
        <i class="fa ${getCategoryIcon(item.category === 'products' ? 'forged-fittings' : item.category === 'inventory' ? 'pipes-tubes' : 'wrench')}"></i>
      </div>
      <div class="gallery-card-overlay">
        <h4>${item.alt}</h4>
        <span>${item.category}</span>
      </div>
    `;
    grid.appendChild(card);
  });

  const filters = ['all', 'products', 'warehouse', 'inventory', 'deliveries', 'office', 'operations'];
  filterWrapper.innerHTML = filters.map(f => `
    <button class="gallery-filter-btn ${f === 'all' ? 'active' : ''}" data-filter="${f}">
      ${f.charAt(0).toUpperCase() + f.slice(1)}
    </button>
  `).join('');

  const filterButtons = document.querySelectorAll('.gallery-filter-btn');
  const cards = document.querySelectorAll('.gallery-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');
      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filterVal === 'all' || cat === filterVal) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

// --- Inquiry Forms Lead Capturing with Web3Forms Integration ---
function initInquiryForms() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      let isValid = true;
      const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
      
      inputs.forEach(input => {
        input.classList.remove('invalid');
        if (!input.value.trim()) {
          input.classList.add('invalid');
          isValid = false;
        } else if (input.type === 'email' && !validateEmail(input.value)) {
          input.classList.add('invalid');
          isValid = false;
        } else if (input.type === 'tel' && !validatePhone(input.value)) {
          input.classList.add('invalid');
          isValid = false;
        }
      });

      if (isValid) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnHtml = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="fa fa-spinner fa-spin"></i> Processing Submission...`;

        const successMsg = form.querySelector('.success-message');
        
        // Extract values
        const formData = new FormData();
        inputs.forEach(input => {
          formData.append(input.id || input.name || 'field', input.value);
        });

        // Set Web3Forms API Key
        const apiKey = config.business.web3forms_key;
        formData.append('access_key', apiKey);
        // Subject is used for routing/labeling inquiries (config-driven mapping).
        // Prefer the selected option value; fall back to visible text or a safe default.
        const subjectSelect = form.querySelector('select');
        const subjectVal = subjectSelect?.value;
        const subjectText = subjectSelect?.selectedOptions?.[0]?.textContent?.trim();
        formData.append('subject', (subjectVal && subjectVal.trim()) ? subjectVal : (subjectText || 'Industrial Web Inquiry'));
        formData.append('from_name', config.business.name);

        // If Web3Forms key is not configured, do NOT pretend the form was sent.
        if (!apiKey || apiKey === 'YOUR_ACCESS_KEY_HERE') {
          const msg = successMsg || null;
          if (msg) {
            msg.style.display = 'block';
            msg.style.backgroundColor = '#fff7ed';
            msg.style.borderColor = '#f59e0b';
            msg.style.color = '#7c2d12';
            msg.innerHTML = `<i class="fa fa-triangle-exclamation"></i> Contact form is not connected yet. Please contact us via email/phone/WhatsApp, or ask your admin to set <strong>web3forms_key</strong> in <strong>js/config.js</strong>.`;
          } else {
            alert('Contact form is not connected yet. Please contact us via email/phone/WhatsApp, or ask your admin to set web3forms_key in js/config.js.');
          }

          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
          return;
        }

        try {
          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
          });
          const result = await response.json();
          
          if (result.success) {
            if (successMsg) {
              successMsg.style.display = 'block';
              form.reset();
              setTimeout(() => successMsg.style.display = 'none', 8000);
            } else {
              alert('Thank you! Your inquiry has been submitted successfully.');
              form.reset();
            }
          } else {
            alert('Form submission failed: ' + result.message);
          }
        } catch (error) {
          console.error('Submission Error:', error);
          alert('An error occurred. Please contact us directly via email or WhatsApp.');
        } finally {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
        }
      }
    });
    
    form.querySelectorAll('input, select, textarea').forEach(input => {
      input.addEventListener('input', () => {
        if (input.value.trim()) {
          input.classList.remove('invalid');
        }
      });
    });
  });
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

// --- Scroll Reveal ---
function populateProductDetailsPage() {
  const layout = document.getElementById('product-details-layout');
  const loader = document.getElementById('product-page-loading');
  if (!layout) return;

  const slug = getProductSlugFromUrl();

  if (!slug) {
    if (loader) {
      loader.innerHTML = `<p style="color: var(--text-muted);">Missing product slug in URL. <a href="/products.html">Back to products</a></p>`;
    }
    return;
  }


  const product = (config.productDetails || []).find(p => p.slug === slug);

  if (!product) {
    if (loader) {
      loader.innerHTML = `<p style="color: var(--text-muted);">Product not found. <a href="/products.html">Back to products</a></p>`;
    }
    return;
  }

  // Build breadcrumbs
  const crumbs = document.getElementById('product-breadcrumbs');
  if (crumbs) {
    const name = product.title || 'Product';
    const exists = crumbs.querySelector('span, #product-breadcrumb-current');
    if (!exists) {
      const icon = document.createElement('i');
      icon.className = 'fa fa-chevron-right';
      icon.style.fontSize = '0.75rem';
      icon.style.alignSelf = 'center';
      const span = document.createElement('span');
      span.id = 'product-breadcrumb-current';
      span.textContent = name;
      crumbs.appendChild(document.createTextNode(' '));
      crumbs.appendChild(icon);
      crumbs.appendChild(document.createTextNode(' '));
      crumbs.appendChild(span);
    } else {
      const current = crumbs.querySelector('#product-breadcrumb-current');
      if (current) current.textContent = product.title;
    }
  }

  // SEO title (best-effort)
  document.title = `${product.title} | Product Specifications | ${config.business.name}`;
  updateMetaTag('description', product.shortDescription || product.fullDescription || document.title);
  updateMetaTag('keywords', [product.title, ...(product.keywords || []), ...(product.standards || [])].join(', '));
  updateMetaProperty('og:title', `${product.title} | ${config.business.name}`);
  updateMetaProperty('og:description', product.shortDescription || product.fullDescription || '');
  updateMetaProperty('og:url', `${window.location.origin}${getProductUrl(product)}`);
  injectProductJsonLd(product);

  const pageTitle = document.getElementById('product-page-title');
  if (pageTitle) pageTitle.textContent = product.title;

  const nameEl = document.getElementById('product-name');
  if (nameEl) nameEl.textContent = product.title;

  const categoryChip = document.getElementById('product-category-chip');
  if (categoryChip) {
    const catId = product.categoryIds && product.categoryIds[0];
    categoryChip.textContent = getCategoryTitleById(catId) || (catId || 'Category');
  }


  // Gallery
  const mainImg = document.getElementById('product-main-image');
  const thumbs = document.getElementById('product-thumbnails');
  if (mainImg) {
    mainImg.src = product.galleryImages && product.galleryImages[0] ? product.galleryImages[0] : product.image;
    mainImg.alt = product.title;
  }
  if (thumbs) {
    thumbs.innerHTML = '';
    const images = product.galleryImages && product.galleryImages.length ? product.galleryImages : (product.image ? [product.image] : []);
    images.forEach((src, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'thumb-btn';
      btn.setAttribute('aria-label', `View image ${idx + 1}`);
      btn.innerHTML = `<img src="${src}" alt="${product.title}" loading="lazy"/>`;
      btn.addEventListener('click', () => {
        if (mainImg) {
          mainImg.src = src;
          mainImg.alt = product.title;
        }
        thumbs.querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
      if (idx === 0) btn.classList.add('active');
      thumbs.appendChild(btn);
    });
  }

  // Descriptions
  const shortDesc = document.getElementById('product-short-description');
  if (shortDesc) shortDesc.textContent = product.shortDescription || '';

  const fullDesc = document.getElementById('product-full-description');
  if (fullDesc) fullDesc.textContent = product.fullDescription || '';

  // Specifications grid
  const specGrid = document.getElementById('product-spec-grid');
  if (specGrid) {
    specGrid.innerHTML = '';
    (product.technicalSpecifications || []).forEach(spec => {
      const item = document.createElement('div');
      item.className = 'spec-item';
      item.innerHTML = `<div class="spec-label">${spec.label || ''}</div><div class="spec-value">${spec.value || ''}</div>`;
      specGrid.appendChild(item);
    });
  }

  // Sizes/grades tags
  const sizes = document.getElementById('product-sizes');
  if (sizes) {
    sizes.innerHTML = '';
    (product.sizesOrGrades || []).forEach(s => {
      const t = document.createElement('span');
      t.className = 'tag';
      t.textContent = s;
      sizes.appendChild(t);
    });
  }

  // Features/applications/material
  const fillList = (elId, arr) => {
    const el = document.getElementById(elId);
    if (!el) return;
    el.innerHTML = '';
    (arr || []).forEach(text => {
      const li = document.createElement('li');
      li.innerHTML = `<i class="fa fa-check" style="color: var(--accent);"></i><span>${text}</span>`;
      el.appendChild(li);
    });
  };

  fillList('product-features', product.features);
  fillList('product-applications', product.applications);
  fillList('product-material-specs', product.materialSpecifications);

  // Standards tags
  const standards = document.getElementById('product-standards');

  if (standards) {
    standards.innerHTML = '';
    (product.standards || []).forEach(s => {
      const t = document.createElement('span');
      t.className = 'tag';
      t.textContent = s;
      standards.appendChild(t);
    });
  }

  // Inquiry dropdown + WhatsApp
  const inquirySelect = document.getElementById('inquiry-subject');
  if (inquirySelect) {
    inquirySelect.innerHTML = `<option value="${product.title}">${product.title}</option>`;
    inquirySelect.value = product.title;
  }

  const waBtn = document.getElementById('product-whatsapp-btn');
  if (waBtn) {
    const waNum = config.business.whatsapp.replace(/\+/g, '').replace(/\s+/g, '');
    const msg = `Hello ${encodeURIComponent(config.business.name)}, I want to inquire about: ${product.title}.`;
    waBtn.setAttribute('href', `https://wa.me/${waNum}?text=${msg}`);
  }

  // Related products
  const relatedGrid = document.getElementById('related-products-grid');
  const empty = document.getElementById('related-products-empty');

  if (relatedGrid) {
    relatedGrid.innerHTML = '';
  }

  if (relatedGrid) {
    const relatedSlugs = (product.relatedProductSlugs || []).filter(Boolean);
    let related = relatedSlugs.map(s => (config.productDetails || []).find(p => p.slug === s)).filter(Boolean);

    // Fallback: same category
    if (!related.length && product.categoryIds && product.categoryIds.length) {
      related = (config.productDetails || [])
        .filter(p => p.slug !== product.slug && p.categoryIds && p.categoryIds.some(cid => product.categoryIds.includes(cid)))
        .slice(0, 3);
    }

    relatedGrid.innerHTML = '';
    if (!related.length) {
      if (empty) empty.style.display = 'block';
    } else {
      if (empty) empty.style.display = 'none';
      related.forEach(p => {
        const card = document.createElement('div');
        card.className = 'premium-card related-card';
        card.innerHTML = `

          <div class="related-card-img">
            <img src="${p.image || (p.galleryImages && p.galleryImages[0]) || ''}" alt="${p.title}" loading="lazy"/>
          </div>
          <div class="related-card-content">
            <h3>${p.title}</h3>
            <p>${(p.shortDescription || '').slice(0, 95)}${(p.shortDescription || '').length > 95 ? '...' : ''}</p>
            <a class="btn btn-dark" href="${getProductUrl(p)}">View Product</a>
          </div>
        `;
        relatedGrid.appendChild(card);
      });
    }
  }

  // Make visible
  if (loader) loader.style.display = 'none';
  layout.style.display = 'grid';
  prepareRevealTargets();
  initScrollReveal();
}

function prepareRevealTargets() {
  document.querySelectorAll([
    '.section-padding > .container',
    '.page-header-content',
    '.premium-card',
    '.feature-card',
    '.industry-item',
    '.inquiry-form-card',
    '.product-gallery',
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

function updateMetaTag(name, content) {
  const tag = document.querySelector(`meta[name="${name}"]`);
  if (tag && content) tag.setAttribute('content', content);
}

function updateMetaProperty(property, content) {
  const tag = document.querySelector(`meta[property="${property}"]`);
  if (tag && content) tag.setAttribute('content', content);
}

function injectProductJsonLd(product) {
  const old = document.getElementById('product-jsonld');
  if (old) old.remove();

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'product-jsonld';
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    image: product.galleryImages || [product.image],
    description: product.fullDescription || product.shortDescription,
    brand: {
      '@type': 'Brand',
      name: config.business.name
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
