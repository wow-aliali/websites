<template>
  <div id="app">
    <div class="nav border-1px">
      <ul>
        <li :class="{ active: isActive }" v-for="(item, index) of navItems" :key="index">
          <router-link to="/">
            <span :class="'img_' + (index + 1)"></span>
            <span class="text">{{ item }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="main">
      <router-view :houses="houses"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import data from "@/util/mock";

export default {
    name: "App",
    data() {
        return {
            navItems: ["首页", "找室友", "消息", "我的"],
            isActive: false,
            houses: []
        };
    },
    created() {
        axios.get("/fangyuan").then(response => {
            this.houses = response.data.houses;
        });
    }
};
</script>

<style lang="scss">
.nav {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 55px;
    background: #fff;
    border-top: 1px solid #ddd;
    ul {
        display: flex;
        height: 55px;
        li {
            width: 100%;
            height: 100%;
            text-align: center;
        }
        @for $item from 1 through 4 {
            .img_#{ $item } {
                display: block;
                margin: 6px auto;
                width: 22px;
                height: 22px;
                background: url("../static/image/nav_" + $item + ".png")
                    no-repeat;
                background-size: 22px 22px;
            }
        }
        li:hover {
            .text {
                color: #51cbff;
            }
            @for $item from 1 through 4 {
                .img_#{ $item } {
                    background: url("../static/image/nav_" + $item + "_selected" +
                            ".png")
                        no-repeat;
                    background-size: 22px 22px;
                }
            }
        }
    }
}
</style>