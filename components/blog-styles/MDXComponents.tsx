import { Heading, Heading2, Text, List, BlockQuote, Anchor } from "./elements";

export const MDXComponents = {
  h1: (props: any) => <Heading {...props}></Heading>,
  h2: (props: any) => <Heading2 {...props}></Heading2>,
  p: (props: any) => <Text {...props}></Text>,
  ul: (props: any) => <List {...props}></List>,
  blockquote: (props: any) => <BlockQuote {...props}></BlockQuote>,
  a: (props: any) => <Anchor {...props}></Anchor>,
};
