import React from "react";

type props = {
  children: React.ReactNode;
};

const List = ({ children }: props) => {
  return <ul className="pl-8 mb-8 list-disc">{children}</ul>;
};

export default List;
