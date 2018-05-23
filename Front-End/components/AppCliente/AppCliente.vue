<template>
    <app-quote>
        <h2>{{nome}}</h2>
        <p>{{password}}</p>
    </app-quote>
</template>

<script>
import appQuote from '@/components/AppQuote/AppQuote';
export default {
    components:{
        appQuote
    },
    props:{
        nome:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        }
    }
}
</script>

