<template>
    <div class="main-container">
        <div class="content-container">
            <div class="row-container">
                <div class="column-main">
                    <div>
                        <b-carousel id="carousel1"
                                    style="text-shadow: 1px 1px 2px #333;"
                                    controls
                                    indicators
                                    background="#ababab"
                                    :interval="4000"
                                    img-width="1024"
                                    img-height="480"
                                    v-model="slide"
                                    @sliding-start="onSlideStart"
                                    @sliding-end="onSlideEnd"
                        >
                            <b-carousel-slide img-src="https://i.imgur.com/hEp6PV2.png">
                            </b-carousel-slide>
                            <b-carousel-slide img-src="https://i.imgur.com/iQHScBT.png">
                            </b-carousel-slide>
                        </b-carousel>
                        
                    </div>                     
                </div>
                <div class="column-sec">
                    Bye
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
        components: {
           
        },
        data () {
            return {
            slide: 0,
            sliding: null
            }
        },
        methods: {
            onSlideStart (slide) {
            this.sliding = true
            },
            onSlideEnd (slide) {
            this.sliding = false
            }
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
