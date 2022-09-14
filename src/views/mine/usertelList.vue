<template>
  <div>
    <div class="page-bg"></div>
    <nav-bar :title="'用户信息查询'" :leftArrow="false"></nav-bar>
    <div class="usertel-list">
      <div class="tellist-card">
        <div class="card-name">张三</div>
        <div class="card-tel">手机号码：1608794658</div>
        <div class="card-icon" @click="dialtel()"><img src="@/assets/img/installmentApplication.png" width="100%"></div>
      </div>
      <div class="tellist-card">
        <div class="card-name">张三</div>
        <div class="card-tel">手机号码：1608794658</div>
        <div class="card-icon" @click="dialtel()"><img src="@/assets/img/installmentApplication.png" width="100%"></div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/navBar/NavBar';
export default {
  name: "UsertelList",
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
.usertel-list{
  position: relative;
  margin-top: 1.5rem;
}
.tellist-card{
  position: relative;
  width: 85%;
  background: #ffffff;
  margin: .3rem auto;
  padding: .5rem 5%;
  line-height: 1.5;
  font-size: calc(30 / 75) + rem;
}
.card-icon{
  position: absolute;
  right: 5%;
  top: 15%;
  width: 15%;
}
</style>
