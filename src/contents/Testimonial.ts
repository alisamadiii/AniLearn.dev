type TestimonialTypes = {
  num: number;
  headline: string | null;
  from: string;
  message: string;
  image: string;
  star: number;
}[];

export const TESTIMONIAL: TestimonialTypes = [
  {
    num: 1,
    headline: "Solopreneur",
    from: "Csaba Kissi",
    message:
      "I like these animated posts by Ali. They are educational and look great at the same time.",
    image:
      "https://pbs.twimg.com/profile_images/1454861068233228289/6sn9BYOf_400x400.jpg",
    star: 5,
  },
  {
    num: 2,
    headline: "DevRel",
    from: "GrahamTheDev",
    message:
      "Ali is helpful, friendly and contributes a lot to the community.The visual descriptions of development principles that Ali creates are top tier and very clear. I hope this content continues and evolves for some time as it is nice to see original ideas that make learning more straight forward for everyone.",
    image:
      "https://pbs.twimg.com/profile_images/1609891169500004353/5ZhB2ZTV_400x400.jpg",
    star: 5,
  },
  {
    num: 3,
    headline: null,
    from: "Savio Martin",
    message:
      "I love what you're doing, the animations are top notch. I'll also ask you to think abt YouTube, you can create YouTube shorts and make a living. Anyways all i got to say it, keep rocking and keep husling!",
    image:
      "https://pbs.twimg.com/profile_images/1617899739172995072/qF-3t5w8_400x400.jpg",
    star: 5,
  },
  {
    num: 4,
    headline: "Tech Writer and Frontend Developer",
    from: "Madza",
    message:
      "Love the animated and unique content by Ali! Tech concepts are often best explained visually and he does amazing job with it!",
    image:
      "https://pbs.twimg.com/profile_images/1526471322762715136/w25QtNnl_400x400.jpg",
    star: 5,
  },
  {
    num: 5,
    headline: "Bridge Systems Engineer/Community Manager",
    from: "Avie",
    message:
      "I love Ali's animated content on Twitter. He post a tutorial everyday and it helps a lot of people because it's easy to follow and understand.",
    image:
      "https://pbs.twimg.com/profile_images/1592898593324937217/X1mJmFDY_400x400.jpg",
    star: 5,
  },
];
