<template>
  <div class="Register">
    <div class="register" :style="{ backgroundImage: `url(${backgroundimg})` }"></div>
    <p class="title">欢迎注册！</p>
    <div class="box">
      <form action="submit" method="post">
        <label for="uername">用户名:</label>
        <input type="text" name="username" required /><br>
        <label for="password">密码:</label>
        <input type="pwd" name="password" required /><br>
        <label for="phone">手机号码:</label>
        <input type="text" name="phnoe" required /><br>
        <label for="code">验证码:</label>
        <input type="text" name="code" required />
      </form>
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
</style>