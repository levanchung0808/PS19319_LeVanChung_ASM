import axiosInstance from "../../utils/AxiosInstance";

export const register = async(email, password) => {
    const data = {email: email, password: password};
    const result = await axiosInstance.post('/api/users/register', data);
    return result;
}

export const login = async(email, password) => {
    const data = {email: email, password: password};
    const result = await axiosInstance.post('/api/auth/login', data);
    return result;
}

export const logout = async() => {
    const data = {email: email, password: password};
    const result = await axiosInstance.get('/api/auth/logout', data);
    return result;
}