import React from "react";
//font
import {
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_400Regular_Italic,
} from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";

import AppNavigator from "./src/components/navigation/AppNavigator";
import { UserContextProvider } from "./src/components/users/UserContext";
import { ProductContextProvider } from "./src/components/products/ProductContext";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_400Regular_Italic,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <UserContextProvider>
      <ProductContextProvider>
        <AppNavigator />
      </ProductContextProvider>
    </UserContextProvider>
  );
}
