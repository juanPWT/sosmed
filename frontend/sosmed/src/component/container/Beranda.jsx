import React from "react";
import StatusCard from "../StatusCard";
import { Tab } from "@headlessui/react";

const Beranda = () => {
  return (
    <div className="container py-2  mx-auto max-h-md  mt-14 ">
      <Tab.Group>
        <div className="flex border border-t-gray-300 rounded-lg shadow-lg  mx-auto w-60 p-4">
          <Tab.List className="flex space-x-2 p-1  mx-auto">
            <Tab className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700 bg-gray-100 hover:bg-gray-200 px-5 focus:outline-none focus:ring-0 ui-selected:bg-gray-400 ui-selected:text-white">
              Beranda
            </Tab>
            <Tab className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700 bg-gray-100 hover:bg-gray-200 px-5 focus:outline-none focus:ring-0 ui-selected:bg-gray-400 ui-selected:text-white">
              My Status
            </Tab>
          </Tab.List>
        </div>
        <div className="w-full">
          <Tab.Panels>
            <Tab.Panel>
              <div className="container mx-auto my-3 p-5 ">
                <StatusCard />
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
};

export default Beranda;
