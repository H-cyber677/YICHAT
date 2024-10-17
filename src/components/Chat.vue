<script setup lang="ts">
import SideMenu from './SildeMenu/SideMenu.vue';
import ChatList from './ChatList/ChatList.vue';
import ChatWindow from './ChatWindow/ChatWindow.vue';

</script>


<template>
  <div class="background">
    <div class="chat" :style="{ width: '1100px', height: '700px', backgroundColor: 'white' }">
      <SideMenu></SideMenu>
      <ChatList></ChatList>
      <ChatWindow></ChatWindow>
    </div>
  </div>
</template>



<style scoped>
.background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
}

.chat {
  transition: transform 1s;
  transform: translate(150px, 50px);
  box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.2);
  display: flex;
}
</style>