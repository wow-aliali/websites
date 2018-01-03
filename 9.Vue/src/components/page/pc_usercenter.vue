<template>
    <el-row>
        <el-col :span="2">&nbsp;</el-col>
        
        <el-col :span="20">
            <el-tabs tab-position="left">
                <el-tab-pane label="我的收藏列表" class="tab-title">
                    <el-card v-for="(myCollection, index) of myCollections" :key="index" v-if="myCollections.length" class="card-item">
                        <div slot="header" class="clearfix">
                            <span style="font-size: 18px">
                                文章ID : <span class="vuecolor">{{ myCollection.uniquekey }}</span>
                            </span>
                            <router-link :to="{ path: '/details/' + myCollection.uniquekey }" style="float: right">查看该文章</router-link>
                        </div>
                        <div class="comment-content">
                            标题 : <span class="vuecolor">{{ myCollection.Title }}</span>
                        </div>
                    </el-card>
                    <el-card v-else>您还没有收藏过任何文章 , 快去评论吧 !</el-card>
                </el-tab-pane>
                <el-tab-pane label="我的评论列表">
                    <el-card v-for="(myComment, index) of myComments" :key="index" v-if="myComments.length" class="card-item">
                        <div slot="header" class="clearfix">
                            <span style="font-size: 18px">
                                于 <span class="vuecolor">{{ myComment.datetime }}</span> 评论了文章 <span class="vuecolor">{{ myComment.uniquekey }}</span>
                            </span>
                            <router-link :to="{ path: '/details/' + myComment.uniquekey }" style="float: right">查看该文章</router-link>
                        </div>
                        <div class="comment-content">
                            评论内容 : <span class="vuecolor">{{ myComment.Comments }}</span>
                        </div>
                    </el-card>
                    <el-card v-else>您还没有评论过任何文章 , 快去评论吧 !</el-card>
                </el-tab-pane>
                <el-tab-pane label="头像设置">
                    <div class="avatar-wrap">
                        <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="true"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                        <p style="margin-top: 50px">注 : 没有提供后台API</p>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-col>
       
        <el-col :span="2">&nbsp;</el-col>
    </el-row>
</template>

<script>
import axios from "axios";
import store from "@/vuex/store";
import { mapState } from "vuex";

export default {
  name: "pcusercenter",
  data() {
    return {
      myCollections: "",
      myComments: ""
    };
  },
  store,
  computed: {
    ...mapState(["userid"])
  },
  beforeMount() {
    document.title = "个人中心 - VueNews";

    // 获取我的收藏列表
    axios(
      "http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" +
        this.$store.state.userid
    )
      .then(response => {
        this.myCollections = response.data.reverse();
      })
      .catch(error => {
        console.log(error);
      });

    // 获取我的评论列表
    axios(
      "http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" +
        this.$store.state.userid
    )
      .then(response => {
        this.myComments = response.data.reverse();
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
.el-tabs--left .el-tabs__item {
  height: 50px;
  font-size: 22px;
}
.card-item {
  margin: 0 0 15px 20px;
}
.vuecolor {
  color: #41b883;
}

/* element-ui 头像样式 */
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-wrap {
    margin-left: 20px;
}
</style>