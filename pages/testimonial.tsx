// Packages
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Masonry from "react-masonry-css";

// Firebase
import { db } from "@/utils/firebase/Firebase";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";

// Components
import { Container, HeadingText, Testimonial } from "@/components";
import Skeleton from "@/components/Skeleton";

import { BsJournalText } from "react-icons/bs";

// Types
type Props = {};
import { TestimonialTypes } from "@/types/Testimonial";

export default function TestimonialPage({}: Props) {
  const [testimonials, setTestimonials] = useState<TestimonialTypes>([]);
  const [isShown, setIsShown] = useState<boolean>(false);

  useEffect(() => {
    const colRef = collection(db, "testimonial");
    const q = query(
      colRef,
      orderBy("order"),
      where("testimonialPage", "==", true)
    );
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
    setTimeout(() => {
      setIsShown(true);
      setTimeout(() => {
        setIsShown(false);
      }, 5000);
    }, 2000);
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    768: 1,
  };

  return (
    <>
      <Head>
        <title>Testimonial</title>
        <meta name="description" content="Supporting my work" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="px-4 md:px-8">
        <HeadingText className="text-center text-4xl sm:text-5xl md:text-7xl mt-24 font-black mb-12">
          Testimonials
        </HeadingText>
        {testimonials.length == 0 ? (
          <Skeleton type="testimonial" />
        ) : (
          <Container>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {testimonials.map((testimonial) => (
                <Testimonial key={testimonial.order} data={testimonial} />
              ))}
            </Masonry>
          </Container>
        )}
        <Link
          href={"/adding-testimonial"}
          className="fixed bottom-4 right-4 text-2xl bg-black text-white p-3 rounded-full"
        >
          {isShown && (
            <p className="absolute right-0 top-[-50px] bg-black text-white py-2 px-4 rounded-lg whitespace-nowrap text-base animate-bounce">
              Add a <span className="font-bold">Testimonial</span> here
            </p>
          )}
          <BsJournalText />
        </Link>
      </div>
    </>
  );
}
