<template>
  <main id="site-slider" class="site-slider outer">
      <div class="site-slider-carousell" v-if="header.showCover">
            <VueSlickCarousel v-bind="settings">
              <div
                  v-for="(post, index) in posts"
                  :key="index"
              >
                <a :href="$withBase(post.path)">
                  <img :src="$withBase(post.image)" height="300px" />
                  <small>{{ post.title }}</small>
                </a>
              </div>
            </VueSlickCarousel>
      </div>
  </main>
</template>

<script>
  import { mapGetters } from 'vuex'

  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    props: ["header"],
    components: {VueSlickCarousel},
    computed: mapGetters(['posts']),
    data() {
      return {
        settings: {
          "dots": false,
          "infinite": true,
          "speed": 300,
          "slidesToShow": 3,
          "slidesToScroll": 3,
          "initialSlide": 3,
          "swipeToSlide": true,
          "fade": false,
          "responsive": [
            {
              "breakpoint": 1024,
              "settings": {
                "slidesToShow": 3,
                "slidesToScroll": 3,
                "infinite": true,
                "dots": false
              }
            },
            {
              "breakpoint": 768,
              "settings": {
                "slidesToShow": 2,
                "slidesToScroll": 2,
                "initialSlide": 2
              }
            },
            {
              "breakpoint": 480,
              "settings": {
                "slidesToShow": 1,
                "slidesToScroll": 1
              }
            }
          ]
        }
      }
    },
  }
</script>

<style>
slide {
  position: relative;
  background: #42b983;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 100px;
}

.label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>