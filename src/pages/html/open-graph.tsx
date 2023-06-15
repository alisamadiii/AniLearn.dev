import React, { useState } from "react";
import { motion } from "framer-motion";

import Container from "@layouts/Container";
import MetaTag from "@layouts/MetaTag";
import Workplace, { BringChanges, LiveChanges } from "@components/Tech/Workplace";

// you can use these components
import { Information, CodeBlocks } from "@components/Tech";

import { platformsData } from "@contents/Data";

type Props = {};

export default function OpenGraph({}: Props) {
  // Inputs
  const [title, setTitle] = useState("Ali Reza - Portfolio");
  const [description, setDescription] = useState(
    "As a front-end developer, I specialize in building and maintaining the user interface of web applications."
  );
  const [website, setWebsite] = useState("alirezasamadi.com");
  const [image, setImage] = useState("https://i.ibb.co/9hyw1rL/Meta-Tag.png");

  // Platforms
  const [platforms, setPlatforms] = useState<"facebook" | "twitter" | "linkedin" | "discord">("facebook");

  const [isSelected, setIsSelected] = useState(platformsData[0].id);

  const Codes = `<head>
  <!-- HTML Meta Tags -->
  <title>${title}</title>
  <meta name="description" content="${description}" />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" *content="${website}" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${image}" />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="${website}" />
  <meta property="twitter:url" content="${website}" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${image}" />
</head>`; // Use backtick for writing your code

  return (
    <>
      <MetaTag
        title="open-graph"
        image={null}
        description=""
      />
      <Container>
        <Information content="<h1>open-graph</h1><p>The Open Graph protocol enables any web page to become a rich object in a social graph. For instance, this is used on Facebook to allow any web page to have the same functionality as any other object on Facebook.</p><p>To turn your web pages into graph objects, you need to add basic metadata to your page. We've based the initial version of the protocol on RDFa which means that you'll place additional <code>meta</code> tags in the <code>head</code> of your web page.</p>" />
        <CodeBlocks
          codeString={Codes}
          language=""
          fileName="index.html"
          widthFull={true}
        />

        <Workplace className="grid items-start gap-4 md:grid-cols-2">
          <BringChanges className="p-6 border rounded-lg border-white-low-opacity">
            <h4 className="text-3xl font-semibold text-font-clr-1">Edit</h4>
            <p className="mt-2">This information will be displayed on Google and social media.</p>
            {/* Inputs */}
            <div className="mt-8 space-y-4">
              <label
                htmlFor="title"
                className="flex flex-col gap-1"
              >
                <span className="text-lg text-font-clr-1">Title</span>
                <input
                  type="text"
                  placeholder="Ali Reza | Portfolio"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="p-2 bg-transparent border rounded-md outline-none border-white-low-opacity focus:border-primary placeholder:opacity-50"
                />
                <small>
                  <span className="text-font-clr-1/80">Recommended</span>: 60 characters
                </small>
              </label>
              <label
                htmlFor="website"
                className="flex flex-col gap-1"
              >
                <span className="text-lg text-font-clr-1">Website</span>
                <input
                  type="url"
                  placeholder="https://"
                  id="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="p-2 bg-transparent border rounded-md outline-none border-white-low-opacity focus:border-primary placeholder:opacity-50"
                />
              </label>
              <label
                htmlFor="description"
                className="flex flex-col gap-1"
              >
                <span className="text-lg text-font-clr-1">Description</span>
                <textarea
                  id="description"
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="p-2 bg-transparent border rounded-md outline-none border-white-low-opacity focus:border-primary placeholder:opacity-50"
                />
                <small>
                  <span className="text-font-clr-1/80">Recommended</span>: 155 - 160 characters
                </small>
              </label>
              <label
                htmlFor="image"
                className="flex flex-col gap-1"
              >
                <span className="text-lg text-font-clr-1">Image</span>
                <input
                  type="url"
                  placeholder="https://"
                  id="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="p-2 bg-transparent border rounded-md outline-none border-white-low-opacity focus:border-primary placeholder:opacity-50"
                />
              </label>
            </div>
          </BringChanges>

          <LiveChanges>
            <BringChanges className="mb-4">
              {platformsData.map((platform) => (
                <button
                  key={platform.id}
                  className={`relative px-4 py-1 text-sm rounded-full duration-200 capitalize ${
                    platforms == platform.platform && "text-font-clr-1"
                  }`}
                  onClick={() => {
                    setPlatforms(platform.platform);
                    setIsSelected(platform.id);
                  }}
                >
                  {isSelected == platform.id && (
                    <motion.div
                      layoutId="button"
                      className="absolute inset-0 bg-button -z-10"
                      style={{ borderRadius: "9999px" }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  {platform.platform}
                </button>
              ))}
            </BringChanges>
            {platforms == "facebook" ? (
              <div className="bg-[#3a3b3c] duration-200 text-font-clr-1">
                <motion.img
                  layoutId="image"
                  className="object-cover w-full aspect-video"
                  src={image}
                />
                <div className="px-4 py-1 pb-2 -space-y-1">
                  <small className="font-light uppercase opacity-60">www.{website}</small>
                  <h3 className="text-lg font-medium">{title}</h3>
                  <p className="font-light text-sm/5 opacity-60">{description}</p>
                </div>
              </div>
            ) : platforms == "twitter" ? (
              <div className="overflow-hidden duration-200 rounded-2xl">
                <motion.img
                  layoutId="image"
                  className="object-cover w-full aspect-video"
                  src={image}
                />
                <div className="px-4 py-1 pb-2 -space-y-1 border-2 border-t-0 border-white-low-opacity rounded-b-2xl">
                  <small className="font-light uppercase opacity-60">www.{website}</small>
                  <h3 className="text-font-clr-1">{title}</h3>
                  <p className="font-light text-sm/5 opacity-60">{description}</p>
                </div>
              </div>
            ) : platforms == "linkedin" ? (
              <div className="text-font-clr-1 duration-200 bg-slate-700">
                <motion.img
                  layoutId="image"
                  className="object-cover w-full aspect-video"
                  src={image}
                />
                <div className="px-4 py-1 pb-2">
                  <h3>{title}</h3>
                  <small className="font-light">www.{website}</small>
                </div>
              </div>
            ) : platforms == "discord" ? (
              <div className="bg-[#25272b] p-4 duration-200 rounded-md border-l-2 border-[#1c1e21]">
                <div className="py-1 pb-2 mb-2">
                  <h3 className="font-semibold text-lg/8 text-sky-600">{title}</h3>
                  <p className="text-font-clr-1">{description}</p>
                </div>
                <motion.img
                  layoutId="image"
                  className="object-cover w-full aspect-video"
                  src={image}
                />
              </div>
            ) : (
              <div>
                <h1>Error</h1>
              </div>
            )}
          </LiveChanges>
        </Workplace>
      </Container>
    </>
  );
}
