<template>
    <AppQuote>
        <p>{{Mensagem}}€</p>
    </AppQuote>
</template>

<script>
import AppQuote from '@/components/AppQuote/AppQuote';
export default {
    components:{
        AppQuote
    },
    props:{
        Mensagem:{
            type: String,
            required: true
        }
    }
}
</script>
