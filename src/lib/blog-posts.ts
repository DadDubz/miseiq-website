export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  readTime: string;
  imageUrl: string;
  imageAlt: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "reduce-food-cost",
    title: "How to Reduce Food Cost Without Lowering Quality",
    summary:
      "A practical framework to control ingredient spend while preserving guest experience and menu consistency.",
    readTime: "6 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Restaurant team reviewing ingredients in a busy kitchen",
    content: [
      "Food cost control starts with accurate recipe costing tied to real invoice prices, not stale spec sheets. When operators update costs weekly, they spot inflation pressure before month-end close.",
      "Build a variance routine that compares theoretical usage to actual purchases and recorded waste. This creates one clear list of high-impact items to investigate each week.",
      "Protect quality by optimizing low-contribution items first. Small pricing adjustments, tighter prep standards, and selective ingredient substitutions can improve margin without harming guest satisfaction.",
    ],
  },
  {
    slug: "daily-kpis",
    title: "5 Daily Restaurant KPIs That Predict Margin Pressure",
    summary:
      "Track the right daily indicators so you can act before a monthly P&L reveals the damage.",
    readTime: "5 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Restaurant manager checking dashboard metrics on a tablet",
    content: [
      "Start with prime cost by daypart, then layer in comps/voids rate, purchase price drift, overtime by manager, and invoice reconciliation lag.",
      "Daily visibility matters because these indicators move faster than accounting cycles. The sooner you identify drift, the cheaper it is to fix.",
      "Create one action queue tied to owners and due dates so KPI monitoring becomes operational execution, not just reporting.",
    ],
  },
  {
    slug: "chart-of-accounts",
    title: "Building a Chart of Accounts for Multi-Location Operators",
    summary:
      "Design a scalable accounting structure that keeps store-level reporting clean and leadership rollups reliable.",
    readTime: "7 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Finance and operations team reviewing reports at a table",
    content: [
      "Use a parent-child account structure that preserves consistency across locations while still allowing local detail.",
      "Separate controllable costs from fixed costs to support better day-to-day operating decisions at the GM level.",
      "Standardize mapping from POS, payroll, invoice, and inventory sources into canonical account codes to avoid noisy monthly closes.",
    ],
  },
  {
    slug: "menu-pricing-scenarios",
    title: "Menu Pricing Scenarios: Test Changes Before You Roll Out",
    summary:
      "Use scenario modeling to forecast margin impact before changing prices on live menus.",
    readTime: "6 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Restaurant menu and dishes laid out on a table",
    content: [
      "Scenario modeling helps teams compare multiple pricing paths by item, category, and daypart before any guest-facing changes are made.",
      "Evaluate expected contribution margin, volume sensitivity, and competitive context together instead of looking only at food cost percentage.",
      "Roll out in stages, measure actual performance, and feed results back into the next model iteration for faster, safer menu optimization.",
    ],
  },
  {
    slug: "integration-health-playbook",
    title: "Integration Health Playbook for Reliable Restaurant Data",
    summary:
      "Keep POS, accounting, invoice, and inventory connections healthy so decisions are based on trusted data.",
    readTime: "8 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Developer monitoring data integrations on a laptop",
    content: [
      "Treat integration health as an operating discipline: monitor sync recency, error rates, and source coverage every day.",
      "Use reconnect and refresh workflows with clear user feedback for 4XX/5XX failures and rate-limit retries.",
      "Pair technical monitoring with ownership rules so every failed sync has an accountable person, due date, and documented resolution.",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
