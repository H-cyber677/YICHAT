import axiosRequest from "@/utils/axiosRequest"

interface LoginBody {
  username: string
  password: string
}

export default class Login {
  static login(body: LoginBody) {
    return axiosRequest.post('/login', body)
  }
}