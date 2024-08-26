import "./index.scss";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { MdOutlineClose } from "react-icons/md";
import { IAlert } from "./dataStru";
import { LuFileWarning } from "react-icons/lu";
import { VscError } from "react-icons/vsc";
import { IoMdDoneAll } from "react-icons/io";
import { PiWarningDiamondFill } from "react-icons/pi";

const Alert = ({ type, title, children }: IAlert) => {
  const alertIcons = {
    upgrade: <HiOutlineBellAlert />,
    note: <LuFileWarning />,
    error: <VscError />,
    sucssus: <IoMdDoneAll />,
    warning: <PiWarningDiamondFill />,
  };
  return (
    <div className={`alert-wrapper ${type}`}>
      <div className="alert-heade">
        <div>
          {alertIcons[type]}
          <h4>{title}</h4>
        </div>
        <MdOutlineClose />
      </div>
      <div className="alert-body">{children}</div>
    </div>
  );
};

export default Alert;
