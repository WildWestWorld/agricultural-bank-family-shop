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
      <JKNavigator title="家装商圈活动"></JKNavigator>
    </div>
    <div class="content">
      <div class="shop-anniversary-container">
        <div class="shop-anniversary-wrapper">
          <!-- 周年庆标题 -->
          <div class="shop-anniversary-title-container">
            <div class="shop-anniversary-title">XX商场周年庆活动</div>
          </div>
          <!-- 周年庆信息 -->
          <div class="shop-anniversary-info-container">
            <div class="shop-anniversary-info-wrapper">
              <div class="top-info-img-container">
                <div class="top-info-img"></div>
              </div>
              <div class="bottom-entroll-button-container">
                <div class="bottom-entroll-img-container">
                  <div class="bottom-entroll-img"></div>
                </div>
              </div>
            </div>
          </div>
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
    height: calc(1332 / 75) + rem;
    width: 100vw;

    padding-bottom: calc(96.5 / 75) + rem;
    flex: 1;
    // background-image: url('@/assets/img/company-profile.png');
    // background-repeat: no-repeat;
    // background-size: 100% 100%;
    .shop-anniversary-container {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      .shop-anniversary-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background-color: #fdb60c;
        .shop-anniversary-title-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: calc(177 / 75) + rem;
          width: 100%;

          .shop-anniversary-title {
            height: fit-content;
            width: fit-content;
            font-size: calc(84 / 75) + rem;
            font-family: HappyZcool-2016;
            font-weight: 400;
            color: #ffffff;
            /* -webkit-text-stroke: calc(4/75)+rem #fdb50b; */
            /* text-stroke: calc(4/75)+rem #fdb50b; */

            /* text-shadow: 4px 4px 1px rgba(255,255,255,0.7); */
          }
        }
        .shop-anniversary-info-container {
          position: relative;
          display: flex;
          justify-content: center;
          height: calc(1155 / 75) + rem;
          /* height: 100%; */
          width: 100%;
          .shop-anniversary-info-wrapper {
            position: relative;
            display: flex;
            flex-direction: column;
            width: calc(635 / 75) + rem;
            height: 100%;
            background-color: white;
            .top-info-img-container {
              position: relative;
              height: calc(1000 / 75) + rem;
              margin-top: calc(39 / 75) + rem;
              .top-info-img {
                width: 100%;
                height: 100%;

                background-image: url('@/assets/img/shop-anniversary-info-img.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
              }
            }
            .bottom-entroll-button-container {
              position: relative;
              display: flex;
              height: calc(155 / 75) + rem;
              width: 100%;
              justify-content: center;
              .bottom-entroll-img-container {
                position: relative;
                width: calc(191 / 75) + rem;
                height: calc(59 / 75) + rem;

                margin-top: calc(33 / 75) + rem;
                .bottom-entroll-img {
                  height: 100%;
                  width: 100%;

                  background-image: url('@/assets/img/entroll-img.png');
                  background-repeat: no-repeat;
                  background-size: 100% 100%;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
