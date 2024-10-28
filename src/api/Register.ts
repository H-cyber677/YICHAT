import axiosRequest from "@/utils/axiosRequest";

interface RegisterBody{
    username: string
    password: string
    phone: string
    code: string
}
export default class Register{
    static register(body: RegisterBody){
        return axiosRequest.post('/register', body)
    }
}