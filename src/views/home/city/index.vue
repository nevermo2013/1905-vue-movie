<template>
  <div class="city-main">
    <BaseLayer ref="baseLayer">
      <template v-slot:header>
        <div class="header">
          <input type="text" />
        </div>
      </template>
      <template v-slot:default>
        <div class="citys">
          <!-- 嵌套循环 -->
          <div class="city-block" v-for="(block,key) in cityData" :key="key">
            <p class="city-char city-title" :class="['city-title-'+key]">{{key}}</p>
            <ul class="city-list">
              <li v-for="city in block" :key="city.id">{{city.name}}</li>
            </ul>
          </div>
        </div>
      </template>
    </BaseLayer>
    <!-- 双向绑定 尽量不要直接操作dom元素   -->
    <ul class="nav-chars" v-swiper>
      <li v-for="char in navChars" :key="char">{{char}}</li>
    </ul>
    <span class="bg-char" v-if="bgChar">{{bgChar}}</span>
  </div>
</template>

<script>
import BaseLayer from "@/components/BaseLayer";
// vue天生支持 json数据的模块导入
import cityData from "./cityData.json";
export default {
  name: "City",
  components: {
    BaseLayer
  },

  data() {
    return {
      cityData,
      navChars: [], // 导航的字符集合
      bgChar:''
    };
  },
  created() {
    //初始化导航字母
    this.initChars();
  },
  methods: {
    initChars() {
      for (var i = 65; i <= 90; i++) {
        var char = String.fromCharCode(i);
        this.navChars.push(char);
      }
    }
  },
  directives: {
    swiper(el, binding, vnode) {
      // 在指令里 获取 当前vue 对象
      var vm = vnode.context;
      //等dom渲染完毕后触发
      vm.$nextTick(() => {
       
        //元素距离顶部的距离
        var baseTop = el.offsetTop;
        var baseHeight = el.offsetHeight;
        // console.log("baseTop", baseTop);
        // 指令可以获取dom元素 可以再指令里对dom进行处理
        //   console.log(el);
        el.ontouchstart = function(e) {
             // 执行滚动better-scroll 对象
          var scroll = vm.$refs.baseLayer.$scroll;
          var touch = e.touches[0];
          var startY = touch.clientY;
          // 如果用户按下去没动 那么结束点应该是等于开始点
          var endY = startY;
          el.ontouchmove = function(e) {
            var touch = e.touches[0];
            // 更新 endY
            endY = touch.clientY;
            var cha = endY - baseTop;
            //根据比例 获取 字母下标
            var index = Math.floor(cha/baseHeight*26);
            if(index< 0 ) index =0 ;
            if(index>25) index = 25;
            var char = vm.navChars[index];
            
            //调用滚到的方法
            var targetSel = '.city-title-'+char;
            var targetEl = document.querySelector(targetSel);
            if(targetEl){
                scroll.scrollToElement(targetSel, 400, 0, 0)
                vm.bgChar = char;
            }
            
          };

          el.ontouchend = function() {
            // 解除事件
            el.ontouchmove = null;
            // 获取松开后的值
            var char = vm.bgChar;
            
            vm.bgChar = '';
          };
        };
      });
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/common/common.scss";

.city-main {
  height: 100%;
  background-color: $baseBgColor;
  padding: 0 $basePadding;
  box-sizing: border-box;
  overflow: hidden;
  .citys {
    width: 100%;
    .city-block {
      color: #f7f7f7;
      font-size: 14px;
      text-align: left;
      line-height: 50px;
    }
  }
  .nav-chars {
    position: fixed;
    right: $basePadding;
    top: 100px;
    width: 30px;
    color: #828282;
    border: 1px solid red;
    li {
      line-height: 1.4;
    }
  }
  .bg-char {
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -50px;
    margin-top: -50px;
    display: block;
    width: 100px;
    height: 100px;
    background-color: rgba(255, 255, 255, 0.5);
    border: 2px solid #fff;
    color: #fff;
    font-size: 30px;
    text-align: center;
    line-height: 100px;
    border-radius: 10px;
  }
}
</style>
