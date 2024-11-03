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
        <div class="confirmPassword">
          <label for="confirmPassword">确认密码：</label>
          <input type="pwd" name="confirmPassword" required v-model="confirmPassword" /><br>
        </div>
      </form>
      <button type="submit" class="submit" @click="register">注册</button>
      <!-- 不需要了下面的这个RouterLink组件了,有命令式的跳转方式了 -->
      <!-- <RouterLink to="/login"><button type="submit" class="submit" @click="register">注册</button></RouterLink> -->
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
import { useRouter } from 'vue-router' // 引入跳转页面的方法
const router = useRouter()  // 获取跳转页面的方法

const username = ref('');
const password = ref('');
const confirmPassword = ref('');


function register() {
  // 检查两次密码死否一致
  if (password.value !== confirmPassword.value) {
    return alert('两次密码不一致')
  }
  console.log('两次密码一致')
  
  const person = {
    username: username.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  }
  console.log(person)
  Register.register(person).then((res) => {  //res 是 Register.register(person) 方法成功执行后返回的响应对象。
    console.log(res)
    // 跳转页面的方法
    router.push('/login')
  })
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