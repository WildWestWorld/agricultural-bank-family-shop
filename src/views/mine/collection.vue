<template>
  <div>
    <div class="page-bg"></div>
    <nav-bar :title="'我的收藏'" :leftArrow="false"></nav-bar>
    <tabListContentCard class="ContentList" />
  </div>
</template>

<script>
import NavBar from '@/components/navBar/NavBar';
import tabListContentCard from '@/components/index/tab-list/tabListContentCard.vue';
export default {
  name: "UsertelList",
  components: {
    NavBar,
    tabListContentCard
  },
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
    dialtel() {
      window.location.href = 'tel:1608794658'
    },
  },
};
</script>

<style scoped lang="scss">
.page-bg{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
.ContentList{
  position: relative;
  margin-top: 1.5rem;
}
</style>
