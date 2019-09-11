<template>
  <div class="foo-main">
    <h2> 这是Foo.vue页面 </h2>
  </div>
</template>

<script>
export default {
  name: 'Foo.vue',

  data () {
    return {
    }
  },

  methods: {
      say(){
          alert('Hi nihao !');
      }
  }
}
</script>

<style lang='scss' scoped>
    .foo-main{
        position: fixed;
        left: 100px;
        top: 100px;
        background-color: red;
    }
</style>
