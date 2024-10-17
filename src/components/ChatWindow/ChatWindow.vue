<script setup lang="ts">
import ChatInputBox from './components/ChatInputBox.vue';
import ChatWindowheader from './components/ChatWindowheader.vue';
import Content from './components/Content.vue';
</script>

<template>
  <div class="right" :style="{ width: '730px', height: '700px' }">
    <ChatWindowheader></ChatWindowheader>
    <hr class="underline">
    <Content></Content>
    <hr class="Underscore">
    <ChatInputBox></ChatInputBox>

  </div>

</template>
<style scoped>
.right {
  background-color: rgba(245, 245, 245);
  transition: transform 1s;
  transform: translate(370px, -1400px);
}

.underline {
  transition: transform 1s;
  transform: translate(20px, 55px);
  width: 730px;
  margin-left: -20px;
}

.Underscore {
  transition: transform 1s;
  transform: translate(20px, 460px);
  width: 730px;
  margin-left: -20px;
}
</style>