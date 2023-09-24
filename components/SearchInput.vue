<template>
    <div class="input-container w-full">
        <input type="text" placeholder="Search"
            class="border-[2px] pl-[58.82px] pr-[72px] bg-white py-[10px] w-full  border-[#828282] rounded-[5px]"
            v-model="childForm">
        <img :src="`/images/search_black.png`" class="input-icon" />
    </div>
</template>

<script>
export default {
    props: {
        modelValue: String
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
}
</script>