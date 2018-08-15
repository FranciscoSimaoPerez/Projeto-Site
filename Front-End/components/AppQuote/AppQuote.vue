<template>
    <div>
        <slot></slot>
    </div>
</template>

<style scoped>
div{
    background-color: #EEEEEE;
    margin: 10px;
    border: 2px solid gray;
    padding: 2rem;
    border-radius: 5px;
    width: 48%;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

 @media (max-width:1000px) {
        div{
            margin: 5px 20px 5px 20px;
            padding: 10px;
            width: 100%;
        }
    }
</style>

