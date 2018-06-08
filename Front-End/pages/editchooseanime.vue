<template>
    <b-container fluid class="main-container">
        <b-container class="content-container">
            <b-row class="row-container" align-h="center">
                <b-col class="column-main" cols="12">
                    <b-row class="title">
                        <h2>Editar Animes</h2>
                    </b-row>
                    <b-row class="row">
                        <AppChooseProduto v-for="(anime,index) in animes"
                                                    :key="index"
                                                    :idanime="anime.idanime"
                                                    :nome="anime.nome"
                                                    :autor="anime.autor"
                                                    :editora="anime.editora"
                                                    v-on:click.native="choose(anime)"
                                                    style="cursor:pointer"/>
                    </b-row>
                    <b-row class="button">
                        <b-btn type="cancel"  v-on:click="cancel()"  variant="danger" class="adc" >Cancelar</b-btn>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
import axios from 'axios';
import AppChooseProduto from '@/components/AppChooseProduto/AppChooseProduto';
export default {
    components: {
        AppChooseProduto,
    },
    asyncData(){
        if((sessionStorage.getItem("iduser")===null) || (sessionStorage.getItem("iduser")===undefined) || (sessionStorage.getItem("iduser")=="User")){
            window.location.href = '/login';                        
        } else {
        //if((sessionStorage.getItem("iduser")===;
         return axios.get('http://localhost:8081/anime')
            .then((res) => {
                console.log(res.data);
                return { animes: res.data }
            })
        }
    },
    methods:{
            choose(anime){
                sessionStorage.setItem("idanime", anime.idanime);
                window.location.href = '/editanime'; 
            },   
            cancel(){
             window.location.href = '/admin'; 
        }
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

    .title {
        padding: 2rem;
    }
    .button {
        padding: 2rem;
    }
</style>