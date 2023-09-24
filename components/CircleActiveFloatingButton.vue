<template>
    <div class="flex gap-[16px]">
        <div class="active-button-action ">
            <button
                :class="[`bg-${color} z-50 p-[6px] absolute ml-[15px]  text-white rounded-full w-[60px] h-[60px] flex items-center justify-center shadow-lg`]">
                <img class="w-[26.67px] h-[26.67px]" :src="`_nuxt/assets/images/${logo}`" />
            </button>
            <button
                :class="[`bg-[#4F4F4F] z-20 p-[6px] right-[0px]  text-white rounded-full w-[60px] h-[60px] flex items-center justify-center shadow-lg`]">
            </button>
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
        color: {
            type: String,
            default: 'primary-one'
        }
    },

    data() {
        return {
            isShowChild: false
        }
    },
    methods: {
        showChild() {
            this.isShowChild = !this.isShowChild
        }
    },
}
</script>