<template>
    <b-container fluid class="main-container">
        <b-container class="content-container">
            <b-row class="row-container" align-h="center">
                <b-col class="column-main" cols="12">
                    <form class="form-horizontal" role="form" method="POST" @submit.prevent="fazerLogin">
                        <b-row class="row">
                            <b-col class="col-md-3"></b-col>
                            <b-col class="col-md-6">
                                <h2>Login</h2>
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
                            <b-col class="col-md-3"></b-col>
                            <b-col class="col-md-6">
                                <button type="submit" class="btn btn-warning btn-lg"><i class="fa fa-user-plus"></i>Login</button>
                            </b-col>
                        </b-row>
                    </form>
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
export default {
    data(){
        return{
             Cliente: {
                Username: '',
                Palavra_Passe: ''
            }
        }
    },
    methods:{
        fazerLogin(){
            return axios.post('http://localhost:8081/login', this.Cliente)
            .then(function(response){
                sessionStorage.setItem('ID_Cliente', response.data.ID_Cliente);
                var a=sessionStorage.getItem("ID_Cliente");
                window.location.href = '/profile?id='+a;
            })
        }
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
