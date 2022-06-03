import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

import HomeScreen from "./screen/Home";
import InsertProduct from "./screen/InsertProduct";
import InsertCategoryScreen from "./screen/InsertCategory";
import AccountScreen from "./screen/Account";

const ProductNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="InsertProduct" component={InsertProduct} />
      <Tab.Screen name="InsertCategoryScreen" component={InsertCategoryScreen} />
      <Tab.Screen name="AccountScreen" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default ProductNavigation;

const styles = StyleSheet.create({});
