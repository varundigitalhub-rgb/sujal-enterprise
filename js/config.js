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
    gstin: "27ACEPY9541Q1ZI",
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
      image: "/images/products/MS%20Pipes%201.webp",
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
      technicalSpecifications: [
        { label: 'Standards', value: 'ASME B16.5, ASME B16.47, BS 4504, DIN, EN 1092, IS 6392' },
        { label: 'Pressure Classes', value: 'Class 150, 300, 600, 900, 1500, 2500 / PN 6 to PN 420' },
        { label: 'Materials', value: 'SS 304/L, SS 316/L, SS 321, SS 310, SS 347, Duplex 2205, Super Duplex 2507, Carbon Steel A105, Alloy Steel F11/F22/F91' },
        { label: 'Types', value: 'Slip-On, Weld Neck, Blind, Socket Weld, Threaded, Lap Joint, Orifice, Ring Type Joint, Spectacle Blind, Figure-8' },
        { label: 'Facing', value: 'Raised Face (RF), Flat Face (FF), Ring Type Joint (RTJ), Male & Female (M&F), Tongue & Groove (T&G)' },
        { label: 'Size Range', value: '1/2" to 60" (15 NB to 1500 NB)' },
        { label: 'Thickness Schedule', value: 'Sch 10, Sch 20, Sch 40, Sch 80, Sch 160, XXS' },
        { label: 'Testing', value: 'Hydrostatic, Pneumatic, NDT, PMI, Dye Penetrant, Ultrasonic' },
        { label: 'Certifications', value: 'ISO 9001:2015, PED 2014/68/EU, IBR, NACE MR0103/MR0175' }
      ],
      topSelling: [
        { name: 'Slip-On Flanges', shortDesc: 'Class 150, RF, SS 304/316, 1/2" to 24"' },
        { name: 'Weld Neck Flanges', shortDesc: 'Class 600, RF, Carbon Steel A105, 2" to 36"' },
        { name: 'Blind Flanges', shortDesc: 'Class 300, FF, SS 316L, 4" to 48"' },
        { name: 'Socket Weld Flanges', shortDesc: 'Class 1500, RF, Alloy Steel F22, 1/2" to 3"' }
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
      technicalSpecifications: [
        { label: 'Standards', value: 'ASTM A276, ASTM A479, ASTM A582, ASTM A108, BS 970, DIN 671, EN 10088' },
        { label: 'Diameter Range', value: '3 mm to 500 mm (1/8" to 20")' },
        { label: 'Length', value: '3 MTR to 6 MTR (Custom lengths available)' },
        { label: 'Materials', value: 'SS 304/L, SS 316/L, SS 321, SS 310, SS 347, Duplex 2205, Super Duplex 2507, Carbon Steel AISI 1018/1045, Alloy Steel AISI 4140/4340' },
        { label: 'Finishes', value: 'Bright (Peeled & Polished), Black (Hot Rolled), Cold Drawn, Centreless Ground, Turned' },
        { label: 'Shapes', value: 'Round, Hexagonal, Square, Flat' },
        { label: 'Tolerances', value: 'h9, h11, h8 as per ASTM A484' },
        { label: 'Mechanical Properties', value: 'Tensile, Yield, Elongation, Hardness (Brinell/Rockwell) as per applicable standards' },
        { label: 'Packaging', value: 'Hexagon bundles, wooden crates, or as per customer specification' }
      ],
      topSelling: [
        { name: 'SS 304 Round Bars', shortDesc: '6 mm to 200 mm, Bright Finish, ASTM A276' },
        { name: 'SS 316L Round Bars', shortDesc: '10 mm to 150 mm, Peeled & Polished' },
        { name: 'EN8 Carbon Steel Bars', shortDesc: '12 mm to 300 mm, Black Finish' },
        { name: 'Duplex 2205 Round Bars', shortDesc: '20 mm to 250 mm, Solution Annealed' }
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
      technicalSpecifications: [
        { label: 'Standards', value: 'ASTM A312, A106, A53, A335, API 5L, IS 1239, IS 3589, EN 10216, DIN 1629' },
        { label: 'Size Range', value: '1/4" to 48" (6 NB to 1200 NB)' },
        { label: 'Schedule', value: 'Sch 5, Sch 10S, Sch 40, Sch 80, Sch 160, XXS' },
        { label: 'Materials', value: 'SS 304/L, SS 316/L, SS 321, SS 310, Duplex 2205, Carbon Steel A106 Gr. B, Alloy Steel A335 P5/P11/P22/P91' },
        { label: 'Types', value: 'Seamless (SMLS), ERW, LSAW, HSAW, Cold Drawn, Hot Finished' },
        { label: 'End Types', value: 'Plain End, Beveled End, Threaded & Coupled' },
        { label: 'Length', value: 'Single Random (SR), Double Random (DR), Custom Cut Lengths' },
        { label: 'Coating', value: 'Bare, Galvanized, FBE, 3LPE, 3LPP, Coal Tar Epoxy' },
        { label: 'Testing', value: 'Hydrostatic, NDT, Ultrasonic, Eddy Current, PMI, Bend Test, Flattening Test' }
      ],
      topSelling: [
        { name: 'SS 304 Seamless Pipes', shortDesc: 'ASTM A312, Sch 40, 1/2" to 12"' },
        { name: 'Carbon Steel Pipes', shortDesc: 'ASTM A106 Gr. B, Sch 80, 2" to 24"' },
        { name: 'Alloy Steel Pipes', shortDesc: 'ASTM A335 P22, Sch 160, 4" to 16"' },
        { name: 'GI Pipes', shortDesc: 'IS 1239, Medium & Heavy Class, 15 NB to 150 NB' }
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
      technicalSpecifications: [
        { label: 'Standards', value: 'ASTM A240, ASTM A167, EN 10088, IS 6911, IS 513, DIN 17441' },
        { label: 'Thickness Range', value: '0.3 mm to 12 mm (30 GA to 1/2")' },
        { label: 'Width Range', value: '1000 mm to 2500 mm' },
        { label: 'Length Range', value: '2000 mm to 6000 mm (Custom lengths available)' },
        { label: 'Materials', value: 'SS 304/304L, SS 316/316L, SS 321, SS 310, SS 430, Carbon Steel IS 1079, ASTM A1011, Alloy Steel ASTM A387' },
        { label: 'Finishes', value: '2B (Cold Rolled), BA (Bright Annealed), No.4 Brushed, Mirror (8K), HL (Hairline), SATIN' },
        { label: 'Special Types', value: 'Chequered, Perforated, Shim, Clad, Galvanized, Pre-painted' },
        { label: 'Edge Types', value: 'Mill Edge, Slit Edge, Sheared Edge, Deburred' },
        { label: 'Packing', value: 'Wooden crates with VCI paper interleaving for overseas shipments' }
      ],
      topSelling: [
        { name: 'SS 304 Sheets', shortDesc: '2B Finish, 1.5 mm x 4\' x 8\', Protective Film' },
        { name: 'SS 316L Sheets', shortDesc: 'No.4 Brushed, 2 mm x 5\' x 10\'' },
        { name: 'Chequered Sheets', shortDesc: 'SS 304, 3 mm, Diamond Pattern, 4\' x 8\'' },
        { name: 'Galvanized Sheets', shortDesc: 'Carbon Steel, 1.2 mm, AZ Coated, 4\' x 10\'' }
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
      technicalSpecifications: [
        { label: 'Standards', value: 'ASTM A240, A516, A387, A131, A36, IS 2062, EN 10028, DIN 17155' },
        { label: 'Thickness Range', value: '5 mm to 200 mm (1/4" to 8")' },
        { label: 'Width Range', value: '1500 mm to 5000 mm' },
        { label: 'Length Range', value: '3000 mm to 12000 mm' },
        { label: 'Materials', value: 'SS 304/304L, SS 316/316L, SS 321, SS 310, Carbon Steel IS 2062/ASTM A36/A516 Gr. 70, Alloy Steel ASTM A387 Gr. 11/22/91' },
        { label: 'Types', value: 'Hot Rolled, Cold Rolled, Clad, Diamond, Chequered, Boiler Quality, Ship Building' },
        { label: 'Surface Condition', value: 'As-Rolled, Pickled, Blasted & Primed, Machined' },
        { label: 'Testing', value: 'UT, PMI, Mechanical Testing, Chemical Analysis, Bend Test, Impact Test' },
        { label: 'Certifications', value: 'ISO 9001, PED, IBR, NACE, DNV/GL/Lloyds for shipbuilding grades' }
      ],
      topSelling: [
        { name: 'IS 2062 Gr. A Plates', shortDesc: '12 mm to 50 mm, 2500 x 12000 mm' },
        { name: 'SS 304L Plates', shortDesc: '6 mm to 30 mm, 2000 x 6000 mm' },
        { name: 'ASTM A516 Gr. 70', shortDesc: '20 mm to 80 mm, Boiler Quality, NACE' },
        { name: 'Ship Building Plates', shortDesc: 'ASTM A131 AH36, 10 mm to 60 mm' }
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
      technicalSpecifications: [
        { label: 'Standard', value: 'ASME B16.9, ASME B16.28, MSS SP-43, DIN 2605, EN 10253' },
        { label: 'Size Range', value: '1/2" to 48" (15 NB to 1200 NB)' },
        { label: 'Schedule', value: 'Sch 5S, Sch 10S, Sch 40S, Sch 80S, Sch 160, XXS' },
        { label: 'Materials', value: 'SS 304/L, SS 316/L, SS 321, SS 310, SS 347, Duplex 2205, Carbon Steel A234 WPB/WPC, Alloy Steel A420 WPL6, A234 WP1/WP5/WP9/WP11/WP22/WP91' },
        { label: 'Types', value: '90° Elbow LR/SR, 45° Elbow, Equal Tee, Reducing Tee, Concentric Reducer, Eccentric Reducer, Pipe Cap, Stub End, Return Bend, Cross, Pipe Bend' },
        { label: 'Wall Thickness', value: 'Sch 5 to Sch 160 as per ASME B36.10/B36.19' },
        { label: 'End Type', value: 'Buttweld (BW), Beveled End as per ASME B16.25' },
        { label: 'Surface Finish', value: 'Pickled & Passivated, Shot Blasted, Galvanized, as required' },
        { label: 'Testing', value: 'Dimensional, Hydrostatic, PMI, DPT, Radiography, UT on request' }
      ],
      topSelling: [
        { name: '90° Elbows LR', shortDesc: 'SS 304, Sch 40, 2" to 12", ASME B16.9' },
        { name: 'Concentric Reducers', shortDesc: 'Carbon Steel A234 WPB, Sch 80, 6" x 4"' },
        { name: 'Equal Tees', shortDesc: 'SS 316L, Sch 10S, 3" to 10"' },
        { name: 'Pipe Caps', shortDesc: 'Alloy Steel WP22, Sch 160, 4" to 16"' }
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
      technicalSpecifications: [
        { label: 'Standard', value: 'ASME B16.11, BS 3799, DIN 2982, EN 10241' },
        { label: 'Size Range', value: '1/8" to 4" (6 NB to 100 NB)' },
        { label: 'Pressure Classes', value: 'Class 2000, Class 3000, Class 6000, Class 9000' },
        { label: 'Materials', value: 'SS 304/304L, SS 316/316L, SS 321, SS 310, Carbon Steel A105, Alloy Steel A182 F11/F22/F91, Duplex F51/F53' },
        { label: 'Types', value: '90° Elbow SW/TD, 45° Elbow SW/TD, Equal Tee SW/TD, Reducing Tee, Coupling Full/Reducing, Union, Pipe Nipple, Cap, Bushing, Plug, Cross, Hex Nipple, Swage Nipple' },
        { label: 'Thread Type', value: 'NPT (National Pipe Thread), BSP (British Standard Pipe), BSPT' },
        { label: 'Ends', value: 'Socket Weld (SW), Threaded (NPT/BSP), Combination SW x TD' },
        { label: 'Surface Finish', value: 'Black, Galvanized, Zinc Plated, Pickled & Passivated' },
        { label: 'Marking', value: 'Grade, Pressure Class, Size, Heat Code, Manufacturer\'s Mark' }
      ],
      topSelling: [
        { name: 'Socket Weld 90° Elbows', shortDesc: 'SS 316L, Class 3000, 1/2" to 2"' },
        { name: 'Threaded Full Couplings', shortDesc: 'Carbon Steel A105, Class 6000, NPT, 1/4" to 2"' },
        { name: 'Hex Pipe Nipples', shortDesc: 'SS 304, Sch 80, 1/2" to 3", NPT Both Ends' },
        { name: 'Socket Weld Unions', shortDesc: 'Alloy Steel F22, Class 3000, 1/2" to 2"' }
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
      technicalSpecifications: [
        { label: 'Standards', value: 'IS 2062, IS 808, IS 3954, ASTM A36, ASTM A572, EN 10025' },
        { label: 'Materials', value: 'Carbon Steel IS 2062 Gr. A/B/C, ASTM A36, ASTM A572 Gr. 50/60, SS 304/L, SS 316/L' },
        { label: 'Channel Sizes', value: 'ISMC 75 x 40 to ISMC 400 x 100 (ISJB, ISJC, ISMB also available)' },
        { label: 'Angle Sizes', value: 'ISA 20 x 20 x 3 to ISA 200 x 200 x 25 (Equal & Unequal)' },
        { label: 'Length', value: '6 MTR to 12 MTR (Standard), Custom lengths on request' },
        { label: 'Surface Condition', value: 'Black (As-rolled), Galvanized, Painted, Shot Blasted' },
        { label: 'Special Profiles', value: 'Slotted Channels (Unistrut), Heavy Duty Channels, Lipped Channels, C-Channels' },
        { label: 'Tolerances', value: 'As per IS 1852, ASTM A6/A6M' },
        { label: 'Marking', value: 'Rolled-in marks with grade, size, heat number, and mill identification' }
      ],
      topSelling: [
        { name: 'ISMC 100 Channels', shortDesc: 'IS 2062 Gr. A, 6 MTR, Black Finish' },
        { name: 'ISA 50x50x6 Angles', shortDesc: 'Equal Angle, IS 2062, 6 MTR' },
        { name: 'SS 304 Channels', shortDesc: 'C-Channel, 100 x 50, 6 MTR, Brushed' },
        { name: 'Slotted Channels', shortDesc: 'Unistrut Type, 41x41, Hot Dipped Galvanized' }
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
      specifications: [
        { label: 'Standards', value: 'IS 1239, IS 2062, IS 3589, ASTM A36, ASTM A106 Gr. B, ASTM A53, EN 10025' },
        { label: 'Product Forms', value: 'Pipes (Seamless/ERW/GI), Plates, Sheets, Coils, Channels, Angles, Flanges, Buttweld Fittings, Forged Fittings' },
        { label: 'Pipe Sizes', value: '15 NB to 600 NB (1/2" to 24")' },
        { label: 'Plate Thickness', value: '5 mm to 200 mm' },
        { label: 'Sheet Thickness', value: '0.5 mm to 12 mm' },
        { label: 'Structural Sections', value: 'ISMC 75-400, ISA 20x20 to 200x200, ISMB 100-600' },
        { label: 'Surface Finish', value: 'Black, Galvanized, Painted, Shot Blasted' },
        { label: 'Certifications', value: 'ISO 9001:2015, IBR (on request)' }
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
      specifications: [
        { label: 'Standards', value: 'ASTM A312, A240, A276, A479, A240, A167, ASME B16.5, B16.9, B16.11' },
        { label: 'Grades', value: 'SS 304/304L, SS 316/316L, SS 321, SS 310, SS 347, SS 430, Duplex 2205, Super Duplex 2507' },
        { label: 'Product Forms', value: 'Pipes (Seamless/Welded), Flanges, Buttweld Fittings, Forged Fittings, Sheets, Plates, Round Bars, Channels, Angles' },
        { label: 'Pipe Schedule', value: 'Sch 5S, Sch 10S, Sch 40S, Sch 80S, Sch 160' },
        { label: 'Flange Classes', value: 'Class 150 to Class 2500' },
        { label: 'Sheet Finishes', value: '2B, BA, No.4 Brushed, Mirror (8K), Hairline' },
        { label: 'Round Bar Diameter', value: '3 mm to 500 mm' },
        { label: 'Certifications', value: 'ISO 9001:2015, PED 2014/68/EU, NACE MR0175/MR0103' }
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
      specifications: [
        { label: 'Standards', value: 'ASTM A335, A182, A234, A387, A479, A691, ASME B16.5, B16.9, B16.11' },
        { label: 'Grades', value: 'ASTM A335 P5, P9, P11, P22, P91 / ASTM A182 F11, F22, F91 / ASTM A387 Gr. 11, 22, 91' },
        { label: 'Product Forms', value: 'Seamless Pipes, Flanges, Buttweld Fittings, Forged Fittings, Plates, Round Bars' },
        { label: 'Pipe Size', value: '1/4" to 36" (6 NB to 900 NB)' },
        { label: 'Pipe Schedule', value: 'Sch 40, Sch 80, Sch 120, Sch 160, XXS' },
        { label: 'Temperature Range', value: 'Up to 650°C (1202°F) continuous service' },
        { label: 'Applications', value: 'High-pressure steam, boiler tubes, superheater lines, refinery piping' },
        { label: 'Certifications', value: 'ISO 9001:2015, PED 2014/68/EU, NACE MR0175/MR0103, IBR' }
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
      specifications: [
        { label: 'Standards', value: 'IBR 1950, ASTM A106 Gr. B, ASTM A516 Gr. 60/70, ASME B16.5, ASME B16.9, ASME B16.11, IS 2062, IS 2002' },
        { label: 'IBR Forms', value: 'Pipes (Seamless), Plates (Boiler Quality), Flanges, Buttweld Fittings, Forged Fittings' },
        { label: 'Pipe Size', value: '1/2" to 24" (15 NB to 600 NB)' },
        { label: 'Pipe Schedule', value: 'Sch 40, Sch 80, Sch 120, Sch 160' },
        { label: 'Plate Thickness', value: '5 mm to 150 mm' },
        { label: 'Flange Classes', value: 'Class 150 to Class 2500' },
        { label: 'IBR Registration', value: 'All products supplied with IBR certificate from approved manufacturers' },
        { label: 'Testing', value: 'Hydrostatic, UT, PMI, Mechanical Testing, Chemical Analysis as per IBR requirements' }
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
      image: '/images/products/MS%20Pipes%201.webp',
      galleryImages: ['/images/products/MS%20Pipes%201.webp']
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
