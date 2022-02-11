import axios from "axios";
import { toast } from "react-toastify";
import { loginPayloadInterface } from "../../types";

export const getDeviceIdApi = async (setter: Function) => {
  try {
    const res = await axios.get(`/api/v2/deviceuid`);
    if (res.status === 200 && res?.data) {
      setter(res?.data?.result?.deviceUuid);
    }
  } catch (error) {
    setter("");
  }
};

export const postLoginApi = async (
  email: string,
  password: string,
  deviceUuid: string,
  setLoader?: Function,
  cb?: Function
) => {
  setLoader && setLoader(true);
  const payload: loginPayloadInterface = {
    auth: {
      email: email || "",
      deviceUuid: deviceUuid || "",
    },
    password: password || "",
  };

  try {
    const res = await axios.post(`/api/v2/login-buyer`, payload);
    if (res?.data?.statusCode === 400) {
      toast.warn("Invalid user credential");
    } else {
      toast.success("Login successful");
      cb &&
        cb({
          token: res?.data?.result?.token,
          refreshToken: res?.data?.result?.refreshToken,
          expiresAt: res?.data?.result?.expiresAt,
        });
    }
    setLoader && setLoader(false);
  } catch (error: any) {
    setLoader && setLoader(false);
    toast.warn("Invalid user credential");
  }
};
