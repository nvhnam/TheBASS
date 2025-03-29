import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import api from "../api/api";

const BACKEND_URL = import.meta.env.VITE_BACKEND;

export const AuthContext = createContext();

export const AuthContextProvider = ({ children, setIsLoading }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );

  const logout = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(`${BACKEND_URL}/auth/logout`, {
        credentials: "include",
        mode: "cors",
      });
      console.log("Logout res: ", res);

      if (res.status === 200) {
        setCurrentUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.alert(res.data);
      } else {
        console.log("Error logout");
        window.alert(res.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
    // console.log("isUserAvailable: ", currentUser);
    if (currentUser != null) {
      const expireTime = new Date().getTime() + currentUser.expiresIn;
      const currentTime = new Date().getTime();
      console.log("expireTime: ", expireTime);
      console.log("currentTime: ", currentTime);
      if (currentTime >= parseInt(expireTime, 10)) {
        logout();
      }
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, logout, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
