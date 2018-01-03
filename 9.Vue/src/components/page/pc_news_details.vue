<template>
    <div>
        <el-row>
            <el-col :span="2">&nbsp;</el-col>
            <el-col :span="14">
                <div v-html="newsdetails.pagecontent"></div>
                <Comments></Comments>
            </el-col>
            <el-col :span="5" class="right-news-block">
                <PCNewsImgBlock count="20" type="yule" singleWidth="47%" newsMargin="twoColNews" cardTitle="相关新闻"></PCNewsImgBlock>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="2">&nbsp;</el-col>
        </el-row>
    </div>
</template>

<script>
import axios from 'axios'
import PCNewsImgBlock from '@/components/page/pc_news_img_block'
import Comments from '@/components/common/comments'

export default {
    name: 'pcnewsdetails',
    data() {
        return {
            newsdetails: ''
        }
    },
    beforeMount() {
        axios("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.$route.params.uniquekey)
            .then(response => {
                this.newsdetails = response.data;
                document.title = this.newsdetails.title + ' - Vue News'
            })
    },
    components: {
        PCNewsImgBlock,
        Comments
    }
}
</script>

<style>
/* API返回的HTML内容整改 */
article img {
    width: 70%;
}
h1.title {
    font-weight: normal;
    margin: 5px 0 15px;
}
span.src {
    display: block;
    padding-bottom: 15px;
    color:rgb(155, 155, 155);
    border-bottom: 1px solid rgb(214, 214, 214);
}
a.img-wrap {
    padding-bottom: 60px !important;
}
p.section.txt {
    margin: 20px 0;
    font-size: 18px;
    color: rgb(73, 73, 73);
    line-height: 30px;
}

.right-news-block {
    margin-left: 70px;
}
</style>