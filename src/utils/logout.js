import axios from "axios";

export const logout = async (setUser, navigate) => {
  try {
    await axios.post(
      `${import.meta.env.VITE_API_URL}/logout`,
      {},
      { withCredentials: true }
    );
    setUser(null);
    navigate("/", { replace: true });
  } catch (error) {
    console.log(error);
  }
};
