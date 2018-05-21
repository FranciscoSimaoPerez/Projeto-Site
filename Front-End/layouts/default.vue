<template>
  <div>
    <the-header />
    <nuxt/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader'

export default {
  components:{
    TheHeader
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
  background-color: rgb(201, 201, 201);
}

.main-content {
  margin-top: 4.5rem;
}


</style>
