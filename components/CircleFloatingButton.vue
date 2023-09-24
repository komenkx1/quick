<template>
    <div>
        <!-- //circle floating button -->
        <div class="fixed bottom-0 right-0 mb-4 mr-[34px] flex gap-[26px] items-center">
            <transition v-for="(child, i) in childMenu"
                :enter-active-class="'transition ease-out duration-' + i + '00 transform'"
                enter-from-class="translate-x-full" enter-to-class="translate-x-0"
                leave-active-class="transition ease-in duration-300 transform" leave-from-class="translate-x-0"
                leave-to-class="translate-x-full">
                <!-- add transition fade left -->
                <CircleChildFloatingButton v-if="isShowChild" @active="isActiveChild" :childMenu="childMenu"
                    :class="child.isActive == true ? 'order-last' : ''" :child="child" :logo="child.icon"
                    :activeLogo="child.activeIcon" color="white" class="index-30" />
            </transition>

            <button id="quickActionButton" @click="showChild"
                :class="[`bg-primary-one index-50 mt-3 p-[6px] text-white rounded-full w-[68px] h-[68px] flex items-center justify-center shadow-lg`, !isQuickActionButtonShow ? 'hidden' : '']">
                <img :src="`/images/${logo}`" />

            </button>

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
