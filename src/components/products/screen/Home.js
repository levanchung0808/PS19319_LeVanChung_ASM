import {
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useContext, useEffect } from "react";
import styles from "./styleHome";
import { Feather } from "@expo/vector-icons";
import { ProductContext } from "../ProductContext";

const renderItem = (item) => {
  const { images, price, name } = item;
  return (
    <View style={styles.itemContainer}>
      {/* Image number rate */}
      <Image
        style={styles.icStar}
        source={require("../../../media/star.png")}
      />
      <Text style={styles.txtRate}>4.2</Text>
      <View style={styles.lbContainer}>
        <Text style={styles.txtNameProduct}>{name}</Text>
        <View style={styles.ic_favorites}>
          <Image
            style={styles.ic_hinhtron}
            source={require("../../../media/hinhtron.png")}
          />
          <Image
            style={styles.ic_heart}
            source={require("../../../media/heart.png")}
          ></Image>
        </View>
        <Text style={styles.txtPrice}>${price}</Text>
      </View>
      <Image
        source={{
          uri: images,
        }}
        style={styles.imgCaffe}
      />
    </View>
  );
};

const HomeScreen = (props) => {
  const { navigation } = props;
  const { products, onGetProducts } = useContext(ProductContext);

  useEffect(() => {
    onGetProducts();
  }, []);

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
        <TouchableOpacity>
          <Text
            style={[styles.menu_item, { color: "#225125", fontWeight: "bold" }]}
          >
            Popular
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menu_item}>Coffee</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menu_item}>Tea</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menu_item}>Drink</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.itemContainerBig}>
        <FlatList
          data={products}
          numColumns={2}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item) => item._id}
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
