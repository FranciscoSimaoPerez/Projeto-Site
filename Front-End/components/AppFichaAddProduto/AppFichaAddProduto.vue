<template>
    <AppDados>
        <div>
            <h2>Adicionar Produto</h2>
            <form  @submit.prevent="add">
            <p>Nome: <input  type="text" name="nome" class="form-control" v-model="novo.nome"
                        required autofocus></p>
            <p>Preço: <input  type="text" name="preco" class="form-control" v-model="novo.preco"
                        required autofocus></p>
            <p>Autor: <input  type="text" name="autor" class="form-control" v-model="novo.autor"
                        required autofocus></p>
            <p>Editora: <input  type="text" name="editora" class="form-control" v-model="novo.editora"
                        required autofocus></p>
            <br>
            <p>
            Tipo de Produto:
            <label><input type="radio" id="anime" name="tipo" value="Anime" v-model="novo.tipo"> Anime </label>
            <label><input type="radio" id="manga" name="tipo" value="Manga" v-model="novo.tipo"> Manga </label>
            </p>
            <b-btn type="submit"  variant="primary" class="adc" >Adicionar</b-btn>
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
        }
    },
    methods:{
        add(){
            if(novo.tipo == "Anime"){
                return axios.post("http://localhost:8081/addAnime", this.novo) 
                .then(function (response) {
                    if(response.data=="SUCCESS"){
                        alert("Anime adicionado com Sucesso!");
                    }
                    else{
                        alert("Ocorreu um Erro!");
                    }
                });
            }
        
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
