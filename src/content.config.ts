import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/index.md" }),
  slug: ({ id }) => id.replace(/\/index$/, ""),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      tags: z.array(z.string()).optional(),
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
