<template>
  <div class="page-wrapper">
    <div class="header">
      <!-- 导航栏 -->

      <JKNavigator title="猜你喜欢"></JKNavigator>
    </div>
    <div class="content">
      <div class="content-wrapper">
        <RecommendCard></RecommendCard>
        <RecommendCard></RecommendCard>
        <RecommendCard></RecommendCard>
        <RecommendCard></RecommendCard>
        <RecommendCard></RecommendCard>
        <RecommendCard></RecommendCard>
      </div>
    </div>
  </div>
</template>

<script>
import JKNavigator from '@/components/common/jk-navigator/JKNavigator.vue';
import RecommendCard from '@/components/guessFavorite/recommendCard.vue';

export default {
  name: 'guessFavorite',
  components: {
    JKNavigator,
    RecommendCard,
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
    height: fit-content;
    width: 100vw;

    padding-bottom: calc(96.5 / 75) + rem;

    // background-image: url('@/assets/img/company-profile.png');
    // background-repeat: no-repeat;
    // background-size: 100% 100%;
    .content-wrapper {
      position: relative;
      width: 100%;
      height: 100%;

      padding-bottom: calc(31 / 75) + rem;
      //   (已转移到guessFavorite/recommendCard下)
      //   .recommend-card-container {
      //     position: relative;
      //     display: flex;
      //     flex-direction: column;
      //     justify-content: center;
      //     align-items: center;

      //     height: calc((182 + 32 * 2) / 75) + rem;
      //     width: 100%;
      //     .recommend-card-wrapper {
      //       position: relative;
      //       display: flex;
      //       flex-direction: row;

      //       width: calc(690 / 75) + rem;
      //       height: calc(182 / 75) + rem;
      //       background: #ffffff;
      //       border-radius: calc(20 / 75) + rem;
      //       .left-img-container {
      //         position: relative;
      //         display: flex;
      //         flex-direction: row;
      //         justify-content: center;
      //         align-items: center;

      //         height: 100%;
      //         width: calc(207 / 75) + rem;
      //         .left-img-wrapper {
      //           position: relative;
      //           width: calc(163 / 75) + rem;
      //           height: calc(121 / 75) + rem;
      //           .left-img {
      //             position: relative;
      //             height: 100%;
      //             width: 100%;

      //             background-image: url(@/assets/img/guess-favorite-img.png);
      //             background-repeat: no-repeat;
      //             background-size: 100% 100%;
      //           }
      //         }
      //       }
      //       .right-info-container {
      //         position: relative;
      //         display: flex;
      //         flex-direction: column;
      //         height: 100%;
      //         width: calc(483 / 75) + rem;

      //         margin-left: calc(22 / 75) + rem;
      //         .right-info-wrapper {
      //           position: relative;
      //           height: 100%;
      //           width: 100%;

      //           .top-title-container {
      //             position: relative;
      //             height: calc(110 / 75) + rem;
      //             width: 100%;
      //             margin-top: calc(24 / 75) + rem;
      //             margin-right: calc(12 / 75) + rem;
      //           }
      //           .top-title-text {
      //             font-size: calc(32 / 75) + rem;
      //             font-family: SourceHanSansCN;
      //             font-weight: 500;
      //             color: #000000;

      //             overflow: hidden;
      //             text-overflow: ellipsis; //当对象内文本溢出时显示省略标记
      //             display: -webkit-box;
      //             -webkit-line-clamp: 2; //这边的2指的是两行
      //             -webkit-box-orient: vertical;
      //           }
      //           .bottom-expire-container {
      //             position: relative;
      //             height: calc(48 / 75) + rem;
      //             width: 100%;
      //             .bottom-expire-data-text {
      //               font-size: calc(24 / 75) + rem;
      //               font-family: SourceHanSansCN;
      //               font-weight: 500;
      //               color: #b1b1b1;
      //             }
      //           }
      //         }
      //       }
      //     }
      //   }
    }
  }
}
</style>
