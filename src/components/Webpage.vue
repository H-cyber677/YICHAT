<script setup lang="ts">
import backgrounding from '@/assets/image/backgroundimg.png';
</script>


<template>
    <div class="page" :style="{backgroundImage:'url('+backgrounding+')'}">


    </div>


</template>


<style scoped>
.page{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
}


</style>