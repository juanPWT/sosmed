import React from "react";
import Skeleton from "react-loading-skeleton";

const DynamicLoading = ({ card }) => {
  return Array(card)
    .fill(0)
    .map((count, i) => {
      return (
        <div
          key={i}
          className="h-full rounded-lg border border-base-300 mx-10 overflow-hidden mb-10 shadow-lg md:h-80 relative bg-white"
        >
          <div className="flex bg-base-200 h-16 ">
            <Skeleton className="rounded-r-full w-20 h-16  object-cover rounded-l-lg" />
            <div className="flex flex-col">
              <Skeleton className="w-60 h-6 rounded-lg mx-2 mt-2" />
              <Skeleton className="w-80 h-4 rounded-lg mx-2 mt-2" />
            </div>
          </div>
          <Skeleton className="h-full " />
        </div>
      );
    });
};

export default DynamicLoading;
