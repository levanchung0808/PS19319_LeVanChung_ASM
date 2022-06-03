import { View, Text, TextInput, Pressable, ToastAndroid } from "react-native";
import React, { useContext, useState } from "react";
import styles from "./styleRegister";
import { UserContext } from "../UserContext";

const RegisterScreen = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState("levanchung@gmail.com");
  const [password, setPassword] = useState("123");
  const { onRegister } = useContext(UserContext);

  const register = async () => {
    try {
      const res = await onRegister(email, password);
      if (res == false) {
        ToastAndroid.show("Register failed", ToastAndroid.SHORT);
      } else {
        ToastAndroid.show("Register success", ToastAndroid.SHORT);
        navigation.goBack();
      }
    } catch (e) {
      console.log("register error: ", e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Hello New Friend</Text>
      <Text style={styles.lorem}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam maecenas
        mi non sed ut odio. Non, justo, sed facilisi et.{" "}
      </Text>
      <TextInput
        style={styles.input}
        placeholder={"Username , Email & Phone Number"}
        value={email}
        onChangeText={setEmail}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder={"Password"}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder={"Confirm Password"}
      ></TextInput>
      <Pressable onPress={register} style={styles.button}>
        <Text style={styles.buttonLabel}>Register</Text>
      </Pressable>
    </View>
  );
};

export default RegisterScreen;
