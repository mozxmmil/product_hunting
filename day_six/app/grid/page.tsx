"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="max-w-3xl mx-auto h-screen  pt-20 pb-10">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5  pb-10 mask-b-from-40%  ">
        <Columns>
          <Card src={"/img1.png"} alt={"product-1"} href={"/product/1"} />
          <Card src={"/img2.png"} alt={"product-1"} href={"/product/2"} />
          <Card src={"/img3.png"} alt={"product-1"} href={"/product/3"} />
          <Card src={"/img4.png"} alt={"product-1"} href={"/product/4"} />
        </Columns>
        <Columns>
          <Card src={"/img4.png"} alt={"product-1"} href={"/product/4"} />
          <Card src={"/img3.png"} alt={"product-1"} href={"/product/3"} />
          <Card src={"/img2.png"} alt={"product-1"} href={"/product/2"} />
          <Card src={"/img1.png"} alt={"product-1"} href={"/product/2"} />
        </Columns>
        <Columns>
          <Card src={"/img1.png"} alt={"product-1"} href={"/product/1"} />
          <Card src={"/img2.png"} alt={"product-1"} href={"/product/2"} />
          <Card src={"/img3.png"} alt={"product-1"} href={"/product/3"} />
          <Card src={"/img4.png"} alt={"product-1"} href={"/product/4"} />
        </Columns>
        <Columns>
          <Card src={"/img4.png"} alt={"product-1"} href={"/product/4"} />
          <Card src={"/img3.png"} alt={"product-1"} href={"/product/3"} />
          <Card src={"/img2.png"} alt={"product-1"} href={"/product/2"} />
          <Card src={"/img1.png"} alt={"product-1"} href={"/product/1"} />
        </Columns>
      </div>
    </div>
  );
};

export default page;

const Card = ({
  src,
  alt,
  href,
}: {
  src: string;
  alt: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="
        relative overflow-hidden rounded-lg
        border border-neutral-700
        group/card

        before:content-['']
        before:absolute
        before:inset-0
        before:bg-red-400
        before:opacity-0
        before:transition-opacity
        before:duration-300
        group-hover/card:before:opacity-40
        before:z-10
        before:pointer-events-none
      "
    >
      <Image
        src={src}
        width={1000}
        height={1000}
        alt={alt}
        className="
object-cover
        
          
        "
      />
    </Link>
  );
};

const Columns = ({ children }: { children: React.ReactNode }) => {
  return <div className=" space-y-2 ">{children}</div>;
};

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
