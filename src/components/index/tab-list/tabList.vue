<template>
  <div class="tab-list-container">
    <div class="tab-list-wrapper">
      <div class="tab-list-header-container">
        <div
          class="tab-list-header-item-container"
          ref="tabList"
          v-for="(item, index) in tabListHeaderData"
          @click="changeActiveTabItemIndex(index)"
        >
          <div
            :class="
              activeTabItemIndex == index
                ? 'tab-list-header-item-text-container active'
                : 'tab-list-header-item-text-container '
            "
            :id="'tab-list-header-item' + index"
          >
            {{ item.name }}
          </div>
        </div>

        <!-- tab下面的滑块 -->
        <div
          class="tab-list-header-slider"
          :style="`transform: translateX(${
            tabListPositionInit + tabListItemWidth * activeTabItemIndex
          }px) translateX(-50%);`"
        ></div>
      </div>
      <!-- tab里面的内容 -->
      <div class="tab-list-content-container">
        <div class="tab-list-content-item-container">
          <div
            class="tab-list-content-item"
            v-for="(item, index) in tabListHeaderData"
            :class="
              activeTabItemIndex == index
                ? 'tab-list-content-item active'
                : 'tab-list-content-item '
            "
          >
            <div class="tab-list-content">
              <slot :name="'item' + index"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
  components: {},
  data() {
    return {
      screenWidth: null,
      activeTabItemIndex: 0,
      tabListPositionInit: 58.5,
      tabListItemWidth: 0,
      tabListPosition: 0,
      tabListHeaderData: [
        {
          name: '家装公司',
        },
        {
          name: '建筑商户',
        },
        {
          name: '家居软装',
        },
      ],
    };
  },
  //   生命周期区
  mounted() {
    this.tabListSliderInit();
    this.getScreenWidth();
  },
  //方法区
  methods: {
    // 初始化tabList的滑块位置
    tabListSliderInit() {
      console.log(this.$refs.tabList[0].clientWidth);
      this.tabListPositionInit = this.$refs.tabList[0].clientWidth / 2;
      this.tabListItemWidth = this.$refs.tabList[0].clientWidth;

      console.log(this.tabListItemWidth, this.tabListPositionInit);
    },
    // 获取屏幕的宽度并检测页面是否发生改变
    getScreenWidth() {
      //获取屏幕尺寸
      this.screenWidth = document.body.clientWidth;
      console.log(document.body.clientWidth);
      //   当页面发生改变
      window.onresize = () => {
        console.log('高度改变');
        this.screenWidth = document.body.clientWidth;
        this.tabListSliderInit();
        console.log(this.screenWidth);
      };
    },
    //改变正在使用的变量activeTabItemIndex
    changeActiveTabItemIndex(index) {
      this.activeTabItemIndex = index;
    },
  },
};
</script>

<style scoped lang="scss">
.tab-list-container {
  position: relative;
  height: 100%;
  width: 100vw;

  display: flex;
  flex-direction: column;
  .tab-list-wrapper {
    position: relative;
    width: calc(100vw - 0.67rem);
    height: fit-content;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    background-color: white;

    border-radius: 0.6rem;
    .tab-list-header-container {
      position: relative;
      height: calc(81 / 75) + rem;

      display: flex;
      flex-direction: row;
      //   &:last-child {
      //     background-color: #00995a;
      //   }
      #tab-list-header-item2 {
        border-right-width: 0px;
      }
      .tab-list-header-slider {
        content: '';
        position: absolute;
        background-color: #00995a;
        width: calc(88 / 75) + rem;
        height: calc(6 / 75) + rem;
        z-index: 1;
        top: calc(64.6 / 75) + rem;

        // transform: translateX(calc(117) + px) translateX(-50%);
        transition-duration: 0.3s;
      }
      .tab-list-header-item-container {
        position: relative;

        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .tab-list-header-item-text-container {
          font-size: calc(32 / 75) + rem;

          width: 100%;
          text-align: center;
          border-right: 1px solid #d1d2d1;
        }
        .active {
          color: #00995a;
        }
      }
    }
    .tab-list-content-container {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
      .tab-list-content-item-container {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100%;
        .tab-list-content-item {
          position: relative;
          display: none;
          flex-direction: column;
          height: 100%;
          .tab-list-content {
            position: relative;
            flex-direction: column;
            height: 100%;
          }
        }
        .active {
          display: block;
        }
      }
    }
  }
}
</style>
