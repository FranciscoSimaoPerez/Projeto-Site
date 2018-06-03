<template>
  <div>
    <TheHeader />
            <div id="divProdutos">
                    <AppFichaProduto v-for="(anime, index) in animes"
                                         :key="index"
                                         :nome="anime.nome"
                                         :preco="+anime.preco"
                                         v-on:click.native="carregaCarrinho(anime)"
                                         style="cursor:pointer"/>
            </div>
            <div id="divCarrinho">
            <b-nav-item-dropdown id="Carrinho" class="fa fa-shopping-cart" size="xl">
                        <div v-if="CarrinhoCompras==0">Carrinho Vazio!</div>
                        <b-dropdown-item v-else class="listaCarrinhoCompras">
                            <hr>
                            <h3>Carrinho de Compras</h3>
                            {{ ultimaCompra | date }} - {{sum()}} €
                            <AppFichaProduto v-for="(anime,index) in CarrinhoCompras"
                                                :key="index"
                                                :nome="anime.nome"
                                                :preco="anime.preco"
                                                :quantidade="anime.quantidade"
                                                v-on:click.native="descarregaCarrinho(anime)"
                                                />
                        </b-dropdown-item>
            </b-nav-item-dropdown>
            </div>
    <nuxt/>
    <the-footer />
  </div>
</template>


<script>
import TheHeader from '@/components/TheHeader/TheHeader'
import TheFooter from '@/components/TheFooter/TheFooter'
import ShoppingCart from '@/components/ShoppingCart/ShoppingCart'
import Alert from '@/components/Alert/Alert'
import AppFichaProduto from '@/components/AppFichaProduto/AppFichaProduto';
import axios from 'axios';

export default {
  components:{
    TheHeader,
    TheFooter,
    AppFichaProduto,
    ShoppingCart
  },
  data(){
      return{
        CarrinhoCompras:[],
        ultimaCompra: false,
        animes:[]
      }
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

<style>
*{
  box-sizing: border-box;
}

body{
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  background-color: rgb(255, 255, 255);
}

.main-content {
  margin-top: 4.5rem;
}


</style>
