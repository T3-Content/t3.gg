type Sponsor = {
  name: string;
  image: string;
  description: string;
  link: string;
};

export const affiliates = [
  {
    name: "frontend masters",
    image: "frontend-masters.svg.astro",
    description:
      "name's quite literal - learn frontend from the masters. courses from ryan carniato, primeagen, and many more.",
    link: "https://soydev.link/masters",
  },
  {
    name: "eight sleep",
    image: "eight-sleep.svg.astro",
    description:
      "a watercooler for your bed. sounds stupid but i literally can't sleep without it.",
    link: "https://soydev.link/eightsleep",
  },
  {
    name: "superhuman",
    image: "superhuman.svg.astro",
    description:
      "if you do more than an hour of email a day, you should be on superhuman. works with gmail and outlook.",
    link: "https://soydev.link/superhuman",
  },
  {
    name: "code crafters",
    image: "code-crafters.svg.astro",
    description:
      "learn by rebuilding, literally - one of their courses is recreating redis lol.",
    link: "https://soydev.link/codecrafters",
  },
] satisfies Sponsor[];

export const sponsors = [
  {
    name: "infinite red",
    image: "infinite-red.svg.astro",
    description: "the first people i call for react native help.",
    link: "https://soydev.link/infinitered",
  },
  {
    name: "sevalla",
    image: "sevalla.svg.astro",
    description:
      "deploy anything (like vercel but for php, rails, go, whatever else).",
    link: "https://soydev.link/sevalla",
  },
  {
    name: "posthog",
    image: "posthog.svg.astro",
    description:
      '"All in one suite of product tools" - also the only analytics provider i don\'t hate. open source too!',
    link: "https://soydev.link/posthog",
  },
  {
    name: "coderabbit",
    image: "code-rabbit.svg.astro",
    description: "ai code review that doesn't suck.",
    link: "https://soydev.link/coderabbit",
  },
  {
    name: "imagekit",
    image: "imagekit.svg.astro",
    description:
      "the best way to optimize images. works with any storage provider (even urls).",
    link: "https://soydev.link/imagekit",
  },
  {
    name: "blacksmith",
    image: "blacksmith.svg.astro",
    description: "github actions but they're 2x faster and way cheaper.",
    link: "https://soydev.link/blacksmith",
  },
  {
    name: "kilo",
    image: "kilo.svg.astro",
    description:
      "the open source ai coding agent for vscode that codes, architects, debugs, and much more.",
    link: "https://soydev.link/kilo",
  },
  {
    name: "arcjet",
    image: "arcjet.svg.astro",
    description: "the security platform for the modern web.",
    link: "https://soydev.link/arcjet",
  },
  {
    name: "vapi",
    image: "vapi.svg.astro",
    description: "add ai voice to your ai apps in minutes.",
    link: "https://soydev.link/vapi",
  },
  {
    name: "notion",
    image: "notion.svg.astro",
    description: "i literally couldn't run my channel without notion.",
    link: "https://soydev.link/notion",
  },
  {
    name: "tuple",
    image: "tuple.svg.astro",
    description: "the best pair programming tool by far.",
    link: "https://soydev.link/tuple",
  },
  {
    name: "ag grid",
    image: "ag-grid.svg.astro",
    description:
      "if you've ever liked a grid on the internet, 90%+ chance it was ag grid.",
    link: "https://soydev.link/ag-grid",
  },
  {
    name: "convex",
    image: "convex.svg.astro",
    description:
      "the missing half of your react app. full stack reactivity from db to component. open source and typesafe too!",
    link: "https://soydev.link/convex",
  },
  {
    name: "ahrefs",
    image: "ahrefs.svg.astro",
    description: "makes me feel like i don't suck at SEO.",
    link: "https://soydev.link/ahrefs",
  },
  {
    name: "greptile",
    image: "greptile.svg.astro",
    description: "the most tasteful ai code review tool.",
    link: "https://soydev.link/greptile",
  },
  {
    name: "zephyr cloud",
    image: "zephyr.svg.astro",
    description:
      "micro-frontends suck to build. zephyr makes them suck much less. if you have more than 50 people working on your frontend, talk to them.",
    link: "https://soydev.link/zephyr",
  },
  {
    name: "graphite",
    image: "graphite.svg.astro",
    description:
      "if github is slowing you down, graphite will speed you back up. better pr flows for fast moving teams (used by vercel, ramp, snowflake, brex and more)",
    link: "https://soydev.link/graphite",
  },
  {
    name: "g2i",
    image: "g2i.svg.astro",
    description:
      "stop hiring bad engineers. g2i will do real video interviews with hundreds of candidates to get you the best possible engineer in weeks.",
    link: "https://soydev.link/g2i",
  },
  {
    name: "mobbin",
    image: "mobbin.svg.astro",
    description: "the best place to get design inspiration, just 10$ a month.",
    link: "https://soydev.link/mobbin",
  },
  {
    name: "depot",
    image: "depot.svg.astro",
    description: "40x faster docker builds used by posthog and so many more.",
    link: "https://soydev.link/depot",
  },
  {
    name: "agentuity",
    image: "agentuity.svg.astro",
    description: "the best way to setup, run, and scale your ai agents.",
    link: "https://soydev.link/agentuity",
  },
  {
    name: "chef by convex",
    image: "chef.svg.astro",
    description: "the ai app builder that actually gets backend.",
    link: "https://soydev.link/chef",
  },
  {
    name: "fondo",
    image: "fondo.svg.astro",
    description: "the best bookkeeping and tax filing for startups.",
    link: "https://soydev.link/fondo",
  },
  {
    name: "bolt.new",
    image: "bolt-new.svg.astro",
    description:
      "best way to start your next project. prompt away, pick whatever framework you like, edit right in the browser.",
    link: "https://soydev.link/bolt",
  },
  {
    name: "clerk",
    image: "clerk.svg.astro",
    description: "the only auth solution i don't hate using.",
    link: "https://soydev.link/clerk",
  },
  {
    name: "browserbase",
    image: "browserbase.svg.astro",
    description:
      "web browser for your ai. prompt for parsing, dodge captchas, get data out of anything.",
    link: "https://soydev.link/browserbase",
  },
  {
    name: "unkey",
    image: "unkey.svg.astro",
    description: "add api keys to your service without going insane.",
    link: "https://soydev.link/unkey",
  },

  {
    name: "payload",
    image: "payload.svg.astro",
    description:
      "headless cms for next.js. like an admin panel for anything. open source too!",
    link: "https://soydev.link/payload",
  },
  {
    name: "singlestore",
    image: "singlestore.svg.astro",
    description: "the only db you'll ever need.",
    link: "https://soydev.link/singlestore",
  },
  {
    name: "fal",
    image: "fal.svg.astro",
    description:
      "ai apis for generating anything. if you want to add image/video/audio gen to your app, start here.",
    link: "https://soydev.link/fal",
  },
  {
    name: "workos",
    image: "workos.svg.astro",
    description: "the only sane way to handle enterprise auth.",
    link: "https://soydev.link/workos",
  },
  {
    name: "ragie ai",
    image: "ragie.svg.astro",
    description: "build apps using anything as a data source. i mean anything.",
    link: "https://soydev.link/ragie",
  },
  {
    name: "agora",
    image: "agora.svg.astro",
    description:
      "the only way i build webrtc into my apps. they have crazy voice ai stuff now too.",
    link: "https://soydev.link/agora",
  },
  {
    name: "bright data",
    image: "bright-data.svg.astro",
    description: "data proxy network for scraping the web.",
    link: "https://soydev.link/brightdata",
  },
  {
    name: "appwrite",
    image: "appwrite.svg.astro",
    description: "build your backend in hours, not months.",
    link: "https://soydev.link/appwrite",
  },
  {
    name: "highlight",
    image: "highlight.svg.astro",
    description:
      "telemetry and monitoring for your services - open source too.",
    link: "https://soydev.link/highlight",
  },
  {
    name: "netlify",
    image: "netlify.svg.astro",
    description:
      "deploy your frontend without compromise. scales forever. super fast. ai ready too :)",
    link: "https://soydev.link/netlify",
  },
  {
    name: "prisma postgres",
    image: "prisma.svg.astro",
    description:
      "probably the best way to deploy postgres rn, especially if you're building serverless.",
    link: "https://soydev.link/prismadb",
  },
  {
    name: "dockyard",
    image: "dockyard.svg.astro",
    description:
      "industry experts in all things elixir, hit them up if you need to scale.",
    link: "https://soydev.link/dockyard",
  },
  {
    name: "lovable",
    image: "lovable.svg.astro",
    description: "use ai to generate a lovable website.",
    link: "https://soydev.link/lovable",
  },
  {
    name: "epic web",
    image: "epic-web.svg.astro",
    description: "the best react course ever made - by kent dodds.",
    link: "https://soydev.link/epicreact",
  },
  {
    name: "augment code",
    image: "augment-code.svg.astro",
    description:
      "ai code assistant built for large codebases. works with vs code, jetbrains, and neovim.",
    link: "https://soydev.link/augmentcode",
  },
  {
    name: "vercel",
    image: "vercel.svg.astro",
    description: "the first place i deploy things.",
    link: "https://soydev.link/vercel",
  },
  {
    name: "upstash",
    image: "upstash.svg.astro",
    description: "if i'm using redis, i'm probably using upstash for it.",
    link: "https://soydev.link/upstash",
  },
  {
    name: "planetscale",
    image: "planetscale.svg.astro",
    description: "mysql with superpowers.",
    link: "https://soydev.link/planetscale",
  },
  {
    name: "sentry",
    image: "sentry.svg.astro",
    description: "industry standard for error tracking.",
    link: "https://soydev.link/sentry",
  },
  {
    name: "axiom",
    image: "axiom.svg.astro",
    description:
      "the world's greatest log dump. they'll parse terabytes for you and give you a dashboard to see it all. wild.",
    link: "https://soydev.link/axiom",
  },
  {
    name: "firecrawl",
    image: "firecrawl.svg.astro",
    description: "the best way to scape the web (that's also open source)",
    link: "https://soydev.link/firecrawl",
  },
  {
    name: "embrace",
    image: "embrace.svg.astro",
    description: "web and mobile observability that's actually amazing",
    link: "https://soydev.link/embrace",
  },
  {
    name: "exa",
    image: "exa.svg.astro",
    description: "the only sane way to let your agents search the web",
    link: "https://soydev.link/exa",
  },
  {
    name: "daytona",
    image: "daytona.svg.astro",
    description: "the place where you let agents run their code",
    link: "https://soydev.link/daytona",
  },
  {
    name: "rork",
    image: "rork.svg.astro",
    description: "the vibe coding platform that actually gets react native",
    link: "https://soydev.link/rork",
  },
  {
    name: "modal",
    image: "modal.svg.astro",
    description: "gpus, sandboxes, and more for your ai apps",
    link: "https://soydev.link/modal",
  },
  {
    name: "factory",
    image: "factory.svg.astro",
    description: "coding agents in your cli, browser, editor, and more.",
    link: "https://soydev.link/factory",
  },
  {
    name: "spacetimedb",
    image: "spacetime.svg.astro",
    description: "the most powerful fullstack database i've ever seen",
    link: "https://soydev.link/spacetime",
  },
  {
    name: "deepsource",
    image: "deepsource.svg.astro",
    description: "easily secure your entire development lifecycle",
    link: "https://soydev.link/deepsource",
  },
  {
    name: "jfrog fly",
    image: "jfrog.svg.astro",
    description: "artifact management that's built for your ai agents",
    link: "https://soydev.link/jfrogfly",
  },
  {
    name: "wispr flow",
    image: "wispr.svg.astro",
    description: "the voice to text product that i can't live without",
    link: "https://soydev.link/wispr",
  },
  {
    name: "dnsimple",
    image: "dnsimple.svg.astro",
    description: "the best way to manage your domains and dns",
    link: "https://soydev.link/dnsimple",
  },
  {
    name: "railway",
    image: "railway.svg.astro",
    description: "the modern hosting solution with actual servers",
    link: "https://soydev.link/railway",
  },
  {
    name: "rwx",
    image: "rwx.svg.astro",
    description: "the best modern ci/cd for teams that actually ship",
    link: "https://soydev.link/rwx",
  },
  {
    name: "kernel",
    image: "kernel.svg.astro",
    description: "stupidly fast browser infra for your agents",
    link: "https://soydev.link/kernel",
  },
  {
    name: "milkstraw",
    image: "milkstraw.svg.astro",
    description: "save up to 50% on your aws bill",
    link: "https://soydev.link/milkstraw",
  },
  {
    name: "trigger.dev",
    image: "trigger.svg.astro",
    description: "fully managed ai agents and workflows",
    link: "https://soydev.link/trigger",
  },
  {
    name: "magicpatterns",
    image: "magicpattern.svg.astro",
    description: "the ai design tool for teams that get product",
    link: "https://soydev.link/magicpatterns",
  },
  {
    name: "sent.dm",
    image: "sentdm.svg.astro",
    description: "imagine if twillio was good...",
    link: "https://soydev.link/sentdm",
  },
] satisfies Sponsor[];
