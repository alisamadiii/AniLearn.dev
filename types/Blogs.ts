export type BlogProps = {
  blogs: {
    frontmatter: {
      title: string;
      category: string[];
      author: string;
      order: number;
    };
    slug: string;
  }[];
};

export type NavProps = {
  links: {
    frontmatter: {
      title: string;
      category: string[];
      author: string;
      order: number;
    };
    slug: string;
  }[];
  technology: string;
  slug?: string | string[] | undefined;
};
