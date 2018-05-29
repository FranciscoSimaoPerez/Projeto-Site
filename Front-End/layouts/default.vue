<template>
  <div>
    <the-header />

    <nuxt/>
    <the-footer />
  </div>
</template>


<script>
import TheHeader from '@/components/TheHeader/TheHeader'
import TheFooter from '@/components/TheFooter/TheFooter'
import ShoppingCart from '@/components/ShoppingCart/ShoppingCart'
import Alert from '@/components/Alert/Alert'
import AppFichaProduto from '@/components/AppFichaProduto/AppFichaProduto';
export default {
  components:{
    TheHeader,
    TheFooter,
    AppFichaProduto,
    ShoppingCart
  },
  
  
}
</script>

<style>
*{
  box-sizing: border-box;
}

body{
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  background-color: rgb(255, 255, 255);
}

.main-content {
  margin-top: 4.5rem;
}


</style>
