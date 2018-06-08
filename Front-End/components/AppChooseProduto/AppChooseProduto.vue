<template>
    <AppDados>
            <p>Nome: {{nome}}</p>
            <p>Autor: {{autor}}</p>
            <p>Editora: {{editora}}</p>
    </AppDados> 
</template>

<script>
import AppDados from '@/components/AppDados/AppDados';
export default {
    components:{
        AppDados
    },
    props:{
        nome:{
            type: String,
            required: true
        },
        autor: {
            type: String,
            required: true
        },
        editora: {
            type: String,
            required: true
        }
    }
}
</script>
<style scoped>
div{

    
    padding: 2rem;
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
