<script setup lang="ts">
import { ref } from 'vue';
import UserList from './components/UserList.vue';
const items = ref([{
  name: "xiaoming",
  icon: "xxx",
  time: "xxxx",
  chat: "xxxxx"
}, {
  name: "xiaoming",
  icon: "xxx",
  time: "xxxx",
  chat: "xxxxx"
}, {
  name: "xiaoming",
  icon: "xxx",
  time: "xxxx",
  chat: "xxxxx"
}])

</script>

<template>
  <div class="center" :style="{ width: '300px' }">
    <input type="text" placeholder="搜索" class="input">
    <button class="button">Search</button>
    <hr class="hr">
    <UserList v-for="(item, index) in items" :userInfor="item" :key="index"></UserList>
  </div>
</template>
<style scoped>
.center {
  background-color: rgba(226, 226, 226);
  height: 100%;
}

.input {
  transition: transform 1s;
  transform: translate(10px, 15px);
  border: none;
  width: 220px;
  height: 40px;
}



.button {
  transition: transform 1s;
  transform: translate(10px, 15px);
  border: none;
  height: 40px;
}

.button:hover {
  background-color: rgb(128, 130, 131);
  color: rgb(255, 255, 255);
}

.hr {
  transition: transform 1s;
  transform: translate(20px, 25px);
  width: 291px;
  margin-left: -20px;
}
</style>
