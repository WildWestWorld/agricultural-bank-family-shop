<template>
  <div class="page">
    <div class="page-wrapper">
      <div class="header">
        <!-- 导航栏 -->

        <JKNavigator title="农行家装商城"></JKNavigator>
      </div>
      <div class="content">
        <div class="decoration-type-container">
          <div class="decoration-type-wrapper">
            <!-- 家装公司 -->
            <div
              class="company-decoration-container"
              @click="navToPage('sortSection')"
            >
              <div class="left-type-info-container">
                <div class="left-type-info-wrapper">
                  <div class="type-img-container">
                    <div class="type-img"></div>
                  </div>
                  <div class="type-text-container">家装公司</div>
                </div>
              </div>
              <div class="right-band-container">
                <div class="top-band-img-container">
                  <div class="band-img-container">
                    <div class="band-img"></div>
                  </div>
                </div>

                <div class="bottom-band-img-container">
                  <div class="band-img-container">
                    <div class="band-img"></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 建筑商户 -->
            <div
              class="construct-merchant-container"
              @click="navToPage('sortSection')"
            >
              <div class="left-type-info-container">
                <div class="left-type-info-wrapper">
                  <div class="type-img-container">
                    <div class="type-img"></div>
                  </div>
                  <div class="type-text-container">建筑商户</div>
                </div>
              </div>
              <div class="right-band-container">
                <div class="top-band-img-container">
                  <div class="band-img-container">
                    <div class="band-img"></div>
                  </div>
                </div>

                <div class="bottom-band-img-container">
                  <div class="band-img-container">
                    <div class="band-img"></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 家居软装 -->
            <div
              class="home-decoration-container"
              @click="navToPage('sortSection')"
            >
              <div class="left-type-info-container">
                <div class="left-type-info-wrapper">
                  <div class="type-img-container">
                    <div class="type-img"></div>
                  </div>
                  <div class="type-text-container">家居软装</div>
                </div>
              </div>
              <div class="right-band-container">
                <div class="top-band-img-container">
                  <div class="band-img-container">
                    <div class="band-img"></div>
                  </div>
                </div>

                <div class="bottom-band-img-container">
                  <div class="band-img-container">
                    <div class="band-img"></div>
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
import JKNavigator from '@/components/common/jk-navigator/JKNavigator.vue';

export default {
  name: 'Sort',
  components: {
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
      flex-direction: column;
      height: calc(1206 / 75) + rem;
      width: 100vw;

      padding-bottom: calc(96.5 / 75) + rem;

      // background-image: url('@/assets/img/company-profile.png');
      // background-repeat: no-repeat;
      // background-size: 100% 100%;
      .decoration-type-container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        .decoration-type-wrapper {
          position: relative;
          display: flex;
          position: relative;
          display: flex;
          flex-direction: column;
          width: calc(712 / 75) + rem;
          height: 100%;
          .company-decoration-container {
            position: relative;
            display: flex;
            flex-direction: row;
            width: calc(712 / 75) + rem;
            height: calc(272 / 75) + rem;
            background: #ffffff;
            box-shadow: 0px calc(4 / 75) + rem calc(13 / 75) + rem 0px
              rgba(0, 0, 0, 0.16);
            border-radius: calc(35 / 75) + rem;
            margin-top: calc(39 / 75) + rem;
            .left-type-info-container {
              position: relative;
              display: flex;

              width: calc(206 / 75) + rem;
              height: 100%;
              .left-type-info-wrapper {
                position: relative;
                display: flex;
                flex-direction: column;
                width: calc(151 / 75) + rem;
                height: 100%;
                margin-left: calc(55 / 75) + rem;
                .type-img-container {
                  position: relative;
                  width: calc(151 / 75) + rem;
                  height: calc(140 / 75) + rem;
                  margin-top: calc(37 / 75) + rem;
                  .type-img {
                    height: 100%;
                    width: 100%;
                    background-image: url(@/assets/img/company-decoration-img.png);
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                }
                .type-text-container {
                  font-size: calc(36 / 75) + rem;
                  font-family: SourceHanSansCN;
                  font-weight: 400;
                  color: #000000;
                  margin-top: calc(23 / 75) + rem;
                }
              }
            }
            .right-band-container {
              position: relative;
              display: flex;
              flex-direction: column;
              height: 100%;
              width: calc(506 / 75) + rem;
              .top-band-img-container {
                position: relative;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                height: calc(128 / 75) + rem;
                width: 100%;
                .band-img-container {
                  position: relative;
                  width: calc(270 / 75) + rem;
                  height: calc(90 / 75) + rem;

                  .band-img {
                    height: 100%;
                    width: 100%;

                    background-image: url(@/assets/img/zhong-bo-logo.png);
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                }
                .top-right-img-container {
                  position: relative;
                  width: calc(209 / 75) + rem;
                  height: calc(76 / 75) + rem;

                  margin-top: calc(33 / 75) + rem;
                  margin-left: calc(38 / 75) + rem;

                  .band-img {
                    height: 100%;
                    width: 100%;

                    background-image: url(@/assets/img/dyrs.jpeg);
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                }
              }
              .bottom-band-img-container {
                position: relative;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                height: calc(128 / 75) + rem;
                width: 100%;
                .band-img-container {
                  position: relative;
                  width: calc(270 / 75) + rem;
                  height: calc(90 / 75) + rem;

                  .band-img {
                    height: 100%;
                    width: 100%;

                    background-image: url(@/assets/img/zhong-bo-logo.png);
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                }
                .top-right-img-container {
                  position: relative;
                  width: calc(209 / 75) + rem;
                  height: calc(76 / 75) + rem;

                  margin-top: calc(33 / 75) + rem;
                  margin-left: calc(38 / 75) + rem;

                  .band-img {
                    height: 100%;
                    width: 100%;

                    background-image: url(@/assets/img/dyrs.jpeg);
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                }
              }
            }
          }
          .construct-merchant-container {
            position: relative;
            display: flex;
            flex-direction: row;

            width: calc(712 / 75) + rem;
            height: calc(272 / 75) + rem;
            background: #ffffff;
            box-shadow: 0px calc(4 / 75) + rem calc(13 / 75) + rem 0px
              rgba(0, 0, 0, 0.16);
            border-radius: calc(35 / 75) + rem;
            margin-top: calc(64 / 75) + rem;
            .left-type-info-container {
              position: relative;
              display: flex;

              width: calc(206 / 75) + rem;
              height: 100%;
              .left-type-info-wrapper {
                position: relative;
                display: flex;
                flex-direction: column;
                width: calc(151 / 75) + rem;
                height: 100%;
                margin-left: calc(55 / 75) + rem;
                .type-img-container {
                  position: relative;
                  width: calc(151 / 75) + rem;
                  height: calc(140 / 75) + rem;
                  margin-top: calc(37 / 75) + rem;
                  .type-img {
                    height: 100%;
                    width: 100%;
                    background-image: url(@/assets/img/construct-merchant-img.png);
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                }
                .type-text-container {
                  font-size: calc(36 / 75) + rem;
                  font-family: SourceHanSansCN;
                  font-weight: 400;
                  color: #000000;
                  margin-top: calc(23 / 75) + rem;
                }
              }
            }
            .right-band-container {
              position: relative;
              display: flex;
              flex-direction: column;
              height: 100%;
              width: calc(506 / 75) + rem;
              .top-band-img-container {
                position: relative;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                height: calc(128 / 75) + rem;
                width: 100%;
                .band-img-container {
                  position: relative;
                  width: calc(270 / 75) + rem;
                  height: calc(90 / 75) + rem;

                  .band-img {
                    height: 100%;
                    width: 100%;

                    background-image: url(@/assets/img/zhong-bo-logo.png);
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                }
                .top-right-img-container {
                  position: relative;
                  width: calc(209 / 75) + rem;
                  height: calc(76 / 75) + rem;

                  margin-top: calc(33 / 75) + rem;
                  margin-left: calc(38 / 75) + rem;

                  .band-img {
                    height: 100%;
                    width: 100%;

                    background-image: url(@/assets/img/dyrs.jpeg);
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                }
              }
              .bottom-band-img-container {
                position: relative;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                height: calc(128 / 75) + rem;
                width: 100%;
                .band-img-container {
                  position: relative;
                  width: calc(270 / 75) + rem;
                  height: calc(90 / 75) + rem;

                  .band-img {
                    height: 100%;
                    width: 100%;

                    background-image: url(@/assets/img/zhong-bo-logo.png);
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                }
                .top-right-img-container {
                  position: relative;
                  width: calc(209 / 75) + rem;
                  height: calc(76 / 75) + rem;

                  margin-top: calc(33 / 75) + rem;
                  margin-left: calc(38 / 75) + rem;

                  .band-img {
                    height: 100%;
                    width: 100%;

                    background-image: url(@/assets/img/dyrs.jpeg);
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                }
              }
            }
          }

          .home-decoration-container {
            position: relative;
            display: flex;
            flex-direction: row;

            width: calc(712 / 75) + rem;
            height: calc(272 / 75) + rem;
            background: #ffffff;
            box-shadow: 0px calc(4 / 75) + rem calc(13 / 75) + rem 0px
              rgba(0, 0, 0, 0.16);
            border-radius: calc(35 / 75) + rem;
            margin-top: calc(72 / 75) + rem;
            .left-type-info-container {
              position: relative;
              display: flex;

              width: calc(206 / 75) + rem;
              height: 100%;
              .left-type-info-wrapper {
                position: relative;
                display: flex;
                flex-direction: column;
                width: calc(151 / 75) + rem;
                height: 100%;
                margin-left: calc(55 / 75) + rem;
                .type-img-container {
                  position: relative;
                  width: calc(151 / 75) + rem;
                  height: calc(140 / 75) + rem;
                  margin-top: calc(37 / 75) + rem;
                  .type-img {
                    height: 100%;
                    width: 100%;
                    background-image: url(@/assets/img/home-decoration-img.png);
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                }
                .type-text-container {
                  font-size: calc(36 / 75) + rem;
                  font-family: SourceHanSansCN;
                  font-weight: 400;
                  color: #000000;
                  margin-top: calc(23 / 75) + rem;
                }
              }
            }
            .right-band-container {
              position: relative;
              display: flex;
              flex-direction: column;
              height: 100%;
              width: calc(506 / 75) + rem;
              .top-band-img-container {
                position: relative;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                height: calc(128 / 75) + rem;
                width: 100%;
                .band-img-container {
                  position: relative;
                  width: calc(270 / 75) + rem;
                  height: calc(90 / 75) + rem;

                  .band-img {
                    height: 100%;
                    width: 100%;

                    background-image: url(@/assets/img/zhong-bo-logo.png);
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                }
                .top-right-img-container {
                  position: relative;
                  width: calc(209 / 75) + rem;
                  height: calc(76 / 75) + rem;

                  margin-top: calc(33 / 75) + rem;
                  margin-left: calc(38 / 75) + rem;

                  .band-img {
                    height: 100%;
                    width: 100%;

                    background-image: url(@/assets/img/dyrs.jpeg);
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                }
              }
              .bottom-band-img-container {
                position: relative;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                height: calc(128 / 75) + rem;
                width: 100%;
                .band-img-container {
                  position: relative;
                  width: calc(270 / 75) + rem;
                  height: calc(90 / 75) + rem;

                  .band-img {
                    height: 100%;
                    width: 100%;

                    background-image: url(@/assets/img/zhong-bo-logo.png);
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                }
                .top-right-img-container {
                  position: relative;
                  width: calc(209 / 75) + rem;
                  height: calc(76 / 75) + rem;

                  margin-top: calc(33 / 75) + rem;
                  margin-left: calc(38 / 75) + rem;

                  .band-img {
                    height: 100%;
                    width: 100%;

                    background-image: url(@/assets/img/dyrs.jpeg);
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
}
</style>
