import axiosRequest from "@/utils/axiosRequest"//封装了一个axios请求的模块，提供了 post 方法用于发送 POST 请求。

interface LoginBody {//定义了一个LoginBody接口，表示登录请求的参数。
  username: string
  password: string
}


export default class Login {
  static login(body: LoginBody) {//静态方法login，接收一个LoginBody类型的参数body。
    return axiosRequest.post('/login', body)//返回调用axiosRequest.post方法的结果，将'/login'作为URL，将body作为请求体发送给服务器。
    //axiosRequest.post方法的返回值，通常是一个Promise对象，表示异步请求的结果。
  }
}

