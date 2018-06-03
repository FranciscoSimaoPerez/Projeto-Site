<template>
    <AppDados>
        <h2>Profile</h2>
        <form @submit.prevent="update">
        <p>Username: <input  type="text" name="username" class="form-control" v-model="novo.username"
                    required autofocus></p>
        <p>Email: <input  type="text" name="email" class="form-control" v-model="novo.email"
                    required autofocus></p>
        <p>Palavra-passe: <input  type="password" name="palavra" class="form-control" v-model="novo.palavrapasse"
                    required autofocus></p>
        <p>Nome: <input  type="text" name="nome" class="form-control" v-model="novo.nome"
                    required autofocus></p>
        <p>Data de Nascimento: <input  type="text" name="datadenascimento" class="form-control" v-model="novo.datadenascimento"
                    required autofocus></p>
        <p>Morada: <input  type="text" name="morada" class="form-control" v-model="novo.morada"
                    required autofocus></p>
        <p>Localidade: <input  type="text" name="localidade" class="form-control" v-model="novo.localidade"
                    required autofocus></p>
        <p>Código Postal: <input  type="text" name="codigopostal" class="form-control" v-model="novo.codigopostal"
                    required autofocus></p>
        <p>Pais: <input  type="text" name="pais" class="form-control" v-model="novo.pais"
                    required autofocus></p>
        <p>Contacto: <input  type="text" name="contacto" class="form-control" v-model="novo.contacto"
                    required autofocus></p>
        <b-btn type="submit"  variant="primary" class="adc" >Editar</b-btn>
        </form>
    </AppDados>
</template>

<script>
import axios from 'axios';
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
    },
    data(){
        return{
            novo:{
                iduser:this.iduser,
                username: this.username,
                email: this.email,
                nome:this.nome,
                morada:this.morada,
                codigopostal:this.codigopostal,
                contacto:this.contacto,
                palavrapasse:this.palavrapasse,
                datadenascimento:this.datadenascimento,
                pais:this.pais,
                localidade:this.localidade,
                }
            }
    },
    methods:{
        update(){
        return axios.post("http://localhost:8081/updateuser", this.novo) 
        .then(function (response) {
        if(response.data=="SUCCESS"){
            alert("Dados Alterados com Sucesso!");
        }
        else{
            alert("Ocorreu um Erro!")
        }
    });
  }
        
    }
}
</script>

<style scoped>
div{
    background-color: white;

    padding: 3rem;
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
