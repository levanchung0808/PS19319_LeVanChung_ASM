import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgImage: {
    alignSelf: "flex-end",
  },
  imgProduct: {
    width: "100%",
  },
  txtDelete: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 5,
  },
  btnDelete: {
    width: "35%",
    backgroundColor: "#225125",
    padding: 10,
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  lbText: {
    fontWeight: "bold",
    fontSize: 12,
  },
  inputDes: {
    color: "#000000",
    width: "100%",
    backgroundColor: "#F3F3F3",
    borderRadius: 15,
    padding: 10,
    shadowColor: "rgba(0, 0, 0, 0.12)",

    alignContent: "flex-start",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 15,
  },
  input: {
    color: "#000000",
    width: "100%",
    backgroundColor: "#F3F3F3",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 5,
    shadowColor: "rgba(0, 0, 0, 0.12)",

    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 15,
  },
  container: {
    padding: 20,
    backgroundColor: "white",
  },
});
