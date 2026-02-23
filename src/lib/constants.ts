/**
 * Shared data constants — single source of truth for content
 * used across multiple route files.
 */

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote:
      "Alex is great to work with and communicates thoroughly. Will highly recommend A-line to friends and family!",
    author: "Tori S.",
    role: "Business Owner",
    rating: 5,
  },
  {
    quote:
      "Professional, sincere, honest and has always done quality work for us. You will not go wrong if you give A-Line Striping a call.",
    author: "Steven L.",
    role: "15-Year Client",
    rating: 5,
  },
  {
    quote:
      "Amazing team! They saved us from an unfinished job and were quick, accurate, and friendly!",
    author: "First Baptist Church",
    role: "Olive Branch, MS",
    rating: 5,
  },
  {
    quote:
      "Fantastic Job!!! I am an artist, and this is ART to me!!! Quality Work.",
    author: "Rick M.",
    role: "Verified Customer",
    rating: 5,
  },
  {
    quote:
      "Amazing team! They saved us from an unfinished job and were quick, accurate, and friendly! Thank you!!",
    author: "Michael Carpenter",
    role: "First Baptist Church, Olive Branch",
    rating: 5,
  },
  {
    quote:
      "A-Line Striping did an awesome job for Creekwood Town Homes! Quality Work. Highly recommend.",
    author: "Trudy Rush H.",
    role: "HOA Property Manager",
    rating: 5,
  },
] as const;

export interface FAQ {
  question: string;
  answer: string;
}

export const SERVICE_FAQS = {
  parkingLotStriping: [
    {
      question: "How often should a parking lot be re-striped?",
      answer:
        "For most commercial lots, re-striping is recommended every 12–24 months, depending on traffic volume, climate exposure, and wear.",
    },
    {
      question: "Do you handle ADA compliance and fire-lane markings?",
      answer:
        "Yes. We provide full ADA-compliant striping, accessible parking zones, fire-lane painting, and safety signage to meet local code requirements.",
    },
    {
      question:
        "Can you customize the layout to fit my lot size and traffic flow?",
      answer:
        "Absolutely. Every striping plan is tailored to your lot's dimensions, traffic patterns, and intended use.",
    },
    {
      question: "Is sealcoating available along with striping?",
      answer:
        "Yes. We offer combined asphalt sealcoating and striping services to maximize pavement life and improve line visibility.",
    },
  ],
  warehouseFloorStriping: [
    {
      question: "How long does warehouse striping last?",
      answer:
        "The lifespan depends on floor conditions, traffic levels, and paint type. In most industrial settings, professional striping lasts 1–3 years. High-traffic forklift areas may require periodic touch-ups.",
    },
    {
      question: "What type of paint or coating do you use?",
      answer:
        "We use industrial-grade, highly durable coatings formulated for warehouses, including epoxy, polyurethane, and fast-drying acrylics designed to resist abrasion and chemicals.",
    },
    {
      question: "Do you offer both interior and exterior line striping?",
      answer:
        "Yes. We stripe warehouse floors, loading docks, parking lots, truck lanes, staging areas, and industrial yards.",
    },
    {
      question: "Do I need to shut down my warehouse during striping?",
      answer:
        "Not always. Many projects can be completed in sections. We offer overnight and weekend service options to minimize disruption.",
    },
  ],
  asphaltSealcoating: [
    {
      question: "What is asphalt sealcoating?",
      answer:
        "Sealcoating is the process of applying a protective coating over asphalt surfaces to safeguard them from weather damage, traffic wear, UV rays, oil spills, and moisture.",
    },
    {
      question: "Why is sealcoating important?",
      answer:
        "Sealcoating protects the surface, slows deterioration, prevents cracking, and extends the lifespan of your pavement by 5-10+ years.",
    },
    {
      question: "How often should asphalt be sealcoated?",
      answer:
        "Most asphalt surfaces should be sealcoated every 2 to 3 years, depending on traffic volume, climate, and wear.",
    },
    {
      question: "Does sealcoating make asphalt look new again?",
      answer:
        "Yes. Sealcoating restores a deep black, smooth finish that dramatically improves curb appeal.",
    },
  ],
  layoutDesign: [
    {
      question: "Do I need a blueprint before you can design a layout?",
      answer:
        "No. Our team handles everything from measurements to the final design. We visit your property, assess the space, and create a custom layout from scratch — no existing blueprint required.",
    },
    {
      question: "Can you redesign an existing parking lot layout?",
      answer:
        "Absolutely. We regularly redesign existing lots to increase capacity, improve flow, or bring them into ADA compliance. We'll evaluate your current setup and recommend the best improvements.",
    },
    {
      question: "How much can a new layout increase my parking capacity?",
      answer:
        "Depending on the current configuration, a professionally designed layout can increase parking capacity by 10-25% without expanding the physical lot size. We optimize stall sizing, angles, and lane widths to maximize every square foot.",
    },
    {
      question: "How long does the layout design process take?",
      answer:
        "Most projects are completed within 1-2 weeks from the initial site visit to the final design. Complex commercial properties may take slightly longer. We work with your timeline to minimize disruption.",
    },
  ],
  precisionLinework: [
    {
      question: "What types of signage do you install?",
      answer:
        "We install a full range of parking lot signage including stop signs, speed limit signs, directional arrows, ADA accessible parking signs, fire lane markers, reserved parking signs, and custom stenciled markings like company logos and numbered stalls.",
    },
    {
      question: "Are your signs compliant with local fire and building codes?",
      answer:
        "Yes. All our signage and markings are installed to meet local, state, and federal regulations, including ADA requirements, fire code specifications, and DOT standards. We stay current with code changes to ensure full compliance.",
    },
    {
      question: "How long do painted markings and signs last?",
      answer:
        "With DOT-approved, commercial-grade materials, our painted markings typically last 1-3 years depending on traffic volume and weather exposure. Thermoplastic markings and metal signs last significantly longer. We back all work with our 1-Year warranty.",
    },
    {
      question: "Can you add custom logos or specialty markings?",
      answer:
        "Absolutely. We create custom stencils for company logos, numbered parking stalls, reserved/VIP spaces, EV charging spots, and any other specialty marking you need. Our team works with you to design markings that match your brand and property requirements.",
    },
  ],
} as const satisfies Record<string, readonly FAQ[]>;
