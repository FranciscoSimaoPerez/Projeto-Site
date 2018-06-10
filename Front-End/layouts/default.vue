<template>
  <div>
    <TheHeader />
    <nuxt/>
    <the-footer />
  </div>
</template>


<script>
import TheHeader from '@/components/TheHeader/TheHeader';
import TheFooter from '@/components/TheFooter/TheFooter';
import AppFichaProduto from '@/components/AppFichaProduto/AppFichaProduto';
import axios from 'axios';

export default {
  components:{
    TheHeader,
    TheFooter,
    AppFichaProduto,
  },
  data(){
      return{
        CarrinhoCompras:[],
        ultimaCompra: false,
        animes:[]
      }
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
