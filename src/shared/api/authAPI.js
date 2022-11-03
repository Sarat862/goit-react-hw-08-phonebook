import { instance } from "./contactsAPI"

export const signup = async (signupData) => {
    const { data } = await instance.post("/users/signup", signupData);
    return data;
}