<template>
    <div>
        <el-row>
            <el-col :span="2">&nbsp;</el-col>

            <el-col :span="20">
                <el-row>
                  <el-col :span="8">
                      <div class="carousel">
                          <el-carousel trigger="click">
                              <el-carousel-item v-for="item of 4" :key="item"></el-carousel-item>
                          </el-carousel>
                      </div>
                      <div class="pc-news-img-block">
                          <PCNewsImgBlock count="6" type="top" singleWidth="32%" newsMargin="threeColNews" cardTitle="国际头条"></PCNewsImgBlock>
                      </div>
                  </el-col>
                  <el-col :span="8">
                      <div class="pc-news-block">
                          <el-tabs v-model="activeTab">
                              <el-tab-pane label=""></el-tab-pane>
                              <el-tab-pane label=""></el-tab-pane>
                              <el-tab-pane label=""></el-tab-pane>
                              <el-tab-pane label="头条" name="top">
                                  <PCNewsBlock count="22" type="top"></PCNewsBlock>
                              </el-tab-pane>
                              <el-tab-pane label=""></el-tab-pane>
                              <el-tab-pane label="国际" name="guoji">
                                  <PCNewsBlock count="22" type="guoji"></PCNewsBlock>
                              </el-tab-pane>
                              <el-tab-pane label=""></el-tab-pane>
                              <el-tab-pane label="娱乐" name="yule">
                                  <PCNewsBlock count="22" type="yule"></PCNewsBlock>
                              </el-tab-pane>
                          </el-tabs>
                      </div>
                  </el-col>
                  <el-col :span="8">
                      <el-tabs class="wangyi" v-model="productTab">
                        <el-tab-pane label=""></el-tab-pane>
                        <el-tab-pane label=""></el-tab-pane>
                        <el-tab-pane label=""></el-tab-pane>
                        <el-tab-pane label=""></el-tab-pane>
                        <el-tab-pane label=""></el-tab-pane>
                        <el-tab-pane label="网易产品" name="wangyi">
                            <PCProduct></PCProduct>
                        </el-tab-pane>
                      </el-tabs>
                  </el-col>
                </el-row>
                <PCNewsImgBlock count="10" type="guonei" singleWidth="9.4%" newsMargin="oneLineNews" cardTitle="国内新闻"></PCNewsImgBlock>
                <PCNewsImgBlock count="20" type="yule" singleWidth="9.4%" newsMargin="twoLineNews" cardTitle="娱乐新闻"></PCNewsImgBlock>
            </el-col>

            <el-col :span="2"></el-col>
        </el-row>

        
    </div>
</template>

<script>
import PCNewsBlock from "@/components/page/pc_news_block";
import PCNewsImgBlock from "@/components/page/pc_news_img_block";
import PCProduct from '@/components/page/pc_product'

export default {
  name: "pc_newscontainer",
  data() {
    return {
      activeTab: "top",
      productTab: 'wangyi'
    };
  },
  components: {
    PCNewsBlock,
    PCNewsImgBlock,
    PCProduct
  }
};
</script>

<style>
.carousel,
.pc-news-img-block {
  width: 95%;
}
/* 图片轮播 */
.el-carousel__item {
  background-size: 100% 100%;
}
.el-carousel__item:nth-of-type(1) {
  background-image: url(../../assets/carousel_1.jpg);
}
.el-carousel__item:nth-of-type(2) {
  background-image: url(../../assets/carousel_2.jpg);
}
.el-carousel__item:nth-of-type(3) {
  background-image: url(../../assets/carousel_3.jpg);
}
.el-carousel__item:nth-of-type(4) {
  background-image: url(../../assets/carousel_4.jpg);
}

.wangyi {
    margin-left: 30px;
}
</style>
