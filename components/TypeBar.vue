
<template>
    <div>
        <div
            :class="['bg-[#F2F2F2] border border-[1px] border-[#828282] px-[16px] py-[8px] rounded-t-md', ('message' in messageReply) ? '' : 'hidden ']">
            <div class="flex justify-between items-center">
                <div class="name font-bold">
                    {{ messageReply.sender ?? '' }}
                </div>
                <div class="close">
                    <img class="w-[14px] h-[14px] cursor-pointer" :src="`/images/close.png`" @click="cancel()" />
                </div>
            </div>
            <div class="message">
                {{ messageReply.message ?? '' }}
            </div>
        </div>
        <div class="flex gap-[13px]">
            <input type="text" v-model="childForm"
                :class="['border-[1px] border-[#828282] px-[16px] py-[8px]  w-full', messageReply.message ? 'rounded-b-md' : 'rounded-[5px]']"
                placeholder="Type a new message" />
            <!-- <BaseButton text="send" class="text-white" /> -->

        </div>
    </div>
</template>

<script>
export default {
    props: {
        modelValue: String,
        messageReply: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            childForm: this.modelValue,

        }
    },
    watch: {
        childForm(newForm) {
            this.$emit('update:modelValue', newForm);
        }
    },
    methods: {
        cancel() {
            this.$emit('cancel')
        }
    }
}
</script>