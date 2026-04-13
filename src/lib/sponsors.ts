export const sponsorTierOrder = ["platinum", "gold", "silver", "new"] as const;

export type SponsorTier = (typeof sponsorTierOrder)[number];

export const sponsorCategoryOptions = [
  { slug: "ai", label: "ai" },
  { slug: "analytics", label: "analytics" },
  { slug: "auth", label: "auth" },
  { slug: "ci", label: "ci" },
  { slug: "communications", label: "communications" },
  { slug: "data", label: "data" },
  { slug: "deployment", label: "deployment" },
  { slug: "design", label: "design" },
  { slug: "developer-tools", label: "developer tools" },
  { slug: "education", label: "education" },
  { slug: "finance", label: "finance" },
  { slug: "frontend", label: "frontend" },
  { slug: "hiring", label: "hiring" },
  { slug: "infrastructure", label: "infrastructure" },
  { slug: "monitoring", label: "monitoring" },
  { slug: "productivity", label: "productivity" },
  { slug: "security", label: "security" },
] as const;

export type SponsorCategory = (typeof sponsorCategoryOptions)[number]["slug"];
export type SponsorKind = "sponsor" | "affiliate";

export interface SponsorPageSection {
  heading: string;
  content: string;
}

export interface SponsorPageContent {
  seoTitle: string;
  seoDescription: string;
  intro: string;
  bodySections: SponsorPageSection[];
  primaryCtaLabel: string;
}

export interface SponsorEntry {
  slug: string;
  name: string;
  image: string;
  description: string;
  link: string;
  categories: SponsorCategory[];
  tier: SponsorTier | null;
  kind: SponsorKind;
  page: SponsorPageContent;
}

export interface SponsorDirectorySection {
  id: string;
  heading: string;
  sponsors: SponsorEntry[];
}

type SponsorSeed = {
  name: string;
  image: string;
  description: string;
  link: string;
  categories: SponsorCategory[];
  tier?: SponsorTier | null;
  slug?: string;
  page?: Partial<SponsorPageContent>;
};

const sponsorCategoryLabelMap = Object.fromEntries(
  sponsorCategoryOptions.map(({ slug, label }) => [slug, label]),
) as Record<SponsorCategory, string>;

const sponsorKindLabelMap: Record<SponsorKind, string> = {
  sponsor: "video sponsor",
  affiliate: "affiliate deal",
};

const formatList = (values: string[]) => {
  if (values.length <= 1) {
    return values[0] ?? "";
  }

  if (values.length === 2) {
    return `${values[0]} and ${values[1]}`;
  }

  return `${values.slice(0, -1).join(", ")}, and ${values.at(-1)}`;
};

const buildSlug = (brand: SponsorSeed) => {
  return brand.slug ?? brand.image.replace(".svg.astro", "");
};

export const formatSponsorCategory = (category: SponsorCategory) => {
  return sponsorCategoryLabelMap[category];
};

export const formatSponsorTier = (tier: SponsorTier) => {
  return tier;
};

const buildSponsorPage = (
  brand: SponsorSeed,
  kind: SponsorKind,
): SponsorPageContent => {
  const categoryLabels = brand.categories.map(formatSponsorCategory);
  const categorySummary = formatList(categoryLabels);
  const kindLabel = sponsorKindLabelMap[kind];
  const tierSummary = brand.tier
    ? `it currently sits in theo's ${brand.tier} tier.`
    : kind === "sponsor"
      ? "it's listed in the past sponsors section here."
      : "it currently lives in theo's broader sponsor directory.";

  return {
    seoTitle: brand.page?.seoTitle ?? `${brand.name} | sponsors`,
    seoDescription: brand.page?.seoDescription ?? brand.description,
    intro:
      brand.page?.intro ??
      `${brand.name} is a ${kindLabel} on theo's site. ${brand.description}`,
    bodySections: brand.page?.bodySections ?? [
      {
        heading: "overview",
        content: brand.description,
      },
      {
        heading: "where it fits",
        content: `this is a good fit if you're looking at ${categorySummary}.`,
      },
      {
        heading: "partnership",
        content: `${brand.name} is listed here as a ${kindLabel}, and ${tierSummary}`,
      },
    ],
    primaryCtaLabel: brand.page?.primaryCtaLabel ?? `visit ${brand.name}`,
  };
};

const defineSponsor = (kind: SponsorKind, brand: SponsorSeed): SponsorEntry => {
  return {
    slug: buildSlug(brand),
    name: brand.name,
    image: brand.image,
    description: brand.description,
    link: brand.link,
    categories: brand.categories,
    tier: brand.tier ?? null,
    kind,
    page: buildSponsorPage(brand, kind),
  };
};

const affiliateSeeds: SponsorSeed[] = [
  {
    name: "frontend masters",
    image: "frontend-masters.svg.astro",
    description:
      "name's quite literal - learn frontend from the masters. courses from ryan carniato, primeagen, and many more.",
    link: "https://soydev.link/masters",
    categories: ["education", "frontend"],
  },
  {
    name: "eight sleep",
    image: "eight-sleep.svg.astro",
    description:
      "a watercooler for your bed. sounds stupid but i literally can't sleep without it.",
    link: "https://soydev.link/eightsleep",
    categories: ["productivity"],
  },
  {
    name: "superhuman",
    image: "superhuman.svg.astro",
    description:
      "if you do more than an hour of email a day, you should be on superhuman. works with gmail and outlook.",
    link: "https://soydev.link/superhuman",
    categories: ["productivity"],
  },
  {
    name: "code crafters",
    image: "code-crafters.svg.astro",
    description:
      "learn by rebuilding, literally - one of their courses is recreating redis lol.",
    link: "https://soydev.link/codecrafters",
    categories: ["education", "developer-tools"],
  },
];

const sponsorSeeds: SponsorSeed[] = [
  {
    name: "infinite red",
    image: "infinite-red.svg.astro",
    description: "the first people i call for react native help.",
    link: "https://soydev.link/infinitered",
    categories: ["developer-tools", "frontend"],
    tier: "silver",
  },
  {
    name: "sevalla",
    image: "sevalla.svg.astro",
    description:
      "deploy anything (like vercel but for php, rails, go, whatever else).",
    link: "https://soydev.link/sevalla",
    categories: ["deployment", "infrastructure"],
  },
  {
    name: "posthog",
    image: "posthog.svg.astro",
    description:
      'open source product analytics, feature flags, and llm observability',
    link: "https://soydev.link/posthog",
    categories: ["analytics", "developer-tools"],
    tier: "silver",
  },
  {
    name: "coderabbit",
    image: "code-rabbit.svg.astro",
    description: "ai code review that doesn't suck.",
    link: "https://soydev.link/coderabbit",
    categories: ["ai", "developer-tools"],
    tier: "platinum",
  },
  {
    name: "imagekit",
    image: "imagekit.svg.astro",
    description:
      "the best way to optimize images. works with any storage provider (even urls).",
    link: "https://soydev.link/imagekit",
    categories: ["developer-tools", "infrastructure"],
  },
  {
    name: "blacksmith",
    image: "blacksmith.svg.astro",
    description: "github actions but they're 2x faster and way cheaper.",
    link: "https://soydev.link/blacksmith",
    categories: ["ci", "developer-tools", "infrastructure"],
    tier: "platinum",
  },
  {
    name: "kilo",
    image: "kilo.svg.astro",
    description:
      "the open source code agent that works everywhere with every model",
    link: "https://soydev.link/kilo",
    categories: ["ai", "developer-tools"],
    tier: "gold",
  },
  {
    name: "arcjet",
    image: "arcjet.svg.astro",
    description: "the security platform for the modern web.",
    link: "https://soydev.link/arcjet",
    categories: ["security"],
    tier: "silver",
  },
  {
    name: "vapi",
    image: "vapi.svg.astro",
    description: "add ai voice to your ai apps in minutes.",
    link: "https://soydev.link/vapi",
    categories: ["ai", "communications"],
  },
  {
    name: "notion",
    image: "notion.svg.astro",
    description: "i literally couldn't run my channel without notion.",
    link: "https://soydev.link/notion",
    categories: ["productivity"],
  },
  {
    name: "tuple",
    image: "tuple.svg.astro",
    description: "the best pair programming tool by far.",
    link: "https://soydev.link/tuple",
    categories: ["developer-tools", "productivity"],
  },
  {
    name: "ag grid",
    image: "ag-grid.svg.astro",
    description:
      "if you've ever liked a grid on the internet, 90%+ chance it was ag grid.",
    link: "https://soydev.link/ag-grid",
    categories: ["developer-tools", "frontend"],
  },
  {
    name: "convex",
    image: "convex.svg.astro",
    description:
      "the missing half of your react app. full stack reactivity from db to component. open source and typesafe too!",
    link: "https://soydev.link/convex",
    categories: ["data", "developer-tools"],
  },
  {
    name: "ahrefs",
    image: "ahrefs.svg.astro",
    description: "makes me feel like i don't suck at SEO.",
    link: "https://soydev.link/ahrefs",
    categories: ["analytics"],
  },
  {
    name: "greptile",
    image: "greptile.svg.astro",
    description: "the most tasteful ai code review tool.",
    link: "https://soydev.link/greptile",
    categories: ["ai", "developer-tools"],
    tier: "gold",
  },
  {
    name: "zephyr cloud",
    image: "zephyr.svg.astro",
    description:
      "micro-frontends suck to build. zephyr makes them suck much less. if you have more than 50 people working on your frontend, talk to them.",
    link: "https://soydev.link/zephyr",
    categories: ["deployment", "frontend", "infrastructure"],
  },
  {
    name: "graphite",
    image: "graphite.svg.astro",
    description:
      "github reimagined for people who hate github.",
    link: "https://soydev.link/graphite",
    categories: ["developer-tools", "productivity"],
  },
  {
    name: "g2i",
    image: "g2i.svg.astro",
    description:
      "hire great engineers in days instead of weeks.",
    link: "https://soydev.link/g2i",
    categories: ["hiring"],
    tier: "silver",
  },
  {
    name: "mobbin",
    image: "mobbin.svg.astro",
    description: "the best place to get design inspiration, just 10$ a month.",
    link: "https://soydev.link/mobbin",
    categories: ["design"],
  },
  {
    name: "depot",
    image: "depot.svg.astro",
    description: "40x faster docker builds used by posthog and so many more.",
    link: "https://soydev.link/depot",
    categories: ["ci", "developer-tools", "infrastructure"],
    tier: "gold",
  },
  {
    name: "agentuity",
    image: "agentuity.svg.astro",
    description: "the best way to setup, run, and scale your ai agents.",
    link: "https://soydev.link/agentuity",
    categories: ["ai", "infrastructure"],
    tier: "silver",
  },
  {
    name: "chef by convex",
    image: "chef.svg.astro",
    description: "the ai app builder that actually gets backend.",
    link: "https://soydev.link/chef",
    categories: ["ai", "data"],
    slug: "chef-by-convex",
  },
  {
    name: "fondo",
    image: "fondo.svg.astro",
    description: "the best bookkeeping and tax filing for startups.",
    link: "https://soydev.link/fondo",
    categories: ["finance"],
  },
  {
    name: "bolt.new",
    image: "bolt-new.svg.astro",
    description:
      "best way to start your next project. prompt away, pick whatever framework you like, edit right in the browser.",
    link: "https://soydev.link/bolt",
    categories: ["ai", "developer-tools"],
  },
  {
    name: "clerk",
    image: "clerk.svg.astro",
    description: "auth that your devs and agents will love",
    link: "https://soydev.link/clerk",
    categories: ["auth", "security"],
    tier: "gold",
  },
  {
    name: "browserbase",
    image: "browserbase.svg.astro",
    description:
      "cloud browser infrastructure for ai agents",
    link: "https://soydev.link/browserbase",
    categories: ["ai", "infrastructure"],
    tier: "platinum",
  },
  {
    name: "unkey",
    image: "unkey.svg.astro",
    description: "add api keys to your service without going insane.",
    link: "https://soydev.link/unkey",
    categories: ["developer-tools", "security"],
  },
  {
    name: "payload",
    image: "payload.svg.astro",
    description:
      "headless cms for next.js. like an admin panel for anything. open source too!",
    link: "https://soydev.link/payload",
    categories: ["data", "developer-tools"],
  },
  {
    name: "singlestore",
    image: "singlestore.svg.astro",
    description: "the only db you'll ever need.",
    link: "https://soydev.link/singlestore",
    categories: ["data", "infrastructure"],
  },
  {
    name: "fal",
    image: "fal.svg.astro",
    description:
      "ai apis for generating anything. if you want to add image/video/audio gen to your app, start here.",
    link: "https://soydev.link/fal",
    categories: ["ai"],
  },
  {
    name: "workos",
    image: "workos.svg.astro",
    description: "the only sane way to handle enterprise auth.",
    link: "https://soydev.link/workos",
    categories: ["auth", "security"],
    tier: "platinum",
  },
  {
    name: "ragie ai",
    image: "ragie.svg.astro",
    description: "build apps using anything as a data source. i mean anything.",
    link: "https://soydev.link/ragie",
    categories: ["ai", "data"],
    slug: "ragie-ai",
  },
  {
    name: "agora",
    image: "agora.svg.astro",
    description:
      "the only way i build webrtc into my apps. they have crazy voice ai stuff now too.",
    link: "https://soydev.link/agora",
    categories: ["ai", "communications"],
  },
  {
    name: "bright data",
    image: "bright-data.svg.astro",
    description: "data proxy network for scraping the web.",
    link: "https://soydev.link/brightdata",
    categories: ["data", "infrastructure"],
  },
  {
    name: "appwrite",
    image: "appwrite.svg.astro",
    description: "build your backend in hours, not months.",
    link: "https://soydev.link/appwrite",
    categories: ["data", "developer-tools"],
  },
  {
    name: "highlight",
    image: "highlight.svg.astro",
    description:
      "telemetry and monitoring for your services - open source too.",
    link: "https://soydev.link/highlight",
    categories: ["monitoring"],
  },
  {
    name: "netlify",
    image: "netlify.svg.astro",
    description:
      "deploy your frontend without compromise. scales forever. super fast. ai ready too :)",
    link: "https://soydev.link/netlify",
    categories: ["deployment", "infrastructure"],
  },
  {
    name: "prisma postgres",
    image: "prisma.svg.astro",
    description:
      "probably the best way to deploy postgres rn, especially if you're building serverless.",
    link: "https://soydev.link/prismadb",
    categories: ["data", "infrastructure"],
    slug: "prisma-postgres",
  },
  {
    name: "dockyard",
    image: "dockyard.svg.astro",
    description:
      "industry experts in all things elixir, hit them up if you need to scale.",
    link: "https://soydev.link/dockyard",
    categories: ["developer-tools", "infrastructure"],
  },
  {
    name: "lovable",
    image: "lovable.svg.astro",
    description: "use ai to generate a lovable website.",
    link: "https://soydev.link/lovable",
    categories: ["ai", "design"],
  },
  {
    name: "epic web",
    image: "epic-web.svg.astro",
    description: "the best react course ever made - by kent dodds.",
    link: "https://soydev.link/epicreact",
    categories: ["education", "frontend"],
  },
  {
    name: "augment code",
    image: "augment-code.svg.astro",
    description:
      "ai code assistant built for large codebases. works with vs code, jetbrains, and neovim.",
    link: "https://soydev.link/augmentcode",
    categories: ["ai", "developer-tools"],
    tier: "silver",
  },
  {
    name: "vercel",
    image: "vercel.svg.astro",
    description: "the first place i deploy things.",
    link: "https://soydev.link/vercel",
    categories: ["deployment", "infrastructure"],
  },
  {
    name: "upstash",
    image: "upstash.svg.astro",
    description: "if i'm using redis, i'm probably using upstash for it.",
    link: "https://soydev.link/upstash",
    categories: ["data", "infrastructure"],
  },
  {
    name: "planetscale",
    image: "planetscale.svg.astro",
    description: "mysql with superpowers.",
    link: "https://soydev.link/planetscale",
    categories: ["data", "infrastructure"],
  },
  {
    name: "sentry",
    image: "sentry.svg.astro",
    description: "industry standard for error tracking.",
    link: "https://soydev.link/sentry",
    categories: ["monitoring"],
  },
  {
    name: "axiom",
    image: "axiom.svg.astro",
    description:
      "the world's greatest log dump. they'll parse terabytes for you and give you a dashboard to see it all. wild.",
    link: "https://soydev.link/axiom",
    categories: ["analytics", "monitoring"],
  },
  {
    name: "firecrawl",
    image: "firecrawl.svg.astro",
    description: "the best way to scape the web (that's also open source)",
    link: "https://soydev.link/firecrawl",
    categories: ["ai", "data"],
  },
  {
    name: "embrace",
    image: "embrace.svg.astro",
    description: "web and mobile observability that's actually amazing",
    link: "https://soydev.link/embrace",
    categories: ["monitoring"],
    tier: "new",
  },
  {
    name: "exa",
    image: "exa.svg.astro",
    description: "the only sane way to let your agents search the web",
    link: "https://soydev.link/exa",
    categories: ["ai", "data"],
  },
  {
    name: "daytona",
    image: "daytona.svg.astro",
    description: "the place where you let agents run their code",
    link: "https://soydev.link/daytona",
    categories: ["ai", "infrastructure"],
    tier: "new",
  },
  {
    name: "rork",
    image: "rork.svg.astro",
    description: "the vibe coding platform that actually gets react native",
    link: "https://soydev.link/rork",
    categories: ["ai", "frontend"],
    tier: "new",
  },
  {
    name: "modal",
    image: "modal.svg.astro",
    description: "gpus, sandboxes, and more for your ai apps",
    link: "https://soydev.link/modal",
    categories: ["ai", "infrastructure"],
  },
  {
    name: "factory",
    image: "factory.svg.astro",
    description: "coding agents in your cli, browser, editor, and more.",
    link: "https://soydev.link/factory",
    categories: ["ai", "developer-tools"],
  },
  {
    name: "spacetimedb",
    image: "spacetime.svg.astro",
    description: "the most powerful fullstack database i've ever seen",
    link: "https://soydev.link/spacetime",
    categories: ["data", "developer-tools"],
  },
  {
    name: "deepsource",
    image: "deepsource.svg.astro",
    description: "easily secure your entire development lifecycle",
    link: "https://soydev.link/deepsource",
    categories: ["developer-tools", "security"],
  },
  {
    name: "wispr flow",
    image: "wispr.svg.astro",
    description: "the voice to text product that i can't live without",
    link: "https://soydev.link/wisprflow",
    categories: ["productivity"],
    slug: "wispr-flow",
    tier: "new",
  },
  {
    name: "dnsimple",
    image: "dnsimple.svg.astro",
    description: "the best way to manage your domains and dns",
    link: "https://soydev.link/dnsimple",
    categories: ["deployment", "infrastructure"],
    tier: "new",
  },
  {
    name: "railway",
    image: "railway.svg.astro",
    description: "the modern hosting solution with actual servers",
    link: "https://soydev.link/railway",
    categories: ["deployment", "infrastructure"],
  },
  {
    name: "rwx",
    image: "rwx.svg.astro",
    description: "the best modern ci/cd for teams that actually ship",
    link: "https://soydev.link/rwx",
    categories: ["ci", "deployment", "developer-tools"],
    tier: "new",
  },
  {
    name: "milkstraw",
    image: "milkstraw.svg.astro",
    description: "save up to 50% on your aws bill",
    link: "https://soydev.link/milkstraw",
    categories: ["finance", "infrastructure"],
    tier: "new",
  },
  {
    name: "trigger.dev",
    image: "trigger.svg.astro",
    description: "fully managed ai agents and workflows",
    link: "https://soydev.link/trigger",
    categories: ["ai", "developer-tools"],
    slug: "trigger-dev",
    tier: "new",
  },
  {
    name: "magicpatterns",
    image: "magicpattern.svg.astro",
    description: "the ai design tool for teams that get product",
    link: "https://soydev.link/magicpatterns",
    categories: ["ai", "design"],
    tier: "new",
  },
  {
    name: "sent.dm",
    image: "sentdm.svg.astro",
    description: "imagine if twillio was good...",
    link: "https://soydev.link/sentdm",
    categories: ["communications"],
    slug: "sent-dm",
    tier: "new",
  },
  {
    name: "kernel",
    image: "kernel.svg.astro",
    description: "stupidly fast browser infra for your agents",
    link: "https://soydev.link/kernel",
    categories: ["ai", "infrastructure"],
  },
];

export const affiliates = affiliateSeeds.map((brand) =>
  defineSponsor("affiliate", brand),
);

export const sponsors = sponsorSeeds.map((brand) =>
  defineSponsor("sponsor", brand),
);

export const sponsorDirectory = [...sponsors, ...affiliates];

export const usedSponsorCategories = sponsorCategoryOptions.filter(
  ({ slug }) => {
    return sponsorDirectory.some((brand) => brand.categories.includes(slug));
  },
);

export const getSponsorBySlug = (slug: string) => {
  return sponsorDirectory.find((brand) => brand.slug === slug);
};

const sponsorTierSlugOrder: Record<SponsorTier, string[]> = {
  platinum: ["workos", "blacksmith", "browserbase", "coderabbit"],
  gold: ["clerk", "greptile", "kilo", "depot"],
  silver: ["infinite-red", "arcjet", "g2i", "posthog", "augment-code", "agentuity"],
  new: ["embrace", "rork", "daytona", "milkstraw", "sent-dm", "trigger-dev", "magicpatterns", "rwx", "wispr-flow", "dnsimple"],
};

const sortSponsorsBySlugOrder = (order: string[], list: SponsorEntry[]) => {
  const rank = (slug: string) => {
    const i = order.indexOf(slug);
    return i === -1 ? order.length + 1 : i;
  };
  return [...list].sort((a, b) => rank(a.slug) - rank(b.slug));
};

const tierHeadings: Record<SponsorTier, string> = {
  platinum: "platinum",
  gold: "gold",
  silver: "silver",
  new: "new sponsors",
};

export const getSponsorDirectorySections = (): SponsorDirectorySection[] => {
  const tierSections: SponsorDirectorySection[] = sponsorTierOrder
    .map((tier) => ({
      id: tier,
      heading: tierHeadings[tier],
      sponsors: sortSponsorsBySlugOrder(
        sponsorTierSlugOrder[tier],
        sponsors.filter((brand) => brand.tier === tier),
      ),
    }))
    .filter((section) => section.sponsors.length > 0);

  const directorySections: SponsorDirectorySection[] = [...tierSections];
  const untieredSponsors = sponsors.filter((brand) => brand.tier === null);

  if (untieredSponsors.length > 0) {
    directorySections.push({
      id: "past-sponsors",
      heading: "past sponsors",
      sponsors: untieredSponsors,
    });
  }

  if (affiliates.length > 0) {
    directorySections.push({
      id: "affiliate-deals",
      heading: "affiliate deals",
      sponsors: affiliates,
    });
  }

  return directorySections;
};
