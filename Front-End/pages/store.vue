<template>
    <b-container fluid class="main-container">
        <b-container class="content-container">
            <b-row align-h="center">
                <b-col class="column-main" cols="12">
                    <div class="app">
                        <AppFichaProduto Produto="Produto 1" valor="25"/>
                        <AppFichaProduto Produto="Produto 2" valor="64"/>
                        <AppFichaProduto Produto="Produto 3" valor="32"/>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
import AppFichaProduto from '@/components/AppFichaProduto/AppFichaProduto';
export default {
    components:{
        AppFichaProduto
    }
}
</script>

<style scoped>
   
    .content-container{
      background-color: rgb(250, 250, 250);
      margin-top: 4rem;
      margin-bottom: 4rem;
      
      }
   
    .column-main{
      border: 2px black;
      border-radius: 2px;
      padding: 0 20px 0 20px;  
      margin: 5px;
      margin-left: 20px;
    }

    @media (max-width:767px) {
        .column-main{
            border: none;
            margin:0;
        }
    }

    .column-sec{
      margin: 5px;
      margin-left: 0px;
      padding: 5px 20px 5px 20px;
    }
  
</style>