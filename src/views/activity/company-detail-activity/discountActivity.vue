<template>
  <div class="page-wrapper">
    <div class="header">
      <!-- 导航栏 -->

      <JKNavigator title="优惠活动"></JKNavigator>
    </div>
    <div class="content">
      <!-- 对话框 -->
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
              为了便于您使用该商家的服务，农业银行会将您的一下信息传递给该商户。您通过该商户服务页面主动提供给该商户的个人信息，相关客户信息保护责任该商户承担。<br />
              ·所属用户机构号<br />
              ·用户标识<br />
              ·电话号码：137*****047
            </div>
          </div>
        </div>
      </JKDialog>

      <!-- 背景颜色 -->
      <div class="content-bgc"></div>

      <div class="discount-list-container">
        <div class="discount-list-wrapper">
          <DiscountListCard
            title="环保健康家60㎡（两室两厅一厨一卫）"
            nowPrice="69800"
            beforePrice="129800"
            @activeDialogFromFather="activeDialog"
          ></DiscountListCard>
          <DiscountListCard
            title="环保定制家90㎡（三室两厅一厨一卫）"
            beforePrice="208800"
            nowPrice="108800"
            @activeDialogFromFather="activeDialog"
          ></DiscountListCard>
          <DiscountListCard
            title="预约报名礼:到店送周年庆精美礼品一份"
            nowPrice="0"
            beforePrice="9.9"
            @activeDialogFromFather="activeDialog"
          ></DiscountListCard>
          <DiscountListCard
            title="量房礼包:上门量房，送1999元前置净水礼包"
            nowPrice="9.9"
            beforePrice="39.9"
            @activeDialogFromFather="activeDialog"
          ></DiscountListCard>
          <DiscountListCard
            title="下定满5000元送全屋窗帘和喜临门床垫一张"
            nowPrice="0"
            beforePrice="5000"
            @activeDialogFromFather="activeDialog"
          ></DiscountListCard>
          <DiscountListCard
            title="下定享周年庆工程款补贴封顶10000元 "
            nowPrice="0"
            beforePrice="10000"
            @activeDialogFromFather="activeDialog"
          ></DiscountListCard>
          <DiscountListCard
            title="签定合同享价值5800元松下全智能马桶免费升级"
            nowPrice="0"
            beforePrice="5800"
            @activeDialogFromFather="activeDialog"
          ></DiscountListCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JKNavigator from '@/components/common/jk-navigator/JKNavigator.vue';
import DiscountListCard from '../../../components/activity/discount-activity/discount-list/discountListCard.vue';
import JKDialog from '@/components/common/jk-dialog/JKDialog.vue';

export default {
  name: 'companyProfile',
  components: {
    JKNavigator,
    DiscountListCard,
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
    activeDialog() {
      //   console.log(this.$refs.dialog);
      this.$refs.dialog.changeIsDialogShowState(true);
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
    // flex: 1;
    flex-direction: column;
    height: fit-content;
    width: 100vw;

    padding-bottom: calc(96.5 / 75) + rem;

    // background-image: url('@/assets/img/company-profile.png');
    // background-repeat: no-repeat;
    // background-size: 100% 100%;

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

    // 设置背景
    .content-bgc {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: white;
    }
    .discount-list-container {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      .discount-list-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        margin-top: calc(32 / 75) + rem;
        .discount-list-card-container {
          position: relative;
          display: flex;
          flex-direction: row;
          width: 100vw;
          height: calc(160 / 75) + rem;
          &::after {
            left: 50%;
            bottom: 0;
            position: absolute;
            display: block;
            background-color: #d6d6d6;
            content: '';
            height: calc(2 / 75) + rem;
            width: calc(633 / 75) + rem;

            transform: translateX(-50%);
            z-index: 100;
          }
          .left-img-container {
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            // align-items: center;
            width: calc(160 / 75) + rem;

            height: 100%;
            .left-img-wrapper {
              position: relative;
              width: calc(128 / 75) + rem;
              height: calc(128 / 75) + rem;
              .left-img {
                width: 100%;
                height: 100%;

                background-image: url(@/assets/img/discount-card-img.png);
                background-repeat: no-repeat;
                background-size: 100% 100%;
              }
            }
          }
          .right-text-button-container {
            position: relative;
            display: flex;
            flex-direction: row;
            width: fit-content;

            margin-top: calc(14 / 75) + rem;
            .info-container {
              position: relative;
              display: flex;
              flex-direction: column;

              width: calc(340 / 75) + rem;
              margin-left: calc(20 / 75) + rem;
              .title-text-container {
                position: relative;
                font-size: calc(30 / 75) + rem;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-family: SourceHanSansCN;
                font-weight: bold;
                color: #000000;
                margin-top: calc(11 / 75) + rem;
              }
              .discount-text-container {
                position: relative;
                display: flex;
                flex-direction: row;
                margin-top: calc(6 / 75) + rem;
                .now-price-text-container {
                  color: #ff6133;
                  font-size: calc(30 / 75) + rem;
                }
                .before-price-text-container {
                  font-size: calc(30 / 75) + rem;
                  font-family: SourceHanSansCN;
                  font-weight: 400;
                  color: #747474;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;

                  text-decoration: line-through;

                  margin-left: calc(18 / 75) + rem;
                }
              }
            }
            .buy-sale-container {
              position: relative;
              display: flex;
              flex-direction: column;
              height: 100%;
              .button-container {
                position: relative;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                width: calc(96 * 2 / 75) + rem;
                height: calc(23 * 2 / 75) + rem;

                background-color: #fb6835;
                border-radius: calc(20 / 75) + rem;

                font-size: calc(22 / 75) + rem;
                font-family: SourceHanSansCN;
                font-weight: 400;
                color: #ffffff;
              }
              .sale-num-container {
                position: relative;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                margin-top: calc(9 / 75) + rem;
                font-size: 0.267rem;
                font-family: SourceHanSansCN;
                font-weight: 400;
                color: #747474;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              }
            }
          }
        }
      }
    }
  }
}
</style>
