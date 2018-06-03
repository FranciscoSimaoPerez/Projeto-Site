<template>
    <AppDados>
        <div>
            <h2>Adicionar Produto</h2>
            <form  @submit.prevent="add">
            <p>Nome: <input  type="text" name="nome" class="form-control" v-model="novo.nome"
                        required autofocus></p>
            <p>Preco: <input  type="text" name="preco" class="form-control" v-model="novo.preco"
                        required autofocus></p>
            <p>Autor: <input  type="text" name="autor" class="form-control" v-model="novo.autor"
                        required autofocus></p>
            <p>Editora: <input  type="text" name="editora" class="form-control" v-model="novo.editora"
                        required autofocus></p>
            <b-form-group label="Tipo de Produto: ">
                <b-form-radio-group v-model="selected"
                                    :options="options"
                                    name="radioInline">
                </b-form-radio-group>
            </b-form-group>
            <b-btn type="submit"  variant="primary" class="adc" >Editar</b-btn>
            </form>
        </div>
    </AppDados>
</template>

<script>
import AppDados from '@/components/AppDados/AppDados';
export default {
    components:{
        AppDados
    },
    data(){
        return{
            novo:{
                nome: "",
                preco: "",
                autor: "",
                editora: "",
            },
            selected: 'Anime',
            options: [
                { text: 'Anime', value: 'Anime' },
                { text: 'Manga', value: 'Manga' }
            ]
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
