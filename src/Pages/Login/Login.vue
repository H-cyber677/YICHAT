<template>
  <div class="Login">
    <div class="loginimg" :style="{ backgroundImage: `url(${backgroundimg})` }"></div>
    <p class="title">Hello,Welcome Yicha!</p>
    <form action="/submit" method="post">
      <div class="form-group">
        <label for="username"></label>
        <input type="text" id="username" name="username" placeholder="用户名ID" required /><br>
      </div>
      <div class="form-group">
        <label for="password"></label>
        <input type="pwd" name="password" id="password" placeholder="密码" required />
      </div>
      <div class="reminder">
        <div class="checkbox">
          <input type="checkbox" name="remember" id="remember" class="remember" required />
          <label for="remember-me">记住密码</label>
        </div>
        <div class="text">
          <p>忘记密码,<a href="">立即注册</a></p>
        </div>
      </div>

      <button type="submit" id="login">登录</button>
    </form>


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
  Login.login(body).then((res) => {
    console.log(res);
  });
}
</script>

<style scoped>
/* .Login{
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
  
} */
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

}

input {
  width: 300px;
  height: 30px;
}

input:hover {
  background-color: #d6d1d1;
}

.form-group {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
  transform: translateY(70px);
  font-size: 20px;
}

#login {
  width: 300px;
  height: 30px;
  font-size: 20px;
  color: #fff;
  background-color: rgb(11, 119, 220);
  border: none;
  transition: transform 1s;
  transform: translate(540px, 30px);
}

#login:hover {
  background-color: rgb(45, 73, 188);
}

.remember {
  width: 20px;
  height: 20px;
}

.reminder {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 80px;
  gap: 30px;
}
.checkbox{
  display: flex;
  align-items: center;
}
.text{
  display: flex;
}
</style>