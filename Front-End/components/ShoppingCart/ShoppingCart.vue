<template>
    <b-nav-item-dropdown id="CarrinhoToggle"  size="xl"><i class="fa fa-shopping-cart"></i>
                <b-dropdown-item v-if="carrinhoCompras==0">Carrinho Vazio!</b-dropdown-item>
                <b-dropdown-item v-else class="listaCarrinhoCompras">
                    <hr>
                    <h3>Carrinho de Compras</h3>
                    {{ultimaCompra | date }} - {{sum()}} €
                    <AppFichaProduto v-for="(artigo,index) in carrinhoCompras"
                                        :key="index"
                                        :Nome="anime.Nome"
                                        :Preco="anime.Preco"
                                        :Quantidade="anime.Quantidade"
                                        v-on:click.native="descarregaCarrinho(anime)"
                                        />
                </b-dropdown-item>
    </b-nav-item-dropdown>
</template>

<script>
export default {
    name: "ShoppingCart",
    data(){
      return{
        CarrinhoCompras:[],
        ultimaCompra: false
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
                return this.CarrinhoCompras.map( (a) => Math.floor(a.valor))
                                            .reduce((a,b) => {return a + b})
            }
            }
    },
}
</script>

