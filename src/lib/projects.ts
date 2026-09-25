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
  /** Show the whole photo instead of a tight crop. */
  fit?: "cover" | "contain";
  featured?: boolean;
  notes: string;
};

export const projects: Project[] = [
  {
    id: "gallatin-40x60",
    title: "Garage, shop, storage, and living",
    location: "Gallatin, TN",
    spec: "All at your own design ideas.",
    features: ["40×60", "12-ft porch", "Gallatin", "Open bays"],
    category: "shop",
    image: "/buildings/gallatin-40x60-porch.jpg",
    objectPosition: "50% 45%",
    featured: true,
    notes:
      "From Barn Central’s Facebook, July 31: “Wrapped up this 40x60 with a 12 foot porch today.” Gallatin. Gray walls, charcoal roof, open bays, timber porch.",
  },
  {
    id: "tan-balcony",
    title: "Shop and living, with balcony",
    spec: "Tan walls · red roof · three overheads · covered balcony",
    features: ["Three overheads", "Covered balcony", "Tan walls", "Red roof"],
    category: "barndo",
    image: "/buildings/barndo-tan-balcony.jpg",
    objectPosition: "46% 58%",
    notes:
      "From Barn Central’s Facebook, February 4, 2026. Tan vertical-rib walls, red roof, three overheads on the shop end, covered balcony on the living wing.",
  },
  {
    id: "red-four-bay",
    title: "Red shop and living",
    spec: "Four overheads · timber porch",
    features: ["Four overheads", "Timber porch", "Red walls"],
    category: "barndo",
    image: "/buildings/red-four-bay-barndo.jpg",
    objectPosition: "50% 45%",
    fit: "contain",
    notes:
      "From the Standard Builders Group Facebook page. Red walls, black roof, four overheads on the shop end, timber porch on the living wing. Location and size were not on the post.",
  },
  {
    id: "gray-covered-entry",
    title: "Covered entry, shop bays",
    spec: "Two-tone walls · timber porch",
    features: ["Covered entry", "Open bays", "Two-tone"],
    category: "barndo",
    image: "/buildings/gray-covered-entry.jpg",
    objectPosition: "50% 42%",
    fit: "contain",
    notes:
      "From the Standard Builders Group Facebook page. Gray upper walls, darker wainscot, timber-post covered entry, walk door and windows, two open bays on the shop end. Location and size were not on the post.",
  },
  {
    id: "black-timber-porch",
    title: "Black shell, timber porch",
    spec: "Timber truss entry",
    features: ["Black walls", "Timber porch", "Timber truss"],
    category: "barndo",
    image: "/buildings/black-timber-porch-snow.jpg",
    objectPosition: "50% 42%",
    notes:
      "From Barn Central’s Facebook. Black vertical-rib walls, metal roof, timber porch posts, and a timber truss in the entry gable. Snow on the ground. Location and size were not on the post.",
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
    id: "howard-elementary",
    title: "Howard Elementary",
    location: "Gallatin, TN",
    spec: "Open storage barn",
    features: ["Open bay", "Green roof", "Slab"],
    category: "barn",
    image: "/buildings/howard-elementary.jpg",
    objectPosition: "50% 40%",
    fit: "contain",
    notes:
      "Standard Builders Group Facebook, August 6, 2026, in Gallatin. Open-front barn on a slab at Howard Elementary School. Green roof and trim, tan walls, timber posts, slatted side.",
  },
  {
    id: "gray-open-equipment",
    title: "Open equipment barn",
    spec: "Open bay · timber posts",
    features: ["Open bay", "Timber posts", "Gray walls"],
    category: "barn",
    image: "/buildings/gray-open-equipment.jpg",
    objectPosition: "50% 40%",
    fit: "contain",
    notes:
      "From the Standard Builders Group Facebook page. Gray walls, timber posts, open front. Location and size were not on the post.",
  },
  {
    id: "open-barn-aug7",
    title: "Open barn, dark roof",
    spec: "August 7, 2025",
    features: ["Open bay", "Timber posts", "Dark roof"],
    category: "barn",
    image: "/buildings/open-barn-aug7.jpg",
    objectPosition: "50% 42%",
    fit: "contain",
    notes:
      "Standard Builders Group Facebook, August 7, 2025. Light walls, dark metal roof, timber posts, open front, gravel inside. Location and size were not on the post.",
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
    image: "/buildings/wrap-porch-full.jpg",
    objectPosition: "50% 50%",
    fit: "contain",
    notes:
      "From Barn Central’s Facebook. Metal roof on timber posts, the porch run in front of the wall. The check-in was cut off, so no town is listed.",
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
    title: "30×40×16 shop",
    location: "Smyrna, TN",
    spec: "April 2026 · two open bays",
    features: ["30×40×16", "Two open bays", "Slab"],
    category: "shop",
    image: "/buildings/smyrna-30x40.jpg",
    objectPosition: "50% 45%",
    fit: "contain",
    notes:
      "From Barn Central’s Facebook, April 2026: “30x40x16,” in Smyrna. Charcoal walls, two open bays, slab.",
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
    id: "red-shop-leanto",
    title: "Red shop, lean-to",
    spec: "Open bays · walk door",
    features: ["Lean-to", "Open bays", "Walk door"],
    category: "shop",
    image: "/buildings/red-shop-leanto.jpg",
    objectPosition: "50% 42%",
    fit: "contain",
    notes:
      "From the Standard Builders Group Facebook page. Red walls, black wainscot, timber-post lean-to, two open bays, walk door, gravel apron. Location and size were not on the post.",
  },
  {
    id: "white-shop-two-bay",
    title: "White shop, black wainscot",
    spec: "Two open bays · lean-to",
    features: ["Two open bays", "Lean-to", "Walk doors"],
    category: "shop",
    image: "/buildings/white-shop-two-bay.jpg",
    objectPosition: "50% 42%",
    fit: "contain",
    notes:
      "From the Standard Builders Group Facebook page. White walls, black wainscot, two open bays, walk doors, timber-post lean-to, gravel apron. Location and size were not on the post.",
  },
  {
    id: "charcoal-three-bay",
    title: "Three-bay charcoal shop",
    spec: "Blue roof · open bays",
    features: ["Three open bays", "Blue roof", "Gravel"],
    category: "shop",
    image: "/buildings/charcoal-three-bay.jpg",
    objectPosition: "50% 45%",
    fit: "contain",
    notes:
      "From the Standard Builders Group Facebook page. Charcoal walls, blue metal roof, three open bays, gravel apron. Location and size were not on the post.",
  },
  {
    id: "tan-three-door",
    title: "Tan shop, red roof",
    spec: "Three overheads · lean-tos both sides",
    features: ["Three overheads", "Lean-tos", "Red roof"],
    category: "shop",
    image: "/buildings/tan-three-door.jpg",
    objectPosition: "50% 42%",
    fit: "contain",
    notes:
      "From the Standard Builders Group Facebook page. Tan walls, red roof, brown wainscot, three overheads, lean-tos on both sides, concrete apron. Location and size were not on the post.",
  },
  {
    id: "red-gable-shop",
    title: "Red shop, white trim",
    spec: "Side windows · gable doors",
    features: ["Windows", "Gable doors", "White trim"],
    category: "shop",
    image: "/buildings/red-gable-shop.jpg",
    objectPosition: "50% 42%",
    fit: "contain",
    notes:
      "From the Standard Builders Group Facebook page. Red walls, white trim, windows on the side, double doors on the gable, gravel apron. Location and size were not on the post.",
  },
  {
    id: "red-bifold",
    title: "Red shop, bi-fold door",
    spec: "Large farm equipment",
    features: ["Bi-fold door", "Farm equipment", "Red walls"],
    category: "shop",
    image: "/buildings/red-bifold-shop.jpg",
    objectPosition: "50% 42%",
    fit: "contain",
    notes:
      "From the Standard Builders Group Facebook page. Red walls and a bi-fold door on the gable for large farm equipment. Location and size were not on the post.",
  },
  {
    id: "gray-long-porch",
    title: "Gray shop, long porch",
    spec: "Open bays · timber porch",
    features: ["Long porch", "Open bays", "Walk door"],
    category: "shop",
    image: "/buildings/gray-long-porch.jpg",
    objectPosition: "50% 42%",
    fit: "contain",
    notes:
      "From the Standard Builders Group Facebook page. Gray walls, timber-post porch along the eave, open bays and a walk door on the gable. Location and size were not on the post.",
  },
  {
    id: "open-run-in",
    title: "60×120 feed barn",
    spec: "Hay, feed, or equipment",
    features: ["60×120", "Open sides", "Timber posts"],
    category: "barn",
    image: "/buildings/feed-barn-60x120.jpg",
    objectPosition: "50% 45%",
    fit: "contain",
    notes:
      "From Barn Central’s Facebook, May 20, 2026: “Wrapped up this 60x120 feed barn.” Open sides on timber posts. The same frame works for hay, feed, or equipment. Location not posted.",
  },
  {
    id: "white-windows",
    title: "Under construction",
    spec: "White walls · windows in",
    features: ["Under construction", "White walls", "Windows"],
    category: "barndo",
    image: "/buildings/white-under-construction.jpg",
    objectPosition: "50% 40%",
    fit: "contain",
    notes:
      "From Barn Central’s Facebook. White vertical-rib walls, windows in, ladder still up, grade not finished. Location and size were not on the post.",
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
