// =========================================================================
// CONTACT FORM ENDPOINT (Formspree)
// -------------------------------------------------------------------------
// Replace the placeholder below with your own Formspree form endpoint, e.g.:
//   export const FORM_ENDPOINT = 'https://formspree.io/f/yourformid';
// Until a real endpoint is set, the contact forms will show a "not connected"
// warning instead of pretending the message was sent.
// =========================================================================
export const FORM_ENDPOINT = 'https://formspree.io/f/xwvgdzzb';

export const config = {
  // =========================================================================
  // VERIFIED BUSINESS INFORMATION - Sujal Enterprise
  // =========================================================================
  business: {
    name: "Sujal Enterprise",
    legalName: "Sujal Enterprise",
    tagline: "",
    type: "Manufacturer, Supplier, Exporter and Stockist",
    logo: "/images/logo/sujal-enterprise%20updated%20logo.png",

    // Business category/description
    category: "MANUFACTURER, SUPPLIER & STOCKIST OF FLANGES, PIPES, ROUND BARS, SHEETS, PLATES, BUTTWELD & FORGED FITTINGS AND CHANNEL & ANGLE IN STAINLESS STEEL, MILD STEEL, ALLOY STEEL & IBR",
    description: "Sujal Enterprise is a trusted manufacturer, supplier and stockist of premium industrial steel products in Mumbai — Flanges, Pipes, Round Bars, Sheets, Plates, Buttweld Fittings, Forged Fittings and Channel & Angle in Stainless Steel, Mild Steel, Alloy Steel & IBR. ISO 9001, 45001 & PED certified.",

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
    phones: ["+91 8369167479"],
    whatsapp: "+918369167479",
    email: "sujalenterprise01@gmail.com",


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
      title: "Premium Quality",
      description: "Every product we supply — flanges, pipes, round bars, sheets, plates and fittings — undergoes strict mechanical and chemical testing to meet international standards (ASME, ASTM, IS).",
      icon: "fa-gem"
    },
    {
      title: "Certified Products",
      description: "ISO 9001, 45001 & PED certified organization. All products are backed by test certificates, mill test reports and full traceability for quality assurance.",
      icon: "fa-award"
    },
    {
      title: "Competitive Pricing",
      description: "We work directly with major manufacturers and keep low overheads to pass genuine cost savings onto our clients without compromising on quality.",
      icon: "fa-tags"
    },
    {
      title: "Fast Delivery",
      description: "With an extensive stockholding and strong logistics partners, we ensure rapid dispatch and on-time delivery across India to meet tight project deadlines.",
      icon: "fa-truck-fast"
    },
    {
      title: "Large Inventory",
      description: "Maintain a comprehensive ready-stock of sizes, grades and specifications across all product categories to fulfill urgent requirements instantly.",
      icon: "fa-warehouse"
    },
    {
      title: "Technical Support",
      description: "Our experienced team assists you with grade selection, size calculations and application guidance for engineering, fabrication and infrastructure projects.",
      icon: "fa-headset"
    }
  ],

  // -------------------------------------------------------------------------
  // SHARED LOGISTICS / PACKAGING & DELIVERY INFO
  // -------------------------------------------------------------------------
  // Reused on every product detail page under the "Packaging & Delivery"
  // section. Rendered as a numbered list (1-4) with bold labels.
  logisticsInfo: [
    { label: 'Payment Modes', value: 'LC (Letter of Credit), TT (Telegraphic Transfer or Wire Transfer), Cheque, and others.' },
    { label: 'Packaging', value: 'Products are packaged with proper care and safety to ensure they reach our clients in excellent condition. Packaging charges are extra.' },
    { label: 'Port of Dispatch', value: 'Mumbai Port or Kalamboli Port, Maharashtra, India.' },
    { label: 'Tax', value: '18% GST Applicable.' }
  ],

  // Products Section - Core Product Catalog
  products: [
    {
      id: "flanges",
      title: "Flanges",
      description: "Premium quality flanges in stainless steel, carbon steel, alloy steel, and duplex steel. Available in slip-on, weld neck, blind, socket weld, threaded, and lap joint types.",
      image: "/images/products/flanges%201.png",
      items: [
        { name: "Slip-On Flanges", spec: "ASME B16.5, Class 150 to 2500" },
        { name: "Weld Neck Flanges", spec: "ASME B16.5, Class 150 to 2500" },
        { name: "Blind Flanges", spec: "ASME B16.5, Class 150 to 2500" },
        { name: "Socket Weld Flanges", spec: "ASME B16.5, Class 150 to 2500" },
        { name: "Threaded Flanges", spec: "ASME B16.5, NPT/BSP Threads" },
        { name: "Lap Joint Flanges", spec: "ASME B16.5, Class 150 to 2500" },
        { name: "Orifice Flanges", spec: "ASME B16.36, Class 150 to 2500" },
        { name: "Ring Type Joint Flanges", spec: "ASME B16.5, RTJ Grooves" }
      ]
    },
    {
      id: "round-bar",
      title: "Round Bar",
      description: "High-quality round bars in stainless steel, carbon steel, alloy steel, and duplex steel grades. Precision straightened with bright, black, and polished finishes.",
      image: "/images/products/Round%20Bars%201.jpg",
      items: [
        { name: "Stainless Steel Round Bars", spec: "SS 304/304L, SS 316/316L, SS 321, SS 310" },
        { name: "Carbon Steel Round Bars", spec: "ASTM A105, AISI 1018, AISI 1045" },
        { name: "Alloy Steel Round Bars", spec: "ASTM A182 F11, F22, F91, AISI 4140, 4340" },
        { name: "Duplex Steel Round Bars", spec: "UNS S31803, S32205, S32750" },
        { name: "Bright Bars", spec: "Peeled, Polished, Centreless Ground" },
        { name: "Hexagonal Bars", spec: "Hot Rolled & Cold Drawn" },
        { name: "Square Bars", spec: "Hot Rolled & Cold Drawn" },
        { name: "Flat Bars", spec: "Hot Rolled & Cold Drawn" }
      ]
    },
    {
      id: "pipes",
      title: "Pipes",
      description: "Comprehensive range of seamless and welded pipes in stainless steel, carbon steel, alloy steel, and duplex steel. Suitable for high-pressure and high-temperature applications.",
      image: "/images/products/pipes-tubes.png",
      items: [
        { name: "Stainless Steel Pipes", spec: "ASTM A312, Seamless & Welded, Sch 10S to XXS" },
        { name: "Carbon Steel Pipes", spec: "ASTM A106 Gr. B, A53, API 5L" },
        { name: "Alloy Steel Pipes", spec: "ASTM A335 P5, P9, P11, P22, P91" },
        { name: "Duplex Steel Pipes", spec: "UNS S31803, S32205, S32750" },
        { name: "ERW Pipes", spec: "ASTM A53 Gr. B, IS 1239, IS 3589" },
        { name: "Galvanized Pipes", spec: "IS 1239, Hot Dip Galvanized" },
        { name: "LSAW Pipes", spec: "API 5L, Large Diameter" },
        { name: "SMLS Pipes", spec: "Seamless, Cold Drawn, Hot Finished" }
      ]
    },
    {
      id: "sheets",
      title: "Sheets",
      description: "Premium quality sheets in stainless steel, carbon steel, and alloy steel. Available in various finishes including 2B, BA, No.4 Brushed, and Mirror Polish.",
      image: "/images/products/Stainless%20Steel%20Sheets.jpg",
      items: [
        { name: "Stainless Steel Sheets", spec: "SS 304/304L, SS 316/316L, SS 321, SS 310" },
        { name: "Carbon Steel Sheets", spec: "IS 1079, ASTM A1011, HR & CR" },
        { name: "Alloy Steel Sheets", spec: "ASTM A387, Chrome Moly Grades" },
        { name: "Chequered Sheets", spec: "Stainless Steel & Carbon Steel" },
        { name: "Perforated Sheets", spec: "Custom Hole Patterns" },
        { name: "Shim Sheets", spec: "Precision Thickness Tolerances" },
        { name: "Galvanized Sheets", spec: "Hot Dip Galvanized, Various Gauges" },
        { name: "Cold Rolled Sheets", spec: "Tight Dimensional Tolerances" }
      ]
    },
    {
      id: "plates",
      title: "Plates",
      description: "Industrial-grade plates in stainless steel, carbon steel, and alloy steel. Suitable for pressure vessels, heat exchangers, structural components, and heavy fabrication.",
      image: "/images/products/Mild%20Steel%20Plates%201.webp",
      items: [
        { name: "Stainless Steel Plates", spec: "SS 304/304L, SS 316/316L, SS 321, SS 310" },
        { name: "Carbon Steel Plates", spec: "IS 2062, ASTM A36, ASTM A516 Gr. 70" },
        { name: "Alloy Steel Plates", spec: "ASTM A387 Gr. 11, 22, 91" },
        { name: "Boiler Quality Plates", spec: "ASTM A516 Gr. 60, 70" },
        { name: "Clad Plates", spec: "Stainless Steel Clad on Carbon Steel" },
        { name: "Diamond Plates", spec: "Floor Plate, Raised Pattern" },
        { name: "Ship Building Plates", spec: "ASTM A131, Grade A, B, AH36" },
        { name: "Thick Plates", spec: "Up to 200 mm Thickness" }
      ]
    },
    {
      id: "buttweld-fittings",
      title: "Buttweld Fittings",
      description: "Precision-engineered buttweld fittings manufactured to ASME B16.9 standards. Elbows, tees, reducers, caps, stub ends, bends, and crosses in multiple materials.",
      image: "/images/products/buttweld-fittings.png",
      items: [
        { name: "Elbows", spec: "90° & 45° Long/Short Radius, ASME B16.9" },
        { name: "Tees", spec: "Equal & Reducing, Straight & Reducing" },
        { name: "Reducers", spec: "Concentric & Eccentric, ASME B16.9" },
        { name: "Pipe Caps", spec: "Hemispherical & Elliptical" },
        { name: "Stub Ends", spec: "Lap Joint, ASME B16.9" },
        { name: "Bends", spec: "Custom Radius, ASME B16.9" },
        { name: "Crosses", spec: "Equal & Reducing" },
        { name: "Return Bends", spec: "180° Close & Open Pattern" }
      ]
    },
    {
      id: "forged-fittings",
      title: "Forged Fittings",
      description: "High-strength forged fittings manufactured to ASME B16.11 standards. Socket weld and threaded fittings in stainless steel, carbon steel, and alloy steel.",
      image: "/images/products/forged-fittings.png",
      items: [
        { name: "Socket Weld Elbows", spec: "90° & 45°, ASME B16.11" },
        { name: "Threaded Elbows", spec: "90° & 45°, NPT/BSP Threads" },
        { name: "Socket Weld Tees", spec: "Equal & Reducing, ASME B16.11" },
        { name: "Threaded Tees", spec: "Equal & Reducing, NPT/BSP" },
        { name: "Socket Weld Couplings", spec: "Full & Reducing, ASME B16.11" },
        { name: "Threaded Couplings", spec: "Full & Reducing, NPT/BSP" },
        { name: "Pipe Nipples", spec: "Threaded, Hex, Barrel, Close" },
        { name: "Forged Unions", spec: "Socket Weld & Threaded" }
      ]
    },
    {
      id: "channel-angle",
      title: "Channel & Angle",
      description: "Structural steel channels and angles in carbon steel and stainless steel. Used in construction, fabrication, infrastructure, and industrial applications.",
      image: "/images/products/channel-angle.jpg",
      items: [
        { name: "Mild Steel Channels", spec: "ISMC, ISJB, ISJC, ISMB" },
        { name: "Mild Steel Angles", spec: "ISA, Equal & Unequal Legs" },
        { name: "Stainless Steel Channels", spec: "SS 304/304L, SS 316/316L" },
        { name: "Stainless Steel Angles", spec: "SS 304/304L, SS 316/316L" },
        { name: "Slotted Channels", spec: "UNISTRUT Type, Various Sizes" },
        { name: "Heavy Duty Channels", spec: "ISMC 100 to ISMC 400" },
        { name: "Light Angles", spec: "ISA 25x25 to ISA 50x50" },
        { name: "Heavy Angles", spec: "ISA 75x75 to ISA 200x200" }
      ]
    }
  ],

  // Product Categories (for sidebar and filtering)
  categories: [
    { id: "flanges", title: "Flanges" },
    { id: "round-bar", title: "Round Bar" },
    { id: "pipes", title: "Pipes" },
    { id: "sheets", title: "Sheets" },
    { id: "plates", title: "Plates" },
    { id: "buttweld-fittings", title: "Buttweld Fittings" },
    { id: "forged-fittings", title: "Forged Fittings" },
    { id: "channel-angle", title: "Channel & Angle" }
  ],

  // Materials (for navigation, sidebar, and filtering)
  materials: [
    { id: "mild-steel", slug: "mild-steel", title: "Mild Steel" },
    { id: "stainless-steel", slug: "stainless-steel", title: "Stainless Steel" },
    { id: "alloy-steel", slug: "alloy-steel", title: "Alloy Steel" },
    { id: "ibr", slug: "ibr", title: "IBR" }
  ],

  // -------------------------------------------------------------------------
  // Product Details Dataset - Dynamic Product Details
  // -------------------------------------------------------------------------
  productDetails: [
    {
      slug: 'flanges',
      title: 'Flanges',
      metaTitle: 'Flanges Manufacturer India | SS, CS, Alloy Steel Flanges',
      metaDescription: 'Premium quality flanges in stainless steel, carbon steel, alloy steel, and duplex steel. ASME B16.5, Class 150 to 2500. Slip-on, weld neck, blind, socket weld, threaded, lap joint, orifice, RTJ.',
      keywords: ['flanges', 'stainless steel flanges', 'carbon steel flanges', 'alloy steel flanges', 'duplex flanges', 'slip-on flanges', 'weld neck flanges', 'blind flanges', 'ASME B16.5'],
      categoryIds: ['flanges'],
      shortDescription: 'Premium quality flanges available in slip-on, weld neck, blind, socket weld, threaded, lap joint, orifice, and ring type joint configurations.',
      fullDescription: 'Sujal Enterprise offers a comprehensive range of flanges manufactured to ASME B16.5 standards. Available in stainless steel (SS 304/304L, SS 316/316L, SS 321, SS 310), carbon steel (ASTM A105), alloy steel (ASTM A182 F11, F22, F91), and duplex steel (UNS S31803, S32205, S32750). Pressure classes from Class 150 to Class 2500 with various facing options including raised face, flat face, and ring type joint.',
      companyIntro: `<p>As a leading flange manufacturer, supplier, and exporter in India, Sujal Enterprise supplies high-quality flanges to industries including oil & gas, petrochemical, chemical processing, power generation, shipbuilding, and water treatment. Our flanges undergo rigorous mechanical and chemical testing to ensure compliance with international standards.</p><p>With over a decade of experience, we serve clients across India and export to GCC, Southeast Asia, Europe, Africa, and the Americas. Our extensive inventory ensures fast delivery for both standard and custom requirements.</p>`,
      overviewCards: [
        { icon: 'fa-industry', title: 'Industrial Grade', text: 'Manufactured to ASME B16.5, BS 4504, DIN, and EN standards for critical applications.' },
        { icon: 'fa-flask', title: 'Material Certified', text: '100% material traceability with mill test certificates and NABL-approved lab reports.' },
        { icon: 'fa-truck', title: 'Pan-India Delivery', text: 'Express dispatch from Mumbai warehouse to all major industrial hubs across India.' },
        { icon: 'fa-globe', title: 'Global Exports', text: 'Reliable export partner for Middle East, Africa, Europe, Southeast Asia & Americas.' }
      ],
      technicalSpecifications: {
        heading: 'Flanges Standard, Size & Specification',
        rows: [
          { label: 'Size', value: '½” (15 NB) to 48” (1200 NB).' },
          { label: 'Types', value: 'Weld Neck, Slip On, Blind, Socket Weld, RTJ, Threaded, Lap Joint, AWWA Flange, Spade, Spacer, Spectacle, Groove, Orifice & Tongue, etc.' },
          { label: 'Standards', value: 'ANSI B16.5 / B16.47 / B16.48 / AWWA / EN1092-1 / Custom Drawing' },
          { label: 'Dimension', value: 'ANSI B 16.5, BS 1560. BS 10, IS 6392, B-2.1 NPT, API, DIN, JIS. MSS SP 44' },
          { label: 'Material', value: 'ASTM A105, ASME A105 ASTM A266 GR.1, GR.2, GR.3, GR.4 ASTM A350 LF1, LF2 CL1/CL2, LF3 CL1/CL2 ASTM A694 F42, F46, F48, F50, F52, F56, F60, F65, F70' },
          { label: 'Class', value: '150#, 300#, 600#, 900#, 1500# & 2500#' },
          { label: 'Wall Thickness', value: 'SCH.10, 20, 30, 40, 80, 120, 160, STD, XS, XXS.' },
          { label: 'Form', value: 'Flange – SWRF' }
        ],
        grades: [
          { label: 'Stainless Steel', value: 'ASTM /ASME A/SA 182 - 304 , 304L , 304H, 309S ,309H , 310S, 310H , 316 , 316TI , 316H , 316 LN , 317 , 317L , 321 , 321H , 347 , 347 H , 904L , SMO 254.' },
          { label: 'Duplex Steel', value: 'ASTM/ASME A/SA 182 - F44, F51, F53, F60, F61.' },
          { label: 'Carbon Steel', value: 'ASTM A105N, A350 LF2/LF3, A694 F42/F46/F52/F60/F65/F70, A516 GR.70.' },
          { label: 'Alloy Steel', value: 'ASTM /ASME A/SA 182, A387 - F5,F9,F11,F12,F22,F91.' },
          { label: 'Nickel Alloys', value: 'ASTM SB 366 – UNS N04400, N08020, N06625, N07718, N08800, N08825, N06600, N06601, N06022, UNS N02200, UNS 2201.' },
          { label: 'Hastelloy', value: 'ASTM B564 Hastelloy C-22, Hastelloy C-276, Hastelloy C-2000, Hastelloy C-4, Hastelloy X, Hastelloy B, Hastelloy N, Hastelloy G.' }
        ]
      },
      subProducts: [
        { name: 'Weld Neck Flange', image: '/images/sub-products/flanges/weld-neck-flange.jpg', alt: 'Weld Neck Flange' },
        { name: 'Slip On Flange', image: '/images/sub-products/flanges/slip-on-flange.jpg', alt: 'Slip On Flange' },
        { name: 'Blind Flange', image: '/images/sub-products/flanges/blind-flange.jpg', alt: 'Blind Flange' },
        { name: 'Lap Joint Flange', image: '/images/sub-products/flanges/lap-joint-flange.jpg', alt: 'Lap Joint Flange' },
        { name: 'Pressed Flange', image: '/images/sub-products/flanges/pressed-flange.jpg', alt: 'Pressed Flange' },
        { name: 'Orifice Flange', image: '/images/sub-products/flanges/orifice-flange.jpg', alt: 'Orifice Flange' },
        { name: 'Reducing Flange', image: '/images/sub-products/flanges/reducing-flange.jpg', alt: 'Reducing Flange' },
        { name: 'Spade Flange', image: '/images/sub-products/flanges/spade-flange.jpg', alt: 'Spade Flange' },
        { name: 'Spectacle Flange', image: '/images/sub-products/flanges/spectacle-flange.jpg', alt: 'Spectacle Flange' }
      ],
      applications: [
        { icon: 'fa-oil-can', name: 'Oil & Gas', description: 'Pipeline connections, refineries, offshore platforms' },
        { icon: 'fa-industry', name: 'Petrochemical', description: 'Pressure vessels, heat exchangers, reactor nozzles' },
        { icon: 'fa-bolt', name: 'Power Generation', description: 'Steam turbines, boiler headers, cooling systems' },
        { icon: 'fa-ship', name: 'Shipbuilding', description: 'Marine piping systems, ballast lines, fuel systems' },
        { icon: 'fa-water', name: 'Water Treatment', description: 'Desalination plants, water distribution, wastewater' },
        { icon: 'fa-fire', name: 'Chemical Processing', description: 'Corrosive media handling, acid lines, solvent transfer' }
      ],
      deliveryInfo: [
        { icon: 'fa-box', title: 'Secure Packaging', text: 'Plywood crates, bubble wrap, and steel banding for safe transit of all flange sizes.' },
        { icon: 'fa-tag', title: 'Grade Tagging', text: 'Every flange tagged with grade, size, class, heat number, and MTC reference.' },
        { icon: 'fa-ship', title: 'Export Ready', text: 'Fumigated wooden crates for international shipments with proper documentation.' },
        { icon: 'fa-clock', title: 'Fast Dispatch', text: 'Standard sizes dispatched within 24-48 hours. Custom orders within 2-3 weeks.' }
      ],
      cities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Pune', 'Surat', 'Vadodara', 'Jamnagar', 'Indore', 'Jaipur', 'Ludhiana', 'Coimbatore', 'Visakhapatnam', 'Bhopal', 'Nagpur', 'Thane', 'Navsari'],
      countries: [
        { name: 'UAE', highlight: true },
        { name: 'Saudi Arabia', highlight: true },
        { name: 'Kuwait', highlight: false },
        { name: 'Qatar', highlight: true },
        { name: 'Oman', highlight: false },
        { name: 'Bahrain', highlight: false },
        { name: 'UK', highlight: true },
        { name: 'Germany', highlight: false },
        { name: 'Netherlands', highlight: false },
        { name: 'USA', highlight: true },
        { name: 'Canada', highlight: false },
        { name: 'Singapore', highlight: true },
        { name: 'Malaysia', highlight: false },
        { name: 'Indonesia', highlight: false },
        { name: 'Thailand', highlight: false },
        { name: 'Vietnam', highlight: false },
        { name: 'South Africa', highlight: true },
        { name: 'Nigeria', highlight: false },
        { name: 'Egypt', highlight: false },
        { name: 'Kenya', highlight: false }
      ],
      faqs: [
        { question: 'What materials are available for flanges?', answer: 'We offer flanges in stainless steel (SS 304/304L, 316/316L, 321, 310), carbon steel (ASTM A105), alloy steel (A182 F11, F22, F91), and duplex steel (UNS S31803, S32205, S32750).' },
        { question: 'What is the maximum size of flanges you supply?', answer: 'We supply flanges from 1/2" (15 NB) up to 60" (1500 NB) in various pressure classes and facing types.' },
        { question: 'Do you provide material test certificates?', answer: 'Yes, we provide 100% material traceability with mill test certificates (MTC) as per EN 10204 3.1/3.2. Third-party inspection is also available upon request.' },
        { question: 'What is the typical lead time for flange orders?', answer: 'Standard sizes are dispatched within 24-48 hours. Custom sizes and exotic materials typically require 2-4 weeks depending on quantity.' },
        { question: 'Can you supply flanges with NACE MR0175 compliance?', answer: 'Yes, we can supply flanges with NACE MR0175/MR0103 compliance for sour gas service applications upon request.' }
      ],
      relatedProductSlugs: ['buttweld-fittings', 'forged-fittings', 'pipes'],
      standards: ['ASME B16.5', 'ASME B16.47', 'DIN', 'EN 1092']
    },
    {
      slug: 'round-bar',
      title: 'Round Bar',
      metaTitle: 'Round Bar Manufacturer India | SS, CS, Alloy Steel Round Bars',
      metaDescription: 'High-quality round bars in stainless steel, carbon steel, alloy steel, and duplex steel. Bright, black, polished, hexagonal, square, and flat bars. Precision straightened.',
      keywords: ['round bar', 'stainless steel round bar', 'carbon steel round bar', 'alloy steel round bar', 'bright bar', 'hexagonal bar', 'square bar'],
      categoryIds: ['round-bar'],
      shortDescription: 'High-quality round bars in stainless steel, carbon steel, alloy steel, and duplex steel with bright, black, and polished finishes.',
      fullDescription: 'Sujal Enterprise stocks an extensive range of round bars in various grades and sizes. Our round bars are precision-straightened and available in bright (peeled, polished, centreless ground), black (hot rolled), and cold drawn finishes. Suitable for shafts, valves, fittings, machining, and structural applications across industries.',
      companyIntro: `<p>Sujal Enterprise is a trusted supplier of round bars to the valve, fitting, automotive, and general engineering industries. Our round bars are sourced from reputed mills with complete material traceability and are available in custom lengths and tolerances.</p><p>We cater to both small-scale job shops and large OEMs across India and international markets with just-in-time delivery schedules and competitive pricing.</p>`,
      overviewCards: [
        { icon: 'fa-ruler', title: 'Precision Tolerances', text: 'H9, H8, and custom tolerances available for CNC machining and critical applications.' },
        { icon: 'fa-flask', title: 'Lab Tested', text: 'Chemical analysis, mechanical testing, and PMI verification on every batch.' },
        { icon: 'fa-cubes', title: 'Extensive Inventory', text: 'Over 500 tons in stock across 8 material grades and all standard sizes.' },
        { icon: 'fa-tools', title: 'Custom Finishes', text: 'Bright, black, peeled, polished, centreless ground, and cold drawn finishes.' }
      ],
      technicalSpecifications: {
        heading: 'Round Bar Standard, Size & Specification',
        rows: [
          { label: 'Size', value: '10 mm to 125 mm' },
          { label: 'Type', value: 'Round & Square, Hex.' }
        ],
        grades: [
          { label: 'Stainless Steel', value: 'ASTM / ASME SA 182 F 304 , 304L , 304H, 309H, 310H , 316 , 316H , 316L , 316 LN , 317 , 317L , 321 , 321H , 347 , 347 H ASTM / ASME A105 / ASTM / ASME A 350 LF 2 .' },
          { label: 'Carbon Steel', value: 'A36, 1045, 1018, 4140, 1095, 5160, A992, A500, A515, A516, A53, A106, A2, D2, SA-210, SA-192, A513, A105, 1075' },
          { label: 'Alloy Steel', value: 'AISI 4130, AISI 4140, AISI 4340, AISI 8620, AISI 52100, AISI 6150, AISI 4145, ASTM A387, ASTM A514, ASTM A572, ASTM A588, ASTM A193, ASTM A519, SAE 8620, SAE 9310, SAE 6150' },
          { label: 'High Nickel Alloys Steel', value: 'ASTM / ASME SB 564 UNS 2200 (Nickel 200), ASTM / ASME SB 564 UNS 4400 (Monel 400), ASTM / ASME SB 564 UNS 8825 (Inconel 825), ASTM / ASME SB 564 UNS 6600 (Inconel 600), ASTM / ASME SB 564 UNS 6601 (Inconel 601), ASTM / ASME SB 564 UNS 6625 (Inconel 625), ASTM / ASME SB 564 UNS 10276 (Hastelloy C-276), ASTM / ASME SB 160 UNS 2201 (Nickel 201), ASTM / ASME SB 472 UNS 8020 (Alloy 20 / 20 CB 3)' },
          { label: 'Non Ferrous Metal', value: 'A1000 Series, 2000 Series, 3000 Series, 5000 Series, C10100, C11000, C26000, 260 Brass, 360 Brass, 630 Bronze, C51000, Monel 400, AZ31, Zirconium 702' },
          { label: 'Duplex Steel', value: 'ASTM / ASME SA 182 F 44 , F 45 , F51 , F 53 , F 55 , F 60 , F 61.' },
          { label: 'Alloy Steel (Chrome Moly)', value: 'ASTM / ASME A 182 GR F 5, F 9 , F 11 , F 12 , F 22 , F 91.' }
        ]
      },
      subProducts: [
        { name: 'Square Bar', image: '/images/sub-products/round-bars/square-bar.jpg', alt: 'Square Bar' },
        { name: 'Rectangular Bar', image: '/images/sub-products/round-bars/rectangular-bar.jpg', alt: 'Rectangular Bar' },
        { name: 'Hex Bar', image: '/images/sub-products/round-bars/hex-bar.jpg', alt: 'Hex Bar' },
        { name: 'Forged Bar', image: '/images/sub-products/round-bars/forged-bar.jpg', alt: 'Forged Bar' },
        { name: 'Bright Bar', image: '/images/sub-products/round-bars/bright-bar.jpg', alt: 'Bright Bar' },
        { name: 'Polish Bar', image: '/images/sub-products/round-bars/polish-bar.jpg', alt: 'Polish Bar' }
      ],
      applications: [
        { icon: 'fa-cogs', name: 'Valve Manufacturing', description: 'Valve stems, balls, seats, and trim components' },
        { icon: 'fa-oil-can', name: 'Oil & Gas', description: 'Flanges, fittings, pipeline components, wellhead equipment' },
        { icon: 'fa-car', name: 'Automotive', description: 'Axles, shafts, gears, fasteners, suspension components' },
        { icon: 'fa-industry', name: 'General Engineering', description: 'Machinery shafts, spindles, rollers, bushings, pins' },
        { icon: 'fa-tools', name: 'Tool & Die', description: 'Mould bases, ejector pins, guide pillars, dowel pins' },
        { icon: 'fa-ship', name: 'Defence & Aerospace', description: 'Actuator components, landing gear parts, ordnance' }
      ],
      deliveryInfo: [
        { icon: 'fa-box', title: 'Bundle Packaging', text: 'Steel hexagon bundles with rust protection and grade tags for easy identification.' },
        { icon: 'fa-qrcode', title: 'Heat Code Traceability', text: 'Each bar stamped with heat code for full material traceability to mill source.' },
        { icon: 'fa-ship', title: 'Export Documentation', text: 'Complete export paperwork including COO, B/L, packing list, and MTC.' },
        { icon: 'fa-clock', title: 'Quick Turnaround', text: 'Standard sizes dispatched within 24 hours. Cut-to-length within 3-5 days.' }
      ],
      cities: ['Mumbai', 'Pune', 'Ahmedabad', 'Vadodara', 'Rajkot', 'Jamnagar', 'Delhi', 'Faridabad', 'Ludhiana', 'Jalandhar', 'Chennai', 'Coimbatore', 'Bangalore', 'Hyderabad', 'Kolkata', 'Indore', 'Jaipur', 'Surat', 'Bhavnagar', 'Nasik'],
      countries: [
        { name: 'UAE', highlight: true },
        { name: 'Saudi Arabia', highlight: true },
        { name: 'Kuwait', highlight: false },
        { name: 'Qatar', highlight: false },
        { name: 'Oman', highlight: false },
        { name: 'UK', highlight: true },
        { name: 'Germany', highlight: true },
        { name: 'Italy', highlight: false },
        { name: 'USA', highlight: true },
        { name: 'Canada', highlight: false },
        { name: 'Singapore', highlight: true },
        { name: 'Malaysia', highlight: false },
        { name: 'Thailand', highlight: false },
        { name: 'Vietnam', highlight: false },
        { name: 'South Korea', highlight: false },
        { name: 'South Africa', highlight: true },
        { name: 'Nigeria', highlight: false },
        { name: 'Egypt', highlight: false },
        { name: 'Kenya', highlight: false },
        { name: 'Bangladesh', highlight: false }
      ],
      faqs: [
        { question: 'What grades of stainless steel round bars do you supply?', answer: 'We supply SS 304/304L, SS 316/316L, SS 321, SS 310, SS 347, Duplex 2205 (UNS S31803), and Super Duplex 2507 (UNS S32750) round bars.' },
        { question: 'What is the difference between bright bar and black bar?', answer: 'Bright bars are cold drawn or peeled and polished to precise tolerances with a smooth finish. Black bars are hot rolled with a mill scale surface and wider tolerances, typically used for general engineering.' },
        { question: 'Do you offer cut-to-length round bars?', answer: 'Yes, we offer cut-to-length services as per customer requirements. Custom lengths can be supplied with saw-cut or sheared ends.' },
        { question: 'What certifications do you provide with round bars?', answer: 'We provide mill test certificates (MTC) as per EN 10204 3.1, heat treatment charts (if applicable), PMI test reports, and NABL-approved third-party inspection reports upon request.' },
        { question: 'Can you supply round bars with special surface finishes?', answer: 'Yes, we offer bright (peeled & polished), centreless ground, cold drawn, turned, and black finishes to meet specific application requirements.' }
      ],
      relatedProductSlugs: ['flanges', 'pipes', 'sheets'],
      standards: ['ASTM A276', 'ASTM A479', 'BS 970', 'EN 10088']
    },
    {
      slug: 'pipes',
      title: 'Pipes',
      metaTitle: 'Pipes Manufacturer India | SS, CS, Alloy Steel Seamless & Welded Pipes',
      metaDescription: 'Comprehensive range of seamless and welded pipes. Stainless steel, carbon steel, alloy steel, duplex steel. ASTM A312, A106, A335, API 5L. Sch 10S to XXS.',
      keywords: ['pipes', 'seamless pipes', 'welded pipes', 'stainless steel pipes', 'carbon steel pipes', 'alloy steel pipes', 'ERW pipes', 'LSAW pipes', 'API 5L'],
      categoryIds: ['pipes'],
      shortDescription: 'Comprehensive range of seamless and welded pipes in stainless steel, carbon steel, alloy steel, and duplex steel for high-pressure applications.',
      fullDescription: 'Sujal Enterprise supplies a complete range of seamless and welded pipes manufactured to international standards. Our inventory covers stainless steel (ASTM A312), carbon steel (ASTM A106 Gr. B, A53, API 5L), alloy steel (ASTM A335 P5/P9/P11/P22/P91), and duplex steel (UNS S31803/S32205/S32750). Suitable for high-pressure, high-temperature, and corrosive service environments.',
      companyIntro: `<p>As a premier pipe supplier in India, Sujal Enterprise serves the oil & gas, petrochemical, power generation, and infrastructure sectors. Our pipe inventory spans from 1/4" to 48" in various schedules and wall thicknesses. We maintain strong relationships with leading mills to ensure consistent quality and competitive pricing for both domestic and export markets.</p>`,
      overviewCards: [
        { icon: 'fa-fire', title: 'High Temp Service', text: 'Alloy steel pipes for high-temperature applications up to 600°C.' },
        { icon: 'fa-shield-alt', title: 'Corrosion Resistant', text: 'Stainless steel and duplex grades for corrosive and acidic environments.' },
        { icon: 'fa-tachometer-alt', title: 'High Pressure', text: 'Seamless pipes rated for extreme pressure applications up to 5000 PSI.' },
        { icon: 'fa-truck', title: 'Express Logistics', text: 'Pan-India delivery network with dedicated transport for pipe shipments.' }
      ],
      technicalSpecifications: {
        heading: 'Pipes Standard, Size & Specification',
        rows: [
          { label: 'Size', value: '4 to 219 mm' },
          { label: 'Pipe Types', value: 'SS 310 / TP 310 Stainless Steel Pipe / Stainless Steel 310S Pipe / TP 310S Stainless Steel Pipes' },
          { label: 'Type', value: 'Seamless / ERW / Welded / Fabricated' },
          { label: 'Dimensions', value: 'ASTM, ASME, and API' },
          { label: 'Wall Thickness', value: '0.5 to 20 mm' },
          { label: 'Length', value: 'Within 13,500 mm' },
          { label: 'Length Options', value: 'Single Random, Double Random, & Cut Length' },
          { label: 'Form', value: 'Round, Hydraulic, etc.' },
          { label: 'Specialized In', value: 'Large Diameter Size' }
        ]
      },
      subProducts: [
        { name: 'Inconel Pipe', image: '/images/sub-products/pipes/inconel-pipe.jpg', alt: 'Inconel Pipe' },
        { name: 'Hastelloy Pipe', image: '/images/sub-products/pipes/hastelloy-pipe.jpg', alt: 'Hastelloy Pipe' },
        { name: 'SS Pipe', image: '/images/sub-products/pipes/ss-pipe.jpg', alt: 'SS Pipe' },
        { name: 'Titanium Pipe', image: '/images/sub-products/pipes/titanium-pipe.jpg', alt: 'Titanium Pipe' },
        { name: 'Duplex Pipe', image: '/images/sub-products/pipes/duplex-pipe.jpg', alt: 'Duplex Pipe' },
        { name: 'Seamless Pipe', image: '/images/sub-products/pipes/seamless-pipe.jpg', alt: 'Seamless Pipe' }
      ],
      applications: [
        { icon: 'fa-oil-can', name: 'Oil & Gas', description: 'Upstream, midstream, and downstream pipeline systems' },
        { icon: 'fa-industry', name: 'Petrochemical', description: 'Process piping, reactor lines, heat exchanger tubing' },
        { icon: 'fa-bolt', name: 'Power Plants', description: 'Boiler tubes, steam lines, superheater tubes, condenser piping' },
        { icon: 'fa-building', name: 'Construction', description: 'Structural piping, plumbing, HVAC, fire fighting systems' },
        { icon: 'fa-tint', name: 'Water & Wastewater', description: 'Water distribution, desalination, sewage treatment plants' },
        { icon: 'fa-ship', name: 'Offshore & Marine', description: 'Subsea pipelines, risers, platform piping, ballast systems' }
      ],
      deliveryInfo: [
        { icon: 'fa-truck-loading', title: 'Specialized Transport', text: 'Dedicated pipe trailers and flatbed trucks for safe delivery of all lengths.' },
        { icon: 'fa-boxes', title: 'Systematic Storage', text: 'Racked storage with clear grade and size segregation for quick order picking.' },
        { icon: 'fa-file-alt', title: 'Full Documentation', text: 'MTC, NDE reports, hydro test certificates, and heat treatment charts included.' },
        { icon: 'fa-clock', title: 'Rapid Dispatch', text: 'Stock items dispatched within 24 hours. Mill orders shipped directly to site.' }
      ],
      cities: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad', 'Surat', 'Vadodara', 'Jamnagar', 'Indore', 'Jaipur', 'Ludhiana', 'Coimbatore', 'Visakhapatnam', 'Bhopal', 'Nagpur', 'Thane', 'Rajkot'],
      countries: [
        { name: 'UAE', highlight: true },
        { name: 'Saudi Arabia', highlight: true },
        { name: 'Kuwait', highlight: false },
        { name: 'Qatar', highlight: true },
        { name: 'Oman', highlight: false },
        { name: 'Bahrain', highlight: false },
        { name: 'UK', highlight: true },
        { name: 'Germany', highlight: true },
        { name: 'Netherlands', highlight: false },
        { name: 'USA', highlight: true },
        { name: 'Singapore', highlight: true },
        { name: 'Malaysia', highlight: false },
        { name: 'Indonesia', highlight: true },
        { name: 'Thailand', highlight: false },
        { name: 'Vietnam', highlight: false },
        { name: 'South Africa', highlight: true },
        { name: 'Nigeria', highlight: true },
        { name: 'Egypt', highlight: false },
        { name: 'Tanzania', highlight: false },
        { name: 'Bangladesh', highlight: false }
      ],
      faqs: [
        { question: 'What is the difference between seamless and welded pipes?', answer: 'Seamless pipes are manufactured from solid billets with no welded joint, offering higher pressure ratings. Welded pipes are made from steel coils welded longitudinally or spirally, offering cost advantages for larger diameters.' },
        { question: 'What schedules of pipes do you stock?', answer: 'We stock Sch 5, Sch 10S, Sch 40, Sch 80, Sch 160, and XXS in most materials. Special schedules can be sourced on request.' },
        { question: 'Can you supply pipes with custom bevel ends?', answer: 'Yes, we can supply pipes with standard 30° bevel ends, compound bevels, or J-preparations as per welding procedure specifications.' },
        { question: 'Do you provide third-party inspection services?', answer: 'Yes, we coordinate with leading third-party inspection agencies such as DNV, Lloyds, BV, SGS, and TUV for client-requested inspections.' },
        { question: 'What is the maximum length of pipes you can supply?', answer: 'Seamless pipes up to 12 MTR single length and welded pipes up to 18 MTR. Longer lengths can be supplied with site welding.' }
      ],
      relatedProductSlugs: ['buttweld-fittings', 'flanges', 'forged-fittings'],
      standards: ['ASTM A312', 'ASTM A106', 'ASTM A335', 'API 5L', 'IS 1239']
    },
    {
      slug: 'sheets',
      title: 'Sheets',
      metaTitle: 'Sheets Manufacturer India | SS, CS, Alloy Steel Sheets & Coils',
      metaDescription: 'Premium sheets in stainless steel, carbon steel, and alloy steel. 2B, BA, No.4 Brushed, Mirror finishes. Custom sizes and gauges.',
      keywords: ['sheets', 'stainless steel sheets', 'carbon steel sheets', 'alloy steel sheets', 'chequered sheets', 'perforated sheets', 'cold rolled sheets'],
      categoryIds: ['sheets'],
      shortDescription: 'Premium quality sheets in stainless steel, carbon steel, and alloy steel with 2B, BA, No.4 Brushed, and Mirror Polish finishes.',
      fullDescription: 'Sujal Enterprise offers high-quality sheets in stainless steel, carbon steel, and alloy steel grades. Available in various finishes including 2B (cold rolled), BA (bright annealed), No.4 Brushed, Mirror Polish, and custom surface textures. Suitable for architectural, industrial, food processing, pharmaceutical, and chemical applications.',
      companyIntro: `<p>Sujal Enterprise is a reliable sheet supplier catering to industries requiring precision flat products. Our sheets are sourced from ISO-certified mills and are available in custom sizes, thicknesses, and surface finishes. We serve clients in architecture, kitchen equipment, chemical storage, pharmaceutical, and automotive sectors.</p>`,
      overviewCards: [
        { icon: 'fa-ruler-combined', title: 'Precision Cutting', text: 'Custom cut-to-size sheets with sheared, laser, or plasma cut edges.' },
        { icon: 'fa-palette', title: 'Multiple Finishes', text: '2B, BA, No.4 Brushed, Mirror, Hairline, and embossed surface finishes.' },
        { icon: 'fa-shield-alt', title: 'Protective Film', text: 'All sheets supplied with adhesive protective film for surface protection.' },
        { icon: 'fa-truck', title: 'Just-in-Time Delivery', text: 'Express delivery from our Mumbai warehouse to any location in India.' }
      ],
      technicalSpecifications: {
        heading: 'Sheets Standard, Size & Specification',
        rows: [
          { label: 'Types of Materials', value: 'Stainless Steel, Aluminium, Nickel Alloy, Monel, Incoloy, Titanium' },
          { label: 'Thickness', value: '1mm-200mm' },
          { label: 'Width', value: '1000mm, 1219mm, 1500mm, 1800mm, 2000mm, 2500mm, 3000mm, 3500mm, etc' },
          { label: 'Standards', value: 'ASTM A240, JIS4304-2005, ASTM A167, EN10088-2-2005, GB/T3280-2007, etc' },
          { label: 'Length', value: '2000mm, 2440mm, 3000mm, 5800mm, 6000mm, etc' },
          { label: 'Class', value: '150#, 300#, 600#, 900#, 1500#, 2500#, PN6, PN10, PN16, PN25, PN40, PN64 etc.' }
        ],
        grades: [
          { label: 'Stainless Steel', value: 'ASTM / ASME 201, 202, 301, 304, 304L, 310, 310S, 316L, 316TI, 317, 317L, 321, 347, 409, 409M, 409L, 410, 410S, 420, 430, 431, 441, 444, 446, 17.4PH, 904L' },
          { label: 'Nickel Alloy', value: 'ASTM / ASME SB162 UNS N02200 ( NICKEL 200 ) / UNS N02201 (NICKEL 201 )' },
          { label: 'Aluminium', value: 'ASTM A387 / ASME SA387 GR F5, F9, F11, F12, F22, F91.' },
          { label: 'Titanium', value: 'Gr1, Gr2, Gr3, Gr4, Gr5, Gr7, Gr11, Gr12, Gr23' }
        ]
      },
      subProducts: [
        { name: 'SS Sheet', image: '/images/sub-products/sheets/ss-sheet.jpg', alt: 'SS Sheet' },
        { name: 'Titanium Sheet', image: '/images/sub-products/sheets/titanium-sheet.jpg', alt: 'Titanium Sheet' },
        { name: 'Aluminium Sheet', image: '/images/sub-products/sheets/aluminium-sheet.jpg', alt: 'Aluminium Sheet' }
      ],
      applications: [
        { icon: 'fa-building', name: 'Architectural', description: 'Cladding, roofing, façades, elevator panels, handrails, decorative elements' },
        { icon: 'fa-utensils', name: 'Food Processing', description: 'Kitchen equipment, storage tanks, work tables, conveyors, silos' },
        { icon: 'fa-flask', name: 'Chemical Storage', description: 'Tank lining, chemical storage vessels, ducting, piping enclosures' },
        { icon: 'fa-capsules', name: 'Pharmaceutical', description: 'Cleanroom panels, equipment cladding, lab benches, storage cabinets' },
        { icon: 'fa-car', name: 'Automotive', description: 'Body panels, exhaust shields, trim components, heat shields' },
        { icon: 'fa-industry', name: 'General Fabrication', description: 'Industrial cabinets, enclosures, hoppers, chutes, guards' }
      ],
      deliveryInfo: [
        { icon: 'fa-box', title: 'Crate Packing', text: 'Wooden crates with foam interlayers to prevent surface scratches during transit.' },
        { icon: 'fa-film', title: 'Protective Film', text: 'All finished sheets supplied with removable PE protective film on both sides.' },
        { icon: 'fa-ship', title: 'Export Grade Packing', text: 'Fumigated crates with waterproof lining for international sea shipments.' },
        { icon: 'fa-clock', title: 'Fast Processing', text: 'Cut-to-size orders processed within 48 hours. Stock sheets dispatched same day.' }
      ],
      cities: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Pune', 'Ahmedabad', 'Surat', 'Vadodara', 'Indore', 'Jaipur', 'Ludhiana', 'Coimbatore', 'Visakhapatnam', 'Bhopal', 'Nagpur', 'Thane', 'Faridabad', 'Ghaziabad'],
      countries: [
        { name: 'UAE', highlight: true },
        { name: 'Saudi Arabia', highlight: true },
        { name: 'Kuwait', highlight: false },
        { name: 'Qatar', highlight: false },
        { name: 'Oman', highlight: false },
        { name: 'UK', highlight: true },
        { name: 'France', highlight: false },
        { name: 'Germany', highlight: true },
        { name: 'USA', highlight: true },
        { name: 'Canada', highlight: false },
        { name: 'Singapore', highlight: true },
        { name: 'Malaysia', highlight: false },
        { name: 'Thailand', highlight: false },
        { name: 'Vietnam', highlight: false },
        { name: 'Philippines', highlight: false },
        { name: 'South Africa', highlight: true },
        { name: 'Nigeria', highlight: false },
        { name: 'Kenya', highlight: false },
        { name: 'Sri Lanka', highlight: false },
        { name: 'Nepal', highlight: false }
      ],
      faqs: [
        { question: 'What surface finishes are available for stainless steel sheets?', answer: 'We offer 2B (cold rolled), BA (bright annealed), No.4 Brushed, Mirror (8K), Hairline, SATIN, and embossed finishes.' },
        { question: 'Do you supply sheets with protective film?', answer: 'Yes, all our finished sheets are supplied with a peelable PE protective film on both sides to prevent surface damage during handling and fabrication.' },
        { question: 'What is the maximum width of sheets you can supply?', answer: 'We can supply sheets up to 2500 mm in width. Standard widths are 1000 mm, 1250 mm, 1500 mm, and 2000 mm.' },
        { question: 'Can you provide custom cut-to-size sheets?', answer: 'Yes, we offer custom cutting services including shearing, laser cutting, and plasma cutting to your exact dimensions with tight tolerances.' },
        { question: 'What stainless steel grades are most commonly stocked?', answer: 'Our most stocked grades are SS 304/304L, SS 316/316L, SS 430, and SS 310. We also stock SS 321 and duplex grades on demand.' }
      ],
      relatedProductSlugs: ['plates', 'pipes', 'channel-angle'],
      standards: ['ASTM A240', 'EN 10088', 'IS 6911', 'DIN 17441']
    },
    {
      slug: 'plates',
      title: 'Plates',
      metaTitle: 'Plates Manufacturer India | SS, CS, Alloy Steel Industrial Plates',
      metaDescription: 'Industrial-grade plates for pressure vessels, heat exchangers, structural components. Stainless steel, carbon steel, alloy steel. IS 2062, ASTM A516.',
      keywords: ['plates', 'stainless steel plates', 'carbon steel plates', 'alloy steel plates', 'boiler quality plates', 'clad plates', 'diamond plates', 'ship building plates'],
      categoryIds: ['plates'],
      shortDescription: 'Industrial-grade plates in stainless steel, carbon steel, and alloy steel for pressure vessels, heat exchangers, and heavy fabrication.',
      fullDescription: 'Sujal Enterprise supplies industrial-grade plates in stainless steel, carbon steel, and alloy steel for critical applications including pressure vessels, heat exchangers, structural components, and heavy fabrication. Available in standard and custom thicknesses with NABL-approved testing and full material traceability.',
      companyIntro: `<p>Sujal Enterprise is a trusted plate supplier for fabricators, EPC contractors, and process industries. Our plate inventory covers boiler quality, ship building, structural, clad, and specialty plates. We maintain rigorous quality control with mechanical and chemical testing on each batch to ensure compliance with project specifications.</p>`,
      overviewCards: [
        { icon: 'fa-fire', title: 'Boiler Quality', text: 'ASTM A516 Gr. 60/70 plates for pressure vessel and boiler applications.' },
        { icon: 'fa-ship', title: 'Ship Building', text: 'ASTM A131 Grade A/B/AH36 plates certified by classification societies.' },
        { icon: 'fa-layer-group', title: 'Clad Plates', text: 'SS clad on carbon steel for corrosion resistance with structural strength.' },
        { icon: 'fa-weight-hanging', title: 'Heavy Thickness', text: 'Plates up to 200 mm thickness for heavy structural and pressure applications.' }
      ],
      technicalSpecifications: {
        heading: 'Plates Standard, Size & Specification',
        rows: [
          { label: 'Type of Materials', value: 'stainless steel, aluminium, nickel alloy, Monel, Inconel, titanium' },
          { label: 'Size', value: '1 MM To 200 MM Thk In 1000 MM To 3000 MM Width x 2500 MM/ 5000 MM / 10000 MM Length' },
          { label: 'Thickness', value: '4.0mm – 100mm' },
          { label: 'Standards', value: 'ASME: ANSI B16.9, ANSI B16.28, MSS-SP-43, DIN: DIN2605, DIN2615, DIN2616, DIN2617, DIN28011, EN: EN10253-1, EN10253-2' },
          { label: 'Hardness', value: 'Soft, Hard, Half Hard, Quarter Hard, Spring Hard, etc.' }
        ],
        grades: [
          { label: 'Stainless Steel', value: 'ASTM A240 / ASME SA240 202, 304, 304L, 304H, 316, 316Ti, 316H, 316L, 316LN, 309S, 309H, 310S, 310H, 317, 317L, 321, 321H, 347, 347H, 201, 202, 904L' },
          { label: 'Nickel Alloy', value: 'ASTM / ASME SB162 UNS N02200 ( NICKEL 200 ) / UNS N02201 (NICKEL 201 )' },
          { label: 'Aluminium', value: 'ASTM A387 / ASME SA387 GR F5, F9, F11, F12, F22, F91' },
          { label: 'Titanium', value: 'Gr1, Gr2, Gr3, Gr4, Gr5, Gr7, Gr11, Gr12, Gr23' }
        ]
      },
      subProducts: [
        { name: 'SS Plates', image: '/images/sub-products/plates/ss-plates.jpg', alt: 'SS Plates' },
        { name: 'Titanium Plates', image: '/images/sub-products/plates/titanium-plates.jpg', alt: 'Titanium Plates' },
        { name: 'Aluminium Plates', image: '/images/sub-products/plates/aluminium-plates.jpg', alt: 'Aluminium Plates' }
      ],
      applications: [
        { icon: 'fa-fire', name: 'Pressure Vessels', description: 'Boilers, reactors, columns, storage tanks, autoclaves' },
        { icon: 'fa-exchange-alt', name: 'Heat Exchangers', description: 'Shell & tube exchangers, plate heat exchangers, condensers' },
        { icon: 'fa-ship', name: 'Shipbuilding', description: 'Hull plates, deck plates, bulkheads, stiffeners, keel blocks' },
        { icon: 'fa-hard-hat', name: 'Structural Fabrication', description: 'Bridge girders, crane beams, industrial sheds, platforms' },
        { icon: 'fa-industry', name: 'Heavy Fabrication', description: 'Earthmoving equipment, mining machinery, crushers, mills' },
        { icon: 'fa-oil-can', name: 'Oil & Gas', description: 'Storage terminals, process modules, pipe racks, skids' }
      ],
      deliveryInfo: [
        { icon: 'fa-truck-loading', title: 'Heavy Haulage', text: 'Specialized trailers for heavy plate transport with lifting and securement.' },
        { icon: 'fa-dolly', title: 'Crane Assistance', text: 'We coordinate crane offloading for heavy plates at your site.' },
        { icon: 'fa-file-invoice', title: 'Full Documentation', text: 'MTC, NDE reports, heat treatment charts, and material traceability records.' },
        { icon: 'fa-clock', title: 'Scheduled Delivery', text: 'Timely delivery coordinated with your fabrication schedule to avoid delays.' }
      ],
      cities: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Pune', 'Ahmedabad', 'Surat', 'Vadodara', 'Jamnagar', 'Indore', 'Jaipur', 'Ludhiana', 'Coimbatore', 'Visakhapatnam', 'Bhopal', 'Nagpur', 'Mundra', 'Hazira'],
      countries: [
        { name: 'UAE', highlight: true },
        { name: 'Saudi Arabia', highlight: true },
        { name: 'Kuwait', highlight: false },
        { name: 'Qatar', highlight: true },
        { name: 'Oman', highlight: false },
        { name: 'Bahrain', highlight: false },
        { name: 'UK', highlight: true },
        { name: 'Germany', highlight: true },
        { name: 'Netherlands', highlight: false },
        { name: 'USA', highlight: true },
        { name: 'Singapore', highlight: true },
        { name: 'Malaysia', highlight: false },
        { name: 'Indonesia', highlight: true },
        { name: 'Thailand', highlight: false },
        { name: 'South Korea', highlight: true },
        { name: 'South Africa', highlight: true },
        { name: 'Nigeria', highlight: false },
        { name: 'Mozambique', highlight: false },
        { name: 'Tanzania', highlight: false },
        { name: 'Mauritius', highlight: false }
      ],
      faqs: [
        { question: 'What is the difference between sheets and plates?', answer: 'Generally, products up to 5 mm thickness are classified as sheets, while products above 5 mm are classified as plates. Plates are used for heavier structural and pressure applications.' },
        { question: 'Do you supply plates with IBR certification?', answer: 'Yes, we can supply plates with IBR (Indian Boiler Regulations) certification for boiler and pressure vessel applications in India.' },
        { question: 'What is the largest plate size you can supply?', answer: 'We can supply plates up to 5000 mm width and 12000 mm length, in thicknesses up to 200 mm depending on the material grade.' },
        { question: 'Do you offer plasma or laser cutting for plates?', answer: 'Yes, we offer profile cutting services including plasma, laser, and oxy-fuel cutting to your exact shape and dimensions with CNC accuracy.' },
        { question: 'Can you supply plates with Charpy V-Notch impact testing?', answer: 'Yes, we can arrange CVN impact testing at various temperatures including -20°C, -40°C, and -50°C as per project requirements.' }
      ],
      relatedProductSlugs: ['sheets', 'channel-angle', 'pipes'],
      standards: ['ASTM A516', 'IS 2062', 'ASTM A36', 'EN 10028', 'ASTM A387']
    },
    {
      slug: 'buttweld-fittings',
      title: 'Buttweld Fittings',
      metaTitle: 'Buttweld Fittings Manufacturer India | ASME B16.9 Elbows, Tees, Reducers',
      metaDescription: 'Precision-engineered buttweld fittings to ASME B16.9. Elbows, tees, reducers, caps, stub ends, bends. SS, CS, alloy steel. Sch 10 to Sch 160.',
      keywords: ['buttweld fittings', 'elbows', 'tees', 'reducers', 'pipe caps', 'stub ends', 'ASME B16.9', 'stainless steel buttweld fittings'],
      categoryIds: ['buttweld-fittings'],
      shortDescription: 'Precision-engineered buttweld fittings manufactured to ASME B16.9 standards in stainless steel, carbon steel, and alloy steel.',
      fullDescription: 'Sujal Enterprise manufactures a complete range of buttweld fittings to ASME B16.9 standards. Our product line includes elbows (90° & 45°), tees (equal & reducing), reducers (concentric & eccentric), caps, stub ends, bends, crosses, and return bends in various materials and schedules.',
      companyIntro: `<p>Sujal Enterprise is a leading manufacturer of buttweld fittings in India, serving the oil & gas, petrochemical, power, and infrastructure sectors. Our fittings are cold formed or hot formed using premium raw materials and are 100% dimensionally inspected. We maintain a large inventory of standard sizes for immediate dispatch.</p>`,
      overviewCards: [
        { icon: 'fa-drafting-compass', title: 'Precision Dimensions', text: 'Manufactured to ASME B16.9 with strict dimensional tolerances and wall thickness.' },
        { icon: 'fa-flask', title: 'Quality Tested', text: 'PMI, DPT, radiography, hydro testing, and mechanical testing on each batch.' },
        { icon: 'fa-tags', title: 'Competitive Pricing', text: 'Direct mill pricing with no middlemen. Best value for bulk and project orders.' },
        { icon: 'fa-globe-asia', title: 'Export Specialist', text: 'Reliable partner for international projects with complete export documentation.' }
      ],
      technicalSpecifications: {
        heading: 'Buttweld Fittings Standard, Size & Specification',
        rows: [
          { label: 'Size', value: '1/4"NB to 24"NB(seamless) 4"NB to 72"NB(welded)' },
          { label: 'Type', value: 'Elbow (1d/1.5d/3d/5d), 180° Return Bend / Miter Bend, Equal Tee, Reducing Tee / Cross Tee, Long Stubend, Short Stubend, Reducer (con./ecc.), End Cap / Dish End Ca' }
        ],
        grades: [
          { label: 'Stainless Steel', value: 'ASTM / ASME SA 182 F 304 , 304L , 304H, 309H, 310H , 316 , 316H , 316L , 316 LN , 317 , 317L , 321 , 321H , 347 , 347 H ASTM / ASME A105 / ASTM / ASME A 350 LF 2 .' },
          { label: 'Carbon Steel', value: 'A36, 1045, 1018, 4140, 1095, 5160, A992, A500, A515, A516, A53, A106, A2, D2, SA-210, SA-192, A513, A105, 1075' },
          { label: 'Alloy Steel', value: 'AISI 4130, AISI 4140, AISI 4340, AISI 8620, AISI 52100, AISI 6150, AISI 4145, ASTM A387, ASTM A514, ASTM A572, ASTM A588, ASTM A193, ASTM A519, SAE 8620, SAE 9310, SAE 6150' },
          { label: 'High Nickel Alloys Steel', value: 'ASTM / ASME SB 564 UNS 2200 (Nickel 200), ASTM / ASME SB 564 UNS 4400 (Monel 400), ASTM / ASME SB 564 UNS 8825 (Inconel 825), ASTM / ASME SB 564 UNS 6600 (Inconel 600), ASTM / ASME SB 564 UNS 6601 (Inconel 601), ASTM / ASME SB 564 UNS 6625 (Inconel 625), ASTM / ASME SB 564 UNS 10276 (Hastelloy C-276), ASTM / ASME SB 160 UNS 2201 (Nickel 201), ASTM / ASME SB 472 UNS 8020 (Alloy 20 / 20 CB 3)' },
          { label: 'Non Ferrous Metal', value: 'A1000 Series, 2000 Series, 3000 Series, 5000 Series, C10100, C11000, C26000, 260 Brass, 360 Brass, 630 Bronze, C51000, Monel 400, AZ31, Zirconium 702' },
          { label: 'Duplex Steel', value: 'ASTM / ASME SA 182 F 44 , F 45 , F51 , F 53 , F 55 , F 60 , F 61.' }
        ]
      },
      subProducts: [
        { name: 'Elbow', image: '/images/sub-products/buttweld-fittings/elbow.jpg', alt: 'Elbow Buttweld Fitting' },
        { name: 'Tee', image: '/images/sub-products/buttweld-fittings/tee.jpg', alt: 'Tee Buttweld Fitting' },
        { name: 'Reducer', image: '/images/sub-products/buttweld-fittings/reducer.jpg', alt: 'Reducer Buttweld Fitting' },
        { name: 'Cross', image: '/images/sub-products/buttweld-fittings/cross.jpg', alt: 'Cross Buttweld Fitting' },
        { name: 'End Caps', image: '/images/sub-products/buttweld-fittings/end-caps.jpg', alt: 'End Caps Buttweld Fitting' },
        { name: 'Outlet fittings', image: '/images/sub-products/buttweld-fittings/outlet-fittings.jpg', alt: 'Outlet Fittings Buttweld Fitting' },
        { name: 'Nipple Fitting', image: '/images/sub-products/buttweld-fittings/nipple-fitting.jpg', alt: 'Nipple Fitting' },
        { name: 'Stud Ends', image: '/images/sub-products/buttweld-fittings/stud-ends.jpg', alt: 'Stud Ends Buttweld Fitting' },
        { name: 'Bends', image: '/images/sub-products/buttweld-fittings/bends.jpg', alt: 'Bends Buttweld Fitting' }
      ],
      applications: [
        { icon: 'fa-oil-can', name: 'Oil & Gas', description: 'Pipeline systems, refineries, gas processing plants, offshore platforms' },
        { icon: 'fa-industry', name: 'Petrochemical', description: 'Process piping, reactor connections, heat exchanger piping' },
        { icon: 'fa-bolt', name: 'Power Generation', description: 'Steam piping, boiler connections, turbine bypass systems' },
        { icon: 'fa-tint', name: 'Water Treatment', description: 'Desalination plants, water distribution, treatment piping' },
        { icon: 'fa-fire', name: 'Chemical Processing', description: 'Acid handling, chemical transfer, reactor piping systems' },
        { icon: 'fa-ship', name: 'Shipbuilding', description: 'Engine room piping, ballast systems, fuel lines, cooling water' }
      ],
      deliveryInfo: [
        { icon: 'fa-box', title: 'Secure Crating', text: 'Wooden crates with foam inserts to protect fittings during transit and handling.' },
        { icon: 'fa-tag', title: 'Clear Marking', text: 'Each fitting marked with grade, size, schedule, heat number, and standard.' },
        { icon: 'fa-ship', title: 'Express Shipping', text: 'Domestic courier and freight. International air and sea freight arranged.' },
        { icon: 'fa-clock', title: 'Quick Turnaround', text: 'Standard sizes dispatched same day. Custom sizes within 2-3 weeks.' }
      ],
      cities: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Pune', 'Ahmedabad', 'Surat', 'Vadodara', 'Jamnagar', 'Indore', 'Jaipur', 'Ludhiana', 'Coimbatore', 'Visakhapatnam', 'Bhopal', 'Nagpur', 'Thane', 'Panipat'],
      countries: [
        { name: 'UAE', highlight: true },
        { name: 'Saudi Arabia', highlight: true },
        { name: 'Kuwait', highlight: false },
        { name: 'Qatar', highlight: true },
        { name: 'Oman', highlight: false },
        { name: 'Bahrain', highlight: false },
        { name: 'UK', highlight: true },
        { name: 'Germany', highlight: true },
        { name: 'Netherlands', highlight: false },
        { name: 'USA', highlight: true },
        { name: 'Canada', highlight: false },
        { name: 'Singapore', highlight: true },
        { name: 'Malaysia', highlight: false },
        { name: 'Indonesia', highlight: true },
        { name: 'Thailand', highlight: false },
        { name: 'South Africa', highlight: true },
        { name: 'Nigeria', highlight: true },
        { name: 'Egypt', highlight: false },
        { name: 'Kenya', highlight: false },
        { name: 'Bangladesh', highlight: false }
      ],
      faqs: [
        { question: 'What is the difference between ASME B16.9 and MSS SP-43 fittings?', answer: 'ASME B16.9 covers standard buttweld fittings with full dimensional specifications. MSS SP-43 covers lighter weight fittings typically used in low-pressure applications and is based on Schedule 5S and 10S wall thicknesses.' },
        { question: 'What materials are available for buttweld fittings?', answer: 'We offer fittings in stainless steel (304/304L, 316/316L, 321, 310), carbon steel (A234 WPB/WPC), alloy steel (WP1, WP5, WP9, WP11, WP22, WP91), and duplex/super duplex grades.' },
        { question: 'Can you supply fittings for high-pressure applications?', answer: 'Yes, we supply fittings up to Sch 160 for high-pressure applications, with full NDT and hydrostatic testing as required.' },
        { question: 'Do you provide heat treatment for alloy steel fittings?', answer: 'Yes, we provide normalizing, annealing, and post-weld heat treatment (PWHT) for alloy steel fittings with certified heat treatment charts.' },
        { question: 'What is the typical tolerance for buttweld fittings?', answer: 'ASME B16.9 specifies tolerances for various dimensions including outside diameter, wall thickness, center-to-end, and overall length. Standard tolerances are ±1.5 mm for most dimensions under 24".' }
      ],
      relatedProductSlugs: ['flanges', 'pipes', 'forged-fittings'],
      standards: ['ASME B16.9', 'MSS SP-43', 'DIN 2605', 'EN 10253']
    },
    {
      slug: 'forged-fittings',
      title: 'Forged Fittings',
      metaTitle: 'Forged Fittings Manufacturer India | ASME B16.11 Socket Weld & Threaded',
      metaDescription: 'High-strength forged fittings to ASME B16.11. Socket weld and threaded fittings in SS, CS, and alloy steel. Elbows, tees, couplings, unions, nipples.',
      keywords: ['forged fittings', 'socket weld fittings', 'threaded fittings', 'forged elbows', 'pipe couplings', 'pipe unions', 'ASME B16.11', 'pipe nipples'],
      categoryIds: ['forged-fittings'],
      shortDescription: 'High-strength forged fittings manufactured to ASME B16.11 standards. Socket weld and threaded in various materials and pressure classes.',
      fullDescription: 'Sujal Enterprise manufactures and stocks a wide range of forged fittings to ASME B16.11 standards. Our range includes socket weld and threaded elbows, tees, couplings, unions, pipe nipples, caps, bushings, plugs, and crosses in stainless steel, carbon steel, and alloy steel.',
      companyIntro: `<p>Sujal Enterprise is a trusted supplier of forged fittings for high-pressure and high-temperature applications. Our forged fittings are manufactured using closed-die forging processes and are heat treated to ensure optimal mechanical properties. We serve the oil & gas, chemical, power, and general engineering industries.</p>`,
      overviewCards: [
        { icon: 'fa-hammer', title: 'Closed-Die Forged', text: 'Superior grain structure and mechanical properties through precision forging.' },
        { icon: 'fa-fire', title: 'Heat Treated', text: 'Normalizing, annealing, or quenching & tempering as per material requirements.' },
        { icon: 'fa-tachometer-alt', title: 'High Pressure Rating', text: 'Rated for Class 2000 to Class 9000 pressure applications.' },
        { icon: 'fa-check-circle', title: '100% Inspected', text: 'Dimensional, thread gauging, PMI, and pressure testing on every batch.' }
      ],
      technicalSpecifications: {
        heading: 'Forged Fittings Standard, Size & Specification',
        rows: [
          { label: 'Size', value: '½”NB to 4” NB' },
          { label: 'Type', value: "90, 45, Tee, Cross, Coupling, Reducing Coupling, Bushing, Cap, O'Let." },
          { label: 'Forged Fittings', value: 'Socket Weld Fittings : Elbow 90 Deg , Cross , Tee , Elbow 45 Deg , Coupling , Half Coupling & End Cap.' },
          { label: 'Class', value: 'SCH20, SCH30, SCH40, STD, SCH80, XS, SCH60, SCH80, SCH120, SCH140, SCH160, XXS' },
          { label: 'Schedule', value: '2000 LBS, 3000 LBS, 6000 LBS & 9000 LBS' },
          { label: 'Standards', value: 'ASME / ANSI B16.11' }
        ],
        grades: [
          { label: 'Stainless Steel', value: '304, 304L, 304H, 309S, 309H, 310S, 310H, 316, 316TI, 316H, 316 LN, 317, 317L, 321, 321H, 347, 347 H, 904L, SMO 254.' },
          { label: 'Duplex Steel', value: 'UNS NO S 31803, S 32205, S 32550, S 32750, S 32760.' },
          { label: 'Carbon Steel', value: 'API 5L Gr. A / B, X42, X52, X60 ASTM A 53 Gr. A/B' },
          { label: 'Alloy Steel', value: 'P5, P9, P11, P12, P22, P91' },
          { label: 'Nickel Alloys', value: 'ASTM SB 366 – UNS N04400, N08020, N06625, N07718, N08800, N08825, N06600, N06601, N06022, UNS N02200, UNS 2201.' },
          { label: 'Hastelloy', value: 'Hastelloy C-22, Hastelloy C-276, Hastelloy C-2000, Hastelloy C-4, Hastelloy X, Hastelloy B, Hastelloy N, Hastelloy G' }
        ]
      },
      subProducts: [
        { name: 'Forged Elbow 90 Deg Fittings', image: '/images/sub-products/forged-fittings/forged-elbow-90-deg-fittings.jpg', alt: 'Forged Elbow 90 Deg Fittings' },
        { name: 'Forged Cross Fittings', image: '/images/sub-products/forged-fittings/forged-cross-fittings.jpg', alt: 'Forged Cross Fittings' },
        { name: 'Forged Tee Fittings', image: '/images/sub-products/forged-fittings/forged-tee-fittings.jpg', alt: 'Forged Tee Fittings' },
        { name: 'Forged Elbow 45 Deg Fittings', image: '/images/sub-products/forged-fittings/forged-elbow-45-deg-fittings.jpg', alt: 'Forged Elbow 45 Deg Fittings' },
        { name: 'Forged Coupling Fittings', image: '/images/sub-products/forged-fittings/forged-coupling-fittings.jpg', alt: 'Forged Coupling Fittings' },
        { name: 'Forged Half Coupling Fittings', image: '/images/sub-products/forged-fittings/forged-half-coupling-fittings.jpg', alt: 'Forged Half Coupling Fittings' },
        { name: 'Forged End Cap Fittings', image: '/images/sub-products/forged-fittings/forged-end-cap-fittings.jpg', alt: 'Forged End Cap Fittings' },
        { name: 'Forged Union Fittings', image: '/images/sub-products/forged-fittings/forged-union-fittings.jpg', alt: 'Forged Union Fittings' },
        { name: 'Barrel Nipple Fittings', image: '/images/sub-products/forged-fittings/barrel-nipple-fittings.jpg', alt: 'Barrel Nipple Fittings' }
      ],
      applications: [
        { icon: 'fa-oil-can', name: 'Oil & Gas', description: 'Instrumentation piping, manifolds, sampling systems, chemical injection' },
        { icon: 'fa-industry', name: 'Chemical Processing', description: 'Small bore piping, drain & vent systems, gauge connections' },
        { icon: 'fa-fire', name: 'Refinery', description: 'High-pressure steam tracing, utility connections, sample points' },
        { icon: 'fa-tint', name: 'Hydraulic Systems', description: 'High-pressure hydraulic lines, lubrication systems, pneumatic controls' },
        { icon: 'fa-bolt', name: 'Power Plants', description: 'Boiler trim, soot blower piping, drain systems, instrument lines' },
        { icon: 'fa-tools', name: 'General Engineering', description: 'Compressed air, steam distribution, water circuits, cooling systems' }
      ],
      deliveryInfo: [
        { icon: 'fa-box', title: 'Packaging', text: 'Cardboard boxes or polybags for small sizes. Wooden crates for bulk orders.' },
        { icon: 'fa-tag', title: 'Clear Labeling', text: 'Each fitting labeled with grade, size, class, and heat number. Bar coding on request.' },
        { icon: 'fa-ship', title: 'Export & Domestic', text: 'Express courier for small orders. Freight coordination for bulk and export shipments.' },
        { icon: 'fa-clock', title: 'Fast Dispatch', text: 'Standard stocked items dispatched within 24 hours. Special items within 1-2 weeks.' }
      ],
      cities: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Pune', 'Ahmedabad', 'Surat', 'Vadodara', 'Jamnagar', 'Indore', 'Jaipur', 'Ludhiana', 'Coimbatore', 'Visakhapatnam', 'Bhopal', 'Nagpur', 'Thane', 'Faridabad'],
      countries: [
        { name: 'UAE', highlight: true },
        { name: 'Saudi Arabia', highlight: true },
        { name: 'Kuwait', highlight: false },
        { name: 'Qatar', highlight: true },
        { name: 'Oman', highlight: false },
        { name: 'Bahrain', highlight: false },
        { name: 'UK', highlight: true },
        { name: 'Germany', highlight: false },
        { name: 'Netherlands', highlight: false },
        { name: 'USA', highlight: true },
        { name: 'Canada', highlight: false },
        { name: 'Singapore', highlight: true },
        { name: 'Malaysia', highlight: false },
        { name: 'Indonesia', highlight: false },
        { name: 'Thailand', highlight: false },
        { name: 'South Africa', highlight: true },
        { name: 'Nigeria', highlight: true },
        { name: 'Egypt', highlight: false },
        { name: 'Kenya', highlight: false },
        { name: 'Bangladesh', highlight: false }
      ],
      faqs: [
        { question: 'What is the difference between socket weld and threaded fittings?', answer: 'Socket weld fittings are welded on the outside of the pipe-socket joint, providing a stronger, leak-free connection ideal for high-pressure service. Threaded fittings use NPT/BSP threads for mechanical connection, suitable for lower pressure applications and easy disassembly.' },
        { question: 'What pressure classes are available for forged fittings?', answer: 'We supply forged fittings in Class 2000, Class 3000, Class 6000, and Class 9000 as per ASME B16.11, covering a wide range of pressure requirements.' },
        { question: 'What thread types do you offer?', answer: 'We offer NPT (National Pipe Thread, Tapered) as standard, along with BSP (British Standard Pipe) and BSPT (British Standard Pipe Tapered) thread types on request.' },
        { question: 'Do you supply forged fittings with NACE compliance?', answer: 'Yes, we can supply forged fittings with NACE MR0175/MR0103 compliance for sour gas and refinery applications with appropriate material and hardness certification.' },
        { question: 'What is the maximum size for forged fittings?', answer: 'Forged fittings as per ASME B16.11 are typically available up to 4" size. Larger sizes are generally manufactured as buttweld fittings per ASME B16.9.' }
      ],
      relatedProductSlugs: ['buttweld-fittings', 'flanges', 'pipes'],
      standards: ['ASME B16.11', 'BS 3799', 'DIN 2982', 'EN 10241']
    },
    {
      slug: 'channel-angle',
      title: 'Channel & Angle',
      metaTitle: 'Channel & Angle Manufacturer India | Structural Steel Profiles',
      metaDescription: 'Structural steel channels and angles in carbon steel and stainless steel. ISMC, ISJB, ISJC, ISMB, ISA equal/unequal for construction, infrastructure.',
      keywords: ['channel', 'angle', 'structural steel', 'ISMC channels', 'MS angles', 'stainless steel channels', 'stainless steel angles', 'slotted channels'],
      categoryIds: ['channel-angle'],
      shortDescription: 'Structural steel channels and angles in carbon steel and stainless steel for construction, fabrication, and infrastructure applications.',
      fullDescription: 'Sujal Enterprise supplies structural steel channels and angles in carbon steel and stainless steel grades. Our range includes ISMC channels, ISMB beams, ISA equal and unequal angles, slotted channels (Unistrut type), and heavy-duty structural profiles for construction, fabrication, and infrastructure projects.',
      companyIntro: `<p>Sujal Enterprise is a reliable supplier of structural steel sections to the construction, infrastructure, and fabrication industries. Our structural profiles are sourced from ISO-certified mills and are available in standard and custom lengths. We serve EPC contractors, structural fabricators, and infrastructure developers across India.</p>`,
      overviewCards: [
        { icon: 'fa-hard-hat', title: 'Structural Grade', text: 'Certified structural steel conforming to IS 2062, ASTM A36, and EN 10025.' },
        { icon: 'fa-ruler', title: 'Precision Rolling', text: 'Accurate dimensional tolerances for precise fabrication and assembly.' },
        { icon: 'fa-building', title: 'Construction Ready', text: 'Ready for immediate use in building frames, bridges, and industrial structures.' },
        { icon: 'fa-truck', title: 'Project Delivery', text: 'Bulk deliveries coordinated with project schedules across India.' }
      ],
      technicalSpecifications: {
        heading: 'Channel & Angle Standard, Size & Specification',
        rows: [
          { label: 'Types', value: "'L' shaped Angle, Equal Angle, Unequal Angle, C Channel, U Channel, Box Channel etc." },
          { label: 'Thickness', value: '2mm – 16mm' },
          { label: 'Dimension', value: 'EN, DIN, JIS, ASTM, BS, ASME, AISI' },
          { label: 'Length', value: '3MTR, 4MTR, 5MTR, 6MTR, or Custom Cut Sizes' }
        ],
        grades: [
          { label: 'Stainless Steel', value: 'ASTM / ASME SA 182 F 304 , 304L , 304H, 309H, 310H , 316 , 316H , 316L , 316 LN , 317 , 317L , 321 , 321H , 347 , 347 H ASTM / ASME A105 / ASTM / ASME A 350 LF 2 .' },
          { label: 'Super Duplex Steel', value: 'ASTM / ASME SA 790 UNS NO S31803 , S32205 , S32550 , S32750 , S32760' },
          { label: 'Carbon Steel', value: 'ASTM / ASME A 335 GRP 1 , P 5 , P 9 , P 11 , P 12 , P 22 , P 23 , P 91' },
          { label: 'Alloy Steel', value: 'ASTM / ASME A 691 GRP1 CR , 1 1/4 CR , 2 1/4 CR , 5 CR , 9CR , 91.' },
          { label: 'Nickel Alloys', value: 'Nickel Alloys 200, Nickel Alloys 201' },
          { label: 'Hastelloy', value: 'Hastelloy C-22, Hastelloy C-276, Hastelloy C-2000, Hastelloy C-4, Hastelloy X, Hastelloy B, Hastelloy N, Hastelloy G' },
          { label: 'Molybdenum', value: 'ASTM / ASME A 182 GR F5, F9 , F11 , F12 , F22 , F91, ASTM B387, Ferro Molybdenum' }
        ]
      },
      subProducts: [
        { name: 'Angle', image: '/images/sub-products/channel-angles/angle.jpg', alt: 'Angle' },
        { name: 'Channel', image: '/images/sub-products/channel-angles/channel.jpg', alt: 'Channel' },
        { name: 'I Beam', image: '/images/sub-products/channel-angles/i-beam.jpg', alt: 'I Beam' }
      ],
      applications: [
        { icon: 'fa-building', name: 'Building Construction', description: 'Structural frames, roof trusses, purlins, girts, bracing systems' },
        { icon: 'fa-industry', name: 'Industrial Structures', description: 'Plant structures, equipment supports, platforms, walkways, railings' },
        { icon: 'fa-bridge', name: 'Infrastructure', description: 'Bridges, flyovers, transmission towers, monorails, gantries' },
        { icon: 'fa-tools', name: 'General Fabrication', description: 'Machine frames, conveyor systems, storage racks, workstations' },
        { icon: 'fa-car', name: 'Transportation', description: 'Chassis frames, trailer bodies, container structures, railway coaches' },
        { icon: 'fa-solar-panel', name: 'Solar & Renewable', description: 'Solar panel mounting structures, wind turbine towers, support frames' }
      ],
      deliveryInfo: [
        { icon: 'fa-truck-loading', title: 'Bulk Transport', text: 'Dedicated trailers for structural steel sections with proper securement.' },
        { icon: 'fa-boxes', title: 'Bundle Packing', text: 'Steel banded bundles with interlayer spacers for easy handling and identification.' },
        { icon: 'fa-file-invoice', title: 'Project Documentation', text: 'MTC, test reports, and compliance certificates for each batch supplied.' },
        { icon: 'fa-clock', title: 'Phased Delivery', text: 'Coordinated deliveries to match project erection schedules and minimize site storage.' }
      ],
      cities: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Pune', 'Ahmedabad', 'Surat', 'Vadodara', 'Indore', 'Jaipur', 'Ludhiana', 'Coimbatore', 'Visakhapatnam', 'Bhopal', 'Nagpur', 'Thane', 'Raipur', 'Gurgaon'],
      countries: [
        { name: 'UAE', highlight: true },
        { name: 'Saudi Arabia', highlight: true },
        { name: 'Kuwait', highlight: false },
        { name: 'Qatar', highlight: true },
        { name: 'Oman', highlight: false },
        { name: 'Bahrain', highlight: false },
        { name: 'UK', highlight: true },
        { name: 'France', highlight: false },
        { name: 'Germany', highlight: false },
        { name: 'USA', highlight: true },
        { name: 'Canada', highlight: false },
        { name: 'Singapore', highlight: true },
        { name: 'Malaysia', highlight: false },
        { name: 'Indonesia', highlight: false },
        { name: 'Thailand', highlight: false },
        { name: 'South Africa', highlight: true },
        { name: 'Nigeria', highlight: true },
        { name: 'Egypt', highlight: false },
        { name: 'Kenya', highlight: false },
        { name: 'Mauritius', highlight: false }
      ],
      faqs: [
        { question: 'What is the difference between ISMC and ISMB?', answer: 'ISMC stands for Indian Standard Medium Weight Channel, while ISMB stands for Indian Standard Medium Weight Beam (I-beam). Channels have a C-shaped cross-section, while beams have an I-shaped cross-section.' },
        { question: 'What lengths of channels and angles are available?', answer: 'Standard lengths are 6 MTR and 12 MTR. Custom cut lengths can be supplied based on project requirements, typically with saw-cut or sheared ends.' },
        { question: 'Do you supply galvanized structural sections?', answer: 'Yes, we offer hot dip galvanizing services for channels and angles as per IS 4759 / ASTM A123 standards with certified coating thickness.' },
        { question: 'What grade of steel is commonly used for structural applications?', answer: 'The most common grades are IS 2062 Gr. A (E250), Gr. B (E410), ASTM A36, and ASTM A572 Gr. 50/60 for higher strength requirements.' },
        { question: 'Can you supply stainless steel channels and angles?', answer: 'Yes, we supply SS 304/304L and SS 316/316L channels and angles in standard sizes with various surface finishes including black, pickled, and brushed.' }
      ],
      relatedProductSlugs: ['plates', 'sheets', 'pipes'],
      standards: ['IS 2062', 'IS 808', 'ASTM A36', 'EN 10025']
    }
  ],

  // =========================================================================
  // MATERIAL DETAILS DATASET - Config-Driven Material Details
  // =========================================================================
  materialDetails: [
    {
      slug: 'mild-steel',
      name: 'Mild Steel',
      metaTitle: 'Mild Steel Manufacturer India | MS Pipes, Plates, Sheets, Channels | Sujal Enterprise',
      metaDescription: 'Premium quality Mild Steel products including pipes, plates, sheets, channels, angles, buttweld fittings, and forged fittings. IS 2062, IS 1239 certified. Supplier in Mumbai, India.',
      keywords: ['mild steel', 'MS pipes', 'MS plates', 'MS sheets', 'mild steel channels', 'mild steel angles', 'IS 2062', 'IS 1239', 'carbon steel'],
      shortDescription: 'High-quality Mild Steel products including pipes, plates, sheets, channels, angles, and fittings for structural and industrial applications.',
      longDescription: 'Sujal Enterprise supplies a comprehensive range of Mild Steel (MS) products for structural, industrial, and engineering applications. Our MS inventory covers pipes (seamless & ERW), plates, sheets, coils, channels, angles, buttweld fittings, and forged fittings. All products conform to IS 1239, IS 2062, and international standards with complete material traceability.',
      heroImage: '/images/products/MS%20Pipes%201.webp',
      galleryImages: ['/images/products/MS%20Pipes%201.webp', '/images/products/MS%20Pipes%202.webp', '/images/products/MS%20Pipes%203.webp', '/images/products/Mild%20Steel%20Plates%201.webp', '/images/products/Mild%20Steel%20sheet%201.webp'],
      specificationHeading: 'Mild Steels Standard, Size & Specification',
      cardImages: {
        'buttweld-fittings': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/mild-steel/mild-steel-pipe-fittings-manufacturer-india.jpg',
        'flanges': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/mild-steel/mild-steel-flanges-manufacturer-india.jpg',
        'round-bar': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/mild-steel/mild-steel-round-bars-manufacturer-india.jpg',
        'pipes': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/mild-steel/mild-steel-pipe-manufacturer-india.jpg',
        'forged-fittings': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/mild-steel/mild-steel-forge-fittings-manufacturer-india.jpg',
        'plates': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/mild-steel/mild-steel-plate-manufacturer-india.jpg',
        'sheets': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/mild-steel/mild-steel-sheet-manufacturer-india.jpg',
        'channel-angle': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/mild-steel/mild-steel-channel-angles-manufacturer-india.jpg'
      },
      specifications: [
        {
          material: 'Mild Steel Grades\nSae 4118, Sae 4120, Sae 4120, Sae 4130, Sae 4135, Sae 4137, Sae 4140, Sae 4142, Sae 4145, Sae 4147, Sae 4150, Sae 4161, Sae 8620.',
          standard: 'ASTM, ASME, DIN, JIS, BS, and all International Standards',
          products: 'Mild Steel Pipe Fitting, Mild Steel Flanges, Mild Steel Flanges, Mild Steel Round Bar, Mild Steel Pipes, Mild Steel Forged Fitting, Mild Steel Plates, Mild Steel Sheets, Mild Steel Channel, Angles.'
        }
      ],
      grades: ['IS 2062 Gr. A', 'IS 2062 Gr. B', 'IS 2062 Gr. C', 'ASTM A36', 'ASTM A106 Gr. B', 'ASTM A53 Gr. B', 'AISI 1018', 'AISI 1045', 'EN8', 'EN9'],
      applications: [
        { icon: 'fa-building', name: 'Construction', description: 'Structural frames, roofing, bridges, columns, beams, trusses' },
        { icon: 'fa-industry', name: 'Industrial Fabrication', description: 'Machine frames, platforms, walkways, storage tanks, hoppers' },
        { icon: 'fa-oil-can', name: 'Oil & Gas', description: 'Pipeline systems, structural supports, skids, pipe racks' },
        { icon: 'fa-tint', name: 'Water & Plumbing', description: 'Water supply lines, GI pipes, drainage, fire fighting systems' },
        { icon: 'fa-car', name: 'Automotive', description: 'Chassis parts, body panels, exhaust systems, suspension' },
        { icon: 'fa-ship', name: 'Shipbuilding', description: 'Hull plates, deck beams, bulkheads, structural sections' }
      ],
      products: ['pipes', 'plates', 'sheets', 'channel-angle', 'buttweld-fittings', 'forged-fittings'],
      packaging: [
        { icon: 'fa-truck-loading', title: 'Bulk Transport', text: 'Dedicated trailers for pipes and structural sections with proper securement.' },
        { icon: 'fa-box', title: 'Bundle Packing', text: 'Steel banded bundles with rust protection and grade tags.' },
        { icon: 'fa-file-invoice', title: 'Full Documentation', text: 'MTC, NDE reports, and compliance certificates for every batch.' },
        { icon: 'fa-clock', title: 'Express Dispatch', text: 'Stock items dispatched within 24 hours. Custom orders within 1-2 weeks.' }
      ],
      citiesSupplied: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Pune', 'Ahmedabad', 'Surat', 'Vadodara', 'Jamnagar', 'Indore', 'Jaipur', 'Ludhiana', 'Coimbatore', 'Visakhapatnam', 'Bhopal', 'Nagpur', 'Thane', 'Raipur', 'Faridabad', 'Ghaziabad'],
      countriesExported: [
        { name: 'UAE', highlight: true },
        { name: 'Saudi Arabia', highlight: true },
        { name: 'Kuwait', highlight: false },
        { name: 'Qatar', highlight: false },
        { name: 'Oman', highlight: false },
        { name: 'Bahrain', highlight: false },
        { name: 'UK', highlight: true },
        { name: 'Germany', highlight: true },
        { name: 'Netherlands', highlight: false },
        { name: 'USA', highlight: true },
        { name: 'Canada', highlight: false },
        { name: 'Singapore', highlight: true },
        { name: 'Malaysia', highlight: false },
        { name: 'Indonesia', highlight: false },
        { name: 'Thailand', highlight: false },
        { name: 'Vietnam', highlight: false },
        { name: 'South Africa', highlight: true },
        { name: 'Nigeria', highlight: true },
        { name: 'Egypt', highlight: false },
        { name: 'Kenya', highlight: false },
        { name: 'Bangladesh', highlight: false },
        { name: 'Sri Lanka', highlight: false }
      ],
      faqs: [
        { question: 'What grades of Mild Steel do you supply?', answer: 'We supply IS 2062 Gr. A/B/C, ASTM A36, ASTM A106 Gr. B, ASTM A53 Gr. B, AISI 1018/1045, and EN8/EN9 grades in various forms including pipes, plates, sheets, and structural sections.' },
        { question: 'Can you supply MS products with IBR certification?', answer: 'Yes, we can supply MS plates and pipes with IBR (Indian Boiler Regulations) certification for boiler and pressure vessel applications.' },
        { question: 'What is the difference between seamless and ERW MS pipes?', answer: 'Seamless pipes are manufactured from solid billets with no welded joint, ideal for high-pressure applications. ERW pipes are made from steel coils welded longitudinally, offering cost-effective solutions for standard applications.' },
        { question: 'Do you provide cut-to-length services for MS products?', answer: 'Yes, we offer custom cutting services including shearing, plasma cutting, and saw cutting for plates, pipes, and structural sections to your exact dimensions.' },
        { question: 'What surface treatments are available for Mild Steel?', answer: 'We offer black (as-rolled), galvanized (hot dip), painted (primer/industrial), and shot blasted surfaces depending on the product and application.' }
      ],
      seo: {
        ogImage: '/images/products/MS%20Pipes%201.webp',
        canonicalUrl: 'https://sujalenterprise.com/materials/mild-steel/'
      },
      relatedMaterials: ['stainless-steel', 'alloy-steel']
    },
    {
      slug: 'stainless-steel',
      name: 'Stainless Steel',
      metaTitle: 'Stainless Steel Supplier India | SS 304/316 Pipes, Flanges, Fittings | Sujal Enterprise',
      metaDescription: 'Premium Stainless Steel products including SS 304/304L, SS 316/316L pipes, flanges, buttweld fittings, forged fittings, sheets, plates, and round bars. Supplier in Mumbai, India.',
      keywords: ['stainless steel', 'SS 304', 'SS 316', 'stainless steel pipes', 'SS flanges', 'SS fittings', 'stainless steel sheets', 'SS round bars'],
      shortDescription: 'Premium Stainless Steel products in SS 304/304L and SS 316/316L grades including pipes, flanges, fittings, sheets, plates, and round bars.',
      longDescription: 'Sujal Enterprise is a trusted supplier of Stainless Steel products in grades SS 304/304L, SS 316/316L, SS 321, SS 310, and Duplex 2205. Our SS inventory covers pipes (seamless & welded), flanges (ASME B16.5), buttweld fittings (ASME B16.9), forged fittings (ASME B16.11), sheets, plates, and round bars for corrosion-resistant and high-temperature applications.',
      heroImage: '/images/products/Stainless%20Steel%20Pipes%201.jpg',
      galleryImages: ['/images/products/Stainless%20Steel%20Pipes%201.jpg', '/images/products/Stainless%20Steel%20Pipes%202.webp', '/images/products/Stainless%20Steel%20Pipes%203.webp', '/images/products/Stainless%20Steel%20Plates.jpg', '/images/products/Stainless%20Steel%20Sheets.jpg', '/images/products/flanges%201.png'],
      specificationHeading: 'Stainless Steels Standard, Size & Specification',
      cardImages: {
        'buttweld-fittings': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/stainless-steel/stainless-steel-pipe-fitting-manufacturer-india.jpg',
        'flanges': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/stainless-steel/stainless-steel-flanges-manufacturer-india.jpg',
        'round-bar': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/stainless-steel/stainless-steel-round-bars-manufacturer-india.jpg',
        'pipes': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/stainless-steel/stainless-steel-pipe-manufacturer-india.jpg',
        'forged-fittings': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/stainless-steel/stainless-steel-forged-fitting-manufacturer-india.jpg',
        'plates': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/stainless-steel/stainless-steel-plates-manufacturer-india.jpg',
        'sheets': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/stainless-steel/stainless-steel-sheet-manufacturer-india.jpg',
        'channel-angle': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/stainless-steel/stainless-steel-channel-angles-manufacturer-india.jpg'
      },
      specifications: [
        {
          material: 'Stainless Steel Grades\n200 Series - 201, 202, 205. 300 Series 301, 302, 303, 304, 304L, 308, 309, 309S, 310, 310S, 314, 316, 316L, 316TI, 317, 317L, 321, 347. 400 Series 405, 409, 429, 430, 430F, 430FSe, 434, 436, 442, 446, 403, 410, 414,416, 416Se, 420,420F, 422, 431, 440A, 440B, 440C. 500 Series - 501, 502. 600 Series - 630 (17-4 PH) 17.4PH, 904L.',
          standard: 'ASTM, ASME, DIN, JIS, BS, and all International Standards',
          products: 'Stainless Steel Pipe Fitting, Stainless Steel Flanges, Stainless Steel Flanges, Stainless Steel Round Bar, Stainless Steel Pipes, Stainless Steel Forged Fitting, Stainless Steel Plates, Stainless Steel Sheets, Stainless Steel Channel, Angles.'
        }
      ],
      grades: ['SS 304', 'SS 304L', 'SS 316', 'SS 316L', 'SS 321', 'SS 310', 'SS 347', 'SS 430', 'Duplex 2205 (UNS S31803)', 'Super Duplex 2507 (UNS S32750)'],
      applications: [
        { icon: 'fa-oil-can', name: 'Oil & Gas', description: 'Refinery piping, offshore platforms, wellhead equipment, gas processing' },
        { icon: 'fa-flask', name: 'Chemical Processing', description: 'Reactor vessels, storage tanks, piping systems, heat exchangers' },
        { icon: 'fa-industry', name: 'Petrochemical', description: 'Process piping, pressure vessels, distillation columns' },
        { icon: 'fa-bolt', name: 'Power Generation', description: 'Boiler tubes, steam lines, turbine components, condenser piping' },
        { icon: 'fa-utensils', name: 'Food & Pharma', description: 'Processing equipment, storage tanks, sanitary piping, work surfaces' },
        { icon: 'fa-building', name: 'Architecture', description: 'Cladding, handrails, elevator panels, façades, decorative elements' }
      ],
      products: ['pipes', 'flanges', 'buttweld-fittings', 'forged-fittings', 'round-bar', 'sheets', 'plates'],
      packaging: [
        { icon: 'fa-box', title: 'Premium Crating', text: 'Wooden crates with foam interlayers and VCI paper for surface protection.' },
        { icon: 'fa-shield-alt', title: 'Protective Film', text: 'All sheet and plate products supplied with PE protective film on both sides.' },
        { icon: 'fa-tag', title: 'Material Traceability', text: 'Every product tagged with grade, heat number, size, and MTC reference.' },
        { icon: 'fa-ship', title: 'Export Grade', text: 'Fumigated crates with waterproof lining for international shipments.' }
      ],
      citiesSupplied: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Pune', 'Ahmedabad', 'Surat', 'Vadodara', 'Jamnagar', 'Indore', 'Jaipur', 'Ludhiana', 'Coimbatore', 'Visakhapatnam', 'Bhopal', 'Nagpur', 'Thane', 'Faridabad', 'Ghaziabad', 'Panipat'],
      countriesExported: [
        { name: 'UAE', highlight: true },
        { name: 'Saudi Arabia', highlight: true },
        { name: 'Kuwait', highlight: false },
        { name: 'Qatar', highlight: true },
        { name: 'Oman', highlight: false },
        { name: 'Bahrain', highlight: false },
        { name: 'UK', highlight: true },
        { name: 'Germany', highlight: true },
        { name: 'France', highlight: false },
        { name: 'Netherlands', highlight: false },
        { name: 'USA', highlight: true },
        { name: 'Canada', highlight: false },
        { name: 'Singapore', highlight: true },
        { name: 'Malaysia', highlight: false },
        { name: 'Indonesia', highlight: true },
        { name: 'Thailand', highlight: false },
        { name: 'Vietnam', highlight: false },
        { name: 'South Africa', highlight: true },
        { name: 'Nigeria', highlight: false },
        { name: 'Egypt', highlight: false },
        { name: 'Kenya', highlight: false },
        { name: 'Bangladesh', highlight: false }
      ],
      faqs: [
        { question: 'What grades of stainless steel do you supply?', answer: 'We supply SS 304/304L, SS 316/316L, SS 321, SS 310, SS 347, SS 430, Duplex 2205 (UNS S31803), and Super Duplex 2507 (UNS S32750) in various product forms.' },
        { question: 'What is the difference between SS 304 and SS 316?', answer: 'SS 316 contains molybdenum which provides superior corrosion resistance, especially against chlorides and acids. SS 304 is the most common grade suitable for general applications. SS 316 is recommended for marine and chemical environments.' },
        { question: 'Do you supply stainless steel with material test certificates?', answer: 'Yes, we provide 100% material traceability with mill test certificates (MTC) as per EN 10204 3.1/3.2. Third-party inspection is available upon request.' },
        { question: 'What finishes are available for stainless steel sheets?', answer: 'We offer 2B (cold rolled), BA (bright annealed), No.4 Brushed, Mirror (8K), Hairline, SATIN, and embossed finishes depending on application requirements.' },
        { question: 'Can you supply stainless steel for high-temperature applications?', answer: 'Yes, we supply SS 310 and SS 321 grades for high-temperature applications up to 1100°C, suitable for furnace components, heat exchangers, and boiler parts.' }
      ],
      seo: {
        ogImage: '/images/products/Stainless%20Steel%20Pipes%201.jpg',
        canonicalUrl: 'https://sujalenterprise.com/materials/stainless-steel/'
      },
      relatedMaterials: ['mild-steel', 'alloy-steel']
    },
    {
      slug: 'alloy-steel',
      name: 'Alloy Steel',
      metaTitle: 'Alloy Steel Supplier India | Chrome Moly Pipes, Fittings, Flanges | Sujal Enterprise',
      metaDescription: 'Premium Alloy Steel products including chrome moly pipes (ASTM A335), fittings, flanges, plates, and round bars. ASTM A182 F11/F22/F91. High-temperature service.',
      keywords: ['alloy steel', 'chrome moly', 'ASTM A335', 'alloy steel pipes', 'alloy steel fittings', 'chrome moly flanges', 'ASTM A182', 'F11', 'F22', 'F91'],
      shortDescription: 'Premium Alloy Steel / Chrome Moly products including pipes (ASTM A335), fittings, flanges, plates, and round bars for high-temperature and high-pressure applications.',
      longDescription: 'Sujal Enterprise supplies premium Alloy Steel (Chrome Moly) products for high-temperature and high-pressure applications. Our alloy steel inventory covers pipes (ASTM A335 P5/P9/P11/P22/P91), flanges (ASTM A182 F11/F22/F91), buttweld fittings (ASTM A234 WP1/WP5/WP9/WP11/WP22/WP91), forged fittings, plates (ASTM A387), and round bars for power generation, petrochemical, and refinery applications.',
      heroImage: '/images/products/MS%20Pipes%201.webp',
      galleryImages: ['/images/products/MS%20Pipes%201.webp', '/images/products/pipes-tubes.png', '/images/products/Mild%20Steel%20Plates%201.webp'],
      specificationHeading: 'Alloy Steels Standard, Size & Specification',
      cardImages: {
        'buttweld-fittings': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/alloy-steel/alloy-steel-pipe-fitting-manufacturer-india.jpg',
        'flanges': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/alloy-steel/alloy-steel-flanges-manufacturer-india.jpg',
        'round-bar': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/alloy-steel/alloy-steel-round-bar-manufacturer-india.jpg',
        'pipes': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/alloy-steel/alloy-steel-pipe-manufacturer-india.jpg',
        'forged-fittings': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/alloy-steel/alloy-steel-forged-fitting-manufacturer-india.jpg',
        'plates': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/alloy-steel/alloy-steel-plates-manufacturer-india.jpg',
        'sheets': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/alloy-steel/alloy-steel-sheet-manufacturer-india.jpg',
        'channel-angle': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/alloy-steel/alloy-steel-channel-angles-manufacturer-india.jpg'
      },
      specifications: [
        {
          material: 'Alloy Steel Grades\nASTM / ASME A 691 GRP1 CR , 1 1/4 CR , 2 1/4 CR , 5 CR , 9CR , 91',
          standard: 'ASTM, ASME, DIN, JIS, BS, and all International Standards',
          products: 'Alloy Steel Pipe Fitting, Alloy Steel Flanges, Alloy Steel Flanges, Alloy Steel Round Bar, Alloy Steel Pipes, Alloy Steel Forged Fitting, Alloy Steel Plates, Alloy Steel Sheets, Alloy Steel Channel, Angles.'
        }
      ],
      grades: ['ASTM A335 P5', 'ASTM A335 P9', 'ASTM A335 P11', 'ASTM A335 P22', 'ASTM A335 P91', 'ASTM A182 F11', 'ASTM A182 F22', 'ASTM A182 F91', 'ASTM A387 Gr. 11', 'ASTM A387 Gr. 22', 'ASTM A387 Gr. 91'],
      applications: [
        { icon: 'fa-bolt', name: 'Power Generation', description: 'Boiler tubes, superheater lines, steam piping, turbine components' },
        { icon: 'fa-oil-can', name: 'Petrochemical', description: 'Reactor piping, furnace tubes, heat exchanger tubing, process lines' },
        { icon: 'fa-industry', name: 'Refineries', description: 'Hydrocracker units, catalytic reformers, high-pressure steam lines' },
        { icon: 'fa-fire', name: 'Chemical Processing', description: 'High-temperature reactors, fired heaters, pyrolysis units' },
        { icon: 'fa-hard-hat', name: 'Industrial Furnaces', description: 'Furnace rolls, radiant tubes, thermowell protection tubes' },
        { icon: 'fa-tachometer-alt', name: 'High-Pressure Systems', description: 'HP piping, steam headers, valve bodies, pressure vessels' }
      ],
      products: ['pipes', 'plates', 'flanges', 'buttweld-fittings', 'forged-fittings', 'round-bar'],
      packaging: [
        { icon: 'fa-fire', title: 'Heat Treatment Records', text: 'Complete heat treatment charts including normalizing, annealing, and PWHT data.' },
        { icon: 'fa-box', title: 'Secure Crating', text: 'Heavy-duty wooden crates with internal bracing for alloy steel products.' },
        { icon: 'fa-file-alt', title: 'Full Documentation', text: 'MTC, NDE reports, PMI test reports, and heat treatment certificates.' },
        { icon: 'fa-clock', title: 'Project Timelines', text: 'Coordinated delivery schedules to match project shutdowns and erection plans.' }
      ],
      citiesSupplied: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Pune', 'Ahmedabad', 'Surat', 'Vadodara', 'Jamnagar', 'Indore', 'Jaipur', 'Ludhiana', 'Coimbatore', 'Visakhapatnam', 'Bhopal', 'Nagpur', 'Thane', 'Raipur', 'Hazira', 'Mundra'],
      countriesExported: [
        { name: 'UAE', highlight: true },
        { name: 'Saudi Arabia', highlight: true },
        { name: 'Kuwait', highlight: true },
        { name: 'Qatar', highlight: true },
        { name: 'Oman', highlight: false },
        { name: 'Bahrain', highlight: false },
        { name: 'UK', highlight: true },
        { name: 'Germany', highlight: true },
        { name: 'Netherlands', highlight: false },
        { name: 'USA', highlight: true },
        { name: 'Canada', highlight: false },
        { name: 'Singapore', highlight: true },
        { name: 'Malaysia', highlight: false },
        { name: 'Indonesia', highlight: true },
        { name: 'Thailand', highlight: false },
        { name: 'South Korea', highlight: true },
        { name: 'South Africa', highlight: true },
        { name: 'Nigeria', highlight: false },
        { name: 'Egypt', highlight: false },
        { name: 'Kenya', highlight: false }
      ],
      faqs: [
        { question: 'What is Chrome Moly (Alloy Steel)?', answer: 'Chrome Moly (Chromium-Molybdenum) steel is an alloy steel that offers superior strength, hardness, and corrosion resistance at high temperatures. Common grades include ASTM A335 P5, P9, P11, P22, and P91 for elevated temperature service.' },
        { question: 'What is the maximum temperature for alloy steel pipes?', answer: 'ASTM A335 P22 can handle continuous service up to 590°C (1094°F), while P91 can handle up to 650°C (1202°F). Higher grades are available for specialized applications.' },
        { question: 'Do you supply alloy steel with IBR certification?', answer: 'Yes, we can supply alloy steel pipes and plates with IBR (Indian Boiler Regulations) certification for boiler and pressure vessel applications in India.' },
        { question: 'What is the difference between P22 and P91 alloy steel?', answer: 'P91 (9Cr-1Mo-V) offers higher creep strength and oxidation resistance compared to P22 (2.25Cr-1Mo). P91 is preferred for modern ultra-supercritical power plants operating at higher temperatures and pressures.' },
        { question: 'Do you provide PWHT for alloy steel fittings?', answer: 'Yes, we provide Post-Weld Heat Treatment (PWHT) for alloy steel fittings as per code requirements, with certified heat treatment charts and mechanical property verification.' }
      ],
      seo: {
        ogImage: '/images/products/pipes-tubes.png',
        canonicalUrl: 'https://sujalenterprise.com/materials/alloy-steel/'
      },
      relatedMaterials: ['mild-steel', 'stainless-steel']
    },
    {
      slug: 'ibr',
      name: 'IBR',
      metaTitle: 'IBR Certified Materials India | IBR Pipes, Plates, Flanges | Sujal Enterprise',
      metaDescription: 'IBR (Indian Boiler Regulations) certified materials including IBR pipes, plates, flanges, and fittings for boiler and pressure vessel applications. Mumbai, India.',
      keywords: ['IBR', 'IBR pipes', 'IBR plates', 'IBR flanges', 'boiler quality', 'Indian Boiler Regulations', 'IBR certified', 'pressure vessel materials'],
      shortDescription: 'IBR (Indian Boiler Regulations) certified pipes, plates, flanges, and fittings for boiler and pressure vessel applications in India.',
      longDescription: 'Sujal Enterprise supplies IBR (Indian Boiler Regulations) certified materials for boiler and pressure vessel applications. Our IBR range includes carbon steel pipes (ASTM A106 Gr. B), boiler quality plates (ASTM A516 Gr. 60/70), IBR flanges (ASME B16.5), and IBR fittings. All products come with IBR certification and complete material traceability for compliance with Indian boiler regulations.',
      heroImage: '/images/products/Mild%20Steel%20Plates%201.webp',
      galleryImages: ['/images/products/Mild%20Steel%20Plates%201.webp', '/images/products/Mild%20Steel%20Plates%202.webp', '/images/products/Mild%20Steel%20Plates%203.webp', '/images/products/pipes-tubes.png', '/images/products/flanges%201.png'],
      specificationHeading: 'IBR Standard, Size & Specification',
      cardImages: {
        'buttweld-fittings': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/ibr/ibr-pipe-fitting-manufacturer-india.jpg',
        'flanges': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/ibr/ibr-flanges-manufacturer-india.jpg',
        'round-bar': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/ibr/ibr-pipes-manufacturer-india.jpg',
        'pipes': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/ibr/ibr-round-bar-manufacturer-india.jpg',
        'forged-fittings': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/ibr/ibr-forged-fitting-manufacturer-india.jpg',
        'plates': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/ibr/ibr-plate-manufacturer-india.jpg',
        'sheets': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/ibr/ibr-sheet-manufacturer-india.jpg',
        'channel-angle': 'https://fourty60.net/suniltrading/assets/images/sunil-trading-img/materials/ibr/ibr-angles-channel-manufacturer-india.jpg'
      },
      specifications: [
        {
          material: 'IBR Grades\nASTM / ASME A 691 GRP1 CR , 1 1/4 CR , 2 1/4 CR , 5 CR , 9CR , 91',
          standard: 'ASTM, ASME, DIN, JIS, BS, and all International Standards',
          products: 'IBR Pipe Fitting, IBR Flanges, IBR Flanges, IBR Round Bar, IBR Pipes, IBR Forged Fitting, IBR Plates, IBR Sheets, IBR Channel, Angles.'
        }
      ],
      grades: ['ASTM A106 Gr. B (IBR)', 'ASTM A516 Gr. 60 (IBR)', 'ASTM A516 Gr. 70 (IBR)', 'IS 2062 (IBR)', 'ASTM A105 (IBR Flanges)', 'ASTM A234 WPB (IBR Fittings)'],
      applications: [
        { icon: 'fa-fire', name: 'Boilers', description: 'Water tube boilers, fire tube boilers, boiler drums, superheater headers' },
        { icon: 'fa-tachometer-alt', name: 'Pressure Vessels', description: 'Air receivers, steam drums, process vessels, autoclaves' },
        { icon: 'fa-exchange-alt', name: 'Heat Exchangers', description: 'Shell & tube exchangers, condensers, reboilers, feed water heaters' },
        { icon: 'fa-bolt', name: 'Power Plants', description: 'Steam piping, boiler headers, economizer tubes, superheater coils' },
        { icon: 'fa-industry', name: 'Industrial Steam Systems', description: 'Steam distribution, process steam lines, boiler feed lines' },
        { icon: 'fa-hard-hat', name: 'Process Industry', description: 'Chemical reactors, distillation columns, storage tanks (IBR certified)' }
      ],
      products: ['pipes', 'plates', 'flanges', 'buttweld-fittings', 'forged-fittings'],
      packaging: [
        { icon: 'fa-file-invoice', title: 'IBR Documentation', text: 'Complete IBR certificates, MTC, hydro test reports, and heat treatment charts.' },
        { icon: 'fa-box', title: 'Secure Handling', text: 'Specialized packaging with protective measures for IBR-certified products.' },
        { icon: 'fa-tag', title: 'IBR Marking', text: 'All products clearly marked with IBR registration number, grade, heat number, and size.' },
        { icon: 'fa-clock', title: 'Project Coordination', text: 'Scheduled deliveries aligned with boiler erection and inspection timelines.' }
      ],
      citiesSupplied: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Pune', 'Ahmedabad', 'Surat', 'Vadodara', 'Jamnagar', 'Indore', 'Jaipur', 'Ludhiana', 'Coimbatore', 'Visakhapatnam', 'Bhopal', 'Nagpur', 'Thane', 'Hazira', 'Mundra', 'Kochi'],
      countriesExported: [
        { name: 'UAE', highlight: true },
        { name: 'Saudi Arabia', highlight: true },
        { name: 'Kuwait', highlight: false },
        { name: 'Qatar', highlight: false },
        { name: 'Oman', highlight: false },
        { name: 'Bahrain', highlight: false },
        { name: 'UK', highlight: true },
        { name: 'Germany', highlight: false },
        { name: 'Netherlands', highlight: false },
        { name: 'USA', highlight: true },
        { name: 'Canada', highlight: false },
        { name: 'Singapore', highlight: true },
        { name: 'Malaysia', highlight: false },
        { name: 'Indonesia', highlight: false },
        { name: 'Thailand', highlight: false },
        { name: 'South Africa', highlight: true },
        { name: 'Nigeria', highlight: true },
        { name: 'Egypt', highlight: false },
        { name: 'Bangladesh', highlight: false },
        { name: 'Sri Lanka', highlight: false }
      ],
      faqs: [
        { question: 'What is IBR certification?', answer: 'IBR (Indian Boiler Regulations) certification is mandatory for materials used in boiler and pressure vessel applications in India. It ensures materials meet specific chemical, mechanical, and testing requirements as per the IBR 1950 regulations.' },
        { question: 'What products can be supplied with IBR certification?', answer: 'We supply IBR-certified seamless pipes (ASTM A106 Gr. B), boiler quality plates (ASTM A516 Gr. 60/70), flanges (ASTM A105), and buttweld/forged fittings with complete IBR documentation.' },
        { question: 'What is the difference between IBR and non-IBR materials?', answer: 'IBR materials undergo additional testing and inspection as per Indian Boiler Regulations, including IBR-specific chemical composition limits, mechanical properties, and third-party inspection by IBR-approved authorities.' },
        { question: 'Do you provide IBR documentation with every supply?', answer: 'Yes, every IBR supply includes the IBR certificate from the manufacturer, material test certificate (MTC), hydro test reports (where applicable), and heat treatment charts.' },
        { question: 'Can you arrange IBR inspection at our site?', answer: 'Yes, we can coordinate IBR inspection at your site or at our warehouse as required, with prior scheduling and proper documentation.' }
      ],
      seo: {
        ogImage: '/images/products/Mild%20Steel%20Plates%201.webp',
        canonicalUrl: 'https://sujalenterprise.com/materials/ibr/'
      },
      relatedMaterials: ['mild-steel', 'alloy-steel']
    }
  ],

  // =========================================================================
  // MATERIAL IMAGE MAP
  // =========================================================================
  materialImageMap: {
    'mild-steel': {
      image: '/images/products/MS%20Pipes%201.webp',
      galleryImages: ['/images/products/MS%20Pipes%201.webp', '/images/products/MS%20Pipes%202.webp', '/images/products/MS%20Pipes%203.webp', '/images/products/Mild%20Steel%20Plates%201.webp', '/images/products/Mild%20Steel%20sheet%201.webp']
    },
    'stainless-steel': {
      image: '/images/products/Stainless%20Steel%20Pipes%201.jpg',
      galleryImages: ['/images/products/Stainless%20Steel%20Pipes%201.jpg', '/images/products/Stainless%20Steel%20Pipes%202.webp', '/images/products/Stainless%20Steel%20Pipes%203.webp', '/images/products/Stainless%20Steel%20Plates.jpg', '/images/products/Stainless%20Steel%20Sheets.jpg', '/images/products/flanges%201.png']
    },
    'alloy-steel': {
      image: '/images/products/MS%20Pipes%201.webp',
      galleryImages: ['/images/products/MS%20Pipes%201.webp', '/images/products/pipes-tubes.png', '/images/products/Mild%20Steel%20Plates%201.webp']
    },
    'ibr': {
      image: '/images/products/Mild%20Steel%20Plates%201.webp',
      galleryImages: ['/images/products/Mild%20Steel%20Plates%201.webp', '/images/products/Mild%20Steel%20Plates%202.webp', '/images/products/Mild%20Steel%20Plates%203.webp', '/images/products/pipes-tubes.png', '/images/products/flanges%201.png']
    }
  },

  // =========================================================================
  // PRODUCT IMAGE MAP - Maps each product slug to its actual product images
  // from public/images/products/. The first image is used as the card thumbnail.
  // All images are used in the product detail page gallery.
  // =========================================================================
  productImageMap: {
    'flanges': {
      image: '/images/products/flanges%201.png',
      galleryImages: ['/images/products/flanges%201.png', '/images/products/Flanges%202.webp', '/images/products/Flanges%203.webp']
    },
    'round-bar': {
      image: '/images/products/Round%20Bars%201.jpg',
      galleryImages: ['/images/products/Round%20Bars%201.jpg', '/images/products/Round%20Bars%202.webp', '/images/products/Round%20Bars%203.webp']
    },
    'pipes': {
      image: '/images/products/pipes-tubes.png',
      galleryImages: ['/images/products/pipes-tubes.png', '/images/products/MS%20Pipes%201.webp', '/images/products/MS%20Pipes%202.webp', '/images/products/MS%20Pipes%203.webp']
    },
    'sheets': {
      image: '/images/products/Stainless%20Steel%20Sheets.jpg',
      galleryImages: ['/images/products/Stainless%20Steel%20Sheets.jpg', '/images/products/Stainless%20Steel%20Sheets%202.webp', '/images/products/Stainless%20Steel%20Sheets%203.jpeg']
    },
    'plates': {
      image: '/images/products/Mild%20Steel%20Plates%201.webp',
      galleryImages: ['/images/products/Mild%20Steel%20Plates%201.webp', '/images/products/Mild%20Steel%20Plates%202.webp', '/images/products/Mild%20Steel%20Plates%203.webp']
    },
    'buttweld-fittings': {
      image: '/images/products/buttweld-fittings.png',
      galleryImages: ['/images/products/buttweld-fittings.png', '/images/products/Pipe%20Fittings%201.webp', '/images/products/Pipe%20Fittings%202.png', '/images/products/Pipe%20Fittings%203.webp']
    },
    'forged-fittings': {
      image: '/images/products/forged-fittings.png',
      galleryImages: ['/images/products/forged-fittings.png', '/images/products/buttweld-fittings.png']
    },
    'channel-angle': {
      image: '/images/products/channel-angle.jpg',
      galleryImages: ['/images/products/channel-angle.jpg', '/images/products/channel-angle-2.png']
    }
  },

  // Homepage - Our Trusted Clients carousel
  clients: [
    { name: "Godrej", logo: "/images/clients/godrej.png" },
    { name: "BHEL", logo: "/images/clients/bhel.png" },
    { name: "Aditya Birla Group", logo: "/images/clients/aditya-birla.png" },
    { name: "Adani", logo: "/images/clients/adani.png" },
    { name: "Tata Steel", logo: "/images/clients/tata-steel.gif" },
    { name: "JSW Steel", logo: "/images/clients/jsw.png" },
    { name: "Jindal Steel", logo: "/images/clients/jindal.png" }
  ],

  // Homepage - Industries We Serve carousel
  industries: [
    { name: "Power Plant", image: "/images/industries/power-plant.jpg", description: "Certified steel products for boilers, turbines, piping and power generation infrastructure." },
    { name: "Pharma Industry", image: "/images/industries/pharma-industry.jpg", description: "Clean-grade stainless steel for hygienic pharmaceutical processing and cleanrooms." },
    { name: "Petroleum Industry", image: "/images/industries/petroleum-industry.jpg", description: "Corrosion-resistant steel solutions for refining, storage and distribution." },
    { name: "Paper Mills", image: "/images/industries/paper-mill.jpg", description: "Durable steel for pulp processing, rollers, structures and paper mill equipment." },
    { name: "Oil & Gas Industry", image: "/images/industries/oil-gas-industry.jpg", description: "High-pressure flanges, pipes and fittings for upstream and downstream operations." },
    { name: "Chemical Industry", image: "/images/industries/chemical-industry.jpg", description: "Reliable materials for aggressive chemical media and high-temperature service." },
    { name: "Automobile Industry", image: "/images/industries/automobile-industry.jpg", description: "Precision steel for automotive components, tooling and manufacturing lines." },
    { name: "Aerospace Industry", image: "/images/industries/aerospace-industry.jpg", description: "High-grade alloy steel for aerospace components and precision engineering." },
    { name: "Plumbing Industry", image: "/images/industries/plumbing.jpg", description: "Quality pipes, fittings and valves for modern plumbing and sanitary systems." }
  ]
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

/**
 * Resolves the correct material images for a given material object.
 * Uses the materialImageMap if available, otherwise falls back to the
 * material's existing heroImage/galleryImages fields.
 * 
 * @param {Object} material - A material detail object from config.materialDetails
 * @returns {{ image: string, galleryImages: string[] }}
 */
export function resolveMaterialImages(material) {
  if (!material) {
    return { image: '', galleryImages: [] };
  }

  const imageMap = config.materialImageMap || {};
  const slug = material.slug || '';

  if (imageMap[slug]) {
    return {
      image: imageMap[slug].image,
      galleryImages: imageMap[slug].galleryImages
    };
  }

  return {
    image: material.heroImage || '',
    galleryImages: (material.galleryImages && material.galleryImages.length > 0) ? material.galleryImages : (material.heroImage ? [material.heroImage] : [])
  };
}
