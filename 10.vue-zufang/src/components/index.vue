<template>
    <div class="index_wrap" ref="indexWrap">
        <div class="index">
            <div class="ad_wrap">
                <div class="ad" ref="ad">
                    <ul class="ad_list" ref="adList">
                        <li class="ad_item" v-for="(item, index) in ad_src" :key="index">
                            <img :src="item" alt="" width="100%">
                        </li>
                    </ul>
                    <div class="city">
                        <span class="currentCity">广州</span>
                        <img src="../../static/image/arrow_down.png" alt="" width="8" height="5">
                    </div>
                    <div class="logo">
                        <img src="../../static/image/logo.png" alt="" width="52">
                    </div>
                    <div class="search">
                        <input type="text" placeholder="请尝试输入想住的地点" @focus="inputFocus($event)" @blur="inputBlur($event)">
                        <a href="#"><img src="../../static/image/search_icon_home.png" alt="点击搜索" width="20" height="20"></a>
                    </div>
                </div>
            </div>
            <div class="menu">
                <ul class="border-1px">
                    <li v-for="(item, index) of menuItems" :key="index">
                        <router-link to="/">
                            <span><img :src="item.src" alt="" width="46" height="46"></span>
                            <span class="text">{{ item.text }}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="nearby">
                <p class="title">附近房源</p>
                <div class="houses">
                    <ul v-if="houses.length">
                        <li v-for="(house, index) of houses" :key="index">
                            <router-link to ="/housedetail" class="house_detail">
                                <img :src="house.image" alt="房内图">
                                <div class="content">
                                    <p class="name">{{ house.sellType }} · {{ house.housename }} · {{ house.roomCount }}居室</p>
                                    <p class="desc clearfix">
                                        {{ house.roomType }} · {{ house.roomSize }}㎡ · {{ house.roomDirection }}
                                        <span class="price"><span class="count">{{ house.price }}</span>元/月</span>
                                    </p>
                                    <p class="location clearfix">
                                        <img src="../../static/image/location.png" alt="位置" width="8" height="10">
                                        距您1.0km
                                    </p>
                                    <p class="extra">
                                        <span v-if="house.extra.shortSell">可短租</span>
                                        <span>{{ house.extra.deposit }}</span>
                                        <span v-if="house.extra.centralFlat && bodyWidth >= 356">集中公寓</span>
                                        <span v-if="house.extra.toilet">独卫</span>
                                        <span v-if="house.extra.kitchen">独厨</span>
                                        <span v-if="bodyWidth >= 400">{{ house.extra.decoration }}</span>
                                    </p>
                                </div>
                            </router-link>
                        </li>
                        <div class="find_all">
                            <router-link to="/">查 找 所 有 房 源</router-link>
                        </div>
                    </ul>
                    <div v-else style="margin-left: 15px">您的附近暂无房源</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
    data() {
        return {
            src: [],
            menuItems: [
                {
                    src: require("../../static/image/home_1.png"),
                    text: "整租"
                },
                {
                    src: require("../../static/image/home_2.png"),
                    text: "合租"
                },
                {
                    src: require("../../static/image/home_3.png"),
                    text: "公寓"
                },
                {
                    src: require("../../static/image/home_4.png"),
                    text: "发布房源"
                }
            ],
            bodyWidth: 0
        };
    },
    props: {
        houses: Array
    },
    computed: {
        ad_src() {
            for (let i = 0; i < 4; i++) {
                let item = require("../../static/image/ad_" + (i + 1) + ".jpg");
                this.src.push(item);
            }
            return this.src;
        }
    },
    mounted() {
        this._initAd();
        this._initScroll();

        let bodyClientWidth = document.body.clientWidth;
        this.bodyWidth = bodyClientWidth
    },
    methods: {
        _initScroll() {
            if (!this.indexScroll) {
                this.indexScroll = new BScroll(this.$refs.indexWrap, {
                    click: true
                });
            }
        },
        _initAd() {
            let width = document.body.clientWidth * 4;
            this.$refs.adList.style.width = width + "px";
            this.$nextTick(() => {
                if (!this.adScroll) {
                    this.adScroll = new BScroll(this.$refs.ad, {
                        scrollX: true,
                        eventPassthrough: "vertical",
                        snap: true, //隔断（翻页）
                        snapLoop: true, //无限滚动
                        snapThreshold: 0.3,
                        snapSpeed: 800 //滑动的时间
                    });
                } else {
                    this.adScroll.refresh();
                }
            });
        },
        inputFocus(event) {
            event.target.placeholder = "";
        },
        inputBlur(event) {
            event.target.placeholder = "请尝试输入想住的地点";
        }
    }
};
</script>

<style lang="scss">
@import "../assets/scss/mixin.scss";

.index_wrap {
    position: absolute;
    top: 0;
    bottom: 55px;
    left: 0;
    width: 100%;
    overflow: hidden;
    .index {
        .ad_wrap {
            position: relative;
            .ad {
                width: 100%;
                overflow: hidden;
                white-space: nowrap;
                .ad_list {
                    font-size: 0;
                    .ad_item {
                        display: inline-block;
                        width: 25%;
                    }
                }
            }
            .city {
                position: absolute;
                top: 15px;
                left: 15px;
                width: 48px;
                height: 16px;
                line-height: 16px;
                color: #8998a0;
                font-size: 10px;
                text-align: center;
                background: rgba(250, 250, 250, 0.8);
                border-radius: 60px;
                img {
                    margin-left: 4px;
                }
            }
            .logo {
                position: absolute;
                top: 13px;
                left: 50%;
                transform: translateX(-50%);
            }
            .search {
                display: flex;
                position: absolute;
                bottom: -15px;
                transform: translateX(-50%);
                left: 50%;
                width: 85%;
                height: 30px;
                background: #fff;
                border-radius: 60px;
                box-shadow: 0 0 5px #e8e8e8;
                input {
                    flex: 1;
                    padding-left: 30px;
                    color: #ccc;
                    text-align: center;
                    border-radius: 60px;
                    outline: 0;
                    &::-webkit-input-placeholder {
                        color: #ccc;
                    }
                }
                img {
                    display: block;
                    flex: 0 0 20px;
                    margin: 4px 8px 0 0;
                    width: 20px;
                    height: 20px;
                }
            }
        }
        .menu {
            ul {
                display: flex;
                justify-content: space-around;
                align-items: center;
                padding: 42px 0 18px 0;
                width: 100%;
                text-align: center;
                @include border-1px(#e5e5e5);
                li {
                    width: 100%;
                    img {
                        display: block;
                        margin: 0 auto 6px auto;
                    }
                }
            }
        }
        .nearby {
            color: #8998a0;
            .title {
                padding-left: 15px;
                height: 25px;
                line-height: 25px;
                color: #8998a0;
            }
            .houses {
                ul {
                    padding-top: 0.1px;
                    background: #eeeef4;
                    a.house_detail {
                        display: flex;
                        margin: 6px 6px 0 6px;
                        padding: 6px;
                        width: calc(100% - 24px);
                        background: #fff;
                        img {
                            display: block;
                            flex: 0 0 120px;
                            width: 120px;
                            height: 95px;
                        }
                        .content {
                            flex: 1;
                            min-width: 0;
                            padding-left: 8px;
                            .name {
                                margin: 5px 5px 12px 0;
                                padding: 0;
                                width: calc(100% - .1px);
                                color: #2d3337;
                                font-size: 14px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }
                            .desc {
                                .price {
                                    float: right;
                                    color: #ff9a38;
                                    font-size: 12px;
                                    .count {
                                        padding-right: 3px;
                                        font-size: 17px;
                                    }
                                }
                            }
                            .location {
                                padding: 5px 0 8px 0;
                                @include border-1px(#e5e5e5);
                                img {
                                    float: left;
                                    display: block;
                                    margin-right: 6px;
                                    width: 12px;
                                    height: 12px;
                                }
                            }
                            .extra {
                                width: calc(100% - 0.1px);
                                span {
                                    display: inline-block;
                                    margin-top: 6px;
                                    padding: 3px 4px;
                                    font-size: 10px;
                                    background: #eeeff4;
                                }
                            }
                        }            
                    }
                    .find_all {
                        padding: 20px 0 20px;
                        width: 100%;
                        font-size: 14px;
                        text-align: center;
                        text-decoration: underline;
                        a {
                            color: #4fcbff;
                        }
                    }
                }
            }
        }
    }
}
</style>