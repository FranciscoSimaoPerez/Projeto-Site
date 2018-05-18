<template>
  <div class="main-container">
    <div class="content-container">
      <div class="row-container">  
        <app-quote>
          lul
        </app-quote>
        <app-quote>
          lul
        </app-quote>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
  .main-container{
    width:100%;
    display: flex;
    justify-content: center;
  }
  .content-container{
    width:70%;
    background-color: rgb(226, 226, 226);
    margin-top: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  }
  .row-container{
    display: flex;
    flex-flow: row nowrap;
    
  }
</style>
