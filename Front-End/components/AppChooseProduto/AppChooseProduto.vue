<template>
    <AppDados>
        <div>
            <h2>Editar Produto</h2>
            <form  @submit.prevent="chooseProduto">
                <b-form-input v-model="selected" type="text" />
            <b-btn type="submit"  variant="primary" class="adc" >Editar</b-btn>
            <b-btn type="cancel"  v-on:click="cancel()"  variant="danger" class="adc" >Cancelar</b-btn>
            </form>
        </div>
    </AppDados>
</template>

<script>
import axios from 'axios';
import AppDados from '@/components/AppDados/AppDados';
export default {
    components:{
        AppDados
    },
    asyncData(){
        return axios.get('http://localhost:8081/anime')
            .then((res) => {
                console.log(res.data);
                return { dados: res.data }
            })
    },
    methods:{
        cancel(){
             window.location.href = '/admin'; 
        }
        
    }
}
</script>
<style scoped>
div{


    padding: 2rem;
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
