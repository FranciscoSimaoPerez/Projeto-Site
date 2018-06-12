import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
       state: {
           CarrinhoCompras: []
       },
       mutations: {
           setCarrinho(state, animes){
               state.CarrinhoCompras = animes;
               localStorage.setItem('CarrinhoCompras', JSON.stringify(state.CarrinhoCompras));
           },
       },
       actions: {},
       getters: {
           CarrinhoCompras(state) {
               return state.CarrinhoCompras//state.CarrinhoCompras
           }
       }
    })
}
export default createStore