import type { Config } from "@react-router/dev/config";

export default {
  // Static site generation configuration
  ssr: true,
  prerender: true,
  // Generate static HTML files for all routes
  basename: "/",
} satisfies Config;
