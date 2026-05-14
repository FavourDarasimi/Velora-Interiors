export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  slug: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  whatsappNumber: string;
  studio: string;
  hours: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  icon: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "How do I start a project with Veylora?",
    answer:
      "Simply reach out through our contact form or WhatsApp. We'll schedule an initial consultation to discuss your vision, budget, and timeline — no obligation.",
    icon: "FileText",
  },
  {
    id: "2",
    question: "What is the typical project timeline?",
    answer:
      "Timelines vary by scope. A full residential design typically takes 8–16 weeks from concept to completion. We'll provide a detailed schedule during our consultation.",
    icon: "Clock",
  },
  {
    id: "3",
    question: "Do you offer virtual consultations?",
    answer:
      "Yes. We offer virtual consultations via video call for clients outside Lagos or those who prefer remote collaboration. We can review spaces, share mood boards, and discuss concepts entirely online.",
    icon: "Monitor",
  },
  {
    id: "4",
    question: "What areas do you serve?",
    answer:
      "We're based in Lagos, Nigeria, and handle projects nationwide and across West Africa. For international projects, we collaborate with trusted local partners on the ground.",
    icon: "MapPin",
  },
  {
    id: "5",
    question: "How do I book a consultation?",
    answer:
      "You can book directly through our contact form, send us an email, or chat with us on WhatsApp. We typically respond within 24 hours.",
    icon: "Calendar",
  },
  {
    id: "6",
    question: "What is your pricing structure?",
    answer:
      "Our pricing is project-based and tailored to each client's needs. We offer different service tiers from full turnkey design to hourly consultations. Contact us for a custom quote.",
    icon: "CreditCard",
  },
];

export const contactInfo: ContactInfo = {
  email: "hello@veylora.com",
  phone: "+234 xxx xxx xxxx",
  whatsapp: "Chat with us",
  whatsappNumber: "234XXXXXXXXX",
  studio: "Lagos, Nigeria",
  hours: "Mon – Fri: 9:00 AM – 6:00 PM",
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Penthouse Residence",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    description: "A minimalist penthouse with panoramic city views.",
    slug: "skyline-penthouse",
  },
  {
    id: "2",
    title: "Coastal Villa",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    description: "Seaside luxury blending indoor and outdoor living.",
    slug: "azure-coastal-villa",
  },
  {
    id: "3",
    title: "Corporate Headquarters",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    description: "Modern office design fostering creativity and collaboration.",
    slug: "helios-tower",
  },
  {
    id: "4",
    title: "Boutique Hotel",
    category: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
    description: "Boutique hotel interiors with art-deco influences.",
    slug: "ivory-hotel",
  },
];

export const services: Service[] = [
  {
    id: "1",
    title: "Residential Design",
    description:
      "Bespoke home interiors tailored to your lifestyle, from concept to completion.",
  },
  {
    id: "2",
    title: "Commercial Design",
    description:
      "Strategic spatial planning and design for offices, retail, and hospitality.",
  },
  {
    id: "3",
    title: "Consultation & Styling",
    description:
      "Expert guidance on color palettes, furnishings, and spatial layout.",
  },
];

export interface Value {
  id: string;
  title: string;
  description: string;
}

export interface Stat {
  id: string;
  number: string;
  label: string;
}

export const values: Value[] = [
  {
    id: "1",
    title: "Artisanal Craftsmanship",
    description:
      "Every detail is meticulously considered and executed by our master artisans.",
  },
  {
    id: "2",
    title: "Bespoke Approach",
    description:
      "No two projects are alike. We tailor every design to your unique vision and lifestyle.",
  },
  {
    id: "3",
    title: "Timeless Aesthetic",
    description:
      "We create spaces that transcend trends \u2014 classic, enduring, and effortlessly elegant.",
  },
];

export const stats: Stat[] = [
  { id: "1", number: "12+", label: "Years Experience" },
  { id: "2", number: "200+", label: "Projects Completed" },
  { id: "3", number: "98%", label: "Client Satisfaction" },
  { id: "4", number: "15+", label: "Awards Received" },
];

export interface ServiceDetail extends Service {
  features: string[];
}

export interface ServiceMetric {
  id: string;
  number: string;
  label: string;
}

export const serviceMetrics: ServiceMetric[] = [
  { id: "1", number: "200+", label: "Projects Completed" },
  { id: "2", number: "98%", label: "Client Satisfaction" },
  { id: "3", number: "48h", label: "Consultation Turnaround" },
];

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export const serviceDetails: ServiceDetail[] = [
  {
    id: "1",
    title: "Residential Design",
    description:
      "Bespoke home interiors tailored to your lifestyle, from concept to completion.",
    features: [
      "Full-scale interior design & decoration",
      "Custom furniture & joinery design",
      "Colour, material & finish selection",
      "Lighting design & procurement",
      "Project management & installation",
    ],
  },
  {
    id: "2",
    title: "Commercial Design",
    description:
      "Strategic spatial planning and design for offices, retail, and hospitality.",
    features: [
      "Workplace strategy & space planning",
      "Brand environment design",
      "FF&E specification & procurement",
      "Hospitality & retail interior design",
      "Compliance & building regulations",
    ],
  },
  {
    id: "3",
    title: "Consultation & Styling",
    description:
      "Expert guidance on colour palettes, furnishings, and spatial layout.",
    features: [
      "One-on-one design consultation",
      "Room layout & space planning",
      "Furniture sourcing & styling",
      "Colour palette & material advisory",
      "Virtual design concepts & mood boards",
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "1",
    step: 1,
    title: "Discovery",
    description:
      "We begin with an in-depth consultation to understand your vision, lifestyle, and aesthetic preferences.",
  },
  {
    id: "2",
    step: 2,
    title: "Design",
    description:
      "Our team crafts a tailored design concept with mood boards, floor plans, and 3D visualizations.",
  },
  {
    id: "3",
    step: 3,
    title: "Execution",
    description:
      "We oversee every detail — from sourcing materials to managing tradespeople — ensuring flawless delivery.",
  },
  {
    id: "4",
    step: 4,
    title: "Reveal",
    description:
      "Your space is styled and finalized. We hand over an interior that exceeds expectations.",
  },
];

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  location: string;
  slug: string;
  description: string;
  image: string;
  images: string[];
  story?: { challenge: string; solution: string; result: string };
  materials?: string[];
}

export interface FeaturedProjectData {
  title: string;
  location: string;
  slug: string;
  category: string;
  description: string;
  story: { challenge: string; solution: string; result: string };
  materials: string[];
  image: string;
  images: string[];
}

export interface BeforeAfterData {
  title: string;
  description: string;
  before: string;
  after: string;
}

export const categories = [
  "All",
  "Residential",
  "Commercial",
  "Hospitality",
  "Luxury",
  "Modern",
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "p1",
    title: "The Oak Residence",
    category: "Residential",
    location: "Lagos, Nigeria",
    slug: "oak-residence",
    description:
      "A warm contemporary home designed to balance elegance and comfort through soft textures, natural lighting, and curated furnishings.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    ],
    story: {
      challenge:
        "The client wanted a home that felt both modern and deeply inviting \u2014 a space where their young family could grow, entertain, and unwind without the stiffness often associated with contemporary design.",
      solution:
        "We layered natural materials \u2014 white oak, brushed brass, and textured linen \u2014 against a soft neutral backdrop. Generous glazing floods the interiors with natural light, while custom joinery provides warmth without clutter.",
      result:
        "A serene, light-filled home that feels both sophisticated and livable. Every room balances purposeful design with effortless comfort, earning the project a feature in Architectural Digest Africa.",
    },
    materials: ["White Oak", "Natural Stone", "Brushed Brass", "Textured Linen", "Hand-tufted Wool"],
  },
  {
    id: "p2",
    title: "Skyline Penthouse",
    category: "Luxury",
    location: "Dubai, UAE",
    slug: "skyline-penthouse",
    description:
      "A minimalist penthouse with panoramic city views, featuring bespoke furniture and a neutral palette accented in warm bronze.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&q=80",
    ],
    story: {
      challenge:
        "The client wanted a penthouse that felt luxurious but not ostentatious \u2014 a minimalist sanctuary with panoramic city views as the focal point.",
      solution:
        "We used a restrained palette of warm neutrals, custom low-profile furniture, and floor-to-ceiling glass treatments that frame the skyline without competing with it.",
      result:
        "A serene, gallery-like penthouse where the Dubai skyline takes centre stage. The design feels both expansive and intimate \u2014 luxury through subtraction.",
    },
    materials: ["Carrara Marble", "Brushed Steel", "Velvet", "Smoked Glass", "European Oak"],
  },
  {
    id: "p3",
    title: "Azure Coastal Villa",
    category: "Residential",
    location: "Malibu, USA",
    slug: "azure-coastal-villa",
    description:
      "Seaside luxury blending indoor and outdoor living with organic materials and a breezy coastal palette.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&q=80",
    ],
    story: {
      challenge:
        "The existing home felt disconnected from its stunning coastal surroundings \u2014 small, compartmentalised rooms that turned inward rather than embracing the ocean.",
      solution:
        "We opened up the entire floor plan, specified breezy linen and organic stone finishes, and created seamless indoor-outdoor transitions with disappearing glass walls.",
      result:
        "A relaxed coastal retreat where every room connects to the Pacific. The villa now feels like an effortless extension of the beach itself.",
    },
    materials: ["Whitewashed Oak", "Natural Linen", "Terrazzo", "Rattan", "Limestone"],
  },
  {
    id: "p4",
    title: "The Ivory Hotel",
    category: "Hospitality",
    location: "Marrakech, Morocco",
    slug: "ivory-hotel",
    description:
      "A boutique hotel interior blending art-deco influences with Moroccan craftsmanship and warm ambient lighting.",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    ],
    story: {
      challenge:
        "The owners wanted a boutique experience that honoured Moroccan heritage while appealing to modern luxury travellers with contemporary expectations.",
      solution:
        "We blended traditional zellige tilework and carved plaster with clean-lined contemporary furnishings. Warm amber lighting and layered textures create an intimate, transportive atmosphere.",
      result:
        "A critically acclaimed boutique hotel that balances cultural authenticity with modern comfort \u2014 earning a spot on Cond\u00e9 Nast Traveller\u2019s Hot List.",
    },
    materials: ["Zellige Tile", "Tadelakt Plaster", "Brushed Brass", "Silk", "Cedar Wood"],
  },
  {
    id: "p5",
    title: "Helios Tower Offices",
    category: "Commercial",
    location: "Lagos, Nigeria",
    slug: "helios-tower",
    description:
      "A modern office environment designed to foster creativity, collaboration, and well-being through biophilic design.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
    ],
    story: {
      challenge:
        "The existing office felt sterile and uninspiring \u2014 poor natural light, no collaboration spaces, and a layout that discouraged movement and interaction.",
      solution:
        "We introduced biophilic design elements throughout, opened up the floor plate with glass-walled meeting pods, and added living green walls with task-appropriate circadian lighting.",
      result:
        "Employee satisfaction scores rose by over 40%. The space now attracts top talent and consistently impresses visiting clients and partners.",
    },
    materials: ["Recycled Glass", "Living Moss Walls", "Satin Aluminium", "Acoustic Felt", "Bamboo"],
  },
  {
    id: "p6",
    title: "Noir Lounge",
    category: "Hospitality",
    location: "Abuja, Nigeria",
    slug: "noir-lounge",
    description:
      "A moody, sophisticated lounge interior defined by dark tones, sculptural lighting, and velvet textures.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
    ],
    story: {
      challenge:
        "A dark, underutilised basement space needed to feel intimate and sophisticated rather than oppressive and cave-like.",
      solution:
        "We used layered lighting \u2014 sculptural pendants, warm sconces, and hidden LED strips \u2014 paired with deep velvet banquettes, dark-stained oak, and brushed brass accents to create depth without darkness.",
      result:
        "Abuja\u2019s most sought-after nightlife destination. The space feels moody, sophisticated, and exclusive \u2014 exactly the atmosphere the client envisioned.",
    },
    materials: ["Dark-stained Oak", "Velvet", "Brushed Brass", "Smoked Mirror", "Travertine"],
  },
  {
    id: "p7",
    title: "Garden House",
    category: "Residential",
    location: "Ibadan, Nigeria",
    slug: "garden-house",
    description:
      "A nature-connected home that dissolves the boundary between interior and exterior through glass walls and organic forms.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    ],
    story: {
      challenge:
        "The homeowners wanted to live surrounded by nature without sacrificing modern comfort, privacy, or protection from the elements.",
      solution:
        "We designed the home around a central courtyard with floor-to-ceiling glass walls on all sides, integrating indoor planters, natural stone floors, and a warm earthy palette.",
      result:
        "A tranquil sanctuary where the boundary between indoors and outdoors dissolves completely. The garden becomes part of every room.",
    },
    materials: ["Terracotta", "Travertine", "Reclaimed Teak", "Linen", "Wrought Iron"],
  },
  {
    id: "p8",
    title: "Mirabelle Apartment",
    category: "Modern",
    location: "Dubai, UAE",
    slug: "mirabelle-apartment",
    description:
      "A contemporary urban apartment defined by clean lines, neutral layers, and curated art pieces.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&q=80",
    ],
    story: {
      challenge:
        "A compact apartment needed to feel spacious and purposeful, with distinct zones for living, working, and entertaining \u2014 all within a tight footprint.",
      solution:
        "We used a minimalist palette with mirrored surfaces to amplify natural light, custom joinery for concealed storage, and a sculptural curved sofa to define the living zone without walls.",
      result:
        "The apartment feels twice its size. Every square metre is purposeful, elegant, and liveable \u2014 proving that great design transcends square footage.",
    },
    materials: ["High-gloss Lacquer", "Mirrored Steel", "Wool Boucl\u00e9", "Glass", "White Oak"],
  },
];

export const featuredProject: FeaturedProjectData = {
  title: "The Oak Residence",
  location: "Lagos, Nigeria",
  slug: "oak-residence",
  category: "Residential",
  description:
    "A warm contemporary home designed to balance elegance and comfort through soft textures, natural lighting, and curated furnishings.",
  story: {
    challenge:
      "The client wanted a home that felt both modern and deeply inviting — a space where their young family could grow, entertain, and unwind without the stiffness often associated with contemporary design.",
    solution:
      "We layered natural materials — white oak, brushed brass, and textured linen — against a soft neutral backdrop. Generous glazing floods the interiors with natural light, while custom joinery provides warmth without clutter.",
    result:
      "A serene, light-filled home that feels both sophisticated and livable. Every room balances purposeful design with effortless comfort, earning the project a feature in Architectural Digest Africa.",
  },
  materials: ["White Oak", "Natural Stone", "Brushed Brass", "Textured Linen", "Hand-tufted Wool"],
  image:
    "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&q=80",
  images: [
    "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1600&q=80",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
  ],
};

export const beforeAfter: BeforeAfterData = {
  title: "Kitchen & Living Transformation",
  description:
    "A dark, compartmentalised kitchen and living area was reimagined into an open-plan space filled with light, warmth, and flow.",
  before:
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  after:
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
};

export const portfolioTestimonials: Testimonial[] = [
  {
    id: "t4",
    name: "Oluwaseun Adebayo",
    role: "Homeowner, The Oak Residence",
    content:
      "Veylora transformed our family home into a sanctuary. The attention to detail — from the joinery to the lighting — is exceptional. We wake up every morning and fall in love with our space all over again.",
    avatar:
      "https://ui-avatars.com/api/?name=Oluwaseun+Adebayo&background=8B5E34&color=fff&size=80",
  },
  {
    id: "t5",
    name: "Amara Okafor",
    role: "CEO, Helios Towers",
    content:
      "Our office redesign by Veylora didn't just look beautiful — it changed how our team works. Collaboration improved, wellbeing increased, and clients are consistently impressed.",
    avatar:
      "https://ui-avatars.com/api/?name=Amara+Okafor&background=8B5E34&color=fff&size=80",
  },
  {
    id: "t6",
    name: "Fatima Al-Rashid",
    role: "Owner, The Ivory Hotel",
    content:
      "Veylora understood our vision for a boutique experience that honours Moroccan heritage while feeling entirely contemporary. Our guests constantly compliment the interiors.",
    avatar:
      "https://ui-avatars.com/api/?name=Fatima+Al-Rashid&background=8B5E34&color=fff&size=80",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Homeowner, Chelsea",
    content:
      "Veylora transformed our apartment into a sanctuary. Every detail was considered with such care. We couldn't be happier.",
    avatar:
      "https://ui-avatars.com/api/?name=Sarah+Mitchell&background=8B5E34&color=fff&size=80",
  },
  {
    id: "2",
    name: "James Cooper",
    role: "CEO, Cooper & Co.",
    content:
      "Our office redesign by Veylora increased employee satisfaction and productivity. A truly professional team.",
    avatar:
      "https://ui-avatars.com/api/?name=James+Cooper&background=8B5E34&color=fff&size=80",
  },
  {
    id: "3",
    name: "Elena Rossi",
    role: "Hotel Director, Rossini",
    content:
      "The boutique hotel project exceeded our expectations. Veylora brought a level of sophistication that our guests rave about.",
    avatar:
      "https://ui-avatars.com/api/?name=Elena+Rossi&background=8B5E34&color=fff&size=80",
  },
];
