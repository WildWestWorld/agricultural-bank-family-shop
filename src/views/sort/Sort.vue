<template>
  <div class="page">
    <div class="slider" @mouseover="stopAutoPlay" @mouseleave="setAutoPlay">
      <div class="slider-list">
        <div
          :class="['slider-item', setItemClass(index)]"
          v-for="(item, index) of list"
          :key="index"
        >
          <img :src="item" />
        </div>
      <i @click="prev" class="arrow arrow-left"><svg t="1598261572608" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3271" width="100%" height="100%"><path d="M641.28 278.613333l-45.226667-45.226666-278.634666 278.762666 278.613333 278.485334 45.248-45.269334-233.365333-233.237333z" p-id="3272" fill="#ccc"></path></svg></i>
      <i @click="next" class="arrow arrow-right"><svg t="1598261670602" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3400" width="100%" height="100%"><path d="M593.450667 512.128L360.064 278.613333l45.290667-45.226666 278.613333 278.762666L405.333333 790.613333l-45.226666-45.269333z" p-id="3401" fill="#ccc"></path></svg></i>
      </div>
      <!-- 轮播图下面的点 -->
      <div class="dots">
        <span
          v-for="(item, index) of list"
          :key="index"
          :style="setDotActiveStyl(index)"
          @mouseover="currentIndex = index"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        "http://p3.music.126.net/wGbO39sAMI9lroiLYXJsDQ==/109951167760004737.jpg?param=800y800",
        "http://p3.music.126.net/wGbO39sAMI9lroiLYXJsDQ==/109951167760004737.jpg?param=800y800",
        "http://p3.music.126.net/wGbO39sAMI9lroiLYXJsDQ==/109951167760004737.jpg?param=800y800",
        "http://p3.music.126.net/wGbO39sAMI9lroiLYXJsDQ==/109951167760004737.jpg?param=800y800",
        "http://p3.music.126.net/wGbO39sAMI9lroiLYXJsDQ==/109951167760004737.jpg?param=800y800",
        "http://p3.music.126.net/wGbO39sAMI9lroiLYXJsDQ==/109951167760004737.jpg?param=800y800",
      ],
      timer: null,
      currentIndex: 0,
    };
  },
  computed: {
    // 将list长度 转换为 list的总Index
    listLength() {
      console.log(this.list.length)
      return this.list.length - 1;
    },
  },
  methods: {
    // 根据Index 设置图片的class名
    setItemClass(index) {
      // 如果当前的Index 是0
      const prevIndex =this.currentIndex == 0 ? this.listLength : this.currentIndex - 1;
      const nextIndex =this.currentIndex == this.listLength ? 0 : this.currentIndex + 1;

      // console.log(prevIndex,'prevIndex')
      // console.log(nextIndex,'nextIndex')

      switch (index) {
        case this.currentIndex:
          return "active";
        case prevIndex:
          return "prev";
        case nextIndex:
          return "next";
        default:
          return "";
      }
    },
    // 根据index与CurrentIndex 设置span的背景颜色
   setDotActiveStyl(index) {
      if (index == this.currentIndex) {
        return { backgroundColor: "#D33A31" };
      }
    },

    prev() {
      // 如果当前的index是0 那么就把当前的index设置为list的最大Index 否则就把当前的Index减1
      this.currentIndex == 0? (this.currentIndex = this.listLength): this.currentIndex--;
    },
    next() {
      // 如果当前的index是list最大Index 那么就把当前的index设置为list的最小Index 0  否则就把当前的Index加1
      this.currentIndex == this.listLength? (this.currentIndex = 0): this.currentIndex++;
    },
    setAutoPlay() {
      // this.timer = setInterval(() => {
      //   this.next()
      // }, 5000)
    },
    stopAutoPlay() {
      clearInterval(this.timer);
    },

  },
  mounted() {
    this.setAutoPlay();
  },
};
</script>

<style scoped lang="scss">
body {
  margin: 0 auto;
  padding: 0;
  max-width: 960px;
}
.slider {
  width: 100%;
  height: 200px;
  user-select: none;
}
.slider-list {
  position: relative;
  margin-top: 20px;
  height: 100%;
  transform-style: preserve-3d;
}
.slider-item {
  position: absolute;
  margin: 0 50%;
  width: 500px;
  height: 100%;
  transform: translate3d(-50%, 0, -300px) scale(0.8);
  transition: all 0.6s ease-in-out;
  border-radius: 8px;
  overflow: hidden;
}
.slider-item img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider-item.prev {
  margin: 0;
  transform: translate3d(0, 0, -200px) scale(0.8);
  transform-origin: left;
}
.slider-item.next {
  margin: 0 100%;
  transform: translate3d(-100%, 0, -100px) scale(0.8);
  transform-origin: right;
}
.slider-item.active {
  transform: translate3d(-50%, 0, 0) scale(1);
}
.slider-item::after {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  transition: all 0.6s;
}
.slider-item.active::after {
  opacity: 0;
}
.arrow {
  position: absolute;
  top: 50%;
  display: block;
  width: 30px;
  cursor: pointer;
  transform: translate3d(0, -50%, 0);
}
.arrow.arrow-right {
  right: 0;
}
.dots {
  text-align: center;
}
.dots span {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 10px 5px;
  cursor: pointer;
}
</style>