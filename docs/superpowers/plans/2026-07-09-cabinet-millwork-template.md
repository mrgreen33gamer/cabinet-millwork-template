# Craftline Cabinetry & Millwork — Implementation Plan

**Goal:** Re-skin the forked `hvac-template` codebase into a complete Craftline Cabinetry & Millwork marketing site with a rebuilt projects gallery.

**Method:** Sibling-reference reskin. Copy structure from `flooring-tile-template` for trade pages; rebuild gallery from `construction-hub-template` patterns. Business identity locked in the design spec.

## Slug maps

**Services:** ac-repair→custom-cabinets · heating→kitchen-remodel-millwork · installation→bathroom-vanities · duct-cleaning→commercial-millwork · indoor-air-quality→cabinet-refacing · maintenance→closet-built-ins

**Industries:** automotive→homebuilders-developers · manufacturing→interior-designers · oil-gas→commercial-hospitality

**Blogs:** heat-pump-vs-traditional-hvac-texas→custom-vs-semi-custom-cabinets-waco-tx · how-often-should-you-replace-hvac-filter→how-to-choose-cabinet-materials-central-texas · signs-ac-needs-replacement-waco-tx→signs-its-time-to-refinish-or-replace-cabinets

## Tasks

1. Brand tokens (`globalVariables.scss`) → amber `#b45309` + warm charcoal
2. Header & Footer rebrand (include Projects nav link)
3. Vendor/infra: layout, robots, sitemap, llms, not-found, privacy, package.json, admin strings
4. Shared component defaults (TrustBar, CTABanner, FAQ, WhyChooseUs, Guarantee, ValueComparison, LocalCitation, BlogPreview, etc.)
5. Homepage + WelcomePage
6–11. Six service pages + services index; delete city dirs
12–14. Three industries + industries index
15. Reviews data
16–18. Three blogs + blog-posts.ts
19. About / Contact / Service Areas
20. Projects gallery rebuild (projects.ts, ProjectCardGrid, page, [slug], remove ScottAppsCTA)
21. Final sweep + typecheck

Commits: `brand:`, `feat:`, `fix:`, `content:` prefixes.
