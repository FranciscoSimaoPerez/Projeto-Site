<template>
    <div>
        <slot></slot>
    </div>
</template>

<style scoped>
div{
    background-color: white;
    margin: 5px;
    border: 2px solid grey;
    padding: 3rem;
    width: 420px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>

