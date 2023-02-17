export type TestimonialTypes = {
  name: string;
  headline: string | null;
  img: string | null;
  star: number | null;
  testimonial: string;
  homePage: boolean;
  order: number;
  testimonialPage: boolean;
}[];

export const Testimonial: TestimonialTypes = [
  {
    name: "Csaba Kissi",
    headline: "Solopreneur",
    img: "https://pbs.twimg.com/profile_images/1454861068233228289/6sn9BYOf_400x400.jpg",
    star: 5,
    testimonial:
      "I like these animated posts by Ali. They are educational and look great at the same time.",
    homePage: true,
    order: 1,
    testimonialPage: true,
  },
  {
    name: "Francesco Ciulla",
    headline: "Developer Advocate at daily.dev",
    img: "https://pbs.twimg.com/profile_images/1617044903636123650/pYUcGGOu_400x400.jpg",
    star: 5,
    testimonial:
      "Ali is a very active member of the 4C community, and he is always keen to help and support everyone. I like his mindset and how he builds things and explains concepts. Here to support him!",
    homePage: true,
    order: 2,
    testimonialPage: true,
  },
  {
    name: "GrahamTheDev",
    headline: "DevRel",
    img: "https://pbs.twimg.com/profile_images/1609891169500004353/5ZhB2ZTV_400x400.jpg",
    star: 5,
    testimonial:
      "Ali is helpful, friendly and contributes a lot to the community. The visual descriptions of development principles that Ali creates are top tier and very clear. I hope this content continues and evolves for some time as it is nice to see original ideas that make learning more straight forward for everyone.",
    homePage: true,
    order: 3,
    testimonialPage: true,
  },
  {
    name: "Savio Martin",
    headline: null,
    img: "https://pbs.twimg.com/profile_images/1617899739172995072/qF-3t5w8_400x400.jpg",
    star: 5,
    testimonial:
      "I love what you're doing, the animations are top notch. I'll also ask you to think abt YouTube, you can create YouTube shorts and make a living. Anyways all i got to say it, keep rocking and keep husling!",
    homePage: true,
    order: 4,
    testimonialPage: true,
  },
  {
    name: "Madza",
    headline: "Tech Writer and Frontend Developer",
    img: "https://pbs.twimg.com/profile_images/1526471322762715136/w25QtNnl_400x400.jpg",
    star: 5,
    testimonial:
      "Love the animated and unique content by Ali! Tech concepts are often best explained visually and he does amazing job with it!",
    homePage: true,
    order: 5,
    testimonialPage: true,
  },
  {
    name: "Dennis Ivy",
    headline: "Bridge Systems Engineer/Community Manager",
    img: "https://pbs.twimg.com/profile_images/1489066537407365126/iViPGBVE_400x400.jpg",
    star: 5,
    testimonial:
      "New fan here. Getting hooked on Ali's mini videos and awesome design skills!",
    homePage: true,
    order: 6,
    testimonialPage: true,
  },
  {
    name: "Avie",
    headline: "Bridge Systems Engineer/Community Manager",
    img: "https://pbs.twimg.com/profile_images/1592898593324937217/X1mJmFDY_400x400.jpg",
    star: 5,
    testimonial:
      "I love Ali's animated content on Twitter. He post a tutorial everyday and it helps a lot of people because it's easy to follow and understand. Besides that, Ali is a hardworking and trustworthy front-end developer and dev lead. He works fast and accurate and can give logical solutions to a problem. He also communicates well and is a good team player.",
    homePage: true,
    order: 6,
    testimonialPage: true,
  },
  {
    name: "Jeremy",
    headline: "Magic Student at Hogwarts",
    img: "https://pbs.twimg.com/profile_images/1602640911602749442/1_T_JmBk_400x400.jpg",
    star: 5,
    testimonial:
      "You are amazing Ali! Love what you are doing with those animations!",
    homePage: true,
    order: 7,
    testimonialPage: true,
  },
  {
    name: "Njong Emy",
    headline: "Testimonial for Ali",
    img: "https://pbs.twimg.com/profile_images/1613105449473024004/Z3kXqwXn_400x400.jpg",
    star: 5,
    testimonial:
      "Ali's animated content is really super! It's easy to understand and he does it in the neatest way ever!",
    homePage: true,
    order: 8,
    testimonialPage: true,
  },
  {
    name: "Zainab Nisa",
    headline: "Learning code",
    img: "https://pbs.twimg.com/profile_images/1592842246994411521/NkO5-Yap_400x400.jpg",
    star: 5,
    testimonial:
      "here I'd say thank you so much Ali for creating such unique content and sharing your knowledge with us! honestly I daily follow your content and It's really helpful for anyone who's with webdevelopment! Keep sharing!",
    homePage: true,
    order: 9,
    testimonialPage: true,
  },
  {
    name: "Alamin",
    headline: "Content Creator",
    img: "https://pbs.twimg.com/profile_images/1621894338686128130/m-Ld26JR_400x400.jpg",
    star: 5,
    testimonial:
      "I am a big fan of Ali's approach to content creation and teaching. Ali's unique method involves breaking down complex ideas into manageable pieces, and then creating engaging, animated tutorials. This makes the learning process both simpler and more enjoyable.",
    homePage: true,
    order: 10,
    testimonialPage: true,
  },
  {
    name: "Saeed Halabi",
    headline: null,
    img: "https://pbs.twimg.com/profile_images/1598269570170687488/iTvdrxqy_400x400.jpg",
    star: 5,
    testimonial:
      "Hello, Ali! Your content is amazing, and I really enjoy and benefit from learning things visually.",
    homePage: true,
    order: 11,
    testimonialPage: true,
  },
  {
    name: "Muzzammil",
    headline: null,
    img: "https://pbs.twimg.com/profile_images/1596116479191179264/UsI-IjVP_400x400.jpg",
    star: 5,
    testimonial: "Your content is always helpful.",
    homePage: false,
    order: 12,
    testimonialPage: true,
  },
  {
    name: "Khan Ejaj",
    headline: null,
    img: "https://pbs.twimg.com/profile_images/1605040438603177985/zTSklrY8_400x400.jpg",
    star: 5,
    testimonial:
      "I have been watching Ali's animated content from the past & it's helping me to understand various concepts easily with amazing examples. The thing I like most is that he is always there to help people with coding, open source & even in making animated content.",
    homePage: false,
    order: 13,
    testimonialPage: true,
  },
  {
    name: "Lasisi Jafaar",
    headline: "Manager",
    img: null,
    star: 5,
    testimonial:
      "It can't be better than how you are doing it now. Your animation made me understood better those long thread I have been reading and since I star following you, I have gradually improved in my coding program. Thank you",
    homePage: false,
    order: 14,
    testimonialPage: true,
  },
  {
    name: "Nino Piamonte",
    headline: "Designer",
    img: null,
    star: 5,
    testimonial: `Learning through animations really helps me digest programming stuff better as a designer. I know it takes effort to create stuff like this so it's probably the reason why it's effective vs "static" documentations :) Thank you for your work!`,
    homePage: false,
    order: 15,
    testimonialPage: true,
  },
  {
    name: "Atharva Bhawsar",
    headline: null,
    img: null,
    star: 5,
    testimonial:
      "I look up to you as I am trying to provide good content and deliver my value in the industry. You're inspiring and I learn a lot from your great animations and visuals.",
    homePage: false,
    order: 16,
    testimonialPage: true,
  },
  {
    name: "Benjamin",
    headline: null,
    img: null,
    star: null,
    testimonial:
      "Your teachings make learning much more easier. I always look forward to your contents. I'm glad I came across you, Thank you for the knowledge shared",
    homePage: false,
    order: 17,
    testimonialPage: true,
  },
  {
    name: "Shoruntech",
    headline: "Full-Stack Web Developer",
    img: "https://pbs.twimg.com/profile_images/1625873284968611842/IzY2Jc3G_400x400.jpg",
    star: null,
    testimonial:
      "I met this amazing brother from 4C community, we use to do competition when it comes to game, from there I knew his going far in life, because is always willing to learn and explore new technology. Brother you are just getting started, more greatness is still coming your way. Keep it up.",
    homePage: false,
    order: 18,
    testimonialPage: true,
  },
  {
    name: "Harsh Deep",
    headline: "Computer Science Undergrad",
    img: "https://pbs.twimg.com/profile_images/1625873284968611842/IzY2Jc3G_400x400.jpg",
    star: 5,
    testimonial:
      "Ali Reza is an exceptional front-end developer with an amazing talent for creating visually stunning and interactive animated content. He has been an invaluable asset to the community, bringing a high level of creativity. I highly recommend Ali Reza for any front-end development or animation project.",
    homePage: false,
    order: 19,
    testimonialPage: true,
  },
];
