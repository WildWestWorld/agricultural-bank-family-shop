<template>
  <div class="tab-bar-container">

      <tab-bar-item v-for="(item,index) in tabBarData" :key="item.title" :info="item">
<!--        <div slot="icon" class="icon-img"></div>-->
      </tab-bar-item>

  </div>
</template>

<script>
import tabBarItem from "@/components/common/tab-bar/tabBarItem.vue";

export default {
  name: "tabBar",
  components: {
    tabBarItem
  },
  data() {
    return {
      tabBarData: [
        {title: '首页', name:"index",icon: require('@/assets/img/tabbar-index.png'),path:'/index'},
        {title: '分类', name:"sort",icon: require('@/assets/img/tabbar-sort.png'),path:'/sort'},
        {title: '我的', name:"mine",icon: require('@/assets/img/tabbar-mine.png'),path:'/mine'},

      ]
    }
  }
}
</script>

<style scoped lang="scss">
.tab-bar-container {
  position: fixed;
  left:0;
  bottom: 0;

  height: calc(48.25 / 37.5)+rem;
  width: 100vw;
  z-index: 9999;

  background-color: white;

  display: flex;
  flex-direction: row;

  user-select: none;

}


</style>