<template>
  <div
    class="decoration-type-container"
    @click="navToCompanyDetail()"
    :style="diyStyle"
  >
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
              <img
                class="left-shop-img"
                src="http://p3.music.126.net/wGbO39sAMI9lroiLYXJsDQ==/109951167760004737.jpg?param=400y400"
              />
            </div>
            <div class="right-info-container">
              <div class="name-text-container">
                张家港市杨舍镇塘市美心木门经营部
              </div>

              <div class="address-info-container">
                <div class="address">张家港市杨舍镇南二环路1号</div>
                <div class="distant">13.4km</div>
              </div>
            </div>
          </div>
          <div class="bottom-container"></div>
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
    navToCompanyDetail() {
      this.$router.push('/companyDetail');
      console.log('test');
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

      z-index: 99999;
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
      z-index: 99999;
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
          height: calc(47 / 75) + rem;
        }
        .top-container {
          position: relative;
          height: calc(200 / 75) + rem;
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
            // font-size: 10px;
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
          }
        }

        .bottom-container {
          box-sizing: border-box;
          position: relative;
          height: calc(113.9 / 75) + rem;
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
                border-top-width: calc(12 / 75) + rem;

                //   border-left: 12px solid blue;
                border-bottom: 12px solid transparent;
                border-bottom-width: calc(12 / 75) + rem;
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
</style>
