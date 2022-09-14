<template>
  <div class="page">
    <div class="page-wrapper">
      <div class="header">
        <van-search
          v-model="searchWord"
          shape="round"
          background="#00995a"
          placeholder="请输入搜索关键词"
        >
          <template #left>
            <div class="search-left-container">
              <div class="search-left-img-container">
                <div class="search-left-img"></div>
              </div>

              <div class="search-left-text-container">
                <div class="search-left-text">杭州</div>
                <div class="search-left-arrow"></div>
              </div>
            </div>
          </template>
        </van-search>
      </div>
      <div class="content">
        <!-- 轮播图 -->
        <div class="swiper-container">
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
              <img src="@/assets/img/swiper-item-img.png" />
            </van-swipe-item>
            <van-swipe-item>
              <img src="@/assets/img/swiper-item-img.png" />
            </van-swipe-item>
            <van-swipe-item>
              <img src="@/assets/img/swiper-item-img.png" />
            </van-swipe-item>
            <van-swipe-item>
              <img src="@/assets/img/swiper-item-img.png" />
            </van-swipe-item>
          </van-swipe>
        </div>
        <!--活动按钮-->
        <div class="activity-button-container">
          <div class="activity-button-wrapper">
            <div class="installment-application-container">
              <div class="installment-application-img-container">
                <div class="installment-application-img"></div>
              </div>
              <div class="installment-application-text-container">分期申请</div>
            </div>
            <div class="recommend-gift-container">
              <div class="recommend-gift-img-container">
                <div class="recommend-gift-img"></div>
              </div>
              <div class="recommend-gift-text-container">推荐有礼</div>
            </div>
            <div class="total-activity-container">
              <div class="total-activity-img-container">
                <div class="total-activity-img"></div>
              </div>
              <div class="total-activity-text-container">活动集锦</div>
            </div>
            <div class="store-in-container">
              <div class="store-in-img-container">
                <div class="store-in-img"></div>
              </div>
              <div class="store-in-text-container">商户入驻</div>
            </div>
          </div>
        </div>
        <!--活动图片-->
        <div class="activity-img-container">
          <div class="activity-img-wrapper">
            <img class="activity-img" src="@/assets/img/activity-img.png" />
          </div>
        </div>
        <!-- 选择装修的类型select -->
        <!-- <div class="decoration-type-container">
          <van-tabs
            v-model="tabActiveNum"
            swipeable
            :border="true"
            color="#00995a"
            title-active-color="#00995a"
            title-inactive-color="#000000"
          >
            <van-tab title="家装公司" title-style="van-tabs-title">
              <div class="company-container">
                <div class="company-item-container">
                  <div class="company-item">
                    <div class="empty-top-padding-container"></div>
                    <div class="top-container">
                      <div class="left-img-container">
                        <img
                          class="left-shop-img"
                          src="http://p3.music.126.net/wGbO39sAMI9lroiLYXJsDQ==/109951167760004737.jpg?param=400y400"
                        />
                      </div>
                      <div class="right-info-container">
                        <div class="name-text-container">
                          张家港市杨舍镇塘市美心木门经营部
                        </div>
                        <div class="commend-info-container">
                          <div class="star-img-text-container">
                            <div class="star-img-container">
                              <div class="star-img"></div>
                              <div class="star-img"></div>
                              <div class="star-img"></div>
                              <div class="star-img"></div>
                              <div class="star-img"></div>
                            </div>
                            <div class="stat-text">5.0</div>
                          </div>
                          <div class="commend-num-container">1241条</div>
                          <div class="consumpution-num-container">
                            ￥14141/人
                          </div>
                        </div>
                        <div class="address-info-container">
                          <div class="address">张家港市杨舍镇南二环路1号</div>
                          <div class="distant">13.4km</div>
                        </div>
                        <div class="benefit-info-container">
                          <div class="benefit">200个精选案例</div>
                          <div class="benefit">200名设计师</div>
                          <div class="benefit">免息分期</div>
                          <div class="benefit">实景展厅</div>
                        </div>
                      </div>
                    </div>
                    <div class="bottom-container">
                      <div class="left-discount-container">
                        <div class="left-discount-text-container">
                          <div class="left-discount-text">已优惠2</div>
                          <div class="left-quest-icon"></div>
                          <div class="left-quest-decoration"></div>
                        </div>
                      </div>
                      <div class="right-gift-recommend-info-container">
                        <div class="right-recommend-container">
                          <div class="cute-img-container">
                            <div class="cute-img"></div>
                          </div>
                          <div class="recommend-words-container">
                            “ 张家港市杨舍镇塘市美心木门经营部 ”
                          </div>
                        </div>

                        <div class="right-gift-container">
                          <div class="gift-img-container">
                            <div class="gift-img">礼</div>
                          </div>
                          <div class="gift-text-container">精美礼品一份</div>
                        </div>

                        <div class="right-group-gift-container">
                          <div class="group-gift-img-container">
                            <div class="group-gift-img">团</div>
                          </div>
                          <div class="group-gift-text-container">
                            精美礼品一份
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </van-tab>
            <van-tab title="建筑商户">内容 2</van-tab>
            <van-tab title="家居软装">内容 3</van-tab>
          </van-tabs>
        </div> -->

        <!-- 新选择装修的类型select -->
        <tabList>
          <div slot="item0">
            <div class="decoration-type-container">
              <div class="company-container">
                <div class="company-item-container">
                  <div class="company-item">
                    <div class="empty-top-padding-container"></div>
                    <div class="top-container">
                      <div class="left-img-container">
                        <img
                          class="left-shop-img"
                          src="http://p3.music.126.net/wGbO39sAMI9lroiLYXJsDQ==/109951167760004737.jpg?param=400y400"
                        />
                      </div>
                      <div class="right-info-container">
                        <div class="name-text-container">
                          张家港市杨舍镇塘市美心木门经营部
                        </div>
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
                          <div class="consumpution-num-container">
                            ￥14141/人
                          </div>
                        </div>
                        <div class="address-info-container">
                          <div class="address">张家港市杨舍镇南二环路1号</div>
                          <div class="distant">13.4km</div>
                        </div>
                        <div class="benefit-info-container">
                          <div class="benefit">200个精选案例</div>
                          <div class="benefit">200名设计师</div>
                          <div class="benefit">免息分期</div>
                          <div class="benefit">实景展厅</div>
                        </div>
                      </div>
                    </div>
                    <div class="bottom-container">
                      <div class="left-discount-container">
                        <div class="left-discount-text-container">
                          <div class="left-discount-text">已优惠2</div>
                          <div class="left-quest-icon"></div>
                          <div class="left-quest-decoration"></div>
                        </div>
                      </div>
                      <div class="right-gift-recommend-info-container">
                        <div class="right-recommend-container">
                          <div class="cute-img-container">
                            <div class="cute-img"></div>
                          </div>
                          <div class="recommend-words-container">
                            “ 张家港市杨舍镇塘市美心木门经营部 ”
                          </div>
                        </div>

                        <div class="right-gift-container">
                          <div class="gift-img-container">
                            <div class="gift-img">礼</div>
                          </div>
                          <div class="gift-text-container">精美礼品一份</div>
                        </div>

                        <div class="right-group-gift-container">
                          <div class="group-gift-img-container">
                            <div class="group-gift-img">团</div>
                          </div>
                          <div class="group-gift-text-container">
                            精美礼品一份
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <tabListContentCard></tabListContentCard>
          </div>
          <div slot="item1">建筑商户</div>
          <div slot="item2">家居软装</div>
        </tabList>
      </div>
    </div>
  </div>
</template>

<script>
import tabList from '@/components/index/tab-list/tabList.vue';
import tabListContentCard from '@/components/index/tab-list/tabListContentCard.vue';
export default {
  name: 'Index',
  components: {
    tabList,
    tabListContentCard,
  },
  props: {
    msg: String,
  },
  //变量区
  data() {
    return {
      test: '123',
      searchWord: '',
      tabActiveNum: 0,
    };
  },
  //生命周期区
  mounted() {
    console.log(this.$store);
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

  background-color: rgba(grey, 0.1);

  //不加的话 iphone5会多出来一块
  overflow-x: hidden;

  .page-wrapper {
    // height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: column;

    margin-bottom: calc(96.5 / 75) + rem;

    // 头部
    .header {
      height: calc(118 / 75) + rem;
      width: 100vw;
      background-color: #00995a;
      // vant search 修改专区
      .van-search {
        position: relative;
        box-sizing: border-box;
        height: 100%;
        width: 100vw;
        background-color: #00995a;
        padding: 0 calc(27 / 75) + rem 0 0;
        .van-search__content {
          height: calc(56 / 75) + rem;
        }
      }

      .search-left-container {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: calc(176 / 75) + rem;
        .search-left-img-container {
          position: relative;
          width: calc(53 / 75) + rem;
          height: calc(53 / 75) + rem;
          .search-left-img {
            height: 100%;
            background-image: url('@/assets/img/positon-img.png');
            background-repeat: no-repeat;
            background-size: 100%;
          }
        }
        .search-left-text-container {
          position: relative;
          //   width: calc(76.5 / 75) + rem;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          font-size: calc(26 / 75) + rem;

          color: white;
          //   font-weight: bold;
          .search-left-text {
            height: fit-content;
            margin-right: calc(10.5 / 75) + rem;
          }
          .search-left-arrow {
            height: 0;
            width: 0;
            border: 1px solid black;
            border-top-color: white;
            border-right-color: transparent;
            border-bottom-color: transparent;
            border-left-color: transparent;

            border-top-width: calc(12 / 75) + rem;
            border-right-width: calc(8.5 / 75) + rem;
            border-bottom-width: 0px;
            border-left-width: calc(8.5 / 75) + rem;
          }
          //   &::after {
          //     content: '';

          //     height: 0;
          //     width: 0;
          //     border: 1px solid black;
          //     border-top-color: #000000;
          //     border-right-color: transparent;
          //     border-bottom-color: transparent;
          //     border-left-color: transparent;

          //     border-top-width: 20px;
          //     border-right-width: 20px;
          //     border-bottom-width: 20px;
          //     border-left-width: 20px;
          //   }
        }
      }
    }

    // 内容
    .content {
      position: relative;
      flex: 1;
      width: 100vw;

      margin-bottom: calc(23.5 / 75) + rem;
      //轮播图
      .swiper-container {
        position: relative;
        height: 4.4rem;
        width: 100vw !important;

        .my-swipe .van-swipe-item {
          position: relative;
          height: 4.4rem;
          width: 100vw !important;

          img {
            position: relative;
            height: 4.4rem;
            width: 100vw !important;
          }
        }
      }

      //活动按钮
      .activity-button-container {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 2.84rem;
        width: 100vw;
        margin-top: 0.267rem;

        .activity-button-wrapper {
          position: relative;
          height: 2.84rem;
          width: calc(100vw - 0.67rem);
          background-color: white;

          box-shadow: 0px 0px 0.67rem 0px rgba(0, 0, 0, 0.05);
          border-radius: 0.6rem;

          display: flex;
          flex-direction: row;

          .installment-application-container {
            position: relative;
            display: flex;
            flex-direction: column;

            justify-content: center;
            align-items: center;
            width: 100%;
            .installment-application-img-container {
              width: 1.213rem;
              height: 1.213rem;

              background-color: orange;
              border-radius: 50%;
              .installment-application-img {
                width: 100%;
                height: 100%;
                background-image: url('@/assets/img/installmentApplication.png');
                background-repeat: no-repeat;
                background-size: 100%;
              }
            }
            .installment-application-text-container {
              margin-top: 0.28rem;
              font-size: 0.373rem;
              font-weight: 400;
              color: #000000;
            }
          }

          .recommend-gift-container {
            position: relative;
            display: flex;
            flex-direction: column;

            justify-content: center;
            align-items: center;
            width: 100%;
            .recommend-gift-img-container {
              width: 1.213rem;
              height: 1.213rem;
              .recommend-gift-img {
                width: 100%;
                height: 100%;
                background-image: url('@/assets/img/recommendGift.png');
                background-repeat: no-repeat;
                background-size: 100%;
              }
            }
            .recommend-gift-text-container {
              margin-top: 0.28rem;
              font-size: 0.373rem;
              font-weight: 400;
              color: #000000;
            }
          }

          .total-activity-container {
            position: relative;
            display: flex;
            flex-direction: column;

            justify-content: center;
            align-items: center;
            width: 100%;
            .total-activity-img-container {
              width: 1.213rem;
              height: 1.213rem;
              background-color: #65c3c7;
              border-radius: 50%;
              .total-activity-img {
                width: 100%;
                height: 100%;
                background-image: url('@/assets/img/totalActivity.png');
                background-repeat: no-repeat;
                background-size: 100%;
              }
            }
            .total-activity-text-container {
              margin-top: 0.28rem;
              font-size: 0.373rem;
              font-weight: 400;
              color: #000000;
            }
          }

          .store-in-container {
            position: relative;
            display: flex;
            flex-direction: column;

            justify-content: center;
            align-items: center;

            width: 100%;
            .store-in-img-container {
              width: 1.213rem;
              height: 1.213rem;
              .store-in-img {
                width: 100%;
                height: 100%;
                background-image: url('@/assets/img/storeIn.png');
                background-repeat: no-repeat;
                background-size: 100%;
              }
            }
            .store-in-text-container {
              margin-top: 0.28rem;
              font-size: 0.373rem;
              font-weight: 400;
              color: #000000;
            }
          }
        }
      }

      //活动图片
      .activity-img-container {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 3.44rem;
        width: 100vw;
        margin-top: 0.267rem;

        .activity-img-wrapper {
          height: 3.44rem;
          width: 9.32rem;

          .activity-img {
            height: 100%;
            width: 100%;
            border-radius: 0.6rem;
          }
        }
      }

      //装修的类型
      .decoration-type-container {
        width: calc(100vw - 0.67rem);
        background-color: white;
        border-radius: 0.6rem;
        margin: 0 auto;
        //修改tabList的总长度并居中
        ::v-deep .van-tabs__nav {
          position: relative;
          width: calc(100vw - 0.67rem);
          //height: calc(44.5 / 75)+rem;

          margin: 0 auto;
          border-radius: 0.6rem;

          background-color: white;

          //display: flex;
          //flex-direction: row;
          //justify-content: center;
        }

        // 修改tab字体大小
        ::v-deep .van-tab {
          font-size: 0.4267rem !important;
          //width: calc(100vw - 0.67rem);
          //background-color: red;
        }

        // 修改tab-nav 的高度
        ::v-deep .van-tabs--line .van-tabs__wrap {
          //   margin-top: 0.74rem;
          //height: calc(44.5 / 75)+rem;
        }

        //修改tab-nav 滑块的处于的高度
        ::v-deep .van-tabs__line {
          bottom: 0.6rem;
        }

        // 家装公司
        .company-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;

          height: fit-content;
          //width: 100vw;

          .company-item-container {
            position: relative;
            height: calc(368.2 / 75) + rem;
            width: calc(100vw - 0.67rem);

            .company-item {
              position: relative;
              height: 100%;
              width: 100%;
              display: flex;
              flex-direction: column;
              //margin-top: 0.74rem;

              background-color: white;
              border-radius: 0 0 0.6rem 0.6rem;

              &::before {
                content: '';
                position: relative;
                width: 80vw;
                height: 1px;
                background-color: rgba($color: grey, $alpha: 0.1);
                //top: -0.4547rem;
                margin: 0 auto;
              }
              .empty-top-padding-container {
                height: calc(34.1 / 75) + rem;
              }
              .top-container {
                position: relative;
                height: calc(157 / 75) + rem;
                width: 100%;
                display: flex;
                flex-direction: row;
                max-width: 100%;

                .left-img-container {
                  position: relative;
                  width: 2.584rem;
                  min-width: 2.584rem;
                  height: 100%;
                  display: flex;
                  flex-direction: row;
                  justify-content: flex-end;
                  align-items: flex-start;

                  .left-shop-img {
                    width: 2rem;
                    height: 2rem;
                    border-radius: 0.2rem;
                  }
                }

                .right-info-container {
                  box-sizing: border-box;
                  position: relative;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;

                  padding-left: 0.2547rem;
                  font-size: 10px;
                  width: 100%;
                  max-width: calc(511 / 75) + rem;

                  .name-text-container {
                    position: relative;
                    font-size: 0.3467rem;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-family: SourceHanSansCN;
                    font-weight: bold;
                    color: #000000;
                  }

                  .commend-info-container {
                    position: relative;

                    display: flex;
                    flex-direction: row;
                    font-size: 0.3467rem;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-family: SourceHanSansCN;
                    font-weight: 400;
                    color: #000000;

                    .star-img-text-container {
                      position: relative;
                      display: flex;
                      flex-direction: row;
                      justify-content: center;
                      align-items: center;
                      margin-right: 0.12rem;

                      .star-img-container {
                        position: relative;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;

                        align-items: center;
                        margin-right: 0.12rem;
                        height: 0.307rem;
                        width: 1.693rem;

                        .star-img {
                          width: 0.307rem;
                          height: 0.307rem;

                          background-image: url('@/assets/img/star.png');
                          background-repeat: no-repeat;

                          // 充满Div
                          background-size: 100%;
                        }
                      }

                      .stat-text {
                        color: #ff6133;
                        font-size: 0.267rem;
                        line-height: 0.4rem;
                      }
                    }

                    .commend-num-container {
                      position: relative;
                      margin-right: 0.08rem;
                      font-size: 0.267rem;
                      line-height: 0.4rem;

                      text-overflow: ellipsis;
                      white-space: nowrap;
                      overflow: hidden;

                      font-weight: bold;

                      max-width: 2rem;
                    }

                    .consumpution-num-container {
                      position: relative;
                      margin-right: 0.12rem;
                      font-size: 0.267rem;
                      line-height: 0.4rem;

                      text-overflow: ellipsis;
                      white-space: nowrap;
                      overflow: hidden;

                      max-width: 3rem;

                      font-weight: bold;
                    }
                  }

                  .address-info-container {
                    position: relative;
                    display: flex;
                    justify-content: space-between;
                    margin-right: calc(19 / 75) + rem;

                    .address {
                      font-size: 0.267rem;
                      font-family: SourceHanSansCN;
                      font-weight: 400;
                      color: #747474;
                      white-space: nowrap;
                      text-overflow: ellipsis;
                      overflow: hidden;
                      max-width: 5rem;
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

                  .benefit-info-container {
                    position: relative;
                    width: 95%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;

                    .benefit {
                      white-space: nowrap;
                      text-overflow: ellipsis;
                      overflow: hidden;
                      text-align: center;
                      font-size: 0.24rem;
                      font-weight: bold;
                      //   -webkit-transform: scale(0.95);

                      //   border: calc(1 / 75) + rem solid #f7f4f6;
                      background-color: #f7f4f6;
                    }
                  }
                }
              }

              .bottom-container {
                box-sizing: border-box;
                position: relative;
                height: 1.984rem;
                width: 100%;
                max-width: 100%;

                display: flex;
                flex-direction: row;

                .left-discount-container {
                  position: relative;
                  width: 2.584rem;
                  min-width: 2.584rem;
                  height: 100%;

                  display: flex;
                  flex-direction: row;
                  justify-content: flex-end;
                  align-items: flex-end;
                  color: #ff6133;

                  font-size: 0.24rem;

                  .left-discount-text-container {
                    position: relative;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    height: 0.4rem;
                    // width: 1.6rem;
                    // line-height: 0.8rem;
                    // font-weight: 400;
                    // letter-spacing:1.5px;

                    background-color: #ffecea;
                    font-weight: bold;

                    &::after {
                      content: '';
                      //   width: 0;
                      height: 100%;
                      //   left: 0.86rem;
                      //   position: absolute;
                      display: block;
                      border-top: 12px solid transparent;
                      //   border-left: 12px solid blue;
                      border-bottom: 12px solid transparent;
                      z-index: 11;
                    }

                    .left-discount-text {
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      overflow: hidden;
                      margin-right: 0.053rem;
                    }

                    .left-quest-icon {
                      position: relative;
                      text-align: center;

                      width: 0.28rem;
                      height: 0.28rem;

                      border: 0.5px solid #f79883;
                      border-radius: 50%;

                      &::before {
                        position: relative;
                        content: '?';
                        color: #ff6133;
                      }
                    }
                    .left-quest-decoration {
                      width: 0px;
                      height: 0px;
                      border-left: 0px solid #ffecea;
                      border-right: 0px solid transparent;
                      border-top: 20px solid transparent;
                      border-bottom: 20px solid transparent;

                      border-left-width: calc(9 / 75) + rem;
                      border-top-width: calc(14.5 / 75) + rem;
                      border-bottom-width: calc(14.5 / 75) + rem;

                      background-color: white;
                    }
                  }
                }

                .right-gift-recommend-info-container {
                  box-sizing: border-box;
                  position: relative;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  margin-left: 0.2547rem;
                  font-size: 10px;
                  width: calc(530 / 75) + rem;
                  max-width: calc(530 / 75) + rem;

                  margin-top: 0.36rem;

                  .right-recommend-container {
                    position: relative;
                    width: 100%;
                    max-width: 100%;
                    display: flex;
                    flex-direction: row;
                    align-items: center;

                    .cute-img-container {
                      // height: 0.307rem;
                      // width: 0.28rem;
                      height: 0.4rem;
                      width: 0.4rem;
                      display: flex;
                      flex-direction: row;
                      justify-content: center;
                      align-items: center;

                      .cute-img {
                        height: 0.307rem;
                        width: 0.28rem;
                        background-image: url('@/assets/img/watermelon.png');
                        background-repeat: no-repeat;
                        background-size: 100%;
                      }
                    }

                    .recommend-words-container {
                      font-size: 0.267rem;
                      font-weight: bold;
                      color: #000000;
                      margin-left: 0.0933rem;

                      text-overflow: ellipsis;
                      white-space: nowrap;
                      overflow: hidden;
                      max-width: calc(450 / 75) + rem;
                    }
                  }

                  .right-gift-container {
                    position: relative;
                    width: 100%;

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;

                    .gift-img-container {
                      position: relative;
                      display: flex;
                      flex-direction: row;
                      justify-content: center;
                      align-content: center;
                      width: 0.4rem;
                      height: 0.4rem;

                      background-color: #fbf0eb;

                      font-weight: bold;

                      .gift-img {
                        position: relative;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;

                        font-family: SourceHanSansCN;
                        color: #ff6133;
                        font-size: 0.24rem;

                        // -webkit-transform: scale(0.95);
                      }
                    }

                    .gift-text-container {
                      font-size: 0.267rem;
                      font-weight: bold;
                      color: #000000;
                      margin-left: 0.1333rem;
                    }
                  }

                  .right-group-gift-container {
                    position: relative;
                    width: 100%;

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;

                    .group-gift-img-container {
                      position: relative;
                      display: flex;
                      flex-direction: row;
                      justify-content: center;
                      align-content: center;
                      width: 0.4rem;
                      height: 0.4rem;

                      background-color: #ffecea;

                      font-weight: bold;

                      .group-gift-img {
                        position: relative;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;

                        font-family: SourceHanSansCN;
                        color: #ff6133;
                        font-size: 0.24rem;

                        // -webkit-transform: scale(0.95);
                      }
                    }

                    .group-gift-text-container {
                      font-size: 0.267rem;
                      font-weight: bold;
                      color: #000000;
                      margin-left: 0.1333rem;
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
}
</style>
