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

 @media (max-width:767px) {
        div{
            margin: 5px 20px 5px 20px;
            padding: 10px;
            width: 100%;
        }
    }
</style>

