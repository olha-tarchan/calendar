import axios, {AxiosResponse} from "axios";
import {IUser} from "../models/IUser";

export default class UserService {
    //static позволяет вызвать метод без создания экземпляра класса
    static async getUsers(): Promise<AxiosResponse<IUser[]>> {
        return axios.get<IUser[]>('./user.json')
    }
}