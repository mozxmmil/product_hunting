"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
	const links = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" },
		{ name: "Contact", href: "/contact" },
	];

	const str =
		" hey mozammil how are doing and how are you doing tofi \n and this is ";
	const [isOpen, setIsOpen] = useState(false);
	console.log(str, "string");

	return (
		<div className="relative mx-auto max-w-4xl">
			<nav className="flex relative items-center justify-between  border border-neutral-200 shadow-input  mt-5 md:rounded-full overflow-hidden p-2 bg-white">
				<Image
					src={"/sparkles.svg"}
					alt="sparkles"
					width={50}
					height={50}
					className="text-white bg-white rounded-full border border-neutral-400 p-2"
				/>
				<div className="md:flex items-center gap-5 mr-10  text-base font-semibold text-neutral-500 *:transition-colors *:duration-200 *:hover:text-neutral-800 hidden ">
					{links.map((item, inx) => (
						<Link key={inx} href={item.href}>
							{item.name}
						</Link>
					))}
				</div>
				<div onClick={() => setIsOpen(!isOpen)} className="md:hidden mr-5">
					<Image
						src={"/menu-2.svg"}
						alt="sparkles"
						width={50}
						height={50}
					/>
				</div>
			</nav>
			{isOpen && (
				<div
					className={`absolute bg-white  h-screen flex-col flex items-start rounded-md shadow-input max-w-[50%] gap-4  transition-transform left-0S
                        ease-in-out duration-400 p-4 text-base font-semibold text-neutral-500 *:transition-transform *:duration-300 *:hover:text-neutral-800 inset-x-0 translate-x-0 `}
				>
					{links.map((item, inx) => (
						<Link key={inx} href={item.href}>
							{item.name}
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export default Page;
