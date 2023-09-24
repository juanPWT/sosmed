import React from "react";

const BadRequest = () => {
  return (
    <>
      <div className="min-h-screen flex">
        <div className="flex bg-gradient-to-t from-gray-200 h-[600px] w-[800px] shadow-lg m-auto rounded-lg">
          <h1 className="text-5xl font-bold text-gray-400 m-auto">
            <span className="text-gray-500">404</span> Page
            <span className="text-gray-500">Not</span> Found!!
            <span className="loading loading-ball loading-lg "></span>
            <span className="loading loading-ball loading-lg "></span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default BadRequest;
