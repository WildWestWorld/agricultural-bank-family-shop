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
      <JKNavigator title="商家详情"></JKNavigator>
    </div>
    <div class="content">
      <JKDialog
        ref="dialog"
        dialogWidth="560"
        dialogHeight="600"
        leftButtonText="拒绝"
        rightButtonText="允许"
      >
        <div class="dialog-content-container" slot="content">
          <div class="dialog-content">
            <div class="top-title-container">
              <div class="dialog-title-text-container">获取您的个人信息</div>
            </div>
            <div class="bottom-content-container">
              为了便于您使用第三方的服务，中国农业银行将您的以下信息传递给第三方。您通过第三方服务页面主动提供给第三方商户的个人信息，相关信息责任由第三方商户承担。<br />
              ·所属用户机构号<br />
              ·用户标识<br />
              ·电话号码：137*****047
            </div>
          </div>
        </div>
      </JKDialog>

      <!-- 公司详情 -->
      <div class="company-detail-card-container">
        <div class="company-detail-card-wrapper">
          <!-- 轮播图 -->
          <div class="company-detail-card-swppier-container">
            <JKSwiperV2 :imgList="imgList"></JKSwiperV2>
            <!-- <div class="company-detail-card-img-container">
                <div class="company-detail-card-img"></div>
              </div> -->
          </div>
          <!-- 公司的名字和详细的地址 -->
          <div class="company-detail-card-info-container">
            <!-- card的上半部分 -->
            <div class="top-info-container">
              <div class="top-info-left-container">
                <div class="name-text-container">楚邦上易装饰</div>
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
                  <div class="commend-num-container">782条</div>
                  <div class="consumpution-num-container">¥15800/人</div>
                </div>
                <div class="address-info-container">
                  <div class="address">余杭区好运街152号（楚邦上易总部）</div>
                  <!-- <div class="distant">13.4km</div> -->
                </div>
              </div>
              <!-- 右半部分的收藏按钮 若需要可恢复 -->
              <div class="top-info-right-container">
                <div class="favourite-img-text-container">
                  <BlickStar></BlickStar>
                  <!-- <div class="favourite-img-container">
                      <div class="favourite-img"></div>
                      <svg
                        t="1664102717928"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="3824"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <path
                          d="M946.44567 407.179676c-3.706415-11.056823-13.268188-19.154245-24.823362-20.929682l-263.117606-40.614L540.930913 93.91802c-5.108345-10.93198-16.071024-17.939581-28.155247-17.971303-0.030699 0-0.062422 0-0.062422 0-12.021801 0-22.985504 6.945179-28.155247 17.84646L365.79001 345.247138l-263.917832 39.507806c-11.399631 1.961678-20.774139 10.060123-24.355711 21.054525-3.613294 10.963703-0.778736 23.047926 7.257288 31.332612l191.202717 196.684568-45.6282 277.132808c-1.930979 11.741415 3.0208 23.608697 12.769838 30.491455 9.717316 6.882757 22.549575 7.630794 32.983205 1.868557l235.366565-129.47177 234.868215 130.282229c4.703115 2.616594 9.904581 3.924379 15.106046 3.924379 6.291287 0 12.551874-1.868557 17.877159-5.699816 9.748015-6.852058 14.763239-18.687618 12.862959-30.460756L747.488339 634.635061l191.669344-195.84341C947.286828 430.476265 950.121386 418.2365 946.44567 407.179676z"
                          p-id="3825"
                          fill="#bfbfbf"
                          id="star"
                        ></path>
                      </svg>
  
                      <span class="blick-star"></span>
                    </div> -->
                  <div class="favourite-text-container">收藏</div>
                </div>
              </div>
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
                      浙江省杭州市余杭区好运街152号（楚邦上易总部）
                    </div>
                    <div class="address-distant-container">
                      余杭区好运街152号（楚邦上易总部）
                    </div>
                  </div>
                </div>
                <!-- 右边放电话按钮的盒子 -->
                <a class="bottom-right-container" href="tel:18868442224">
                  <div class="bottom-iphone-img-container">
                    <div class="bottom-iphone-img-wrapper">
                      <div class="bottom-iphone-img"></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 活动页面 -->
      <div class="company-activity-container" v-if="false">
        <!-- 上面 -->
        <div class="top-activity-img-container">
          <div
            class="company-introduce-img-container"
            @click="navToPage('companyProfileCB')"
          >
            <div class="company-introduce-img"></div>
          </div>
          <div
            class="designer-example-img-container"
            @click="navToPage('wantConsult')"
          >
            <div class="designer-example-img"></div>
          </div>
        </div>
        <!-- 下面 -->
        <div class="bottom-activity-img-container">
          <div
            class="discount-activity-img-container"
            @click="navToPage('discountActivity')"
          >
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

      <!-- 官方活动 -->
      <div class="discount-activity-container">
        <div class="discount-title-container">优惠活动</div>
        <!-- <TicketCard></TicketCard> -->
        <DiscountListCard
          title="农行家装卡满千返百"
          nowPrice="0"
          beforePrice="9.9"
          @activeDialogFromFather="activeDialog"
          :isShowSaleNum="false"
          :activity-img="require('@/assets/img/guess-favorite-img-new.png')"
        ></DiscountListCard>
      </div>
      <!-- 真实案例 -->
      <!-- <div class="real-example-container">
          <div class="real-example-wrapper" @click="navToPage('wantConsult')">
            <div class="real-example-text-container">真实案例</div>
            <div class="example-info-container">
              <div class="example-info-num-container">200个案例</div>
              <div class="example-info-arrow-img-container">
                <div class="example-info-arrow-img"></div>
              </div>
            </div>
          </div>
        </div> -->
      <!-- 工具栏 -->
      <!-- <div class="tool-bar-container">
          <div class="tool-bar-wrapper">
            <div class="left-favor-container">
              <div class="favor-img-text-container">
                <div class="favor-img-container">
                  <div class="favor-img"></div>
                </div>
                <div class="favor-text-container">收藏</div>
              </div>
              <div
                class="consult-img-text-container"
                @click="navToPage('wantConsult')"
              >
                <div class="consult-img-container">
                  <div class="consult-img"></div>
                </div>
                <div class="consult-text-container">咨询</div>
              </div>
            </div>
            <div class="right-order-container">
              <div class="order-button-container">
                <div class="order-button-text">立即预约</div>
              </div>
            </div>
          </div>
        </div> -->
    </div>
  </div>
</template>

<script>
import JKNavigator from '@/components/common/jk-navigator/JKNavigator.vue';
import JKSwiperV2 from '@/components/common/jk-swiper/JKSwiperV2.vue';
import BlickStar from '../../components/common/blick-star/blickStar.vue';
import TicketCard from '@/components/ticket-center/ticket-tab-list/ticketCard.vue';
import DiscountActivity from '../activity/company-detail-activity/discountActivity.vue';
import JKDialog from '@/components/common/jk-dialog/JKDialog.vue';
import DiscountListCard from '@/components/activity/discount-activity/discount-list/discountListCard.vue';
export default {
  name: 'companyProfile',
  //变量区
  data() {
    return {
      imgList: [
        require('@/assets/img/cb-company-swpier-img1.jpg'),
        require('@/assets/img/cb-company-swpier-img1.jpg'),
        require('@/assets/img/cb-company-swpier-img1.jpg'),
      ],
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
    //激活对话框
    activeDialog() {
      //   console.log(this.$refs.dialog);
      this.$refs.dialog.changeIsDialogShowState(true);
    },
  },
  components: {
    JKNavigator,
    JKSwiperV2,
    BlickStar,
    TicketCard,
    DiscountActivity,
    JKDialog,
    DiscountListCard,
  },
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

    //  对话框的内容
    .dialog-content-container {
      position: relative;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;

      .dialog-content {
        position: relative;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        .top-title-container {
          position: relative;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          height: calc(47 * 2 / 75) + rem;
          width: 100%;
          .dialog-title-text-container {
            color: black;
          }
        }
        .bottom-content-container {
          line-height: calc(50 / 75) + rem;
          padding-left: calc(30 / 75) + rem;
          padding-right: calc(30 / 75) + rem;

          height: 100%;
        }
      }
    }

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
            // justify-content: space-between;

            width: calc(100vw - 0.5733333rem);
            // width: 100%;
            height: calc(166 / 75) + rem;
            // 左半部分
            .top-info-left-container {
              box-sizing: border-box;
              position: relative;
              display: flex;
              flex-direction: column;
              //   justify-content: space-between;

              width: calc(630 / 75) + rem;
              height: 100%;
              //   margin-left: calc(44 / 75) + rem;
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
              width: calc(80 / 75) + rem;
              height: 100%;

              .favourite-img-text-container {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                // 星星图标
                .favourite-img-container {
                  position: relative;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: calc(60 / 75) + rem;
                  height: calc(60 / 75) + rem;
                  /* 自定义属性 用var函数进行调用 */
                  --star-stroke-color: yellow;

                  svg {
                    position: relative;
                    width: 100%;
                    z-index: 10;
                  }
                  #star {
                    fill: #fefefe;
                    /* svg形状的边框颜色 */
                    stroke: black;
                    /* stroke: var(--heart-stroke-color); */
                    /* svg形状边框的宽度 */
                    stroke-width: calc(110 / 75) + rem;
                    /* 我们可以设置stroke-dashoffset与stroke-dasharray相同的值实现“画线”的效果： */
                    /* svg形状边框线 / 虚线 等比例分割的距离 */
                    /*  只有一个值是实线的长度，两个值是 实线的长度和虚线的长度*/
                    stroke-dasharray: 4000;
                    /*  svg形状边框线 / 虚线 开始的位置 正值就是左移*/
                    /* 当stroke-dasharray = stroke-dashoffset时我们就看不见线了，当我们stroke-dashoffset 越来越小，线就开始右移我们就能逐渐看见线了*/
                    stroke-dashoffset: 0;
                    /* 设置边框线的首尾的形状 */
                    stroke-linecap: round;
                  }
                  /* 里面的span的内容其实看不见的会被svg图片挡住，我们看到是里面的shadow */
                  .blick-star {
                    display: block;
                    height: calc(6 / 75) + rem;
                    width: calc(6 / 75) + rem;
                    background-color: yellow;
                    border-radius: 50%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(0);
                    z-index: 99;
                    //盒子阴影  (x的位置,y的位置，blur模糊的大小，阴影的颜色)
                    //利用盒子阴影 可以复制和原来的盒子盒子一样的宽高的元素
                    box-shadow: 0 calc(48 / 75) + rem 0 var(--star-stroke-color),
                      0 calc(48 / 75) + rem 0 var(--star-stroke-color),
                      calc(-48 / 75) + rem 0 0 var(--star-stroke-color),
                      calc(48 / 75) + rem 0 0 var(--star-stroke-color),
                      calc(-36 / 75) + rem calc(-36 / 75) + rem 0
                        var(--star-stroke-color),
                      calc(-36 / 75) + rem calc(-36 / 75) + rem 0
                        var(--star-stroke-color),
                      calc(36 / 75) + rem calc(36 / 75) + rem 0
                        var(--star-stroke-color),
                      calc(-36 / 75) + rem calc(36 / 75) + rem 0
                        var(--star-stroke-color);
                  }
                  #star {
                    /* forwards 执行完毕后停在最后一帧 */
                    animation: drawStar 1s linear forwards;
                  }
                  svg {
                    animation: beat 1s linear forwards;
                  }
                  .blick-star {
                    animation: blick 0.5s ease-in-out forwards;
                    animation-delay: 1s;
                  }
                  /* 定义画心动画 */
                  @keyframes drawStar {
                    0% {
                      /* fill: #eee; */
                      stroke: black;
                      stroke-dashoffset: 4000;
                    }
                    /* 划线 */
                    80% {
                      fill: #eee;
                      stroke: yellow;
                      stroke-dashoffset: 0;
                    }
                    /* 划线完毕后,然后让svg背景变红 */
                    100% {
                      fill: yellow;
                      stroke: yellow;
                      stroke-dashoffset: 0;
                    }
                  }
                  /* 定义心跳动画 (图形点亮后轻微变大后变回原状)*/
                  @keyframes beat {
                    0% {
                      transform: scale(1);
                    }
                    70% {
                      transform: scale(1);
                    }
                    80% {
                      transform: scale(1.2);
                    }
                    100% {
                      transform: scale(1);
                    }
                  }
                  /* 定义点亮动画 */
                  /* 这里的translate(-50%, -50%)只是为了保持盒子原来的居中效果，无其他含义 */
                  /* 主要效果是scale先变小后变大，让人感觉像是展开 */
                  @keyframes blick {
                    0% {
                      transform: translate(-50%, -50%) scale(0.5);
                      opacity: 0.8;
                    }
                    50% {
                      transform: translate(-50%, -50%) scale(1);
                      opacity: 1;
                    }
                    100% {
                      transform: translate(-50%, -50%) scale(1);
                      opacity: 0;
                    }
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
            background-image: url('@/assets/img/company-introduce.png');
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

    .discount-activity-container {
      position: relative;
      display: flex;
      flex-direction: column;

      height: fit-content;
      width: 100vw;
      background-color: white;
      padding-bottom: calc(20 / 75) + rem;
      margin-bottom: calc(20 / 75) + rem;

      .discount-title-container {
        position: relative;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: bold;
        color: #000000;
        font-size: calc(18 / 37.5) + rem;
        font-family: Microsoft Yahei;
        margin-left: 0.2866665rem; //该数值是从拿来的top-info-left-container
        margin-top: 0.56rem;
      }
      .company-profile-bcg {
        position: relative;
        box-sizing: border-box;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
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

    .authority-activity-container {
      position: relative;
      display: flex;
      flex-direction: column;

      height: fit-content;
      width: 100vw;
      background-color: white;
      padding-bottom: calc(20 / 75) + rem;
      margin-bottom: calc(20 / 75) + rem;

      .authority-title-container {
        position: relative;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: bold;
        color: #000000;
        font-size: calc(18 / 37.5) + rem;
        font-family: Microsoft Yahei;
        margin-left: 0.2866665rem; //该数值是从拿来的top-info-left-container
        margin-top: 0.56rem;
      }
      .company-profile-bcg {
        position: relative;
        box-sizing: border-box;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }

    //工具栏
    .tool-bar-container {
      position: relative;
      display: flex;
      flex-direction: row;
      height: calc(113 / 75) + rem;
      width: 100%;
      background-color: white;
      .tool-bar-wrapper {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        height: calc(113 / 75) + rem;
        width: 100%;
        background-color: white;
        border-top: 2px solid #b4b4b4;
        border-top-width: calc(2 / 75) + rem;
        .left-favor-container {
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: center;

          width: calc(379 / 75) + rem;
          height: 100%;
          .favor-img-text-container {
            position: relative;
            display: flex;
            flex-direction: column;

            height: fit-content;
            // width: calc(40 / 75) + rem;
            width: fit-content;
            margin-left: calc(97 / 75) + rem;
            .favor-img-container {
              position: relative;
              display: flex;
              flex-direction: column;

              width: calc(40 / 75) + rem;
              height: calc(40 / 75) + rem;
              .favor-img {
                height: 100%;
                width: 100%;

                background-image: url(@/assets/img/favour-img.png);
                background-repeat: no-repeat;
                background-size: 100% 100%;
              }
            }
            .favor-text-container {
              margin-top: calc(13 / 75) + rem;
              font-size: calc(20 / 75) + rem;
              font-family: 'SourceHanSansCN';
              font-weight: 400;
              color: #000000;
              white-space: nowrap;
            }
          }
          .consult-img-text-container {
            position: relative;
            display: flex;
            flex-direction: column;

            height: fit-content;
            // width: calc(40 / 75) + rem;
            width: fit-content;

            margin-left: calc(137 / 75) + rem;

            .consult-img-container {
              position: relative;
              display: flex;
              flex-direction: column;

              width: calc(40 / 75) + rem;
              height: calc(40 / 75) + rem;
              .consult-img {
                height: 100%;
                width: 100%;

                background-image: url(@/assets/img/consult-img.png);
                background-repeat: no-repeat;
                background-size: 100% 100%;
              }
            }
            .consult-text-container {
              margin-top: calc(13 / 75) + rem;

              font-size: calc(20 / 75) + rem;
              font-family: 'SourceHanSansCN';
              font-weight: 400;
              color: #000000;
              white-space: nowrap;
            }
          }
        }
        .right-order-container {
          position: relative;
          display: flex;
          align-items: center;
          height: 100%;
          width: calc(371 / 75) + rem;
          .order-button-container {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: calc(345 / 75) + rem;
            height: calc(78 / 75) + rem;
            background: #fe6635;
            border-radius: calc(39 / 75) + rem;
            .order-button-text {
              font-size: calc(30 / 75) + rem;
              font-family: SourceHanSansCN;
              font-weight: 400;
              color: #ffffff;
            }
          }
        }
      }
    }
  }
}
</style>
