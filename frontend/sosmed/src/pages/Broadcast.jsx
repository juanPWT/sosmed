import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ConBroadcast from "../component/container/ConBroadcast";

const Broadcast = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-between">
        <div className="fixed top-0 z-50">
          <Navbar />
        </div>
        <div className="z-0">
          <ConBroadcast />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Broadcast;
