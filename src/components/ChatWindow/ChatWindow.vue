<script setup lang="ts">
import ChatInputBox from './components/ChatInputBox.vue';
import ChatWindowheader from './components/ChatWindowheader.vue';
import Content from './components/Content.vue';
import { ref } from 'vue';

const items = ref([{
  name: "xiaoming",
  icon: "xxx"
}]
)
 

</script>

<template>
  <div class="right" :style="{ width: '990px' }">
    <ChatWindowheader v-for="(item, index) in items" :userInfor="item" :key="index"></ChatWindowheader>
    <hr class="underline">
    <Content></Content>
    <hr class="Underscore">
    <ChatInputBox></ChatInputBox>

  </div>

</template>
<style scoped>
.right {
  height: 100%;
  background-color: rgba(245, 245, 245);
  /* transition: transform 1s;
  transform: translate(370px,-1400px); */
}

.underline {
  transition: transform 1s;
  transform: translate(20px, 67px);
  width: 990px;
  margin-left: -20px;
}

.Underscore {
  transition: transform 1s;
  transform: translate(20px, 460px);
  width: 990px;
  margin-left: -20px;
}
</style>