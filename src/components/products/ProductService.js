import axiosInstance from "../..//utils/AxiosInstance";

export const getProducts = async() => {
    const result = await axiosInstance.get('/api/products'); 
    return result;
}

export const getProduct = async(id) => {
    const result = await axiosInstance.get(`/api/products/${id}/detail`);
    return result;
}

export const insertProduct = async(name, price, quantity, images, category) => {
    const data = {
        name, price, quantity, images, category
    }
    const result = await axiosInstance.post('/api/products', data);
    return result;
}

export const updateProduct = async(id, name, price, quantity, images, category) => {
    const data = {
        name, price, quantity, images, category
    }
    const result = await axiosInstance.put(`/api/products/${id}/update`, data);
    return result;
}

export const deleteProduct = async(id) => {
    const result = await axiosInstance.delete(`/api/products/${id}/delete`);
    return result;
}

export const uploadImage = async(image) => {
    const data = {
        image
    }
    const result = await axiosInstance.post(`/api/media/upload`, data);
    return result;
}




