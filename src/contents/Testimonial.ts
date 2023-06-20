import { IconType } from "react-icons";
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
  },
  {
    id: 6,
    name: "Amit",
    headline: "Web Developer",
    image: "https://pbs.twimg.com/profile_images/1456893330940301314/HgYQtxxh_400x400.jpg",
    testimonial: "This totally simplifies learning the concepts 💯",
    from: [AiOutlineTwitter, "twitter"]
  },
  {
    id: 7,
    name: "Saurav Pant",
    headline: "MERN Developer",
    image: "https://pbs.twimg.com/profile_images/1588726687365300224/PswA-dI4_400x400.jpg",
    testimonial: "Great Ali, this is one of the best resources to learn CSS.",
    from: [AiOutlineTwitter, "twitter"]
  }
];
