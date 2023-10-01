import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import StatusCard from "./component/StatusCard";
import MyStatus from "./MyStatus";
import "react-loading-skeleton/dist/skeleton.css";
import DynamicLoading from "./component/DynamicLoading";

const Beranda = ({ token, axiosJWT, profil, userId, toast }) => {
  const [status, setStatus] = useState([]);
  const [StatusPrivate, setStatusPrivate] = useState([]);
  const [postStatus, setPostStatus] = useState({
    status: "",
  });
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchStatus();
  }, []);

  //get status by id init
  const fetchStatusById = async () => {
    try {
      const res = await axiosJWT.get(`http://localhost:3001/status/` + userId, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setStatusPrivate(res.data.payload.datas);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  //post status
  const onClickCreateStatus = async () => {
    try {
      const res = await axiosJWT.post(
        "http://localhost:3001/status/" + userId,
        postStatus,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(res.data.payload.messege, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container py-2  mx-auto max-h-md  mt-14 ">
      <Tab.Group>
        <div className="flex border border-t-gray-300 rounded-lg shadow-lg bg-white mx-auto w-60 p-4">
          <Tab.List className="flex space-x-2 p-1  mx-auto">
            <Tab className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700 bg-gray-200 hover:bg-gray-300 px-5 focus:outline-none focus:ring-0 ui-selected:bg-gray-400 ui-selected:text-white">
              Beranda
            </Tab>
            <Tab
              onClick={() => fetchStatusById()}
              className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700 bg-gray-200 hover:bg-gray-300 px-5 focus:outline-none focus:ring-0 ui-selected:bg-gray-400 ui-selected:text-white"
            >
              My status
            </Tab>
          </Tab.List>
        </div>
        <div className="w-full">
          <Tab.Panels>
            <Tab.Panel>
              <div className="container mx-auto my-3 p-5 min-h-screen">
                {isLoading && <DynamicLoading card={8} />}
                <StatusCard status={status} />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="container mx-auto my-3 p-5 ">
                <MyStatus
                  profil={profil}
                  status={StatusPrivate}
                  setPostStatus={setPostStatus}
                  onClickCreateStatus={onClickCreateStatus}
                  isLoading={isLoading}
                />
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
};

export default Beranda;
