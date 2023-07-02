import {BASE_URL} from "./constants";
import axios from "axios";

export const getBlogRequest = async () => {
    return await axios.get(`${BASE_URL}/products`)
}