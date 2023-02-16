import HeadingText from "@/components/HeadingText";
import Image from "next/image";
import React, { useState } from "react";

import { db } from "@/utils/firebase/Firebase";
import { doc, setDoc } from "firebase/firestore";

type Props = {};

import Profile from "../assets/profile.jpg";
import { AiFillStar } from "react-icons/ai";

const INITIAL_VALUE = {
  name: "",
  emailAddress: "",
  website: "",
  headline: "",
  testimonial: "",
  image: "",
};

export default function AddingTestimonial(props: Props) {
  const [star, setStar] = useState(5);
  const [formNum, setFormNum] = useState(1);
  const [userInformation, setUserInformation] = useState(INITIAL_VALUE);

  const submittingTheForm = async (e: any) => {
    e.preventDefault();
    const docRef = doc(
      db,
      "testimonial",
      userInformation.name.toLocaleLowerCase()
    );
    await setDoc(docRef, {
      name: userInformation.name,
      headline: userInformation.headline,
      order: 100,
      star: star,
      testimonial: userInformation.testimonial,
      homePage: false,
      testimonialPage: false,
      image: userInformation.image,
    }).then(() => {
      console.log("DOne");
    });
  };

  const onChangeHandler = (e: any) => {
    const { value, name } = e.target;
    setUserInformation({ ...userInformation, [name]: value });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        action=""
        className="relative w-full max-w-[726px] h-full overflow-x-hidden"
      >
        <div
          className={`w-full max-w-[412px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-2xl rounded-xl space-y-3 ${
            formNum == 2 && "-translate-x-[700px]"
          } duration-300`}
        >
          <Image src={Profile} width={44} height={44} alt="" />
          <HeadingText className="text-2xl font-medium">
            Write a text testimonial
          </HeadingText>
          <ul className="list-disc text-sm pl-8">
            <li>What do you like most about me?</li>
            <li>Should I continue making this kind of content?</li>
          </ul>
          <div className="flex">
            <AiFillStar
              className={`text-2xl ${
                star >= 1 ? "text-yellow-500" : "text-[#c7c7c7]"
              }`}
              onClick={() => setStar(1)}
            />
            <AiFillStar
              className={`text-2xl ${
                star >= 2 ? "text-yellow-500" : "text-[#c7c7c7]"
              }`}
              onClick={() => setStar(2)}
            />
            <AiFillStar
              className={`text-2xl ${
                star >= 3 ? "text-yellow-500" : "text-[#c7c7c7]"
              }`}
              onClick={() => setStar(3)}
            />
            <AiFillStar
              className={`text-2xl ${
                star >= 4 ? "text-yellow-500" : "text-[#c7c7c7]"
              }`}
              onClick={() => setStar(4)}
            />
            <AiFillStar
              className={`text-2xl ${
                star >= 5 ? "text-yellow-500" : "text-[#c7c7c7]"
              }`}
              onClick={() => setStar(5)}
            />
          </div>
          <textarea
            name="testimonial"
            rows={6}
            className="w-full outline-none border-2 border-[#CFCFCF] rounded-md p-3"
            onChange={onChangeHandler}
          ></textarea>
          <button
            type="button"
            className="w-full text-center bg-black text-white py-2 px-8 rounded-md shadow-button"
            onClick={() => setFormNum(2)}
          >
            Next
          </button>
        </div>
        <div
          className={`w-full max-w-[412px] bg-white absolute top-[55%] -translate-x-1/2 -translate-y-1/2 p-4 shadow-2xl rounded-xl space-y-3 ${
            formNum == 2 ? "left-[50%]" : "left-[850px]"
          } duration-300`}
        >
          <Image src={Profile} width={44} height={44} alt="" />
          <HeadingText className="text-2xl font-medium">
            Almost done 🙌
          </HeadingText>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm text-[#575757]">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Ali Reza"
              id="name"
              name="name"
              className="text-sm p-2 outline-none border-2 border-[#CFCFCF] rounded-md focus:border-black"
              onChange={onChangeHandler}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-[#575757]">
              Email Address
            </label>
            <input
              type="gmail"
              placeholder="ali@example.com"
              id="email"
              name="emailAddress"
              className="text-sm p-2 outline-none border-2 border-[#CFCFCF] rounded-md focus:border-black"
              onChange={onChangeHandler}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="headline" className="text-sm text-[#575757]">
              Headline
            </label>
            <input
              type="text"
              placeholder="ex. DevRel"
              id="headline"
              name="headline"
              className="text-sm p-2 outline-none border-2 border-[#CFCFCF] rounded-md focus:border-black"
              onChange={onChangeHandler}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="website" className="text-sm text-[#575757]">
              Your Website
            </label>
            <input
              type="url"
              placeholder="https://example.com"
              id="website"
              name="website"
              className="text-sm p-2 outline-none border-2 border-[#CFCFCF] rounded-md focus:border-black"
              onChange={onChangeHandler}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="avatar" className="text-sm text-[#575757]">
              Your Avatar
            </label>
            <input
              type="url"
              placeholder="https://example.png"
              id="avatar"
              name="image"
              className="text-sm p-2 outline-none border-2 border-[#CFCFCF] rounded-md focus:border-black"
              onChange={onChangeHandler}
            />
          </div>
          <button
            type="submit"
            onClick={submittingTheForm}
            className="w-full text-center bg-black text-white py-2 px-8 rounded-md shadow-button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
