import React from "react";
import StatusCard from "../StatusCard";

const Beranda = () => {
  return (
    <div className="flex flex-col h-screen ">
      <div className="mx-auto mt-5"></div>
      <div className="mt-10">
        <StatusCard />
      </div>
    </div>
  );
};

export default Beranda;
