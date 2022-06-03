import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  //item
  txtPrice:{
    color: 'white',
    fontWeight: '500',
    fontSize: 15,
    paddingLeft: 5,
  },  
  ic_hinhtron:{
    position: 'absolute',
    right: -30,
    top: -20,
  },
  ic_heart:{
    position: 'absolute',
    right: -25,
    top: -13,
  },
  ic_favorites:{
    position: 'relative'
  },
  txtNameProduct:{
    color: 'white',
    fontWeight: '500',
    fontSize: 15,
    paddingLeft: 5,
  },
  lbContainer:{
    position: 'absolute',
    left: 0,
    top: 120,
  },
  itemBackground:{
    marginTop: 50,
  },
  imgCaffe:{
    position: 'absolute',
    left: 10,
    top: -50,
  },
  txtRate: {
    position: "absolute",
    left: 25,
    top: 20,
    color: '#FFFFFF',
    fontWeight: '400',
    fontSize: 18,
  },
  icStar: {
    position: "absolute",
    left: "7.58%",
    right: "89.29%",
    top: "15%",
    bottom: "66.21%",
  },
  itemContainer: {
    width: "47%",
    height: 170,
    marginTop: 70,
    backgroundColor: '#225125',
    position: "relative",
    borderRadius: 20,
  },
  itemContainerBig:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
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
