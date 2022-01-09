<template>
  <div class="section" id="carousel">
    <div class="container">
      <div class="title">
        <h4 v-if="false">Carousel</h4>
      </div>
      <div class="row justify-content-center">
        <div class="col-8">
          <el-carousel :autoplay="false" height="500px">
            <el-carousel-item v-for="(item, index) in items" :key="index">
<!--          <img class="d-block" :src="item.src" :alt="`${index} slide`" style="height: 100%; margin: 0 auto;"/>-->
              <div class="carousel-image" :style="`background-image:url(${item.src})`"></div>
              <div class="carousel-caption d-none d-md-block">
                <h5 v-if="item.title.length>0">{{ item.title }}</h5>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, CarouselItem } from 'element-ui';

export default {
  props: {
    items: Array
  },
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem
  }
};
</script>
<style lang="scss" scoped>
.section {
  padding: 0 0;
    .carousel-image {
      width:  90%; /*or 70%, or what you want*/
      height: 500px; /*or 70%, or what you want*/
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
}
</style>
