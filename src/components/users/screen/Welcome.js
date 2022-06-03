import { Text, View, Image, Pressable } from "react-native";
import React from "react";
import style from "../screen/styleWelcome";

import LoginScreen from "./Login";
import RegisterScreen from "./Register";
import HomeScreen from "./Home";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const WelcomeScreen = ({ navigation }) => {
  return (
    <>
      <NavigationContainer style={style.container}>
        {/* <Stack.Navigator
          initialRouteName="WelcomeScreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator> */}
      </NavigationContainer>

      <View style={style.container}>
        <View style={style.itemContainer}>
          <Image
            style={style.itemCaffee}
            source={require("../../../img/item_caffee.png")}
          ></Image>
        </View>

        <View style={style.discoverContainer}>
          <Text style={style.txtDiscover}>Discover Your</Text>
          <Text style={style.txtDiscover}>Own Dream House</Text>
          <Text style={style.txtLorem}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
            maecenas mi non sed ut odio. Non, justo, sed facilisi et. Eget
            viverra urna, vestibulum egestas faucibus egestas. Sagittis nam
            velit volutpat eu nunc.
          </Text>
        </View>

        <View style={style.btnContainer}>
          <Pressable
            onPress={() => navigation.navigate("LoginScreen")}
            style={style.btnSignIn}
          >
            <Text style={style.txtSignIn}>Sign In</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("RegisterScreen")}
            style={style.btnRegister}
          >
            <Text style={style.txtRegister}>Register</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default WelcomeScreen;
