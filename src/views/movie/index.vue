<template>
  <div class="movie-movie">
    <BaseLayer>
      <template v-slot:header>
        <h1 class="title">这是movie页面</h1>
      </template>

      <template v-slot:default>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </template>
    </BaseLayer>
  </div>
</template>

<script>
import BaseLayer from "@/components/BaseLayer";
export default {
  name: "Movie",
  components: {
    BaseLayer
  },
  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang='scss' scoped>
.movie-movie {
  height: 100%;
  .title{
    font-size: 20px;
    color: #fff;
  }

  .box{
    width: 100px;
    height: 100px;
    margin: 30px;
    background-color: green;
  }

}
</style>
