<template>
  <div>
    <TheHeader />
    <nuxt/>
    <the-footer />
  </div>
</template>


<script>
import TheHeader from '@/components/TheHeader/TheHeader';
import TheFooter from '@/components/TheFooter/TheFooter';
import AppFichaProduto from '@/components/AppFichaProduto/AppFichaProduto';

export default {
  components:{
    TheHeader,
    TheFooter,
    AppFichaProduto,
  }
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
