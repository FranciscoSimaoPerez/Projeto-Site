<template>
    <div class="drawer-toggle" role="button" @click="$emit('toggle')">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
</template>

<style scoped>
.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to,{
  transform: translateX(-100%);
}
.drawer-toggle{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 25px;
    width: 25px;
    cursor: pointer;
}

@media (min-width: 768px){
    .drawer-toggle{
        display: none;
    }
}

.drawer-toggle .bar{
    width: 90%;
    height: 2px;
    background-color: #35495e;
}

</style>