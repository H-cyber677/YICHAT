<script setup lang="ts">
import message from '@/assets/image/message.png'
import call from '@/assets/image/call.png'
import collection from '@/assets/image/collection.png'
import share from '@/assets/image/share.png'
import manage from '@/assets/image/manage.png'
</script>
<template>
  <div class="left" :style="{width:'70px',height:'700px',backgroundColor:'black'}">
        <div class="avatar" >头像</div>
          <img :src="message" alt="" :style="{width:'30px',height:'30px'}">
          <img :src="call" alt="" :style="{width:'30px',height:'30px'}">
          <img :src="collection" alt="" :style="{width:'30px',height:'30px'}">
          <img :src="share" alt="" :style="{width:'30px',height:'30px'}">
          <img :src="manage" alt="" :style="{width:'30px',height:'30px'}">
      </div>
</template>

<style scoped>
.left{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: -80px;
}
.avatar{
  width: 50px;
  height: 50px;
  /* background-image: url('./assets/image/avater.png'); */
  background-size: cover;
  background-position: center;
  border: 2px solid #ccc;
  /* border-radius: 50%; */
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>
