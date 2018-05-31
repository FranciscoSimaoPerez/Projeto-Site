<template>
    <b-container fluid class="main-container">
        <b-container class="content-container">
            <b-row class="row-container" align-h="center">
                <b-col class="column-main" cols="12">
                    <AppFichaCliente v-for="(dado,index) in dados"
                                                :key="index"
                                                :IdCliente="dado.ID_Cliente"
                                                :Nome="dado.Nome"
                                                :Morada="dado.Morada"
                                                :Email="dado.Email"
                                                :Username="dado.Username"
                                                :DataNascimento="dado.Data_de_Nascimento"
                                                :Localidade="dado.Localidade"
                                                :CodigoPostal="dado.Codigo_Postal"
                                                :Pais="dado.Pais"
                                                :Contacto="dado.Contacto"
                                                :PalavraPasse="dado.Palavra_Passe"
                                                />
                    <hr>
                    <p>Ainda não possui conta? <nuxt-link to="/login"><a>Registe-se</a></nuxt-link></p>
                    <p>Voltar à <nuxt-link to="/"><a>Página Inicial</a>.</nuxt-link></p>
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
import axios from 'axios';
import AppFichaCliente from '@/components/AppFichaCliente/AppFichaCliente';
export default {
    components: {
        AppFichaCliente,
    },
    asyncData(){
        if(!(sessionStorage.getItem("")===null) || !(sessionStorage.getItem("")=="undefined")){
            window.location.href = '/login';                        
        } else {
        return axios.get('http://localhost:8081/profile/'+sessionStorage.getItem("ID_Cliente"))
            .then((res) => {
                console.log(res.data);
                return { dados: res.data }
            })
        }
    },
    methods:{
        
    }
}
</script>
