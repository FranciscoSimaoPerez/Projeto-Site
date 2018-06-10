import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
       state: {
           CarrinhoCompras: []
       },
       mutations: {
           setCarrinho(state, animes){
               state.CarrinhoCompras = animes
           },
       },
       actions: {},
       getters: {
           CarrinhoCompras(state) {
               return state.CarrinhoCompras
           }
       }
    })
}
export default createStore