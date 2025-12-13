import React from "react";
import cn from "../lib/cn";

const page = () => {
	return (
		<div className="max-w-4xl mx-auto border-x border-r-neutral-200 bg-blue-100 h-full ">
			<div className="grid grid-cols-2  divide-x divide-neutral-300 divide-y">
				<Card>
					<CardHeader>
						log
						<CardTile>LLM Model Selector</CardTile>
					</CardHeader>
					<CardDescription>
						Track rea-time activity of agfents with detils records of
						trigger ,, tools used , outcomes, and itmeStaps
					</CardDescription>
					<CardSkalaton>
						<div className="w-full h-full  rounded-lg"></div>
					</CardSkalaton>
				</Card>
				<Card>
					<CardHeader>
						log
						<CardTile>LLM Model Selector</CardTile>
					</CardHeader>
					<CardDescription>
						Track rea-time activity of agfents with detils records of
						trigger ,, tools used , outcomes, and itmeStaps
					</CardDescription>
					<CardSkalaton>
						<div className="w-full h-full rounded-lg"></div>
					</CardSkalaton>
				</Card>
				<Card className="col-span-2">
					<CardHeader>
						log
						<CardTile>LLM Model Selector</CardTile>
					</CardHeader>
					<CardDescription>
						Track rea-time activity of agfents with detils records of
						trigger ,, tools used , outcomes, and itmeStaps
					</CardDescription>
					<CardSkalaton>
						<div className="w-full h-full  rounded-lg"></div>
					</CardSkalaton>
				</Card>
			</div>
		</div>
	);
};

export default page;

const CardSkalaton = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={`min-h-40 w-full h-60 my-4 bg-[radial-gradient(var(--color-gray-300)1px,transparent_1px)] bg-size-[10px_10px] mask-radial-from-20 bg-gray-200 ${className} `}
		>
			{children}
		</div>
	);
};

const Card = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return <div className={cn("p-4 bg-white", className)}>{children}</div>;
};

const CardTile = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<h1 className={`text-lg font-semibold tracking-tight ${className}`}>
			{children}
		</h1>
	);
};

const CardDescription = ({ children }: { children: React.ReactNode }) => {
	return <p className="text-base text-neutral-400 ">{children}</p>;
};
const CardHeader = ({ children }: { children: React.ReactNode }) => {
	return <div className="flex items-center gap-2 text-black ">{children}</div>;
};
