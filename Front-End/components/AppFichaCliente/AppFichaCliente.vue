<template>
    <AppDados>
        <h2>Profile</h2>
        <p>Username: {{Username}}</p>
        <p>Email: {{Email}}</p>
        <p>Palavra-passe: {{PalavraPasse}}</p>
        <p>Nome: {{Nome}}</p>
        <p>Data de Nascimento: {{DataNascimento}}</p>
        <p>Morada: {{Morada}}</p>
        <p>Localidade: {{Localidade}}</p>
        <p>Código Postal: {{CodigoPostal}}</p>
        <p>Pais: {{Pais}}</p>
        <p>Contacto: {{Contacto}}</p>
        
    </AppDados>
</template>

<script>
import AppDados from '@/components/AppDados/AppDados';
export default {
    components:{
        AppDados
    },
    props:{
        ID_Cliente:{
            type: Number,
            required: true
        },
        Username:{
            type: String,
            required: true
        },
        Email:{
            type: String,
            required: true
        },
        PalavraPasse:{
            type: String,
            required: true
        },
        Nome:{
            type: String,
            required: true
        },
        DataNascimento:{
            type: Date,
            required: true
        },
        Morada:{
            type: String,
            required: true
        },
        Localidade:{
            type: String,
            required: true
        },
        CodigoPostal:{
            type: String,
            required: true
        },
        Pais:{
            type: String,
            required: true
        },
        Contacto:{
            type: String,
            required: true
        },
    }
}
</script>

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
</style>
