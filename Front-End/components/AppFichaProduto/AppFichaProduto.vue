<template>
    <AppQuote>
        <h2>{{nome}}</h2>
        <p>{{preco}}€</p>
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
        }
    }
}
</script>
