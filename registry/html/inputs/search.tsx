import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { PreviewWrapper } from "@/components/Wrapper";
import Input from "@/components/input";

const users = [
  {
    name: "Ali Reza",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At nostrum reiciendis dolor aut iusto excepturi magnam eligendi, earum aspernatur est aliquam odit omnis molestiae similique quos, maxime illum dolore nobis.",
  },
  {
    name: "Mohammad",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At nostrum reiciendis dolor aut iusto excepturi magnam eligendi, earum aspernatur est aliquam odit omnis molestiae similique quos, maxime illum dolore nobis.",
  },
  {
    name: "John",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At nostrum reiciendis dolor aut iusto excepturi magnam eligendi, earum aspernatur est aliquam odit omnis molestiae similique quos, maxime illum dolore nobis.",
  },
  {
    name: "Alex",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At nostrum reiciendis dolor aut iusto excepturi magnam eligendi, earum aspernatur est aliquam odit omnis molestiae similique quos, maxime illum dolore nobis.",
  },
  {
    name: "Tom",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At nostrum reiciendis dolor aut iusto excepturi magnam eligendi, earum aspernatur est aliquam odit omnis molestiae similique quos, maxime illum dolore nobis.",
  },
];

export default function Text() {
  const [value, setValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    const filteringUsers = users.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredUsers(filteringUsers);
  }, [value]);

  return (
    <PreviewWrapper className="space-y-4">
      <Input
        type="search"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="search"
      />
      <ul className="h-96">
        {filteredUsers.map((user) => (
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={user.name}
            layoutId={user.name}
            className="mb-1 bg-box/50 p-3 shadow-md backdrop-blur-md hover:bg-box"
          >
            <h3>{user.name}</h3>
            <p className="text-xs text-muted">{user.bio}</p>
          </motion.li>
        ))}
      </ul>
    </PreviewWrapper>
  );
}
