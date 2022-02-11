import moment from "moment";
import { toast } from "react-toastify";

export const tokenExpr = (time: string) => {
  const tokenExpireTime = moment(time).format("YYYY-MM-DD HH:mm:ss");
  const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");

  if (tokenExpireTime < nowTime) {
    toast.warn("Session expired, Please login agin", { toastId: 1234 });
  }

  return tokenExpireTime < nowTime;
};
