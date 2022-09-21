<template>
  <div
    :class="
      isDialogShow
        ? 'dialog-container containerShow'
        : 'dialog-container containerHidden'
    "
  >
    <!-- 对话框出现时黑色的背景 -->
    <div class="dialog-bgc"></div>

    <!-- 对话框 -->

    <div
      :class="!isDialogShow ? 'dialog-wrapper show' : 'dialog-wrapper hidden'"
    >
      <!-- 对话框的头部 -->
      <div class="dialog-head-container">
        <div
          class="close-button-container"
          @click="changeIsDialogShowState(false)"
        >
          x
        </div>
      </div>
      <!-- 对话框的内容 -->
      <div class="dialog-content-container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JKDialog',

  //   props区
  props: {},
  //变量区
  data() {
    return {
      isDialogShow: false,
    };
  },
  //生命周期区
  mounted() {
    let timer = null;
    timer = setTimeout(() => {
      this.isDialogShow = true;
      clearTimeout(timer);
      timer = null;
    }, 1);

    // this.JKTest();
  },
  //方法区
  methods: {
    changeIsDialogShowState(flag) {
      console.log(flag);
      this.isDialogShow = flag;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dialog-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  //设置动画的时长
  transition: 1s;
  z-index: 999;
  &.containerShow {
    visibility: visible;
    opacity: 100;
  }
  &.containerHidden {
    visibility: hidden;
    opacity: 0;
  }
  //   对话框的背景色
  .dialog-bgc {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.3);
  }
  //   对话框主体的容器
  .dialog-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 50vw;
    width: 50vw;
    background-color: white;
    border-radius: calc(20 / 75) + rem;
    // 头部
    .dialog-head-container {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      height: calc(90 / 75) + rem;
      .close-button-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        width: calc(60 / 75) + rem;
        height: calc(60 / 75) + rem;
        margin-right: calc(20 / 75) + rem;

        background-color: black;
        color: white;
        border-radius: calc(15 / 75) + rem;

        font-size: calc(30 / 75) + rem;
      }
    }
    // 内容
    .dialog-content-container {
      position: relative;
      height: 100%;
      font-size: calc(20 / 75) + rem;
    }
    // 当对话框 显现 的时候使用的样式
    &.show {
      // 当对话框显现 的时候 会回到原点
      //与 hidden样式结合时，展现时 会让人感觉对话框向上移动了10%
      // 隐藏时会让人感觉对话框向下移动了10% 距离 并且隐藏
      transform: translateY(0%);
    }
    // 当对话框 隐藏 的时候使用的样式
    &.hidden {
      // 隐藏时默认的是往下 移动10%的距离
      //   transform: translateY(10%);
      transform: translateY(0%);
    }
  }
}
</style>
