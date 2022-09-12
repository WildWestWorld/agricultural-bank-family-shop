<template>
  <div>
    <router-view></router-view>

    <tab-bar></tab-bar>

    <!-- tabbar -->

<!--    <van-tabbar-->
<!--      route-->
<!--      v-model="active"-->
<!--      active-color="#00995A"-->
<!--      inactive-color="#000000"-->
<!--    >-->
<!--      <van-tabbar-item replace to="/index">-->
<!--        <span>首页</span>-->
<!--        <template #icon="props">-->
<!--          <img src="@/assets/img/tabbar-index.png" />-->
<!--        </template>-->
<!--      </van-tabbar-item>-->
<!--      <van-tabbar-item replace to="/sort">-->
<!--        <span>分类</span>-->
<!--        <template #icon="props">-->
<!--          <img src="@/assets/img/tabbar-sort.png" />-->
<!--        </template>-->
<!--      </van-tabbar-item>-->
<!--      <van-tabbar-item replace to="/mine" icon="friends-o">-->
<!--        <span>我的</span>-->
<!--        <template #icon="props">-->
<!--          <img src="@/assets/img/tabbar-mine.png" />-->
<!--        </template>-->
<!--      </van-tabbar-item>-->
<!--    </van-tabbar>-->
  </div>
</template>

<script>

import tabBar from "@/components/common/tab-bar/tabBar.vue";

export default {
  name: 'App',
  components:{
      tabBar
  },
  data() {
    return {
      active: 0,
      icon: {
        active: 'https://img01.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png',
      },
    };
  },
};
</script>

<style>

</style>
