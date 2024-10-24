<template>
  <div class="Login">
    <div class="loginimg" :style="{ backgroundImage: `url(${backgroundimg})` }"></div>
    <p class="title">Hello,Welcome Yicha!</p>
    <div class="box">

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

        <button type="submit" class="login">登录</button>
      </form>
    </div>

  </div>

</template>

<script lang="ts" setup>
import {
  ref,
  reactive,
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
.Login {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box {
  display: flex;
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
  transform: translateY(70px);
  font-size: 20px;
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
  display: flex;
  align-items: center;
  margin-top: 80px;
  gap: 100px;
}
</style>