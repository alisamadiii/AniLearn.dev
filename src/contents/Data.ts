export const platformsData: {
  id: number;
  platform: "facebook" | "twitter" | "linkedin" | "discord";
}[] = [
  {
    id: 1,
    platform: "facebook",
  },
  {
    id: 2,
    platform: "twitter",
  },
  {
    id: 3,
    platform: "linkedin",
  },
  {
    id: 4,
    platform: "discord",
  },
];

// Navbar
export const HTML = [
  {
    id: 1,
    name: "Open Graph",
    link: "/html/open-graph",
  },
  {
    id: 2,
    name: "Inputs",
    link: "/html/inputs",
  },
];

export const CSS = [
  {
    id: 1,
    name: "Flexbox Position",
    link: "/css/flex-position",
  },
  // {
  //   id: 9,
  //   name: "Flex-Order",
  //   link: "/css/flex-order",
  // },
  {
    id: 2,
    name: "Filter",
    link: "/css/filter",
  },
  {
    id: 3,
    name: "Gradient",
    link: "/css/gradient",
  },
  {
    id: 4,
    name: "Position",
    link: "/css/position",
  },
  {
    id: 5,
    name: "Box-Model",
    link: "/css/box-model",
  },
  {
    id: 6,
    name: "Display-Property",
    link: "/css/display-property",
  },
  {
    id: 7,
    name: "Transform",
    link: "/css/transform",
  },
  {
    id: 8,
    name: "Transition",
    link: "/css/transition",
  },
  {
    id: 9,
    name: "Centering a Div",
    link: "/css/4-ways-of-centering-a-div",
  },
  {
    id: 10,
    name: "Flex-Wrap",
    link: "/css/flex-wrap",
  },
];

// Flex Order
export const FLEX_ORDER = [
  {
    id: 1,
    name: "item 1",
    order: 1,
  },
  {
    id: 2,
    name: "item 2",
    order: 2,
  },
  {
    id: 3,
    name: "item 3",
    order: 3,
  },
];

import Reason_1_IMG from "@assets/reason-1.png";
import Reason_2_IMG from "@assets/reason-2.png";
import Reason_3_IMG from "@assets/reason-3.png";
import Reason_4_IMG from "@assets/reason-4.png";

export const REASONS = [
  {
    id: 1,
    title: "Hands-on learning",
    reason:
      "Visual CSS editors provide a hands-on learning experience for users. They can directly manipulate CSS properties and immediately see the visual impact of their changes. This interactive approach enhances understanding and helps users grasp CSS concepts faster.",
    image: Reason_1_IMG,
  },
  {
    id: 2,
    title: "Real-time feedback",
    reason:
      "With visual CSS editors, users can instantly see the results of their CSS modifications. This immediate feedback allows them to experiment, iterate, and fine-tune their designs on the spot, leading to a more efficient and streamlined workflow.",
    image: Reason_2_IMG,
  },
  {
    id: 3,
    title: "Increased productivity",
    reason:
      "By providing a visual interface for CSS editing, these websites can significantly boost productivity. Users can quickly prototype, explore different design options, and make adjustments without the need for manual coding and browser refreshes. This saves time and allows users to focus more on the creative aspects of web design.",
    image: Reason_3_IMG,
  },
  {
    id: 4,
    title: "Enhanced design exploration",
    reason:
      "Visual CSS editors enable users to explore and experiment with various design possibilities more easily. They can quickly modify CSS properties, adjust layout, and experiment with different styles, colors, and effects. This flexibility encourages creativity and enables users to push the boundaries of their designs, leading to more innovative and visually compelling websites.",
    image: Reason_4_IMG,
  },
];
