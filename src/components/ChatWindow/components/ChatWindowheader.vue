<script setup lang="ts">
import { ref } from 'vue';
import put from '@/assets/image/put.png'
import back from '@/assets/image/back.png'
import enlarge from '@/assets/image/enlarge.png'

function custom_close() {
  if (confirm("您确定要关闭本页吗？")) {
    window.opener = null;
    window.open('', '_self');
    window.close();
  }
  else { }
}

function miniWindow() {
  if (confirm("您确定要最小化本页吗？")) {
    document.body.style.display = 'none';
  }
 
  
}
// function restoreWindow() {
//   document.body.style.display = 'block';
// }
</script>
<template>
  <div class="top">
    <img :src="put" alt="" :style="{ width: '20px', height: '20px' }" class="img" @click="miniWindow()">
    <img :src="enlarge" alt="" :style="{ width: '20px', height: '20px' }" class="img">
    <img :src="back" alt="" :style="{ width: '20px', height: '20px' }" class="img" @click="custom_close()">
  </div>
</template>
<style scoped>
.top {
  display: flex;
  justify-content: flex-end;
  gap: 23px;
}

.img {
  float: right;
  margin-top: 8px;

}
</style>