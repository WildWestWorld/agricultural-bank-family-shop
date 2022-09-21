<template>
  <div class="page-wrapper">
    <div class="header">
      <!-- 导航栏 -->
      <!-- <div class="total-nav-container">
              <div class="iphone-info-container"></div>
      
              <div class="nav-container">
                <div class="nav-wrapper">
                  <div class="nav-img-container">
                    <div class="nav-img"></div>
                  </div>
                  <div class="nav-text-container">公司简介</div>
                </div>
              </div>
            </div> -->
      <JKNavigator title="我要领券"></JKNavigator>
    </div>
    <div class="content">
      <div class="cash-back-bcg-container">
        <div class="cash-back-bcg"></div>
      </div>
      <div class="collect-ticket-info-container">
        <div class="collect-ticket-text-container">
          <div class="collect-ticket-text">刷家装卡</div>
          <div class="collect-ticket-text">享满千返百权益</div>
        </div>
        <div class="collect-ticket-button-container">
          <div class="collect-ticket-button-text-container">立即领取</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JKNavigator from '@/components/common/jk-navigator/JKNavigator.vue';

export default {
  name: 'companyProfile',
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

    flex: 1;

    // background-image: url('@/assets/img/company-profile.png');
    // background-repeat: no-repeat;
    // background-size: 100% 100%;
    .cash-back-bcg-container {
      position: relative;
      box-sizing: border-box;
      left: 0;
      top: 0;
      width: 100%;
      height: calc(809 / 75) + rem;
      .cash-back-bcg {
        position: relative;
        width: 100%;
        height: 100%;

        background-image: url('@/assets/img/cash-back-bcg.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
    }
    .collect-ticket-info-container {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;

      top: calc(-1 / 75) + rem;

      height: calc(397 / 75) + rem;
      width: 100%;
      background-color: #fd9346;
      .collect-ticket-text-container {
        position: relative;
        display: flex;
        flex-direction: column;
        color: #ffffff;
        font-size: calc(54 / 75) + rem;
        font-family: 'HYLingXinJ';
        .collect-ticket-text {
          text-align: center;
          height: 100%;
        }
      }
      .collect-ticket-button-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        height: calc(58 / 75) + rem;
        width: calc(234 / 75) + rem;
        background: #ffffff;
        // box-shadow: 0px 5px 20px 0px rgba(221, 114, 36, 0.7);
        border-radius: calc(29 / 75) + rem;

        margin-top: calc(64 / 75) + rem;
        .collect-ticket-button-text-container {
          font-size: calc(32 / 75) + rem;
          font-family: SourceHanSansCN;
          font-weight: 400;
          color: #fd9346;

          text-align: center;
        }
      }
    }
  }
}
</style>
