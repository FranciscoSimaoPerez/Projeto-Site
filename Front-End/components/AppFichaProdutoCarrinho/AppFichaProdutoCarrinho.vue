<template>
    <AppQuoteCarrinho>
        <h4>{{nome}}</h4>
        <p>Preço: {{preco}}€</p>
        <p></p>
    </AppQuoteCarrinho>
</template>

<script>
import AppQuoteCarrinho from '@/components/AppQuoteCarrinho/AppQuoteCarrinho';
export default {
    components:{
        AppQuoteCarrinho
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
