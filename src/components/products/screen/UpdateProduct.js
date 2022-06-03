import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { styles } from "./style_UpdateProduct";

const InsertProduct = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.imgProduct}
        resizeMode={"contain"}
        source={require("../../../img/products.png")}
      ></Image>
      <Image
        style={styles.imgImage}
        source={require("../../../img/edit_image_product.png")}
      ></Image>
      <View>
        <Text style={styles.lbText}>Name Product:</Text>
        <TextInput style={styles.input}>Iced Caffe Americano</TextInput>
      </View>
      <View>
        <Text style={styles.lbText}>Manufacturing Date:</Text>
        <TextInput style={styles.input}>30/12/2002</TextInput>
      </View>
      <View>
        <Text style={styles.lbText}>Quantity:</Text>
        <TextInput style={styles.input}>30</TextInput>
      </View>
      <View>
        <Text style={styles.lbText}>Describe:</Text>
        <TextInput
          textAlignVertical={"top"}
          multiline={true}
          numberOfLines={4}
          style={styles.inputDes}
        >
          Espresso shots topped with cold water produce a light layer of crema,
          then served over ice. The result: a wonderfuly rich cup with depth and
          nuance.
        </TextInput>
      </View>
      <View style={styles.btn}>
        <Pressable style={styles.btnDelete}>
          <Image source={require("../../../img/ic_delete.png")}></Image>
          <Text style={styles.txtDelete}>Delete</Text>
        </Pressable>

        <Pressable style={styles.btnDelete}>
          <Image source={require("../../../img/ic_edit.png")}></Image>
          <Text style={styles.txtDelete}>Delete</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default InsertProduct;
