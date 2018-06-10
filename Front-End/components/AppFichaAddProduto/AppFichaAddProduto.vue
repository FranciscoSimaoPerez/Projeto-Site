<template>
    <AppDados>
        <div>
            <h2>Adicionar Produto</h2>
            <hr>
            <form  @submit.prevent="addProduto">
            <p>Nome: <input  type="text" name="nome" class="form-control" v-model="novo.nome"
                        required autofocus></p>
            <p>Preço: <input  type="text" name="preco" class="form-control" v-model="novo.preco"
                        required autofocus></p>
            <p>Autor: <input  type="text" name="autor" class="form-control" v-model="novo.autor"
                        required autofocus></p>
            <p>Editora: <input  type="text" name="editora" class="form-control" v-model="novo.editora"
                        required autofocus></p>
            <br>

            <b-form-group  label="Tipo de Produto:">
                <b-form-radio-group class="form-control"
                                    v-model="novo.tipo"
                                    :options="options"
                                    name="radioInline">
                </b-form-radio-group>
            </b-form-group>
            <b-btn type="submit"  variant="primary" class="adc" >Adicionar</b-btn>
            <b-btn type="cancel"  v-on:click="cancel()"  variant="danger" class="adc" >Cancelar</b-btn>
            </form>
        </div>
    </AppDados>
</template>

<script>
import axios from 'axios';
import AppDados from '@/components/AppDados/AppDados';
export default {
    components:{
        AppDados
    },
    data(){
        return{
            novo:{
                nome: "",
                preco: "",
                autor: "",
                editora: "",
                tipo: "",
            },
            options: [
                { text: 'Anime', value: 'Anime' },
                { text: 'Manga', value: 'Manga' },
            ]
        }
    },
    methods:{
        addProduto(){
            if(this.novo.tipo == "Anime"){
                return axios.post("http://localhost:8081/addAnime", this.novo) 
                .then(function (response) {
                    if(response.data=="SUCCESS"){
                        alert("Anime adicionado com Sucesso!");
                        window.location.href = '/addproduto'; 
                    }
                    else{
                        alert("Ocorreu um Erro!");
                    }
                });
            } else if(this.novo.tipo == "Manga"){
                return axios.post("http://localhost:8081/addManga", this.novo) 
                .then(function (response) {
                    if(response.data=="SUCCESS"){
                        alert("Manga adicionado com Sucesso!");
                        window.location.href = '/addproduto'; 
                    }
                    else{
                        alert("Ocorreu um Erro!");
                    }
                });
            } else {
                alert("Ocorreu um Erro!");
            } 
        
        },
        cancel(){
             window.location.href = '/admin'; 
        }
        
    }
}
</script>
<style scoped>
div{


    padding: 2rem;
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
