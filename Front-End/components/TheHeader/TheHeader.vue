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
                <div v:show="verificaLogin()[0]=='User'">
                <b-nav-item-dropdown right >
                    <a slot="button-content">
                    <em>User</em>
                    </a>
                    <b-dropdown-item><nuxt-link to="/profile">Profile</nuxt-link></b-dropdown-item>
                    <b-dropdown-item><button type="submit"  v-on:click="logout()" class="btn btn-lg">Logout</button></b-dropdown-item>
                </b-nav-item-dropdown>
                </div>
                <b-nav-item-dropdown right v:show="verificaLogin()==''">
                    <a slot="button-content">
                    <em>Conta</em>
                    </a>
                    <b-dropdown-item v:show="lo"><nuxt-link to="/login"><a>Login</a></nuxt-link></b-dropdown-item>
                    <b-dropdown-item><nuxt-link to="/signup"><a>Registo</a></nuxt-link></b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: "TheHeader",        
    methods:{
        verificaLogin(){
            if(sessionStorage.getItem("tipouser")===null){
                console.log(sessionStorage.getItem("tipouser"));
                return "";
            } else if(sessionStorage.getItem("tipouser")=="User") {
                var a = ["User", sessionStorage.getItem("tipouser")];
                return a;
            } else if(sessionStorage.getItem("tipouser")=="Admin") {
                return "Admin";
            }
        },
        logout(){
            sessionStorage.clear();
            window.location.href = '/login';
        }
    }
}
</script>

<style scoped>
    
    #header{
        background: rgb(240, 188, 67) !important;
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
    } 
    .nav-item {
        color: #ffffff;
        text-decoration: none;
        -webkit-transition: .5s all ease;
	    -moz-transition: .5s all ease;
	    transition: .5s all ease;
    }
    .nav-item:hover {
        color: #000000;
    }

</style>

