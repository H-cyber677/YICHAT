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
  <div class="center" :style="{ width: '300px', height: '700px' }">
    <input type="text" placeholder="搜索" class="input">
    <button class="button">Search</button>
    <hr class="hr">
    <UserList v-for="(item, index) in items" :userInfor="item" :key="index"></UserList>
  </div>
</template>
<style scoped>
.center {
  background-color: rgba(226, 226, 226);
}

.input {
  transition: transform 1s;
  transform: translate(15px, 15px);
  border: none;
  width: 220px;
  height: 30px;
}

.input:hover {
  color: rgb(134, 19, 19);
}

.button {
  transition: transform 1s;
  transform: translate(20px, 15px);
  border: none;
  height: 30px;
}

.button:hover {
  background-color: aqua;
  color: aqua;
}

.hr {
  transition: transform 1s;
  transform: translate(20px, 25px);
  width: 300px;
  margin-left: -20px;
}
</style>
