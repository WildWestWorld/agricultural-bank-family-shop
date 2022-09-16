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
      <JKNavigator title="家装社区活动"></JKNavigator>
    </div>
    <div class="content">
      <div class="activity-container">
        <!-- 上面的活动时间地点容器 -->
        <div class="top-activity-info-container">
          <div class="top-activity-info-wrapper">
            <div class="activity-time-info-container">
              <div class="left-title-container">
                <div class="left-title-text">活动时间</div>
              </div>
              <div class="right-info-container">
                <div class="right-info-text">2022年06月01日-2022年06月15日</div>
              </div>
            </div>
            <div class="activity-position-info-container">
              <div class="left-title-container">
                <div class="left-title-text">活动地点</div>
              </div>
              <div class="right-info-container">
                <div class="right-info-text">xx小区物业大厅</div>
              </div>
            </div>
            <div class="activity-merchant-info-container">
              <div class="left-title-container">
                <div class="left-title-text">参与商户</div>
              </div>
              <div class="right-info-container">
                <div class="right-info-text">XX欧派橱柜门店</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 下面的活动内容容器 -->

        <div class="bottom-activity-content-container">
          <div class="bottom-activity-content-wrapper">
            <!--最上面的标题 -->
            <div class="top-title-text-container">
              <div class="top-title-text">
                农行携手欧派橱柜开展“农行-欧派家装团购会”，现场办
                理农行家装分期享六重好礼：
              </div>
            </div>
            <div class="middle-content-container">
              <div class="middle-content-wrapper">
                <div class="gift1-info-container">
                  <div class="left-index-img-container">
                    <div class="left-index-img"></div>
                  </div>
                  <div class="right-text-container">
                    <div class="right-text">
                      享农行家装分期5年期优惠费率13.5%
                    </div>
                  </div>
                </div>
                <div class="gift2-info-container">2</div>
                <div class="gift3-info-container">3</div>
                <div class="gift4-info-container">4</div>
                <!-- 5是特别的盒子 -->
                <div class="gift5-info-container">5</div>
                <div class="gift6-info-container">6</div>
              </div>
            </div>
            <!-- 最下面的活动按钮 -->
            <div class="bottom-entroll-button-container">
              <div class="bottom-entroll-button">
                <div class="bottom-entroll-button-text">活动报名</div>
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
  //   height: calc(100vh - (96.5px/75px));
  //   这里写75 的原因是用的是蓝湖的原型图，现在除以37.5 是因为用的是墨刀的原型图
  //   padding-bottom: calc(96.5 / 75) + rem;
  margin-bottom: calc(96.5 / 75) + rem;

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
    height: calc(1334 / 75) + rem;
    width: 100vw;
    align-items: center;
    justify-content: center;
    // margin-bottom: calc(96.5 / 75) + rem;

    background-color: #076f55;
    // background-image: url('@/assets/img/company-profile.png');
    // background-repeat: no-repeat;
    // background-size: 100% 100%;
    .activity-container {
      position: relative;
      display: flex;
      flex-direction: column;
      width: calc(683 / 75) + rem;
      height: calc(1212 / 75) + rem;

      background: #fefefe;
      border: 10px solid #feb177;
      border-width: calc(10 / 75) + rem;

      box-shadow: calc(12 / 75) + rem calc(12 / 75) + rem calc(18 / 75) + rem
        calc(1 / 75) + rem rgba(4, 34, 4, 0.48);

      border-radius: calc(17 / 75) + rem;
      .top-activity-info-container {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: calc(201 / 75) + rem;
        width: 100%;

        margin-bottom: calc(68 / 75) + rem;
        .top-activity-info-wrapper {
          position: relative;

          height: calc(180 / 75) + rem;
          width: calc(624 / 75) + rem;
          margin-top: calc(34 / 75) + rem;
          .activity-time-info-container {
            position: relative;
            display: flex;
            flex-direction: row;
            align-items: center;

            height: calc(60 / 75) + rem;
            .left-title-container {
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              width: calc(138.5 / 75) + rem;
              height: calc(33 / 75) + rem;
              background-color: #fb9831;
              border-radius: calc(17 / 75) + rem;

              .left-title-text {
                font-size: calc(25 / 75) + rem;
                font-family: 'SourceHanSansCN';
                font-weight: bold;
                color: #ffffff;
                white-space: nowrap;
              }
            }
            .right-info-container {
              position: relative;
              display: flex;
              align-items: center;
              width: 100%;
              margin-left: calc(18.1 / 75) + rem;
              .right-info-text {
                font-size: calc(23 / 75) + rem;
                font-family: 'SourceHanSansCN';
                font-weight: 500;
                color: #122167;
              }
            }
          }
          .activity-position-info-container {
            position: relative;
            display: flex;
            flex-direction: row;
            align-items: center;
            height: calc(60 / 75) + rem;
            border-top: 1px solid #e4e7ef;
            border-bottom: 1px solid #e4e7ef;

            border-top-width: calc(1 / 75) + rem;
            border-bottom-width: calc(1 / 75) + rem;

            .left-title-container {
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              width: calc(138.5 / 75) + rem;
              height: calc(33 / 75) + rem;
              background-color: #fb9831;
              border-radius: calc(17 / 75) + rem;

              .left-title-text {
                font-size: calc(25 / 75) + rem;
                font-family: 'SourceHanSansCN';
                font-weight: bold;
                color: #ffffff;
                white-space: nowrap;
              }
            }
            .right-info-container {
              position: relative;
              display: flex;
              align-items: center;
              width: 100%;
              margin-left: calc(18.1 / 75) + rem;

              .right-info-text {
                font-size: calc(23 / 75) + rem;
                font-family: 'SourceHanSansCN';
                font-weight: 500;
                color: #122167;
              }
            }
          }
          .activity-merchant-info-container {
            position: relative;
            display: flex;
            flex-direction: row;
            align-items: center;
            height: calc(60 / 75) + rem;

            .left-title-container {
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              width: calc(138.5 / 75) + rem;
              height: calc(33 / 75) + rem;
              background-color: #fb9831;
              border-radius: calc(17 / 75) + rem;

              .left-title-text {
                font-size: calc(25 / 75) + rem;
                font-family: 'SourceHanSansCN';
                font-weight: bold;
                color: #ffffff;
                white-space: nowrap;
              }
            }
            .right-info-container {
              position: relative;
              display: flex;
              align-items: center;
              width: 100%;
              margin-left: calc(18.1 / 75) + rem;

              .right-info-text {
                font-size: calc(23 / 75) + rem;
                font-family: 'SourceHanSansCN';
                font-weight: 500;
                color: #122167;
              }
            }
          }
        }
      }
      //   下半部分容器 活动内容
      .bottom-activity-content-container {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 100%;
        width: 100%;
        .bottom-activity-content-wrapper {
          position: relative;
          height: calc(845 / 75) + rem;
          width: calc(624 / 75) + rem;

          border: 3px solid #fb9831;
          border-width: calc(3 / 75) + rem;
          border-radius: calc(20 / 75) + rem;
          .top-title-text-container {
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: center;
            height: calc(120 / 75) + rem;

            .top-title-text {
              height: calc(65 / 75) + rem;
              width: calc(583 / 75) + rem;
              font-size: calc(23 / 75) + rem;
              font-family: 'SourceHanSansCN';
              font-weight: 500;
              color: #122167;
              //   可能需要修改
              line-height: calc(35 / 75) + rem;

              margin-top: calc(55 / 75) + rem;
            }
          }
          .middle-content-container {
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: center;
            height: calc(642.9 / 75) + rem;
            width: 100%;
            .middle-content-wrapper {
              position: relative;
              display: flex;
              flex-direction: column;
              //   height: calc(575.3 / 75) + rem;
              height: 100%;
              width: calc(582 / 75) + rem;
              .gift1-info-container {
                position: relative;
                display: flex;
                flex-direction: row;
                width: 100%;
                height: calc(62 / 75) + rem;
                .left-index-img-container {
                  position: relative;
                  height: calc(62 / 75) + rem;
                  width: calc(64 / 75) + rem;
                  .left-index-img {
                    height: 100%;
                    width: 100%;
                    background-image: url('@/assets/img/01.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                }
                .right-text-container {
                  position: relative;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  white-space: nowrap;
                  margin-left: calc(32 / 75) + rem;
                  .right-text {
                    font-size: calc(24 / 75) + rem;
                    font-family: 'Adobe Heiti Std';
                    font-weight: normal;
                    color: #03198f;
                  }
                }
              }
            }
          }
          .bottom-entroll-button-container {
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: center;
            height: calc(82.1 / 75) + rem;
            width: 100%;
            .bottom-entroll-button {
              position: relative;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              height: calc(51.4 / 75) + rem;
              width: calc(196 / 75) + rem;
              background-color: #fb9831;

              box-shadow: calc(10 / 75) + rem calc(11 / 75) + rem calc(9 / 75) +
                rem calc(1 / 75) + rem rgba(0, 0, 0, 0.14);
              border-radius: calc(4 / 75) + rem;
              .bottom-entroll-button-text {
                font-size: calc(34 / 75) + rem;
                font-family: 'SourceHanSansCN';
                font-weight: bold;
                color: #ffffff;
              }
            }
          }
        }
      }
    }
  }
}
</style>
