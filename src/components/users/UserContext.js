import React, { useState, createContext } from "react";
import { register, login, logout } from "./UserService";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const { children } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const onLogin = async (email, password) => {
    try {
      const result = await login(email, password);
      console.log("result",JSON.stringify(result.data));
      if (result.error == false) {
        const {token, user} = result.data;
        //lưu token vào bộ nhớ
        await AsyncStorage.setItem("token", token);
        setUser(user);
        setIsLoggedIn(true);
        return true;
      } else {
        setIsLoggedIn(false);
        return false;
      }
    } catch (e) {
      console.log("onLogin error aaa", e);
    }
    return false;
  };

  const onRegister = async (email, password) => {
    try {
      const result = await register(email, password);
      if(result.error == false) {
          return true;
      }
    } catch (e) {
      console.log("onRegister error", e);
    }
    return false;
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, onLogin, onRegister, user }}>
      {children}
    </UserContext.Provider>
  );
};
