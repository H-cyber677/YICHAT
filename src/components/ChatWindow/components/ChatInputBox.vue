<script setup lang="ts">
import face from '@/assets/image/face.png'
import cut from '@/assets/image/cut.png'
import chat from '@/assets/image/chat.png'
import calling from '@/assets/image/calling.png'
import Video from '@/assets/image/Video.png'
import Screenshot from '@/Screenshot/Screenshot.vue'


</script>
<template>
    <div class="bottom">
        <div class="bottom-left">
        <img :src="face" alt="" :style="{width:'30px',height:'30px'}">
        <img :src="cut" alt="" :style="{width:'30px',height:'30px'}">
        <img :src="chat" alt="" :style="{width:'30px',height:'30px'}">
        </div>
        <div class="bottom-right">
          <img :src="calling" alt="" :style="{width:'30px',height:'30px'}">
          <img :src="Video" alt="" :style="{width:'30px',height:'30px'}">
        </div>
    </div>
</template>
<style scoped>
.bottom{
  transition: transform 1s;
  transform: translate(-110px,465px);
  display: flex;
  justify-content: space-around;
  gap: 200px;
  
}
.bottom-left{
  display: flex;
  gap: 40px;
}
.bottom-right{
  display: flex;
  float: right;
  gap: 40px;
  transition: transform 1s;
  transform: translate(180px,0px);
}
</style>