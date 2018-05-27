<template>
    <AppQuote>
        <h2>{{Produto}}</h2>
        <p>{{Valor}}</p>
    </AppQuote>
</template>

<script>
import AppQuote from '@/components/AppQuote/AppQuote';
export default {
    components:{
        AppQuote
    },
    props:{
        Produto:{
            type: String,
            required: true
        },
        Valor: {
            type: Number,
            required: true
        }
    }
}
</script>
