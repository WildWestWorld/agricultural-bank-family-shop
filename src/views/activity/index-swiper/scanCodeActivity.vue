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
      <JKNavigator title="社群福利" color="white"></JKNavigator>
    </div>
    <div class="content">
      <!-- 门店福利 -->
      <div class="search-group-info-container">
        <!-- 门店福利头部文字标题 -->
        <div class="search-group-info-wrapper">
          <div class="select-group-title-text-container">
            请选择/搜索你想加入的门店群
          </div>
          <!-- 门店福利搜索框 -->

          <div class="select-group-container">
            <div class="select-group-wrapper">
              <div class="location-text-icon-container">
                <div class="localtion-text-container">杭州</div>
                <div class="down-arrow-icon-container">
                  <div class="down-arrow-icon-wrapper">
                    <div class="down-arrow-icon"></div>
                  </div>
                </div>
              </div>
              <div class="select-group-text-icon-container">
                <div class="select-group-icon-container">
                  <div class="select-group-icon-wrapper">
                    <div class="select-group-icon"></div>
                  </div>
                </div>
                <div class="select-group-text-container">
                  杭州 麦丰家装（城西店）
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 二维码图片 -->
      <div class="scan-code-activity-bcg-container">
        <div class="scan-code-activity-bcg"></div>
      </div>
    </div>
    <!-- <JKDialog></JKDialog> -->
  </div>
</template>

<script>
import JKNavigator from '@/components/common/jk-navigator/JKNavigator.vue';
import JKDialog from '@/components/common/jk-dialog/JKDialog.vue';

export default {
  name: 'companyProfile',
  components: {
    JKNavigator,
    JKDialog,
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
    flex: 1;
    padding-bottom: calc(96.5 / 75) + rem;
    // 门店福利

    .search-group-info-container {
      position: relative;
      display: flex;
      flex-direction: column;
      height: calc(148 / 75) + rem;
      width: 100%;

      background-color: white;
      .search-group-info-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;

        margin-left: calc(33 / 75) + rem;
        .select-group-title-text-container {
          position: relative;
          display: flex;
          flex-direction: row;

          font-size: calc(30 / 75) + rem;

          margin-left: calc(10 / 75) + rem;
          margin-top: calc(15 / 75) + rem;
        }
        .select-group-container {
          position: relative;
          display: flex;
          flex-direction: row;
          height: calc(85 / 75) + rem;
          width: 100%;
          .select-group-wrapper {
            position: relative;
            display: flex;
            flex-direction: row;

            height: 100%;
            width: 100%;

            margin-top: calc(15 / 75) + rem;
            .location-text-icon-container {
              position: relative;
              display: flex;
              width: calc(122 / 75) + rem;
              height: calc(67 / 75) + rem;
              justify-content: center;
              align-items: center;

              background-color: #f6f6f6;
              border-top-left-radius: calc(33 / 75) + rem;
              border-bottom-left-radius: calc(33 / 75) + rem;

              .localtion-text-container {
                font-size: calc(26 / 75) + rem;
              }
              .down-arrow-icon-container {
                position: absolute;
                left: 0;
                top: 0;

                height: calc(11.1 / 75) + rem;
                width: calc(17.3 / 75) + rem;

                margin-top: calc(28 / 75) + rem;
                margin-left: calc(91.8 / 75) + rem;
                .down-arrow-icon-wrapper {
                  position: relative;
                  left: 0;
                  top: 0;
                  //   margin-left: calc(91.8 / 75) + rem;

                  height: calc(11.1 / 75) + rem;
                  width: calc(17.3 / 75) + rem;
                  .down-arrow-icon {
                    height: 100%;
                    width: 100%;

                    background-image: url('@/assets/img/down-arrow.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                }
              }
            }
            .select-group-text-icon-container {
              position: relative;
              display: flex;
              flex-direction: row;
              height: calc(67 / 75) + rem;
              width: calc(561 / 75) + rem;
              min-width: calc(561 / 75) + rem;

              border-top-right-radius: calc(33 / 75) + rem;
              border-bottom-right-radius: calc(33 / 75) + rem;

              background-color: #f6f6f6;
              margin-left: calc(4 / 75) + rem;
              .select-group-icon-container {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;

                width: calc(62 / 75) + rem;
                height: 100%;
                .select-group-icon-wrapper {
                  position: relative;
                  width: calc(29 / 75) + rem;
                  height: calc(29 / 75) + rem;
                  margin-left: calc(15 / 75) + rem;
                  .select-group-icon {
                    height: 100%;
                    width: 100%;

                    background-image: url('@/assets/img/search-icon.png');
                    background-repeat: no-repeat;
                    background-size: 100%;
                  }
                }
              }
              .select-group-text-container {
                position: relative;
                display: flex;
                align-items: center;
                font-size: calc(26 / 75) + rem;
              }
            }
          }
        }
      }
    }
    // 二维码背景图片
    .scan-code-activity-bcg-container {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      height: calc(1077 / 75) + rem;
      padding-bottom: calc(96.5 / 75) + rem;

      flex: 1;
      //   flex: 1;
      .scan-code-activity-bcg {
        position: absolute;

        left: 0;
        top: 0;

        width: 100%;
        height: 100%;

        background-image: url('@/assets/img/scan-code-activity-bcg-new.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
    }
  }
}
</style>
