<template>
  <div>
    <div class="page-bg"></div>
    <nav-bar :title="'我 的'" :leftArrow="true"></nav-bar>
    <div class="top-card">
      <div class="user-info">
        <div class="user-img"><img src="@/assets/img/installmentApplication.png" width="100%"></div>
        <div class="user-name">李霸天</div>
      </div>
    </div>
    <div class="domain">
      <div class="domain-cont">
        <div class="domain-item">
          <img src="@/assets/img/installmentApplication.png" width="45%">
          <p>优惠券</p>
        </div>
        <div class="domain-item" @click="linkpage('usertellist')">
          <img src="@/assets/img/installmentApplication.png" width="45%">
          <p>用户信息查询</p>
        </div>
        <div class="domain-item" @click="linkpage('collection')">
          <img src="@/assets/img/installmentApplication.png" width="45%">
          <p>我的收藏</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/navBar/NavBar';
export default {
  name: "Mine",
  components: {
    NavBar
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
    linkpage(url) {
      this.$router.push(url)
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
.top-card{
  position: relative;
  margin-top: 46px;
  background: #00985d;
}
.user-info{
  padding: 0 5%;
}
.user-img{
  display: inline-block;
  width: 15%;
}
.user-name{
  display: inline-block;
  color: #ffffff;
  font-size: calc(36 / 75) + rem;
  padding: 1.5rem .2rem;
}
.domain{
  position: relative;
  background: #ffffff;
  width: 90%;
  margin: -.75rem auto 0;
  border-radius: 10px;
  padding: .5rem 0;
}
.domain-cont{
  text-align: center;
}
.domain-item{
  display: inline-block;
  width: 30%;
  margin: 0 1%;
  text-align: center;
  font-size: calc(30 / 75) + rem;
}
.domain-item p{
  margin-top: .2rem;
}
</style>
