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
                                        <input type="text" name="Username" class="form-control" id="Username" v-model="Cliente.Username"
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
                                        <input type="email" name="Email" class="form-control" id="Email" v-model="Cliente.Email"
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
                                        <input type="password" name="password" class="form-control" id="password" v-model="Cliente.Palavra_Passe"
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
                                            id="password-confirm" v-model="Cliente.Confirma_Palavra_Passe" placeholder="Password" required>
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
                                        <input type="text" name="name" class="form-control" id="Nome" v-model="Cliente.Nome"
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
                                        <input type="date" name="Data_de_nascimento" class="form-control" id="Data_de_nascimento" v-model="Cliente.Data_de_Nascimento"
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
                                        <input type="text" name="Morada" class="form-control" id="Morada" v-model="Cliente.Morada"
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
                                        <input type="text" name="Localidade" class="form-control" id="Localidade" v-model="Cliente.Localidade"
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
                                        <input type="text" name="Codigo_Postal" class="form-control" id="Codigo_Postal" v-model="Cliente.Codigo_Postal"
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
                                        <input type="text" name="Pais" class="form-control" id="Pais" v-model="Cliente.Pais"
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
                                        <input type="text" name="Contacto" class="form-control" id="Contacto" v-model="Cliente.Contacto"
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
            Cliente: {
                Nome: '',
                Username: '',
                Morada: '',
                Contacto: '',
                Email: '',
                Palavra_Passe: '',
                Confirma_Palavra_Passe: '',
                Data_de_Nascimento: '',
                Codigo_Postal: '',
                Localidade: '',
                Pais: '',
                Mensagem: '',
            }
        }
    },
    methods:{
        criarConta(){
            return axios.post('http://localhost:8081/signup', this.Cliente)
            .then(function(response){
            console.log(response.data);
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
