<template>
    <b-container fluid class="main-container">
        <b-container class="content-container">
            <b-row class="row-container title" align-h="center">
                <h1>Editar Produtos</h1>
            </b-row>
            <b-row class="row-container" align-h="center">
                <b-col class="column-main" cols="12">
                    <b-row class="title">
                        <h2>Animes</h2>
                    </b-row>
                    <b-row class="row">
                        <AppChooseProduto v-for="(anime,index) in animes"
                                                    :key="index"
                                                    :idanime="anime.idanime"
                                                    :nome="anime.nome"
                                                    :autor="anime.autor"
                                                    :editora="anime.editora"
                                                    v-on:click.native="chooseAnime(anime)"
                                                    style="cursor:pointer"/>
                    </b-row>
                    <b-row class="title">
                        <h2>Mangas</h2>
                    </b-row>
                    <b-row class="row">
                        <AppChooseProduto v-for="(manga,index) in mangas"
                                                    :key="index"
                                                    :idmanga="manga.idmanga"
                                                    :nome="manga.nome"
                                                    :autor="manga.autor"
                                                    :editora="manga.editora"
                                                    v-on:click.native="chooseManga(manga)"
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
        if((sessionStorage.getItem("iduser")===null) || (sessionStorage.getItem("iduser")===undefined) || (sessionStorage.getItem("tipouser")=="User")){
            window.location.href = '/login';                        
        } else {
        //if((sessionStorage.getItem("iduser")===;
        return axios.all([
            axios.get('http://localhost:8081/anime'),
                axios.get('http://localhost:8081/manga')
        ])
            .then(axios.spread((res1, res2)=>{
                return { animes: res1.data, mangas: res2.data }
            }))
        }
    },
    methods:{
            chooseAnime(anime){
                sessionStorage.setItem("idanime", anime.idanime);
                window.location.href = '/editanime'; 
            },
            chooseManga(manga){
                sessionStorage.setItem("idmanga", manga.idmanga);
                window.location.href = '/editmanga'; 
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