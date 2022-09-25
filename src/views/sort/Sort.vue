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

            <div class="test">
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
                  id=heart
                ></path>
              </svg>

              <span></span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JKNavigator from "@/components/common/jk-navigator/JKNavigator.vue";

export default {
  name: "Sort",
  components: {
    JKNavigator,
  },

  //变量区
  data() {
    return {
      test: "123",
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
      console.log("测试一下");
    },

    navToPage(path) {
      this.$router.push("/" + path);
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
                background-image: url("@/assets/img/nav-left-arrow.png");
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
              font-family: "SourceHanSansCN-Medium";
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

          .test {
            position: relative;
            display: flex;

            justify-content: center;
            align-items: center;

              width: calc(40 / 75) + rem;
              height: calc(40 / 75) + rem;
            /* 自定义属性 用var函数进行调用 */
            --heart-stroke-color: yellow;
            svg {
              position: relative;
              width: 50vw;
              z-index: 10; 
            }
            #heart {
              fill: #eee;
              /* svg形状的边框颜色 */
              stroke: black;
              /* stroke: var(--heart-stroke-color); */

              /* svg形状边框的宽度 */
              stroke-width: 40px;

              /* 我们可以设置stroke-dashoffset与stroke-dasharray相同的值实现“画线”的效果： */

              /* svg形状边框线 / 虚线 等比例分割的距离 */
              /*  只有一个值是实线的长度，两个值是 实线的长度和虚线的长度*/
              stroke-dasharray: 4000;

              /*  svg形状边框线 / 虚线 开始的位置 正值就是左移*/
              /* 当stroke-dasharray = stroke-dashoffset时我们就看不见线了，当我们stroke-dashoffset 越来越小，线就开始右移我们就能逐渐看见线了*/
              stroke-dashoffset: 4000;

              /* 设置边框线的首尾的形状 */
              stroke-linecap: round;
            }
            /* 里面的span的内容其实看不见的会被svg图片挡住，我们看到是里面的shadow */
            span {
              display: block;
              height: 24px;
              width: 24px;
              background-color: yellow;
              border-radius: 50%;

              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%) scale(0);
              z-index: 99;

              //盒子阴影  (x的位置,y的位置，blur模糊的大小，阴影的颜色)
              //利用盒子阴影 可以复制和原来的盒子盒子一样的宽高的元素
              box-shadow: 0 -160px 0 var(--heart-stroke-color),
                0 160px 0 var(--heart-stroke-color),
                -160px 0 0 var(--heart-stroke-color),
                160px 0 0 var(--heart-stroke-color),
                -120px -120px 0 var(--heart-stroke-color),
                120px -120px 0 var(--heart-stroke-color),
                120px 120px 0 var(--heart-stroke-color),
                -120px 120px 0 var(--heart-stroke-color);
            }

            svg #heart {
              /* forwards 执行完毕后停在最后一帧 */
              animation: drawHeart 1s linear forwards;
            }
            svg {
              animation: beat 1s linear forwards;
            }
            span {
              animation: blick 0.5s ease-in-out forwards;
              animation-delay: 1s;
            }
            /* 定义画心动画 */
            @keyframes drawHeart {
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
        }
      }
    }
  }
}
</style>

