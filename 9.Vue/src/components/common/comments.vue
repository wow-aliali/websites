<template>
    <div>
        <h2 class="article-comment">文章评论 :</h2>
        <el-card v-for="(comment, index) of comments" :key="index" class="comment" v-if="comments.length">
            <div slot="header" class="clearfix">
                <span style="font-size: 18px">{{ comment.UserName }}</span>
                <a href="#" style="float: right">发布于 {{ comment.datetime }}</a>
            </div>
            <div class="comment-content">
                {{ comment.Comments }}
            </div>
        </el-card>
        <el-card v-else>目前没有用户评论!</el-card>

        <h2 class="article-comment">您的评论 :</h2>
        <el-input v-model="myComment" placeholder="请输入您的评论" clearable class="input-comment" ref="commentText"></el-input>
        <div class="button-group">
            <el-button type="primary" @click="submitComment">提交评论</el-button>
            <el-button type="primary" @click="collectArticle">收藏文章</el-button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import store from '@/vuex/store'
import { mapState } from 'vuex';

export default {
    name: 'comments',
    data() {
        return {
            comments: '',
            myComment: ''
        }
    },
    store,
    computed: {
        ...mapState(['username', 'userid'])
    },
    beforeMount() {
        this.getAllComments();
    },
    methods: {
        // 获取所有评论
        getAllComments() {
            axios("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.$route.params.uniquekey)
            .then(response => {
                this.comments = response.data;
            })
            .catch(error => {
                console.log(error);
            });
        },

        // 提交评论
        submitComment() {
            axios("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + this.$store.state.userid + "&uniquekey=" + this.$route.params.uniquekey + "&commnet=" + this.myComment)
                .then(response => {
                    this.$notify({
                        title: 'VueNews 提醒',
                        message: '评论此文章成功',
                        type: 'success',
                        duration: 3000
                    });
                })
                .catch(error => {
                    console.log(error);
                });

            this.$refs.commentText.value = '';  // 清除输入内容
        
            // this.beforeMount();  // 提交评论之后，重新获取所有评论
        },

        // 收藏文章
        collectArticle() {
            axios("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=" + this.$store.state.userid + "&uniquekey=" + this.$route.params.uniquekey)
                .then(response => {
                   this.$notify({
                        title: 'VueNews 提醒',
                        message: '收藏此文章成功',
                        type: 'success',
                        duration: 3000
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}
</script>

<style>
.article-comment {
    font-size: 22px;
    font-weight: normal;
    color: #41b883;
    margin-top: 60px;
}
.article-comment:nth-of-type(2), .comment, .input-comment {
    margin-bottom: 15px;
}
.comment:first-of-type {
    margin-top: 20px;
}
.button-group {
    display: flex;
    justify-content: center;
}
</style>