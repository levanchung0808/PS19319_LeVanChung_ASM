import { View, Text, TextInput, Pressable, Image } from "react-native";
import styles from "./styleLogin";
import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState("levanchunq123@gmail.com");
  const [password, setPassword] = useState("123");
  const { onLogin } = useContext(UserContext);

  const login = async () => {
    try {
      const res = await onLogin(email, password);
      if (res == false) {
        ToastAndroid.show("Login failed", ToastAndroid.SHORT);
      }
    } catch (e) {
      console.log("Login error: ", e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome Back</Text>
      <Text style={styles.lorem}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam maecenas
        mi non sed ut odio. Non, justo, sed facilisi et.{" "}
      </Text>
      <TextInput
        placeholderTextColor={"#666161"}
        style={styles.input}
        placeholder={"Username , Email&Phone Number"}
        value={email}
        onChangeText={setEmail}
      ></TextInput>
      <TextInput
        placeholderTextColor={"#666161"}
        style={styles.input}
        placeholder={"Password"}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      ></TextInput>

      <Pressable style={styles.lbforgotPassword}>
        <Text style={styles.forgotPassword}>Forgot Password ?</Text>
      </Pressable>

      <Pressable onPress={login} style={styles.button}>
        <Text style={styles.btnSignIn}>Sign in</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          navigation.navigate("RegisterScreen");
        }}
        style={styles.btnSignUp}
      >
        <LinearGradient
          colors={["rgba(34, 81, 37, 1)", "rgba(196, 196, 196, 0)"]}
          start={[1, 0]}
          end={[0, 0]}
          style={styles.linearGradient}
        ></LinearGradient>
        <Text style={styles.btnSignUpText}>Sign up</Text>
        <LinearGradient
          colors={["rgba(34, 81, 37, 1)", "rgba(196, 196, 196, 0)"]}
          start={[0, 0]}
          end={[1, 0]}
          style={styles.linearGradient}
        ></LinearGradient>
      </Pressable>

      <View style={styles.icLoginWith}>
        <View style={styles.icLogin}>
          <Pressable style={styles.bgLogin}>
            <Image
              style={styles.bg_ic}
              source={require("../../../media/bg_ic.png")}
            ></Image>
            <Image
              style={styles.ic_fb}
              source={require("../../../media/ic_google.png")}
            ></Image>
          </Pressable>

          <Pressable style={styles.bgLogin}>
            <Image
              style={styles.bg_ic}
              source={require("../../../media/bg_ic.png")}
            ></Image>
            <Image
              style={styles.ic_fb}
              source={require("../../../media/ic_fb.png")}
            ></Image>
          </Pressable>

          <Pressable style={styles.bgLogin}>
            <Image
              style={styles.bg_ic}
              source={require("../../../media/bg_ic.png")}
            ></Image>
            <Image
              style={styles.ic_fb}
              source={require("../../../media/ic_apple.png")}
            ></Image>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
