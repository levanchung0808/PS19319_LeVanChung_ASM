import { StyleSheet } from "react-native";
import { title1 } from "../../../../global/fonts";

const styles = StyleSheet.create({
  ic_fb: {
    position: "absolute",
    top: 11,
    left: 11,
  },
  icLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 10
  },
  bgLogin: {
    position: "relative",
    width: "16%",
    margin: 10,
  },
  icLoginWith: {
    width: "100%",
  },
  forgotPassword: {
    fontWeight: "bold",
  },
  lbforgotPassword: {
    alignItems: "flex-end",
  },
  // signup
  linearGradient: {
    height: 3,
    width: "40%",
  },

  btnSignUp: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  btnSignUpText: {
    color: "green",
    fontSize: title1.fontSize,
    fontWeight: "bold",
    marginHorizontal: 10,
  },

  btnSignIn: {
    color: "white",
    fontSize: 22,
    lineHeight: 28,
    textAlign: "center",
    fontWeight: "700",
  },
  button: {
    width: "100%",
    backgroundColor: "#225125",
    paddingVertical: 15,
    borderRadius: 15,
    marginTop: 22,
  },
  input: {
    width: "100%",
    marginVertical: 10,
    backgroundColor: "#F3F3F3",
    borderRadius: 15,
    padding: 20,
    shadowColor: "rgba(0, 0, 0, 0.12)",

    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 19,
    color: "#666161",
  },

  welcome: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 30,
    lineHeight: 38,
    marginTop: 44,
    textAlign: "center",
    color: "#464444",
    lineHeight: 38,
  },

  lorem: {
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 13,
    lineHeight: 16,
    textAlign: "center",
    color: "#000000",
    marginBottom: 26,
  },

  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
});

export default styles;
