import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const links = [
    {
      icon: (
        <Image src={"ball-volleyball.svg"} alt="odne" width={50} height={50} />
      ),
    },
    {
      icon: <Image src={"file.svg"} alt="odne" width={50} height={50} />,
    },
    {
      icon: <Image src={"lemon.svg"} alt="odne" width={50} height={50} />,
    },
    {
      icon: <Image src={"umbrella-2.svg"} alt="odne" width={50} height={50} />,
    },
  ];
  return (
    <div className="w-full h-full relative [--pattern-fg:var(--color-neutral-900)]/9  flex justify-center items-center bg-neutral-200  ">
      <div className="max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)]  bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
        <div className="relative mask-r-from-50% mask-l-from-50% mask-t-from-50% mask-b-from-50%">
          <Patter />{" "}
          <div className="flex h-40   items-center justify-between animate-marque    ">
            {links.map((item, index) => (
              <div
                key={index}
                className="size-5 rounded-full bg-neutral-600 p-3"
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
        <div className="p-4">
          <h1 className="font-bold text-xl">
            this is going to be the heading{" "}
          </h1>
          <p>this is paragraph and this also going to be the same </p>
        </div>
      </div>
    </div>
  );
};

export default page;

const Patter = () => {
  return (
    <div
      className="absolute inset-0 z-0 rounded-lg m-auto bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)]
bg-fixed bg-[size:10px_10px]"
    ></div>
  );
};
