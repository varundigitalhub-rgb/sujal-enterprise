export const config = {
  // =========================================================================
  // VERIFIED BUSINESS INFORMATION - Sujal Enterprise
  // =========================================================================
  business: {
    name: "Sujal Enterprise",
    legalName: "Sujal Enterprise",
    tagline: "An ISO 9001, 45001 & PED Certified",
    type: "Manufacturer, Supplier, Exporter and Stockist",
    gstin: "27ACEPY9541Q1ZI",
    logo: "/images/logo/sujal-enterprise%20updated%20logo.png",

    // Business category/description
    category: "MANUFACTURER, SUPPLIER, EXPORTER & STOCKIST OF STAINLESS STEEL, MILD STEEL & GI FITTINGS",
    description: "Sujal Enterprise is a trusted manufacturer, supplier, exporter, and stockist of premium quality Stainless Steel (SS), Mild Steel (MS), and GI Fittings. Based in Mumbai, Maharashtra, we serve industries across India with certified industrial products.",

    foundingYear: "",

    // Verified Address
    address: "Shop No. B-1, Bharat Lokhand Bazaar, 1st Lane, M.S. Ali Road, Mumbai – 400008, Maharashtra, India",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.105!2d72.8270948!3d18.9618858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce159afbae23%3A0xba55b881e84bd7f9!2sSujal%20Enterprise!5e0!3m2!1sen!2sin!4v1",

    // Geo coordinates
    geo: {
      latitude: "18.9618858",
      longitude: "72.8270948",
      region: "Mumbai, Maharashtra",
      country: "India"
    },

    // Phones/email
    phones: ["+91 9833593672", "+91 8369167479"],
    whatsapp: "+918369167479",
    email: "sujalenterprise01@gmail.com",

    // Contact Form Backend Integration (Web3Forms)
    web3forms_key: "YOUR_ACCESS_KEY_HERE",

    // Social Media Links (Leave blank if not available)
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

  // Products Section
  products: [
    {
      id: "stainless-steel",
      title: "Stainless Steel (SS)",
      description: "Premium quality stainless steel products in various grades including SS Sheets, Plates, Coils, Pipes, Pipe Fittings, Flanges, Round Bars, and Valves.",
      image: "/images/products/Stainless%20Steel%20Sheets.jpg",
      items: [
        { name: "Stainless Steel Sheets", spec: "Grades: SS 304/304L, SS 316/316L, Various thicknesses" },
        { name: "Stainless Steel Plates", spec: "Grades: SS 304/304L, SS 316/316L, Custom sizes" },
        { name: "Stainless Steel Coils", spec: "Grades: SS 304/304L, SS 316/316L, Various widths" },
        { name: "Stainless Steel Pipes", spec: "ASTM A312, Seamless & Welded, Schedule 10S to XXS" },
        { name: "Pipe Fittings", spec: "SS Elbows, Tees, Reducers, Caps - ASME B16.9" },
        { name: "Flanges", spec: "SS Slip-On, Weld Neck, Blind Flanges - ASME B16.5" },
        { name: "Round Bars", spec: "SS 304/304L, SS 316/316L, Bright & Black Finish" },
        { name: "Valves", spec: "SS Gate, Globe, Check & Ball Valves" }
      ]
    },
    {
      id: "mild-steel",
      title: "Mild Steel (MS)",
      description: "High-quality mild steel products including MS Pipes, Plates, Sheets, and Coils for industrial and construction applications.",
      image: "/images/products/MS%20Pipes%201.webp",
      items: [
        { name: "MS Pipes", spec: "ERW & Seamless, IS 1239 / IS 3589, Various sizes" },
        { name: "MS Plates", spec: "Hot Rolled & Cold Rolled, Custom thicknesses available" },
        { name: "MS Sheets", spec: "CR & HR Sheets, Various gauges and sizes" },
        { name: "MS Coils", spec: "HR & CR Coils, Custom width and thickness options" }
      ]
    },
    {
      id: "gi-fittings",
      title: "GI Fittings",
      description: "Complete range of Galvanized Iron (GI) pipe fittings including Elbows, Unions, Tees, Couplings, Socket Fittings, and other GI pipe fittings.",
      image: "/images/products/GI%20Elbows%201.webp",
      items: [
        { name: "GI Elbows", spec: "Threaded, 90° & 45°, Various sizes" },
        { name: "GI Unions", spec: "Threaded Unions, Equal & Reducing" },
        { name: "GI Tees", spec: "Equal & Reducing Tees, Threaded connections" },
        { name: "GI Couplings", spec: "Full & Reducing Couplings, Threaded" },
        { name: "GI Socket Fittings", spec: "Socket connections for GI piping systems" },
        { name: "Other GI Pipe Fittings", spec: "GI Nipples, Caps, Plugs, Bushings" }
      ]
    }
  ],

  // -------------------------------------------------------------------------
  // Product Details Dataset
  // -------------------------------------------------------------------------
  productDetails: [
    // ===== Stainless Steel (SS) Products =====
    {
      slug: 'ss-sheets',
      categoryIds: ['stainless-steel'],
      title: 'Stainless Steel Sheets',
      shortDescription: 'High-quality SS sheets in grades 304/304L and 316/316L, available in various thicknesses and finishes.',
      fullDescription: 'Our stainless steel sheets are manufactured to precise dimensional tolerances with excellent corrosion resistance. Suitable for industrial fabrication, chemical processing equipment, food processing machinery, and architectural applications.',
      image: '/images/products/Stainless%20Steel%20Sheets.jpg',
      galleryImages: ['/images/products/Stainless%20Steel%20Sheets.jpg', '/images/products/Stainless%20Steel%20Sheets%202.webp', '/images/products/Stainless%20Steel%20Sheets%203.jpeg'],
      technicalSpecifications: [
        { label: 'Grades', value: 'SS 304/304L, SS 316/316L' },
        { label: 'Thickness Range', value: '0.5 mm to 12 mm' },
        { label: 'Finish Options', value: '2B, BA, No.4 Brushed, Mirror Polish' },
        { label: 'Width Range', value: '1000 mm to 2000 mm' }
      ],
      sizesOrGrades: ['SS 304', 'SS 304L', 'SS 316', 'SS 316L', 'Custom sizes available'],
      features: ['Corrosion resistant', 'High strength-to-weight ratio', 'Excellent formability', 'Hygienic surface finish'],
      applications: ['Food processing equipment', 'Chemical storage tanks', 'Architectural cladding', 'Kitchen equipment'],
      materialSpecifications: ['ASTM A240', 'JIS G4305', 'EN 10088'],
      standards: ['ASTM A240', 'JIS G4305'],
      keywords: ['stainless steel sheets', 'SS sheets', 'SS 304 sheets', 'SS 316 sheets', 'industrial sheets'],
      relatedProductSlugs: ['ss-plates', 'ss-coils', 'ss-pipes']
    },
    {
      slug: 'ss-plates',
      categoryIds: ['stainless-steel'],
      title: 'Stainless Steel Plates',
      shortDescription: 'Durable SS plates in 304/304L and 316/316L grades for heavy-duty industrial applications.',
      fullDescription: 'We supply stainless steel plates with certified material traceability, suitable for high-pressure and high-temperature industrial applications including pressure vessels, heat exchangers, and structural components.',
      image: '/images/products/Stainless%20Steel%20Plates.jpg',
      galleryImages: ['/images/products/Stainless%20Steel%20Plates.jpg', '/images/products/Stainless%20Steel%20Plates%202.jpg', '/images/products/Stainless%20Steel%20Plates%203.webp'],
      technicalSpecifications: [
        { label: 'Grades', value: 'SS 304/304L, SS 316/316L' },
        { label: 'Thickness Range', value: '3 mm to 100 mm' },
        { label: 'Width Range', value: '1250 mm to 3000 mm' },
        { label: 'Standard', value: 'ASTM A240 / ASME SA240' }
      ],
      sizesOrGrades: ['SS 304', 'SS 304L', 'SS 316', 'SS 316L', 'Custom dimensions available'],
      features: ['High tensile strength', 'Excellent weldability', 'Corrosion resistant', 'Heat resistant options'],
      applications: ['Pressure vessels', 'Heat exchangers', 'Structural components', 'Shipbuilding'],
      materialSpecifications: ['ASTM A240', 'ASME SA240', 'EN 10028'],
      standards: ['ASTM A240', 'ASME SA240'],
      keywords: ['stainless steel plates', 'SS plates', 'SS 304 plates', 'SS 316 plates', 'heavy duty plates'],
      relatedProductSlugs: ['ss-sheets', 'ss-coils']
    },
    {
      slug: 'ss-coils',
      categoryIds: ['stainless-steel'],
      title: 'Stainless Steel Coils',
      shortDescription: 'High-grade SS coils in 304/304L and 316/316L grades for continuous processing applications.',
      fullDescription: 'Premium stainless steel coils supplied in various widths and thicknesses, ideal for roll forming, tube manufacturing, and sheet metal fabrication industries.',
      image: '/images/products/Stainless%20Steel%20Coils%201.webp',
      galleryImages: ['/images/products/Stainless%20Steel%20Coils%201.webp', '/images/products/Stainless%20Steel%20Coils%202.webp', '/images/products/Stainless%20Steel%20Coils%203.webp'],
      technicalSpecifications: [
        { label: 'Grades', value: 'SS 304/304L, SS 316/316L' },
        { label: 'Thickness Range', value: '0.3 mm to 8 mm' },
        { label: 'Coil Weight', value: 'Up to 15 MT per coil' },
        { label: 'Surface Finish', value: '2B, BA, No.4' }
      ],
      sizesOrGrades: ['SS 304', 'SS 304L', 'SS 316', 'SS 316L', 'Custom slit widths'],
      features: ['Uniform thickness', 'Consistent mechanical properties', 'Excellent surface quality', 'Custom slitting available'],
      applications: ['Tube manufacturing', 'Roll forming', 'Automotive components', 'Utensil manufacturing'],
      materialSpecifications: ['ASTM A240', 'JIS G4305'],
      standards: ['ASTM A240', 'JIS G4305'],
      keywords: ['stainless steel coils', 'SS coils', 'SS 304 coils', 'SS 316 coils', 'steel coil'],
      relatedProductSlugs: ['ss-sheets', 'ss-plates']
    },
    {
      slug: 'ss-pipes',
      categoryIds: ['stainless-steel'],
      title: 'Stainless Steel Pipes',
      shortDescription: 'Seamless and welded SS pipes in multiple schedules for industrial piping systems.',
      fullDescription: 'We supply stainless steel pipes in both seamless and welded constructions, conforming to international standards. Suitable for high-pressure fluid transmission, structural applications, and corrosive environments.',
      image: '/images/products/Stainless%20Steel%20Pipes%201.jpg',
      galleryImages: ['/images/products/Stainless%20Steel%20Pipes%201.jpg', '/images/products/Stainless%20Steel%20Pipes%202.webp', '/images/products/Stainless%20Steel%20Pipes%203.webp'],
      technicalSpecifications: [
        { label: 'Standard', value: 'ASTM A312 / ASME SA312' },
        { label: 'Grades', value: 'TP304/304L, TP316/316L' },
        { label: 'Schedule Range', value: 'Sch 10S to Sch 80S' },
        { label: 'Size Range', value: '1/2" to 24" NB' }
      ],
      sizesOrGrades: ['TP304', 'TP304L', 'TP316', 'TP316L', 'Custom schedules'],
      features: ['Seamless & welded options', 'Corrosion resistant', 'High pressure rating', 'Full traceability'],
      applications: ['Process piping', 'Chemical industries', 'Oil & gas', 'Water treatment'],
      materialSpecifications: ['ASTM A312', 'ASME SA312', 'EN 10216'],
      standards: ['ASTM A312', 'ASME SA312'],
      keywords: ['SS pipes', 'stainless steel pipes', 'SS seamless pipes', 'SS welded pipes', 'ASTM A312'],
      relatedProductSlugs: ['ss-sheets', 'pipe-fittings', 'flanges']
    },
    {
      slug: 'pipe-fittings',
      categoryIds: ['stainless-steel'],
      title: 'Pipe Fittings',
      shortDescription: 'Complete range of SS pipe fittings including elbows, tees, reducers, and caps for industrial piping.',
      fullDescription: 'Our stainless steel pipe fittings are manufactured to precise dimensional standards ensuring perfect fitment in industrial piping networks. Available in both seamless and welded constructions.',
      image: '/images/products/Pipe%20Fittings%201.webp',
      galleryImages: ['/images/products/Pipe%20Fittings%201.webp', '/images/products/Pipe%20Fittings%202.png', '/images/products/Pipe%20Fittings%203.webp'],
      technicalSpecifications: [
        { label: 'Standard', value: 'ASME B16.9' },
        { label: 'Grades', value: 'SS 304/304L, SS 316/316L' },
        { label: 'Types', value: 'Elbows, Tees, Reducers, Caps, Stub Ends' },
        { label: 'Schedule', value: 'Sch 10S to Sch 80S' }
      ],
      sizesOrGrades: ['SS 304', 'SS 304L', 'SS 316', 'SS 316L', 'Custom sizes'],
      features: ['Precision dimensions', 'High corrosion resistance', 'Weld-ready ends', 'Full traceability'],
      applications: ['Chemical plants', 'Refineries', 'Power generation', 'Pharmaceutical industries'],
      materialSpecifications: ['ASTM A403', 'ASME B16.9'],
      standards: ['ASME B16.9', 'ASTM A403'],
      keywords: ['SS pipe fittings', 'stainless steel fittings', 'elbows', 'tees', 'reducers'],
      relatedProductSlugs: ['ss-pipes', 'flanges']
    },
    {
      slug: 'flanges',
      categoryIds: ['stainless-steel'],
      title: 'Flanges',
      shortDescription: 'Industrial SS flanges including slip-on, weld neck, and blind flanges as per ASME B16.5.',
      fullDescription: 'Our stainless steel flanges are forged and machined to precise tolerances for secure pipe connections in high-pressure industrial applications.',
      image: '/images/products/flanges%201.png',
      galleryImages: ['/images/products/flanges%201.png', '/images/products/Flanges%202.webp', '/images/products/Flanges%203.webp'],
      technicalSpecifications: [
        { label: 'Standard', value: 'ASME B16.5' },
        { label: 'Grades', value: 'SS 304/304L, SS 316/316L' },
        { label: 'Types', value: 'Slip-On, Weld Neck, Blind, Socket Weld' },
        { label: 'Pressure Class', value: 'Class 150 to Class 1500' }
      ],
      sizesOrGrades: ['SS 304', 'SS 304L', 'SS 316', 'SS 316L', 'Class 150 to Class 1500'],
      features: ['Forged construction', 'Precision machined', 'Raised face & RTJ options', 'Full material traceability'],
      applications: ['Pipeline connections', 'Pressure vessels', 'Pump & valve connections', 'Industrial manifolds'],
      materialSpecifications: ['ASTM A182', 'ASME B16.5'],
      standards: ['ASME B16.5', 'ASTM A182'],
      keywords: ['SS flanges', 'stainless steel flanges', 'slip-on flange', 'weld neck flange', 'blind flange'],
      relatedProductSlugs: ['ss-pipes', 'pipe-fittings', 'round-bars']
    },
    {
      slug: 'round-bars',
      categoryIds: ['stainless-steel'],
      title: 'Round Bars',
      shortDescription: 'SS round bars in 304/304L and 316/316L grades for machining and fabrication applications.',
      fullDescription: 'We supply stainless steel round bars in bright and black finish, used extensively in machining, shaft manufacturing, valves, and fasteners production.',
      image: '/images/products/Round%20Bars%201.jpg',
      galleryImages: ['/images/products/Round%20Bars%201.jpg', '/images/products/Round%20Bars%202.webp', '/images/products/Round%20Bars%203.webp'],
      technicalSpecifications: [
        { label: 'Grades', value: 'SS 304/304L, SS 316/316L' },
        { label: 'Diameter Range', value: '6 mm to 300 mm' },
        { label: 'Finish', value: 'Bright (Peeled/Polished), Black (Hot Rolled)' },
        { label: 'Standard', value: 'ASTM A276 / A479' }
      ],
      sizesOrGrades: ['SS 304', 'SS 304L', 'SS 316', 'SS 316L', 'Custom diameters'],
      features: ['Precision straightness', 'Consistent chemical composition', 'Various surface finishes', 'Cut-to-length options'],
      applications: ['Shaft manufacturing', 'Valve components', 'Fasteners', 'Machining industry'],
      materialSpecifications: ['ASTM A276', 'ASTM A479', 'EN 10088'],
      standards: ['ASTM A276', 'ASTM A479'],
      keywords: ['SS round bars', 'stainless steel bars', 'round bars', 'SS 304 bars', 'SS 316 bars'],
      relatedProductSlugs: ['flanges', 'valves']
    },
    {
      slug: 'valves',
      categoryIds: ['stainless-steel'],
      title: 'Valves',
      shortDescription: 'Industrial SS gate, globe, check, and ball valves for flow control applications.',
      fullDescription: 'Our stainless steel valves are precision engineered for reliable flow control in industrial piping systems. Available in various types and pressure ratings to suit diverse applications.',
      image: '/images/products/Valves%201.webp',
      galleryImages: ['/images/products/Valves%201.webp', '/images/products/Valves%202.png', '/images/products/Valves%203.webp'],
      technicalSpecifications: [
        { label: 'Types', value: 'Gate, Globe, Check, Ball Valves' },
        { label: 'Grades', value: 'SS 304, SS 316, CF8, CF8M' },
        { label: 'Pressure Rating', value: 'Class 150 to Class 1500' },
        { label: 'End Connections', value: 'Flanged, Threaded, Socket Weld' }
      ],
      sizesOrGrades: ['SS 304', 'SS 316', 'CF8', 'CF8M', 'Class 150 to Class 1500'],
      features: ['Leak-proof design', 'Corrosion resistant', 'Low torque operation', 'Certified materials'],
      applications: ['Oil & gas', 'Chemical processing', 'Water treatment', 'Power plants'],
      materialSpecifications: ['ASTM A351', 'ASTM A182', 'API 598'],
      standards: ['API 598', 'ASME B16.34'],
      keywords: ['SS valves', 'stainless steel valves', 'gate valve', 'globe valve', 'ball valve'],
      relatedProductSlugs: ['flanges', 'round-bars']
    },

    // ===== Mild Steel (MS) Products =====
    {
      slug: 'ms-pipes',
      categoryIds: ['mild-steel'],
      title: 'MS Pipes',
      shortDescription: 'High-quality mild steel pipes in ERW and seamless constructions for structural and industrial use.',
      fullDescription: 'Our mild steel pipes conform to Indian and international standards, suitable for structural applications, water supply lines, scaffolding, and general engineering purposes.',
      image: '/images/products/MS%20Pipes%201.webp',
      galleryImages: ['/images/products/MS%20Pipes%201.webp', '/images/products/MS%20Pipes%202.webp', '/images/products/MS%20Pipes%203.webp'],
      technicalSpecifications: [
        { label: 'Standards', value: 'IS 1239, IS 3589' },
        { label: 'Types', value: 'ERW, Seamless, Galvanized' },
        { label: 'Size Range', value: '15 mm NB to 300 mm NB' },
        { label: 'Wall Thickness', value: 'Light, Medium, Heavy series' }
      ],
      sizesOrGrades: ['IS 1239 Light', 'IS 1239 Medium', 'IS 1239 Heavy', 'IS 3589', 'Custom sizes'],
      features: ['Strong and durable', 'Weldable', 'Cost effective', 'Available in black & GI finish'],
      applications: ['Structural steelwork', 'Water supply lines', 'Scaffolding', 'Fencing'],
      materialSpecifications: ['IS 1239', 'IS 3589', 'ASTM A53'],
      standards: ['IS 1239', 'IS 3589', 'ASTM A53'],
      keywords: ['MS pipes', 'mild steel pipes', 'ERW pipes', 'IS 1239', 'steel pipes'],
      relatedProductSlugs: ['ms-plates', 'ms-sheets', 'ms-coils']
    },
    {
      slug: 'ms-plates',
      categoryIds: ['mild-steel'],
      title: 'MS Plates',
      shortDescription: 'Hot rolled and cold rolled mild steel plates for structural and industrial fabrication.',
      fullDescription: 'We supply mild steel plates in various thicknesses for heavy fabrication, structural steelwork, shipbuilding, and general engineering applications.',
      image: '/images/products/Mild%20Steel%20Plates%201.webp',
      galleryImages: ['/images/products/Mild%20Steel%20Plates%201.webp', '/images/products/Mild%20Steel%20Plates%202.webp', '/images/products/Mild%20Steel%20Plates%203.webp'],
      technicalSpecifications: [
        { label: 'Type', value: 'Hot Rolled (HR), Cold Rolled (CR)' },
        { label: 'Thickness Range', value: '2 mm to 100 mm' },
        { label: 'Width Range', value: '1250 mm to 2500 mm' },
        { label: 'Standard', value: 'IS 2062, ASTM A36' }
      ],
      sizesOrGrades: ['IS 2062 Gr. A', 'IS 2062 Gr. B', 'ASTM A36', 'Custom sizes'],
      features: ['High strength', 'Excellent weldability', 'Good formability', 'Cut-to-size options'],
      applications: ['Structural fabrication', 'Shipbuilding', 'Heavy machinery', 'Storage tanks'],
      materialSpecifications: ['IS 2062', 'ASTM A36', 'EN 10025'],
      standards: ['IS 2062', 'ASTM A36'],
      keywords: ['MS plates', 'mild steel plates', 'HR plates', 'steel plates', 'IS 2062'],
      relatedProductSlugs: ['ms-pipes', 'ms-sheets', 'ms-coils']
    },
    {
      slug: 'ms-sheets',
      categoryIds: ['mild-steel'],
      title: 'MS Sheets',
      shortDescription: 'Cold rolled and hot rolled mild steel sheets for general engineering and fabrication.',
      fullDescription: 'Our mild steel sheets are manufactured to tight gauge tolerances, suitable for automotive components, roofing, panels, and general sheet metal work.',
      image: '/images/products/Mild%20Steel%20sheet%201.webp',
      galleryImages: ['/images/products/Mild%20Steel%20sheet%201.webp', '/images/products/Mild%20Steel%20sheet%202.webp', '/images/products/Mild%20Steel%20sheet%203.webp'],
      technicalSpecifications: [
        { label: 'Types', value: 'CR Sheets, HR Sheets' },
        { label: 'Gauge Range', value: '10 Gauge to 26 Gauge' },
        { label: 'Sizes', value: 'Standard Coils & Cut Sheets' },
        { label: 'Standard', value: 'IS 513, IS 1079' }
      ],
      sizesOrGrades: ['CR Sheets', 'HR Sheets', 'Galvanized Sheets', 'Custom sizes'],
      features: ['Consistent gauge', 'Smooth surface finish', 'Easy to form', 'Cost effective'],
      applications: ['Automotive panels', 'Roofing', 'Ducting', 'General sheet metal'],
      materialSpecifications: ['IS 513', 'IS 1079', 'ASTM A1008'],
      standards: ['IS 513', 'IS 1079', 'ASTM A1008'],
      keywords: ['MS sheets', 'mild steel sheets', 'CR sheets', 'HR sheets', 'steel sheets'],
      relatedProductSlugs: ['ms-pipes', 'ms-plates', 'ms-coils']
    },
    {
      slug: 'ms-coils',
      categoryIds: ['mild-steel'],
      title: 'MS Coils',
      shortDescription: 'Hot rolled and cold rolled mild steel coils for continuous processing and manufacturing.',
      fullDescription: 'Our MS coils are supplied with uniform mechanical properties for slitting, roll forming, and tube manufacturing applications.',
      image: '/images/products/Mild%20Steel%20Coils%201.webp',
      galleryImages: ['/images/products/Mild%20Steel%20Coils%201.webp', '/images/products/Mild%20Steel%20Coils%202.webp', '/images/products/Mild%20Steel%20Coils%203.webp'],
      technicalSpecifications: [
        { label: 'Types', value: 'HR Coils, CR Coils' },
        { label: 'Thickness', value: '1.2 mm to 12 mm' },
        { label: 'Coil Weight', value: 'Up to 25 MT' },
        { label: 'Standard', value: 'IS 1079, IS 513' }
      ],
      sizesOrGrades: ['HR Coils', 'CR Coils', 'Pickled & Oiled', 'Custom widths'],
      features: ['Uniform properties', 'Consistent quality', 'Custom slitting', 'Competitive pricing'],
      applications: ['Tube manufacturing', 'Roll forming', 'Automotive industry', 'General fabrication'],
      materialSpecifications: ['IS 1079', 'IS 513', 'ASTM A1011'],
      standards: ['IS 1079', 'IS 513', 'ASTM A1011'],
      keywords: ['MS coils', 'mild steel coils', 'HR coils', 'CR coils', 'steel coils'],
      relatedProductSlugs: ['ms-pipes', 'ms-plates', 'ms-sheets']
    },

    // ===== GI Fittings =====
    {
      slug: 'gi-elbows',
      categoryIds: ['gi-fittings'],
      title: 'GI Elbows',
      shortDescription: 'Threaded galvanized iron elbows for plumbing and industrial piping systems.',
      fullDescription: 'Our GI elbows are manufactured to precise thread standards for leak-proof connections in water supply, plumbing, and firefighting piping systems.',
      image: '/images/products/GI%20Elbows%201.webp',
      galleryImages: ['/images/products/GI%20Elbows%201.webp', '/images/products/GI%20Elbows%202.webp', '/images/products/GI%20Elbows%203.webp'],
      technicalSpecifications: [
        { label: 'Types', value: '90° Elbow, 45° Elbow' },
        { label: 'Sizes', value: '15 mm (1/2") to 150 mm (6")' },
        { label: 'Connection', value: 'Threaded (BSP/NPT)' },
        { label: 'Standard', value: 'IS 1239 Part 2' }
      ],
      sizesOrGrades: ['15 mm (1/2")', '20 mm (3/4")', '25 mm (1")', '32 mm (1-1/4")', '40 mm (1-1/2")', '50 mm (2")', 'Larger sizes available'],
      features: ['Hot dip galvanized', 'Precision threads', 'Leak-proof joints', 'Corrosion resistant'],
      applications: ['Plumbing systems', 'Firefighting lines', 'Water supply', 'Irrigation'],
      materialSpecifications: ['IS 1239 Part 2', 'Malleable Iron'],
      standards: ['IS 1239 Part 2'],
      keywords: ['GI elbows', 'galvanized elbows', 'threaded elbows', 'GI fittings', 'plumbing elbows'],
      relatedProductSlugs: ['gi-unions', 'gi-tees', 'gi-couplings']
    },
    {
      slug: 'gi-unions',
      categoryIds: ['gi-fittings'],
      title: 'GI Unions',
      shortDescription: 'Threaded GI unions for easy disconnection and maintenance of piping systems.',
      fullDescription: 'Our galvanized iron unions allow quick disconnection of pipe sections for maintenance and repair, providing reliable sealing in plumbing and industrial applications.',
      image: '/images/products/GI%20Unions%201.webp',
      galleryImages: ['/images/products/GI%20Unions%201.webp', '/images/products/GI%20Unions%202.webp', '/images/products/GI%20Unions%203.webp'],
      technicalSpecifications: [
        { label: 'Types', value: 'Equal Unions, Reducing Unions' },
        { label: 'Sizes', value: '15 mm (1/2") to 80 mm (3")' },
        { label: 'Connection', value: 'Threaded (BSP)' },
        { label: 'Standard', value: 'IS 1239 Part 2' }
      ],
      sizesOrGrades: ['15 mm (1/2")', '20 mm (3/4")', '25 mm (1")', '32 mm (1-1/4")', '40 mm (1-1/2")', '50 mm (2")'],
      features: ['Easy disassembly', 'Secure sealing', 'Galvanized finish', 'Durable construction'],
      applications: ['Plumbing maintenance', 'Industrial piping', 'Water treatment', 'HVAC systems'],
      materialSpecifications: ['IS 1239 Part 2', 'Malleable Iron'],
      standards: ['IS 1239 Part 2'],
      keywords: ['GI unions', 'galvanized unions', 'pipe unions', 'threaded unions', 'GI fittings'],
      relatedProductSlugs: ['gi-elbows', 'gi-tees', 'gi-couplings']
    },
    {
      slug: 'gi-tees',
      categoryIds: ['gi-fittings'],
      title: 'GI Tees',
      shortDescription: 'Threaded GI tees for branch connections in plumbing and industrial pipe networks.',
      fullDescription: 'Our GI tees provide reliable branch connections in piping systems, manufactured with precise threading for secure and leak-free joints.',
      image: '/images/products/GI%20Tees%201.webp',
      galleryImages: ['/images/products/GI%20Tees%201.webp', '/images/products/GI%20Tees%202.webp', '/images/products/GI%20Tees%203.webp'],
      technicalSpecifications: [
        { label: 'Types', value: 'Equal Tees, Reducing Tees' },
        { label: 'Sizes', value: '15 mm (1/2") to 150 mm (6")' },
        { label: 'Connection', value: 'Threaded (BSP)' },
        { label: 'Standard', value: 'IS 1239 Part 2' }
      ],
      sizesOrGrades: ['15 mm (1/2")', '20 mm (3/4")', '25 mm (1")', '32 mm (1-1/4")', '40 mm (1-1/2")', '50 mm (2")', 'Larger sizes available'],
      features: ['Precision threads', 'Hot dip galvanized', 'Corrosion resistant', 'High pressure rating'],
      applications: ['Branch piping', 'Plumbing networks', 'Fire sprinkler systems', 'Industrial pipelines'],
      materialSpecifications: ['IS 1239 Part 2', 'Malleable Iron'],
      standards: ['IS 1239 Part 2'],
      keywords: ['GI tees', 'galvanized tees', 'pipe tees', 'threaded tees', 'GI fittings'],
      relatedProductSlugs: ['gi-elbows', 'gi-unions', 'gi-couplings']
    },
    {
      slug: 'gi-couplings',
      categoryIds: ['gi-fittings'],
      title: 'GI Couplings',
      shortDescription: 'Threaded GI couplings for connecting two pipe sections in plumbing and industrial systems.',
      fullDescription: 'Our GI couplings provide secure connections between pipe sections, manufactured with accurate threading for reliable joints in water supply and industrial piping.',
      image: '/images/products/GI%20Couplings%201.jpeg',
      galleryImages: ['/images/products/GI%20Couplings%201.jpeg', '/images/products/GI%20Couplings%202.webp', '/images/products/GI%20Couplings%203.webp'],
      technicalSpecifications: [
        { label: 'Types', value: 'Full Couplings, Reducing Couplings' },
        { label: 'Sizes', value: '15 mm (1/2") to 150 mm (6")' },
        { label: 'Connection', value: 'Threaded (BSP)' },
        { label: 'Standard', value: 'IS 1239 Part 2' }
      ],
      sizesOrGrades: ['15 mm (1/2")', '20 mm (3/4")', '25 mm (1")', '32 mm (1-1/4")', '40 mm (1-1/2")', '50 mm (2")', 'Larger sizes available'],
      features: ['Precision threading', 'Hot dip galvanized', 'Easy installation', 'Leak-proof joints'],
      applications: ['Pipe connections', 'Plumbing repairs', 'Extension joints', 'Water lines'],
      materialSpecifications: ['IS 1239 Part 2', 'Malleable Iron'],
      standards: ['IS 1239 Part 2'],
      keywords: ['GI couplings', 'galvanized couplings', 'pipe couplings', 'threaded couplings', 'GI fittings'],
      relatedProductSlugs: ['gi-elbows', 'gi-unions', 'gi-tees']
    },
    {
      slug: 'gi-socket-fittings',
      categoryIds: ['gi-fittings'],
      title: 'GI Socket Fittings',
      shortDescription: 'GI socket connections for joining pipes in plumbing and industrial applications.',
      fullDescription: 'Our galvanized iron socket fittings provide reliable pipe connections for various applications, manufactured to standard thread specifications for secure installation.',
      image: '/images/products/GI%20Socket%20Fittings%201.webp',
      galleryImages: ['/images/products/GI%20Socket%20Fittings%201.webp', '/images/products/GI%20Socket%20Fittings%202.webp', '/images/products/GI%20Socket%20Fittings%203.webp'],
      technicalSpecifications: [
        { label: 'Types', value: 'Socket (Coupling) Fittings' },
        { label: 'Sizes', value: '15 mm (1/2") to 100 mm (4")' },
        { label: 'Connection', value: 'Threaded (BSP)' },
        { label: 'Standard', value: 'IS 1239 Part 2' }
      ],
      sizesOrGrades: ['15 mm (1/2")', '20 mm (3/4")', '25 mm (1")', '32 mm (1-1/4")', '40 mm (1-1/2")', '50 mm (2")'],
      features: ['Precision threads', 'Durable GI coating', 'Reliable sealing', 'Easy installation'],
      applications: ['Plumbing systems', 'Pipe joining', 'Industrial pipelines', 'Water supply'],
      materialSpecifications: ['IS 1239 Part 2', 'Malleable Iron'],
      standards: ['IS 1239 Part 2'],
      keywords: ['GI socket', 'socket fittings', 'GI pipe fittings', 'galvanized socket', 'pipe socket'],
      relatedProductSlugs: ['gi-elbows', 'gi-couplings', 'gi-other-fittings']
    },
    {
      slug: 'gi-other-fittings',
      categoryIds: ['gi-fittings'],
      title: 'Other GI Pipe Fittings',
      shortDescription: 'Additional GI fittings including nipples, caps, plugs, and bushings for complete piping solutions.',
      fullDescription: 'We stock a comprehensive range of GI pipe fittings including hex nipples, pipe caps, head plugs, and reducing bushings to fulfill all plumbing and industrial piping requirements.',
      image: '/images/products/Other%20GI%20Pipe%20Fittings%201.webp',
      galleryImages: ['/images/products/Other%20GI%20Pipe%20Fittings%201.webp', '/images/products/Other%20GI%20Pipe%20Fittings%202.webp', '/images/products/Other%20GI%20Pipe%20Fittings%203.jpg'],
      technicalSpecifications: [
        { label: 'Products', value: 'Nipples, Caps, Plugs, Bushings' },
        { label: 'Sizes', value: '15 mm (1/2") to 80 mm (3")' },
        { label: 'Connection', value: 'Threaded (BSP/NPT)' },
        { label: 'Standard', value: 'IS 1239 Part 2' }
      ],
      sizesOrGrades: ['15 mm (1/2") to 80 mm (3")', 'Various configurations'],
      features: ['Full thread engagement', 'Hot dip galvanized', 'Corrosion resistant', 'Comprehensive range'],
      applications: ['Pipe closures', 'Thread extensions', 'Size transitions', 'Plumbing accessories'],
      materialSpecifications: ['IS 1239 Part 2', 'Malleable Iron'],
      standards: ['IS 1239 Part 2'],
      keywords: ['GI nipples', 'GI caps', 'GI plugs', 'GI bushings', 'GI fittings accessories'],
      relatedProductSlugs: ['gi-elbows', 'gi-unions', 'gi-tees', 'gi-couplings']
    }
  ],

  // Gallery Section (Scalable list)
  gallery: [
    { category: "products", image: "/images/gallery/products-1.webp", alt: "Stainless Steel Sheets & Plates Stack" },
    { category: "products", image: "/images/gallery/products-2.webp", alt: "Mild Steel Pipes Inventory" },
    { category: "warehouse", image: "/images/gallery/warehouse-1.webp", alt: "Sujal Enterprise Warehouse Racks" },
    { category: "warehouse", image: "/images/gallery/warehouse-2.webp", alt: "Inside Industrial Storage Yard" },
    { category: "inventory", image: "/images/gallery/inventory-1.webp", alt: "SS Coils & Sheets Stacked" },
    { category: "inventory", image: "/images/gallery/inventory-2.webp", alt: "GI Fittings Shelves" },
    { category: "deliveries", image: "/images/gallery/deliveries-1.webp", alt: "Truck Loading Dispatch" },
    { category: "deliveries", image: "/images/gallery/deliveries-2.webp", alt: "Packed Steel Products Ready for Shipping" },
    { category: "office", image: "/images/gallery/office-1.webp", alt: "Sujal Enterprise Sales Desk" },
    { category: "operations", image: "/images/gallery/operations-1.webp", alt: "Quality Inspection of SS Products" },
    { category: "operations", image: "/images/gallery/operations-2.webp", alt: "GI Fittings Quality Verification" }
  ],

  // Client Logos (Optional logo items)
  clients: [
    { name: "Gujarat Gas", image: "/images/clients/gujarat-gas.png" },
    { name: "GAIL", image: "/images/clients/gail.png" },
    { name: "L&T", image: "/images/clients/lnt.png" },
    { name: "Indian Oil", image: "/images/clients/indian-oil.png" },
    { name: "ONGC", image: "/images/clients/ongc.png" },
    { name: "Torrent Gas", image: "/images/clients/torrent-gas.png" }
  ],

  // =========================================================================
  // PRODUCT IMAGE MAP - Maps each product slug to its actual product images
  // from public/images/products/. The first image is used as the card thumbnail.
  // All images are used in the product detail page gallery.
  // =========================================================================
  productImageMap: {
    // Stainless Steel (SS)
    'ss-sheets': {
      image: '/images/products/Stainless%20Steel%20Sheets.jpg',
      galleryImages: [
        '/images/products/Stainless%20Steel%20Sheets.jpg',
        '/images/products/Stainless%20Steel%20Sheets%202.webp',
        '/images/products/Stainless%20Steel%20Sheets%203.jpeg'
      ]
    },
    'ss-plates': {
      image: '/images/products/Stainless%20Steel%20Plates.jpg',
      galleryImages: [
        '/images/products/Stainless%20Steel%20Plates.jpg',
        '/images/products/Stainless%20Steel%20Plates%202.jpg',
        '/images/products/Stainless%20Steel%20Plates%203.webp'
      ]
    },
    'ss-coils': {
      image: '/images/products/Stainless%20Steel%20Coils%201.webp',
      galleryImages: [
        '/images/products/Stainless%20Steel%20Coils%201.webp',
        '/images/products/Stainless%20Steel%20Coils%202.webp',
        '/images/products/Stainless%20Steel%20Coils%203.webp'
      ]
    },
    'ss-pipes': {
      image: '/images/products/Stainless%20Steel%20Pipes%201.jpg',
      galleryImages: [
        '/images/products/Stainless%20Steel%20Pipes%201.jpg',
        '/images/products/Stainless%20Steel%20Pipes%202.webp',
        '/images/products/Stainless%20Steel%20Pipes%203.webp'
      ]
    },
    'pipe-fittings': {
      image: '/images/products/Pipe%20Fittings%201.webp',
      galleryImages: [
        '/images/products/Pipe%20Fittings%201.webp',
        '/images/products/Pipe%20Fittings%202.png',
        '/images/products/Pipe%20Fittings%203.webp'
      ]
    },
    'flanges': {
      image: '/images/products/flanges%201.png',
      galleryImages: [
        '/images/products/flanges%201.png',
        '/images/products/Flanges%202.webp',
        '/images/products/Flanges%203.webp'
      ]
    },
    'round-bars': {
      image: '/images/products/Round%20Bars%201.jpg',
      galleryImages: [
        '/images/products/Round%20Bars%201.jpg',
        '/images/products/Round%20Bars%202.webp',
        '/images/products/Round%20Bars%203.webp'
      ]
    },
    'valves': {
      image: '/images/products/Valves%201.webp',
      galleryImages: [
        '/images/products/Valves%201.webp',
        '/images/products/Valves%202.png',
        '/images/products/Valves%203.webp'
      ]
    },
    // Mild Steel (MS)
    'ms-pipes': {
      image: '/images/products/MS%20Pipes%201.webp',
      galleryImages: [
        '/images/products/MS%20Pipes%201.webp',
        '/images/products/MS%20Pipes%202.webp',
        '/images/products/MS%20Pipes%203.webp'
      ]
    },
    'ms-plates': {
      image: '/images/products/Mild%20Steel%20Plates%201.webp',
      galleryImages: [
        '/images/products/Mild%20Steel%20Plates%201.webp',
        '/images/products/Mild%20Steel%20Plates%202.webp',
        '/images/products/Mild%20Steel%20Plates%203.webp'
      ]
    },
    'ms-sheets': {
      image: '/images/products/Mild%20Steel%20sheet%201.webp',
      galleryImages: [
        '/images/products/Mild%20Steel%20sheet%201.webp',
        '/images/products/Mild%20Steel%20sheet%202.webp',
        '/images/products/Mild%20Steel%20sheet%203.webp'
      ]
    },
    'ms-coils': {
      image: '/images/products/Mild%20Steel%20Coils%201.webp',
      galleryImages: [
        '/images/products/Mild%20Steel%20Coils%201.webp',
        '/images/products/Mild%20Steel%20Coils%202.webp',
        '/images/products/Mild%20Steel%20Coils%203.webp'
      ]
    },
    // GI Fittings
    'gi-elbows': {
      image: '/images/products/GI%20Elbows%201.webp',
      galleryImages: [
        '/images/products/GI%20Elbows%201.webp',
        '/images/products/GI%20Elbows%202.webp',
        '/images/products/GI%20Elbows%203.webp'
      ]
    },
    'gi-unions': {
      image: '/images/products/GI%20Unions%201.webp',
      galleryImages: [
        '/images/products/GI%20Unions%201.webp',
        '/images/products/GI%20Unions%202.webp',
        '/images/products/GI%20Unions%203.webp'
      ]
    },
    'gi-tees': {
      image: '/images/products/GI%20Tees%201.webp',
      galleryImages: [
        '/images/products/GI%20Tees%201.webp',
        '/images/products/GI%20Tees%202.webp',
        '/images/products/GI%20Tees%203.webp'
      ]
    },
    'gi-couplings': {
      image: '/images/products/GI%20Couplings%201.jpeg',
      galleryImages: [
        '/images/products/GI%20Couplings%201.jpeg',
        '/images/products/GI%20Couplings%202.webp',
        '/images/products/GI%20Couplings%203.webp'
      ]
    },
    'gi-socket-fittings': {
      image: '/images/products/GI%20Socket%20Fittings%201.webp',
      galleryImages: [
        '/images/products/GI%20Socket%20Fittings%201.webp',
        '/images/products/GI%20Socket%20Fittings%202.webp',
        '/images/products/GI%20Socket%20Fittings%203.webp'
      ]
    },
    'gi-other-fittings': {
      image: '/images/products/Other%20GI%20Pipe%20Fittings%201.webp',
      galleryImages: [
        '/images/products/Other%20GI%20Pipe%20Fittings%201.webp',
        '/images/products/Other%20GI%20Pipe%20Fittings%202.webp',
        '/images/products/Other%20GI%20Pipe%20Fittings%203.jpg'
      ]
    }
  }
};

/**
 * Resolves the correct product images for a given product object.
 * Uses the productImageMap if available, otherwise falls back to the
 * product's existing image/galleryImages fields.
 * 
 * @param {Object} product - A product detail object from config.productDetails
 * @returns {{ image: string, galleryImages: string[] }}
 */
export function resolveProductImages(product) {
  if (!product) {
    return { image: '', galleryImages: [] };
  }

  const imageMap = config.productImageMap || {};
  const slug = product.slug || '';

  // Check if we have a mapped entry for this slug
  if (imageMap[slug]) {
    return {
      image: imageMap[slug].image,
      galleryImages: imageMap[slug].galleryImages
    };
  }

  // Fallback: use the product's existing image/galleryImages, or empty
  return {
    image: product.image || '',
    galleryImages: (product.galleryImages && product.galleryImages.length > 0) ? product.galleryImages : (product.image ? [product.image] : [])
  };
}
