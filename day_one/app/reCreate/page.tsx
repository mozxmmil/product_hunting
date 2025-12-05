"use client";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full  h-full relative bg-linear-to-t from-white via-blue-200 to-blue-50">
      <div className="absolute inset-0 h-full max-w-4xl mx-auto  ">
        <div className="left absolute -left-10 h-full w-px bg-linear-to-t from-gray-300 via-gray-400 to-gray-300"></div>
        <div className="right absolute -right-10 h-full w-px bg-linear-to-t from-gray-300 via-gray-400 to-gray-300"></div>
      </div>
      <div className="container max-w-4xl mx-auto relative h-full ">
        <nav className="flex items-center justify-between  py-3">
          <h1 className="text-black text-2xl font-bold">Finta Logo</h1>
          <div className="flex gap-5">
            <ul className="flex items-center gap-5 text-base font-semibold text-black">
              <li>Founder</li>
              <li>Guides</li>
              <li>Pricing</li>
              <li>Log In</li>
            </ul>
            <button className="py-2 px-4 bg-blue-500 rounded-xl text-white font-semibold inset-shadow-2xs shadow-xl">
              Get Started
            </button>
          </div>
        </nav>

        <main className=" h-full pt-32">
          <div className="bg-gray-200 border-2 border-gray-300 w-fit rounded-2xl px-3 py-1 mx-auto flex items-center gap-2">
            <span className="text-gray-700 text-sm font-semibold">
              we&apos;re hiring Founding Ruby Engineers
            </span>
            <svg
              className="icon icon-tabler icon-tabler-outline icon-tabler-arrow-badge-right text-black"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></svg>
          </div>
          <h1 className="text-black text-5xl font-bold text-center max-w-xl mt-10 font-sans mx-auto">
            Magically simplify accounting and taxes
          </h1>
          <p className="text-gray-500 text-center max-w-xl mt-5 mx-auto">
            Automated Bookkeeeping. Effortless tax filling. Finacial clarity.
            Set up in 10 mins. Back to building by 10:20 pm
          </p>
          <div className="buttonContaier flex items-center gap-3 mt-5 justify-center">
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold text-base rounded-xl text-shadow-2xs inset-shadow-2xs hover:cursor-pointer shadow-xl ">
              Get started
            </button>
            <button className="px-4 py-2  font-semibold text-base rounded-xl text-shadow-2xs inset-shadow-2xs hover:cursor-pointer shadow-xl text-black">
              Get started
            </button>
          </div>
        </main>
      </div>
      <div className="container  flex justify-center mx-auto relative mt-20">
        <div
          className="horizontalLine absolute -top-10 bg-linear-to-l from-gray-300 via-gray-400 to-gray-300 h-px w-full
                "
        ></div>
        <div className="max-w-4xl flex justify-center items-center ">
          <Image
            src="/hero-ui-v6.webp"
            width={1000}
            height={1000}
            alt="hero"
            className="object-cover rounded-2xl
                        object-top-left mask-b-from-0% to-40%
                        "
          />
        </div>
      </div>
    </div>
  );
};

export default page;
