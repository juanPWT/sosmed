import DynamicLoading from "./component/DynamicLoading";
import InputStatus from "./component/InputStatus";
import StatusCard from "./component/StatusCard";

const MyStatus = ({
  profil,
  status,
  setPostStatus,
  onClickCreateStatus,
  isLoading,
}) => {
  return (
    <>
      <div className="container min-h-screen">
        <div className="flex flex-col">
          <div>
            <InputStatus
              profil={profil}
              setPostStatus={setPostStatus}
              onClickCreateStatus={onClickCreateStatus}
            />
          </div>
          <div className="mt-5">
            {isLoading && <DynamicLoading card={8} />}
            <StatusCard status={status} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyStatus;
