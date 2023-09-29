<template>
    <div>
        <div
            :class="['fixed bottom-0 right-0 mb-4 mr-[34px] flex  items-center  transition-all duration-700 ease-in-out', !isQuickActionButtonShow ? 'gap-[16px]' : 'gap-[26px]']">
            <transition v-for="(child, i) in childMenu"
                :enter-active-class="'transition ease-out duration-' + i + '00 transform'"
                enter-from-class="translate-x-full" enter-to-class="translate-x-0"
                leave-active-class="transition ease-in duration-300 transform" leave-from-class="translate-x-0"
                leave-to-class="translate-x-full">
                <!-- add transition fade left -->
                <CircleChildFloatingButton v-if="isShowChild" @active="isActiveChild" :childMenu="childMenu"
                    :class="child.isActive == true ? 'order-last ' : ''" :child="child" :logo="child.icon"
                    :activeLogo="child.activeIcon" color="white" class="index-30 mt-2" />
            </transition>

            <div :class="['flex gap-[26px] items-center text-white transition-all ease-in-out', !isQuickActionButtonShow ? 'duration-700 transform blur-sm translate-x-[400px] scale-0 opacity-0 invisible w-0 order-last ' : 'duration-700 order-last transform  translate-x-[-0%] scale-100 opacity-100']"
                @click="showChild">
                <div class="default-button text-center">
                    <span class="font-bold invisible">devider</span>
                    <button id="quickActionButton"
                        :class="[`bg-primary-one z-50 text-white  mt-3 rounded-full w-[68px] h-[68px] flex items-center justify-center shadow-lg`]">
                        <img :src="`/images/${logo}`" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
    transition: transform 3000ms ease-out;
}

.slide-right-enter,
.slide-right-leave-to {
    transform: translateX(100%);
}
</style>
<script>
import CircleChildFloatingButton from './CircleChildFloatingButton.vue'
export default {
    props: {
        childMenu: {
            type: Array,
            default: () => []
        },
        color: {
            type: String,
            default: 'primary-one'
        },
        logo: {
            type: String,
            default: 'lightning.png'
        }
    },

    data() {
        return {
            isShowChild: false
        }
    },
    computed: {
        isQuickActionButtonShow() {
            return this.childMenu.every((child) => child.isActive == false)
        }
    },
    methods: {
        showChild() {
            this.isShowChild = !this.isShowChild
        },
        isActiveChild(data) {
            const actionButton = document.getElementById('quickActionButton')
            //unset active the previous active child
            this.childMenu.find((child) => child.action != data.action).isActive = false


        }
    },
}
</script>
