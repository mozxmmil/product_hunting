import React from "react";

const page = () => {
	return (
		<div className="w-full bg-blue-200 h-screen">
			<div className="max-w-2xl h-full border-x border-neutral-800 mx-auto">
				<form action="" className="py-14 px-8">
					<h1 className=" text-center font-bold text-2xl bg-clip-text text-transparent bg-linear-to-b from-neutral-600 to-black">
						This is a{" "}
						<span className="text-white before:content[''] before:bg-red-700 relative before:absolute before:w-full before:h-full before:inset-0 z-0 before:-z-10 ">
							crazy
						</span>{" "}
						Good form
					</h1>

					<div className="flex flex-col gap-4 text-black max-w-sm mx-auto my-14">
						<div className="flex flex-col gap-2">
							<label htmlFor="email" className="font-medium text-sm after:content-['*'] after:text-red-700 after:ml-1">Email</label>
							<input
                            className="placeholder:text-neutral-500 bg-gray-100 border-none shadow-xl  py-2 px-4 outline-none active:ring ring-blue-200 focus:ring focus-visible:ring-red-500 rounded-md "
								type="email"
								id="email"
								placeholder="Enter your Email"
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default page;
