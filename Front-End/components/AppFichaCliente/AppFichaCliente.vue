<template>
    <AppDados>
        <h2>Profile</h2>
        <p>Username: {{username}}</p>
        <p>Email: {{email}}</p>
        <p>Palavra-passe: {{palavrapasse}}</p>
        <p>Nome: {{nome}}</p>
        <p>Data de Nascimento: {{datadenascimento}}</p>
        <p>Morada: {{morada}}</p>
        <p>Localidade: {{localidade}}</p>
        <p>Código Postal: {{codigopostal}}</p>
        <p>Pais: {{pais}}</p>
        <p>Contacto: {{contacto}}</p>
        
    </AppDados>
</template>

<script>
import AppDados from '@/components/AppDados/AppDados';
export default {
    components:{
        AppDados
    },
    props:{
        iduser:{
            type: Number,
            required: true
        },
        username:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        palavrapasse:{
            type: String,
            required: true
        },
        nome:{
            type: String,
            required: true
        },
        datadenascimento:{
            type: String,
            required: true
        },
        morada:{
            type: String,
            required: true
        },
        localidade:{
            type: String,
            required: true
        },
        codigopostal:{
            type: String,
            required: true
        },
        pais:{
            type: String,
            required: true
        },
        contacto:{
            type: Number,
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
