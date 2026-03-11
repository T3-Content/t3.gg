export type BlogPostFrontmatter = {
  title: string;
  date: string;
  description?: string;
  hidden?: boolean;
};

export type BlogPost = {
  file: string;
  frontmatter: BlogPostFrontmatter;
  Content: any;
};
