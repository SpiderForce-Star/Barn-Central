# Grok Build prompt — Barn Central (photo polish + competitor-grade gallery)

Paste everything below the line into a **new** Grok Build session. Point it at this repo. If an old CLI watcher is looping on port 8080, **stop that process first**, then paste this.

**Repo:** https://github.com/SpiderForce-Star/Barn-Central

---

```
Upgrade this live contractor website FROM the GitHub repository. Do not start from a blank scaffold.

https://github.com/SpiderForce-Star/Barn-Central

Keep the existing TanStack Start / React app, routes, quote tool, logo, and every file already in public/. This is a polish + gallery architecture pass — not a redesign from zero.

Kill any stuck old preview watcher, then run this app on the preview port and leave it running.

========================================
WHO THIS IS FOR
========================================

Client: Barn Central
Tagline (exact): Your go-to barn and barndominium builder of Middle Tennessee.
Pitch (exact, use on home/about/services/quote/footer): We design to your needs and wants. We supply and construct on your site.
Phone: (615) 693-9925   tel:+16156939925
Email: sales@thebarncentral.com
Facebook (must stay linked): https://www.facebook.com/profile.php?id=61587244332260
Region: Middle Tennessee.

Three structures ONLY:
1. Barns / Storage
2. Garage / Shops
3. Barndos / Homes

Quote chips, services, and gallery filters must match these three. Do not add venues, warehouses, equine, or commercial as their own buckets.

========================================
HARD RULES
========================================

1. ONLY Barn Central’s real photos and the circular wood-grain logo. No stock. No AI buildings. No Unsplash. No generated skies pasted onto a different building.
2. Logo is public/logo.png. Do not redraw it.
3. Honest copy only. Do not invent years in business, licenses, warranties, prices per sq ft, awards, or testimonials. Do not invent locations except where the Facebook post already named them (Bethpage, Gallatin, Smyrna, Portland / Big Sky Farm, Westmoreland, Nashville).
4. Do not dump the quote page. Keep the 2D gable-end elevation + size sliders + mailto. Do not try to build a Morton/Lester 3D configurator.
5. Auth OFF. Database OFF. No fake login.
6. Do not strip Grok PWA pill, PreviewHostBridge, or og injector.

========================================
WHAT THE NATIONAL BUILDERS DO — COPY THE PATTERN, NOT THE SCALE
========================================

Reviewed: Morton Buildings, Wick Buildings, Lester Buildings, Cleary, plus Middle Tennessee shops (Midsouth Barndominiums, Affordable Building Concepts, National Barn / Portland, Oak & Iron, Cameron Leduc).

STEAL these patterns (they fit a small TN contractor):

A. One JOB is one gallery tile. Extra angles live inside the lightbox as thumbs, not as duplicate tiles. Morton does this (“Andy’s Farm Shop, Freeland MI — 72×105×16, porch, wainscot, cupola”). We do not have owner names — use the town + size.

B. Spec line on every job, Morton style:
   50′ W × 60′ L × 16′ H  ·  two 12×60 porches  ·  Bethpage, TN
   Feature chips under it: Dual porches · Open bay · Charcoal roof
   Never “beautiful custom structure.”

C. Photography rules from those galleries:
   - Building fills 55–75% of the frame.
   - Horizon level. Sky is the upper third, not a sliver.
   - Ridge sits in the upper third. Gable is not cropped off.
   - One scale object is good if it is already in the photo (truck, tractor). Do not add fake ones.
   - Construction debris, lumber piles, and people at the edge get cropped out when the building still reads. Do not clone-stamp. Do not generate a finished lawn.
   - Metal photographs dark — lift midtones on walls so color (barn red, tan, white) actually reads.
   - Tennessee daylight grade: slight warmth, +contrast, no HDR halo, no fake sunset sky.

D. Featured job gets a dedicated block: one large photo + 3–4 detail thumbs of the SAME building + spec + “Get a quote like this.” Bethpage 50×60×16 is that job.

E. Services are three full-bleed photo sections, not icon cards. One real photo each. Four short bullets. CTA “Quote this type.”

F. Process stays five steps (already in src/lib/site.ts). Pair step 04 “Raise it on your site” with a real timber-porch photo (r1b-wrap-porch or a Bethpage porch), not a generic icon.

G. Phone is always visible. Quote CTA on every page. Sticky mobile Call + Quote bar stays.

DO NOT steal (overkill or dishonest for this client):
- Morton 3D Studio / MyLester Design / Wick plan PDF mill.
- Fake 70-year heritage, national dealer maps, warranty badges.
- Published $/sq ft (Midsouth/Cameron do this; Barn Central has not given a number).
- Stock interiors, fake reviews, “as seen on” bars.
- Equine / commercial / aviation categories.

Barn Central’s edge vs those sites: local, real Facebook jobs, three clear building types, “we design it and we raise it on your site.” Keep that. Do not inflate into a national brand.

========================================
PHOTO GRADE SHEET — DO THIS FIRST
========================================

Work on the files in public/buildings/. Save over the same paths (or -v2 and update src/lib/projects.ts). Use PIL / ImageMagick only. No generative fill. No sky replacement. No adding people or trucks.

Global grade for screenshot-sourced files (barn-open-gable, shop-gallatin-red, barndo-tan-balcony):
  autocontrast cutoff 0.6–1.0
  Color 1.08–1.12 (warmth)
  Contrast 1.06–1.10
  Brightness 1.03–1.05
  UnsharpMask radius 1.2 percent 80 threshold 3
  Straighten if horizon is more than ~0.5° off.

Then per file:

hero-bethpage.jpg
  BEST photo. Do not recrop the source file.
  CSS: object-cover. Desktop object-position 50% 58%. Mobile (max-sm) 62% 48% so the gable stays above the dark overlay and is not under the H1.
  Lighting is already correct (clear sky, sun from the left). Do not regrade.

fb-wide.jpg / fb-open-bay.jpg / fb-porch-left.jpg / fb-porch-right.jpg
  Same job as the hero. Do not show these as separate gallery tiles — they become lightbox slides of Bethpage.
  Open-bay: lift interior shadows so the bay reads as a drive-through, not a black hole.
  Porch details: crop to timber posts + eave; keep the wood grain.

shop-gallatin-red.jpg
  Lighting: good hard sun, keep the blue sky.
  Position: crop ~8–10% off the RIGHT to drop the enclosed cargo trailer and the two people. Keep the full red gable, lean-to, and window.
  Lift the red wall slightly so “black on red” pops.
  object-position 42% 55%.

barn-open-gable.jpg
  Lighting: a little dim. Lift midtones. Keep the blue sky. Do not replace sky.
  Position: crop ~10–14% off the LEFT so the dead branches cover less of the wall. Keep the open gable and rafters in the center. Do not clone out remaining twigs — crop only.
  object-position 58% 50%.

barndo-tan-balcony.jpg
  Lighting: overcast / flat. Add contrast and a touch of warmth so tan walls and red roof separate from the gray sky. Do not add a fake blue sky.
  Position: crop ~8–12% off the BOTTOM to reduce the lumber pile. Keep at least two overheads AND the balcony in frame — that is the barndo story (shop + living).
  object-position 38% 46%.

gray-four-door.jpg
  Lighting: muddy / cool. Warmth + contrast so the four overheads read. Keep gravel.
  Position: center the four doors. Horizon level.
  object-position 50% 52%.

r1b-wrap-porch.jpg
  Strong photo. Keep. This is the wrap-porch COVER.
  Position: object-position 48% 46% so the cupola and porch stay in the 4:3 window (do not let object-cover chop the cupola).
  Lighting: already good; tiny warmth only if needed.

r1c-two-bay.jpg
  Strong photo. Keep.
  Position: object-position 50% 48% so both open bays stay in frame. Do not crop off the lean-to on the right.
  Lighting: good; leave it.

r1d-wrap-alt.jpg / r2a-wrap.jpg / r2c-wrap3.jpg
  Extra angles of the wrap-porch shop. Lightbox slides, not their own tiles.

========================================
GALLERY DATA MODEL
========================================

Change Project so one job can have extra slides:

type Project = {
  id: string;
  title: string;
  location?: string;
  spec?: string;          // e.g. "50′ × 60′ × 16′ · two 12×60 porches"
  features?: string[];    // short chips: "Dual porches", "Open bay"
  category: "barn" | "shop" | "barndo";
  image: string;          // cover
  images?: string[];      // extra angles, same job
  featured?: boolean;
  notes: string;
};

Jobs to ship (covers only in the grid — extras in the lightbox):

1. bethpage-50x60   shop  FEATURED
   cover: hero-bethpage.jpg
   slides: fb-wide, fb-open-bay, fb-porch-left, fb-porch-right
   spec: 50′ × 60′ × 16′ · two 12×60 porches · Bethpage, TN
   features: Dual porches · Open bay · Charcoal roof
2. wrap-porch       shop
   cover: r1b-wrap-porch.jpg
   slides: r1d-wrap-alt, r2a-wrap, r2c-wrap3
   features: Wrap porch · Overheads · Cupola
3. gallatin-red     shop
   cover: shop-gallatin-red.jpg
   spec: Gallatin, TN · posted March 3, 2026
   features: Barn red · Lean-to · Black roof
4. gray-four-door   shop
   cover: gray-four-door.jpg
   features: Four overheads · Walk door
5. tan-balcony      barndo
   cover: barndo-tan-balcony.jpg
   spec: posted February 4, 2026
   features: Three overheads · Living wing · Balcony
6. two-bay          barn
   cover: r1c-two-bay.jpg
   features: Open bays · Lean-to
7. open-gable       barn
   cover: barn-open-gable.jpg
   spec: posted February 26, 2026
   features: Open gable · Exposed rafters

Lightbox: large photo, thumbs for extra angles, spec, feature chips, notes, “See more on Facebook.” Keyboard left/right if easy.

Home “recent work” uses the same grouped jobs (limit 3–4 covers), not every file.

If you recover additional Facebook photos (Nashville 3-bay, shop interior, Westmoreland 24×24, Big Sky Farm TN, red stone-post barndo, charcoal barndo, black snow barndo, Gallatin wood-siding barn, 60×120 feed barn, Smyrna 30×40), add them as new jobs in the right category. If you cannot reach Facebook, ship with the repo files. Do not invent substitutes.

========================================
PAGES
========================================

/         Home
          - Full-bleed Bethpage hero with the object-position values above.
          - H1 = pitch line 1. Sub = pitch line 2 + the three types + tagline.
          - CTAs: Get a quote + tap-to-call.
          - Where / What / How strip (already there).
          - Featured Bethpage block with 3–4 detail thumbs of the SAME job.
          - Three service cards using the graded photos (barns = two-bay or open-gable, shops = gallatin-red, barndos = tan-balcony).
          - Recent work: grouped covers, not duplicate angles.
          - Process (5 steps). Step 04 uses a real porch photo.
          - Close with quote CTA.

/projects Work gallery — 3 filters, grouped jobs, lightbox with slides, empty-state still points at Facebook.

/services Three sections: Barns / Storage, Garage / Shops, Barndos / Homes. Real photo, 4 bullets, Quote this type. Lead each section with the pitch.

/about    Pitch first. Towns/counties. Process. Real porch/job photo. No fake bio years.

/quote    KEEP. Name + phone above the fold. 3 type chips. Sliders + number inputs synced. 2D gable-end elevation (not isometric). mailto:sales@thebarncentral.com + localStorage. Contact card next to the form, not below a dead zone.

Header: circular logo + wordmark, Work / Services / About / Quote, phone.
Footer: logo, pitch, phone, email, Facebook.
Mobile sticky: Call + Get a quote.

========================================
DESIGN
========================================

Keep tokens: Ink #1A120C, Barn #5C3317, Wood #8B5A2B, Cream #F4EDE3, Paper #FBF7F1.
Fraunces display + Outfit body. No Inter, no Playfair-on-purple, no gold foil, no emoji UI.
Photography-first. Tight type. Generous crops. 4:3 tiles with per-image object-position (see grade sheet).
Share card: keep public/og.jpg and public/logo.png unless you recrop og from the real Bethpage + real logo.

========================================
QUALITY
========================================

- Typecheck and production build must pass.
- Desktop + mobile 390px: no 404 images, no chopped gables on the hero, no horizontal overflow, no duplicate tiles of the same job.
- Every <img> src exists in public/.
- Copy sounds like a builder. Short. Specific. True.
- When done, leave the preview running.

Start now from https://github.com/SpiderForce-Star/Barn-Central
```
