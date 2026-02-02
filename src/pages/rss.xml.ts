import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

const BLOG_DESCRIPTION = "Thought dumps and nerdy stuff";

const toExcerpt = (body: string): string =>
  body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#*_>`~\-!\[\]\(\)]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 200);

export async function GET(context: { site: URL | undefined }) {
  const posts = await getCollection(
    "posts",
    ({ data }) => !data.hidden && !data.draft && !data.archived,
  );

  const sortedPosts = posts.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  return rss({
    title: "Theo's Blog",
    description: BLOG_DESCRIPTION,
    site: context.site ?? new URL("https://t3.gg"),
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description ?? toExcerpt(post.body),
      pubDate: post.data.date,
      link: `/blog/post/${post.id}`,
    })),
  });
}
