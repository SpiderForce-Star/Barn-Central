export const site = {
  name: "Barn Central",
  tagline: "Your go-to barn and barndominium builder of Middle Tennessee.",
  phone: "(615) 693-9925",
  phoneHref: "tel:+16156939925",
  email: "sales@thebarncentral.com",
  emailHref: "mailto:sales@thebarncentral.com",
  facebook: "https://www.facebook.com/profile.php?id=61587244332260",
  region: "Middle Tennessee",
} as const;

export const nav = [
  { href: "/projects", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/quote", label: "Quote" },
] as const;

export const counties = [
  "Sumner",
  "Davidson",
  "Wilson",
  "Robertson",
  "Trousdale",
  "Macon",
  "Smith",
  "Rutherford",
  "Williamson",
  "Cheatham",
  "Dickson",
  "Montgomery",
  "Other",
] as const;

export const cities = [
  "Bethpage",
  "Gallatin",
  "Hendersonville",
  "Portland",
  "White House",
  "Lebanon",
  "Hartsville",
  "Nashville",
  "Franklin",
  "Murfreesboro",
  "Springfield",
  "Goodlettsville",
  "Mt. Juliet",
  "Lafayette",
] as const;

export const buildingTypes = [
  { id: "barn", label: "Barn" },
  { id: "barndo", label: "Barndominium" },
  { id: "venue", label: "Venue" },
  { id: "warehouse", label: "Warehouse" },
  { id: "storage", label: "Storage / shop" },
  { id: "pavilion", label: "Open pavilion" },
  { id: "other", label: "Something else" },
] as const;

export const wallColors = [
  { id: "white", label: "Barn white", wall: "#f3efe6", roof: "#2b2b2b", trim: "#1a1a1a" },
  { id: "gray", label: "Charcoal gray", wall: "#8b8f8d", roof: "#242424", trim: "#1a1a1a" },
  { id: "red", label: "Barn red", wall: "#8a2f2a", roof: "#1c1c1c", trim: "#141414" },
  { id: "beige", label: "Clay beige", wall: "#c4b49a", roof: "#3a3530", trim: "#2a241e" },
  { id: "brown", label: "Saddle brown", wall: "#6b4a2f", roof: "#241c16", trim: "#1a120c" },
  { id: "black", label: "Midnight", wall: "#2a2a2a", roof: "#141414", trim: "#0c0c0c" },
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Walk the need",
    body: "Call or send sizes. We talk through use — equipment, living space, events, storage — and what the site will actually allow.",
  },
  {
    n: "02",
    title: "Lock the spec",
    body: "Width, length, eave, porches, doors, color, slab. You get a clear building, not a vague estimate.",
  },
  {
    n: "03",
    title: "Prep the pad",
    body: "Dirt work and a crushed-stone pad come first. A square, drained pad is what keeps a metal building honest.",
  },
  {
    n: "04",
    title: "Raise the steel",
    body: "Frame, roof, siding, openings. Porches and lean-tos go on as designed — wood posts, metal, or both.",
  },
  {
    n: "05",
    title: "Hand it over",
    body: "Doors, trim, and a walk-through. You get a building that is ready to work.",
  },
] as const;

export const services = [
  {
    id: "barns",
    title: "Barns",
    href: "/services#barns",
    image: "/buildings/hero-bethpage.jpg",
    blurb: "Equipment barns, livestock, hay, and shop space. Open bays, overhead doors, or a mix.",
  },
  {
    id: "barndos",
    title: "Barndominiums",
    href: "/services#barndos",
    image: "/buildings/r1b-wrap-porch.jpg",
    blurb: "Shop now, live later — or both. Windows, porches, and a shell built to finish out.",
  },
  {
    id: "venues",
    title: "Venues",
    href: "/services#venues",
    image: "/buildings/fb-wide.jpg",
    blurb: "Open pavilions and enclosed event barns for farms that host more than livestock.",
  },
  {
    id: "warehouses",
    title: "Warehouses",
    href: "/services#warehouses",
    image: "/buildings/gray-four-door.jpg",
    blurb: "Clear-span shops and warehouses with overhead doors sized for the work you do.",
  },
  {
    id: "storage",
    title: "Storage",
    href: "/services#storage",
    image: "/buildings/r1c-two-bay.jpg",
    blurb: "RV, boat, tractor, and inventory storage that outlasts a rented unit.",
  },
] as const;
