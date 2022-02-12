import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { authSlice } from "../../redux/slices";
import Logo from "../../_master/assets/logoDhakai.png";
import FormInput from "../../_master/components/FormInput";
import { getDeviceIdApi, postLoginApi } from "./api";

function Signin() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });
  const [deviceUuid, setDeviceUuid] = useState("");

  useEffect(() => {
    getDeviceIdApi(setDeviceUuid);
  }, []);

  const loginHandler = (e: any) => {
    e.preventDefault();
    postLoginApi(
      loginState?.email,
      loginState?.password,
      deviceUuid,
      setLoading,
      (res: any) => {
        dispatch(authSlice.SetAuthInfo(res));
      }
    );
  };

  const setValue = (name: string, value: string) => {
    setLoginState({
      ...loginState,
      [name]: value,
    });
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center w-full bg-gradient-to-r  from-green-200 to-pink-200">
        <form
          onSubmit={(e) => loginHandler(e)}
          className="bg-white-0 drop-shadow-xl rounded p-8 w-11/12 md:w-1/3 text-gray-90 z-50"
        >
          <h1 className="text-2xl font-bold mb-4 flex items-center justify-between">
            Sign in <img alt="logo" className="w-6 h-6 ml-4" src={Logo} />
          </h1>
          <div className="flex flex-col my-2">
            <FormInput
              name="email"
              required
              label="Email Address"
              value={loginState?.email}
              placeholder="example@gmail.com"
              type="email"
              onChange={(e: any) => setValue("email", e.target.value)}
            />
          </div>
          <div className="flex flex-col my-2">
            <FormInput
              name="password"
              required
              label="Password"
              value={loginState?.password}
              placeholder="Your Password"
              type="password"
              onChange={(e: any) => setValue("password", e.target.value)}
            />
          </div>
          <div className="my-4">
            <button className="w-full flex justify-center items-center rounded bg-green-900 text-white-0 py-2">
              {loading ? (
                <>
                  <label className="mr-2">Loading</label>
                  <div className="btn-loader"></div>
                </>
              ) : (
                "LOG IN"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signin;
