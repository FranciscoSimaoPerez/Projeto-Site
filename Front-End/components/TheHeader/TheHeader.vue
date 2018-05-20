<template>
    <header class="main-header">
        <nav class="main-nav">
            <TheSideNavToggle class="theSideNavToggle" @toggle="$emit('sideNavToggle')"/>
            <ul class="nav-links">
                <nuxt-link to="/" tag="li" class="nav-link"><a>Akai Ito</a></nuxt-link>
                <nuxt-link to="/series" tag="li" class="nav-link"><a>Séries</a></nuxt-link>
                <nuxt-link to="/loja" tag="li" class="nav-link"><a>Loja</a></nuxt-link>
                <nuxt-link to="/premium" tag="li" class="nav-link"><a>Premium</a></nuxt-link>
            </ul>
            <div class="nav-buttons">
                <div class="login-button">
                    <nuxt-link to="/login" class="nav-button"><a><img class="login-icon" src="@/components/TheHeader/block-white.svg" alt="Login"></a><a>Login</a></nuxt-link>
                </div>
                <div class="search-button">
                    <NavSearchToggle @toggle="$emit('searchToggle')"/> 
                </div>
                <NavSearchBar/>
            </div>
        </nav>
    </header>
</template>

<script>
    import Logo from "~/components/Logo.vue";
    import TheSideNavToggle from "@/components/TheSideNavToggle/TheSideNavToggle";
    import NavSearchToggle from "@/components/NavSearchToggle/NavSearchToggle";
    import NavSearchBar from "@/components/NavSearchBar/NavSearchBar";

    export default {
        name: "TheHeader",
        components: {
            Logo,
            TheSideNavToggle,
            NavSearchToggle,
            NavSearchBar
        },
    }

</script>

<style scoped>
    .main-header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: rgb(65, 65, 65);
        height: 4rem;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
    }

    .main-nav{
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }


    .theSideNavToggle{
        margin-left: 10px;
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

    @media (max-width: 568px){
    .nav-links{
        display: none;
    }
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
        color: rgb(253, 253, 253);
        transition: color .3s ease-out;
    }

    .nav-link a:hover,
    .nav-link a:active,
    .nav-link.nuxt-link-exact-active a {
        color: rgb(15, 179, 255);
    } 

    .nav-link.nuxt-link-exact-active {
        border-bottom: 3px solid rgb(15, 179, 255);
    }

    .nav-search{
        display: flex;
        flex-flow: row;
        height: 60%;
        width: auto;
        border: 3px solid rgb(15, 179, 255);
        border-radius: 3px;
        background-color: white;
        padding-left: 5px;
        padding-right: 1px;
        margin-left: 5px;
    }

    

</style>

<style>
.nav-buttons{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .nav-button {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column nowrap;
        margin: 0.1rem;
        padding: 0.3rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        font-size: 60%;
    }
    
    .nav-button a {
        display: block;
        text-decoration: none;
        color: white;
        transition: color .3s ease-out;
    }

    .nav-button a:hover,
    .nav-button a:active,
    .nav-button.nuxt-link-exact-active a {
        color: rgb(15, 179, 255);
    } 

    .search-icon{
        height: 100%;
        width: 25px;
        transition: .3s ease-out;
    }
    .search-icon:hover{
        cursor: pointer;
	    filter: invert(.35) sepia(2) saturate(5) hue-rotate(180deg);
    }

    .login-icon{
        height: 1.5rem;
    }

    .login-icon:hover{
        cursor: pointer;
	    filter: invert(.35) sepia(2) saturate(5) hue-rotate(180deg);
    }
</style>
