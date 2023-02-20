type IDeveloperTypes = {
  id: number;
  name: string;
  img: string;
  twitter: string;
}[];

type IReasonTypes = {
  id: number;
  title: string;
  description: string;
}[];

export const DEVELOPERS: IDeveloperTypes = [
  {
    id: 1,
    name: "Csaba Kissi",
    img: "https://pbs.twimg.com/profile_images/1454861068233228289/6sn9BYOf_400x400.jpg",
    twitter: "https://twitter.com/csaba_kissi",
  },
  {
    id: 2,
    name: "Francesco",
    img: "https://pbs.twimg.com/profile_images/1617044903636123650/pYUcGGOu_400x400.jpg",
    twitter: "https://twitter.com/FrancescoCiull4",
  },
  {
    id: 3,
    name: "Savio ッ",
    img: "https://pbs.twimg.com/profile_images/1617899739172995072/qF-3t5w8_400x400.jpg",
    twitter: "https://twitter.com/saviomartin7",
  },
  {
    id: 4,
    name: "Graham",
    img: "https://pbs.twimg.com/profile_images/1609891169500004353/5ZhB2ZTV_400x400.jpg",
    twitter: "https://twitter.com/GrahamTheDev",
  },
  {
    id: 5,
    name: "Madza",
    img: "https://pbs.twimg.com/profile_images/1526471322762715136/w25QtNnl_400x400.jpg",
    twitter: "https://twitter.com/madzadev",
  },
];

export const REASONS: IReasonTypes = [
  {
    id: 1,
    title: "Engaging",
    description:
      "Visual videos are a highly engaging way to learn. They can hold your attention, increase your focus and make learning more interesting and enjoyable.",
  },
  {
    id: 2,
    title: "Better retention",
    description:
      "Research shows that visual videos can help learners retain information better. By combining visuals with audio, the brain is more likely to remember and recall the information.",
  },
  {
    id: 3,
    title: "Flexible",
    description:
      "Visual videos are flexible, and learners can watch them on their own time, pause and replay as needed. This allows for a more personalized and self-paced learning experience.",
  },
  {
    id: 4,
    title: "Accessible",
    description:
      "Videos can be accessed easily from almost anywhere with an internet connection, making them a convenient and accessible form of learning.",
  },
  {
    id: 5,
    title: "Multimodal learning",
    description:
      "Visual videos allow for the integration of multiple learning styles, including visual, auditory, and kinesthetic learning. This makes it easier for learners to understand and remember the information.",
  },
  {
    id: 6,
    title: "Cost-effective",
    description:
      "Visual videos can be a cost-effective way of learning. Many educational videos are available for free on platforms like YouTube or Khan Academy, and even premium educational videos are often less expensive than traditional classroom-based training.",
  },
];
