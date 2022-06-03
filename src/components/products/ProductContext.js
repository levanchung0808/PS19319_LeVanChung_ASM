import React, { useState, createContext } from "react";
import {
  getProduct,
  insertProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  uploadImage,
} from "./ProductService";

export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
  const { children } = props;
  const [products, setProducts] = useState([]);

  const onGetProducts = async () => {
    try {
      const result = await getProducts();
      console.log(result);
      if (result.error == false) {
        setProducts(JSON.stringify(result.data));
        
      } else {
        console.log("onGetProducts error", e);
      }
    } catch (e) {
      console.log("onGetProducts error" , JSON.stringify(e));
    }
    return null;
  };

  const onGetProduct = async (id) => {
    try {
      const result = await getProduct(id);
      if (result.error == false) {
        return result.data;
      } else {
        //
      }
    } catch (e) {
      console.log("onGetProduct error", e);
    }
    return null;
  };

  const onInsertProduct = async (name, price, quantity, images, category) => {
    try {
      const result = await insertProduct(
        name,
        price,
        quantity,
        images,
        category
      );
      if (result.error == false) {
        return result.data;
      }
    } catch (e) {
      console.log("onInsertProduct error", e);
    }
    return null;
  };

  const onUpdateProduct = async (
    id,
    name,
    price,
    quantity,
    images,
    category
  ) => {
    try {
      const result = await updateProduct(
        name,
        price,
        quantity,
        images,
        category
      );
      if (result.error == false) {
        return result.data;
      }
    } catch (e) {
      console.log("onUpdateProduct error", e);
    }
    return null;
  };

  const onDeleteProduct = async (id) => {
    try {
      const result = await deleteProduct(id);
      if (result.error == false) {
        return result.data;
      }
    } catch (e) {
      console.log("onDeleteProduct error", e);
    }
    return null;
  };

  const onUploadImage = async (image) => {
    try {
      const result = await uploadImage(image);
      if (result.error == false) {
        return result.data;
      }
    } catch (e) {
      console.log("onUploadImage error", e);
    }
    return null;
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        onGetProducts,
        onGetProduct,
        onInsertProduct,
        onUpdateProduct,
        onDeleteProduct,
        onUploadImage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
