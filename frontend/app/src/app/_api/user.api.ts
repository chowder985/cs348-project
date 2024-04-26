import axios from "axios";
import { UserInfo } from "../_dto/example.dto";

const endpoint = `http://localhost:8081`

async function getFullName() {
    try {
        return (await axios.get(`${endpoint}/`)).data
    } catch (error) {
        console.error(error)
    }
}

export default {
    getFullName,
}