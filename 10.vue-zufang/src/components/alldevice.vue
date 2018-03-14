<template>
    <transition name="device-slide">
        <div class="more-device" v-if="houses.length">
            <a @click="allDeviceShow"><img src="../../static/image/gray_close.png" alt="关闭页面" width="20" height="20"></a>
            <ul>
                <li class="border-1px" v-for="(device, index) of houses[0].device" :key="index">
                    {{ device.name }}
                    <img :src="device.src" width="30" height="30">
                </li>
            </ul>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'allDevice',
    props: {
        houses: Array
    },
    methods: {
        allDeviceShow() {
            this.$emit("allDeviceShow", false);
        }
    }
}
</script>

<style lang="scss">
@import "../assets/scss/mixin.scss";

.more-device {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 10;
    &.device-slide-enter, &.device-slide-leave-to {
        top: 100%;
    }
    &.device-slide-enter-active, &.device-slide-leave-active {
        transition: top .4s ease-in-out;
    }
    a {
        display: block;
        margin: 10px 0 0 15px;
    }
    ul {
        padding: 10px 15px;
        font-size: 14px;
        li {
            width: 100%;
            line-height: 45px;
            @include border-1px(#e5e5e5);
            &:last-of-type {
                @include border-none;
            }
            img {
                display: block;
                float: right;
                margin-top: 6px;
            }
        }
    }
}
</style>