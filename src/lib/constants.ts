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
      question:
        "What can I expect from A-Line's professional parking lot striping services?",
      answer:
        "You can expect clean, durable, code-conscious striping tailored to your property's layout, traffic flow, and safety needs. Our team handles parking stalls, directional arrows, fire lanes, ADA-compliant markings, and other essential details with commercial-grade materials and reliable workmanship.",
    },
    {
      question: "What's the difference between line striping and full restriping?",
      answer:
        "Line striping can refer to adding or refreshing specific markings, while full restriping typically means re-laying the entire traffic pattern across a lot. A full restriping is often needed when lines have faded too far, layouts have changed, or compliance updates are required.",
    },
    {
      question:
        "How do I know when it's time to contact a parking lot striping company?",
      answer:
        "Repainting your parking lot at least once a year is the most cost-effective approach. Allowing the lines to fade completely can require a full re-layout, which is significantly more expensive than maintaining a regular striping schedule.",
    },
    {
      question: "Does the season affect when I should schedule line striping?",
      answer:
        "Yes. Temperature, humidity, and surface conditions all affect how well striping materials cure and adhere. We help schedule work during the right conditions so the finished markings last longer and look cleaner.",
    },
    {
      question: "How long does it take to re-stripe a parking lot?",
      answer:
        "It depends on the size of the lot and the requirements needed to meet your custom layout, traffic, and compliance needs. Smaller lots can move quickly, while larger or more complex sites may require phased scheduling.",
    },
  ],
  warehouseFloorStriping: [
    {
      question: "How do warehouse striping needs differ from outdoor lots?",
      answer:
        "Warehouse striping must account for forklift traffic, pedestrian separation, storage zones, hazard areas, and operational workflow in a much tighter environment than outdoor lots. The materials and layout planning also need to support heavier wear and more specific safety requirements.",
    },
    {
      question:
        "What kind of paint/materials do you use? How long will the markings last?",
      answer:
        "We use professional materials from Sherwin-Williams, PPG, and Farrell Calhoun. Our professional markings typically last 2 to 3 years, depending on the surface conditions, traffic levels, and your facility's operational requirements.",
    },
    {
      question: "Do you offer both interior and exterior line striping?",
      answer:
        "Yes. In addition to warehouse floors, we also stripe loading docks, parking lots, truck lanes, staging areas, and industrial yards, providing consistent, safety-focused markings inside and out.",
    },
    {
      question: "Do I need to shut down my warehouse during striping?",
      answer:
        "Not always. Many projects can be completed in sections, so your operations remain active. We work with your schedule to reduce disruption, including overnight and weekend service options.",
    },
  ],
  asphaltSealcoating: [
    {
      question: "What is asphalt sealcoating?",
      answer:
        "Sealcoating is the process of applying a protective coating over asphalt surfaces to safeguard them from weather damage, traffic wear, UV rays, oil spills, and moisture. It enhances durability while improving the appearance of your pavement.",
    },
    {
      question: "Why is sealcoating important?",
      answer:
        "Over time, asphalt dries out, fades, and begins to crack due to sun exposure, water intrusion, and heavy use. Sealcoating protects the surface, slows deterioration, prevents cracking, and extends the lifespan of your pavement.",
    },
    {
      question: "How often should asphalt be sealcoated?",
      answer:
        "Most asphalt surfaces should be sealcoated every 2 to 3 years, depending on traffic volume, climate, and overall wear. Commercial parking lots with heavy traffic may require more frequent maintenance.",
    },
    {
      question: "What type of sealcoat do you use?",
      answer:
        "We use commercial-grade, highly durable asphalt emulsions and coal-tar-based sealers, when permitted, to provide the strongest protection. We choose the best material based on your surface type and usage.",
    },
    {
      question: "Does sealcoating make asphalt look new again?",
      answer:
        "Yes. Sealcoating restores a deep black, smooth finish that dramatically improves curb appeal and makes old asphalt look refreshed and uniform.",
    },
  ],
  layoutDesign: [
    {
      question: "What is parking lot layout design?",
      answer:
        "Parking lot layout design is the process of planning stall placement, traffic flow, ADA-compliant areas, entrances, exits, and safety zones. A professional design maximizes parking capacity, improves navigation, and ensures the lot meets local and federal regulations.",
    },
    {
      question: "Why is a professionally designed parking lot important?",
      answer:
        "A well designed layout improves safety, supports efficient traffic flow, reduces congestion, prevents accidents, and ensures the property complies with ADA and municipal standards. It also enhances customer experience and helps protect your pavement longevity.",
    },
    {
      question: "Can you redesign an existing parking lot layout?",
      answer:
        "Yes. If your current layout is outdated, inefficient, or non-compliant, we can redesign it to improve traffic flow, increase capacity, and ensure ADA compliance.",
    },
    {
      question: "What makes A-Line Striping, Inc. different?",
      answer:
        "Our designers combine real-world experience with compliance knowledge, delivering layouts that are safe, efficient, visually clear, and designed for long-term functionality. All work is backed by a 1-year workmanship warranty.",
    },
  ],
  precisionLinework: [
    {
      question: "What is precision linework and why is it important?",
      answer:
        "Precision linework refers to accurately painted markings used to guide vehicles, pedestrians, and equipment through a property. High-quality linework improves safety, prevents confusion, enhances traffic flow, and creates a more organized and professional environment.",
    },
    {
      question: "What types of signage do you install?",
      answer:
        "We install a wide variety of traffic and safety signs, including stop signs, yield signs, one-way signs, ADA handicap parking signs, fire lane signs, directional and wayfinding signage, loading zone and no-parking signs, warehouse safety and hazard signs, and custom commercial and industrial signage.",
    },
    {
      question: "What types of line markings do you provide?",
      answer:
        "We provide all forms of precision linework, including parking stall lines, directional arrows, stop bars, crosswalks, pedestrian lanes, loading zones, fire lanes, warehouse floor markings, safety and hazard lines, and custom stencils and lettering.",
    },
    {
      question: "How do I know what signage my property needs?",
      answer:
        "Our team performs a full on-site evaluation to assess traffic flow, pedestrian activity, safety requirements, ADA compliance, and your property's layout and usage.",
    },
    {
      question: "Do you provide custom signage?",
      answer:
        "Yes. We can design and install custom signs with your branding, color preferences, specific text, unique symbols, or property-specific requirements.",
    },
  ],
} as const satisfies Record<string, readonly FAQ[]>;
