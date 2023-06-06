import path from "path";

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
    name: "Box Model",
    link: "/css/box-model",
  },
  {
    id: 6,
    name: "Display Property",
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
    name: "Flex Wrap",
    link: "/css/flex-wrap",
  },
  {
    id: 11,
    name: "Colors Converter",
    link: "/css/colors-converter",
  },
  {
    id: 12,
    name: "Object Fit",
    link: "/css/object-fit",
  },
];

export function LinksByFolder(tech: "html" | "css") {
  const folderPath = path.join(process.cwd(), `./src/docs/${tech}`);
  console.log(folderPath);
}
