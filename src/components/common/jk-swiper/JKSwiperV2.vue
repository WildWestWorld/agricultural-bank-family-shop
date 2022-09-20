<template>
  <div
    class="swiper-container"
    @touchstart="stopAutoPlayTimer"
    @touchend="setAutoPlayTimer"
  >
    <div class="swiper-wrapper">
      <div class="swiper-img-container">
        <!--  setItemClass(index) 是方法区的方法 用于 根据index来选择对应的类名-->
        <div
          :class="['swiper-img-wrapper', setItemClassByIndex(index)]"
          v-for="(item, index) of imgList"
          :key="index"
          @click="currentIndex !== index ? changeCurrentIndexState(index) : ''"
        >
          <div
            class="swiper-img"
            :style="`background-image: url(${item});`"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props
  props: {
    imgList: {
      type: Array,
      default: () => {
        return [
          'http://p3.music.126.net/wGbO39sAMI9lroiLYXJsDQ==/109951167760004737.jpg?param=800y800',
          'http://p3.music.126.net/wGbO39sAMI9lroiLYXJsDQ==/109951167760004737.jpg?param=800y800',
          'http://p3.music.126.net/wGbO39sAMI9lroiLYXJsDQ==/109951167760004737.jpg?param=800y800',
          'http://p3.music.126.net/wGbO39sAMI9lroiLYXJsDQ==/109951167760004737.jpg?param=800y800',
          'http://p3.music.126.net/wGbO39sAMI9lroiLYXJsDQ==/109951167760004737.jpg?param=800y800',
          'http://p3.music.126.net/wGbO39sAMI9lroiLYXJsDQ==/109951167760004737.jpg?param=800y800',
        ];
      },
    },
  },
  // 常量区
  data() {
    return {
      list: [
        'http://p3.music.126.net/wGbO39sAMI9lroiLYXJsDQ==/109951167760004737.jpg?param=800y800',
        'http://p3.music.126.net/wGbO39sAMI9lroiLYXJsDQ==/109951167760004737.jpg?param=800y800',
        'http://p3.music.126.net/wGbO39sAMI9lroiLYXJsDQ==/109951167760004737.jpg?param=800y800',
        'http://p3.music.126.net/wGbO39sAMI9lroiLYXJsDQ==/109951167760004737.jpg?param=800y800',
        'http://p3.music.126.net/wGbO39sAMI9lroiLYXJsDQ==/109951167760004737.jpg?param=800y800',
        'http://p3.music.126.net/wGbO39sAMI9lroiLYXJsDQ==/109951167760004737.jpg?param=800y800',
      ],
      timer: null,
      currentIndex: 0,
    };
  },
  //  计算区
  computed: {
    // list的总Index
    listMaxIndex() {
      console.log(this.list.length);
      console.log(this.$props);
      return this.$props.imgList.length - 1;

      //   return this.list.length - 1;
    },
  },
  //生命周期区
  mounted() {
    this.setAutoPlayTimer();
  },
  methods: {
    // 根据Index 设置图片的class名
    setItemClassByIndex(index) {
      // 如果当前的Index 是0
      const prevIndex =
        this.currentIndex == 0 ? this.listMaxIndex : this.currentIndex - 1;
      // 如果index 是最大Index
      const nextIndex =
        this.currentIndex == this.listMaxIndex ? 0 : this.currentIndex + 1;

      // console.log(prevIndex,'prevIndex')
      // console.log(nextIndex,'nextIndex')

      switch (index) {
        case this.currentIndex:
          return 'active';
        case prevIndex:
          return 'prev';
        case nextIndex:
          return 'next';
        default:
          return '';
      }
    },
    // 根据index与CurrentIndex 设置span的背景颜色
    setDotActiveStyl(index) {
      if (index == this.currentIndex) {
        return { backgroundColor: '#D33A31' };
      }
    },

    // 点击改变当前currentIndex
    changeCurrentIndexState(index) {
      console.log(index);
      this.currentIndex = index;
    },
    prev() {
      // 如果当前的index是0 那么就把当前的index设置为list的最大Index 否则就把当前的Index减1
      this.currentIndex == 0
        ? (this.currentIndex = this.listMaxIndex)
        : this.currentIndex--;
    },
    next() {
      // 如果当前的index是list最大Index 那么就把当前的index设置为list的最小Index 0  否则就把当前的Index加1
      this.currentIndex == this.listMaxIndex
        ? (this.currentIndex = 0)
        : this.currentIndex++;
    },
    setAutoPlayTimer() {
      this.timer = setInterval(() => {
        this.prev();
      }, 3000);
    },
    stopAutoPlayTimer() {
      clearInterval(this.timer);
      this.timer = null;
    },
  },
};
</script>

<style scoped lang="scss">
.swiper-container {
  position: relative;
  width: 100vw;
  height: calc(352 / 75) + rem;
  //   margin-top: calc(50 / 75) + rem;
  //   user-select: none;
  .swiper-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    //设置变化的方式是3d
    transform-style: preserve-3d;
    .swiper-img-container {
      position: relative;
      width: calc(671 / 75) + rem;
      height: 100%;
      .swiper-img-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        //  只有Z轴向后移动了-300px
        transform: translate3d(0%, 0%, calc(-300 / 75) + rem);
        // 设置动画的时间 ，选择的类型，以及动画速度的控制
        // ease-in-out：开始慢，但是匀加速到一个速度大概时间到1/3的时候就保持这个速度直到最后1/3时间再均匀减速。
        transition: all 0.6s ease-in-out;
        display: none;
        .swiper-img {
          position: relative;
          width: 100%;
          height: 100%;

          background-repeat: no-repeat;
          background-size: 100% 100%;

          border-radius: calc(43 / 75) + rem;
        }
      }
      .prev {
        // 正的是往前
        // 671 是图片的宽度，移动这个是为了让后一张图片移出来 22.1 是两张照片的间距
        //-200 是Z轴的移动 z轴的大小差不多等于 z-index
        transform: translate3d(
          calc((671 + 22.1) / 75) + rem,
          0,
          calc(-200 / 75) + rem
        );
        transform-origin: left;
        display: block;
      }
      .next {
        // 671 是图片的宽度，移动这个是为了让前一张图片移除来 22.1 是两张照片的间距
        transform: translate3d(
          calc((-671 - 22.1) / 75) + rem,
          0,
          calc(-100 / 75) + rem
        );
        transform-origin: right;
        display: block;
      }
      .active {
        transform: translate3d(0, 0, 0);
        display: block;
      }
      // .swiper-item-img {
      //   position: relative;
      //   width: 100%;
      //   height: 100%;

      //   background-repeat: no-repeat;
      //   background-size: 100% 100%;
      // }
    }
  }
}
</style>
