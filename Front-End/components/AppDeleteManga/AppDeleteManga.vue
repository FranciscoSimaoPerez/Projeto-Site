<template>
    <AppDados>
        <h2>Eliminar Manga</h2>
        <hr>
        <form @submit.prevent="deleteProduto">
        <p>Nome: {{nome}}</p>
        <p>Preço: {{preco}}</p>
        <p>Autor: {{autor}}</p>
        <p>Editora: {{editora}}</p>
        <b-btn type="submit"  variant="primary" class="adc" >Eliminar</b-btn>
        <b-btn type="cancel"  v-on:click="cancel()"  variant="danger" class="adc" >Cancelar</b-btn>
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
            del:{
                idmanga:this.idmanga,
                nome:this.nome,
                preco:this.preco,
                editora:this.editora,
                autor:this.autor
                }
            }
    },
    methods:{
        deleteProduto(){
        return axios.post("http://localhost:8081/deletemanga", this.del) 
            .then(function (response) {
                if(response.data=="SUCCESS"){
                    alert("Manga Eliminado com Sucesso!");
                    sessionStorage.removeItem('idmanga');
                    window.location.href = '/deletechoose';
                }
                else{
                    alert("Ocorreu um Erro!")
                }
            });
        },
        cancel(){
            sessionStorage.removeItem('idmanga');
            window.location.href = '/deletechoose'; 
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
</style>
