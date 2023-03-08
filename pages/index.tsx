// Packages
import { useEffect, useState, useContext } from "react";
import Masonry from "react-masonry-css";
import Link from "next/link";

// Context
import { ContentsContext } from "@/context/Contents";

// Firebase
import { db } from "@/utils/firebase/Firebase";
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";

// Components
import { Hero, Information, Buying, Reason } from "@/components/Home Page";
import {
  Testimonial,
  Contents,
  Container,
  HeadingText,
  Docs,
} from "@/components";
import HeadTags from "@/layouts/Head";

// Types
import { TestimonialTypes } from "@/types/Testimonial";

export default function Home() {
  const [testimonials, setTestimonials] = useState<TestimonialTypes>([]);

  const { isContentOpen } = useContext(ContentsContext);

  useEffect(() => {
    const colRef = collection(db, "testimonial");
    const q = query(colRef, orderBy("order"), where("homePage", "==", true));

    const gettingTestimonial = async () => {
      const testimonials = await getDocs(q);
      const snapshot: any = testimonials.docs.map((messages) => ({
        ...messages.data(),
        id: messages.id,
      }));
      setTestimonials(snapshot);
    };

    gettingTestimonial();
  }, []);

  useEffect(() => {
    isContentOpen
      ? (document.documentElement.style.overflow = "hidden")
      : (document.documentElement.style.overflow = "auto");
  }, [isContentOpen]);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    768: 1,
  };

  return (
    <>
      <HeadTags
        title="AniLearn | Animation Content"
        banner="https://i.ibb.co/Jt33tGq/Mac-Book-Pro-14-1.png"
        description="Learning something with animation doesn't get easier than this"
      />
      <main>
        <Hero />
        <Information />
        <Reason />
        <Docs headingText="We have docs for learning 😀" />
        <Buying />
        <Container className="relative px-4 py-24 md:px-8">
          <HeadingText className="text-3xl md:text-4xl font-bold leading-[1.5] md:leading-[1.4] my-3 mb-8">
            What people have been saying
          </HeadingText>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.name} data={testimonial} />
            ))}
          </Masonry>
          <div className="absolute bottom-0 left-0 flex items-end justify-center w-full h-3/5 bg-gradient-to-t from-white to-transparent pb-36">
            <Link
              href={"/testimonial"}
              className="inline-block px-8 py-2 text-white bg-black rounded-md shadow-button button-focus"
            >
              Read More
            </Link>
          </div>
        </Container>

        {isContentOpen && <Contents />}
      </main>
    </>
  );
}
