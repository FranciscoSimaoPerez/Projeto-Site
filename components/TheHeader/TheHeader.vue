<template>
    <header class="main-header">
        <nav class="main-nav">
            <ul class="nav-links">
                <nuxt-link to="/" tag="li" class="nav-link"><a>Akai Ito</a></nuxt-link>
                <nuxt-link to="/series" tag="li" class="nav-link"><a>Séries</a></nuxt-link>
                <nuxt-link to="/loja" tag="li" class="nav-link"><a>Loja</a></nuxt-link>
                <nuxt-link to="/premium" tag="li" class="nav-link"><a>Premium</a></nuxt-link>
                <div class="nav-search">
                    <input type="text" class="search-input" placeholder="Search.."/>
                    <nuxt-link to="/search" class="search-button"><a><img class="search-icon" src="@/components/TheHeader/search.svg" alt="Pesquisar"></a></nuxt-link> 
                </div>
                
            </ul>
            <TheSideNavToggle @toggle="$emit('sideNavToggle')"/>
        </nav>
    </header>
</template>

<script>
    import Logo from "~/components/Logo.vue";
    import TheSideNavToggle from "@/components/TheSideNavToggle/TheSideNavToggle";

    export default {
        name: "TheHeader",
        components: {
            Logo,
            TheSideNavToggle
        },
    }

</script>

<style scoped>
    .main-header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: white;
        height: 4rem;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
    }

    .main-nav{
        height: 100%;
    }

    .nav-links{
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .nav-link{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.1rem;
        padding: 0.3rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }

    .nav-link a {
        display: block;
        text-decoration: none;
        color: black;
        transition: color .3s ease-out;
    }

    .nav-link a:hover,
    .nav-link a:active,
    .nav-link.nuxt-link-exact-active a {
        color: #006DF0;
    } 

    .nav-link.nuxt-link-exact-active {
        border-bottom: 2px solid #006DF0;
    }

    .nav-search{
        display: flex;
        flex-flow: row;
        height:60%;
        border: 1px solid rgb(160, 160, 160);
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
        background-color: white;
        padding-left: 5px;
        padding-right: 1px;
        margin-left: 5px;
    }
    .search-button{
        margin: 5px;
    }

    .search-input{
        border: 0px;
        background-color: rgba(0, 0, 0, 0);
    }
    .search-icon{
        height: 100%;
        width: 25px;
        transition: .3s ease-out;
    }
    .search-icon:hover{
        cursor: pointer;
	filter: invert(.25) sepia(2) saturate(5) hue-rotate(180deg);
}
    
</style>