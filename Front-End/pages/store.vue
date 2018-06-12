<template>
    <b-container fluid class="main-container">
        <b-container class="content-container">
            <b-row class="row-container title" align-h="center">
                <h1>Loja</h1>
            </b-row>
            <b-row class="row-container">
                <b-col class="column-main" cols="12">
                    <b-row class="title">
                        <h2>Animes</h2>
                    </b-row>
                    <b-row class="row">
                        <AppFichaProduto v-for="(anime,index) in animes"
                                                    :key="index"
                                                    :idanime="anime.idanime"
                                                    :nome="anime.nome"
                                                    :preco="anime.preco"
                                                    :autor="anime.autor"
                                                    :editora="anime.editora"
                                                    v-on:click.native=" carregaCarrinho(anime)"
                                                    style="cursor:pointer"/>
                    </b-row>
                    <b-row class="title">
                        <h2>Mangas</h2>
                    </b-row>
                    <b-row class="row">
                        <AppFichaProduto v-for="(manga,index) in mangas"
                                                    :key="index"
                                                    :idmanga="manga.idmanga"
                                                    :nome="manga.nome"
                                                    :preco="manga.preco"
                                                    :autor="manga.autor"
                                                    :editora="manga.editora"
                                                    v-on:click.native="carregaCarrinho(manga)"
                                                    style="cursor:pointer"/>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
import axios from 'axios';
import AppFichaProduto from '@/components/AppFichaProduto/AppFichaProduto';

export default {
    data(){
      return{
        CarrinhoComprasLocal:[],
        ultimaCompra: false,
        animes:[]
      }
    },
    components:{
        AppFichaProduto
    },
    asyncData(){
        return axios.all([
            axios.get('http://localhost:8081/anime'),
                axios.get('http://localhost:8081/manga')
        ])
            .then(axios.spread((res1, res2)=>{
                return { animes: res1.data, mangas: res2.data }
            }))
    },
    created(){
        if (!!localStorage.getItem('CarrinhoCompras')){
            this.$store.commit('setCarrinho', JSON.parse(localStorage.getItem('CarrinhoCompras')));
        }
        //this.$bus.$on('nome-do-evento', (data) => { this.anime = data})
        //this.CarrinhoComprasLocal = this.$store.state.CarrinhoCompras
    },
    computed: {
        CarrinhoCompras(){
            // if (!!localStorage.getItem('CarrinhoCompras')){
            //     console.log(JSON.parse(localStorage.getItem('CarrinhoCompras')))
            //     return JSON.parse(localStorage.getItem('CarrinhoCompras'))
            // } else {
            //     return this.$store.getters.CarrinhoCompras
            // }
            return this.$store.getters.CarrinhoCompras
            
        }
    },
    methods:{
            carregaCarrinho(anime){
                this.CarrinhoCompras.unshift({...anime, dataCompra: new Date()});
                this.ultimaCompra = this.CarrinhoCompras[0].dataCompra;
                //this.$bus.$emit('CARREGA_CARRINHO', anime)
                this.$store.commit('setCarrinho', this.CarrinhoCompras);
            },
            // descarregaCarrinho(index){
            //     this.CarrinhoCompras.splice(index,1)
            // },
            sum(){
            if (this.CarrinhoCompras < 1 ){
                return 0
            } else {
                return this.CarrinhoCompras.map( (a) => Math.floor(a.preco))
                                            .reduce((a,b) => {return a + b})
            }
        }
    },
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
      width: 100%;
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