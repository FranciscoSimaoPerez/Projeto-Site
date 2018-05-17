<template>
    <div class="search-toggle" role="button" @click="$emit('toggle')">
        <nuxt-link to="/login" class="nav-button"><a><img class="search-icon" src="@/components/TheHeader/search.svg" alt="Pesquisa"></a><a>Pesquisa</a></nuxt-link>
    </div>
</template>

<style scoped>
    .search-toggle{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 25px;
        width: 25px;
        cursor: pointer;
    }
    @media (min-width: 768px){
    .search-toggle{
        display: none;
    }
}
</style>