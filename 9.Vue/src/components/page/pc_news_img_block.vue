<template>
    <div class="news-img-block">
        <el-card>
            <div slot="header" class="clearfix">
                <span style="font-size: 18px">{{ cardTitle }}</span>
                <a href="#" style="float: right">更多 ▷</a>
            </div>
            <div class="news-content" :class="newsMargin" v-if="news.length" v-for="(newsitem, index) in news" :key="index" :style="{width: singleWidth}">
                <router-link :to="{name: 'newsdetails', params: {uniquekey: newsitem.uniquekey}}">
                    <div class="news-image">
                        <img :src="newsitem.thumbnail_pic_s" alt="" width="100%">
                    </div>
                    <div class="news-text">
                        <h3>{{ newsitem.title }}</h3>
                        <p>{{ newsitem.author_name }}</p>
                    </div>
                </router-link>
            </div>
            <div v-else>没有加载到任何新闻!</div>
        </el-card>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "pc_news_block",
    data() {
        return {
            news: ''
        }
    },
    props: ['type','count', 'singleWidth', 'newsMargin', 'cardTitle'],
    beforeMount() {
        axios("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.type + "&count=" + this.count)
          .then(response => {
              this.news = response.data;
          })
          .catch(error => {
              console.log(error);
          });
    }
}
</script>

<style>
.news-img-block {
    width: 100%;
    margin-top: 20px;
}

.news-content {
    display: inline-block;
    padding-top: 5px;
    margin-bottom: 20px;
}
.news-content .news-text h3 {
    font-size: 17px;
    font-weight: 550;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.news-content .news-text p {
    font-size: 15px;
    color:rgb(158, 158, 157);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.news-content a:hover {
    text-decoration: none;
}

/* 3个新闻图片块绑定不同样式 */
.threeColNews + .threeColNews:not(:nth-of-type(4)) {
    margin-left: 9px;
}
.oneLineNews + .oneLineNews {
    margin-left: 9px;
}
.twoLineNews + .twoLineNews:not(:nth-of-type(11)) {
    margin-left: 9px;
}
.twoColNews:nth-of-type(2n) {
    margin-left: 15px;
}

</style>
