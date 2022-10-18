<template>
  <!-- 会blick的星星 -->
  <div class="favourite-img-container" @click="changeIsNewFavorState()">
    <!-- <div class="favourite-img"></div> -->
    <svg
      t="1664102717928"
      :class="setStarContainerAniClass"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="3824"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M946.44567 407.179676c-3.706415-11.056823-13.268188-19.154245-24.823362-20.929682l-263.117606-40.614L540.930913 93.91802c-5.108345-10.93198-16.071024-17.939581-28.155247-17.971303-0.030699 0-0.062422 0-0.062422 0-12.021801 0-22.985504 6.945179-28.155247 17.84646L365.79001 345.247138l-263.917832 39.507806c-11.399631 1.961678-20.774139 10.060123-24.355711 21.054525-3.613294 10.963703-0.778736 23.047926 7.257288 31.332612l191.202717 196.684568-45.6282 277.132808c-1.930979 11.741415 3.0208 23.608697 12.769838 30.491455 9.717316 6.882757 22.549575 7.630794 32.983205 1.868557l235.366565-129.47177 234.868215 130.282229c4.703115 2.616594 9.904581 3.924379 15.106046 3.924379 6.291287 0 12.551874-1.868557 17.877159-5.699816 9.748015-6.852058 14.763239-18.687618 12.862959-30.460756L747.488339 634.635061l191.669344-195.84341C947.286828 430.476265 950.121386 418.2365 946.44567 407.179676z"
        p-id="3825"
        fill="#bfbfbf"
        :class="setStarAniClass"
      ></path>
    </svg>

    <span :class="setBlickStarAniClass"></span>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'blickStar',

  //   props区
  props: {},
  //变量区
  data() {
    return {
      isNewFavor: this.$store.state.isFavor || false,
      isCanPlayAnimate: false,
      isNeedClickTwice: false,
    };
  },
  computed: mapState({
    // isFreshTabBar: (state) => state.isFreshTabBar,
    isFavor: (state) => state.isFavor,
  }),
  computed: {
    //给Star设置类名
    setStarAniClass() {
      let isNeedClickTwice = this.isNeedClickTwice;

      if (isNeedClickTwice == true) {
        return 'star-acitive';
      } else if (this.$store.state.isFavor) {
        return 'star drawStar';
      } else {
        return 'star';
      }
    },
    //给Star盒子设置类名
    setStarContainerAniClass() {
      let isNeedClickTwice = this.isNeedClickTwice;

      if (isNeedClickTwice == true) {
        return 'star-container';
      } else if (this.$store.state.isFavor) {
        return 'star-container beat';
      } else {
        return 'star-container';
      }
    },
    //给blick-star 动画结束后的散花 设置类名
    //给Star盒子设置类名
    setBlickStarAniClass() {
      let isNeedClickTwice = this.isNeedClickTwice;

      if (isNeedClickTwice == true) {
        return 'blick-star';
      } else if (this.$store.state.isFavor) {
        return 'blick-star blick';
      } else {
        return 'blick-star';
      }
    },
  },
  //生命周期区
  mounted() {
    console.log(this.isNewFavor, 'newFavor');
    let isFavor = this.$store.state.isFavor;
    if (isFavor == true) {
      console.log('需要按两下才会有动画');
      this.isNeedClickTwice = true;
    } else {
      this.isNeedClickTwice = false;
    }
  },
  beforeDestroy() {
    // let isNewFavor = this.isNewFavor;
    // console.log(isNewFavor);
    // this.$store.commit('changeIsFavorState', isNewFavor);
    // localStorage.setItem('isFavor', isNewFavor);
    console.log('leave');
  },
  //方法区
  methods: {
    changeIsNewFavorState() {
      let isFavor = !this.$store.state.isFavor;
      //   this.isNewFavor = isNewFavor;
      //   console.log(this.isNewFavor);
      this.$store.commit('changeIsFavorState', isFavor);
      this.isNeedClickTwice = false;

      //   localStorage.setItem('isFirst', index);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// 星星图标
.favourite-img-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(60 / 75) + rem;
  height: calc(60 / 75) + rem;
  /* 自定义属性 用var函数进行调用 */
  --star-stroke-color: yellow;

  .star-container {
    position: relative;
    width: 100%;
    z-index: 10;
  }
  .star {
    fill: #fefefe;
    /* svg形状的边框颜色 */
    stroke: black;
    /* stroke: var(--heart-stroke-color); */
    /* svg形状边框的宽度 */
    stroke-width: calc(110 / 75) + rem;
    /* 我们可以设置stroke-dashoffset与stroke-dasharray相同的值实现“画线”的效果： */
    /* svg形状边框线 / 虚线 等比例分割的距离 */
    /*  只有一个值是实线的长度，两个值是 实线的长度和虚线的长度*/
    stroke-dasharray: 4000;
    /*  svg形状边框线 / 虚线 开始的位置 正值就是左移*/
    /* 当stroke-dasharray = stroke-dashoffset时我们就看不见线了，当我们stroke-dashoffset 越来越小，线就开始右移我们就能逐渐看见线了*/
    stroke-dashoffset: 0;
    /* 设置边框线的首尾的形状 */
    stroke-linecap: round;
  }
  .star-acitive {
    fill: yellow;
    /* svg形状的边框颜色 */
    stroke: yellow;
    /* stroke: var(--heart-stroke-color); */
    /* svg形状边框的宽度 */
    stroke-width: calc(110 / 75) + rem;
    /* 我们可以设置stroke-dashoffset与stroke-dasharray相同的值实现“画线”的效果： */
    /* svg形状边框线 / 虚线 等比例分割的距离 */
    /*  只有一个值是实线的长度，两个值是 实线的长度和虚线的长度*/
    stroke-dasharray: 4000;
    /*  svg形状边框线 / 虚线 开始的位置 正值就是左移*/
    /* 当stroke-dasharray = stroke-dashoffset时我们就看不见线了，当我们stroke-dashoffset 越来越小，线就开始右移我们就能逐渐看见线了*/
    stroke-dashoffset: 0;
    /* 设置边框线的首尾的形状 */
    stroke-linecap: round;
  }

  /* 里面的span的内容其实看不见的会被svg图片挡住，我们看到是里面的shadow */
  .blick-star {
    display: block;
    height: calc(6 / 75) + rem;
    width: calc(6 / 75) + rem;
    background-color: yellow;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    z-index: 99;
    //盒子阴影  (x的位置,y的位置，blur模糊的大小，阴影的颜色)
    //利用盒子阴影 可以复制和原来的盒子盒子一样的宽高的元素
    box-shadow: 0 calc(-48 / 75) + rem 0 var(--star-stroke-color),
      0 calc(48 / 75) + rem 0 var(--star-stroke-color),
      calc(-48 / 75) + rem 0 0 var(--star-stroke-color),
      calc(48 / 75) + rem 0 0 var(--star-stroke-color),
      calc(-36 / 75) + rem calc(-36 / 75) + rem 0 var(--star-stroke-color),
      calc(36 / 75) + rem calc(-36 / 75) + rem 0 var(--star-stroke-color),
      calc(36 / 75) + rem calc(36 / 75) + rem 0 var(--star-stroke-color),
      calc(-36 / 75) + rem calc(36 / 75) + rem 0 var(--star-stroke-color);
  }
  .drawStar {
    /* forwards 执行完毕后停在最后一帧 */
    animation: drawStar 1s linear forwards;
  }
  .beat {
    animation: beat 1s linear forwards;
  }
  .blick {
    animation: blick 0.5s ease-in-out forwards;
    animation-delay: 0.85s;
  }
  /* 定义正向画心动画 */
  @keyframes drawStar {
    0% {
      /* fill: #eee; */
      stroke: black;
      stroke-dashoffset: 4000;
    }
    /* 划线 */
    80% {
      fill: #eee;
      stroke: yellow;
      stroke-dashoffset: 0;
    }
    /* 划线完毕后,然后让svg背景变红 */
    100% {
      fill: yellow;
      stroke: yellow;
      stroke-dashoffset: 0;
    }
  }
  /* 定义心跳动画 (图形点亮后轻微变大后变回原状)*/
  @keyframes beat {
    0% {
      transform: scale(1);
    }
    70% {
      transform: scale(1);
    }
    80% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  /* 定义点亮动画 */
  /* 这里的translate(-50%, -50%)只是为了保持盒子原来的居中效果，无其他含义 */
  /* 主要效果是scale先变小后变大，让人感觉像是展开 */
  @keyframes blick {
    0% {
      transform: translate(-50%, -50%) scale(0.5);
      opacity: 0.8;
    }
    50% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0;
    }
  }
}
</style>
