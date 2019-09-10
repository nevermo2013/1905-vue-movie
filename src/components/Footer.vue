<template>
  <div class="footer-main">
    <div class="footer">
      <router-link class="footer-icon icon-home" :to="{name:'home'}"></router-link>
      <router-link class="footer-icon icon-movie" :to="{name:'movie'}"></router-link>
      <router-link class="footer-icon icon-ticket" :to="{name:'ticket'}"></router-link>
      <router-link class="footer-icon icon-cinema" :to="{name:'cinema'}"></router-link>
      <router-link class="footer-icon icon-main" :to="{name:'main'}"></router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',

  data () {
    return {
    }
  },

  methods: {}
}
</script>

<style lang='scss' scoped>
    .footer-main{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 104px;
        background: url('../assets/imgs/icons/icon-footer-bg.png') no-repeat center;
        background-size: 100%;
        .footer{
            display: flex;
            justify-content:space-around;
            align-items: center;
            width: 100%;
            height: 100%;
            overflow: hidden;
            .footer-icon{
                width: 72px;
                height: 72px;
               background-repeat: no-repeat;
               background-position: center;
               background-size: 48px 48px;
               margin-top: 36px;
               &.icon-home{
                   background-image: url('../assets/imgs/icons/icon-home.png');
               }
               &.icon-home.router-link-active{
                   background-image: url('../assets/imgs/icons/icon-home-active.png');
               }
               &.icon-movie{
                   background-image: url('../assets/imgs/icons/icon-movie.png');
               }
               &.icon-movie.router-link-active{
                   background-image: url('../assets/imgs/icons/icon-movie-active.png');
               }
               &.icon-ticket{
                   background-size: 72px 72px;
                   background-image: url('../assets/imgs/icons/icon-ticket.png');
                   margin-top: -16px;
               }
               &.icon-cinema{
                   background-image: url('../assets/imgs/icons/icon-cinema.png');
               }
               &.icon-cinema.router-link-active{
                   background-image: url('../assets/imgs/icons/icon-cinema-active.png');
               }
               &.icon-main{
                   background-image: url('../assets/imgs/icons/icon-main.png');
               }
               &.icon-main.router-link-active{
                   background-image: url('../assets/imgs/icons/icon-main-active.png');
               }
            }
        }
    }
</style>
