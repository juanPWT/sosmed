import React from "react";
import InputStatus from "./component/InputStatus";
import StatusCard from "./component/StatusCard";

const MyStatus = ({ username, status, setPostStatus, onClickCreateStatus }) => {
  return (
    <>
      <div className="container min-h-screen">
        <div className="flex flex-col">
          <div>
            <InputStatus
              username={username}
              setPostStatus={setPostStatus}
              onClickCreateStatus={onClickCreateStatus}
            />
          </div>
          <div className="mt-5">
            <StatusCard status={status} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyStatus;
