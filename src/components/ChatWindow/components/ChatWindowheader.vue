<script setup lang="ts">
import { ref } from 'vue';
const { userInfor } = defineProps(['userInfor']);




</script>
<template>
  <div class="top">
    <!-- 不要在syle里面写静态样式! -->
     <div class="avatar">头像
      {{ userInfor.icon }}
     </div>
     <div class="name" :style="{ width: '100px', height: '60px' }">
      {{ userInfor.name }}
     </div>
    
  </div>
</template>
<style scoped>
.top {
  display: flex;
  justify-content: flex-start;
  gap: 80px;
}

.avatar{
  width: 40px;
  height: 40px;
}

</style>