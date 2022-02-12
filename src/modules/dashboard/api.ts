import axios from "axios";

export const getManufacturersApi = async (
  skip?: number,
  limit?: number,
  setLoading?: Function
) => {
  setLoading && setLoading(true);
  try {
    const res = await axios.get(
      `/api/v2/manufacturers?skip=${skip}&limit=${limit}`
    );
    if (res.status === 200 && res?.data) {
      setLoading && setLoading(false);
      return res?.data?.result;
    }
  } catch (error) {
    setLoading && setLoading(false);
    return null;
  }
};
