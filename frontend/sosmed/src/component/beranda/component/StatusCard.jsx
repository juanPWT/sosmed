import dayjs from "dayjs";

const StatusCard = ({ status }) => {
  return (
    <div className="">
      {status.map((data) => {
        const formatDate = dayjs(data.createdAt).format(
          "(dddd) DD MMMM YYYY HH:mm a"
        );

        return (
          <div
            className="h-full rounded-lg border border-base-300 mx-10 overflow-hidden mb-10 shadow-lg md:h-80 relative bg-white"
            key={data.id}
          >
            <div className="flex bg-white h-16 ">
              <img
                src="./img/profil.png"
                alt="frofil"
                className="rounded-r-full w-20 object-cover"
              />
              <div className="flex flex-col my-auto">
                <h1
                  className="mx-3 text-gray-500 font-medium md:text-xl
                "
                >
                  {data.user.username}
                </h1>
                <span className="mx-3 font-extralight text-xs text-gray-400 md:text-sm">
                  {formatDate} - {data.user.email}
                </span>
              </div>
              <div className="absolute right-2 hidden cursor-pointer sm:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-center  py-16 border-t border-base-300 p-2 ">
              <p className="text-xl md:text-2xl">{data.status}</p>
            </div>
            <div className="flex  mx-5 my-2   md:my-10  relative">
              <a className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </a>
              <a className="absolute right-1 cursor-pointer sm:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatusCard;
