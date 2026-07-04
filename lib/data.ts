// ─── Types ────────────────────────────────────────────────────────────────────

export interface Skill {
  name: string;
  items: string[];
}

export interface PortfolioLink {
  url: string;
  displayName: string;
}

export interface PortfolioCategory {
  id: string;
  label: string;
  links: PortfolioLink[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
}

export interface StatItem {
  value: string;
  label: string;
}

// ─── Helper ───────────────────────────────────────────────────────────────────

function domainToDisplayName(url: string): string {
  try {
    const hostname = new URL(url).hostname.replace(/^www\./, "");
    const domain = hostname.split(".")[0];
    // Split camelCase and hyphens, capitalize each word
    return domain
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  } catch {
    return url;
  }
}

// ─── Stats ────────────────────────────────────────────────────────────────────

export const stats: StatItem[] = [
  { value: "400+", label: "Total Projects" },
  { value: "60+", label: "WordPress Sites" },
  { value: "30+", label: "Simvoly Sites" },
  { value: "25+", label: "GHL Funnels" },
];

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skills: Skill[] = [
  {
    name: "Funnel & CRM Platforms",
    items: [
      "Go High Level",
      "ClickFunnels",
      "Simvoly",
      "HubSpot",
      "ActiveCampaign",
    ],
  },
  {
    name: "Web Development",
    items: [
      "WordPress",
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "PHP",
      "MySQL",
    ],
  },
  {
    name: "Digital Marketing",
    items: [
      "SEO Optimization",
      "Email Marketing",
      "SMS Marketing",
      "Conversion Rate Optimization",
      "A/B Testing",
    ],
  },
  {
    name: "Technical Integration",
    items: ["REST APIs", "Webhooks", "Zapier", "Stripe", "PayPal", "Twilio"],
  },
  {
    name: "Design & UX",
    items: [
      "UI/UX Design",
      "Adobe XD",
      "Figma",
      "Responsive Design",
    ],
  },
  {
    name: "Analytics & Tracking",
    items: [
      "Google Analytics",
      "Google Tag Manager",
      "Facebook Pixel",
      "Conversion Tracking",
    ],
  },
  {
    name: "AI & Automation",
    items: [
      "Prompt Engineering",
      'AI-Assisted Development ("Vibe Coding")',
      "Workflow Automation",
      "n8n / Botpress Basics",
    ],
  },
];

// ─── Portfolio ────────────────────────────────────────────────────────────────

const clickfunnelsUrls = [
  "https://marikrogshus.clickfunnels.com/fatburn-summer-edition-2025",
];

const ghlUrls = [
  "https://butkovllc.com/home-783722",
  "https://tool.gogemi.com/v2/preview/X2bMBwPZIkv7AT44R3zj?notrack=true",
  "https://app.gohighlevel.com/v2/preview/zK8DZ76Gud6n1GWxd6rw?notrack=true",
  "https://tool.gogemi.com/v2/preview/HNteVsS4h0hy7tY421y4?notrack=true",
  "https://app.gohighlevel.com/v2/preview/A9QZul976zVJNuALnGxx",
  "https://app.gohighlevel.com/v2/preview/3x4rERn8tp1Qp85KLo5K",
  "https://paidcreators.com/sale-page",
  "https://ceocleaningaccelerator.com/kit",
  "https://marjorietorre.com/mini-course-blueprint",
  "https://metabolicsleep.com/reset-your-sleep",
  "https://peacefulnightsbaby.com/",
  "https://go.expertscale.com/limited-tickets",
  "https://go.cnvrtx.com/ibl-funnels",
  "https://shopfunnels.net/",
  "https://ceocleaningaccelerator.com/webinar",
  "https://paidcreators.com/sps",
  "https://app.funnels.so/v2/preview/za6Kczq91UdMxaENBD3r?notrack=true",
  "https://paidmasterclass.com/digital-product-empire-trust-funnel814437-6435-1123",
  "https://marjorietorre.com/free-guide-",
  "https://app.gohighlevel.com/v2/preview/pQ5iAZiW9l9YGWkeqPOg?notrack=true",
  "https://app.funnels.so/v2/preview/uwBs36aEoeLZrvSDFj50?notrack=true",
  "https://app.funnels.so/v2/preview/n0RNPlfiYgrOTDPc8vyD",
  "https://app.funnels.so/v2/preview/WdocfaMAvYqY0Iwi4Pqp",
  "https://app.gohighlevel.com/v2/preview/1ThSsTti8nbXEtCfhJ59",
  "https://app.gohighlevel.com/v2/preview/xgO4Aq3W6z2xdNIFJ9fi",
  "https://app.gohighlevel.com/v2/preview/tgr6UQj10rg0ASW6udoP",
];

const simvolyUrls = [
  "https://millercraneworks.com/",
  "https://hartzellsheatair.com/",
  "https://amcopest.com/",
  "https://busybeewg.com/",
  "https://thecraneschool.com/",
  "https://theonlinecraneschool.com/",
  "https://agilebusinessaccounting.com/",
  "https://iowahomeexteriors.com/",
  "https://tntsuperiormarketing.com/",
  "https://buynow757.com/",
  "https://christmaslightsbyamco.builda.space/",
  "https://infoad.builda.space/",
  "https://phenomenalfatherhood.com/",
  "https://coloradobootsfirearmsinstruction.com/",
  "https://makingfriendstour.com/",
  "https://kandkplumbing.com/",
  "https://ecoshieldtexas.com/",
  "https://aulhomesva.com/",
  "https://legacytaxfree.com/",
  "https://thepatchguyz.net/",
  "https://patchguyz.com/",
  "https://toniwardgriefcoaching.com/",
  "https://roasadagency.com/",
  "https://yergz.com/",
  "https://topqualityhomeimprovement.com/",
  "https://thesquarebooks.com/",
  "https://revitalizeinfusionaesthetics.com/",
  "https://keepitkleanco.com/",
  "https://jawillyservices.com/",
  "https://diggsconsultinggroup.org/",
  "https://builda.space/",
];

const wordpressUrls = [
  "https://csicarpet.com/",
  "https://rubabconsultants.com/",
  "https://thesmithmortgagegroup.net/",
  "https://precisionpaintexperts.com/",
  "https://tektonexteriorsms.com/",
  "https://soloperformancellc.com/",
  "https://paulappellaw.com/",
  "https://ddpcorporation.com/",
  "https://redemptionplumbingservices.com/",
  "https://ronningenresearch.com/",
  "https://www.skylersplumbing.com/",
  "https://safetyisamindset.com/",
];

function buildLinks(urls: string[]): PortfolioLink[] {
  return urls.map((url) => ({
    url,
    displayName: domainToDisplayName(url),
  }));
}

export const portfolioCategories: PortfolioCategory[] = [
  { id: "ghl", label: "GHL Funnels", links: buildLinks(ghlUrls) },
  { id: "simvoly", label: "Simvoly Websites", links: buildLinks(simvolyUrls) },
  {
    id: "wordpress",
    label: "WordPress Websites",
    links: buildLinks(wordpressUrls),
  },
  {
    id: "clickfunnels",
    label: "ClickFunnels",
    links: buildLinks(clickfunnelsUrls),
  },
];

// ─── Featured work image paths ───────────────────────────────────────────────

export const featuredImages: string[] = Array.from(
  { length: 14 },
  (_, i) => `/images/image${i + 1}.png`
);

// ─── Experience ──────────────────────────────────────────────────────────────

export const experience: ExperienceEntry[] = [
  {
    role: "Senior Funnel Builder",
    company: "FNNLX",
    period: "2023 – Present",
    bullets: [
      "Designed and optimized 200+ high-converting sales funnels using GoHighLevel for lead generation and automation, improving average conversion rates by 35%",
      "Automated CRM workflows for 50+ clients, reducing manual tasks by 70%",
      "Built complex pipelines, triggers, and automation sequences across multiple industries",
      "Integrated third-party tools/APIs (Stripe, PayPal, Zapier, Twilio) with GHL",
      "Delivered white-labeled GHL solutions for 15+ agencies",
      "Developed custom JS/CSS/HTML solutions to extend GHL functionality and UI/UX",
    ],
  },
  {
    role: "Web Developer",
    company: "Maxenious",
    period: "2019 – 2022",
    bullets: [
      "Developed 150+ responsive, SEO-optimized WordPress websites across real estate, construction, healthcare, finance, e-commerce",
      "Achieved 90+ PageSpeed scores through theme/plugin customization",
      "Improved website loading speed by 60% on average",
      "Implemented SEO strategies resulting in 200%+ organic traffic increases",
      "Managed hosting migrations, security, and maintenance for 100+ client sites",
    ],
  },
];

// ─── Education ────────────────────────────────────────────────────────────────

export const education: EducationEntry[] = [
  {
    degree: "Bachelor of Software Engineering",
    institution: "Government College University, Faisalabad",
    period: "2013 – 2017",
  },
  {
    degree: "ICS (Computer Science)",
    institution: "BISE Faisalabad",
    period: "2010 – 2013",
  },
];
