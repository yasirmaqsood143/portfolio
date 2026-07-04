# Next.js Portfolio Website — Build Prompt

Copy everything below into your AI coding tool (Claude Code, Cursor, etc.) to generate the project.

---

## PROMPT START

Build a **single-page portfolio website** for me using **Next.js (App Router) + Tailwind CSS**. I am Yasir Maqsood, a Go High Level Expert, Funnel Builder, and Web Developer & SEO Specialist based in Faisalabad, Pakistan. This is a ONE-PAGE site (no separate routes/pages) — everything scrolls on `app/page.tsx` with anchor-linked sections in the nav.

### Tech Stack
- Next.js 14+ (App Router), TypeScript
- Tailwind CSS for styling
- Framer Motion for subtle scroll/entrance animations (optional but preferred)
- lucide-react for icons
- Fully responsive (mobile-first)

### Assets already in the project
- `public/profile.jpg` — my profile photo, use in the Hero section
- `public/images/image1.png` through `public/images/image14.png` — screenshots of my funnel/portfolio work, use these in a "Featured Work" gallery/grid near the top of the Portfolio section

### Global Design Direction
- Modern, clean, professional — dark navy/blue primary palette (like a tech/SaaS product), with a bright accent color (blue or teal) for CTAs and highlights
- Sticky top nav with smooth-scroll links to: Home, Skills, Portfolio, Experience, Contact
- Good whitespace, card-based layout for skills and portfolio links, subtle hover states
- No filler stock photography — use only the provided images

---

### 1. Hero Section
- `profile.jpg` as a circular photo
- Name: **Yasir Maqsood**
- Title: **Go High Level Expert | Funnel Builder | Web Developer & SEO Specialist**
- Short tagline (1-2 lines): results-driven developer with 5+ years of experience building 400+ high-converting funnels and websites across GoHighLevel, WordPress, ClickFunnels, and Simvoly
- Location: Faisalabad, Pakistan
- Contact: phone/WhatsApp `+92 344 7864656`, email `yasirmaqsood143@gmail.com`
- Two CTA buttons: "View My Work" (scrolls to Portfolio) and "Contact Me on WhatsApp" (opens `https://wa.me/923447864656`)
- Optional: small stat strip — 400+ Total Projects, 60+ WordPress Sites, 30+ Simvoly Sites, 25+ GHL Funnels

### 2. Skills Section
Organize into cards/columns, **do not mention RCM, medical billing, or OB/GYN billing anywhere**:

**Funnel & CRM Platforms**
Go High Level, ClickFunnels, Simvoly, HubSpot, ActiveCampaign

**Web Development**
WordPress, HTML5, CSS3, JavaScript, React, Next.js, PHP, MySQL

**Digital Marketing**
SEO Optimization, Email Marketing, SMS Marketing, Conversion Rate Optimization, A/B Testing

**Technical Integration**
REST APIs, Webhooks, Zapier, Stripe, PayPal, Twilio

**Design & UX**
UI/UX Design, Adobe XD, Figma, Responsive Design

**Analytics & Tracking**
Google Analytics, Google Tag Manager, Facebook Pixel, Conversion Tracking

**AI & Automation (add this new category)**
Prompt Engineering, AI-Assisted Development ("Vibe Coding"), Workflow Automation, n8n/Botpress basics

### 3. Portfolio Section
Use a **tabbed or filterable layout** with 4 categories: `GHL Funnels`, `Simvoly Websites`, `WordPress Websites`, `ClickFunnels`. Each tab shows a grid of link cards (site name/domain + external-link icon, opens in new tab). Before the tabs, show a small image gallery using `image1.png` → `image14.png` (4-column grid on desktop, 2 on mobile) labeled "Featured Funnel Designs".

Use these deduplicated links exactly as given (I removed duplicates for you):

**ClickFunnels Projects**
- https://marikrogshus.clickfunnels.com/fatburn-summer-edition-2025

**Go High Level / Funnel Projects**
- https://butkovllc.com/home-783722
- https://tool.gogemi.com/v2/preview/X2bMBwPZIkv7AT44R3zj?notrack=true
- https://app.gohighlevel.com/v2/preview/zK8DZ76Gud6n1GWxd6rw?notrack=true
- https://tool.gogemi.com/v2/preview/HNteVsS4h0hy7tY421y4?notrack=true
- https://app.gohighlevel.com/v2/preview/A9QZul976zVJNuALnGxx
- https://app.gohighlevel.com/v2/preview/3x4rERn8tp1Qp85KLo5K
- https://paidcreators.com/sale-page
- https://ceocleaningaccelerator.com/kit
- https://marjorietorre.com/mini-course-blueprint
- https://metabolicsleep.com/reset-your-sleep
- https://peacefulnightsbaby.com/
- https://go.expertscale.com/limited-tickets
- https://go.cnvrtx.com/ibl-funnels
- https://shopfunnels.net/
- https://ceocleaningaccelerator.com/webinar
- https://paidcreators.com/sps
- https://app.funnels.so/v2/preview/za6Kczq91UdMxaENBD3r?notrack=true
- https://paidmasterclass.com/digital-product-empire-trust-funnel814437-6435-1123
- https://marjorietorre.com/free-guide-
- https://app.gohighlevel.com/v2/preview/pQ5iAZiW9l9YGWkeqPOg?notrack=true
- https://app.funnels.so/v2/preview/uwBs36aEoeLZrvSDFj50?notrack=true
- https://app.funnels.so/v2/preview/n0RNPlfiYgrOTDPc8vyD
- https://app.funnels.so/v2/preview/WdocfaMAvYqY0Iwi4Pqp
- https://app.gohighlevel.com/v2/preview/1ThSsTti8nbXEtCfhJ59
- https://app.gohighlevel.com/v2/preview/xgO4Aq3W6z2xdNIFJ9fi
- https://app.gohighlevel.com/v2/preview/tgr6UQj10rg0ASW6udoP

**Simvoly Websites**
- https://millercraneworks.com/
- https://hartzellsheatair.com/
- https://amcopest.com/
- https://busybeewg.com/
- https://thecraneschool.com/
- https://theonlinecraneschool.com/
- https://agilebusinessaccounting.com/
- https://iowahomeexteriors.com/
- https://tntsuperiormarketing.com/
- https://buynow757.com/
- https://christmaslightsbyamco.builda.space/
- https://infoad.builda.space/
- https://phenomenalfatherhood.com/
- https://coloradobootsfirearmsinstruction.com/
- https://makingfriendstour.com/
- https://kandkplumbing.com/
- https://ecoshieldtexas.com/
- https://aulhomesva.com/
- https://legacytaxfree.com/
- https://thepatchguyz.net/
- https://patchguyz.com/
- https://toniwardgriefcoaching.com/
- https://roasadagency.com/
- https://yergz.com/
- https://topqualityhomeimprovement.com/
- https://thesquarebooks.com/
- https://revitalizeinfusionaesthetics.com/
- https://keepitkleanco.com/
- https://jawillyservices.com/
- https://diggsconsultinggroup.org/
- https://builda.space/

**WordPress Websites**
- https://csicarpet.com/
- https://rubabconsultants.com/
- https://thesmithmortgagegroup.net/
- https://precisionpaintexperts.com/
- https://tektonexteriorsms.com/
- https://soloperformancellc.com/
- https://paulappellaw.com/
- https://ddpcorporation.com/
- https://redemptionplumbingservices.com/
- https://ronningenresearch.com/
- https://www.skylersplumbing.com/
- https://safetyisamindset.com/

For each link card, auto-derive a clean display name from the domain (strip `https://`, `www.`, and path) — e.g. `millercraneworks.com` → "Miller Crane Works". Show the category badge and an "Visit Site" button that opens the link in a new tab (`target="_blank" rel="noopener noreferrer"`).

### 4. Experience Section
Timeline/card layout with two entries:

**Senior Funnel Builder** — FNNLX (2023 – Present)
- Designed and optimized 200+ high-converting sales funnels using GoHighLevel for lead generation and automation, improving average conversion rates by 35%
- Automated CRM workflows for 50+ clients, reducing manual tasks by 70%
- Built complex pipelines, triggers, and automation sequences across multiple industries
- Integrated third-party tools/APIs (Stripe, PayPal, Zapier, Twilio) with GHL
- Delivered white-labeled GHL solutions for 15+ agencies
- Developed custom JS/CSS/HTML solutions to extend GHL functionality and UI/UX

**Web Developer** — Maxenious (2019 – 2022)
- Developed 150+ responsive, SEO-optimized WordPress websites across real estate, construction, healthcare, finance, e-commerce
- Achieved 90+ PageSpeed scores through theme/plugin customization
- Improved website loading speed by 60% on average
- Implemented SEO strategies resulting in 200%+ organic traffic increases
- Managed hosting migrations, security, and maintenance for 100+ client sites

### 5. Education (small section)
- Bachelor of Software Engineering — Government College University, Faisalabad (2013–2017)
- ICS (Computer Science) — BISE Faisalabad (2010–2013)

### 6. Contact / Footer Section
- Heading: "Let's Build Something High-Converting Together"
- Contact cards: Phone/WhatsApp `+92 344 7864656`, Email `yasirmaqsood143@gmail.com`, Location: Faisalabad, Pakistan
- WhatsApp CTA button linking to `https://wa.me/923447864656`
- Footer: copyright, "Yasir Maqsood — ProBuild Sites"

### 7. Floating WhatsApp Button (site-wide, fixed position)
- Fixed to **bottom-right** of the viewport on every scroll position, `z-50`, circular green (#25D366) button with the WhatsApp icon (use `lucide-react`'s `MessageCircle` or an inline WhatsApp SVG icon)
- Links to `https://wa.me/923447864656` with a pre-filled message like `?text=Hi Yasir, I found your portfolio and want to discuss a project`
- Opens in a new tab
- Add a subtle pulse/bounce animation and a small tooltip on hover ("Chat on WhatsApp")
- Make sure it renders correctly on mobile (no overlap with content, safe-area padding) — this should be a client component (`"use client"`) placed once in the root layout so it persists across the single page

### Project Structure
```
app/
  layout.tsx        -> includes <WhatsAppButton /> globally
  page.tsx           -> renders all sections in order
  globals.css
components/
  Navbar.tsx
  Hero.tsx
  Skills.tsx
  Portfolio.tsx       -> tabs + link cards + image gallery
  Experience.tsx
  Education.tsx
  Contact.tsx
  Footer.tsx
  WhatsAppButton.tsx
lib/
  data.ts             -> export skills, links, experience as typed arrays/objects
public/
  profile.jpg
  images/image1.png ... image14.png
```

Put all the link/skills/experience data into `lib/data.ts` as typed constants so the components stay clean and the content is easy for me to edit later.

### SEO
- Add proper `<title>` and `<meta name="description">` in `app/layout.tsx`: "Yasir Maqsood | Go High Level Expert, Funnel Builder & Web Developer"
- Add Open Graph tags using `profile.jpg` as the OG image
- Semantic HTML (`<section>`, `<nav>`, proper heading hierarchy)

### Deliverable
Generate the full working Next.js project with all components, the `lib/data.ts` data file, Tailwind config, and the floating WhatsApp button wired up in the root layout. Make sure the site builds and runs with `npm run dev` with no errors.

## PROMPT END
