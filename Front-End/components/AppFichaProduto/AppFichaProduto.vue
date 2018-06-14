<template>
    <AppQuote>
        <h2>{{nome}}</h2>
        <p>Autor: {{autor}}</p>
        <p>Editora: {{editora}}</p>
        <p>Preço: {{preco}}€</p>
        <p></p>
    </AppQuote>
</template>

<script>
import AppQuote from '@/components/AppQuote/AppQuote';
export default {
    components:{
        AppQuote
    },
    props:{
        nome:{
            type: String,
            required: true
        },
        preco: {
            type: Number,
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
