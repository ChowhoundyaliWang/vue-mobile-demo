<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>

      <!-- <mt-swipe-item v-for='item in carouselList' :key='item.img'>
               <img :src="item.img" alt="error">
      </mt-swipe-item>-->
    </mt-swipe>

    <!-- 六宫格显示菜单 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="../../assets/01.jpg" alt="error">
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <!-- <span class="mui-icon mui-icon-email">
            <span class="mui-badge">5</span>
          </span> -->
          <img src="../../assets/02.jpg" alt="error">
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <!-- <span class="mui-icon mui-icon-chatbubble"></span> -->
          <img src="../../assets/03.png" alt="error">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="../../assets/03.png" alt="error">
          <!-- <span class="mui-icon mui-icon-location"></span> -->
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <!-- <span class="mui-icon mui-icon-search"></span> -->
           <img src="../../assets/03.png" alt="error">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <!-- <span class="mui-icon mui-icon-phone"></span> -->
           <img src="../../assets/03.png" alt="error">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      carouselList: [
        // 保存轮播图数据的列表
        { img: "", url: "" },
        { img: "", url: "" },
        { img: "", url: "" }
      ]
    };
  },
  created() {
    // this.getCarouselList();
  },
  methods: {
    getCarouselList() {
      this.$axios.get().then(res => {
        if (res) {
        } else {
          Toast({
            message: "获取数据失败，请稍后重试~",
            duration: 3000,
            position: "middle"
          });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: yellowgreen;
    }
    &:nth-child(2) {
      background-color: palevioletred;
    }
    &:nth-child(3) {
      background-color: goldenrod;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.mui-grid-view.mui-grid-9{
    background-color: #fff;
    img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{ font-size: 13px; }
</style>

