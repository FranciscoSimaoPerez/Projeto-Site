<template>
    <b-container fluid class="main-container">
        <b-container class="content-container">
            <b-row align-h="center">
                <div>
                    <!-- <AppFichaProduto v-for="(anime, index) in animes"
                                         :key="index"
                                         :nome="anime.nome"
                                         :preco="+anime.preco"
                                         v-on:click.native="carregaCarrinho(anime)"
                                         style="cursor:pointer"/> -->
                </div>
            <!-- <b-nav-item-dropdown id="CarrinhoToggle" class="fa fa-shopping-cart" size="xl">
                        <div v-if="CarrinhoCompras==0">Carrinho Vazio!</div>
                        <b-dropdown-item v-else class="listaCarrinhoCompras">
                            <hr>
                            <h3>Carrinho de Compras</h3>
                            {{ultimaCompra | date }} - {{sum()}} €
                            <AppFichaProduto v-for="(anime,index) in CarrinhoCompras"
                                                :key="index"
                                                :nome="anime.nome"
                                                :preco="anime.preco"
                                                :quantidade="anime.quantidade"
                                                v-on:click.native="descarregaCarrinho(anime)"
                                                />
            </b-dropdown-item> 
            </b-nav-item-dropdown> -->
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
        CarrinhoCompras:[],
        ultimaCompra: false,
        animes:[]
      }
    },
    components:{
        AppFichaProduto
    },
    asyncData(){
        return axios.get('http://localhost:8081/anime')
            .then((res) => {
                console.log(res.data);
                return { animes: res.data }
            })
    },
    methods:{
            carregaCarrinho(anime){
                this.CarrinhoCompras.unshift({...anime, dataCompra: new Date()});
                this.ultimaCompra = this.CarrinhoCompras[0].dataCompra;
            },
            descarregaCarrinho(index){
                this.CarrinhoCompras.splice(index,1)
            },
            sum(){
            if (this.CarrinhoCompras < 1 ){
                return 0
            } else {
                return this.CarrinhoCompras.map( (a) => Math.floor(a.Preco))
                                            .reduce((a,b) => {return a + b})
            }
            }
    },
}
</script>

<style scoped>
   
    .content-container{
      background-color: rgb(250, 250, 250);
      margin-top: 4rem;
      margin-bottom: 4rem;
      
      }
   
    .column-main{
      border: 2px black;
      border-radius: 2px;
      padding: 0 20px 0 20px;  
      margin: 5px;
      margin-left: 20px;
    }

    @media (max-width:767px) {
        .column-main{
            border: none;
            margin:0;
        }
    }

    .column-sec{
      margin: 5px;
      margin-left: 0px;
      padding: 5px 20px 5px 20px;
    }
  
</style>