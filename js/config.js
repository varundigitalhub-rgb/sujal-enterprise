export const config = {
  // =========================================================================
  // CLIENT NOTICE: All settings below are placeholders and can be verified,
  // updated, or confirmed by the client at any time.
  // =========================================================================
  business: {
    // =========================================================================
    // CLIENT PLACEHOLDERS (NOT VERIFIED BUSINESS INFORMATION)
    // Replace after client confirmation.
    // =========================================================================
    name: "Sujal Enterprise",
    legalName: "Sujal Enterprise",

    // Business category/description are editable until client confirms.
    category: "INDUSTRIAL STEEL PIPES & FORGED FITTINGS SUPPLIER (EDIT) ",
    description: "(EDIT) Wholesale distributor, manufacturer, and supplier of industrial steel pipes, forged fittings and flanges. Serving Mumbai, Maharashtra, India.",

    // Do not treat foundingYear as final until confirmed.
    foundingYear: "YEAR_HERE",

    // Address and maps embed must be confirmed by client.
    address: "ADDRESS_HERE, Mumbai - PINCODE, Maharashtra, India",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=PASTE_GOOGLE_MAPS_EMBED_URL_HERE",

    // Geo coordinates must be confirmed by client.
    geo: {
      latitude: "LATITUDE_HERE",
      longitude: "LONGITUDE_HERE",
      region: "Mumbai, Maharashtra",
      country: "India"
    },

    // Phones/email must be confirmed by client.
    phones: ["PHONE_1_HERE", "PHONE_2_HERE"],
    whatsapp: "WHATSAPP_NUMBER_HERE",
    email: "EMAIL_HERE",

    // Contact Form Backend Integration (Web3Forms)
    // Request a free access key at https://web3forms.com/ and paste it below
    web3forms_key: "YOUR_ACCESS_KEY_HERE",

    // Optional Social Media Links (Rendered dynamically ONLY if populated)
    // Keep blank until client confirms.
    socials: {
      facebook: "",
      instagram: "",
      youtube: "",
      twitter: ""
    }
  },
  
  // Dynamic Odometer Stats for Home page
  stats: [
    { label: "YEARS OF EXPERIENCE", count: 12 },
    { label: "PRODUCTS SUPPLIED", count: 750 },
    { label: "INDUSTRIES SERVED", count: 15 },
    { label: "SATISFIED CLIENTS", count: 1200 }
  ],
  
  // Why Choose Us Pillars
  whyChooseUs: [
    {
      title: "Quality Commitment",
      description: "Our materials undergo rigorous mechanical, chemical, and hydrostatic tests. We follow strict international standards (ASME, ASTM, ANSI) to guarantee 100% compliance.",
      icon: "fa-certificate"
    },
    {
      title: "Fast Delivery",
      description: "With our extensive inventory and strong logistics partners, we ensure rapid dispatch and delivery to meet tight project timelines globally.",
      icon: "fa-truck-fast"
    },
    {
      title: "Trusted Supplier",
      description: "Over a decade of trading history has built trust across major government and private sector clients who count on us for genuine raw materials.",
      icon: "fa-handshake"
    },
    {
      title: "Competitive Pricing",
      description: "We work directly with major manufacturers and keep low overheads to pass cost savings onto our clients without compromising raw material quality.",
      icon: "fa-tags"
    }
  ],

  // Products Section (Scalable architecture supporting unlimited categories and items)
  // NOTE: This existing structure is kept for backward compatibility with the current products.html category layout.
  products: [

    {
      id: "forged-fittings",
      title: "Forged Fittings",
      description: "High-pressure forged pipe fittings manufactured in compliance with international dimensional standards.",
      image: "/images/products/forged-fittings.png",
      items: [
        { name: "Threaded Elbows (90° & 45°)", spec: "ASME B16.11, 2000# / 3000# / 6000#" },
        { name: "Threaded Equal & Unequal Tees", spec: "ASME B16.11, Class 3000 / 6000" },
        { name: "Socket-Weld Elbows & Tees", spec: "ASME B16.11, Socket-weld joints" },
        { name: "Threaded Unions & Couplings", spec: "Full and half coupling options" },
        { name: "Hex Nipples & Head Plugs", spec: "High-quality threaded fasteners" },
        { name: "Threaded Bushings", spec: "Reducing bushings in various thread profiles" }
      ]
    },
    {
      id: "buttweld-fittings",
      title: "Buttweld Fittings",
      description: "Seamless and welded buttweld fittings ideal for high-pressure fluid flow distribution.",
      image: "/images/products/buttweld-fittings.png",
      items: [
        { name: "Long & Short Radius Elbows", spec: "ASME B16.9, 90° & 45° Elbows" },
        { name: "Concentric & Eccentric Reducers", spec: "Wall thickness Sch 10s to XXS" },
        { name: "Equal & Reducing Tees", spec: "Seamless steel construction" },
        { name: "Pipe Caps & Bends", spec: "Custom Piggable Bends and End Caps" }
      ]
    },
    {
      id: "flanges",
      title: "Industrial Flanges",
      description: "Forged and plate flanges in carbon steel, stainless steel, and alloy grades.",
      image: "/images/products/flanges.png",
      items: [
        { name: "Slip-On Flanges (SORF)", spec: "ASME B16.5, Class 150 to 2500" },
        { name: "Socket Weld Flanges (SWRF)", spec: "ASME B16.5, High security pressure seal" },
        { name: "Blind Flanges (BLRF)", spec: "ASME B16.5, For pipe endings" },
        { name: "Welding Neck Flanges (WNRF)", spec: "ASME B16.5, Hubbed heavy duty" },
        { name: "Spectacle Blind Flanges", spec: "Pressure rating up to Class 1500" }
      ]
    },
    {
      id: "pipes-tubes",
      title: "Pipes & Tubes",
      description: "Heavy-duty industrial pipes in mild steel, stainless steel, and carbon steel grades.",
      image: "/images/products/pipes-tubes.png",
      items: [
        { name: "Stainless Steel Seamless Pipes", spec: "ASTM A312 TP304/304L & TP316/316L" },
        { name: "Carbon Steel Seamless Pipes", spec: "ASTM A106 Gr. B / A53 / API 5L" },
        { name: "Mild Steel ERW & GI Pipes", spec: "IS 1239 / IS 3589 Galvanized & Black" }
      ]
    }
  ],

  // -------------------------------------------------------------------------
  // Product Details Dataset (dynamic + scalable)
  // NOTE: For now, these are generated from the legacy category-level
  // `config.products[].items[]` so the site works immediately. Replace or
  // extend these entries with real project-grade specs as needed.
  // -------------------------------------------------------------------------
  productDetails: [

    {

      slug: 'forged-threaded-elbows-90-45-2000-3000-6000',
      categoryIds: ['forged-fittings'],
      title: 'Threaded Elbows (90° & 45°)',
      shortDescription: 'Threaded forged elbows (90° & 45°) for high-pressure pipeline systems complying with ASME dimensional requirements.',
      fullDescription: 'Forged threaded elbows manufactured to industry dimensional standards for reliable flow direction control in industrial pipeline applications. Suitable for carbon steel and stainless steel grades as per project requirement.',
      image: '/images/products/forged-fittings.png',
      galleryImages: ['/images/products/forged-fittings.png', '/images/products/buttweld-fittings.png', '/images/products/flanges.png'],
      technicalSpecifications: [
        { label: 'Primary Standard', value: 'ASME B16.11' },
        { label: 'Pressure Class', value: '2000# / 3000# / 6000#' }
      ],
      sizesOrGrades: ['ASME Class 2000', 'ASME Class 3000', 'ASME Class 6000', 'Carbon Steel (project-specific)', 'SS Grades (project-specific)'],
      features: ['Threaded connection', 'High-pressure rated design', 'Project traceability support'],
      applications: ['Oil & Gas piping', 'Chemical processing', 'Power generation piping', 'Industrial transmission lines'],
      materialSpecifications: ['ASTM A105 (typical - project-specific)', 'SS grades (project-specific)'],
      standards: ['ASME B16.11'],
      keywords: ['forged', 'threaded elbow', 'ASME B16.11', '2000#', '3000#', '6000#', 'elbow 90', 'elbow 45'],
      relatedProductSlugs: []
    },
    {
      slug: 'forged-threaded-equal-unequal-tees-asme-b1611-class-3000-6000',
      categoryIds: ['forged-fittings'],
      title: 'Threaded Equal & Unequal Tees',
      shortDescription: 'Forged threaded tees (equal & unequal) for branch connections in industrial piping networks.',
      fullDescription: 'Threaded equal and unequal tees designed for dependable branch routing with forged construction for robust mechanical performance under pipeline service conditions.',
      image: '/images/products/forged-fittings.png',
      galleryImages: ['/images/products/forged-fittings.png', '/images/products/buttweld-fittings.png', '/images/products/flanges.png'],
      technicalSpecifications: [
        { label: 'Primary Standard', value: 'ASME B16.11' },
        { label: 'Pressure Class', value: 'Class 3000 / 6000' }
      ],
      sizesOrGrades: ['ASME Class 3000', 'ASME Class 6000', 'Carbon Steel (project-specific)', 'SS Grades (project-specific)'],
      features: ['Threaded connection', 'Forged construction', 'Project traceability support'],
      applications: ['Pipe branching', 'Industrial manifolds', 'Process piping'],
      materialSpecifications: ['ASTM A105 (typical - project-specific)', 'SS grades (project-specific)'],
      standards: ['ASME B16.11'],
      keywords: ['forged', 'threaded tee', 'ASME B16.11', 'Class 3000', 'Class 6000', 'equal tee', 'unequal tee'],
      relatedProductSlugs: []
    },
    {
      slug: 'forged-socket-weld-elbows-tees',
      categoryIds: ['forged-fittings'],
      title: 'Socket-Weld Elbows & Tees',
      shortDescription: 'Socket-weld forged elbows and tees for welded pipeline assemblies requiring compact installation.',
      fullDescription: 'Socket-weld elbows and tees manufactured for reliable welded joints in industrial pipeline systems, offering controlled fit and durable performance.',
      image: '/images/products/forged-fittings.png',
      galleryImages: ['/images/products/forged-fittings.png', '/images/products/buttweld-fittings.png', '/images/products/flanges.png'],
      technicalSpecifications: [
        { label: 'Primary Standard', value: 'ASME B16.11' },
        { label: 'Joint Type', value: 'Socket-weld joints' }
      ],
      sizesOrGrades: ['Project-specified sizes', 'Carbon Steel (project-specific)', 'SS Grades (project-specific)'],
      features: ['Socket-weld joints', 'Compact installation', 'Project traceability support'],
      applications: ['Industrial piping', 'Process lines', 'Power plant auxiliary lines'],
      materialSpecifications: ['ASTM A105 (typical - project-specific)', 'SS grades (project-specific)'],
      standards: ['ASME B16.11'],
      keywords: ['socket weld', 'forged elbow', 'forged tee', 'ASME B16.11'],
      relatedProductSlugs: []
    },
    {
      slug: 'forged-threaded-unions-couplings',
      categoryIds: ['forged-fittings'],
      title: 'Threaded Unions & Couplings',
      shortDescription: 'Threaded unions and couplings for easy disassembly and reliable threaded pipeline connections.',
      fullDescription: 'Forged threaded unions and couplings engineered for secure connection integrity and practical maintenance/assembly workflows in industrial piping.',
      image: '/images/products/forged-fittings.png',
      galleryImages: ['/images/products/forged-fittings.png', '/images/products/buttweld-fittings.png', '/images/products/pipes-tubes.png'],
      technicalSpecifications: [
        { label: 'Primary Standard', value: 'ASME B16.11' },
        { label: 'Options', value: 'Full and half coupling options' }
      ],
      sizesOrGrades: ['Project-specified sizes', 'Carbon Steel (project-specific)', 'SS Grades (project-specific)'],
      features: ['Threaded connections', 'Flexible assembly', 'Project traceability support'],
      applications: ['Maintenance spares', 'Industrial manifolds', 'Process piping connections'],
      materialSpecifications: ['ASTM A105 (typical - project-specific)', 'SS grades (project-specific)'],
      standards: ['ASME B16.11'],
      keywords: ['union', 'coupling', 'threaded', 'forged', 'ASME B16.11'],
      relatedProductSlugs: []
    },
    {
      slug: 'forged-hex-nipples-head-plugs',
      categoryIds: ['forged-fittings'],
      title: 'Hex Nipples & Head Plugs',
      shortDescription: 'Hex nipples and head plugs for threaded runs, closures, and service piping accessories.',
      fullDescription: 'Hex nipples and head plugs manufactured for reliable threaded seating and closure applications in industrial pipe assemblies.',
      image: '/images/products/forged-fittings.png',
      galleryImages: ['/images/products/forged-fittings.png', '/images/products/flanges.png', '/images/products/buttweld-fittings.png'],
      technicalSpecifications: [
        { label: 'Use', value: 'Threaded fasteners / closures' }
      ],
      sizesOrGrades: ['Project-specified sizes', 'Carbon Steel (project-specific)', 'SS Grades (project-specific)'],
      features: ['Threaded installation', 'Closure & extension options', 'Project traceability support'],
      applications: ['Pipe closure', 'Instrumentation connections', 'Industrial service lines'],
      materialSpecifications: ['ASTM A105 (typical - project-specific)', 'SS grades (project-specific)'],
      standards: [],
      keywords: ['hex nipple', 'head plug', 'threaded', 'forged'],
      relatedProductSlugs: []
    },
    {
      slug: 'forged-threaded-bushings',
      categoryIds: ['forged-fittings'],
      title: 'Threaded Bushings',
      shortDescription: 'Forged threaded bushings for reducing/transitioning thread sizes in industrial piping.',
      fullDescription: 'Threaded bushings designed to transition between thread profiles and sizes for controlled flow path integration in industrial pipelines.',
      image: '/images/products/forged-fittings.png',
      galleryImages: ['/images/products/forged-fittings.png', '/images/products/buttweld-fittings.png', '/images/products/pipes-tubes.png'],
      technicalSpecifications: [
        { label: 'Function', value: 'Reducing bushings in various thread profiles' }
      ],
      sizesOrGrades: ['Thread-profile dependent', 'Carbon Steel (project-specific)', 'SS Grades (project-specific)'],
      features: ['Thread transition', 'Forged construction', 'Project traceability support'],
      applications: ['Thread size transitions', 'Industrial piping assemblies'],
      materialSpecifications: ['ASTM A105 (typical - project-specific)', 'SS grades (project-specific)'],
      standards: [],
      keywords: ['bushing', 'thread reducer', 'forged', 'threaded'],
      relatedProductSlugs: []
    },

    {
      slug: 'buttweld-long-short-radius-elbows-asme-b16-9',
      categoryIds: ['buttweld-fittings'],
      title: 'Long & Short Radius Elbows',
      shortDescription: 'Buttweld elbows (long & short radius) for high-pressure fluid flow distribution in industrial pipelines.',
      fullDescription: 'Long and short radius buttweld elbows manufactured for durable welded joint performance and optimized flow routing in pressure service piping.',
      image: '/images/products/buttweld-fittings.png',
      galleryImages: ['/images/products/buttweld-fittings.png', '/images/products/forged-fittings.png', '/images/products/pipes-tubes.png'],
      technicalSpecifications: [
        { label: 'Primary Standard', value: 'ASME B16.9' },
        { label: 'Angles', value: '90° & 45° Elbows' }
      ],
      sizesOrGrades: ['Project-specified sizes', 'Carbon Steel (project-specific)', 'SS Grades (project-specific)'],
      features: ['Buttweld joint', 'High-pressure design', 'Project traceability support'],
      applications: ['Industrial piping', 'Process lines', 'Oil & gas transmission'],
      materialSpecifications: ['Seamless steel grades (project-specific)'],
      standards: ['ASME B16.9'],
      keywords: ['buttweld elbow', 'long radius', 'short radius', 'ASME B16.9', '90 degree', '45 degree'],
      relatedProductSlugs: []
    },
    {
      slug: 'buttweld-concentric-eccentric-reducers',
      categoryIds: ['buttweld-fittings'],
      title: 'Concentric & Eccentric Reducers',
      shortDescription: 'Buttweld reducers (concentric & eccentric) for transitioning pipe diameters with controlled wall thickness options.',
      fullDescription: 'Concentric and eccentric reducers designed to transition between pipe sizes while supporting project-specified wall thickness configurations.',
      image: '/images/products/buttweld-fittings.png',
      galleryImages: ['/images/products/buttweld-fittings.png', '/images/products/pipes-tubes.png', '/images/products/forged-fittings.png'],
      technicalSpecifications: [
        { label: 'Wall Thickness Range', value: 'Sch 10s to XXS (placeholder - verify per project)' }
      ],
      sizesOrGrades: ['Project-specified sizes', 'Sch 10s to XXS (placeholder)'],
      features: ['Buttweld joint', 'Concentric/eccentric options', 'Project traceability support'],
      applications: ['Pipe diameter transitions', 'Process piping upgrades'],
      materialSpecifications: ['Seamless steel grades (project-specific)'],
      standards: [],
      keywords: ['reducer', 'concentric reducer', 'eccentric reducer', 'buttweld'],
      relatedProductSlugs: []
    },
    {
      slug: 'buttweld-equal-reducing-tees',
      categoryIds: ['buttweld-fittings'],
      title: 'Equal & Reducing Tees',
      shortDescription: 'Buttweld equal and reducing tees for dependable branch connections in industrial piping.',
      fullDescription: 'Equal and reducing buttweld tees engineered for robust branch performance with welded joint integrity for pressure service.',
      image: '/images/products/buttweld-fittings.png',
      galleryImages: ['/images/products/buttweld-fittings.png', '/images/products/forged-fittings.png', '/images/products/flanges.png'],
      technicalSpecifications: [
        { label: 'Construction', value: 'Seamless steel construction' }
      ],
      sizesOrGrades: ['Project-specified sizes', 'Carbon Steel (project-specific)', 'SS Grades (project-specific)'],
      features: ['Buttweld joints', 'Equal/reducing options', 'Project traceability support'],
      applications: ['Branching', 'Industrial manifolds', 'Process piping'],
      materialSpecifications: ['Seamless steel grades (project-specific)'],
      standards: [],
      keywords: ['tee', 'equal tee', 'reducing tee', 'buttweld'],
      relatedProductSlugs: []
    },
    {
      slug: 'buttweld-pipe-caps-bends',
      categoryIds: ['buttweld-fittings'],
      title: 'Pipe Caps & Bends',
      shortDescription: 'Buttweld end caps and bends supplied for pipeline closures and routing applications.',
      fullDescription: 'Pipe caps and bends manufactured for reliable end closures and routing integration in industrial pipeline systems.',
      image: '/images/products/buttweld-fittings.png',
      galleryImages: ['/images/products/buttweld-fittings.png', '/images/products/pipes-tubes.png', '/images/products/flanges.png'],
      technicalSpecifications: [
        { label: 'Capability', value: 'Custom Piggable Bends and End Caps (placeholder)' }
      ],
      sizesOrGrades: ['Project-specified sizes', 'Carbon Steel (project-specific)', 'SS Grades (project-specific)'],
      features: ['Closure/end-cap solutions', 'Piggable bend capability (placeholder)', 'Project traceability support'],
      applications: ['Pipeline closures', 'Pigging operations', 'Routing assemblies'],
      materialSpecifications: ['Seamless steel grades (project-specific)'],
      standards: [],
      keywords: ['pipe cap', 'end cap', 'bend', 'piggable', 'buttweld'],
      relatedProductSlugs: []
    },

    {
      slug: 'flange-slip-on-sorf',
      categoryIds: ['flanges'],
      title: 'Slip-On Flanges (SORF)',
      shortDescription: 'Slip-on flanges for industrial piping, offered in multiple pressure classes as per ASME B16.5.',
      fullDescription: 'Slip-on flanges designed for efficient installation with project-grade materials. Delivered with traceability support as required by industrial procurement.',
      image: '/images/products/flanges.png',
      galleryImages: ['/images/products/flanges.png', '/images/products/forged-fittings.png', '/images/products/pipes-tubes.png'],
      technicalSpecifications: [
        { label: 'Primary Standard', value: 'ASME B16.5' },
        { label: 'Pressure Class', value: 'Class 150 to 2500' }
      ],
      sizesOrGrades: ['ASME Class 150', 'ASME Class 300', 'ASME Class 600', 'ASME Class 900', 'ASME Class 1500', 'ASME Class 2500 (verify per project)'],
      features: ['Slip-on design', 'Project traceability support'],
      applications: ['Process piping', 'Industrial manifolds', 'Pressure pipelines'],
      materialSpecifications: ['Carbon steel / stainless steel (project-specific)'],
      standards: ['ASME B16.5'],
      keywords: ['slip-on flange', 'SORF', 'ASME B16.5', 'Class 150', 'Class 2500'],
      relatedProductSlugs: []
    },
    {
      slug: 'flange-socket-weld-swrf',
      categoryIds: ['flanges'],
      title: 'Socket Weld Flanges (SWRF)',
      shortDescription: 'Socket-weld flanges for high security pressure seal in welded pipeline assemblies.',
      fullDescription: 'Socket weld flanges manufactured to enable high-integrity welded joint connection and secure pressure sealing performance.',
      image: '/images/products/flanges.png',
      galleryImages: ['/images/products/flanges.png', '/images/products/forged-fittings.png', '/images/products/buttweld-fittings.png'],
      technicalSpecifications: [
        { label: 'Primary Standard', value: 'ASME B16.5' },
        { label: 'Sealing / Joint Type', value: 'High security pressure seal' }
      ],
      sizesOrGrades: ['Project-specified sizes', 'Carbon steel / stainless steel (project-specific)'],
      features: ['Socket-weld connection', 'High-integrity sealing (placeholder)'],
      applications: ['Industrial piping', 'High-pressure installations'],
      materialSpecifications: ['Carbon steel / stainless steel (project-specific)'],
      standards: ['ASME B16.5'],
      keywords: ['socket weld flange', 'SWRF', 'ASME B16.5', 'pressure seal'],
      relatedProductSlugs: []
    },
    {
      slug: 'flange-blind-flanges-blrf',
      categoryIds: ['flanges'],
      title: 'Blind Flanges (BLRF)',
      shortDescription: 'Blind flanges for sealing pipe ends in industrial piping systems with ASME B16.5 compliance.',
      fullDescription: 'Blind flanges manufactured to seal and close pipe ends reliably for industrial piping assemblies in high-pressure applications.',
      image: '/images/products/flanges.png',
      galleryImages: ['/images/products/flanges.png', '/images/products/pipes-tubes.png', '/images/products/forged-fittings.png'],
      technicalSpecifications: [
        { label: 'Primary Standard', value: 'ASME B16.5' },
        { label: 'Function', value: 'For pipe endings' }
      ],
      sizesOrGrades: ['Project-specified sizes', 'Carbon steel / stainless steel (project-specific)'],
      features: ['End-sealing', 'Project traceability support'],
      applications: ['Pipeline closures', 'Maintenance isolation points'],
      materialSpecifications: ['Carbon steel / stainless steel (project-specific)'],
      standards: ['ASME B16.5'],
      keywords: ['blind flange', 'BLRF', 'ASME B16.5', 'pipe end closure'],
      relatedProductSlugs: []
    },
    {
      slug: 'flange-welding-neck-flanges-wnrf',
      categoryIds: ['flanges'],
      title: 'Welding Neck Flanges (WNRF)',
      shortDescription: 'Welding neck flanges for heavy-duty welded pipeline connections compliant with ASME B16.5.',
      fullDescription: 'Welding neck flanges engineered for robust welded connection performance and high-pressure application suitability.',
      image: '/images/products/flanges.png',
      galleryImages: ['/images/products/flanges.png', '/images/products/buttweld-fittings.png', '/images/products/pipes-tubes.png'],
      technicalSpecifications: [
        { label: 'Primary Standard', value: 'ASME B16.5' },
        { label: 'Design', value: 'Hubbed heavy duty' }
      ],
      sizesOrGrades: ['Project-specified sizes', 'Carbon steel / stainless steel (project-specific)'],
      features: ['Heavy duty welded hub (placeholder)', 'Project traceability support'],
      applications: ['High-pressure piping', 'Power and process lines'],
      materialSpecifications: ['Carbon steel / stainless steel (project-specific)'],
      standards: ['ASME B16.5'],
      keywords: ['welding neck flange', 'WNRF', 'ASME B16.5', 'hubbed'],
      relatedProductSlugs: []
    },
    {
      slug: 'flange-spectacle-blind-flanges',
      categoryIds: ['flanges'],
      title: 'Spectacle Blind Flanges',
      shortDescription: 'Spectacle blind flanges for isolation and flow control applications with pressure ratings up to Class 1500 (placeholder).',
      fullDescription: 'Spectacle blind flanges used for controlled isolation with high pressure rating capability per project requirement.',
      image: '/images/products/flanges.png',
      galleryImages: ['/images/products/flanges.png', '/images/products/forged-fittings.png', '/images/products/buttweld-fittings.png'],
      technicalSpecifications: [
        { label: 'Pressure Rating', value: 'Up to Class 1500 (placeholder)' }
      ],
      sizesOrGrades: ['Project-specified sizes', 'Carbon steel / stainless steel (project-specific)'],
      features: ['Isolation capability', 'Project traceability support'],
      applications: ['Isolation valves / blind arrangements', 'Pipe system control'],
      materialSpecifications: ['Carbon steel / stainless steel (project-specific)'],
      standards: [],
      keywords: ['spectacle blind flange', 'isolation flange', 'Class 1500 (placeholder)'],
      relatedProductSlugs: []
    },

    {
      slug: 'pipes-stainless-steel-seamless-pipes-astm-a312',
      categoryIds: ['pipes-tubes'],
      title: 'Stainless Steel Seamless Pipes',
      shortDescription: 'Seamless stainless steel pipes for critical industrial applications with ASTM A312 coverage.',
      fullDescription: 'Stainless steel seamless pipes supplied for durable high-performance industrial piping systems, typically for corrosive and pressure service requirements.',
      image: '/images/products/pipes-tubes.png',
      galleryImages: ['/images/products/pipes-tubes.png', '/images/products/flanges.png', '/images/products/buttweld-fittings.png'],
      technicalSpecifications: [
        { label: 'Primary Standard', value: 'ASTM A312' },
        { label: 'Grades', value: 'TP304/304L & TP316/316L' }
      ],
      sizesOrGrades: ['TP304', 'TP304L', 'TP316', 'TP316L'],
      features: ['Seamless construction', 'Corrosion-resistant grades (project-specific)'],
      applications: ['Chemical processing', 'Process piping', 'Industrial fluid systems'],
      materialSpecifications: ['TP304/304L (project-specific)', 'TP316/316L (project-specific)'],
      standards: ['ASTM A312'],
      keywords: ['stainless seamless pipe', 'ASTM A312', 'TP304', 'TP316'],
      relatedProductSlugs: []
    },
    {
      slug: 'pipes-carbon-steel-seamless-pipes-astm-a106-a53-api-5l',
      categoryIds: ['pipes-tubes'],
      title: 'Carbon Steel Seamless Pipes',
      shortDescription: 'Carbon steel seamless pipes supplied for pressure service with ASTM A106, A53 and API 5L options.',
      fullDescription: 'Carbon steel seamless pipes for robust industrial pipeline installations where reliable strength and quality control are required.',
      image: '/images/products/pipes-tubes.png',
      galleryImages: ['/images/products/pipes-tubes.png', '/images/products/buttweld-fittings.png', '/images/products/flanges.png'],
      technicalSpecifications: [
        { label: 'Standards', value: 'ASTM A106 / ASTM A53 / API 5L' },
        { label: 'Typical Grade', value: 'Gr. B (placeholder)' }
      ],
      sizesOrGrades: ['ASTM A106 Gr. B (verify)', 'ASTM A53 (verify)', 'API 5L (verify)'],
      features: ['Seamless construction', 'Pressure-service ready (project-specific)'],
      applications: ['Oil & gas piping', 'Transmission lines', 'Industrial boilers'],
      materialSpecifications: ['Carbon steel grades (project-specific)'],
      standards: ['ASTM A106', 'ASTM A53', 'API 5L'],
      keywords: ['carbon seamless pipe', 'ASTM A106', 'ASTM A53', 'API 5L', 'Gr. B'],
      relatedProductSlugs: []
    },
    {
      slug: 'pipes-mild-steel-erw-gi-pipes',
      categoryIds: ['pipes-tubes'],
      title: 'Mild Steel ERW & GI Pipes',
      shortDescription: 'Mild steel ERW and galvanized iron (GI) pipes for industrial and construction pipeline needs.',
      fullDescription: 'ERW and GI pipes supplied as per relevant Indian standards for dependable performance in general industrial and construction piping applications.',
      image: '/images/products/pipes-tubes.png',
      galleryImages: ['/images/products/pipes-tubes.png', '/images/products/forged-fittings.png', '/images/products/flanges.png'],
      technicalSpecifications: [
        { label: 'Standards', value: 'IS 1239 / IS 3589' },
        { label: 'Coating / Type', value: 'Galvanized & Black (as applicable)' }
      ],
      sizesOrGrades: ['ERW', 'GI (project-specific)', 'Black steel (project-specific)'],
      features: ['ERW & GI options', 'Project traceability support'],
      applications: ['Water lines', 'HVAC and MEP plumbing', 'Industrial civil projects'],
      materialSpecifications: ['Mild steel (project-specific)'],
      standards: ['IS 1239', 'IS 3589'],
      keywords: ['ERW pipe', 'GI pipe', 'IS 1239', 'IS 3589', 'mild steel'],
      relatedProductSlugs: []
    }
  ],

  // Gallery Section (Scalable list)
  gallery: [
    { category: "products", image: "/images/gallery/products-1.webp", alt: "Industrial Flanges Grid" },

    { category: "products", image: "/images/gallery/products-2.webp", alt: "Forged Socketweld Elbows" },
    { category: "warehouse", image: "/images/gallery/warehouse-1.webp", alt: "Sujal Enterprise Warehouse Racks" },
    { category: "warehouse", image: "/images/gallery/warehouse-2.webp", alt: "Inside Industrial Storage Yard" },
    { category: "inventory", image: "/images/gallery/inventory-1.webp", alt: "Seamless Pipes Stacked" },
    { category: "inventory", image: "/images/gallery/inventory-2.webp", alt: "GI Fittings Shelves" },
    { category: "deliveries", image: "/images/gallery/deliveries-1.webp", alt: "Truck Loading Dispatch" },
    { category: "deliveries", image: "/images/gallery/deliveries-2.webp", alt: "Packed Pipes Ready for Shipping" },
    { category: "office", image: "/images/gallery/office-1.webp", alt: "Sujal Enterprise Sales Desk" },
    { category: "operations", image: "/images/gallery/operations-1.webp", alt: "Thickness Measurement Inspection" },
    { category: "operations", image: "/images/gallery/operations-2.webp", alt: "Hydro-testing Quality Verification" }
  ],

  // Client Logos (Optional logo items)
  clients: [

    { name: "Gujarat Gas", image: "/images/clients/gujarat-gas.png" },
    { name: "GAIL", image: "/images/clients/gail.png" },
    { name: "L&T", image: "/images/clients/lnt.png" },
    { name: "Indian Oil", image: "/images/clients/indian-oil.png" },
    { name: "ONGC", image: "/images/clients/ongc.png" },
    { name: "Torrent Gas", image: "/images/clients/torrent-gas.png" }
  ]
};
