<template>
  <div class="tab-bar-container">
    <div
      class="tab-bar-wrapper"
      v-for="(item, index) in tabBarData"
      :key="item.title"
      @click="changeActiveTabBarIndex(index)"
    >
      <tab-bar-item
        :info="item"
        :forIndex="index"
        :activeIndex="activeTabBarIndex"
      >
        <!--        <div slot="icon" class="icon-img"></div>-->
      </tab-bar-item>
    </div>
  </div>
</template>

<script>
import tabBarItem from '@/components/common/tab-bar/tabBarItem.vue';
import { mapState } from 'vuex';

export default {
  name: 'tabBar',
  components: {
    tabBarItem,
  },
  computed: mapState({
    // isFreshTabBar: (state) => state.isFreshTabBar,
    activeTabBarIndex: (state) => state.activeTabBarIndex,
  }),
  data() {
    return {
      //   activeTabBarIndex: 0,
      tabBarData: [
        {
          title: '首页',
          name: 'index',
          icon: require('@/assets/img/index.png'),
          activeIcon: require('@/assets/img/tabbar-index-active.png'),
          path: '/index',
        },
        {
          title: '分类',
          name: 'sort',
          icon: require('@/assets/img/sort.png'),
          activeIcon: require('@/assets/img/tabbar-sort-active.png'),
          path: '/sort',
        },
        {
          title: '我的',
          name: 'mine',
          icon: require('@/assets/img/mine.png'),
          activeIcon: require('@/assets/img/tabbar-mine-active.png'),
          path: '/mine',
        },
      ],
    };
  },
  created() {
    // const topath = this.$route.path;
    // if (topath === '/') {
    //   // 页面刷新
    //   this.activeTabBarIndex =
    //     Number(localStorage.getItem('activeTabBarIndex')) || 0;
    // } else {
    //   this.setActive(topath);
    // }
  },
  //  方法区
  methods: {
    setActive(path) {
      this.tabBarData.forEach((tab, i) => {
        if (tab.path === path) {
          this.activeTabBarIndex = i;
          return false;
        }
      });
    },
    //改变正在使用的变量activeTabItemIndex
    changeActiveTabBarIndex(index) {
      this.$store.commit('changeActiveTabBarIndexState', index);
      //   localStorage.setItem('activeTabBarIndex', index);
      console.log(this.activeTabBarIndex);
    },
  },
};
</script>

<style scoped lang="scss">
.tab-bar-container {
  position: fixed;
  left: 0;
  bottom: 0;

  height: calc(48.25 / 37.5) + rem;
  width: 100vw;
  z-index: 9999;

  background-color: white;

  display: flex;
  flex-direction: row;

  user-select: none;
  .tab-bar-wrapper {
    position: relative;
    left: 0;
    bottom: 0;
    height: calc(48.25 / 37.5) + rem;
    width: 100vw;
    z-index: 9999;

    background-color: white;

    display: flex;
    flex-direction: row;

    user-select: none;
  }
}
</style>
