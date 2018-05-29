<template>
    <b-container fluid class="main-container">
        <b-container class="content-container">
            <b-row align-h="center">
                <b-col class="column-main" cols="12">
                    
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
import axios from 'axios';
import AppFichaProduto from '@/components/AppFichaProduto/AppFichaProduto';
export default {
    data(){
        
    },
    components:{
        AppFichaProduto
    },
    asyncData(){
        return axios.get('http://localhost:8081/listAnimes')
            .then((res) => {
                console.log(res.data);
                return { animes: res.data }
            })
    },
    
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