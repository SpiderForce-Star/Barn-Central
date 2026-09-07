# Grok Build prompt — Barn Central (home redundancy, colors, framing, real quote/contact)

Paste everything below the line into a **new** Grok Build session pointed at:

**https://github.com/SpiderForce-Star/Barn-Central**

If an old CLI watcher is looping, **stop that process first**, then paste.

---

```
Upgrade this live contractor website FROM the GitHub repository. Do not start from a blank scaffold.

https://github.com/SpiderForce-Star/Barn-Central

Keep TanStack Start / React, the circular logo (public/logo.png), every real job photo in public/buildings/, the 2D elevation quote preview, brand tokens, and Grok PWA / PreviewHostBridge / og injector.

Kill any stuck old preview watcher. Run the app on the preview port and leave it running.

========================================
WHO THIS IS FOR
========================================

Client: Barn Central
Tagline (exact): Your go-to barn and barndominium builder of Middle Tennessee.
Pitch (exact): We design to your needs and wants. We supply and construct on your site.
Phone: (615) 693-9925   tel:+16156939925
Email: sales@thebarncentral.com   mailto:sales@thebarncentral.com
Facebook: https://www.facebook.com/profile.php?id=61587244332260
Three structures ONLY: Barns / Storage · Garage / Shops · Barndos / Homes.

HARD RULES
- Real photos and the real circular logo only. No stock. No AI buildings. No Unsplash.
- Honest copy. No invented years, warranties, prices, awards, or testimonials.
- Auth OFF. Database OFF. Forms submit with mailto:sales@thebarncentral.com and also save a copy in localStorage. That is the “actual contact” — it opens the customer’s mail app addressed to sales@thebarncentral.com.
- Do not strip Grok PWA pill / PreviewHostBridge / og injector.

========================================
1. STOP THE BETHPAGE REPEAT ON HOME
========================================

The live site (barn-central.vercel.app) uses the SAME Bethpage 50×60×16 building three times: hero, Featured, and Recent work. That is too much.

Fix:
- Bethpage stays in the /projects gallery only. It is not the home hero, not Featured, not in the home “Recent work” strip.
- HOME HERO: use a DIFFERENT real photo — public/buildings/r1b-wrap-porch.jpg (white walls, wrap timber porch, cupola, truck). Full-bleed. Headline still the pitch: “We design to your needs and wants.” Sub: “We supply and construct on your site.” + tagline. CTAs: Get a quote + Call. Do not put this wrap-porch job in Featured or in the home Recent work strip either.
- FEATURED (the labeled job block under the hero): the Facebook header / Feb 4 tan shop-and-living barndo.
    Photo: public/buildings/barndo-tan-balcony.jpg
    Recrop that file (or a 16:9 presentation of it) so the WHOLE building reads — three overheads on the shop end, covered balcony on the living wing, tan walls, red roof. The current tight 4:3 crop cuts the story. Do not generate a new building. Do not add sky. Crop/grade only.
    Title: Shop and living, with balcony
    Spec: Tan walls · red roof · three overheads · covered balcony · posted February 4, 2026
    CTA: See the work → /projects (Barndos filter or this job’s lightbox)
- RECENT WORK on home: 3 other covers, none of which are the hero or Featured or Bethpage. Use: Gallatin red shop, two-bay white barn, four-door shop (or open-gable). Link to full gallery.
- /projects still lists ALL jobs, including Bethpage and the wrap-porch and the tan barndo.

========================================
2. FACEBOOK ICON IN HEADER AND FOOTER
========================================

Add a real Facebook “f” icon (inline SVG, official-looking glyph, not a random PNG) next to the phone in the header and in the footer Talk-to-us list.

- href = site.facebook
- target=_blank rel=noreferrer
- aria-label="Barn Central on Facebook"
- Visible on desktop header. In the mobile menu too.
- Footer: icon + the word Facebook, not text-only.

========================================
3. CONTACT US → CUSTOMER EMAIL
========================================

Add /contact (also a header/footer path).

This is not a fake CRM. The page is a short form that builds a mailto:sales@thebarncentral.com message:

Fields: Name*, Phone*, Email, Town / county, Message*
Submit: required name + phone; then window.location.href = mailto with subject “Contact · {name}” and the fields in the body. Save JSON to localStorage key barn-central-contact.
Success copy: “Your mail app should open to sales@thebarncentral.com. If it does not, email us at that address or call (615) 693-9925.”

Header/footer email is always a live mailto:sales@thebarncentral.com link (Mail icon + the address). Phone stays tel:+16156939925.

Nav (desktop): Work · Services · Colors · Framing · About
Primary button: Get a quote → /quote
Secondary: Facebook icon, phone, and Contact (/contact) in the utility cluster / mobile menu.
Do not cram eight text links into the bar. Contact can live next to the mail icon.

========================================
4. REAL QUOTE FORM — FULL CUSTOMER + SITE + DESCRIPTION
========================================

Rewrite /quote so it is a request-a-quote page a contractor would actually send, not just sliders.

Keep the 2D gable-end elevation preview. Add framing + foundation so the drawing can switch (see §6). Do not build a 3D configurator.

FORM, in this order (name/phone still above the fold on desktop; on mobile the form starts with contact, preview stacks under it):

A. You
   - Full name *
   - Phone *
   - Email
B. Ship-to / build location *
   - Street / 911 address
   - City
   - County (existing county select)
   - ZIP
   - “This is where we supply and construct.”
C. What you’re looking for *
   - Large textarea. Placeholder: “Barn, shop, or barndo. Size if you know it. Doors, porch, living vs storage, pad, timeline.”
D. Building spec (optional but shown — they can skip numbers and just write the box)
   - Type chips: Barn / Storage · Garage / Shop · Barndo / Home
   - Width, length, eave height (slider + number, synced)
   - Framing chips: Gabled · Gabled unsymmetrical · Single slope · Lean-to (lean-to is a lean-to OFF a gabled main building)
   - Foundation chips: Sunken post on dirt · Sunken post on gravel · Solid concrete floor · Split — gravel storage + concrete in living/shop
   - Color (from the Colors page palette, §5)
   - Porch: none / one / two + depth
E. Timeline (optional)

Submit: mailto:sales@thebarncentral.com with a clean body:

  Quote request from {name}
  Phone / email
  Build location: {street}, {city}, {county} County, TN {zip}
  Looking for:
  {description}
  Type / size / framing / foundation / color / porch / timeline

Also localStorage barn-central-quote.
Validate: name, phone, build city (or county), and the description box. Size numbers are optional if they filled the description.

========================================
5. NEW PAGE /colors — PANEL AND TRIM
========================================

Separate page. Not a popup. Nav label: Colors.

Use this palette ONLY (from the chart they supplied). REMOVE Navy, Copper, and Silver. Rename Vintage Metallic → Galvanized / Galvalume. Show the same metallic swatch, new name.

id            label                      hex (wall)   notes
red           Red                        #8E3B2C
bright-red    Bright Red                 #C62828
marine        Marine                     #1B4F72
tan           Tan                        #C8B07A
brown         Brown                      #555C3A
charcoal      Charcoal                   #5D6168
white         White                      #F2F1ED
ivory         Ivory                      #EFE6C6
beige         Beige                      #A9A394
black         Black                      #1A1A1A
burgundy      Burgundy                   #4A2230
evergreen     Evergreen                  #1E5A36
galvalume     Galvanized / Galvalume     #C5C5C5   metallic; CSS speckle/hatch ok. Do not label it Vintage Metallic.

Page layout:
- Title: Panels and trim
- One sentence: “Walls, roof, and trim from this chart. We’ll lock color on your spec.”
- Grid of large square swatches, label under each. Galvalume gets a light metallic texture, not a flat gray pretending to sparkle with a stock photo.
- Short note: roof and wall can be different colors from this same list (Bethpage = white walls / charcoal roof; Gallatin = red walls / black roof; tan barndo = tan walls / red roof).
- CTA: Quote this color → /quote (preselect if easy).

Replace src/lib/site.ts wallColors with this list (include a roof default per color — charcoal or black roof is fine). Quote preview and /colors must share the same array.

========================================
6. NEW PAGE /framing — FRAMING + FOUNDATIONS
========================================

Nav label: Framing.

FRAMING (2D elevation SVGs in the same language as building-preview.tsx — gable-end / side elevation, not isometric toys, not AI barns):

1. Gabled
   Equal roof slopes, peak on center. Standard barn/shop.
2. Gabled unsymmetrical
   Peak offset. One long slope, one short. Saltbox / unequal gable.
3. Single sloped
   One roof plane, high wall to low wall. Monoslope.
4. Lean-to
   MUST show a lean-to OFF a gabled main building (lower eave roof on one side, posts, like their real porches/lean-tos). Do not draw a lonely shed as if it were the whole job.

Each card: SVG + name + 2-line use note (e.g. lean-to: “Porch, extra stall, or covered equipment off the eave.”).

FOUNDATION (same page, below framing):

Lead copy (use this meaning, you may tighten the words):
Sunken-post foundation, laid out from the framing. The pad can be level/graded dirt or gravel. Solid-floor (concrete) is available. You can gravel a storage bay and pour a full concrete floor in the living or shop area of the same building.

Diagrams (simple SVG cross-sections, labeled):
- Sunken post in graded dirt
- Sunken post on a gravel pad
- Solid concrete floor
- Split floor: gravel in the storage bays, concrete in the shop/living

CTA: Quote framing and pad → /quote

Wire the quote form’s framing + foundation chips to these same ids.

========================================
7. KEEP / UPDATE
========================================

/         Home as specified in §1. Where/What/How strip stays. Three service cards stay (barns, shops, barndos) using real photos that are not all Bethpage. Process stays 5 steps. Close with quote CTA.

/projects Grouped jobs (one tile per building, extra angles in the lightbox). Filters: Barns / Storage · Garage / Shops · Barndos / Homes. Bethpage lives here. Facebook link for more.

/services Three sections only. Real photos. Quote this type.

/about    Pitch first. Towns/counties. Process. Real job photo (not the home hero repeat if you can avoid it).

/colors   New. §5
/framing  New. §6
/quote    Full form. §4
/contact  Mailto form. §3

Design tokens stay: Ink #1A120C, Barn #5C3317, Wood #8B5A2B, Cream #F4EDE3, Paper #FBF7F1. Fraunces + Outfit. Photography-first. No purple/gold slop.

========================================
QUALITY
========================================

- Typecheck and production build must pass.
- Desktop + mobile 390px: hero is wrap-porch, Featured is the tan barndo, Recent work does not repeat either of those or Bethpage. No 404 images. No horizontal overflow.
- Facebook icon is in the header and the footer and links to the real page.
- Colors page has 13 swatches: no Navy, no Copper, no Silver; Galvanized / Galvalume not “Vintage Metallic”.
- Framing page shows lean-to attached to a gabled main building.
- Quote and Contact mailto sales@thebarncentral.com with the filled fields.
- When done, leave the preview running.

Start now from https://github.com/SpiderForce-Star/Barn-Central
```
