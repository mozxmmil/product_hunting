import React from "react";
import cn from "../lib/cn";

const ChatWindows = () => {
  const chat = [
    { sender: "user", message: "Hello, how are you?" },
    {
      sender: "bot",
      message: "I'm good, thank you! How can I assist you today?",
    },
    { sender: "user", message: "Can you tell me a joke?" },
    {
      sender: "bot",
      message:
        "Sure! Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    { sender: "user", message: "Haha, that's a good one!" },
    {
      sender: "bot",
      message: "Glad you liked it! Do you want to hear another one?",
    },
  ];

  const UserMessage = (chat: string) => {
    return (
      <div className="bg-blue-400  w-fit self-end rounded-tl-full rounded-tr-full  rounded-bl-full rounded-br-lg p-2 flex  justify-end">
        <p className="text-sm font-medium">{chat}</p>
      </div>
    );
  };

  const BotMessage = (chat: string) => {
    return (
      <div className="bg-chatBot_bg w-fit rounded-tl-full rounded-tr-full rounded-bl-lg rounded-br-full p-2 flex justify-start">
        <p className="text-black text-sm font-medium">{chat}</p>
      </div>
    );
  };
  return (
    <div className="w-full bg-white h-full flex flex-col relative px-10 gap-4 overflow-y-auto custom-scrollbar">
      {chat.map((message, index) => {
        return (
          <React.Fragment key={index}>
            {message.sender === "user"
              ? UserMessage(message.message)
              : BotMessage(message.message)}
          </React.Fragment>
        );
      })}

      <div className="  w-[calc(100%-2rem)] rounded-lg placeholder:text-black  p-2 sticky bottom-1  border-none outline outline-neutral-300 hover:outline-blue-300 focus:outline-blue-300 bg-white text-black z-10 shadow-2xl uset  ">
        <input
          placeholder="Ask to the Ai"
          type="text"
          className=" custom-inputDesign "
        />
      </div>
    </div>
  );
};

const page = () => {
  return (
    <div className="max-w-6xl mx-auto border-x border-r-neutral-200 bg-blue-100 h-full  flex flex-col items-center justify-center">
      <div className="grid grid-cols-2  divide-x divide-neutral-300 divide-y ">
        <Card>
          <CardHeader>
            log
            <CardTile>LLM Model Selector</CardTile>
          </CardHeader>
          <CardDescription>
            Track rea-time activity of agfents with detils records of trigger ,,
            tools used , outcomes, and itmeStaps
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
            Track rea-time activity of agfents with detils records of trigger ,,
            tools used , outcomes, and itmeStaps
          </CardDescription>
          <CardSkalaton>
            <ChatWindows />
          </CardSkalaton>
        </Card>
        <Card className="col-span-2">
          <CardHeader>
            log
            <CardTile>LLM Model Selector</CardTile>
          </CardHeader>
          <CardDescription>
            Track rea-time activity of agfents with detils records of trigger ,,
            tools used , outcomes, and itmeStaps
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
      className={`min-h-40 w-full h-60 my-4 bg-[radial-gradient(var(--color-gray-200)_1px,transparent_1px)] bg-size-[10px_10px] mask-radial-from-80 bg-gray-100 ${className} `}
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
