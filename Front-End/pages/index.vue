<template>
    <b-container class="main-container">
        <b-container class="content-container">
            <b-row class="row-container">
                <b-col cols="8" class="column-main">
                    <div class="carousel">
                        <b-carousel id="carousel1"
                                    style="text-shadow: 1px 1px 2px #0d0d0d; font-size: 1rem;"
                                    controls
                                    indicators
                                    background="none"
                                    :interval="4000"
                                    img-width="1024"
                                    img-height="480"
                                    v-model="slide"
                                    @sliding-start="onSlideStart"
                                    @sliding-end="onSlideEnd"
                        >
                            <nuxt-link to="/lul"><a>
                                <b-carousel-slide
                                img-src="https://i.imgur.com/hEp6PV2.png">
                                    <h4>A Rainha da Provocação - KARAKAI JOZU NO TAKAGI-SAN</h4>
                                    <p>Ela não dá sossego pro Nishikata! Por mais que ele tente atazanar a Takagi, o tiro sempre sai pela culatra...</p>
                                </b-carousel-slide>
                            </a></nuxt-link>
                            <nuxt-link to="/lul"><a>
                                <b-carousel-slide 
                                img-src="https://i.imgur.com/iQHScBT.png">
                                    <h4>Começa a Luta pela Liberdade - HAKYU HOSHIN ENGI</h4>
                                    <p>Num país dominado pelo maligno Dakki, um aprendiz chamado Daikobo se levanta contra a opressão!</p>
                                </b-carousel-slide>
                            </a></nuxt-link>
                            <nuxt-link to="/lul"><a>
                                <b-carousel-slide 
                                img-src="https://i.imgur.com/cxuGOxT.png">
                                    <h4>BORUTO: NARUTO NEXT GENERATIONS</h4>
                                    <p>Volte ao mundo dos ninjas com as aventuras de Boruto, Sarada e a nova geração de ninjas!</p>
                                </b-carousel-slide>
                            </a></nuxt-link>
                        </b-carousel>
                        
                    </div>                     
                </b-col>
                <b-col class="column-sec">
                    <h6>Séries em destaque</h6>
                </b-col>
            </b-row>
        </b-container>
    </b-container>
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
   
    .content-container{
      background-color: rgb(255, 255, 255);
      margin-top: 4rem;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
    }
   
    .column-main{
      border-right: 1px solid rgb(207, 207, 207);
      padding: 0 20px 0 20px;  
      margin: 5px;
    }

    .column-sec{
      margin: 5px;
      margin-left: 0px;
      padding: 5px 20px 5px 20px;
    }
    .carousel{
        padding: 5px;
        border: none;
    }
</style>
