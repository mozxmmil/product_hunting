import React from "react";

const page = () => {
	return (
		<div className="bg-zinc-800 w-full h-screen flex justify-center">
			<div className="mt-40 ">
				<h1 className="text-6xl max-w-xl bg-blue-500 font-bold text-center bg-clip-text text-transparent bg-linear-to-b from-gray-400 to-gray-600 leading-tight tracking-wide ">
					Unleash the Power of intutive finance
				</h1>
				<p className="text-base mt-10 max-w-xl text-center leading-normal text-gray-400">
					Say goodbye to the <span className="text-custom">outdated</span>{" "}
					finacila tools. Every small{" "}
					<span className="text-custom">business</span> owner, regradless
					of the backgournd , can now mange their bussincess like a pro,
					Simple Intutive. And never{" "}
					<span className="text-custom">boring</span>
				</p>
				<div className=" mt-10 max-w-xl w-full flex justify-center gap-3 px-10 ">
					<input
						className="text-white border border-gray-600  flex-1 rounded-xl placeholder:text-gray-400 px-4 focus:outline-none focus:ring-2 ring-custom"
						placeholder="Enter Your name"
						type="text"
					/>
					<button className=" text-white px-4 py-2 border border-gray-600 rounded-xl relative overflow-hidden ">
						<div className="absolute  -bottom-0 h-px bg-linear-to-r from-transparent via-custom to-transparent w-full inset-x-0"></div>
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export default page;
