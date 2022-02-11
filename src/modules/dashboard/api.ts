import axios from "axios";

export const getManufacturersApi = async (
  setter: Function,
  setLoading?: Function
) => {
  setLoading && setLoading(true);
  try {
    const res = await axios.get(`/api/v2/manufacturers`);
    if (res.status === 200 && res?.data) {
      setter(res?.data?.result?.manufacturers || []);
    }
    setLoading && setLoading(false);
  } catch (error) {
    setter(null);
    setLoading && setLoading(false);
  }
};
