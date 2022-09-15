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
            <div class="nav-text-container">麦丰家装（城西店）</div>
          </div>
        </div>
      </div> -->
      <JKNavigator title="大众点评"></JKNavigator>
    </div>
    <div class="content">
      <!-- 公司详情 -->
      <div class="company-detail-card-container">
        <div class="company-detail-card-wrapper">
          <!-- 轮播图 -->
          <div class="company-detail-card-swppier-container">
            <div class="company-detail-card-img-container">
              <div class="company-detail-card-img"></div>
            </div>
          </div>
          <!-- 公司的名字和详细的地址 -->
          <div class="company-detail-card-info-container">
            <!-- card的上半部分 -->
            <div class="top-info-container">
              <div class="top-info-left-container">
                <div class="name-text-container">麦丰家装（城西店）</div>
                <div class="commend-info-container">
                  <div class="star-img-text-container">
                    <div class="star-img-container">
                      <div class="star-img">
                        <!-- <img  src="@/assets/img/star.png" /> -->
                      </div>
                      <div class="star-img">
                        <!-- <img  src="@/assets/img/star.png" /> -->
                      </div>
                      <div class="star-img">
                        <!-- <img  src="@/assets/img/star.png" /> -->
                      </div>
                      <div class="star-img">
                        <!-- <img  src="@/assets/img/star.png" /> -->
                      </div>
                      <div class="star-img">
                        <!-- <img  src="@/assets/img/star.png" /> -->
                      </div>
                    </div>
                    <div class="stat-text">5.0</div>
                  </div>
                  <div class="commend-num-container">1241条</div>
                  <div class="consumpution-num-container">￥14141/人</div>
                </div>
                <div class="address-info-container">
                  <div class="address">张家港市杨舍镇南二环路1号</div>
                  <!-- <div class="distant">13.4km</div> -->
                </div>
              </div>
              <!-- 右半部分的收藏按钮 若需要可恢复 -->
              <!-- <div class="top-info-right-container">
                <div class="favourite-img-text-container">
                  <div class="favourite-img-container">
                    <div class="favourite-img"></div>
                  </div>
                  <div class="favourite-text-container">收藏</div>
                </div>
              </div> -->
            </div>
            <!-- card的下半部分 -->
            <div class="bottom-info-container">
              <div class="empty-wrapper"></div>
              <div class="bottom-info-wrapper">
                <!-- 左边放位置按钮的盒子 -->
                <div class="bottom-left-container">
                  <div class="left-location-img-container">
                    <div class="location-img"></div>
                  </div>
                </div>
                <!-- 中间放地址的盒子 -->
                <div class="bottom-middle-container">
                  <div class="address-container">
                    <div class="address-text-container">
                      文一西路830号蒋村商务中心第六空间F301/302/303/305展厅
                    </div>
                    <div class="address-distant-container">
                      距地铁5号线蒋村站E1口步行910m
                    </div>
                  </div>
                </div>
                <!-- 右边放电话按钮的盒子 -->
                <div class="bottom-right-container">
                  <div class="bottom-iphone-img-container">
                    <div class="bottom-iphone-img-wrapper">
                      <div class="bottom-iphone-img"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 活动页面 -->
      <div class="company-activity-container">
        <!-- 上面 -->
        <div class="top-activity-img-container">
          <div
            class="company-introduce-img-container"
            @click="navToPage('companyProfile')"
          >
            <div class="company-introduce-img"></div>
          </div>
          <div
            class="designer-example-img-container"
            @click="navToPage('designerExample')"
          >
            <div class="designer-example-img"></div>
          </div>
        </div>
        <!-- 下面 -->
        <div class="bottom-activity-img-container">
          <div class="discount-activity-img-container">
            <div class="discount-activity-img"></div>
          </div>
          <div
            class="last-activity-img-container"
            @click="navToPage('lastActivity')"
          >
            <div class="last-activity-img"></div>
          </div>
        </div>
      </div>
      <!-- 真实案例 -->
      <div class="real-example-container">
        <div class="real-example-wrapper">
          <div class="real-example-text-container">真实案例</div>
          <div class="example-info-container">
            <div class="example-info-num-container">200个案例</div>
            <div class="example-info-arrow-img-container">
              <div class="example-info-arrow-img"></div>
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
  components: { JKNavigator },
};
</script>

<style scoped lang="scss">
.page-wrapper {
  box-sizing: border-box;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  height: fit-content;
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
    height: fit-content;
    width: 100vw;

    padding-bottom: calc(96.5 / 75) + rem;

    //公司详情
    .company-detail-card-container {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      height: calc(745 / 75) + rem;
      width: 100%;
      //   background-color: white;
      margin-bottom: calc(20 / 75) + rem;
      .company-detail-card-wrapper {
        position: relative;
        height: 100%;
        width: 100%;

        display: flex;
        flex-direction: column;

        background-color: white;

        //轮播图
        .company-detail-card-swppier-container {
          position: relative;
          height: calc(352 / 75) + rem;

          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-bottom: calc(42 / 75) + rem;

          .company-detail-card-img-container {
            position: relative;
            height: calc(352 / 75) + rem;
            width: calc(671 / 75) + rem;

            // width: calc(100vw - 1.0666667rem);
            // padding-bottom: calc(10 / 37.5) + rem;
            .company-detail-card-img {
              position: relative;
              height: 100%;
              width: 100%;
              //   border-radius: calc(20 / 37.5) + rem;
              border-radius: calc(43 / 75) + rem;

              background-image: url('@/assets/img/company-swpier-img1.png');
              background-repeat: no-repeat;
              background-size: 100% 100%;
            }
          }
        }
        //公司详细的地址与信息
        .company-detail-card-info-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;

          width: 100%;
          height: calc(351 / 75) + rem;
          .top-info-container {
            box-sizing: border-box;
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            width: calc(100vw - 0.5733333rem);
            height: calc(166 / 75) + rem;
            // 左半部分
            .top-info-left-container {
              box-sizing: border-box;
              position: relative;
              display: flex;
              flex-direction: column;
              //   justify-content: space-between;

              width: 100%;
              height: 100%;

              // max-width: calc(511 / 75) + rem;

              .name-text-container {
                position: relative;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-weight: bold;
                color: #000000;
                font-size: calc(18 / 37.5) + rem;
                font-family: Microsoft Yahei;
                // width: calc(300 / 37.5) + rem;
              }

              .commend-info-container {
                position: relative;

                display: flex;
                flex-direction: row;
                font-size: calc(18 / 37.5) + rem;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-family: SourceHanSansCN;
                font-weight: 400;
                color: #000000;

                margin-top: calc(26 / 75) + rem;
                .star-img-text-container {
                  position: relative;
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                  align-items: center;
                  margin-right: calc(9 / 75) + rem;

                  .star-img-container {
                    position: relative;
                    display: flex;
                    flex-direction: row;
                    // justify-content: space-between;

                    align-items: center;
                    margin-right: calc(11 / 75) + rem;
                    height: calc(27 / 75) + rem;
                    width: calc(149 / 75) + rem;

                    .star-img {
                      width: calc(27 / 75) + rem;
                      height: calc(27 / 75) + rem;

                      background-image: url('@/assets/img/star.png');
                      background-repeat: no-repeat;

                      // 充满Div
                      background-size: 100% 100%;
                      margin-right: calc(4 / 75) + rem;
                      &:last-child {
                        margin-right: 0rem;
                      }
                    }
                  }

                  .stat-text {
                    color: #ff6133;
                    font-size: calc(28 / 75) + rem;
                    line-height: calc(28 / 75) + rem;
                    // font-weight: bold;
                  }
                }

                .commend-num-container {
                  position: relative;
                  margin-right: calc(9 / 75) + rem;
                  font-size: calc(28 / 75) + rem;

                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;

                  font-weight: 400;

                  max-width: 2rem;
                }

                .consumpution-num-container {
                  position: relative;
                  margin-right: 0.12rem;
                  font-size: calc(15 / 37.5) + rem;
                  line-height: 0.4rem;

                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;

                  max-width: 3rem;

                  //   font-weight: bold;
                }
              }

              .address-info-container {
                position: relative;
                display: flex;
                justify-content: flex-start;
                // margin-right: calc(19 / 75) + rem;
                margin-top: calc(23 / 75) + rem;

                .address {
                  font-size: calc(13 / 37.5) + rem;
                  font-family: SourceHanSansCN;
                  font-weight: 400;
                  color: #747474;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  max-width: 100%;
                }

                .distant {
                  font-size: 0.267rem;
                  font-family: SourceHanSansCN;
                  font-weight: 400;
                  color: #747474;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  max-width: 1.8rem;
                }
              }
            }
            //右半部分
            .top-info-right-container {
              position: relative;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 100%;

              .favourite-img-text-container {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .favourite-img-container {
                  position: relative;
                  display: flex;
                  width: calc(30 / 37.5) + rem;
                  height: calc(30 / 37.5) + rem;
                  margin-bottom: calc(5 / 37.5) + rem;
                  .favourite-img {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    background-image: url('@/assets/img/favourite-star.png');
                    background-repeat: no-repeat;
                    background-size: 100%;
                  }
                }
                .favourite-text-container {
                  font-size: 0.3466666667rem;
                  font-family: SourceHanSansCN;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  height: 100%;
                  max-width: 100%;
                }
              }
            }
          }
          .bottom-info-container {
            box-sizing: border-box;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            // width: calc(100vw - 0.67rem);
            width: 100vw;
            // height: 100%;
            height: calc(185 / 75) + rem;
            // &::before {
            //   position: relative;
            //   content: '';
            //   width: 80vw;
            //   height: 1px;

            //   background-color: black;
            //   margin: 0 auto;
            // }
            .empty-wrapper {
              position: relative;
              height: calc(32 / 75) + rem;
              width: 100%;
              &::before {
                content: '';
                position: relative;
                display: block;
                width: calc(696 / 75) + rem;
                height: calc(2 / 75) + rem;
                background-color: #eeeeee;
                margin: 0 auto;
              }
            }
            .bottom-info-wrapper {
              box-sizing: border-box;
              position: relative;
              display: flex;
              flex-direction: row;
              justify-content: flex-start;

              // width: calc(100vw - 0.67rem);
              width: 100%;
              height: 100%;
              // 放位置按钮的左边盒子
              .bottom-left-container {
                position: relative;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                // align-items: center;

                width: calc(72 / 75) + rem;
                height: 100%;
                .left-location-img-container {
                  position: relative;
                  display: flex;
                  width: calc(22 / 75) + rem;
                  height: calc(26 / 75) + rem;
                  margin-left: calc(29 / 75) + rem;
                  margin-right: calc(21 / 75) + rem;
                  margin-top: calc(10 / 75) + rem;
                  .location-img {
                    position: relative;

                    width: 100%;
                    height: 100%;

                    background-image: url('@/assets/img/location-black.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                }
              }
              // 放地址内容的中间盒子
              .bottom-middle-container {
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                .address-container {
                  position: relative;
                  display: flex;
                  flex-direction: column;
                  width: 100%;
                  height: 100%;

                  .address-text-container {
                    position: relative;
                    // margin-right: 0.08rem;
                    font-size: calc(30 / 75) + rem;
                    line-height: calc(46 / 75) + rem;
                    font-weight: bold;
                    overflow: hidden;
                    text-overflow: ellipsis; //当对象内文本溢出时显示省略标记
                    display: -webkit-box;
                    -webkit-line-clamp: 2; //这边的2指的是两行
                    -webkit-box-orient: vertical;

                    max-width: 100%;
                  }
                  .address-distant-container {
                    position: relative;

                    font-size: calc(24.66 / 75) + rem;
                    font-family: SourceHanSansCN;
                    font-weight: 400;
                    color: #8d8d8d;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    max-width: 100%;

                    margin-top: calc(10 / 37.5) + rem;
                    // max-width: 2rem;
                  }
                }
              }
              .bottom-right-container {
                position: relative;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                width: calc(100 / 37.5) + rem;
                height: 100%;
                .bottom-iphone-img-container {
                  position: relative;

                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                  align-items: center;

                  width: 100%;
                  height: calc(58 / 75) + rem;
                  border-left: 1px solid #eeeeee;
                  border-left-width: calc(1 / 75) + rem;
                  .bottom-iphone-img-wrapper {
                    height: calc(38 / 75) + rem;
                    width: calc(32 / 75) + rem;
                    .bottom-iphone-img {
                      width: 100%;
                      height: 100%;

                      background-image: url('@/assets/img/iphone-icon.png');
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
    // 活动详情
    .company-activity-container {
      position: relative;
      display: flex;
      flex-direction: column;

      height: calc(406 / 75) + rem;
      width: 100vw;
      background-color: white;
      margin-bottom: calc(20 / 75) + rem;

      .top-activity-img-container {
        position: relative;
        display: flex;
        flex-direction: row;
        height: calc(166.5 / 75) + rem;

        width: 100%;
        margin-top: calc(29 / 75) + rem;
        .company-introduce-img-container {
          position: relative;
          height: calc(166.5 / 75) + rem;

          width: calc(314.8 / 75) + rem;
          margin-left: calc(41.4 / 75) + rem;
          .company-introduce-img {
            width: 100%;
            height: 100%;
            background-image: url('@/assets/img/last-activity.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
        }
        .designer-example-img-container {
          position: relative;

          height: calc(166.5 / 75) + rem;

          width: calc(314.8 / 75) + rem;
          margin-left: calc(40.8 / 75) + rem;

          .designer-example-img {
            width: 100%;
            height: 100%;
            background-image: url('@/assets/img/designer-example.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
        }
      }
      .bottom-activity-img-container {
        position: relative;
        display: flex;
        flex-direction: row;

        height: calc(166.5 / 75) + rem;

        width: 100%;
        margin-top: calc(26.2 / 75) + rem;
        .discount-activity-img-container {
          position: relative;
          height: calc(166.5 / 75) + rem;

          width: calc(314.8 / 75) + rem;
          margin-left: calc(41.4 / 75) + rem;
          .discount-activity-img {
            width: 100%;
            height: 100%;
            background-image: url('@/assets/img/discount-activity.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
        }
        .last-activity-img-container {
          position: relative;

          height: calc(166.5 / 75) + rem;

          width: calc(314.8 / 75) + rem;
          margin-left: calc(40.8 / 75) + rem;
          .last-activity-img {
            width: 100%;
            height: 100%;
            background-image: url('@/assets/img/last-activity.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
        }
      }
    }
    //真实案例
    .real-example-container {
      position: relative;
      display: flex;
      flex-direction: row;

      height: calc(106 / 75) + rem;
      width: 100vw;
      background-color: white;
      .real-example-wrapper {
        position: relative;
        display: flex;
        flex-direction: row;

        height: fit-content;
        width: 100vw;
        background-color: white;

        margin-top: calc(44 / 75) + rem;
        .real-example-text-container {
          position: relative;

          //   margin-top: calc(44 / 75) + rem;
          margin-left: calc(46 / 75) + rem;

          height: fit-content;
          font-size: calc(36 / 75) + rem;
          font-weight: bold;
        }
        .example-info-container {
          position: relative;
          height: calc(35 / 75) + rem;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-content: center;
          margin-left: calc(385 / 75) + rem;
          .example-info-num-container {
            height: fit-content;
            font-size: calc(24 / 75) + rem;
            font-family: SourceHanSansCN;
            font-weight: 400;
            color: #8d8d8d;
            margin-right: calc(11.3 / 75) + rem;
          }
          .example-info-arrow-img-container {
            position: relative;
            width: calc(13 / 75) + rem;
            height: calc(23 / 75) + rem;
            margin-top: calc(3 / 75) + rem;

            .example-info-arrow-img {
              position: relative;
              height: 100%;
              width: 100%;

              background-image: url('@/assets/img/example-info-arrow-img.png');
              background-repeat: no-repeat;
              background-size: 100% 100%;
            }
          }
        }
      }
    }
  }
}
</style>
