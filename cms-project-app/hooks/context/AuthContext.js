import React, { useState } from "react";
import { createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../../globalClasses/Config";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    axios
      .post(`${BASE_URL}/api/user/login`, {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        let userI = res.data;
        setUser(userI);
        AsyncStorage.setItem("user", JSON.stringify(userI));
      })
      .catch((e) => {
        console.log(e);
      });

    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    try {
      AsyncStorage.removeItem("user").then(() => {
        setUser(null);
        setIsLoading(false);
      });
    } catch {
      (e) => {
        console.log(e);
        setIsLoading(false);
      };
    }
  };

  const isLoggedIn = async () => {
    try {
      let user = await AsyncStorage.getItem("user");
      if (user) {
        let u = JSON.parse(user);
        setUser(u);
      }
      setIsLoading(false);
    } catch {
      (e) => {
        console.log(e);
      };
    }
  };

  useEffect(() => {
    isLoggedIn();
  });

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, user }}>
      {children}
    </AuthContext.Provider>
  );
};
