<template>
    <b-container fluid class="main-container">
        <b-container class="content-container">
            <b-row class="row-container" align-h="center">
                <b-col class="column-main" cols="12">
                    <AppEditProduto v-for="(dado,index) in dados"
                                                :key="index"
                                                :idanime="dado.idanime"
                                                :nome="dado.nome"
                                                :editora="dado.editora"
                                                :autor="dado.autor"
                                                :preco="dado.preco"
                                                />
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
import axios from 'axios';
import AppEditProduto from '@/components/AppEditProduto/AppEditProduto';
export default {
    components: {
        AppEditProduto,
    },
    asyncData(){
        if((sessionStorage.getItem("iduser")===null) || (sessionStorage.getItem("iduser")===undefined)){
            window.location.href = '/login';                        
        } else {
        //if((sessionStorage.getItem("iduser")===;
        return axios.get('http://localhost:8081/anime/'+sessionStorage.getItem("idanime"))
            .then((res) => {
                console.log(res.data);
                return { dados: res.data }
            })
        }
    },
    methods:{
        
    }
}
</script>

<style>
   
    .content-container{
      background-color: rgb(250, 250, 250);
      margin-top: 4rem;
      margin-bottom: 4rem;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
      }
   
    .column-main{
      padding: 0 20px 0 20px;  
      margin: 5px;
      
    }

    @media (max-width:767px) {
        .column-main{
            margin:0;
            padding: 5px;
        }
    }
</style>
