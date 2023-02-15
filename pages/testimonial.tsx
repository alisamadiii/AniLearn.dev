import React, { useEffect, useState } from "react";
import { db } from "@/utils/firebase/Firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

import HeadingText from "@/components/HeadingText";
import Container from "@/components/Container";
import Masonry from "react-masonry-css";

import Testimonial from "@/components/Testimonial";

type Props = {};

const TestimonialPage = (props: Props) => {
  const [testimonials, setTestimonials] = useState<any[]>([]);

  useEffect(() => {
    const colRef = collection(db, "testimonial");
    const q = query(colRef, orderBy("order"));
    onSnapshot(q, (snapshot) => {
      setTestimonials(
        snapshot.docs.map((data) => ({ ...data.data(), id: data.id }))
      );
    });
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
    </div>
  );
};

export default TestimonialPage;
