<template>
    <div>
        <div class="bg-white w-full bg-[#F9F9F9] p-1 my-2 w-[630px]">
            <Popper class="w-full p-0 m-0 ">
                <div class="flex items-center gap-3 w-[600px] ml-3 bg-[#F9F9F9] rounded-[5px]">
                    <div class="logo px-2 py-2">
                        <img src="/images/save.png" class="w-[20px]" alt="" v-if="selectedSticker.length > 0">
                        <img src="/images/save-gray.png" class="w-[18px]" alt="" v-else>
                    </div>
                    <perfect-scrollbar class="px-2 py-2">
                        <div class="selected flex gap-3 items-center w-[600px] ">
                            <div :class="['items px-[12px] py-[8px] rounded-[5px] ', `bg-[${item.color}]`]"
                                v-for="item in selectedSticker">
                                <p class="font-bold text-[12px] w-[120px] text-center ">{{ item.text }}</p>
                            </div>
                        </div>
                    </perfect-scrollbar>
                </div>
                <template #content>
                    <div class="bg-white text-start border-[1px] rounded-[5px] border-[#BDBDBD] w-[277px]">
                        <div class="w-full" v-for="(item, index) in listSticker" @click="addSticker(item)">
                            <div
                                :class="['item m-[16px] rounded-[5px]', `bg-[${item.color}]`, selectedSticker.some(selected => selected.text == item.text) ? 'border-[2px] border-primary-one' : '']">
                                <button :class="`w-full text-start p-[9px]`">{{ item.text }}</button>
                            </div>

                        </div>
                    </div>
                </template>
            </Popper>
        </div>
    </div>
</template>

<script>
import Popper from "vue3-popper";

export default {
    components: {
        Popper,
    },
    props: {
        data: {
            type: Object,
            default: {}
        },

    },
    methods: {
        addSticker(item) {
            const isExist = this.selectedSticker.some(selected => selected.text == item.text)
            if (isExist) {
                this.selectedSticker = this.selectedSticker.filter(selected => selected.text != item.text)
                return
            } else {
                this.selectedSticker.push(item)
            }
        }
    },
    data() {
        return {
            selectedSticker: [],
            listSticker: [
                { color: '#E5F1FF', text: 'Important ASAP' },
                { color: '#FDCFA4', text: 'Offline Meeting' },
                { color: '#F9E9C3', text: 'Virtual Meeting' },
                { color: '#AFEBDB', text: 'ASAP' },
                { color: '#CBF1C2', text: 'Client Related' },
                { color: '#CFCEF9', text: 'Self Task' },
                { color: '#F9E0FD', text: 'Appointments' },
                { color: '#9DD0ED', text: 'Court Related' },
            ]
        }
    }
}
</script>