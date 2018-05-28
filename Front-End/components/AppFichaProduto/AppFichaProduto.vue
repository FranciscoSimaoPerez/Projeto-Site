<template>
    <AppQuote>
        <h2>{{Nome}}</h2>
        <p>{{Preco}}</p>
    </AppQuote>
</template>

<script>
import AppQuote from '@/components/AppQuote/AppQuote';
export default {
    components:{
        AppQuote
    },
    props:{
        Nome:{
            type: String,
            required: true
        },
        Preco: {
            type: Number,
            required: true
        }
    }
}
</script>
