import {
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useContext, useEffect } from "react";
import styles from "./styleHome";
import { Feather } from "@expo/vector-icons";
import { ProductContext } from "../ProductContext";

const HomeScreen = (props) => {
  const { navigation } = props;
  const { products, onGetProducts } = useContext(ProductContext);


  console.log(products);

  useEffect(() => {
    onGetProducts();
    return () => {
      console.log("useEffect() called");
    };
  }, []);

  const renderItem = ({ item, index }) => {
    const { name, price, images } = item;

    console.log("item", item);
    return (
      <ScrollView>
        <View style={styles.itemContainer}>
          <Image
            style={styles.icStar}
            source={require("../../../media/star.png")}
          ></Image>
          <Text style={styles.txtRate}>4.2</Text>
          <Image style={styles.imgCaffe} source={{ uri: { images } }}></Image>
          <View style={styles.lbContainer}>
            <Text style={styles.txtNameProduct}>{name}</Text>
            <View style={styles.ic_favorites}>
              <Image
                style={styles.ic_hinhtron}
                source={require("../../../media/hinhtron.png")}
              ></Image>
              <Image
                style={styles.ic_heart}
                source={require("../../../media/heart.png")}
              ></Image>
            </View>
            <Text style={styles.txtPrice}>${price}</Text>
          </View>
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.good_morning}>Good Morning!</Text>
      <Text style={styles.name}></Text>

      <View style={styles.searchBar}>
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={"rgba(0, 0, 0, 0.4)"}
        />
      </View>

      <View style={styles.menu}>
        <Pressable>
          <Text
            style={[styles.menu_item, { color: "#225125", fontWeight: "bold" }]}
          >
            Popular
          </Text>
        </Pressable>
        <Pressable>
          <Text style={styles.menu_item}>Coffee</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.menu_item}>Tea</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.menu_item}>Drink</Text>
        </Pressable>
      </View>

      <View style={styles.itemContainerBig}>
        <FlatList
          data={products}
          renderItem={(item, index) => {
            return <Text>{index}</Text>;
          }}
          keyExtractor={(item, index) => index}
        />

        {/* <View style={styles.itemContainer}>
            <Image
              style={styles.icStar}
              source={require("../../../media/star.png")}
            ></Image>
            <Text style={styles.txtRate}>4.2</Text>
            <Image
              style={styles.imgCaffe}
              source={require("../../../media/item_caffee.png")}
            ></Image>
            <View style={styles.lbContainer}>
              <Text style={styles.txtNameProduct}>Cafè Americano</Text>
              <View style={styles.ic_favorites}>
                <Image
                  style={styles.ic_hinhtron}
                  source={require("../../../media/hinhtron.png")}
                ></Image>
                <Image
                  style={styles.ic_heart}
                  source={require("../../../media/heart.png")}
                ></Image>
              </View>
              <Text style={styles.txtPrice}>$30</Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <Image
              style={styles.icStar}
              source={require("../../../media/star.png")}
            ></Image>
            <Text style={styles.txtRate}>4.2</Text>
            <Image
              style={styles.imgCaffe}
              source={require("../../../media/item_caffee.png")}
            ></Image>
            <View style={styles.lbContainer}>
              <Text style={styles.txtNameProduct}>Cafè Americano</Text>
              <View style={styles.ic_favorites}>
                <Image
                  style={styles.ic_hinhtron}
                  source={require("../../../media/hinhtron.png")}
                ></Image>
                <Image
                  style={styles.ic_heart}
                  source={require("../../../media/heart.png")}
                ></Image>
              </View>
              <Text style={styles.txtPrice}>$30</Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <Image
              style={styles.icStar}
              source={require("../../../media/star.png")}
            ></Image>
            <Text style={styles.txtRate}>4.2</Text>
            <Image
              style={styles.imgCaffe}
              source={require("../../../media/item_caffee.png")}
            ></Image>
            <View style={styles.lbContainer}>
              <Text style={styles.txtNameProduct}>Cafè Americano</Text>
              <View style={styles.ic_favorites}>
                <Image
                  style={styles.ic_hinhtron}
                  source={require("../../../media/hinhtron.png")}
                ></Image>
                <Image
                  style={styles.ic_heart}
                  source={require("../../../media/heart.png")}
                ></Image>
              </View>
              <Text style={styles.txtPrice}>$30</Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <Image
              style={styles.icStar}
              source={require("../../../media/star.png")}
            ></Image>
            <Text style={styles.txtRate}>4.2</Text>
            <Image
              style={styles.imgCaffe}
              source={require("../../../media/item_caffee.png")}
            ></Image>
            <View style={styles.lbContainer}>
              <Text style={styles.txtNameProduct}>Cafè Americano</Text>
              <View style={styles.ic_favorites}>
                <Image
                  style={styles.ic_hinhtron}
                  source={require("../../../media/hinhtron.png")}
                ></Image>
                <Image
                  style={styles.ic_heart}
                  source={require("../../../media/heart.png")}
                ></Image>
              </View>
              <Text style={styles.txtPrice}>$30</Text>
            </View>
          </View> */}
      </View>
    </View>
  );
};

export default HomeScreen;
