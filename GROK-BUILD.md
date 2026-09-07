# Grok Build prompt — Barn Central

Paste everything below the line into Grok Build. Point the session at this repo:

**https://github.com/SpiderForce-Star/Barn-Central**

---

```
Upgrade this live contractor website FROM the GitHub repository:

https://github.com/SpiderForce-Star/Barn-Central

Do NOT start from a blank scaffold. Import that repo as the source of truth. Keep the existing TanStack Start / React app, routes, quote tool, and every file already in public/. Rebuild and polish into a professional, demo-quality site for a Middle Tennessee barn builder.

========================================
WHO THIS IS FOR
========================================

Client: Barn Central
Tagline (use this wording): Your go-to barn and barndominium builder of Middle Tennessee.
Phone: (615) 693-9925
Email: sales@thebarncentral.com
Facebook (must stay linked, header/footer/gallery): https://www.facebook.com/profile.php?id=61587244332260
Also valid: https://www.facebook.com/p/Barn-Central-61587244332260/
Region: Middle Tennessee — Sumner, Wilson, Davidson, Robertson, Trousdale, Macon, and nearby counties.
Towns: Bethpage, Gallatin, Hendersonville, Portland, White House, Lebanon, Hartsville, Smyrna, Nashville, Franklin, Murfreesboro, Springfield, Goodlettsville, Mt. Juliet, Lafayette.

Selling line (use this wording, everywhere it fits): We design to your needs and wants. We supply and construct on your site.

Three structures ONLY — do not list venues or warehouses as their own buckets:
1. Barns / Storages
2. Garage / Shops
3. Barndos / Homes

Quote chips, services page, and gallery filters must match these three.

Featured job (confirmed Facebook post, Sept 1, 2026):
50×60×16 shop in Bethpage, TN, with two 12×60 wood-post porches. White vertical-rib walls, charcoal roof, crushed-stone yard.

Other Facebook posts you may reference only if you can attach a real photo from the repo or from their page: “Proud to be a part of this one!” and “30×30 for Howard Elementary’s STEAM Program” (Aug 2026). Do not invent photos for those posts.

========================================
HARD RULES — PHOTOS AND LOGO
========================================

1. Use ONLY Barn Central’s real assets. No stock barns. No AI-generated buildings. No Unsplash/Pexels metal buildings. No invented job sites.
2. The official logo is the circular wood-grain badge. It already lives in the repo:
   - public/logo.png          ← use this in header, footer, favicon, share card
   - public/logo-src/logo-813.jpg  ← raw Facebook profile mark (813px)
   Do not replace it with an SVG recreation, a different barn icon, or a generated logo. Do not add extra taglines onto the badge.
3. Every job photograph already in this repo came from Barn Central’s Facebook page and is cleared to use. Wire them in. Do not delete them.

Repo photo map (keep these paths; you may rename in the UI labels, not the files):

FEATURED JOB — Bethpage 50×60×16 dual-porch shop
- public/buildings/hero-bethpage.jpg     Full high-res yard shot. HOME HERO. Featured gallery tile.
- public/buildings/fb-wide.jpg           Wide shot of the same building.
- public/buildings/fb-porch-left.jpg     Left wood-post porch detail.
- public/buildings/fb-porch-right.jpg    Right wood-post porch detail.
- public/buildings/fb-open-bay.jpg       Open center bay / drive-through.

WRAP-PORCH SHOP (second Facebook job, several angles)
- public/buildings/r1b-wrap-porch.jpg    White walls, wrap timber porch, overheads, cupola.
- public/buildings/r1d-wrap-alt.jpg      Same shop, side light.
- public/buildings/r2a-wrap.jpg          From the drive, truck in the yard.
- public/buildings/r2c-wrap3.jpg         Closer overheads + wrap porch.

TWO-BAY WHITE BARN
- public/buildings/r1c-two-bay.jpg       Gable-end open bays, side lean-to.

FOUR-DOOR ENCLOSED SHOP
- public/buildings/gray-four-door.jpg    Four overheads on the eave, walk door, gravel apron.

OPEN-GABLE STORAGE BARN (Facebook, Feb 26, 2026)
- public/buildings/barn-open-gable.jpg   Dark metal walls, open gable end, exposed rafters.

GALLATIN RED SHOP (Facebook, March 3, 2026)
- public/buildings/shop-gallatin-red.jpg Red walls, charcoal roof, wood-post lean-to. “Black on red combo.”

4. ALSO pull more photos from their Facebook page if you can reach them without login (plugin page, public CDN, Graph picture endpoints, mbasic, etc.). Save any NEW unique job photos into public/buildings/ with honest filenames and add them to the gallery. If Facebook login-walls the rest, do not invent substitutes — ship with the repo photos above and keep a clear “See more work on Facebook” link.

5. Honest captions only. Do not invent locations except Bethpage for the 50×60×16. Do not invent owners, years in business, awards, reviews, or testimonials. Do not claim interiors, pads, or building types you do not have a real photo of.

========================================
WHAT TO SHIP
========================================

A professional barn-builder marketing site. Not a template. Not purple/gold slop. Feels like a working Middle Tennessee contractor.

Pages:
- /         Home — full-bleed hero using hero-bethpage.jpg, official logo in the header, tagline, phone CTA, featured Bethpage job, services strip using real photos, recent work grid, process, quote CTA.
- /projects Work gallery — all Facebook job photos, filter Barns / Storage · Garage / Shops · Barndos / Homes, lightbox with spec + notes, Facebook link for more.
- /services Three sections only: Barns / Storage, Garage / Shops, Barndos / Homes. Each section uses a real photo (barns = open-gable or Bethpage, shops = four-door, barndos = wrap-porch until a true barndo photo lands). Honest copy.
- /about    Who they are, where they work (towns/counties), pad-to-porch process. Lead with the selling line. Hero image from a real porch/job photo.
- /quote    Size sliders (width, length, eave, porch none/one/two), building type chips for the three structures only, color, county. Live 2D gable-end elevation. Name + phone above the fold. Submit via mailto:sales@thebarncentral.com and also save the spec in localStorage. No accounts. Do not dump this page.

Always-visible:
- Header: official circular logo + Barn Central wordmark, Work / Services / About / Quote, phone.
- Footer: logo, tagline, phone, email, Facebook.
- Mobile: sticky Call + Get a quote bar.

Contact must be tappable: tel:+16156939925 and mailto:sales@thebarncentral.com.

========================================
DESIGN
========================================

Brand colors already in the repo (keep them):
- Ink #1A120C
- Barn #5C3317
- Wood #8B5A2B
- Cream #F4EDE3
- Paper #FBF7F1

Typography: Fraunces (display) + Outfit (body). No Inter, no Playfair-on-purple, no emoji in the UI, no fake gold foil.

Photography-first. Large real photos, generous crop, tight type. The hero is the Bethpage building, not a gradient.

Share card / favicon: keep using public/logo.png and public/og.jpg (Bethpage + official logo). If you refresh og.jpg, composite the REAL Bethpage photo + REAL circular logo. Do not generate a fake barn for the card.

Auth OFF. Database OFF. No .env. No fake login. Quote tool is mailto + localStorage.

Do not strip Grok PWA pill, PreviewHostBridge, or og injector.

========================================
QUALITY
========================================

- Typecheck and production build must pass.
- Desktop and mobile (390px) both render real content, no broken images, no horizontal overflow.
- Every <img> src must exist in public/. No 404 photos.
- Copy sounds like a builder, not an ad agency. Short. Specific. True.
- When done, leave the preview running.

Push any new unique Facebook job photos you recover back into public/buildings/ and list them in the gallery.

Start now from https://github.com/SpiderForce-Star/Barn-Central
```
