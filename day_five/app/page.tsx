import React from "react";
import cn from "../lib/cn";

const page = () => {
  return (
    <div className="max-w-4xl mx-auto border-x border-r-neutral-200 bg-blue-100 h-full ">
      <div className="grid grid-cols-2">
        <Card>
          <h1 className="font-medium">
            this  is day five project
          </h1>
        </Card>

      </div>
    </div>
  );
};

export default page;

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("p-4 bg-white", className)}>{children}</div>;
};

const MainHeading  = ({children })=>{
  return( 
    <h1 className="text-sm font-medium tracking-tight"></h1>
  )
}
