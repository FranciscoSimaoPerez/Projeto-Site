<template>
    <b-navbar id="header" toggleable="md" >

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand ><nuxt-link class="nav-item" to="/"><a>Akai Ito</a></nuxt-link></b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
                <b-nav-item><nuxt-link class="nav-item" to="/series"><a>Séries</a></nuxt-link></b-nav-item>
                <b-nav-item><nuxt-link class="nav-item" to="/store"><a>Loja</a></nuxt-link></b-nav-item>
                <b-nav-item><nuxt-link class="nav-item" to="/premium"><a>Premium</a></nuxt-link></b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Hentai, Mangas.."/>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Pesquisa</b-button>
                </b-nav-form>
                <b-nav-item-dropdown right id="Carrinho">
                    <a slot="button-content">
                    <em class="fa fa-shopping-cart"></em>
                    </a>
                                    <div class="listaCarrinhoCompras" v-if="CarrinhoCompras==0">Carrinho Vazio!</div>
                                    <b-dropdown-item right v-else class="listaCarrinhoCompras">
                                        
                                        <h3>Carrinho de Compras</h3>
                                        {{ ultimaCompra | date }} - {{sum()}} €
                                        <hr>
                                        <AppFichaProdutoCarrinho v-for="(anime,index) in CarrinhoCompras"
                                                            :key="index"
                                                            :nome="anime.nome"
                                                            :preco="anime.preco"
                                                            :quantidade="anime.quantidade"
                                                            v-on:click.native="descarregaCarrinho(anime)"
                                                            />
                                    </b-dropdown-item>
                </b-nav-item-dropdown>
                <div v-if="verificaLogin()[0]=='Admin'">
                <b-nav-item-dropdown right >
                    <a slot="button-content">
                    <em>Admin</em>
                    </a>
                    <nuxt-link class="button" to="/admin"><b-dropdown-item-button class="drop-button">Admin Menu</b-dropdown-item-button></nuxt-link>
                    <nuxt-link class="button" to="/profile"><b-dropdown-item-button class="drop-button">Profile</b-dropdown-item-button></nuxt-link>
                    <b-dropdown-item-button class="drop-button" v-on:click="logout()">Logout</b-dropdown-item-button>
                </b-nav-item-dropdown>
                </div>
                <div v-if="verificaLogin()[0]=='User'">
                <b-nav-item-dropdown right >
                    <a slot="button-content">
                    <em>User</em>
                    </a>
                    <nuxt-link class="button" to="/profile"><b-dropdown-item-button class="drop-button">Profile</b-dropdown-item-button></nuxt-link>
                    <b-dropdown-item-button class="drop-button" v-on:click="logout()">Logout</b-dropdown-item-button>
                </b-nav-item-dropdown>
                </div>
                <b-nav-item-dropdown right v-if="verificaLogin()==''">
                    <a slot="button-content">
                    <em>Conta</em>
                    </a>
                    <nuxt-link class="button" to="/login"><b-dropdown-item-button class="drop-button">Login</b-dropdown-item-button></nuxt-link>
                    <nuxt-link class="button" to="/signup"><b-dropdown-item-button class="drop-button">Registo</b-dropdown-item-button></nuxt-link>
                </b-nav-item-dropdown>
                <b-nav-item right>

                </b-nav-item>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
import axios from 'axios';
import AppFichaProdutoCarrinho from '@/components/AppFichaProdutoCarrinho/AppFichaProdutoCarrinho';

export default {
  name: "TheHeader",
  data(){
      return{
        CarrinhoComprasLocal:[],
        ultimaCompra: false,
        animes:[]
      }
    },
    components:{
        AppFichaProdutoCarrinho
    },
  created(){
        //this.$bus.$on('nome-do-evento', (data) => { this.anime = data})
        this.CarrinhoComprasLocal = this.$store.state.CarrinhoCompras
    },
    computed: {
        CarrinhoCompras(){
            return this.$store.getters.CarrinhoCompras
        }
    },
    methods:{
            // carregaCarrinho(anime){
            //     this.CarrinhoCompras.unshift({...anime, dataCompra: new Date()});
            //     this.ultimaCompra = this.CarrinhoCompras[0].dataCompra;
            //     //this.$bus.$emit('CARREGA_CARRINHO', anime)
            //     this.$store.commit('setCarrinho', this.CarrinhoCompras);
            // },
            descarregaCarrinho(index){
                this.CarrinhoCompras.splice(index,1)
            },
            sum(){
            if (this.CarrinhoCompras < 1 ){
                return 0
            } else {
                return this.CarrinhoCompras.map( (a) => Math.floor(a.preco))
                                            .reduce((a,b) => {return a + b})
            }
        },
    verificaLogin() {
      if (sessionStorage.getItem("tipouser") === null) {
        console.log(sessionStorage.getItem("tipouser"));
        return "";
      } else if (sessionStorage.getItem("tipouser") == "User") {
        var a = ["User", sessionStorage.getItem("tipouser")];
        return a;
      } else if (sessionStorage.getItem("tipouser") == "Admin") {
        var a = ["Admin", sessionStorage.getItem("tipouser")];
        return a;
      }
    },
    logout() {
      sessionStorage.clear();
      window.location.href = "/login";
    },
    // abrirCarrinho() {
    //   var x = document.getElementById("divCarrinho");
    //   if (x.style.display === "block") {
    //     x.style.display = "none";
    //     if ((document.onclick = function(e) {}));
    //     // } else {
    //     //     x.style.display =
    //     // }
    //   }
    // }
  }
};
</script>

<style scoped>
#header {
  background: rgb(240, 188, 67) !important;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
}
.nav-item {
  color: #ffffff;
  text-decoration: none;
  -webkit-transition: 0.5s all ease;
  -moz-transition: 0.5s all ease;
  transition: 0.5s all ease;
}
.nav-item:hover {
  color: #000000;
}

.drop-button{
    text-decoration: none;
    cursor: pointer;
}

.button {
    text-decoration: none;
}
.listaCarrinhoCompras{
    padding: 10px;
    text-align: center;
    background-color: #ffffff;
}
</style>

