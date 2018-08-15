<template>
    <div>
        <slot></slot>
    </div>
</template>

<style scoped>
div{
    background-color: #EEEEEE;
    margin: 5px 1px 5px 1px;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 1rem;
    width: 100%;
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

