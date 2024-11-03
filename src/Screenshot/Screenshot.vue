<template>
  <div>
    <h1>截图功能示例</h1>
    <div ref="screenshotTarget" class="screenshot-target">
      <p>这是一个需要截图的内容区域。</p>
      <img src="https://via.placeholder.com/150" alt="示例图片">
    </div>
    <button @click="takeScreenshot">截图</button>
    <div v-if="screenshotUrl" class="screenshot-result">
      <h2>截图结果:</h2>
      <img :src="screenshotUrl" alt="截图">
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import html2canvas from 'html2canvas';

const screenshotTarget = ref(null);
const screenshotUrl = ref(null);

const takeScreenshot = async () => {
  if (screenshotTarget.value) {
    try {
      const canvas = await html2canvas(screenshotTarget.value);
      screenshotUrl.value = canvas.toDataURL('image/png');
    } catch (error) {
      console.error('截图失败:', error);
    }
  }
};
</script>

<style scoped>
.screenshot-target {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
}

.screenshot-result img {
  max-width: 100%;
  border: 1px solid #ccc;
}
</style>