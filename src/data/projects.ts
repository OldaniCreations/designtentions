import propertyCompassImage from "@/assets/property-compass-hero.png";
import rosterbossImage from "@/assets/rosterboss-hero.png";
import forkastImage from "@/assets/forkast-hero.png";
import caresyncImage from "@/assets/caresync-hero.png";

export interface Project {
  id: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  image: string;
  tools: string[];
}

export interface ProjectDetail extends Project {
  dream: string;
  journey: string;
  lessons: string;
  externalLink?: string;
}

export const projects: Project[] = [
  {
    id: "forkast",
    title: "Forkast",
    category: "experiments",
    tag: "Meal Planning Gone Wild",
    description:
      "What started as a dream to price-compare groceries across multiple stores turned into a lesson in web scraping walls.",
    image: forkastImage,
    tools: ["Lovable", "Cursor", "Figma Make", "Spoonacular API"],
  },
  {
    id: "rosterboss",
    title: "RosterBoss",
    category: "experiments",
    tag: "Fantasy Football Unleashed",
    description:
      "Born from the chaos of managing three fantasy rosters at once. Then added some AI insights to level up my game.",
    image: rosterbossImage,
    tools: ["Cursor", "Figma Make", "MindStudio", "ESPN API"],
  },
  {
    id: "property-compass",
    title: "Property Compass",
    category: "experiments",
    tag: "Real Estate Automation",
    description:
      "A custom property assessment engine that automates Central Oregon real estate due diligence using RAG-powered intelligence.",
    image: propertyCompassImage,
    tools: ["Lovable", "RAG", "Deschutes County Data"],
  },
  {
    id: "caresync",
    title: "CareSync",
    category: "experiments",
    tag: "Healthcare UX Concept",
    description:
      "A concept born from a healthcare UX course challenge: help people consolidate their scattered health records into one unified, accessible place.",
    image: caresyncImage,
    tools: ["Lovable", "Figma", "UX Research"],
  },
];

export const projectDetails: Record<string, ProjectDetail> = {
  forkast: {
    ...projects.find((p) => p.id === "forkast")!,
    dream: `My dream was simple (and ambitious): a site where I could plan meals, generate a shopping list, and then watch it magically shop across multiple stores—Misfits Market, Instacart, Amazon—to find the best prices. I'd pick my products, the deals would be highlighted, and I'd hop to each cart to checkout. The ultimate grocery optimization machine.`,
    journey: `I started by designing in Figma Make and building in Cursor, then attempted to import that design into Lovable. First attempt? Not great. The styles were off, images broken. So I pushed to GitHub and pulled it directly into Lovable from my repo. This worked much better, just a few tweaks to get it closer to the original.

Then came the scraping adventure with Firecrawl. The dream was to crawl grocery sites for real-time pricing. Reality? Instacart blocked me. Hard. The AI started "helping" by filling in fake average prices, which were hilariously off. If I selected products and went to the actual store carts, I had to start over anyway, nothing ported.

So I pivoted. Ripped out the pricing dreams and focused on what worked: a robust recipe management system. I added a feature to import recipes from anywhere and integrated the Spoonacular API using Lovable's connectors which was very impressive and that part was seamless.`,
    lessons: `Sometimes the dream has to shrink to ship. The price comparison feature hit walls that weren't worth climbing. But what survived is genuinely useful: a meal planning tool that generates shopping lists I can send to myself. Not the original vision, but a tool I actually use every week.

Next iteration? Maybe I'll explore different approaches to the pricing problem. Or maybe I'll just accept that some dreams are meant to stay dreams.`,
    externalLink: "https://forkast.lovable.app/",
  },
  rosterboss: {
    ...projects.find((p) => p.id === "rosterboss")!,
    dream: `Last year I was in three separate Fantasy Football leagues. Every game day, I wanted one view of all my rosters—live, updating, no switching between each individual team to track my players. Nobody offered this. So this year, I decided to build it myself.

But I wanted more than just a dashboard. I wanted AI-powered insights: recommendations on who to start, who to bench, an edge over my competition.`,
    journey: `I built the core in Cursor with Figma Make handling UI tweaks. Connected to an open-source ESPN Fantasy Football API to pull roster data. It worked.

Then I discovered MindStudio at a webinar and thought: perfect for the AI layer. I'd scrape the top Fantasy Football YouTube channels and sites for intel, feed it to my rosters, get smart recommendations.

The reality was messier. MindStudio was clunky and I restarted the project multiple times. I got the scraping working for the top 5 fantasy sites, but the AI kept getting confused. It would jumble my three rosters together, swap players between them, and once recommended I bench my Quarterback for a Wide Receiver.

Eventually I got it working, flaws and all. But I've since disconnected the AI and eventually I quit my MindStudio subscription.`,
    lessons: `The tool works for its core purpose: seeing all my rosters at once. The AI insights were a fun experiment but not worth the subscription cost for the quality of output.

Next year? Import this project into Lovable and consolidate everything. Right now it's scattered across Figma Make, Cursor, GitHub, and Vercel. I'd love to just use Lovable and its connectors to simplify the whole stack. Also by next year, who knows what will be possible.`,
    externalLink: "https://rosterboss.vercel.app/",
  },
  "property-compass": {
    ...projects.find((p) => p.id === "property-compass")!,
    dream: `Finding the perfect acreage in Central Oregon isn't just about the view. It's navigating Deschutes County's dense regulatory landscape: zoning codes, ADU allowances, HOA restrictions, Fire Fuel zones, wildlife overlays. My wife and I were stuck in a loop—find a promising Zillow listing, then manually cross-reference it against a dozen different data sources.

My father, who did this the old way, was amazed I could find in minutes what took him weeks. But even minutes felt too long for a repeatable process.`,
    journey: `I moved from "manual searching" to "automated intelligence" by building a custom property assessment engine in Lovable. Enter an address, and the system triggers a multi-source data harvest, then processes everything through a RAG (Retrieval-Augmented Generation) database containing the specific legal and environmental restrictions of Central Oregon.

The tool doesn't just find data, it assesses it. It interprets zoning nuances and acreage requirements to give a definitive report on whether a property can actually support our needs: ADU feasibility, wildlife compliance, the whole picture. Chaotic searching became a structured, archivable library of property intelligence.`,
    lessons: `By automating due diligence, we reduced the risk of human error in one of life's largest investments. The tool acts as a digital safeguard, if it doesn't lead us to the perfect property, it performs the more critical task of protecting us from the wrong one.

This project is proof of how I approach problems: build a system that replaces noise with clarity.`,
    externalLink: "https://propertycompass.lovable.app/",
  },
  caresync: {
    ...projects.find((p) => p.id === "caresync")!,
    dream: `I took "Transition into UX for Healthcare" by Eric Shumake, a Principal Researcher at HXRlabs.com with 20+ years in ethical healthcare UX. Eric challenged us to create something that would help real people with their healthcare issues.

At the same time, my mom was closing her clinic of 15 years to retire. Her biggest worry? Making sure her patients could access their health records. Through quick research—scanning communities and forums for healthcare pain points—I kept seeing the same theme: people struggling to get their records, let alone keep them in one place.`,
    journey: `The research validated what my mom was experiencing from the provider side. People were frustrated, scattered records across multiple systems, and no unified view of their health history.

I designed a concept that would allow people to pull all their records into one secure place. CareSync focuses on giving patients control: a dashboard to view lab results, medications, visits, and the ability to share records with new providers seamlessly.`,
    lessons: `This project reinforced why healthcare UX matters. The problem isn't just technical—it's about trust, privacy, and giving people agency over their own health information.

Building for healthcare taught me to think differently about user experience. Every design decision carries weight when it affects someone's ability to understand and manage their health.`,
    externalLink: "https://care-sync-lyart.vercel.app/dashboard",
  },
};
