<template>
  <div class="decoration-type-container" :style="diyStyle">
    <div
      :class="
        isShowTopLine
          ? 'company-container top-border'
          : 'company-container bottom-border'
      "
    >
      <div class="company-item-container">
        <div class="company-item">
          <div class="empty-top-padding-container"></div>
          <div class="top-container">
            <div class="left-img-container">
              <img class="left-shop-img" src="@/assets/img/zhong-bo-logo.png" />
            </div>
            <div class="right-info-container">
              <div class="name-text-container">中博家居</div>

              <div class="address-info-container">
                <div class="address">天城路86号中博家居广场</div>
              </div>
              <div class="distant-container">与我相距1.4km</div>
            </div>
          </div>
          <div class="bottom-container">
            <div class="bottom-wrapper">
              <div class="button-container">
                <div
                  class="button-text-container"
                  @click="navToPage('guessFavorite')"
                >
                  我要领券
                </div>
              </div>
              <div class="button-container">
                <div
                  class="button-text-container"
                  @click="navToPage('wantConsult')"
                >
                  我要咨询
                </div>
              </div>
              <div class="button-container">
                <div
                  class="button-text-container"
                  @click="navToPage('lastActivity')"
                >
                  最近活动
                </div>
              </div>
              <div class="button-container">
                <div
                  class="button-text-container"
                  @click="navToPage('designerExample')"
                >
                  样板展示
                </div>
              </div>
              <div class="button-container">
                <div class="button-text-container">我要购买</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bandListCard',
  props: {
    totalwidth: { type: String, default: '100vw- 0.67rem' },
    radius: { type: String, default: '0.6rem' },
    isShowTopLine: { tyoe: Boolean, default: true },
  },
  computed: {
    diyStyle() {
      let style = {
        width: this.$props.totalwidth,
        borderRadius: this.$props.radius,
      };
      return style;
    },
  },
  data() {
    return {};
  },
  methods: {
    navToPage(path) {
      this.$router.push('/' + path);
    },
  },
};
</script>

<style scoped lang="scss">
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
    &.top-border::before {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      content: '';
      position: absolute;
      //   display: none;
      display: block;
      width: calc(633 / 75) + rem;
      height: calc(2 / 75) + rem;
      background-color: rgba($color: #eeeeee, $alpha: 1);
      //top: -0.4547rem;
      //   margin: 0 auto;

      z-index: 100;
    }
    &.bottom-border::after {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      content: '';
      position: absolute;
      display: block;
      width: calc(633 / 75) + rem;
      height: calc(2 / 75) + rem;
      background-color: rgba($color: #eeeeee, $alpha: 1);
      //top: -0.4547rem;
      //   margin: 0 auto;
      z-index: 100;
    }
    .company-item-container {
      position: relative;
      height: calc(361 / 75) + rem;
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
          display: none;

          //   display: block;
          width: calc(633 / 75) + rem;
          height: calc(2 / 75) + rem;
          background-color: rgba($color: #eeeeee, $alpha: 1);
          //top: -0.4547rem;
          margin: 0 auto;
          z-index: 99999;
        }
        .empty-top-padding-container {
          min-height: calc(47 / 75) + rem;
        }
        .top-container {
          position: relative;
          height: calc(236.4 / 75) + rem;
          width: 100%;
          display: flex;
          flex-direction: row;
          max-width: 100%;

          .left-img-container {
            position: relative;
            width: calc(245.5 / 75) + rem;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: flex-start;

            .left-shop-img {
              width: calc(200 / 75) + rem;
              height: calc(200 / 75) + rem;
              border-radius: calc(20 / 75) + rem;
            }
          }

          .right-info-container {
            box-sizing: border-box;
            position: relative;
            display: flex;
            flex-direction: column;

            padding-left: calc(36 / 75) + rem;
            // font-size: 10px;
            width: calc(453 / 75) + rem;
            max-width: calc(511 / 75) + rem;

            .name-text-container {
              position: relative;

              overflow: hidden;
              text-overflow: ellipsis; //当对象内文本溢出时显示省略标记
              display: -webkit-box;
              -webkit-line-clamp: 2; //这边的2指的是两行
              -webkit-box-orient: vertical;

              font-family: SourceHanSansCN;
              font-weight: bold;
              color: #000000;

              max-width: calc(388 / 75) + rem;
              font-size: calc(26 / 75) + rem;

              margin-top: calc(21 / 75) + rem;
            }

            .address-info-container {
              position: relative;
              display: flex;
              width: calc(386 / 75) + rem;
              margin-top: calc(19 / 75) + rem;

              .address {
                font-size: 0.267rem;
                font-family: SourceHanSansCN;
                font-weight: 400;
                color: #747474;

                overflow: hidden;
                text-overflow: ellipsis; //当对象内文本溢出时显示省略标记
                display: -webkit-box;
                -webkit-line-clamp: 2; //这边的2指的是两行
                -webkit-box-orient: vertical;

                max-width: calc(386 / 75) + rem;
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
            .distant-container {
              margin-top: calc(20 / 75) + rem;

              font-size: calc(18 / 75) + rem;
              font-family: SourceHanSansCN;
              font-weight: 400;
              color: #747474;
            }
          }
        }

        .bottom-container {
          box-sizing: border-box;
          position: relative;
          height: calc(79.5 / 75) + rem;
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 100%;
          max-width: 100%;
          .bottom-wrapper {
            width: calc(649 / 75) + rem;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            .button-container {
              position: relative;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              width: calc(121 / 75) + rem;
              height: calc(41 / 75) + rem;
              background: #00995a;
              border-radius: calc(20 / 75) + rem;
              .button-text-container {
                font-size: calc(22 / 75) + rem;
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
}
</style>
