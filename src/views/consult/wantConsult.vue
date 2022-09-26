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
      <JKNavigator title="真实案例"></JKNavigator>
    </div>
    <div class="content">
      <div class="consult-container">
        <div class="consult-button-container">
          <div
            class="company-profile-button-container"
            @click="navToPage('designerExample')"
          >
            <div class="company-profile-text">
              【中博案例】118方现代风格设计，用极简的配色，勾勒美好时尚的新生活！
            </div>
          </div>

          <div
            class="selct-designer-button-container"
            @click="navToPage('designerExample2')"
          >
            <div class="selct-designer-text">
              【中博设计】190方现代法式，把极简融入生活！
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
  name: 'wantConsulit',
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
    navToPage(path) {
      this.$router.push('/' + path);
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
    height: calc(1206 / 75) + rem;
    width: 100vw;
    flex: 1;
    padding-bottom: calc(96.5 / 75) + rem;

    // background-image: url('@/assets/img/company-profile.png');
    // background-repeat: no-repeat;
    // background-size: 100% 100%;
    .consult-container {
      position: relative;
      display: flex;
      flex-direction: row;
      height: calc(1207.05 / 75) + rem;
      width: 100vw;

      flex: 1;

      background-image: url(@/assets/img/want-consult-img.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      .consult-button-container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: calc(462.9 / 75) + rem;
        width: 100%;
        .company-profile-button-container {
          position: relative;
          display: flex;

          justify-content: center;
          align-items: center;

          height: calc(77.3 / 75) + rem;
          //   width: calc(477.7 / 75) + rem;
          width: calc(720 / 75) + rem;

          margin-top: calc(217.6 / 75) + rem;
          padding-left: calc(10 / 75) + rem;
          padding-right: calc(10 / 75) + rem;

          background: linear-gradient(0deg, #ff6d00, #ed6700);
          border: 4px solid #ffffff;
          border-width: calc(4 / 75) + rem;
          box-shadow: 0px calc(12 / 75) + rem calc(29 / 75) + rem 0px #000000;

          border-radius: calc(40 / 75) + rem;
          .company-profile-text {
            // font-size: calc(48 / 75) + rem;
            font-size: calc(20 / 75) + rem;
            // white-space: nowrap;
            font-family: HappyZcool-2016;
            font-weight: 400;
            color: #ffffff;
            // text-shadow: 0px calc(5 / 75) + rem calc(5 / 75) + rem #000000;
          }
        }
        .selct-designer-button-container {
          position: relative;
          display: flex;

          justify-content: center;
          align-items: center;

          height: calc(77.3 / 75) + rem;
          //   width: calc(477.7 / 75) + rem;
          width: calc(720 / 75) + rem;

          margin-top: calc(90.7 / 75) + rem;
          padding-left: calc(10 / 75) + rem;
          padding-right: calc(10 / 75) + rem;
          background: linear-gradient(0deg, #ff6d00, #ed6700);
          border: 4px solid #ffffff;
          border-width: calc(4 / 75) + rem;
          box-shadow: 0px calc(12 / 75) + rem calc(29 / 75) + rem 0px #000000;

          border-radius: calc(40 / 75) + rem;
          .selct-designer-text {
            // font-size: calc(48 / 75) + rem;
            font-size: calc(20 / 75) + rem;

            font-family: HappyZcool-2016;
            font-weight: 400;
            color: #ffffff;
            // text-shadow: 0px calc(5 / 75) + rem calc(5 / 75) + rem #000000;
          }
        }
      }
    }
  }
}
</style>
