<template>
    <b-container fluid class="main-container">
        <b-container class="content-container">
            <b-row class="row-container" align-h="center">
                <b-col class="column-main" cols="12">
                    <AppFichaCliente />
                    <hr>
                    <p>Ainda não possui conta? <nuxt-link to="/login"><a>Registe-se</a></nuxt-link></p>
                    <p>Voltar à <nuxt-link to="/"><a>Página Inicial</a>.</nuxt-link></p>
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
import AppFichaCliente from '@/components/AppFichaCliente/AppFichaCliente';
export default {
    components: {
        AppFichaCliente,
    }
}
</script>
