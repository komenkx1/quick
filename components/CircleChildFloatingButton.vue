<template>
    <div>
        <!-- //circle floating button -->
        <div class="flex gap-[26px] items-center text-white" @click="active">
            <CircleActiveFloatingButton :color="child.activeBgColor" :logo="activeLogo" v-if="this.childInfo.isActive" />
            <div class="default-button text-center" v-else>
                <span class="font-bold" v-if="isQuickActionButtonShow">{{ childInfo.title }}</span>
                <button
                    :class="[`bg-white z-50 p-[6px] my-3 text-white rounded-full w-[60px] h-[60px] flex items-center justify-center shadow-lg`]">
                    <img class="w-[26.67px] h-[26.67px]" :src="`/images/${logo}`" />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        logo: {
            type: String,
            default: 'lightning.png'
        },
        activeLogo: {
            type: String,
            default: 'lightning.png'
        },
        color: {
            type: String,
            default: 'primary-one'
        },
        child: {
            type: Object,
            default: {}
        },
        childMenu: {
            type: Array,
            default: () => []
        },
    },

    data() {
        return {
            childInfo: this.child
        }
    },
    watch: {
        childInfo(val) {
            this.$emit('update:child', val)
        }
    },
    computed: {
        isQuickActionButtonShow() {
            return this.childMenu.every((child) => child.isActive == false)
        }
    },
    methods: {
        active() {
            this.childInfo.isActive = !this.childInfo.isActive
            this.$emit('active', this.childInfo)
        }
    },
}
</script>