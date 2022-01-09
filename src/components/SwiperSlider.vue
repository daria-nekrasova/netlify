<template>
  <swiper ref="swiper" class="swiper" :options="swiperOption">
    <template v-for="(item, index) in items">
      <swiper-slide
        :key="index"
        class="image"
        :style="`background-image: url(${item.src})`"
      >
      </swiper-slide>
    </template>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev" @click="prev()"></div>
    <div class="swiper-button-next" slot="button-next" @click="next()"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

export default {
  name: "swiper-example-centered-auto",
  title: "Centered slides + Auto slides per view",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: { items: { type: Array, default: () => [] } },
  methods: {
    prev() {
      this.$refs.swiper.$swiper.slidePrev();
    },
    next() {
      this.$refs.swiper.$swiper.slideNext();
    },
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 5
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 5
          }
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  height: 300px;
  width: 100%;

  .col-wrapper {
    column-fill: auto;
    column-width: 150px;
    column-gap: 2rem;
    height: 100px;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 16px * 2;
    background-color: white;
    &.image {
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #2c2c2c;
  }
}

.swiper-slide {
  width: 60%;
}
.swiper-slide:nth-child(2n) {
  width: 40%;
}
.swiper-slide:nth-child(3n) {
  width: 20%;
}
</style>
