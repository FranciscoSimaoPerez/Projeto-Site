<template>
    <b-container fluid class="main-container">
        <b-container class="content-container">
            <b-row class="row-container" align-h="center">
                <b-col class="column-main" cols="12">
                    <form class="form-horizontal" role="form" method="POST" @submit.prevent="criarConta">
                        <b-row class="row">
                            <b-col class="col-md-3"></b-col>
                            <b-col class="col-md-6">
                                <h2>Registo</h2>
                                <hr>
                            </b-col>
                        </b-row>
                        <b-row class="row">
                            <b-col class="col-md-3 field-label-responsive">
                                <label for="name">Username</label>
                            </b-col>
                            <b-col class="col-md-6">
                                <div class="form-group">
                                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-user"></i></div>
                                        <input type="text" name="username" class="form-control" id="username" v-model="user.username"
                                            placeholder="Username" required autofocus>
                                    </div>
                                </div>
                            </b-col>
                            <b-col class="col-md-3">
                                <div class="form-control-feedback">
                                        <span class="text-danger align-middle">
                                            <!-- Put username validation error messages here -->
                                        </span>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="row">
                            <b-col class="col-md-3 field-label-responsive">
                                <label for="email">E-Mail</label>
                            </b-col>
                            <b-col class="col-md-6">
                                <div class="form-group">
                                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-at"></i></div>
                                        <input type="email" name="email" class="form-control" id="email" v-model="user.email"
                                            placeholder="you@exampl.com" required autofocus>
                                    </div>
                                </div>
                            </b-col>
                            <b-col class="col-md-3">
                                <div class="form-control-feedback">
                                        <span class="text-danger align-middle">
                                            <!-- Put e-mail validation error messages here -->
                                        </span>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="row">
                            <b-col class="col-md-3 field-label-responsive">
                                <label for="password">Palavra Passe</label>
                            </b-col>
                            <b-col class="col-md-6">
                                <div class="form-group has-danger">
                                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-key"></i></div>
                                        <input type="password" name="password" class="form-control" id="password" v-model="user.palavrapasse"
                                            placeholder="Password" required>
                                    </div>
                                </div>
                            </b-col>
                            <b-col class="col-md-3">
                                <div class="form-control-feedback">
                                        <span class="text-danger align-middle">
                                            <!-- <i class="fa fa-close"> Example Error Message</i> -->
                                        </span>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="row">
                            <b-col class="col-md-3 field-label-responsive">
                                <label for="password">Confirmar Palavra Passe</label>
                            </b-col>
                            <b-col class="col-md-6">
                                <div class="form-group">
                                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                        <div class="input-group-addon" style="width: 2.6rem">
                                            <i class="fa fa-repeat"></i>
                                        </div>
                                        <input type="password" name="password-confirmation" class="form-control" 
                                            id="passwordconfirm" v-model="user.confirmapalavrapasse" placeholder="Password" required>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="row">
                            <b-col class="col-md-3 field-label-responsive">
                                <label for="name">Nome</label>
                            </b-col>
                            <b-col class="col-md-6">
                                <div class="form-group">
                                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-user"></i></div>
                                        <input type="text" name="name" class="form-control" id="Nome" v-model="user.nome"
                                            placeholder="Nome" required autofocus>
                                    </div>
                                </div>
                            </b-col>
                            <b-col class="col-md-3">
                                <div class="form-control-feedback">
                                        <span class="text-danger align-middle">
                                            <!-- Put name validation error messages here -->
                                        </span>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="row">
                            <b-col class="col-md-3 field-label-responsive">
                                <label for="name">Data de Nascimento</label>
                            </b-col>
                            <b-col class="col-md-6">
                                <div class="form-group">
                                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-calendar"></i></div>
                                        <input type="date" name="datadenascimento" class="form-control" id="datadenascimento" v-model="user.datadenascimento"
                                            placeholder="dd/mm/aaaa" required autofocus>
                                    </div>
                                </div>
                            </b-col>
                            <b-col class="col-md-3">
                                <div class="form-control-feedback">
                                        <span class="text-danger align-middle">
                                            <!-- Put name validation error messages here -->
                                        </span>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="row">
                            <b-col class="col-md-3 field-label-responsive">
                                <label for="name">Morada</label>
                            </b-col>
                            <b-col class="col-md-6">
                                <div class="form-group">
                                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-road"></i></div>
                                        <input type="text" name="morada" class="form-control" id="morada" v-model="user.morada"
                                            placeholder="Rua, número de porta,.." required autofocus>
                                    </div>
                                </div>
                            </b-col>
                            <b-col class="col-md-3">
                                <div class="form-control-feedback">
                                        <span class="text-danger align-middle">
                                            <!-- Put name validation error messages here -->
                                        </span>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="row">
                            <b-col class="col-md-3 field-label-responsive">
                                <label for="name">Localidade</label>
                            </b-col>
                            <b-col class="col-md-6">
                                <div class="form-group">
                                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-location-arrow"></i></div>
                                        <input type="text" name="localidade" class="form-control" id="localidade" v-model="user.localidade"
                                            placeholder="Cidade/Município" required autofocus>
                                    </div>
                                </div>
                            </b-col>
                            <b-col class="col-md-3">
                                <div class="form-control-feedback">
                                        <span class="text-danger align-middle">
                                            <!-- Put name validation error messages here -->
                                        </span>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="row">
                            <b-col class="col-md-3 field-label-responsive">
                                <label for="name">Código Postal</label>
                            </b-col>
                            <b-col class="col-md-6">
                                <div class="form-group">
                                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-map-marker"></i></div>
                                        <input type="text" name="codigopostal" class="form-control" id="codigopostal" v-model="user.codigopostal"
                                            placeholder="0000-000" required autofocus>
                                    </div>
                                </div>
                            </b-col>
                            <b-col class="col-md-3">
                                <div class="form-control-feedback">
                                        <span class="text-danger align-middle">
                                            <!-- Put name validation error messages here -->
                                        </span>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="row">
                            <b-col class="col-md-3 field-label-responsive">
                                <label for="name">Pais</label>
                            </b-col>
                            <b-col class="col-md-6">
                                <div class="form-group">
                                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-globe"></i></div>
                                        <input type="text" name="pais" class="form-control" id="pais" v-model="user.pais"
                                            placeholder="Ex: Coreia do Norte,.." required autofocus>
                                    </div>
                                </div>
                            </b-col>
                            <b-col class="col-md-3">
                                <div class="form-control-feedback">
                                        <span class="text-danger align-middle">
                                            <!-- Put name validation error messages here -->
                                        </span>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="row">
                            <b-col class="col-md-3 field-label-responsive">
                                <label for="name">Contacto</label>
                            </b-col>
                            <b-col class="col-md-6">
                                <div class="form-group">
                                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-phone"></i></div>
                                        <input type="text" name="contacto" class="form-control" id="contacto" v-model="user.contacto"
                                            placeholder="Telefone/Telemóvel" required autofocus>
                                    </div>
                                </div>
                            </b-col>
                            <b-col class="col-md-3">
                                <div class="form-control-feedback">
                                        <span class="text-danger align-middle">
                                            <!-- Put name validation error messages here -->
                                        </span>
                                </div>
                            </b-col>
                        </b-row>
                       
                        <b-row class="row">
                            <b-col class="col-md-3"></b-col>
                            <b-col class="col-md-6">
                                <button type="submit" class="btn btn-warning btn-lg"><i class="fa fa-user-plus"></i> Registar</button>
                            </b-col>
                        </b-row>
                    </form>
                    <hr>
                    <p>Já possui conta? <nuxt-link to="/login"><a>Login</a></nuxt-link></p>
                    <p>Voltar à <nuxt-link to="/"><a>Página Inicial</a>.</nuxt-link></p>
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
import axios from 'axios'
import Alert from '@/components/Alert/Alert'
export default {
    components:{
        Alert: Alert
    },
    data(){
        return{
            user: {
                nome: '',
                username: '',
                morada: '',
                contacto: '',
                email: '',
                palavrapasse: '',
                confirmapalavrapasse: '',
                datadenascimento: '',
                codigopostal: '',
                localidade: '',
                pais: '',
                mensagem: '',
            }
        }
    },
    methods:{
            criarConta(){
                return axios.post('http://localhost:8081/signup', this.user)
                .then(function(response){
                console.log(response.data);
                if(response.data.mensagem==""){
                    alert("Utilizador criado!");
                    window.location.href = '/login';
                } else if(response.data.mensagem=="Este email já foi utilizado"){
                    alert("Este email já foi utilizado!");
                } else if(response.data.mensagem=="Este username já foi utilizado"){
                    alert("Este username já foi utilizado!");
                }
            })
        },
    }
}
</script>

<style scoped>
/* @import url(' https://maxcdn.bootstrapcdn.com/font-awesome/4.0.0/css/font-awesome.min.css'); */
@media(min-width: 768px) {
  .field-label-responsive {
    padding-top: .5rem;
    text-align: right;
  }
}

.content-container{
      background-color: rgb(250, 250, 250);
      margin-top: 4rem;
      margin-bottom: 4rem;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    }
   
    .column-main{
      padding: 20px;  
      margin: 5px;
    }
</style>
