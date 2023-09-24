import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import StatusCard from "./StatusCard";
import axios from "axios";

const Beranda = ({ token, axiosJWT }) => {
  const [status, setStatus] = useState([]);

  //get status init
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await axiosJWT.get("http://localhost:3001/status", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setStatus(res.data.payload.datas);
      } catch (err) {
        console.log(err);
      }
    };

    fetchStatus();
  }, []);

  return (
    <div className="container py-2  mx-auto max-h-md  mt-14 ">
      <Tab.Group>
        <div className="flex border border-t-gray-300 rounded-lg shadow-lg  mx-auto w-60 p-4">
          <Tab.List className="flex space-x-2 p-1  mx-auto">
            <Tab className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700 bg-gray-100 hover:bg-gray-200 px-5 focus:outline-none focus:ring-0 ui-selected:bg-gray-400 ui-selected:text-white">
              Beranda
            </Tab>
            <Tab className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700 bg-gray-100 hover:bg-gray-200 px-5 focus:outline-none focus:ring-0 ui-selected:bg-gray-400 ui-selected:text-white">
              My status
            </Tab>
          </Tab.List>
        </div>
        <div className="w-full">
          <Tab.Panels>
            <Tab.Panel>
              <div className="container mx-auto my-3 p-5 ">
                <StatusCard status={status} />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="container mx-auto my-3 p-5 ">
                <h1 className="text-4xl text-gray-300">my status</h1>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
};

export default Beranda;
