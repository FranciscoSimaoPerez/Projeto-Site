<template>
    <div class="main-container">
        <div class="content-container">
            <div class="row-container">
                <div class="column-main">
                    <carousel :loop="true" :autoplay="true" :autoplayTimeout="4000" :autoplayHoverPause="true" :per-page="1">
                        <slide>
                          <a><img src="https://i.imgur.com/hEp6PV2.png"></a>
                        </slide>
                        <slide>
                          <img src="https://i.imgur.com/iQHScBT.png">
                        </slide>
                      </carousel>
                </div>
                <div class="column-sec">
                    Bye
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    components: {
    Carousel,
    Slide
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
      background-color: rgb(255, 255, 255);
      margin-top: 4.5rem;
      display: flex;
      
      align-items: center;
      flex-direction: column;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
    }
    @media (max-width: 568px){
    .content-container{
        width: 97%;
    }
}
    .row-container{
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      
    }
    .column-main{
      border: 2px solid rgb(207, 207, 207);
      border-radius: 2px;
      width: 65%;
      margin: 5px;
    }

    .column-sec{
      width: 35%;
      border: 2px solid rgb(207, 207, 207);
      border-radius: 2px;
      margin: 5px;
      margin-left: 0px;
    }
</style>
