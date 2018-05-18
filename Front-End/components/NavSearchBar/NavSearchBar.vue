<template>
    <div class="nav-search">
        <input type="text" class="search-input" placeholder="Search.."/>
        <nuxt-link to="/search" class="search-button"><a><img class="search-icon" src="@/components/TheHeader/search.svg" alt="Pesquisar"></a></nuxt-link>
    </div>
</template>

<style scoped>
    .search-button{
        margin: 5px;
    }

    .search-input{
        border: 0px;
        background-color: rgba(0, 0, 0, 0);
    }
    

    @media (max-width: 768px){
        .nav-search{
            display: none;
        }
    }
</style>
