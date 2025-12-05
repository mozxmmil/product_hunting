import Image from "next/image";
import React from "react";

const MainPage = () => {
	return (
		<div className="w-full h-full bg-linear-to-t from-white via-blue-100 to-white pb-20">
			<div className="absolute inset-0 max-w-4xl h-full  mx-auto">
				<div className="leftLine absolute h-full bg-linear-to-b from-gray-300 via-gray-400 to-gray-200 w-px -left-10 top-0"></div>
				<div className="rightLinez absolute h-full bg-linear-to-b from-gray-300 via-gray-400 to-gray-200 w-px -right-10 top-0  "></div>
			</div>
			<div className="container max-w-4xl mx-auto relative h-full">
				<nav className="fixed top-0 left-0 right-0 z-50 ">
					<div className="container max-w-4xl mx-auto px-2 p-3 text-black flex justify-between items-center">
						<div className="">
							<h1 className="text-2xl font-bold ">Finta</h1>
						</div>
						<div className="flex items-center gap-6 ">
							<ul className="flex items-center gap-5 ">
								<li className="text-base font-medium hover:text-black text-gray-700 transition-transform duration-75 hover:cursor-pointer">
									Founder
								</li>
								<li className="text-base font-medium hover:text-black text-gray-700 transition-transform duration-75 hover:cursor-pointer">
									Guides
								</li>
								<li className="text-base font-medium hover:text-black text-gray-700 transition-transform duration-75 hover:cursor-pointer">
									Pricing
								</li>
								<li className="text-base font-medium hover:text-black text-gray-700 transition-transform duration-75 hover:cursor-pointer">
									Log In
								</li>
							</ul>
							<button className="px-4 py-2 bg-blue-500 text-white font-semibold text-base rounded-xl text-shadow-2xs inset-shadow-2xs hover:cursor-pointer shadow-xl ">
								Get started
							</button>
						</div>
					</div>
				</nav>

				<div className="mainCotainer pt-28 ">
					<div className="bg-neutral-100 hover:bg-neutral-200 border-3 border-neutral-300 w-fit px-3 py-1 rounded-3xl max-w-3xl mx-auto flex items-center gap-2 ">
						<span className="text-sm font-bold text-gray-700">
							We&rsquo;re hiring Founding Ruby Engineers
						</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-badge-right text-black"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M13 7h-6l4 5l-4 5h6l4 -5z" />
						</svg>
					</div>
					<h1 className="text-black max-w-xl mx-auto text-5xl  text-center font-bold leading-12 tracking-wider mt-8 ">
						Magically simplify accounting and taxes
					</h1>
					<p className="text-gray-500 max-w-[500px] text-center leading-6 font-semibold  text-sm mt-5 mx-auto">
						Automated Bookkeeeping. Effortless tax filling. Finacial
						clarity. Set up in 10 mins. Back to building by 10:20 pm
					</p>
					<div className="buttonContaier flex items-center gap-3 mt-5 justify-center">
						<button className="px-4 py-2 bg-blue-500 text-white font-semibold text-base rounded-xl text-shadow-2xs inset-shadow-2xs hover:cursor-pointer shadow-xl ">
							Get started
						</button>
						<button className="px-4 py-2  font-semibold text-base rounded-xl text-shadow-2xs inset-shadow-2xs hover:cursor-pointer shadow-xl text-black">
							Get started
						</button>
					</div>
				</div>
			</div>
			<div className="imageContaier relative mt-30 flex justify-center">
				<div className="horizontalLine absolute -top-10 left-0 w-full h-px bg-linear-to-l from-gray-300 via-gray-400 to-gray-200 z-10 "></div>
				<Image
					src="/hero-ui-v6.webp"
					width={900}
					height={600}
					alt="hero"
					className="shadow-2xl drop-shadow-2xl"
				/>
			</div>
		</div>
	);
};

export default MainPage;
