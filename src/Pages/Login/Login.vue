<template>
  <div class="Login">
    <div class="loginimg" :style="{ backgroundImage: `url(${backgroundimg})` }"></div>

    <div class="box">
      <p class="title">Hello,Welcome Yichat!</p>
      <form action="/submit" method="post">
        <div class="form-group">
          <label for="username"></label>
          <input type="text" name="username" placeholder="用户名ID" required v-model="username" /><br>
        </div>
        <div class="form-group">
          <label for="password"></label>
          <input type="pwd" name="password" placeholder="密码" required v-model="password" />
        </div>
        <div class="reminder">
          <div class="checkbox">
            <input type="checkbox" name="remember" class="remember" required />
            <label for="remember-me">记住密码</label>
          </div>
          <div class="text">
            <p>忘记密码,
              <RouterLink to="/registering">
                <a href="">立即注册</a>
              </RouterLink>
            </p>
          </div>
        </div>
        <RouterLink to="/chat"><button type="submit" class="login" @click="login">登录</button></RouterLink>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  reactive,
  watch,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
} from "vue";
import backgroundimg from "@/assets/image/backgroundimg.jpg";
import Login from "@/api/Login";
const username = ref("");
const password = ref("");
function login() {
  const body = {
    username: username.value,
    password: password.value,
  };
  console.log(body)
  Login.login(body).then((res) => {  //Login.login发送登录请求，Login.login是个返回Promise的异步方法，使用 .then 处理 Promise 的成功情况，使用 .then 处理 Promise 的成功情况，将响应结果 res 打印到控制台。
    console.log(res);
  });
}
</script>

<style scoped>
.Login {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box {
  display: flex;
  flex-direction: column;
  align-items: center;

}

.loginimg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(8px);
}

.title {
  color: #fff;
  font-size: 50px;
  font-family: 'Courier New', Courier, monospace;
  margin-top: 200px;
}

input {
  width: 300px;
  height: 30px;
}

input:hover {
  background-color: #d6d1d1;
}

.form-group {
  margin-bottom: 50px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login {
  width: 300px;
  height: 30px;
  font-size: 20px;
  color: #fff;
  background-color: rgb(11, 119, 220);
  border: none;

}

.login:hover {
  background-color: rgb(45, 73, 188);
}

.remember {
  width: 20px;
  height: 20px;
}

.reminder {
  margin-top: -20px;
  gap: 40px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
</style>