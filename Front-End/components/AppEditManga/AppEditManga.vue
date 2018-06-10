<template>
    <AppDados>
        <h2>Editar produto</h2>
        <hr>
        <form @submit.prevent="update">
        <!-- <p>Id: <input  type="text" name="idanime" class="form-control" v-model="edit.idanime"
                    required autofocus></p> -->
        <p>Nome: <input  type="text" name="nome" class="form-control" v-model="edit.nome"
                    required autofocus></p>
        <p>Preço: <input  type="text" name="preco" class="form-control" v-model="edit.preco"
                    required autofocus></p>
        <p>Autor: <input  type="text" name="autor" class="form-control" v-model="edit.autor"
                    required autofocus></p>
        <p>Editora: <input  type="text" name="editora" class="form-control" v-model="edit.editora"
                    required autofocus></p>
        <b-btn type="submit"  variant="primary" class="adc" >Editar</b-btn>
        <b-btn type="cancel"  v-on:click="cancel()"  variant="danger" class="cancel" >Cancelar</b-btn>
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
        idmanga:{
            type:Number,
            required: true
        },
        nome:{
            type: String,
            required: true
        },
        preco:{
            type: Number,
            required: true
        },
        autor:{
            type: String,
            required: true
        },
        editora:{
            type: String,
            required: true
        }
    },
    data(){
        return{
            edit:{
                idmanga:this.idmanga,
                nome:this.nome,
                preco:this.preco,
                editora:this.editora,
                autor:this.autor
                }
            }
    },
    methods:{
        update(){
        return axios.post("http://localhost:8081/updatemanga", this.edit) 
            .then(function (response) {
                if(response.data=="SUCCESS"){
                    alert("Dados Alterados com Sucesso!");
                     window.location.href = '/editchoose';
                }
                else{
                    alert("Ocorreu um Erro!")
                }
            });
        },
        cancel(){
            sessionStorage.removeItem('idmanga');
             window.location.href = '/editchoose'; 
        }
        
    }
}
</script>

<style scoped>
div{
    padding: 3rem;
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.cancel{
    margin-left: 5px;
}
</style>
