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
      <JKNavigator title="优惠券"></JKNavigator>
    </div>
    <div class="content">
      <!-- 奖券TabList -->
      <ticketTabList>
        <div slot="item0">
          <!-- 奖券TabList内容 -->
          <ticket-type-tab-list>
            <div slot="ticket-info-item0">
              <empty-ticket-tips></empty-ticket-tips>
            </div>
            <div slot="ticket-info-item1">
              <empty-ticket-tips></empty-ticket-tips>
            </div>
            <div slot="ticket-info-item2">
              <empty-ticket-tips></empty-ticket-tips>
            </div>
            <div slot="ticket-info-item3">
              <empty-ticket-tips></empty-ticket-tips>
            </div>
          </ticket-type-tab-list>
        </div>

        <div slot="item1">
          <!-- 奖券TabList内容 -->
          <ticket-type-tab-list>
            <div slot="ticket-info-item0">
              <empty-ticket-tips></empty-ticket-tips>
            </div>
            <div slot="ticket-info-item1">
              <empty-ticket-tips></empty-ticket-tips>
            </div>
            <div slot="ticket-info-item2">
              <empty-ticket-tips></empty-ticket-tips>
            </div>
            <div slot="ticket-info-item3">
              <empty-ticket-tips></empty-ticket-tips>
            </div>
          </ticket-type-tab-list>
        </div>
      </ticketTabList>
    </div>
  </div>
</template>

<script>
import JKNavigator from "@/components/common/jk-navigator/JKNavigator.vue";
import TicketTabList from "@/components/ticket-center/ticket-tab-list/ticketTabList.vue";
import TicketTypeTabList from "@/components/ticket-center/ticket-tab-list/ticketTypeTabList.vue";
import EmptyTicketTips from "@/components/ticket-center/ticket-tab-list/emptyTicketTips.vue";

export default {
  name: "companyProfile",
  components: {
    JKNavigator,
    TicketTabList,
    TicketTypeTabList,
    EmptyTicketTips,
  },
  //变量区
  data() {
    return {
      ticketTypeData: [
        { name: "可使用" },
        { name: "待返现" },
        { name: "已使用" },
        { name: "已失效" },
      ],
      activeTicketTypeIndex: 0,
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
    changeActiveTicketTypeIndex(index) {
      let activeIndex = this.activeTicketTypeIndex;
      if (activeIndex !== index) {
        this.activeTicketTypeIndex = index;
      }
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

    /* 奖券内容 (已转移到ticketTypeTabList)*/
    .ticket-content-container {
      position: relative;
      display: flex;
      flex-direction: column;
      height: calc(1115 / 75) + rem;
      width: 100vw;
      /* 上面的奖券类型按钮 */
      .ticket-type-button-container {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;

        width: 100%;
        height: calc(82 / 75) + rem;
        .ticket-type-button-wrapper {
          position: relative;
          display: flex;
          flex-direction: row;
          justify-content: space-around;

          width: calc(698 / 75) + rem;
          /* height: calc(60 / 75) + rem; */

          /* margin-top: calc(22 / 75) + rem; */
          .ticket-type-button {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;

            width: calc(140 / 75) + rem;
            height: calc(60 / 75) + rem;

            border: 2px solid #f2f2f2;
            border-width: calc(2 / 75) + rem;

            border-radius: calc(29 / 75) + rem;

            font-size: calc(28 / 75) + rem;
            font-family: "SourceHanSansCN";
            font-weight: 400;
            color: #949494;
          }
          .active {
            border: 2px solid #fa6a39;
            border-width: calc(2 / 75) + rem;
            background: rgba(251, 237, 224, 0.6);
            color: #fa6a39;
          }
        }
      }
      /* 下面类型按钮内容 */
      .ticket-info-container {
        position: relative;
        display: flex;
        flex-direction: column;

        height: calc(1033 / 75) + rem;
        width: 100%;
        .ticket-info-item-container {
          position: relative;
          display: none;
          height: 100%;
          width: 100%;
          .ticket-info-item-content {
            position: relative;
            height: 100%;
            width: 100%;
          }
        }
        .active {
          display: block;
        }
      }
    }
    /* 未发现优惠券时的提示(已转移到emptyTicketTips) */
    .empty-ticket-tips-container {
      position: relative;
      display: flex;
      flex-direction: column;
      height: calc(733 / 75) + rem;
      width: 100%;
      .tips-img-text-container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: calc(638 / 75) + rem;
        width: 100%;
        .tips-img-container {
          position: relative;
          height: calc(565 / 75) + rem;
          width: calc(565 / 75) + rem;

          margin-top: calc(40 / 75) + rem;
          .tips-img {
            height: 100%;
            width: 100%;

            background-image: url("@/assets/img/empty-ticket-img.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
        }
        .tips-text-container {
          font-size: calc(28 / 75) + rem;
          font-family: SourceHanSansCN;
          font-weight: 400;
          color: #949494;
        }
      }
      .tips-button-container {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;

        height: calc(95 / 75) + rem;
        width: 100%;
        .tips-button-wrapper {
          position: relative;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          width: calc(251 / 75) + rem;
          height: calc(64 / 75) + rem;
          background: linear-gradient(53deg, #f1a961, #f08855);
          border-radius: calc(32 / 75) + rem;

          margin-top: calc(31 / 75) + rem;

          .tips-button-text {
            font-size: calc(28 / 75) + rem;
            font-family: SourceHanSansCN;
            font-weight: 400;
            color: #ffffff;
          }
        }
      }
    }
  }
}
</style>
