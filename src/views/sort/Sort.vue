<template>
  <div class="page">
    <!-- <JKSwiper></JKSwiper> -->
    <JKSwiperV2></JKSwiperV2>
  </div>
</template>

<script>
import JKSwiper from '@/components/common/jk-swiper/JKSwiper.vue';
import JKSwiperV2 from '@/components/common/jk-swiper/JKSwiperV2.vue';
export default {
  name: 'Sort',
  components: { JKSwiper, JKSwiperV2 },
  //变量区
  data() {
    return {
      test: '123',
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
  //   计算区
  computed: {
    // 将list长度 转换为 list的总Index
    listLength() {
      console.log(this.list.length);
      return this.list.length - 1;
    },
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
    // 根据Index 设置图片的class名
    setItemClass(index) {
      // 如果当前的Index 是0
      const prevIndex =
        this.currentIndex == 0 ? this.listLength : this.currentIndex - 1;
      const nextIndex =
        this.currentIndex == this.listLength ? 0 : this.currentIndex + 1;

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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page {
  box-sizing: border-box;
  position: relative;
  height: fit-content;
  width: 100vw;
  height: 100vh;
  background-color: rgba(grey, 0.1);

  //不加的话 iphone5会多出来一块
  overflow-x: hidden;
}
</style>
