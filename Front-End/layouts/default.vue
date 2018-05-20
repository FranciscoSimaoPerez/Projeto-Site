<template>
  <div>
    <the-header @sideNavToggle="displaySideNav = !displaySideNav" />
    <TheSideNav :show="displaySideNav" @close="displaySideNav=false"/>
    <nuxt/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader'
import TheSideNav from "@/components/TheSideNav/TheSideNav"

export default {
  components:{
    TheHeader,
    TheSideNav
  },
  data() {
    return {
      displaySideNav: false
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
