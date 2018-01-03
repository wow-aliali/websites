<template>
    <div class="news-block">
        <el-card>
            <ul v-if="news.length">
                <li v-for="(newsitem, index) in news" :key="index">
                    <router-link :to="{ path: '/details/' + newsitem.uniquekey }">
                        {{ newsitem.title }}
                    </router-link>
                </li>
            </ul>
            <ul v-else>
                <li>没有加载到任何新闻!</li>
            </ul>
        </el-card>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'PCNewsBlock',
    data() {
        return {
            news: ''
        }
    },
    props: ['type','count'],
    beforeMount() {
        axios("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.type + "&count=" + this.count)
            .then(response => {
                this.news = response.data;
            })
            .catch(error => {
                console.log(error);
            })
    }
}
</script>

<style>
.news-block ul li {
    padding: 5px 15px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
</style>
