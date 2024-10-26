<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView></RouterView>
  <nav>
    <RouterLink to="/">登录页面</RouterLink>
    <RouterLink to="/about">聊天页面</RouterLink>
    <RouterLink to="/for">注册页面</RouterLink>
  </nav>
</template> 
<style scoped></style>
