<template>
  <div class="home-main">
    <div class="header-bar"></div>
    <div class="banner">
      <swiper class="banner-swiper" :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="m in imgs" :key="m.id">
            <img class="banner-img" :src="m.url" alt="">
        </swiper-slide>
        <!-- Optional controls -->
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Home",
  components: {
    swiper,
    swiperSlide
  },
  data() {
      // 在vue的js中引入图片资源 应该使用require
    return {
        imgs:[
            {
                id: 1,
                url: require ('@/assets/imgs/home/banner1.png')
            },
            {
                id: 2,
                url: require ('@/assets/imgs/home/banner2.png')
            },
            {
                id: 3,
                 url: require ('@/assets/imgs/home/banner3.png')
            }
        ],
      swiperOption: {
        slidesPerView: 1.2,
        // spaceBetween: 30,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
        },
      }
    };
  },

  methods: {}
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/common/common.scss";
.home-main {
  .header-bar {
    width: 100%;
    height: 40px;
    background-color: $baseBgColor;
  }
  .banner {
    width: 100%;
    height: 145px;
    margin-top: 12px;
    .banner-swiper {
        width: 100%;
        height: 145px;
        .swiper-slide{
            transform: scale(0.8);
            transition: all ease .4s;
            .banner-img{
                width: 335px;
                height: 100%;
            }
            &.swiper-slide-active{
                transform: scale(1);
            }
        }
    }
    .swiper-pagination{
        position: static;
        margin: 8px auto;
        ::v-deep .swiper-pagination-bullet{
            width: 4px;
            height: 4px;
            background-color: #B2B2B2;
            border-radius: 2px;
            margin: 0 4px;
            transition: all ease .4s;
            &.swiper-pagination-bullet-active{
                width: 14px;
                height: 3px;
                background-color: #fff;
            }
        } 
    }
  }
}
</style>
