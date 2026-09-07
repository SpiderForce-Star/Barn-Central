export type ProjectCategory = "barn" | "shop";

export type Project = {
  id: string;
  title: string;
  location?: string;
  spec?: string;
  category: ProjectCategory;
  image: string;
  featured?: boolean;
  notes: string;
};

export const projects: Project[] = [
  {
    id: "bethpage-50x60",
    title: "50×60×16 with dual porches",
    location: "Bethpage, TN",
    spec: "50×60×16 · two 12×60 porches",
    category: "barn",
    image: "/buildings/hero-bethpage.jpg",
    featured: true,
    notes:
      "Posted September 1, 2026 on Facebook. White vertical-rib walls, charcoal roof, wood-post lean-tos on both sides, crushed-stone yard.",
  },
  {
    id: "bethpage-porch",
    title: "Wood-post porch",
    location: "Bethpage, TN",
    spec: "12×60 lean-to",
    category: "barn",
    image: "/buildings/fb-porch-left.jpg",
    notes:
      "Same Bethpage shop. Timber posts, metal roof, open lean-to — shade, parking, and a finished look on a working building.",
  },
  {
    id: "bethpage-bay",
    title: "Open center bay",
    location: "Bethpage, TN",
    spec: "50×60×16",
    category: "shop",
    image: "/buildings/fb-open-bay.jpg",
    notes:
      "Drive-through bay on the Bethpage job. Equipment rolls straight in; porches run the eaves on both sides.",
  },
  {
    id: "bethpage-wide",
    title: "Bethpage, full yard",
    location: "Bethpage, TN",
    spec: "50×60×16 · dual porches",
    category: "barn",
    image: "/buildings/fb-wide.jpg",
    notes:
      "Wide shot of the finished shop — white walls, charcoal roof, timber porches, gravel apron.",
  },
  {
    id: "wrap-porch",
    title: "Wrap-porch shop",
    category: "shop",
    image: "/buildings/r1b-wrap-porch.jpg",
    notes:
      "From Barn Central's Facebook. White walls, wrap timber porch, overhead doors, cupola.",
  },
  {
    id: "wrap-porch-drive",
    title: "Wrap-porch, from the drive",
    category: "shop",
    image: "/buildings/r2a-wrap.jpg",
    notes:
      "Same wrap-porch shop on Facebook — truck in the drive, porch wrapping the eave.",
  },
  {
    id: "wrap-porch-close",
    title: "Overheads on the wrap porch",
    category: "shop",
    image: "/buildings/r2c-wrap3.jpg",
    notes:
      "Closer look at the overheads and wrap timber porch. Facebook photo from a Barn Central job.",
  },
  {
    id: "two-bay",
    title: "Two-bay white barn",
    category: "barn",
    image: "/buildings/r1c-two-bay.jpg",
    notes:
      "Gable-end open bays with a side lean-to. From Barn Central's Facebook photos.",
  },
  {
    id: "gray-four-door",
    title: "Four-door shop",
    category: "shop",
    image: "/buildings/gray-four-door.jpg",
    notes:
      "Enclosed shop with four overheads on the eave, walk door, gravel apron. Posted on Barn Central's Facebook.",
  },
  {
    id: "wrap-porch-alt",
    title: "Wrap-porch, side light",
    category: "shop",
    image: "/buildings/r1d-wrap-alt.jpg",
    notes:
      "Another Facebook angle on the wrap-porch shop — white rib walls, timber posts, cupola.",
  },
];

export const categories: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "barn", label: "Barns" },
  { id: "shop", label: "Shops" },
];
