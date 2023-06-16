import path from "path";
import { IconType } from "react-icons";

export const platformsData: {
  id: number;
  platform: "facebook" | "twitter" | "linkedin" | "discord";
}[] = [
  {
    id: 1,
    platform: "facebook"
  },
  {
    id: 2,
    platform: "twitter"
  },
  {
    id: 3,
    platform: "linkedin"
  },
  {
    id: 4,
    platform: "discord"
  }
];

// Navbar
export const HTML = [
  {
    id: 1,
    name: "Open Graph",
    link: "/html/open-graph"
  },
  {
    id: 2,
    name: "Inputs",
    link: "/html/inputs"
  }
];

export const CSS = [
  {
    id: 1,
    name: "Flexbox Position",
    link: "/css/flex-position"
  },
  {
    id: 2,
    name: "Filter",
    link: "/css/filter"
  },
  {
    id: 3,
    name: "Gradient",
    link: "/css/gradient"
  },
  {
    id: 4,
    name: "Position",
    link: "/css/position"
  },
  {
    id: 5,
    name: "Box Model",
    link: "/css/box-model"
  },
  {
    id: 6,
    name: "Display Property",
    link: "/css/display-property"
  },
  {
    id: 7,
    name: "Transform",
    link: "/css/transform"
  },
  {
    id: 8,
    name: "Transition",
    link: "/css/transition"
  },
  {
    id: 9,
    name: "Centering a Div",
    link: "/css/4-ways-of-centering-a-div"
  },
  {
    id: 10,
    name: "Flex Wrap",
    link: "/css/flex-wrap"
  },
  {
    id: 11,
    name: "Colors Converter",
    link: "/css/colors-converter"
  },
  {
    id: 12,
    name: "Object Fit",
    link: "/css/object-fit"
  },
  {
    id: 13,
    name: "Overflow",
    link: "/css/overflow"
  }
];

import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";

type TestimonialsTypes = {
  id: number;
  name: string;
  headline: string | null;
  image: string;
  testimonial: string;
  from: [IconType, "twitter" | "linkedin"];
}[];

export const Testimonials: TestimonialsTypes = [
  {
    id: 1,
    name: "Andrej",
    headline: null,
    image: "https://pbs.twimg.com/profile_images/1510928172686225411/bTCh20YN_400x400.jpg",
    testimonial: "woah nice job with this project Ali",
    from: [AiOutlineTwitter, "twitter"]
  },
  {
    id: 2,
    name: "Tamal Das",
    headline: null,
    image: "https://pbs.twimg.com/profile_images/1639235422932074499/qiGUX-3O_400x400.png",
    testimonial: "Love the website, kudos to all your hard work and amazing skills !",
    from: [AiOutlineTwitter, "twitter"]
  },
  {
    id: 3,
    name: "Tobiloba",
    headline: "Frontend Engineer",
    image: "https://pbs.twimg.com/profile_images/1643147713016463360/9CZmUksq_400x400.jpg",
    testimonial: "This is amazing Ali!! Good job with this. 🙌🙌",
    from: [AiOutlineTwitter, "twitter"]
  },
  {
    id: 4,
    name: "Ankit Patel",
    headline: "Frontend Engineer",
    image: "https://pbs.twimg.com/profile_images/1598376248426008576/2odWMNah_400x400.jpg",
    testimonial:
      "This is really awesome. I tried it just now and its very good. I started learning CSS and now I get a great website. I will definitely use it daily to strong my understanding. Thanks a lot Ali😄. Looking forward to more products like these from you",
    from: [AiOutlineTwitter, "twitter"]
  },
  {
    id: 5,
    name: "Ankit Patel",
    headline: "Frontend Developer",
    image:
      "https://media.licdn.com/dms/image/D4D03AQG-N84vn4yUAg/profile-displayphoto-shrink_400_400/0/1668233048413?e=1691625600&v=beta&t=qY4AB1R3cT64a2Lsu729qRjdQKx2W2ecc5jxkTCW0xU",
    testimonial: "I appreciate all the effort you put in, WELL DONE 😍",
    from: [AiFillLinkedin, "linkedin"]
  }
];
