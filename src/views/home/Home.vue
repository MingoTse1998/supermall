<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners=banners></home-swiper>
    <home-recommend-view :recommends=recommends></home-recommend-view>
  </div>
</template> 

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView'
import {getHomeMultidata} from 'network/home.js'


export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.data.banner.list
      this.recommends = res.data.data.recommend.list    
    })
  }
}
</script>

<style>
  .home-nav {
    background-color: var(--color-high-text);
    color: white
  }
</style>