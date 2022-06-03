import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const padding = 9;

const widthItem = windowWidth / 2 - padding * 4;

const styles = StyleSheet.create({
  //item
  txtPrice: {
    color: "white",
    fontWeight: "500",
    fontSize: 15,
    paddingLeft: 10,
  },
  ic_hinhtron: {
    position: "absolute",
    right: -30,
    top: -20,
  },
  ic_heart: {
    position: "absolute",
    right: -25,
    top: -12.5,
  },
  ic_favorites: {
    position: "relative",
  },
  txtNameProduct: {
    color: "white",
    fontWeight: "500",
    fontSize: 15,
    paddingStart: 10,
  },
  lbContainer: {
    position: "absolute",
    left: 0,
    top: 120,
  },
  itemBackground: {
    marginTop: 50,
  },
  imgCaffe: {
    position: "absolute",
    right: -10,
    top: -50,
    width: 162,
    height: 162,
  },
  txtRate: {
    position: "absolute",
    left: 25,
    top: 18,
    color: "#FFFFFF",
    fontWeight: "400",
    fontSize: 18,
    marginStart:4
  },
  icStar: {
    position: "absolute",
    left: "7.58%",
    right: "89.29%",
    top: "15%",
    bottom: "66.21%",
    width: 11.76,
    height: 11.22,
  },
  itemContainer: {
    width: widthItem,
    height: widthItem,
    marginHorizontal: padding,
    marginTop: padding * 8,
    backgroundColor: "#225125",
    position: "relative",
    borderRadius: 20,
  },
  itemContainerBig: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },

  //menu
  menu_item: {
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 23,
    fontStyle: "normal",
  },
  menu: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  good_morning: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 19,
    color: "rgba(0, 0, 0, 0.6)",
  },
  name: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    lineHeight: 25,
    color: "#225125",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  searchBar: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
    backgroundColor: "#F0F0F0",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});

export default styles;
