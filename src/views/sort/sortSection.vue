<template>
  <div class="page-wrapper">
    <div class="header">
      <!-- 导航栏 -->

      <JKNavigator title="分类板块"></JKNavigator>
    </div>
    <div class="content">
      <!-- 背景色 -->
      <div class="content-bgc"></div>

      <div class="content-img-container">
        <div class="zb-img-container" @click="navToPage('bandDetail')">
          <div class="zb-img"></div>
        </div>
        <div class="zb-img-container" @click="navToPage('bandDetail')">
          <div class="zb-img"></div>
        </div>
        <div class="zb-img-container" @click="navToPage('bandDetail')">
          <div class="zb-img"></div>
        </div>
        <div class="zb-img-container" @click="navToPage('bandDetail')">
          <div class="zb-img"></div>
        </div>

        <!-- <div class="second-img-container">
          <div class="second-img"></div>
        </div>
        <div class="third-img-container">
          <div class="third-img"></div>
        </div>
        <div class="fourth-img-container">
          <div class="fourth-img"></div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import JKNavigator from '@/components/common/jk-navigator/JKNavigator.vue';

export default {
  name: 'sortSection',
  components: {
    JKNavigator,
  },
  //变量区
  data() {
    return {};
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
    navToPage(path) {
      this.$router.push('/' + path);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-wrapper {
  box-sizing: border-box;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  //   这里写75 的原因是用的是蓝湖的原型图，现在除以37.5 是因为用的是墨刀的原型图
  //   padding-bottom: calc(96.5 / 75) + rem;
  //   margin-bottom: calc(96.5 / 75) + rem;

  //   头部
  .header {
    position: relative;
    width: 100vw;
    height: calc(128 / 75) + rem;
    // 导航栏
    .total-nav-container {
      position: relative;
      display: flex;
      flex-direction: column;
      //   justify-content: center;
      // height: calc(44 / 75) + rem;

      .iphone-info-container {
        position: relative;
        width: 100vw;
        height: calc(22 / 75) + rem;
        font-size: calc(18 / 75) + rem;
      }
      .nav-container {
        position: relative;
        width: 100vw;
        height: calc(107 / 75) + rem;

        display: flex;
        flex-direction: row;
        align-items: flex-end;
        .nav-wrapper {
          position: relative;
          width: 100vw;
          height: fit-content;
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: center;
          margin-bottom: calc(26 / 75) + rem;
          //   margin-left: calc(40.5 / 75) + rem;

          .nav-img-container {
            position: absolute;
            left: 0;
            top: 0;
            // margin-left: calc(20 / 37.5) + rem;
            height: calc(20 / 37.5) + rem;
            width: calc(20 / 37.5) + rem;
            margin-left: calc(41 / 75) + rem;
            // margin-right: calc(20 / 37.5) + rem;

            // margin-bottom: calc(27 / 75) + rem;

            .nav-img {
              background-image: url('@/assets/img/nav-left-arrow.png');
              background-repeat: no-repeat;
              background-size: 100% 100%;
              height: 100%;
              width: 100%;
            }
          }
          .nav-text-container {
            position: relative;
            display: flex;
            align-items: center;

            // margin-bottom: calc(27 / 75) + rem;
            font-size: calc(36 / 75) + rem;
            font-family: 'SourceHanSansCN-Medium';
            font-weight: 500;
            // font-size: 18px !important;
          }
        }
      }
    }
  }
  //内容
  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    height: calc(1206 / 75) + rem;
    width: 100vw;

    padding-bottom: calc(96.5 / 75) + rem;

    // background-image: url('@/assets/img/company-profile.png');
    // background-repeat: no-repeat;
    // background-size: 100% 100%;
    // 背景色
    .content-bgc {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: white;
    }

    .content-img-container {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      height: 100%;
      .zb-img-container {
        position: relative;
        width: calc(600 / 75) + rem;
        height: calc(200 / 75) + rem;
        // margin-left: calc(162 / 75) + rem;
        // margin-top: calc(99 / 75) + rem;

        .zb-img {
          height: 100%;
          width: 100%;
          background-image: url(@/assets/img/zhong-bo-logo.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
      }

      //   .second-img-container {
      //     width: calc(216 * 2 / 75) + rem;
      //     height: calc(100 * 2 / 75) + rem;
      //     margin-left: calc(162 / 75) + rem;
      //     margin-top: calc(96 / 75) + rem;

      //     .second-img {
      //       height: 100%;
      //       width: 100%;
      //       background-image: url(@/assets/img/jtl.jpg);
      //       background-repeat: no-repeat;
      //       background-size: 100% 100%;
      //     }
      //   }
      //   .third-img-container {
      //     width: calc(475 / 75) + rem;
      //     height: calc(231 / 75) + rem;
      //     margin-left: calc(138 / 75) + rem;
      //     margin-top: calc(114 / 75) + rem;

      //     .third-img {
      //       height: 100%;
      //       width: 100%;
      //       background-image: url(@/assets/img/jtl.jpg);
      //       background-repeat: no-repeat;
      //       background-size: 100% 100%;
      //     }
      //   }
      //   .fourth-img-container {
      //     width: calc(288 / 75) + rem;
      //     height: calc(208 / 75) + rem;
      //     margin-left: calc(240 / 75) + rem;
      //     margin-top: calc(99 / 75) + rem;

      //     .fourth-img {
      //       height: 100%;
      //       width: 100%;
      //       background-image: url(@/assets/img/jtl.jpg);
      //       background-repeat: no-repeat;
      //       background-size: 100% 100%;
      //     }
      //   }
    }
  }
}
</style>
