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
import Alert from '@/components/Alert/Alert'
export default {
  components:{
    TheHeader,
    TheFooter
  },
  data() {
    return {

    }
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
