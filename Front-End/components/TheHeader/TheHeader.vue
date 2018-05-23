<template>
    <b-navbar id="header" toggleable="md" type="dark">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#">Akai Ito</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
            <b-nav-item href="#">Séries</b-nav-item>
            <b-nav-item href="#">Loja</b-nav-item>
            <b-nav-item href="#">Premium</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

            <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Hentai, Mangas.."/>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Pesquisa</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
                <!-- Using button-content slot -->
                <template slot="button-content">
                <em>Conta</em>
                </template>
                <b-dropdown-item href="#">Perfil</b-dropdown-item>
                <b-dropdown-item href="#">Terminar Sessão</b-dropdown-item>
            </b-nav-item-dropdown>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
   
    export default {
        name: "TheHeader",
        components: {
           
        },
    }

</script>

<style scoped>
    
    #header{
        background: rgb(240, 188, 67) !important;
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
    } 

</style>

