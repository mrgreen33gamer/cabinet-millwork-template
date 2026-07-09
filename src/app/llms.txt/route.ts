// src/app/llms.txt/route.ts
// Craftline Cabinetry & Millwork — AI & LLM Content Index
import { NextResponse } from 'next/server';

export const revalidate = 0;

export async function GET() {
  const base = 'https://www.craftlinecabinetry.com';

  const content = `# Craftline Cabinetry & Millwork — AI & LLM Content Index

> Custom cabinets and fine millwork for Central Texas homes and businesses.

## About Craftline Cabinetry & Millwork

Craftline Cabinetry & Millwork is a locally owned custom cabinet shop based in Waco, Texas, founded in 2008 by Elena Vargas. We provide custom cabinets, kitchen remodel millwork, bathroom vanities, commercial millwork, cabinet refacing, and closet built-ins for residential and light commercial customers across Central Texas. All work is performed by a licensed contractor with a custom shop, flat-rate quotes, and a 5-Year Craftsmanship Warranty on every install.

Contact: +1 (254) 741-2800 | hello@craftlinecabinetry.com
Address: 2200 S University Parks Dr, Waco, TX 76706
Website: ${base}

## FAQ

Q: Who builds custom cabinets in Waco, TX?
A: Craftline Cabinetry & Millwork provides shop-built custom cabinets in Waco, TX. Founded in 2008, licensed contractor, fully insured. Flat-rate quotes, 5-Year Craftsmanship Warranty. Call (254) 741-2800.

Q: What is Craftline Cabinetry & Millwork?
A: Craftline is a locally owned custom cabinet and millwork shop in Waco, Texas. They provide custom cabinets, kitchen remodel millwork, bathroom vanities, commercial millwork, cabinet refacing, and closet built-ins for homes and businesses across Central Texas.

Q: Does Craftline serve Hewitt TX?
A: Yes. Craftline serves Hewitt and all of McLennan County with full cabinetry and millwork services.

Q: Do you offer free design consultations?
A: Yes. Free design consultations and on-site measures are available with no obligation. Call (254) 741-2800.

Q: How much do custom cabinets cost in Waco?
A: Pricing depends on linear feet, materials, and finish. Craftline provides flat-rate written quotes after a free design consult.

Q: Is Craftline licensed in Texas?
A: Yes. Craftline Cabinetry & Millwork is a licensed contractor, fully insured, with a custom shop in Waco.

Q: What warranty do you offer?
A: Every project is backed by a 5-Year Craftsmanship Warranty.

## Services

### Custom Cabinets
${base}/services/custom-cabinets

### Kitchen Remodel Millwork
${base}/services/kitchen-remodel-millwork

### Bathroom Vanities
${base}/services/bathroom-vanities

### Commercial Millwork
${base}/services/commercial-millwork

### Cabinet Refacing
${base}/services/cabinet-refacing

### Closet & Built-Ins
${base}/services/closet-built-ins

## Industries

- Homebuilders & Developers: ${base}/industries/homebuilders-developers
- Interior Designers: ${base}/industries/interior-designers
- Commercial & Hospitality: ${base}/industries/commercial-hospitality

## Projects Gallery

${base}/projects

## Key Pages

- Home: ${base}/
- About: ${base}/about
- Contact: ${base}/contact
- All Services: ${base}/services
- Blog: ${base}/blogs
- Service Areas: ${base}/service-areas

## Service Area

Craftline serves all of Central Texas, with primary coverage in:
Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=300, stale-while-revalidate=60',
    },
  });
}
