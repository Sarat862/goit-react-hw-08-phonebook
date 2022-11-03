import axios from "axios";

const instanceContacts = axios.create({
    baseURL: "https://connections-api.herokuapp.com",
});

export const getContacts = async() => {
    const response = await instanceContacts.get("/contacts");
    return response.data;
}

export const addContact = async (data) => {
    const response = await instanceContacts.post("/contacts", data);
    return response.data;
}

export const deleteContact = async (id) => {
    const response = await instanceContacts.delete(`/contacts/${id}`);
    return response.data;
}