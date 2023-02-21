export type BlogProps = {
  blogs: {
    frontmatter: {
      title: string;
      category: string[];
      author: string;
      order: number;
      description: string;
      edit: string;
    };
    readingTime: {
      minutes: number;
      text: string;
      time: number;
      words: number;
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
      description: string;
      edit: string;
    };
    readingTime: {
      minutes: number;
      text: string;
      time: number;
      words: number;
    };
    slug: string;
  }[];
  technology: string;
  slug?: string | string[] | undefined;
  isOpen?: boolean;
  setIsOpen?: any;
};
