<script setup lang="ts">
const { userInfor } = defineProps(['userInfor']);

</script>
<template>
    <div class="list" :style="{ width: '100%', height: '80px' }">
        <div class="avatar">头像
            {{ userInfor.icon }}
        </div>

        <div class="name" :style="{ width: '100px', height: '60px' }">
            {{ userInfor.name }}
            
        </div>
        <div class="time" :style="{ width: '80px', height: '40px' }">
            {{ userInfor.time }}
        </div>
        <div class="chat" :style="{ width: '30px', height: '50px' }">
            {{ userInfor.chat }}
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
    background-color: rgb(193, 193, 193);
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