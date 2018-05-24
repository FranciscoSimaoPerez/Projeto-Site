<template>
    <b-container fluid class="main-container">
        <b-container class="content-container">
            <b-row class="row-container" align-h="center">
                <b-col class="column-main" cols="12">
                    <form class="form-horizontal" role="form" method="POST" action="/signup">
                        <div class="row">
                            <div class="col-md-3"></div>
                            <div class="col-md-6">
                                <h2>Registo</h2>
                                <hr>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3 field-label-responsive">
                                <label for="name">Username</label>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-user"></i></div>
                                        <input type="text" name="username" class="form-control" id="name"
                                            placeholder="Username" required autofocus>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-control-feedback">
                                        <span class="text-danger align-middle">
                                            <!-- Put username validation error messages here -->
                                        </span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3 field-label-responsive">
                                <label for="name">Nome</label>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-user"></i></div>
                                        <input type="text" name="name" class="form-control" id="name"
                                            placeholder="Nome" required autofocus>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-control-feedback">
                                        <span class="text-danger align-middle">
                                            <!-- Put name validation error messages here -->
                                        </span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3 field-label-responsive">
                                <label for="email">E-Mail</label>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-at"></i></div>
                                        <input type="text" name="email" class="form-control" id="email"
                                            placeholder="you@exampl.com" required autofocus>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-control-feedback">
                                        <span class="text-danger align-middle">
                                            <!-- Put e-mail validation error messages here -->
                                        </span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3 field-label-responsive">
                                <label for="password">Palavra Passe</label>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group has-danger">
                                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-key"></i></div>
                                        <input type="password" name="password" class="form-control" id="password"
                                            placeholder="Password" required>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-control-feedback">
                                        <span class="text-danger align-middle">
                                            <i class="fa fa-close"> Example Error Message</i>
                                        </span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3 field-label-responsive">
                                <label for="password">Confirmar Palavra Passe</label>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                        <div class="input-group-addon" style="width: 2.6rem">
                                            <i class="fa fa-repeat"></i>
                                        </div>
                                        <input type="password" name="password-confirmation" class="form-control"
                                            id="password-confirm" placeholder="Password" required>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3"></div>
                            <div class="col-md-6">
                                <button type="submit" class="btn btn-warning btn-lg"><i class="fa fa-user-plus"></i> Registar</button>
                            </div>
                        </div>
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
            return axios.post('http://192.168.1.36:3000/addUser', this.obj);//addProduto ou addUser
        }
    }
}
</script>

<style scoped>
/* @import url(' https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css'); */
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
