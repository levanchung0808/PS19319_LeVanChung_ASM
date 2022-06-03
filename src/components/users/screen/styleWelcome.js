import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  txtRegister: {
    fontWeight: "700",
    fontSize: 22,
    textAlign: "center",
    color: "#545151",
  },
  btnRegister: {
    height: 65,
    width: 165,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3F3F3",
  },
  txtSignIn: {
    fontWeight: "700",
    fontSize: 22,
    textAlign: "center",
    color: "#FFF",
  },
  btnSignIn: {
    height: 65,
    width: 165,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#225125",
  },
  btnContainer: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  txtLorem: {
    textAlign: "center",
    fontSize: 13,
    color: "#000",
    marginTop: 20,
  },
  txtDiscover: {
    fontWeight: "700",
    fontSize: 30,
    color: "#464444",
  },

  discoverContainer: {
    alignItems: "center",
  },
  itemCaffee: {
    width: "70%",
    height: 300,
  },
  itemContainer: {
    backgroundColor: "#225125",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    height: 400,
    marginBottom: 43,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#E5E5E5',
  },
});

export default styles;
