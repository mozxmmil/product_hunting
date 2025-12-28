"use client";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="max-w-3xl mx-auto h-screen  pt-20 pb-10">
      <Header />

      <div className="grid grid-cols-4 gap-4">
        <div>
          <Image src={"/img1.png"} width={500} height={500} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default page;

const Header = () => {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tighter text-white ">
        Bento grids are cool, you should try it sometime
      </h1>
      <p className="max-w-xl text-base text-neutral-400 mt-2">
        it is a grid system that is used to create a and you should defenatly
        use it sometime and this is going to be nice and very large case in , i
        dont know what im typing i'm just doing to fill the whole free space
      </p>
    </>
  );
};
