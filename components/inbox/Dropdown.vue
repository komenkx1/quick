<template>
    <div class="bg-white">
        <Popper>
            <img class="w-[24px] h-[24px]" :src="`/images/three-dot.png`">
            <template #content>
                <div class="bg-white text-start border-[1px] rounded-[5px] border-[#BDBDBD] w-[126px] max-h-[80px]">
                    <div class="w-full" v-for="(item, index) in menuList" @click="handleAction(item.actions)">
                        <div class="item px-[12px] py-[5px]">
                            <button :class="`text-${item.color} w-full text-start`">{{ item.name }}</button>
                        </div>
                        <hr class="border-[#BDBDBD]" v-if="index != item.length - 1">
                    </div>
                </div>
            </template>
        </Popper>
    </div>
</template>
  
<script>
import { defineComponent } from "vue";
import Popper from "vue3-popper";

export default defineComponent({
    props: {
        menuList: {
            type: Array,
            default: () => [
                {
                    name: "Edit",
                    color: "primary-one",
                    actions: "EDIT"
                },
                {
                    name: "Delete",
                    color: "red-600",
                    actions: "DELETE"
                }
            ],
        },
        data: {
            type: Object,
            default: {}
        }
    },
    components: {
        Popper,
    },

    methods: {
        handleAction(action) {
            return this.$emit("action", action, this.data);
        },
    },
});
</script>