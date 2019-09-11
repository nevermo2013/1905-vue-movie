<template>
  <div class="home-main">
    
    <BaseLayer>
      <!-- 头部 -->
      <template v-slot:header>
        <div class="header" @click="getFooSay()">
          <router-link :to="{name:'city'}">城市</router-link>
          <h1>Here might be a page title</h1>
        </div>
        

      </template>

      <!-- 内容 -->
      <template v-slot:default>
        <div class="banner">
          <swiper class="banner-swiper" :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="m in imgs" :key="m.id">
              <img class="banner-img" :src="m.url" alt />
            </swiper-slide>
            <!-- Optional controls -->
          </swiper>
          <div class="swiper-pagination" slot="pagination"></div>
        </div>

        <ul>
          <li class="li-1">li_1</li>
          <li class="li-2">li_2</li>
          <li class="li-3">li_3</li>
          <li class="li-4">li_4</li>
          <li class="li-5">li_5</li>
          <li class="li-6">li_6</li>
          <li class="li-7">li_7</li>
          <li class="li-8">li_8</li>
          <li class="li-9">li_9</li>
          <li class="li-10">li_10</li>
          <li class="li-11">li_11</li>
          <li class="li-12">li_12</li>
          <li class="li-13">li_13</li>
          <li class="li-14">li_14</li>
          <li class="li-15">li_15</li>
          <li class="li-16">li_16</li>
          <li class="li-17">li_17</li>
          <li class="li-18">li_18</li>
          <li class="li-19">li_19</li>
          <li class="li-20">li_20</li>
        </ul>
      </template>
    </BaseLayer>
    <!-- ref起名  -->
    <Foo ref="myFoo"></Foo>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import BaseLayer from "@/components/BaseLayer";
import Foo from '@/components/Foo'
export default {
  name: "Home",
  components: {
    swiper,
    swiperSlide,
    BaseLayer,
    Foo
  },
  data() {
    // 在vue的js中引入图片资源 应该使用require
    return {
      imgs: [
        {
          id: 1,
          url: require("@/assets/imgs/home/banner1.png")
        },
        {
          id: 2,
          url: require("@/assets/imgs/home/banner2.png")
        },
        {
          id: 3,
          url: require("@/assets/imgs/home/banner3.png")
        }
      ],
      swiperOption: {
        slidesPerView: 1.2,
        // spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  mounted() {},
  methods: {
    //被触发 调用到 Foo的方法
    // 1. 获取foo
    getFooSay(){
     var myFoo = this.$refs.myFoo ;
     myFoo.say();
     console.log(myFoo);
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/common/common.scss";
.home-main {
  height: 100%;
  .header{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    color: #fff;
    >a{
      color: #fff;
    }
  }
  li {
    line-height: 60px;
    color: #fff;
    font-size: 30px;
  }

  .banner {
    width: 100%;
    height: 145px;
    margin-top: 12px;
    .banner-swiper {
      width: 100%;
      height: 145px;
      .swiper-slide {
        transform: scale(0.8);
        transition: all ease 0.4s;
        .banner-img {
          width: 335px;
          height: 100%;
        }
        &.swiper-slide-active {
          transform: scale(1);
        }
      }
    }
    .swiper-pagination {
      position: static;
      margin: 8px auto;
      ::v-deep .swiper-pagination-bullet {
        width: 4px;
        height: 4px;
        background-color: #b2b2b2;
        border-radius: 2px;
        margin: 0 4px;
        transition: all ease 0.4s;
        &.swiper-pagination-bullet-active {
          width: 14px;
          height: 3px;
          background-color: #fff;
        }
      }
    }
  }
}
</style>
