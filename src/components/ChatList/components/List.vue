<script setup lang="ts">
import { computed, defineProps, mergeProps } from 'vue';

const userInfor = defineProps(['userInfor']);
console.log(userInfor);
let loading =computed(()=>{
    return props['userINfor']
})


</script>
<template>
    <div class="list" :style="{ width: '100%', height: '60px' }">
        <div class="avatar">头像</div>
        <div class="name" :style="{ width: '100px', height: '40px' }">
            {{loading}}
        </div>
        <div class="time" :style="{ width: '80px', height: '20px' }">

        </div>
    </div>
</template>
<style scoped>
.list {
    background-color: rgb(226, 226, 226);
    transition: transformm 1s;
    transform: translateY(24px);
}

.list:hover {
    background-color: aqua;
}

.avatar {
    width: 60px;
    height: 60px;
    /* background-image: url('./assets/image/avater.png'); */
    background-size: cover;
    background-position: center;
    border: 2px solid rgb(226, 226, 226);
    ;
    /* border-radius: 50%; */
    overflow: hidden;
    /* box-shadow: 0 2px 4px rgba(0,0,0,0.1); */
}

.name {
    transition: transform 1s;
    transform: translate(70px, -50px);
    border: none;
    background-color: rgb(226, 226, 226);

}

.time {
    transition: transform 1s;
    transform: translate(220px, -80px);
    border: none;
    background-color: rgb(226, 226, 226);
}
</style>