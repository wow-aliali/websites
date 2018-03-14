<template>
    <transition name="move">
        <div class="house_detail_wrap" ref="houseDetail">
            <div class="house_detail">
                <div class="house_img" ref="houseImg">
                    <ul ref="houseImgList">
                        <li v-for="(src, index) of house_src" :key="index" class="house_img_item">
                            <img :src="src" alt="房间图" width="100%">
                        </li>
                    </ul>
                    <p class="top_btn clearfix">
                        <a class="back" href="javascript:history.back();">
                            <img src="../../static/image/house_detail_top_1.png" alt="返回" width="25" height="25">
                        </a>
                        <a class="more" @click="isMoreContentShow = !isMoreContentShow">
                            <img src="../../static/image/house_detail_top_3.png" alt="更多" width="25" height="25">
                            <transition name="fade">
                                <div class="more_content" v-show="isMoreContentShow">
                                    <ul>
                                        <li><a href="#"><img src="../../static/image/house_detail_top_more_1.png" alt="" width="25" height="25"> 分享</a> <span class="triangle"></span></li>
                                        <li><a href="#"><img src="../../static/image/house_detail_top_more_2.png" alt="" width="25" height="25"> 举报</a></li>
                                        <li><a href="#">复制链接</a></li>
                                    </ul>
                                </div>
                            </transition>
                        </a>
                        <a class="collect" @click="collectActive">
                            <img ref="collect" src="../../static/image/house_detail_top_2.png" alt="收藏" width="25" height="25">
                        </a>
                    </p>
                </div>
                <div class="house_content" v-if="houses.length">
                    <div class="house_outline">
                        <p class="name">{{ houses[0].sellType }} · {{ houses[0].housename }} · {{ houses[0].roomCount }}居室</p>
                        <p class="style clearfix">
                            <span class="price"><span class="count">{{ houses[0].price }}</span> 元/月</span>
                            <span>{{ houses[0].roomDirection }}</span>
                            <span>{{ houses[0].roomSize }}㎡</span>
                            <span>{{ houses[0].roomType }}</span>
                        </p>
                        <p class="extra">
                            <span v-if="houses[0].extra.shortSell">可短租</span>
                            <span>{{ houses[0].extra.deposit }}</span>
                            <span v-if="houses[0].extra.centralFlat">集中公寓</span>
                            <span v-if="houses[0].extra.toilet">独卫</span>
                            <span v-if="houses[0].extra.kitchen">独厨</span>
                            <span>{{ houses[0].extra.decoration }}</span>
                        </p>
                    </div>
                    <div class="gap"></div>
                    <div class="room_info">
                        <h5 class="common_title">房间信息</h5>
                        <p>
                            <span><span class="info_name">面积 : </span>{{ houses[0].roomSize }}/{{ houses[0].roomSize }}㎡</span>
                            <span><span class="info_name">户型 : </span>{{ houses[0].houseType }}</span>
                        </p>
                        <p>
                            <span><span class="info_name">楼层 : </span>{{ houses[0].floor }}</span>
                            <span><span class="info_name">装修 : </span>{{ houses[0].extra.decoration }}</span>
                        </p>
                        <p><span class="info_name">编号 : </span>{{ houses[0].number }}</p>
                        <p><span class="info_name">更新时间 : </span>{{ houses[0].updateTime }}</p>
                    </div>
                    <div class="gap"></div>
                    <div class="location">
                        <h5 class="common_title">位置信息</h5>
                        <div class="map"></div>
                        <p><img src="../../static/image/location.png" alt="位置" width="11" height="12">荔湾 - 窑口 - 芳村大道西327-7号</p>
                        <p><img src="../../static/image/location_subway.png" alt="附近地铁" width="12" height="12">距5号线 - 坦尾站 - 2305m</p>
                    </div>
                    <div class="gap"></div>
                    <div class="device">
                        <h5 class="common_title">独用设施</h5>
                        <div class="device_list">
                            <span><img src="https://img.loulifang.com.cn/other/20/96/200B6944EA2140160AE9A64373B074316696.png" alt="" width="30" height="30">厨房</span>
                            <span><img src="https://img.loulifang.com.cn/other/14/72/14392F869C8D5778332A0956AC14C1CC8572.png" alt="" width="30" height="30">卫生间</span>
                            <span><img src="https://img.loulifang.com.cn/other/57/56/576771570323F1C0AA68269A9F0A63CF8656.png" alt="" width="30" height="30">冰箱</span>
                            <span><img src="https://img.loulifang.com.cn/other/FD/32/FD2E24C46DAA0671430911D135C2513A3232.png" alt="" width="30" height="30">空调</span>
                            <span @click="allDeviceShow(true)"><span class="img">+8</span>更多</span>
                        </div>
                    </div>
                    <div class="gap"></div>
                    <div class="offer">
                        <h5 class="common_title">报价</h5>
                        <div class="offer_wrap">
                            <p><img class="avatar" src="../../static/image/detail_landlord_avatar.jpg" alt="房东头像" width="35" height="35"></p>
                            <p><span class="top">房东直租</span>李林峰</p>
                            <p><span class="top">每月房租</span><span class="price"><span class="count">1888</span>元</span></p>
                            <p><span class="top">服务费<img class="help" src="../../static/image/detail_price_help.png" alt="帮助" width="10" height="10"></span><span class="count">270</span>元</p>
                            <p class="floatR"><img src="../../static/image/detail_offer_call.png" alt="" width="22" height="22">电话</p>
                            <p class="floatR"><img src="../../static/image/detail_offer_contect.png" alt="" width="22" height="22">交谈</p>
                        </div>
                    </div>
                    <div class="gap"></div>
                    <div class="intro">
                        <h5 class="common_title">房间介绍</h5>
                        <p class="text" ref="introText">{{ houses[0].roomIntro }}</p>
                        <p><img @click="showAllIntro($event)" src="../../static/image/detail_roomIntro_slideDown.png" alt="展开全文" width="20" height="10"></p>
                    </div>
                    <div class="gap"></div>
                    <div class="nearby_houses">
                        <h5 class="common_title">附近相似房源</h5>
                        <div class="houses_list" ref="nearbyHouses">
                            <ul ref="nearbyHousesList">
                                <li v-for="(house, index) of houses6" :key="index">
                                    <img :src="house.image" alt="房子图片" width="120" height="100">
                                    <div class="text">
                                        <p><span class="count">{{ house.price }}</span> 元/月</p>
                                        <p>荔湾 - 窑口</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="detail_bottom">
                <span @click="collectActive"><img ref="collectBottom" src="../../static/image/house_detail_top_collect.png" width="18" height="18" >收藏</span>
                <span @click="appointActive"><img ref="appoint" src="../../static/image/house_detail_top_appoint.png" width="18" height="18" >预约</span>
                <span class="call"><button>电 话 咨 询</button></span>
            </div>
            <AllDevice :houses="houses" @allDeviceShow="allDeviceShow" v-show="isAllDeviceShow" />
        </div>
    </transition>
</template>

<script>
import BScroll from "better-scroll";
import AllDevice from "@/components/alldevice";

export default {
    name: "houseDetail",
    data() {
        return {
            src: [],
            isMoreContentShow: false,
            isCollectActive: false,
            isAppointActive: false,
            isIntroTextShowAll: false,
            isAllDeviceShow: false
        };
    },
    props: {
        houses: Array
    },
    computed: {
        house_src() {
            for (let i = 0; i < 6; i++) {
                let item = require("../../static/image/house_img_" + (i + 1) + ".jpg");
                this.src.push(item);
            }
            return this.src;
        },
        houses6() {
            // 附近相似房源
            return this.houses.slice(0, 6);
        }
    },
    mounted() {
        this._initHouseImg();
        this._initScroll();
    },
    watch: {
        houses6() {
            this._initNearbyHouseImg();
        }
    },
    methods: {
        _initScroll() {
            if (!this.detailScroll) {
                this.detailScroll = new BScroll(this.$refs.houseDetail, {
                    click: true
                });
            }
        },
        _initHouseImg() {
            let width = document.body.clientWidth * 6;
            this.$refs.houseImgList.style.width = width + "px";
            this.$nextTick(() => {
                if (!this.adScroll) {
                    this.adScroll = new BScroll(this.$refs.houseImg, {
                        scrollX: true,
                        eventPassthrough: "vertical",
                        snap: true, // 隔断（翻页）
                        snapLoop: true, // 无限滚动
                        snapThreshold: 0.3,
                        snapSpeed: 800 // 滑动的时间
                    });
                } else {
                    this.adScroll.refresh();
                }
            });
        },
        _initNearbyHouseImg() {
            this.$nextTick(() => {
                if (!this.nhouseScroll) {
                    this.nhouseScroll = new BScroll(this.$refs.nearbyHouses, {
                        scrollX: true,
                        eventPassthrough: "vertical"
                    });
                } else {
                    this.nhouseScroll.refresh();
                }
            });
        },
        collectActive() {
            // 收藏按钮切换
            this.isCollectActive = !this.isCollectActive;
            if (this.isCollectActive) {
                this.$refs.collect.src =
                    require("../../static/image/house_detail_top_2_active.png");
                this.$refs.collectBottom.src =
                    require("../../static/image/house_detail_top_collect_select.png");
            } else {
                this.$refs.collect.src =
                    require("../../static/image/house_detail_top_2.png");
                this.$refs.collectBottom.src =
                    require("../../static/image/house_detail_top_collect.png");
            }
        },
        appointActive() {
            this.isAppointActive = !this.isAppointActive;
            if (this.isAppointActive) {
                this.$refs.appoint.src =
                    require("../../static/image/house_detail_top_appoint_select.png");
            } else {
                this.$refs.appoint.src =
                    require("../../static/image/house_detail_top_appoint.png");
            }
        },
        showAllIntro(event) {
            if (!this.isIntroTextShowAll) {
                this.$refs.introText.style.height = "auto";
                event.target.src =
                    require("../../static/image/detail_roomIntro_slideUp.png");
            } else {
                this.$refs.introText.style.height = "48px";
                event.target.src =
                    require("../../static/image/detail_roomIntro_slideDown.png");
            }
            this.isIntroTextShowAll = !this.isIntroTextShowAll;
        },
        allDeviceShow(bool) {
            this.isAllDeviceShow = bool
        }
    },
    components: {
        AllDevice
    }
};
</script>

<style lang="scss">
@import "../assets/scss/mixin.scss";

.house_detail_wrap {
    position: absolute;
    top: 0;
    bottom: 55px;
    left: 0;
    width: 100%;
    background: #fff;
    overflow: hidden;
    &.move-enter,
    &.move-leave-to {
        left: 100%;
    }
    &.move-enter-active,
    &.move-leave-active {
        transition: left 0.5s ease-out;
    }
    .house_detail {
        .house_img {
            position: relative;
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            ul {
                font-size: 0;
                li.house_img_item {
                    display: inline-block;
                    width: calc(100%/6);
                }
            }
            .top_btn {
                position: absolute;
                top: 0;
                left: 0;
                padding: 10px 10px;
                height: 25px;
                width: calc(100% - 20px);
                > a {
                    display: block;
                    float: left;
                    width: 25px;
                    height: 25px;
                    background: rgba(0, 0, 0, 0.5);
                    border-radius: 100%;
                    &.collect {
                        margin-right: 16px;
                    }

                    &.collect,
                    &.more {
                        float: right;
                    }
                    img {
                        transform: scale(0.8);
                    }
                }
                .more {
                    position: relative;
                    .more_content {
                        position: absolute;
                        top: 35px;
                        right: 0;
                        text-align: center;
                        background: #fff;
                        border-radius: 3px;
                        box-shadow: 0 0 6px #555;
                        li:first-of-type {
                            position: relative;
                            .triangle {
                                display: block;
                                position: absolute;
                                top: -4px;
                                right: 9px;
                                width: 8px;
                                height: 8px;
                                background: #fff;
                                transform: rotate(45deg);
                            }
                        }
                        li:last-of-type {
                            a {
                                @include border-none;
                            }
                        }
                        a {
                            display: block;
                            width: 70px;
                            height: 30px;
                            margin: 0 7px;
                            line-height: 30px;
                            font-size: 12px;
                            @include border-1px(#e5e5e5);
                            img {
                                display: inline-block;
                                vertical-align: top;
                                margin-top: 2px;
                            }
                        }
                        &.fade-enter,
                        &.fade-leave-to {
                            opacity: 0;
                        }
                        &.fade-enter-active,
                        &.fade-leave-active {
                            transition: opacity 0.6s;
                        }
                    }
                }
            }
        }
        .house_outline {
            padding: 0 12px;
            font-size: 12px;
            .name {
                line-height: 40px;
                font-size: 14px;
                @include border-1px(#e5e5e5);
            }
            .style {
                padding: 7px 0;
                width: 100%;
                line-height: 20px;
                border-bottom: 1px solid #e5e5e5;
                > span {
                    display: block;
                    float: right;
                    padding: 0 20px;
                    border-left: 1px solid #e5e5e5;
                    &.price {
                        float: left;
                        color: #ff9a38;
                        padding-left: 0;
                        border: none;
                        .count {
                            font-size: 16px;
                        }
                    }
                }
            }
            .extra {
                line-height: 35px;
                span {
                    display: inline-block;
                    padding: 0 4px;
                    line-height: 20px;
                    font-size: 11px;
                    color: #afafaf;
                    border: 1px solid #ccc;
                    border-radius: 50px;
                }
            }
        }
        .gap {
            width: 100%;
            height: 10px;
            background: #eeeef4;
        }
        .common_title {
            margin: 8px 0;
            padding-left: 5px;
            color: rgb(126, 126, 126);
            border-left: 2px solid #55acff;
        }
        .room_info {
            padding: 8px 12px;
            p {
                font-size: 13px;
                line-height: 26px;
                .info_name {
                    color: rgb(122, 122, 122);
                }
                &:nth-of-type(1),
                &:nth-of-type(2) {
                    display: flex;
                    justify-content: space-between;
                    span {
                        width: 50%;
                    }
                }
            }
        }
        .location {
            padding: 8px 12px;
            .map {
                margin: 10px 0;
                width: 100%;
                height: 100px;
                line-height: 100px;
                font-size: 20px;
                text-align: center;
                background: url("../../static/image/detail_map.png") center
                    center no-repeat;
                background-size: cover;
            }
            p {
                display: flex;
                align-items: center;
                line-height: 25px;
                img {
                    margin-right: 5px;
                }
            }
        }
        .device {
            padding: 8px 12px;
            .device_list {
                display: flex;
                justify-content: space-around;
                align-items: flex-end;
                margin: 25px 0;
                span {
                    color: rgb(114, 114, 114);
                    text-align: center;
                    img,
                    .img {
                        display: block;
                        margin: 0 auto 6px auto;
                        color: #4fcbff;
                        font-size: 20px;
                    }
                }
            }
        }
        .offer {
            padding: 8px 12px;
            .offer_wrap {
                margin: 20px 0;
                p {
                    display: inline-block;
                    vertical-align: top;
                    margin-right: 5px;
                    font-size: 13px;
                    img:not(.help) {
                        display: block;
                        border-radius: 100%;
                    }
                    .help {
                        margin-left: 3px;
                    }
                    .top {
                        display: block;
                        margin-bottom: 10px;
                        color: #8b9aa2;
                        font-size: 12px;
                    }
                    .price {
                        color: #ff9a38;
                    }
                    .count {
                        font-size: 15px;
                    }
                    &.floatR {
                        float: right;
                        padding: 0 4px;
                        font-size: 11px;
                        color: #8b9aa2;
                        &:first-of-type {
                            color: #4fcbff;
                            background: #000;
                        }
                        img {
                            margin-bottom: 3px;
                        }
                    }
                    &:nth-of-type(5) {
                        color: #4fcbff;
                    }
                    &:nth-of-type(6) {
                        padding-left: 8px;
                        border-left: 1px solid #e5e5e5;
                    }
                }
            }
        }
        .intro {
            padding: 8px 12px;
            .text {
                overflow: hidden;
                padding-top: 5px;
                height: 48px;
                line-height: 23px;
            }
            img {
                display: block;
                margin: 10px auto;
            }
        }
        .nearby_houses {
            padding: 8px 12px;
            .houses_list {
                position: relative;
                margin: 10px 0 6px 0;
                width: 100%;
                overflow: hidden;
                white-space: nowrap;
                ul {
                    width: 760px;
                    font-size: 0;
                    li {
                        position: relative;
                        display: inline-block;
                        &:not(:last-of-type) {
                            margin-right: 8px;
                        }
                        .text {
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            padding: 4px 0 4px 4px;
                            width: calc(100% - 4px);
                            color: rgb(214, 214, 214);
                            font-size: 10px;
                            background: rgba(0, 0, 0, 0.6);
                            p {
                                height: 16px;
                                line-height: 16px;
                                .count {
                                    font-size: 13px;
                                    color: #fff;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
.detail_bottom {
    display: flex;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 55px;
    text-align: center;
    background: #fff;
    border-top: 1px solid #ddd;
    span {
        flex: 0 0 65px;
        width: 65px;
        color: rgb(110, 110, 110);
        border-right: 1px solid #e5e5e5;
        &.call {
            flex: 1;
            border: none;
            button {
                width: 90%;
                height: 36px;
                color: #fff;
                background: #4fcbff;
                border: none;
                border-radius: 50px;
                outline: 0;
            }
        }
        img {
            display: block;
            margin: 0 auto 6px auto;
        }
    }
}
</style>