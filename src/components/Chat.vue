<script setup lang="ts">
import SideMenu from './SildeMenu/SideMenu.vue';
import ChatList from './ChatList/ChatList.vue';
import ChatWindow from './ChatWindow/ChatWindow.vue';

</script>


<template>
  <div class="background">
    <div class="chat" >
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
 width: 100%;
 height: 100%;
  box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.2);
  display: flex;
}
</style>