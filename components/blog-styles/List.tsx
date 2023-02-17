import React from "react";

type props = {
  children: React.ReactNode;
};

const List = ({ children }: props) => {
  return <ul className="list-disc pl-8 mb-8">{children}</ul>;
};

export default List;
