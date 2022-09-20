<template>
  <div class="page">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Layout',

  //变量区
  data() {
    return {
      test: '123',
    };
  },
  //生命周期区
  mounted() {
    // console.log(this.$store);
    // this.JKTest();
  },
  //方法区
  methods: {
    JKTest() {
      console.log('测试一下');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page {
  box-sizing: border-box;
  position: relative;
  height: fit-content;
  width: 100vw;
  height: 100vh;
  background-color: rgba(grey, 0.1);

  //不加的话 iphone5会多出来一块
  overflow-x: hidden;

  
}
</style>
