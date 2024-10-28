<template>
  <div class="Register">
    <div class="register" :style="{ backgroundImage: `url(${backgroundimg})` }"></div>
    <p class="title">欢迎注册！</p>
    <div class="box">
      <form action="submit" method="post">
        <div class="username">
          <label for="uername">用户名:</label>
          <input type="text" name="username" required v-model="username" /><br>
        </div>
        <div class="password">
          <label for="password">密码:</label>
          <input type="pwd" name="password" required v-model="password" /><br>
        </div>
        <div class="phone">
          <label for="phone">手机号码:</label>
          <input type="text" name="phnoe" required v-model="phone" /><br>
        </div>
        <div class="code">
          <label for="code">验证码:</label>
          <input type="text" name="code" required v-model="code" />
          <button type="button" class="getcode">发送验证码</button>
        </div>
      </form>
      <button type="submit" class="submit" @click="register">注册</button>
    </div>


  </div>


</template>


<script setup lang="ts">
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
import backgroundimg from "@/assets/image/backgroundimg.jpg"
import Register from '@/api/Register'
const username = ref('');
const password = ref('');
const phone = ref('');
const code = ref('');
function register() {
  const person = {
    username: username.value,
    password: password.value,
    phone: phone.value,
    code: code.value,
  }
  console.log(person)
  Register.register(person).then((res) => {  //res 是 Register.register(person) 方法成功执行后返回的响应对象。
    console.log(res)
  })
}

//生成验证码
function generateCaptcha(length: number = 4): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < length; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
}

//发送验证码
async function sendCaptcha(email: string, captcha: string): Promise<void> {
  // 这里可以使用邮件服务或短信服务发送验证码
  console.log(`验证码已发送至 ${email}: ${captcha}`);
}

//验证验证码
function verifyCaptcha(userInput: string, storedCaptcha: string): boolean {
  return userInput === storedCaptcha;
}


//存储验证码
const captchaStore: { [key: string]: string } = {};

function storeCaptcha(email: string, captcha: string): void {
  captchaStore[email] = captcha;
}

function getCaptcha(email: string): string | undefined {
  return captchaStore[email];
}
</script>


<style scoped>
.Register {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.register {
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

.box {
  background-color: #fff;
  width: 400px;
  height: 450px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  opacity: 0.7;
}

.title {
  color: #fff;
  font-size: 60px;
  letter-spacing: 30px;
  font-family: 'Courier New', Courier, monospace;
}

input {
  width: 300px;
  height: 25px;
  display: flex;
}

.getcode {
  width: 100px;
  height: 30px;
  font-size: 15px;
  margin-top: 15px;
  background-color: #b0b5b9;
  border: none;
  border-radius: 3px;

}

.getcode:hover {
  background-color: #c9ced2
}

.submit {
  width: 150px;
  height: 40px;
  font-size: 30px;
  color: #fff;
  background-color: rgb(98, 150, 239);
  border-radius: 4px 0px;
  border: none;
  cursor: pointer;

}

.submit:hover {
  background-color: rgb(151, 203, 248);
}
</style>