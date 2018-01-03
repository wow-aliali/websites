<template>
    <div class="header">
        <el-row>
            <el-col :span="2" >&nbsp;</el-col>

            <el-col :span="20" >
                <el-row>
                    <el-col :span="5" >
                        <div class="logo">
                            <img src="../../assets/logo.png" alt="">
                            <router-link to="/">
                                <span>VueNews</span>
                            </router-link>
                        </div>
                    </el-col>
                    <el-col :span="19" >
                        <el-menu
                            :default-active="activeNav"
                            active-text-color="#41B883"
                            mode="horizontal" >
                            <el-menu-item index="1" >
                                <i class="el-icon-star-on"></i>
                                头条
                            </el-menu-item>
                            <el-menu-item index="2" >
                                <i class="el-icon-phone"></i>
                                社会
                            </el-menu-item>
                            <el-menu-item index="3" >
                                <i class="el-icon-zoom-out"></i>
                                国内
                            </el-menu-item>
                            <el-menu-item index="4" >
                                <i class="el-icon-zoom-in"></i>
                                国际
                            </el-menu-item>
                            <el-menu-item index="5" >
                                <i class="el-icon-service"></i>
                                娱乐
                            </el-menu-item>
                            <el-menu-item index="6" >
                                <i class="el-icon-share"></i>
                                体育
                            </el-menu-item>
                            <el-menu-item index="7" >
                                <i class="el-icon-upload"></i>
                                科技
                            </el-menu-item>
                            <el-menu-item index="8" >
                                <i class="el-icon-sold-out"></i>
                                时尚
                            </el-menu-item>
                            <el-menu-item index="user" class="register" v-if="isLogined" >
                                <el-button type="priamry">{{ $store.state.username }}</el-button>
                                <router-link to="/usercenter">
                                    <el-button type="priamry" plain>个人中心</el-button>
                                </router-link>
                                <el-button @click="logout">退出</el-button>
                            </el-menu-item>
                            <el-menu-item index="reg" class="register" v-else >
                                <p @click="dialogOn">
                                    <i class="el-icon-info"></i>
                                    登录/注册
                                </p>
                            </el-menu-item>
                            <el-dialog title="用户中心" :modal="true" :visible.sync="showDialog" width="315px" >
                                <el-tabs v-model="activeReg" type="card" >
                                    <el-tab-pane label="登录" name="login" >
                                        <el-form :model="loginForm" :rules="rulesForm" status-icon >
                                            <el-form-item label="账户 :" prop="username" >
                                                <el-input v-model="loginForm.username"></el-input>
                                            </el-form-item>
                                            <el-form-item label="密码 :" prop="password" >
                                                <el-input type="password" v-model="loginForm.password"></el-input>
                                            </el-form-item>
                                            <el-form-item>
                                                <el-button type="primary" @click="submitForm('loginForm')" class="submitButton" >登录</el-button>
                                            </el-form-item>
                                        </el-form>
                                    </el-tab-pane>
                                    <el-tab-pane label="注册" name="register" >
                                        <el-form :model="regForm" :rules="rulesForm" status-icon >
                                            <el-form-item label="账户 :" prop="username" >
                                                <el-input v-model="regForm.username"></el-input>
                                            </el-form-item>
                                            <el-form-item label="密码 :" prop="password" >
                                                <el-input type="password" v-model="regForm.password"></el-input>
                                            </el-form-item>
                                            <el-form-item label="确认密码 :" prop="confirmPassword" >
                                                <el-input type="password" v-model="regForm.confirmPassword"></el-input>
                                            </el-form-item>
                                            <el-form-item>
                                                <el-button type="primary" @click="submitForm('regForm')" class="submitButton" >注册</el-button>
                                            </el-form-item>
                                        </el-form>
                                    </el-tab-pane>
                                </el-tabs>
                            </el-dialog>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-col>

            <el-col :span="2" ></el-col>
        </el-row>
    </div>
</template>

<script>
import axios from 'axios'
import store from '@/vuex/store'
import { mapState, mapMutations } from 'vuex';

export default {
  name: "pc_header",
  data() {

    // 表单验证逻辑
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        if (value > 2 || value < 10) {
            callback(new Error("用户名的长度必须在2~10"));
          } else {
            callback();
          }
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用密码"));
      } else {
        callback();
      }
    };
    var validateConfirmPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.regForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      activeNav: "1",
      showDialog: false,
      activeReg: "login",
      // 登录表单的各项值
      loginForm: {
        username: "",
        password: ""
      },
      // 注册表单的各项值
      regForm: {
        username: "",
        password: "",
        confirmPassword: ''
      },
      // 表单验证数据
      rulesForm: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        confirmPassword: [{ validator: validateConfirmPassword, trigger: "blur" }]
      },
      // 用户名 ID 初始值
      userNickName: '',
      userId: 0,
      // 是否已登录
      isLogined: false
    };

  },
  store,
  computed: {
      ...mapState(['username', 'userid'])
  },
  methods: {

      ...mapMutations(['changUsername', 'changUserid']),

    dialogOn() {
      this.showDialog = true;
    },

    submitForm(formName) {
      axios("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.activeReg + "&username=" + this.loginForm.username + "&password=" + this.loginForm.password + "&r_userName=" + this.regForm.username + "&r_password=" + this.regForm.password + "&r_confirmPassword=" + this.regForm.confirmPassword)
        .then(response => {
          this.$store.commit('changUsername', response.data.NickUserName);
          this.$store.commit('changUserid', response.data.UserId);
        });

      this.isLogined = true;
      this.showDialog = false;
      this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
      });
    },

    logout() {
      this.isLogined = false;
      this.$store.commit('changUsername', '');
      this.$store.commit('changUserid', 0);
    }
  }

};
</script>

<style>
.header {
  width: 100%; height: 48px;
  margin-bottom: 40px;
}
.header a:hover{
    text-decoration: none;
}

.logo img {
  width: 60px;
  height: 60px;
  float: left;
}
.logo span {
  height: 60px;
  padding-left: 8px;
  font-size: 26px;
  line-height: 60px;
  color: #41b883;
}

.register {
  float: right !important;
}
.submitButton {
  margin-top: 20px;
}

.el-button--primary{
    background: #41b883 !important;
}
.el-button--primary:active{
    background: #3de499 !important;
}
</style>
