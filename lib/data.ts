export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
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

export const projects: Project[] = [
  {
    id: "1",
    title: "Penthouse Residence",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    description: "A minimalist penthouse with panoramic city views.",
  },
  {
    id: "2",
    title: "Coastal Villa",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    description: "Seaside luxury blending indoor and outdoor living.",
  },
  {
    id: "3",
    title: "Corporate Headquarters",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    description: "Modern office design fostering creativity and collaboration.",
  },
  {
    id: "4",
    title: "Boutique Hotel",
    category: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
    description: "Boutique hotel interiors with art-deco influences.",
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

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Homeowner, Chelsea",
    content:
      "Veylora transformed our apartment into a sanctuary. Every detail was considered with such care. We couldn't be happier.",
    avatar:
      "https://ui-avatars.com/api/?name=Sarah+Mitchell&background=C8A24A&color=fff&size=80",
  },
  {
    id: "2",
    name: "James Cooper",
    role: "CEO, Cooper & Co.",
    content:
      "Our office redesign by Veylora increased employee satisfaction and productivity. A truly professional team.",
    avatar:
      "https://ui-avatars.com/api/?name=James+Cooper&background=C8A24A&color=fff&size=80",
  },
  {
    id: "3",
    name: "Elena Rossi",
    role: "Hotel Director, Rossini",
    content:
      "The boutique hotel project exceeded our expectations. Veylora brought a level of sophistication that our guests rave about.",
    avatar:
      "https://ui-avatars.com/api/?name=Elena+Rossi&background=C8A24A&color=fff&size=80",
  },
];
