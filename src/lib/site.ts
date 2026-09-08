export const site = {
  name: "Barn Central",
  tagline: "Your go-to barn and barndominium builder of Middle Tennessee.",
  pitch: "We design to your needs and wants. We supply and construct on your site.",
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
  { href: "/options", label: "Options" },
  { href: "/about", label: "About" },
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
  "Smyrna",
  "Westmoreland",
  "Nashville",
  "Franklin",
  "Murfreesboro",
  "Springfield",
  "Goodlettsville",
  "Mt. Juliet",
  "Lafayette",
] as const;

export const buildingTypes = [
  { id: "barn", label: "Barn / Storage" },
  { id: "shop", label: "Garage / Shop" },
  { id: "barndo", label: "Barndo / Home" },
] as const;

export type FramingId = "gabled" | "gabled-unsym" | "single-slope" | "lean-to";
export type FoundationId = "post-dirt" | "post-gravel" | "slab" | "split";
export type WalkDoorId = "0" | "1" | "2" | "3plus";
export type WindowId = "none" | "few" | "living";
export type CupolaId = "none" | "one" | "two";
export type InsulationId = "none" | "condensation" | "blanket" | "spray" | "living";

export const framingTypes = [
  {
    id: "gabled" as const,
    label: "Gabled",
    note: "Equal roof slopes. Peak on center. The standard barn and shop.",
  },
  {
    id: "gabled-unsym" as const,
    label: "Gabled unsymmetrical",
    note: "Peak offset. One long slope, one short. More height on one eave.",
  },
  {
    id: "single-slope" as const,
    label: "Single slope",
    note: "One roof plane, high wall to low wall.",
  },
  {
    id: "lean-to" as const,
    label: "Lean-to",
    note: "A lean-to off a gabled main building — porch, extra stall, or covered equipment on the eave.",
  },
] as const;

export const foundationTypes = [
  {
    id: "post-dirt" as const,
    label: "Sunken post on dirt",
    note: "Posts set in graded dirt. The pad stays soil.",
  },
  {
    id: "post-gravel" as const,
    label: "Sunken post on gravel",
    note: "Posts set through a crushed-stone pad.",
  },
  {
    id: "slab" as const,
    label: "Solid concrete floor",
    note: "A full concrete floor in the building.",
  },
  {
    id: "split" as const,
    label: "Split — gravel storage + concrete",
    note: "Gravel in the storage bays. Concrete in the living or shop of the same building.",
  },
] as const;

export const walkDoorOptions = [
  { id: "0" as const, label: "None" },
  { id: "1" as const, label: "One" },
  { id: "2" as const, label: "Two" },
  { id: "3plus" as const, label: "Three +" },
] as const;

export const windowOptions = [
  { id: "none" as const, label: "None" },
  { id: "few" as const, label: "A few" },
  { id: "living" as const, label: "Living wall" },
] as const;

export const ridgeVentOptions = [
  { id: "yes" as const, label: "Ridge vent" },
  { id: "no" as const, label: "No ridge vent" },
] as const;

export const cupolaOptions = [
  { id: "none" as const, label: "None" },
  { id: "one" as const, label: "One" },
  { id: "two" as const, label: "Two" },
] as const;

export const insulationIntents = [
  { id: "none" as const, label: "None yet" },
  { id: "condensation" as const, label: "Condensation control only" },
  { id: "blanket" as const, label: "Blanket" },
  { id: "spray" as const, label: "Spray foam" },
  { id: "living" as const, label: "Living / barndo package" },
] as const;

export const wallColors = [
  { id: "red", label: "Red", hex: "#8E3B2C", roofId: "charcoal" },
  { id: "bright-red", label: "Bright Red", hex: "#C62828", roofId: "charcoal" },
  { id: "marine", label: "Marine", hex: "#1B4F72", roofId: "charcoal" },
  { id: "tan", label: "Tan", hex: "#C8B07A", roofId: "red" },
  { id: "brown", label: "Brown", hex: "#555C3A", roofId: "charcoal" },
  { id: "charcoal", label: "Charcoal", hex: "#5D6168", roofId: "black" },
  { id: "white", label: "White", hex: "#F2F1ED", roofId: "charcoal" },
  { id: "ivory", label: "Ivory", hex: "#EFE6C6", roofId: "charcoal" },
  { id: "beige", label: "Beige", hex: "#A9A394", roofId: "brown" },
  { id: "black", label: "Black", hex: "#1A1A1A", roofId: "charcoal" },
  { id: "burgundy", label: "Burgundy", hex: "#4A2230", roofId: "charcoal" },
  { id: "evergreen", label: "Evergreen", hex: "#1E5A36", roofId: "charcoal" },
  {
    id: "galvalume",
    label: "Galvanized / Galvalume",
    hex: "#C5C5C5",
    roofId: "charcoal",
    metallic: true,
  },
] as const;

export type WallColor = (typeof wallColors)[number];

export const optionHub = [
  {
    href: "/colors" as const,
    title: "Colors",
    blurb: "Wall, roof, and trim from the same chart.",
  },
  {
    href: "/framing" as const,
    title: "Framing",
    blurb: "Gable, unsymmetrical, single slope, lean-to. Pad and posts.",
  },
  {
    href: "/accessories" as const,
    title: "Accessories",
    blurb: "Walk doors, windows, vents, cupolas — on the shell, not a fourth building.",
  },
  {
    href: "/insulation" as const,
    title: "Insulation",
    blurb: "Condensation control through living-space packages. Climate Zone 4A.",
  },
] as const;

export function colorById(id: string): WallColor {
  return wallColors.find((c) => c.id === id) ?? wallColors.find((c) => c.id === "white")!;
}

export function framingById(id: string) {
  return framingTypes.find((f) => f.id === id) ?? framingTypes[0];
}

export function foundationById(id: string) {
  return foundationTypes.find((f) => f.id === id) ?? foundationTypes[1];
}

export function walkDoorById(id: string) {
  return walkDoorOptions.find((d) => d.id === id) ?? walkDoorOptions[0];
}

export function windowById(id: string) {
  return windowOptions.find((w) => w.id === id) ?? windowOptions[0];
}

export function cupolaById(id: string) {
  return cupolaOptions.find((c) => c.id === id) ?? cupolaOptions[0];
}

export function insulationById(id: string) {
  return insulationIntents.find((i) => i.id === id) ?? insulationIntents[0];
}

export const processSteps = [
  {
    n: "01",
    title: "Walk the need",
    body: "Call or send sizes. We design to your needs and wants — equipment, livestock, living space, or storage — and what the site will actually allow.",
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
    image: "/buildings/gravel-pad.jpg",
    objectPosition: "50% 50%",
  },
  {
    n: "04",
    title: "Raise it on your site",
    body: "We supply and construct on your site. Frame, roof, siding, openings. Porches and lean-tos go on as designed.",
    image: "/buildings/fb-porch-left.jpg",
    objectPosition: "48% 42%",
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
    title: "Barns / Storage",
    href: "/services#barns",
    image: "/buildings/barn-open-gable.jpg",
    objectPosition: "58% 50%",
    blurb:
      "Livestock, hay, equipment, RV, boat, and tractor storage. Open bays, enclosed walls, or a mix — sized to the work.",
    bullets: [
      "Open bays, enclosed walls, or a mix on the gable or eave",
      "Hay, livestock, RV, boat, and tractor storage",
      "Lean-tos and porches in timber or steel",
      "Sized to the equipment you actually park",
    ],
  },
  {
    id: "shops",
    title: "Garage / Shops",
    href: "/services#shops",
    image: "/buildings/shop-gallatin-red.jpg",
    objectPosition: "42% 55%",
    blurb:
      "Garages and enclosed shops with overheads sized for the trucks and tools you run. Clear span, gravel or slab.",
    bullets: [
      "Garages and enclosed shops with overheads sized to the work",
      "Clear-span floors, walk doors, and room for lifts",
      "Concrete, gravel, insulation, and openings as the job needs them",
      "Lean-tos, wainscot, and a color that reads from the road",
    ],
  },
  {
    id: "barndos",
    title: "Barndos / Homes",
    href: "/services#barndos",
    image: "/buildings/barndo-tan-balcony.jpg",
    objectPosition: "46% 58%",
    blurb:
      "A shell built to finish into living space — shop now, live later, or both. Windows, porches, and wall height that leave room to live.",
    bullets: [
      "A shell that can finish into living space",
      "Windows, porches, and wall height that leave room for a loft",
      "Shop on one end, house on the other — or all of one, then the other",
      "We design it. We supply it. We raise it on your site.",
    ],
  },
] as const;
