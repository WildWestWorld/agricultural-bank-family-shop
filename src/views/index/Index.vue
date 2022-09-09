<template>
  <div class="page">
    <div class="page-wrapper">
      <div class="header">
        <van-search
        v-model="searchWord"
        shape="round"
        background="#00995a"
        placeholder="请输入搜索关键词"
        />
      </div>
      <div class="content">
        <!-- 轮播图 -->
        <div class="swiper-container">
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
              <img src="@/assets/img/swiper-item-img.png" />
            </van-swipe-item>
            <van-swipe-item>
              <img src="@/assets/img/swiper-item-img.png" />
            </van-swipe-item>
            <van-swipe-item>
              <img src="@/assets/img/swiper-item-img.png" />
            </van-swipe-item>
            <van-swipe-item>
              <img src="@/assets/img/swiper-item-img.png" />
            </van-swipe-item>
          </van-swipe>
        </div>
        <!--活动按钮-->
        <div class="activity-button-container">
          <div class="activity-button-wrapper">活动按钮</div>
        </div>
        <!--活动图片-->
        <div class="activity-img-container">
          <div class="activity-img-wrapper">
            <img  class="activity-img" src="@/assets/img/activity-img.png" ></img>
          </div>
        </div>
        <!-- 选择装修的类型select -->
        <div class="decoration-type-container">
            <van-tabs v-model="tabActiveNum" swipeable :border="true"	color="#00995a" title-active-color="#00995a" title-inactive-color="#000000" >
                <van-tab title="家装公司" title-style="van-tabs-title">
                    <div class="company-container">
                        <div class="company-item-container">
                            <div class="company-item">
                                <div class="top-container">
                                    <div class="left-img-container">
                                        <img class="left-shop-img" src="http://p3.music.126.net/wGbO39sAMI9lroiLYXJsDQ==/109951167760004737.jpg?param=400y400" />
                                    </div>
                                    <div class="right-info-container">
                                        <div class="name-text-container">
                                            张家港市杨舍镇塘市美心木门经营部
                                        </div>
                                        <div class="commend-info-container">
                                            <div class="star-img-text-container">
                                                <div class="star-img-container">
                                                    <img class="star-img" src="@/assets/img/star.png" />
                                                </div>
                                                <div class="stat-text">1.0</div>
                                            </div>
                                            <div class="commend-container">
                                                1
                                            </div>
                                            <div class="consumpution-container">
                                                1
                                            </div>
                                        </div>
                                        <div class="address-info-container">
                                            <div class="address">张家港市杨舍镇南二环路1号</div>
                                            <div class="distant">13.4km</div>

                                        </div>
                                        <div class="benefit-info-container">
                                            <div class="benefit">200个精选案例</div>
                                            <div class="benefit">200名设计师</div>
                                            <div class="benefit">免息分期</div>
                                            <div class="benefit">实景展厅</div>

                                        </div>
                                    </div>
                                </div>
                                <div class="bottom-container">
                                    456
                                </div>
                            </div>

                        </div>
                    </div>
                </van-tab>
                <van-tab title="建筑商户">内容 2</van-tab>
                <van-tab title="家居软装">内容 3</van-tab>
            </van-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: {
    msg: String,
  },
  //变量区
  data() {
    return {
      test: '123',
      searchWord:'',
      tabActiveNum:0
    };
  },
  //生命周期区
  mounted() {
    console.log(this.$store);
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
  
  background-color: rgba(grey, 0.1);
  .page-wrapper {
    // height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: column;
    // 头部
    .header {
      height: 1.84rem;
      width: 100vw;
      background-color: #00995a;
      .van-search{
        height: 100%;
        width: 100vw;
        background-color: #00995a;
      }
    }
    // 内容
    .content {
      position: relative;
      flex: 1;
      width: 100vw;
      //轮播图
      .swiper-container {
        position: relative;
        height: 4.4rem;
        width: 100vw !important;

        .my-swipe .van-swipe-item {
          position: relative;
          height: 4.4rem;
          width: 100vw !important;
          img {
            position: relative;
            height: 4.4rem;
            width: 100vw !important;
          }
        }
      }
      //活动按钮
      .activity-button-container {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 2.84rem;
        width: 100vw;
        margin-top: 0.267rem;
        .activity-button-wrapper {
          height: 2.84rem;
          width: calc(100vw - 0.67rem);
          background-color: white;

          box-shadow: 0px 0px 0.67rem 0px rgba(0, 0, 0, 0.05);
          border-radius: 0.6rem;
        }
      }
      //活动图片
      .activity-img-container {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 3.44rem;
        width: 100vw;
        margin-top: 0.267rem;
        .activity-img-wrapper {
          height: 3.44rem;
          width: 9.32rem;
          .activity-img{
            height: 100%;
            width: 100%;
            border-radius: 0.6rem;
          }
        }
      }
      //装修的类型
      .decoration-type-container{
        // 修改tab字体大小
        ::v-deep .van-tab {
            font-size: 0.4267rem !important;
        }
        // 修改内容与tab的距离
        ::v-deep .van-tabs__content{
            margin-top: 0.2853rem;
        }
        // 家装公司
        .company-container{
            position: relative;
            height: 100vh;
            width: 100vw;
            .company-item-container{
                position: relative;
                height: 4.91rem;
                width: 100vw;
                .company-item{
                    position: relative;
                    height: 100%;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                   .top-container{
                    position: relative;
                    height: 2.655rem;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    max-width: 100%;
                    .left-img-container{
                        position: relative;
                        width: 2.584rem;
                        min-width: 2.584rem;
                        height: 100%;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        .left-shop-img{
                            width: 2rem;
                            height: 2rem;
                            border-radius: 0.2rem;
                        }
                    }
                    .right-info-container{
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        
                        padding-left: 0.2547rem;
                        font-size: 10px;
                        width: 100%;
                        max-width: 100%;
                        .name-text-container{
                            position: relative;
                            font-size: 0.3467rem;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            font-family: SourceHanSansCN;
                            font-weight: 400;
                            color: #000000;
                        }
                        .commend-info-container{
                            position: relative;
                            
                            display: flex;
                            flex-direction: row;
                            font-size: 0.3467rem;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            font-family: SourceHanSansCN;
                            font-weight: 400;
                            color: #000000;
                            .star-img-text-container{
                                position: relative;
                                display: flex;
                                flex-direction: row;
                                .star-img-container{
                                    position: relative;
                                    display: flex;
                                    justify-content: center;
                                    margin-right: 0.12rem;
                                    height: 0.307rem;
                                    width: 0.307rem;
                                    .star-img{
                                        width: 100%;
                                        height: 100%;
                                    }
                                }
                            }
                            
                        }
                        .address-info-container{
                            position: relative;
                            display: flex;
                            justify-content: space-between;
                            margin-right: 0.6rem;
                            
                            .address{
                                font-size: 0.267rem;
                                font-family: SourceHanSansCN;
                                font-weight: 400;
                                color: #747474;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                max-width: 5rem;
                            }
                            .distant{
                                font-size: 0.267rem;
                                font-family: SourceHanSansCN;
                                font-weight: 400;
                                color: #747474;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                max-width: 1.8rem;

                            }
                        }
                        .benefit-info-container{
                            position: relative;
                            width: 95%;
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                           
                            .benefit{
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                text-align: center;
                                font-size: 0.24rem;
                            }
                        }
                    }
                   }
                   .bottom-container{
                    flex: 1;
                    width: 100%;
                   }

                }
            }
        }
      }
    }
  }
}
</style>
