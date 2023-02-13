// https://console.firebase.google.com/project/anilearn-8faf2/overview

type ContentTypes = {
  HTML: {
    title: string;
    description: string;
    date: string;
    views: number;
    duration: number;
    twitter: string;
    youtube: null | string;
    link: string;
  }[];
  CSS: {
    title: string;
    description: string;
    date: string;
    views: number;
    duration: number;
    twitter: string;
    youtube: null | string;
    link: string;
  }[];
  JS: {
    title: string;
    description: string;
    date: string;
    views: number;
    duration: number;
    twitter: string;
    youtube: null | string;
    link: string;
  }[];
};

export const CONTENTS: ContentTypes = {
  HTML: [
    {
      title: "Favicon",
      description:
        "A favicon is a small image displayed next to the page title in the browser tab.",
      date: "04 Feb",
      views: 5500,
      duration: 1,
      twitter:
        "https://twitter.com/Ali_Developer05/status/1621795869162102784?s=20&t=A_PuPnh4A43kwI__tVTHig",
      youtube: null,
      link: "twitter",
    },
  ],
  CSS: [
    {
      title: "CSS In-line, Internal, External Style sheet",
      description: "You can use CSS styles in 3 different ways.",
      date: "29 Jan",
      views: 0,
      duration: 1,
      twitter:
        "https://twitter.com/Ali_Developer05/status/1619625130153635846?s=20&t=A_PuPnh4A43kwI__tVTHig",
      youtube: null,
      link: "twitter",
    },
    {
      title: "Specificity",
      description: "06 Feb",
      date: "The selector that is more specific than another one is going to win. (id, class, tag)",
      views: 0,
      duration: 1,
      twitter:
        "https://twitter.com/Ali_Developer05/status/1622520536143396865?s=20&t=A_PuPnh4A43kwI__tVTHig",
      youtube: null,
      link: "twitter",
    },
    {
      title: "CSS Combinator",
      description:
        "They combine other selectors in a way that gives them a useful relationship to each other and the location of content in the document.",
      date: "27 Jan",
      views: 0,
      duration: 1,
      twitter:
        "https://twitter.com/Ali_Developer05/status/1618896898303332352?s=20&t=A_PuPnh4A43kwI__tVTHig",
      youtube: null,
      link: "twitter",
    },
    {
      title: "Justify and Align",
      description: "They are used to align items vertically & horizontally.",
      date: "04 Jan",
      views: 41000,
      duration: 2,
      twitter:
        "https://twitter.com/Ali_Developer05/status/1610562316214632448?s=20&t=A_PuPnh4A43kwI__tVTHig",
      youtube: null,
      link: "twitter",
    },
    {
      title: "Flex order",
      description:
        "It will give you the possibility of controlling the order of content.",
      date: "20 Jan",
      views: 70000,
      duration: 1,
      twitter:
        "https://twitter.com/Ali_Developer05/status/1616366217438334977?s=20&t=A_PuPnh4A43kwI__tVTHig",
      youtube: null,
      link: "twitter",
    },
    {
      title: "Flex Wrap",
      description:
        "The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines.",
      date: "18 Jan",
      views: 11000,
      duration: 1,
      twitter:
        "https://twitter.com/Ali_Developer05/status/1615665174522003456?s=20&t=A_PuPnh4A43kwI__tVTHig",
      youtube: null,
      link: "twitter",
    },
    {
      title: "Grid Box",
      description:
        "The grid CSS property is a shorthand property that sets all of the explicit and implicit grid properties in a single declaration.",
      date: "08 Jan",
      views: 44000,
      duration: 1,
      twitter:
        "https://twitter.com/Ali_Developer05/status/1612013121111220224?s=20&t=A_PuPnh4A43kwI__tVTHig",
      youtube: null,
      link: "twitter",
    },
    {
      title: "When do I use grid and flex?",
      description:
        "Grid & Flex are two major concepts in CSS which are used for layout.",
      date: "09 Jan",
      views: 0,
      duration: 1,
      twitter:
        "https://twitter.com/Ali_Developer05/status/1611286752538537984?s=20&t=A_PuPnh4A43kwI__tVTHig",
      youtube: null,
      link: "twitter",
    },
    {
      title: "Position part |",
      description:
        "The position CSS property sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements.",
      date: "25 Jan",
      views: 0,
      duration: 2,
      twitter:
        "https://twitter.com/Ali_Developer05/status/1618170789437771780?s=20&t=A_PuPnh4A43kwI__tVTHig",
      youtube: null,
      link: "twitter",
    },
    {
      title: "Position part ||",
      description: "It was described in Position part |",
      date: "28 Jan",
      views: 0,
      duration: 2,
      twitter:
        "https://twitter.com/Ali_Developer05/status/1619259244334960640?s=20&t=A_PuPnh4A43kwI__tVTHig",
      youtube: null,
      link: "twitter",
    },
    {
      title: "Transform part |",
      description:
        "The transform CSS property lets you rotate, scale, skew, or translate an element.",
      date: "26 Jan",
      views: 0,
      duration: 1,
      twitter:
        "https://twitter.com/Ali_Developer05/status/1618538835528515585?s=20&t=A_PuPnh4A43kwI__tVTHig",
      youtube: null,
      link: "twitter",
    },
    {
      title: "Transform part ||",
      description: "It was described in Transform part |",
      date: "12 Feb",
      views: 0,
      duration: 1,
      twitter:
        "https://twitter.com/Ali_Developer05/status/1624695413730324480?s=20&t=A_PuPnh4A43kwI__tVTHig",
      youtube: null,
      link: "twitter",
    },
    {
      title: "4 ways of centering a div",
      description:
        "You can center a div by using Flex, Grid, Position & Margin.",
      date: "2 Feb",
      views: 0,
      duration: 1,
      twitter:
        "https://twitter.com/Ali_Developer05/status/1621072217491795968?s=20&t=A_PuPnh4A43kwI__tVTHig",
      youtube: null,
      link: "twitter",
    },
    {
      title: "CSS short way",
      description: "Make your work easy by learning short way of writing CSS.",
      date: "19 Jan",
      views: 0,
      duration: 1,
      twitter:
        "https://twitter.com/Ali_Developer05/status/1615998664610283522?s=20&t=A_PuPnh4A43kwI__tVTHig",
      youtube: null,
      link: "twitter",
    },
    {
      title: "different way of using padding and margin",
      description:
        "You will learn about padding-inline/block & margin-inline/block.",
      date: "1 Feb",
      views: 0,
      duration: 1,
      twitter:
        "https://twitter.com/Ali_Developer05/status/1620709031114584064?s=20&t=A_PuPnh4A43kwI__tVTHig",
      youtube: null,
      link: "twitter",
    },
    {
      title: "min-width & max-width",
      description:
        "These CSS properties set the minimum and maximum width of an element.",
      date: "22 Jan",
      views: 0,
      duration: 1,
      twitter:
        "https://twitter.com/Ali_Developer05/status/1617085704215093250?s=20&t=A_PuPnh4A43kwI__tVTHig",
      youtube: null,
      link: "twitter",
    },
    {
      title: "calc()",
      description:
        "The calc() CSS function lets you perform calculations when specifying CSS property values.",
      date: "30 Jan",
      views: 0,
      duration: 1,
      twitter:
        "https://twitter.com/Ali_Developer05/status/1619983939313213442?s=20&t=A_PuPnh4A43kwI__tVTHig",
      youtube: null,
      link: "twitter",
    },
    {
      title: "Media Queries",
      description: "It is used for making your website responsive.",
      date: "21 Jan",
      views: 0,
      duration: 1,
      twitter:
        "https://twitter.com/Ali_Developer05/status/1616722384681316352?s=20&t=A_PuPnh4A43kwI__tVTHig",
      youtube: null,
      link: "twitter",
    },
    {
      title: "Hover (Media Queries)",
      description:
        "when hover is supported, Watch the video, You will understand.",
      date: "12 Jan",
      views: 0,
      duration: 1,
      twitter:
        "https://twitter.com/Ali_Developer05/status/1613461326080376835?s=20&t=A_PuPnh4A43kwI__tVTHig",
      youtube: null,
      link: "twitter",
    },
    {
      title: "CSS Pseudo",
      description: "You will learn about :is() & :has().",
      date: "10 Jan",
      views: 0,
      duration: 1,
      twitter:
        "https://twitter.com/Ali_Developer05/status/1612739431303360517?s=20&t=A_PuPnh4A43kwI__tVTHig",
      youtube: null,
      link: "twitter",
    },
  ],
  JS: [
    {
      title: "",
      description: "",
      date: "",
      views: 0,
      duration: 1,
      twitter: "",
      youtube: null,
      link: "twitter",
    },
  ],
};
