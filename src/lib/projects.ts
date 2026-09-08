export type ProjectCategory = "barn" | "shop" | "barndo";

export type Project = {
  id: string;
  title: string;
  location?: string;
  spec?: string;
  features?: string[];
  category: ProjectCategory;
  image: string;
  images?: string[];
  objectPosition?: string;
  featured?: boolean;
  notes: string;
};

export const projects: Project[] = [
  {
    id: "tan-balcony",
    title: "Shop and living, with balcony",
    spec: "Tan walls · red roof · three overheads · covered balcony · posted February 4, 2026",
    features: ["Three overheads", "Covered balcony", "Tan walls", "Red roof"],
    category: "barndo",
    image: "/buildings/barndo-tan-balcony.jpg",
    objectPosition: "46% 58%",
    featured: true,
    notes:
      "From Barn Central’s Facebook, February 4, 2026. Tan vertical-rib walls, red roof, three overheads on the shop end, covered balcony on the living wing.",
  },
  {
    id: "gallatin-red",
    title: "Black on red",
    location: "Gallatin, TN",
    spec: "Gallatin, TN · posted March 3, 2026",
    features: ["Barn red", "Lean-to", "Walk door", "Windows"],
    category: "shop",
    image: "/buildings/shop-gallatin-red.jpg",
    objectPosition: "42% 55%",
    notes:
      "From Barn Central’s Facebook: “Who loves the black on red combo.” Red vertical-rib walls, charcoal roof, wood-post lean-to, walk door and windows on the eave.",
  },
  {
    id: "two-bay",
    title: "Two-bay white barn",
    features: ["Open bays", "White walls", "Slab"],
    category: "barn",
    image: "/buildings/two-bay-slab.jpg",
    objectPosition: "50% 42%",
    notes: "Gable-end open bays on a poured slab. From Barn Central’s Facebook photos.",
  },
  {
    id: "gray-four-door",
    title: "Four-door shop",
    spec: "Four overheads · walk door",
    features: ["Four overheads", "Walk door"],
    category: "shop",
    image: "/buildings/four-door-shop.jpg",
    images: ["/buildings/four-door-gable.jpg", "/buildings/shop-interior.jpg"],
    objectPosition: "50% 52%",
    notes:
      "Enclosed shop with four overheads on the eave, walk door, gravel apron. Posted on Barn Central’s Facebook.",
  },
  {
    id: "bethpage-50x60",
    title: "50×60×16 shop",
    location: "Bethpage, TN",
    spec: "50′ × 60′ × 16′ · two 12×60 porches · Bethpage, TN",
    features: ["Dual porches", "Open bay", "Charcoal roof"],
    category: "shop",
    image: "/buildings/hero-bethpage.jpg",
    images: [
      "/buildings/fb-wide.jpg",
      "/buildings/fb-open-bay.jpg",
      "/buildings/fb-porch-left.jpg",
      "/buildings/fb-porch-right.jpg",
    ],
    objectPosition: "50% 58%",
    notes:
      "Posted September 1, 2026. White vertical-rib walls, charcoal roof, wood-post lean-tos on both sides, crushed-stone yard.",
  },
  {
    id: "wrap-porch",
    title: "Wrap timber porch",
    features: ["Wrap porch", "Timber posts"],
    category: "barn",
    image: "/buildings/r1b-wrap-porch.jpg",
    images: ["/buildings/timber-pavilion.jpg", "/buildings/wrap-porch.jpg"],
    objectPosition: "50% 78%",
    notes:
      "From Barn Central’s Facebook. Timber posts wrapping the eave — a porch off the main building.",
  },
  {
    id: "open-gable",
    title: "Open-gable storage",
    spec: "Posted February 26, 2026",
    features: ["Open gable", "Exposed rafters"],
    category: "barn",
    image: "/buildings/barn-open-gable.jpg",
    objectPosition: "58% 50%",
    notes:
      "From Barn Central’s Facebook. Dark metal walls, open gable end, exposed wood rafters — equipment and hay.",
  },
  {
    id: "wood-open-barn",
    title: "Wood-siding barn",
    features: ["Wood siding", "Open bays"],
    category: "barn",
    image: "/buildings/wood-open-barn.jpg",
    objectPosition: "50% 48%",
    notes:
      "From Barn Central’s Facebook. Open bays, wood siding on the walls, metal roof. Location not posted.",
  },
  {
    id: "gray-two-bay",
    title: "Gray two-bay shop",
    features: ["Two open bays", "Slab"],
    category: "shop",
    image: "/buildings/gray-two-bay.jpg",
    objectPosition: "50% 48%",
    notes: "Charcoal walls, two open bays, slab. From Barn Central’s Facebook. Location not posted.",
  },
  {
    id: "red-trim-shop",
    title: "Gray shop, red trim",
    features: ["Red trim", "Overhead", "Gravel"],
    category: "shop",
    image: "/buildings/red-trim-shop.jpg",
    objectPosition: "50% 42%",
    notes:
      "Gray walls, red trim, overhead door, trailer parked inside, gravel apron. From Barn Central’s Facebook.",
  },
  {
    id: "open-run-in",
    title: "Open run-in",
    features: ["Open sides", "Timber posts"],
    category: "barn",
    image: "/buildings/open-run-in.jpg",
    objectPosition: "50% 42%",
    notes:
      "Open-sided barn on timber posts — livestock, hay, or equipment. From Barn Central’s Facebook. Location not posted.",
  },
  {
    id: "white-windows",
    title: "White walls, windows",
    features: ["Windows", "White walls"],
    category: "barndo",
    image: "/buildings/white-windows.jpg",
    objectPosition: "40% 40%",
    notes: "White vertical-rib walls with windows. From Barn Central’s Facebook. Location not posted.",
  },
];

export const categories: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "barn", label: "Barns / Storage" },
  { id: "shop", label: "Garage / Shops" },
  { id: "barndo", label: "Barndos / Homes" },
];

export function slidesOf(project: Project): string[] {
  const rest = (project.images ?? []).filter((src) => src !== project.image);
  return [project.image, ...rest];
}

export const featuredProject =
  projects.find((p) => p.featured) ?? projects.find((p) => p.id === "tan-balcony") ?? projects[0];

/** Home “Recent work” — not the hero, not Featured, not Bethpage. */
export const homeRecentIds = ["gallatin-red", "two-bay", "gray-four-door"] as const;

export function projectById(id: string | undefined): Project | undefined {
  if (!id) return undefined;
  return projects.find((p) => p.id === id);
}
