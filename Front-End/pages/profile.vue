<template>
    <b-container fluid class="main-container">
        <b-container class="content-container">
            <b-row class="row-container" align-h="center">
                <b-col class="column-main" cols="12">
                    <AppFichaCliente v-for="(dado,index) in dados"
                                                :key="index"
                                                :iduser="dado.iduser"
                                                :nome="dado.nome"
                                                :morada="dado.morada"
                                                :email="dado.email"
                                                :username="dado.username"
                                                :datadenascimento="dado.datadenascimento"
                                                :localidade="dado.localidade"
                                                :codigopostal="dado.codigopostal"
                                                :pais="dado.pais"
                                                :contacto="dado.contacto"
                                                :palavrapasse="dado.palavrapasse"
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
        if((sessionStorage.getItem("iduser")===null) || (sessionStorage.getItem("iduser")===undefined)){
            window.location.href = '/login';                        
        } else {
        //if((sessionStorage.getItem("iduser")===;
        return axios.get('http://localhost:8081/profile/'+sessionStorage.getItem("iduser"))
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
