# Blog Post Organization

This folder is organized for editing ergonomics without breaking links.

## Structure

- Active posts: `src/content/posts/active/<year>/<slug>/index.md`
- Archived posts: `src/content/posts/archive/<year>/<slug>/index.md`

## Canonical Slug (Important)

Each post should include a `slug` field in frontmatter:

```md
---
title: "My Post"
slug: "my-post"
date: "2026-02-02"
---
```

The `slug` is the canonical URL segment used at `/blog/post/<slug>`.
Because the slug is explicit, you can move posts between folders freely
without breaking old links.

## Optional Aliases

If you ever rename a slug, you can keep old URLs working:

```md
slug: "new-slug"
slugAliases:
  - "old-slug"
```

Aliases will redirect to the canonical slug.

