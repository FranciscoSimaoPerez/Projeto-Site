<template>
<div class="container">


    <div class="formulario">
                <form onsubmit="return alert" @submit.prevent="criarConta" class="form">
                                <div class="input-control" >
                                    <label for="">Username:</label>
                                    <input type="text" v-model="novoUser.username">
                                    <label for="">Email:</label>
                                    <input type="email" required v-model="novoUser.email">
                                    <label for="">Password:</label>
                                    <input type="password" v-model="novoUser.password">
                                    <label for="">Nome:</label>
                                    <input type="text" v-model="novoUser.nome">
                                    <label for="">Data de Nascimento:</label>
                                    <input type="text" v-model="novoUser.dataNascimento">
                                    <label for="">Morada:</label>
                                    <input type="text"  v-model="novoUser.morada">
                                    <label for="">Localidade:</label>
                                    <input type="text" v-model="novoUser.localidade">
                                    <label for="">Código Postal:</label>
                                    <input type="text" placeholder="____-___" v-model="novoUser.codigoPostal">
                                    <label for="">País:</label>
                                    <input type="text" v-model="novoUser.pais">
                                    <label for="">Número Telemovel:</label>
                                    <input type="text" placeholder="9________" v-model="novoUser.contato">
                                   
                                    
                                    
                                    <!-- <div id="genero" >
                                        <select v-model="novoUser.genero">
                                            <option value="1">masculino</option>
                                            <option value="2">feminino</option>
                                            <option value="3">other</option>
                                        </select>
                                    </div> -->
                                </div>
                                <button type="submit" class="button" >Enviar</button>
                </form>
            </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            novoUser:{
                
            }
        }
    },
    methods:{
        criarConta(){
            return axios.post('http://192.168.1.36:3000/addUser', this.novoUser);//addProduto ou addUser
        }
    }
}
</script>