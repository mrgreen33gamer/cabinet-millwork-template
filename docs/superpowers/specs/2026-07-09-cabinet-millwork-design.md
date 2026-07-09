# Cabinet & Millwork Template — Design Spec

## Context

Scott Apps sells a family of near-identical Next.js marketing-site templates, one per trade, each forked from an existing template and re-skinned. This run forks `hvac-template` into `cabinet-millwork-template`.

Cabinet & Millwork is a **showcase-driven** trade (like Construction Hub), not a pure service-call trade. Galleries, custom quotes, and material lookbooks matter. Therefore:

- **KEEP and REBUILD** `src/app/projects/`, `ProjectCardGrid`, `BeforeAfter`, `CaseStudyGrid`, `HighlightedProject`, `InsuredBadge`, `libs/local-db/projects.ts`, and `/api/gallery-images` for Craftline Cabinetry & Millwork.
- **DELETE** `ScottAppsCTA` and any Scott Apps agency product identity from the projects experience.
- **DELETE** all per-city SEO subpages under services (`waco-tx/`, `temple-tx/`, `killeen-tx/`).

## Business Identity (locked — reuse verbatim)

- **Business name:** Craftline Cabinetry & Millwork
- **Tagline:** Custom Cabinets & Fine Millwork for Central Texas Homes & Businesses
- **Founded:** 2008 · **Owner:** Elena Vargas
- **HQ:** Waco, TX
- **Cities:** Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead
- **Phone:** (254) 741-2800 / `tel:+12547412800`
- **Email:** hello@craftlinecabinetry.com
- **Domain:** craftlinecabinetry.com → `https://www.craftlinecabinetry.com`
- **Address:** 2200 S University Parks Dr, Waco, TX 76706
- **Credentials:** Licensed Contractor · Fully Insured · Custom Shop
- **Guarantee:** 5-Year Craftsmanship Warranty
- **Social proof:** 4.9★ · 340+ reviews · "1,200+ custom installs"
- **Brand accent:** warm wood amber `#b45309` — distinct from HVAC orange, flooring walnut, construction amber
- **No per-city SEO subpages**

## Services (6)

| Slug | Service |
|---|---|
| custom-cabinets | Custom Cabinets |
| kitchen-remodel-millwork | Kitchen Remodel Millwork |
| bathroom-vanities | Bathroom Vanities |
| commercial-millwork | Commercial Millwork |
| cabinet-refacing | Cabinet Refacing |
| closet-built-ins | Closet & Built-Ins |

## Industries Served (3)

| Slug | Industry |
|---|---|
| homebuilders-developers | Homebuilders & Developers |
| interior-designers | Interior Designers |
| commercial-hospitality | Commercial & Hospitality |

## Blogs (3)

| Slug | Topic |
|---|---|
| custom-vs-semi-custom-cabinets-waco-tx | Custom vs semi-custom cabinets |
| how-to-choose-cabinet-materials-central-texas | Choosing cabinet materials for Central Texas |
| signs-its-time-to-refinish-or-replace-cabinets | Signs it's time to refinish or replace cabinets |

## Pages

Home, About, Contact, Services (index + 6), Industries (index + 3), Service Areas, Blogs (3), **Projects (gallery + case studies)**.

## Non-goals

- No per-city SEO subpages.
- No new component primitives beyond adapting construction-hub gallery patterns already in-tree.
- No deploy/marketplace-catalog work.

## Success Criteria

- Zero HVAC/Arctic Air or Scott Apps agency identity remaining in public-facing + admin/legal/infra strings.
- Projects gallery rebuilt as Craftline millwork portfolio (not agency web work).
- Accent `#b45309` in brand tokens and chrome.
- `npm run typecheck` passes.
