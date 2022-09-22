<template>
  <div>
    <div class="page">
      <div class="page-wrapper">
        <div class="header">
          <!-- 导航栏 -->

          <JKNavigator title="我的"></JKNavigator>
        </div>
        <div class="content">
          <!-- 背景色 -->
          <div class="page-bg"></div>

          <!-- 上面的个人信息内容 -->
          <div class="top-card">
            <div class="user-info-container">
              <div class="user-info-wrapper">
                <div class="user-img">
                  <img src="@/assets/img/profile-picture.png" width="100%" />
                </div>
                <div class="user-info-text-container">
                  <div class="top-name-container">李霸天</div>
                  <div class="bottom-fans-container">关注 0 | 粉丝 0</div>
                </div>
              </div>
            </div>
          </div>
          <div class="tool-button-container">
            <div class="tool-button-wrapper">
              <!-- 上半部分的分期 -->
              <div class="top-installments-container">
                <div class="top-installments-wrapper">
                  <div class="installments-info-container">
                    <div class="num-text-container"></div>
                    <div class="installments-text-container"></div>
                  </div>
                </div>
              </div>
              <!-- 下半部分的按钮 -->
              <div class="bottom-button-container">
                <div class="bottom-button-wrapper">
                  <div
                    class="tikcet-center-container"
                    @click="linkpage('ticketCenter')"
                  >
                    <div class="button-img-container">
                      <div class="button-img"></div>
                    </div>
                    <div class="button-text-container">优惠券</div>
                  </div>
                  <div
                    class="merchant-login-container"
                    @click="linkpage('usertelList')"
                  >
                    <div class="button-img-container">
                      <div class="button-img"></div>
                    </div>
                    <div class="button-text-container">用户列表</div>
                  </div>
                  <div
                    class="my-favorite-container"
                    @click="linkpage('collection')"
                  >
                    <div class="button-img-container">
                      <div class="button-img"></div>
                    </div>
                    <div class="button-text-container">我的收藏</div>
                  </div>
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
import NavBar from '@/components/navBar/NavBar';
import JKNavigator from '@/components/common/jk-navigator/JKNavigator.vue';
export default {
  name: 'Mine',
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
    linkpage(url) {
      this.$router.push(url);
    },
  },
};
</script>

<style scoped lang="scss">
// rem转换函数
@function pxToRem($px) {
  @return $px/75 + rem;
}

.page {
  box-sizing: border-box;
  position: relative;
  height: fit-content;
  width: 100vw;
  height: 100vh;
  background-color: rgba(grey, 0.1);

  //不加的话 iphone5会多出来一块
  overflow-x: hidden;
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
      // flex: 1;
      flex-direction: column;
      height: calc(1206 / 75) + rem;
      width: 100vw;

      padding-bottom: calc(96.5 / 75) + rem;

      // background-image: url('@/assets/img/company-profile.png');
      // background-repeat: no-repeat;
      // background-size: 100% 100%;
      // 设置背景
      .page-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #f5f5f5;
      }
      .top-card {
        box-sizing: border-box;
        position: relative;
        display: flex;
        width: 100vw;
        height: calc(340 / 75) + rem;
        background: #00985d;
        .user-info-container {
          position: relative;
          display: flex;
          width: 100%;
          margin-top: calc(100 / 75) + rem;

          .user-info-wrapper {
            position: relative;
            display: flex;
            width: 100%;
            height: calc(103.3 / 75) + rem;

            margin-left: calc(35.9 / 75) + rem;
            .user-img {
              position: relative;
              width: calc(103.3 / 75) + rem;
              height: calc(103.3 / 75) + rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .user-info-text-container {
              position: relative;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              width: calc(610.9 / 75) + rem;
              height: 100%;

              margin-left: calc(22 / 75) + rem;
              .top-name-container {
                font-size: calc(39 / 75) + rem;
                font-family: SourceHanSansCN;
                font-weight: 400;
                color: #ffffff;
              }
              .bottom-fans-container {
                font-size: calc(31 / 75) + rem;
                font-family: SourceHanSansCN;
                font-weight: 400;
                color: #ffffff;
              }
            }
          }
        }
      }
      .tool-button-container {
        box-sizing: border-box;
        position: absolute;
        display: flex;
        justify-content: center;
        top: 0;
        left: 0;

        margin-top: calc(262 / 75) + rem;
        width: 100vw;
        height: calc(328 / 75) + rem;
        .tool-button-wrapper {
          box-sizing: border-box;

          position: relative;
          display: flex;
          flex-direction: column;
          width: calc(679 / 75) + rem;
          height: 100%;

          background-color: #ffffff;
          box-shadow: 0px 0px calc(21 / 75) + rem 0px rgba(0, 0, 0, 0.05);
          border-radius: calc(20 / 75) + rem;
          .top-installments-container {
            position: relative;
            display: flex;
            height: calc(147 / 75) + rem;
            width: 100%;
            .top-installments-wrapper {
              position: relative;
              height: 100%;
              width: 100%;

              margin-left: calc(53 / 75) + rem;
              .installments-info-container {
                position: relative;
                display: flex;
                flex-direction: column;
                width: calc(102 / 75) + rem;
                height: 100%;
                .num-text-container {
                  position: relative;
                  display: flex;
                  justify-content: center;
                  font-size: calc(36 / 75) + rem;
                  font-family: SourceHanSansCN;
                  font-weight: 400;
                  color: #000000;

                  margin-top: calc(41 / 75) + rem;
                }
                .installments-text-container {
                  font-size: calc(26 / 75) + rem;
                  font-family: SourceHanSansCN;
                  font-weight: 400;
                  color: #747474;

                  white-space: nowrap;

                  margin-top: calc(19 / 75) + rem;
                }
              }
            }
          }
          .bottom-button-container {
            position: relative;
            display: flex;
            flex-direction: row;
            height: calc(181 / 75) + rem;
            width: 100%;
            .bottom-button-wrapper {
              position: relative;
              display: flex;
              flex-direction: row;
              height: 100%;
              width: 100%;
              margin-left: calc(58 / 75) + rem;
              .tikcet-center-container {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: fit-content;
                .button-img-container {
                  position: relative;
                  width: calc(103 / 75) + rem;
                  height: calc(103 / 75) + rem;
                  .button-img {
                    width: 100%;
                    height: 100%;

                    background-image: url(@/assets/img/ticket-center-img.png);
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                }
                .button-text-container {
                  margin-top: calc(9 / 75) + rem;
                  text-align: center;
                  font-size: calc(28 / 75) + rem;
                  font-family: SourceHanSansCN;
                  font-weight: 400;
                  color: #000000;
                  white-space: nowrap;
                }
              }
              .merchant-login-container {
                position: relative;
                margin-left: calc(111 / 75) + rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: fit-content;
                .button-img-container {
                  position: relative;
                  width: calc(103 / 75) + rem;
                  height: calc(103 / 75) + rem;
                  .button-img {
                    width: 100%;
                    height: 100%;

                    background-image: url(@/assets/img/merchant-login-img.png);
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                }
                .button-text-container {
                  margin-top: calc(9 / 75) + rem;
                  text-align: center;
                  font-size: calc(28 / 75) + rem;
                  font-family: SourceHanSansCN;
                  font-weight: 400;
                  color: #000000;
                  white-space: nowrap;
                }
              }
              .my-favorite-container {
                position: relative;
                margin-left: calc(117 / 75) + rem;

                display: flex;
                flex-direction: column;
                align-items: center;
                width: fit-content;
                .button-img-container {
                  position: relative;
                  width: calc(103 / 75) + rem;
                  height: calc(103 / 75) + rem;
                  .button-img {
                    width: 100%;
                    height: 100%;

                    background-image: url(@/assets/img/my-favorite-img.png);
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                }
                .button-text-container {
                  margin-top: calc(9 / 75) + rem;
                  text-align: center;
                  font-size: calc(28 / 75) + rem;
                  font-family: SourceHanSansCN;
                  font-weight: 400;
                  color: #000000;
                  white-space: nowrap;
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
