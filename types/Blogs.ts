export type SlugProps = {
  docs: {
    frontmatter: {
      title: string;
      author: string;
      date: string;
      category: string[];
      order: number;
      description: string;
    };
    blog: string;
  }[];
  mdxSource: any;
  blogs: string;
};

export type BlogProps = {
  data: {
    frontmatter: {
      title: string;
      category: string[];
      date: string;
      author: string;
      order: number;
      description: string;
    };
    readingTime: {
      minutes: number;
      text: string;
      time: number;
      words: number;
    };
    blog: string;
  }[];
};

export type NavProps = {
  links: {
    frontmatter: {
      title: string;
      category: string[];
      date: string;
      author: string;
      order: number;
      description: string;
    };
    blog: string;
  }[];
  technology: string;
  slug?: string | string[] | undefined;
  isOpen?: boolean;
  setIsOpen?: any;
};
