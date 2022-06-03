import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { styles } from "./style_InsertProduct";

const InsertProduct = () => {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.imgProduct} resizeMode={"contain"} source={require("../../../media/products.png")}></Image>
      <Image style={styles.imgImage}source={require("../../../media/edit_image_product.png")}></Image>
      <View>
        <Text style={styles.lbText}>Name Product:</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
      <View>
        <Text style={styles.lbText}>Manufacturing Date:</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
      <View>
        <Text style={styles.lbText}>Quantity:</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
      <View>
        <Text style={styles.lbText}>Describe:</Text>
        <TextInput textAlignVertical={"top"} multiline={true} numberOfLines={4} style={styles.inputDes}></TextInput>
      </View>
      <Pressable style={styles.btnInsert}>
        <Image source={require("../../../media/ic_add.png")}></Image>
        <Text style={styles.txtInsert}>Insert</Text>
      </Pressable>
    </ScrollView>
  );
};

export default InsertProduct;
