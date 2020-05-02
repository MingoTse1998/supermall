<template>
  <div id="home-swiper">
    <Swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">  
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>  
    </Swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index.js'


export default {
  name: "HomeSwiper",
  components: {
    Swiper, 
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  }
 
}
</script>

<style>

</style>