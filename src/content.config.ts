import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({
    base: "./src/content/posts",
    pattern: "**/index.md",
    generateId: ({ entry, data }) => {
      // Prefer an explicit, canonical slug so folders can move freely
      // without breaking old links.
      const explicitSlug =
        typeof data.slug === "string" && data.slug.trim().length > 0
          ? data.slug.trim()
          : undefined;
      if (explicitSlug) return explicitSlug;

      // Fall back to the entry path (minus the index file).
      return entry.replace(/\/index\.md$/, "");
    },
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      tags: z.array(z.string()).optional(),
      // Canonical slug used for stable URLs.
      slug: z.string().optional(),
      // Optional legacy slugs that should redirect to the canonical slug.
      slugAliases: z.array(z.string()).optional(),
      draft: z.boolean().default(false),
      hidden: z.boolean().default(false),
      archived: z.boolean().default(false),
      readMore: z.boolean().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      imageURL: z.string().url().optional(),
      canonicalUrl: z.string().url().optional(),
    }),
});

export const collections = {
  posts,
};
