<template>
  <div>
    <div class="page-bg"></div>
    <JKNavigator title="用户列表"></JKNavigator>
    <div class="usertel-list">
      <div class="tellist-card">
        <div class="card-name">XXX</div>
        <div class="card-tel">手机号：XXXXXXXXX</div>
        <div class="card-icon" @click="dialtel()">
          <img src="@/assets/img/iphone-icon-img.png" width="100%" />
        </div>
      </div>
      <div class="tellist-card">
        <div class="card-name">XXX</div>
        <div class="card-tel">手机号：XXXXXXXXX</div>
        <div class="card-icon" @click="dialtel()">
          <img src="@/assets/img/iphone-icon-img.png" width="100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/navBar/NavBar';
import JKNavigator from '@/components/common/jk-navigator/JKNavigator.vue';
export default {
  name: 'UsertelList',
  components: {
    NavBar,
    JKNavigator,
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
      window.location.href = 'tel:1608794658';
    },
  },
};
</script>

<style scoped lang="scss">
.page-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
.usertel-list {
  position: relative;
}
.tellist-card {
  position: relative;
  width: 85%;
  background: #ffffff;
  margin: 0.3rem auto;
  padding: 0.5rem 5%;
  line-height: 1.5;
  font-size: calc(30 / 75) + rem;

  font-family: SourceHanSansCN;
  font-weight: 500;
  color: #000000;

  border-radius: calc(20 / 75) + rem;
}
.card-icon {
  position: absolute;
  right: calc(44 / 75) + rem;
  top: calc(62 / 75) + rem;
  width: calc(59 / 75) + rem;
  height: calc(59 / 75) + rem;
}
</style>
