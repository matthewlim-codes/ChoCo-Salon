export type ServiceCategory = {
  id: "perms" | "color" | "cut";
  label: string;
  eyebrow: string;
  description: string;
  services: {
    name: string;
    detail: string;
    duration: string;
    price: string;
  }[];
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Style Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=85",
    alt: "Bright modern salon station with mirrors and styling chairs",
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=85",
    alt: "Glossy brunette hair being styled in a premium salon",
  },
  {
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=700&q=85",
    alt: "Soft layered haircut with polished K-beauty finish",
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: "perms",
    label: "Signature Perms",
    eyebrow: "Volume, movement, control",
    description:
      "Specialized Korean perm techniques for soft S-curls, face-framing volume, and controlled silhouettes.",
    services: [
      {
        name: "Digital Perm",
        detail: "Heat-shaped volume waves with a soft salon finish",
        duration: "150-210 min",
        price: "From $280",
      },
      {
        name: "Setting Perm",
        detail: "Bouncy shape, curtain movement, and polished texture",
        duration: "150-180 min",
        price: "From $240",
      },
      {
        name: "Down Perm",
        detail: "Clean sides and controlled roots for a sharper profile",
        duration: "45-75 min",
        price: "From $90",
      },
    ],
  },
  {
    id: "color",
    label: "Color & Highlights",
    eyebrow: "Dimensional shine",
    description:
      "Trend-led color work with glossy tone, strategic brightness, and hair-health-first finishing.",
    services: [
      {
        name: "Balayage",
        detail: "Seamless hand-painted brightness for lived-in dimension",
        duration: "180-240 min",
        price: "From $320",
      },
      {
        name: "K-Gloss Color",
        detail: "Glass-hair shine refresh with customized neutral tones",
        duration: "90-120 min",
        price: "From $160",
      },
      {
        name: "Trend Tones",
        detail: "Ash brown, beige blonde, smoky mauve, and seasonal color",
        duration: "150-240 min",
        price: "From $260",
      },
    ],
  },
  {
    id: "cut",
    label: "Cut & Style",
    eyebrow: "Shape and polish",
    description:
      "Precision silhouettes, airy layers, and repair rituals designed around your daily styling routine.",
    services: [
      {
        name: "Director Cut",
        detail: "Advanced consultation, precision shape, wash, and finish",
        duration: "75-90 min",
        price: "From $110",
      },
      {
        name: "Stylist Cut",
        detail: "Custom cut with soft texture, face framing, and blowout",
        duration: "60-75 min",
        price: "From $80",
      },
      {
        name: "Repair Treatment",
        detail: "Bond-building hydration for shine, softness, and resilience",
        duration: "45-60 min",
        price: "From $95",
      },
    ],
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?auto=format&fit=crop&w=800&q=85",
    alt: "Curtain bangs and glossy long layers",
    title: "Curtain Bang Layers",
    tag: "Face-framing cut",
  },
  {
    src: "https://images.unsplash.com/photo-1534445538923-ab38438550d2?auto=format&fit=crop&w=800&q=85",
    alt: "Ash-toned balayage with soft waves",
    title: "Ash Beige Balayage",
    tag: "Dimensional color",
  },
  {
    src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=85",
    alt: "Sleek polished hair with glass shine",
    title: "Glass Hair Finish",
    tag: "K-gloss treatment",
  },
  {
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=85",
    alt: "Soft volume perm with airy waves",
    title: "Soft Volume Perm",
    tag: "Digital perm",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=85",
    alt: "Modern textured bob with clean shape",
    title: "Textured Mini Bob",
    tag: "Precision cut",
  },
  {
    src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=800&q=85",
    alt: "Long sleek layers with bright studio lighting",
    title: "Sleek Long Layers",
    tag: "Layer refresh",
  },
  {
    src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=85",
    alt: "Natural brunette waves with airy texture",
    title: "Airy Wave Shape",
    tag: "Setting perm",
  },
  {
    src: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=85",
    alt: "Modern layered haircut with clean movement",
    title: "Soft Layer Flow",
    tag: "Director cut",
  },
];

export const reviews = [
  {
    name: "Mina K.",
    service: "Down Perm",
    quote:
      "Finally found a place that knows exactly how to do a flawless down perm. The shape is clean without looking stiff.",
  },
  {
    name: "Rachel L.",
    service: "Digital Perm",
    quote:
      "My digital perm came out soft, glossy, and easy to style. The consultation was detailed and honest.",
  },
  {
    name: "Daniel C.",
    service: "Director Cut",
    quote:
      "The director cut fixed my layers and made my hair look intentional again. Super precise and modern.",
  },
  {
    name: "Sophie P.",
    service: "K-Gloss Color",
    quote:
      "The ash brown tone is perfect for my skin tone. No brassiness, just expensive-looking shine.",
  },
];

export const businessInfo = {
  address: "10879 N Wolfe Rd, Cupertino, CA",
  hours: "Open daily: 10:00 AM - 7:30 PM",
  phone: "(408) 555-0198",
  bookingUrl: "https://www.fresha.com/",
};
