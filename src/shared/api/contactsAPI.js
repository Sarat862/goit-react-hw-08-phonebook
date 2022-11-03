import axios from "axios";

export const instance = axios.create({
    baseURL: "https://connections-api.herokuapp.com",
});

export const getContacts = async() => {
    const response = await instance.get("/contacts");
    return response.data;
}

export const addContact = async (data) => {
    const response = await instance.post("/contacts", data);
    return response.data;
}

export const deleteContact = async (id) => {
    const response = await instance.delete(`/contacts/${id}`);
    return response.data;
}