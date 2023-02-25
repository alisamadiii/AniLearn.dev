export type ContentTypes = {
  content: {
    title: string;
    description: string;
    date: string;
    views: number;
    duration: number;
    twitter: string;
    youtube: null | string;
    link: string;
    free: boolean;
  }[];
  id: string;
  title: string;
};

export type OneContent = {
  title: string;
  description: string;
  date: string;
  views: number;
  duration: number;
  twitter: string;
  youtube: string | null;
  link: string;
  free: boolean;
};
