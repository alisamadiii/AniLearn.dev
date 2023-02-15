import React, { useEffect, useState } from "react";
import { db } from "@/utils/firebase/Firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

import HeadingText from "@/components/HeadingText";
import Container from "@/components/Container";
import Masonry from "react-masonry-css";

import Testimonial from "@/components/Testimonial";

import { BsJournalText } from "react-icons/bs";
import Link from "next/link";

type Props = {};

const TestimonialPage = (props: Props) => {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [isShown, setIsShown] = useState<boolean>(false);

  useEffect(() => {
    const colRef = collection(db, "testimonial");
    const q = query(colRef, orderBy("order"));
    onSnapshot(q, (snapshot) => {
      setTestimonials(
        snapshot.docs.map((data) => ({ ...data.data(), id: data.id }))
      );
    });
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

  console.log(testimonials);
  return (
    <div className="px-4 md:px-8">
      <HeadingText className="text-center text-4xl sm:text-5xl md:text-7xl mt-24 font-black mb-12">
        Testimonials
      </HeadingText>
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
  );
};

export default TestimonialPage;
