<template>
  <div class="discount-list-card-container">
    <!-- 左边的图片 -->
    <div class="left-img-container">
      <div class="left-img-wrapper">
        <div class="left-img"></div>
      </div>
    </div>
    <!-- 右边的信息和按钮 -->
    <div class="right-text-button-container">
      <div class="info-container">
        <div class="title-text-container">装修基材大礼包</div>
        <div class="discount-text-container">
          <div class="now-price-text-container">￥9.9</div>
          <div class="before-price-text-container">￥2000</div>
        </div>
      </div>
      <div class="buy-sale-container">
        <div class="button-container">立即购买</div>
        <div class="sale-num-container">已售100</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'discountListCard',
  props: {},
  computed: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
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
    align-items: center;
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
      margin-top: calc(11 / 75) + rem;

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
</style>
