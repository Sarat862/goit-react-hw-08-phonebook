import { instance } from "./contactsAPI";

const authorizationToken = (token) => instance.defaults.headers.common.authorization = `Bearer ${token}`;

export const signup = async (signupData) => {
    const { data } = await instance.post("/users/signup", signupData);
    authorizationToken(data.token);
    return data;
}

export const login = async (loginData) => {
    const { data } = await instance.post("/users/login", loginData);
    authorizationToken(data.token);
    return data;
}

export const logout = async () => {
    const { data } = await instance.post("/users/logout");
    return data;
}

export const getCurrentUser = async (token) => {
    try {
        authorizationToken(token);
        const { data } = await instance.get("/users/current");
        return data;
    } catch (error) {
        throw error;
    }
}