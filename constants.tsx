
import { Service } from './types';

export const BUSINESS_INFO = {
  name: "M Barbershop",
  address: "13881 Metrotech Dr #D, Chantilly, VA 20151",
  location: "Sully Place Shopping Center",
  phone: "(703) 488-9932",
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=13881+Metrotech+Dr+D+Chantilly+VA+20151",
  reviewUrl: "https://www.google.com/maps/place/M+Barbershop/@38.8941189,-77.4275937,17z/data=!4m8!3m7!1s0x89b646875b7fa7c1:0xda834e37ad5e3221!8m2!3d38.8941189!4d-77.4250188!9m1!1b1!16s%2Fg%2F1tcv_98g?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
  hours: {
    monFri: "09:00 — 19:00",
    sat: "08:00 — 17:00",
    sun: "09:00 — 16:00"
  },
  facilities: [
    { label: "Wheelchair accessible entrance", icon: "♿" },
    { label: "Parking available", icon: "🚗" },
    { label: "Restroom available", icon: "🚻" },
    { label: "Walk-ins welcome", icon: "🚶" },
    { label: "Expert Barbers", icon: "✂️" }
  ]
};

export const SERVICES: Service[] = [
  {
    id: 'm1',
    name: "Classic Gentleman's Cut",
    description: "Tailored precision cut with a hot towel finish and straight razor neck shave.",
    duration: "30 min",
    category: 'Barber'
  },
  {
    id: 'm2',
    name: "The M Signature Fade",
    description: "High-definition skin fade using master-grade clippers and foil finish.",
    duration: "45 min",
    category: 'Barber'
  },
  {
    id: 'm3',
    name: "Beard Sculpture",
    description: "Detailed beard shaping with aromatic oils and sharp line-up.",
    duration: "20 min",
    category: 'Barber'
  },
  {
    id: 'm4',
    name: "Straight Razor Shave",
    description: "The ultimate traditional experience. Multi-step hot towels and luxury cream.",
    duration: "40 min",
    category: 'Barber'
  },
  {
    id: 'm5',
    name: "Buzz Cut & Lineup",
    description: "Uniform length all over with sharp edges for a clean, low-maintenance look.",
    duration: "20 min",
    category: 'Barber'
  },
  {
    id: 'm6',
    name: "Young King Cut",
    description: "Precision styling for the next generation. For clients 12 and under.",
    duration: "30 min",
    category: 'Barber'
  }
];
