import axios from "axios";
export default async function getUser(setUser) {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/me`, {
      withCredentials: true,
    });
    setUser(res.data);
  } catch (error) {
    // console.log("Get user error: ", error);
    setUser(null);
  }
}
