<template>
    <form ref="form">
        <div class="flex items-center mx-[5px] mt-[22px] flex-wrap cursor-pointer">
            <div class="header flex items-center">
                <input type="checkbox" :true-value="true" :false-value="false">
                <div class="w-[435px]" @click="toggleOpen">
                    <input required v-model="childForm.name" type="text" placeholder="Type Task Title"
                        class="border-[1px] w-[380px] h-[40px] p-[14.22px] rounded-[5px] border-[#828282] ml-[22px] mb-[12px]">
                </div>
                <div class="date-time flex items-center mr-auto">
                    <div class="flex ml-[56.33px] gap-[19.75px] justify-end" @click="toggleOpen">
                        <span class="text-red-600 w-[70px] h-[10px]">
                        </span>
                    </div>
                    <div class="action flex ml-[19.32px] items-center">
                        <div class="px-2" v-if="isOpen" @click="toggleOpen">
                            <img class="w-[24px] h-[24px]" :src="`/images/arrow-up.svg`">
                        </div>
                        <div class="px-2" v-else @click="toggleOpen">
                            <img class="w-[24px] h-[24px]" :src="`/images/arrow-down.png`">
                        </div>
                        <Dropdown :menuList="menuList" @action="actionHandleMenu" />
                    </div>
                </div>
            </div>
            <transition enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-out" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <div class="body" v-if="isOpen">
                    <div class="w-[543px] ml-[35px]">
                        <div class="input-date flex items-center gap-[18px]">
                            <img class="w-[20px] h-[20px]" v-if="childForm.dueDate == null" :src="`/images/clock-grey.png`">
                            <img class="w-[20px] h-[20px] bg-grey-5000" v-else :src="`/images/clock.png`">
                            <DatePicker :input-attr="{ required: 'required' }" value-type="MM/DD/YYYY" type="date"
                                format="MM/DD/YYYY" v-model:value="childForm.dueDate" placeholder="Set Date" />
                        </div>
                        <div class="input-date flex items-start gap-[22px] mt-[13px]">
                            <img class="w-[15px] h-[15px]" v-if="childForm.desc == ''" :src="`/images/pencil-grey.png`">
                            <img class="w-[15px] h-[15px]" v-else :src="`/images/pencil.png`">
                            <textarea v-model="childForm.desc" ref="textarea" @input="auto_grow($event)"
                                placeholder="No Description" class="w-full h-auto" style="resize: none;"></textarea>

                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </form>
</template>

<script>
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';
import Dropdown from '../inbox/Dropdown.vue';
import { useToast } from 'vue-toastification'
export default {
    setup() {
        const store = useStore()
        return {
            store
        }
    },
    components: {
        DatePicker,
        Dropdown
    },
    props: {
        modelValue: Object,
    },
    data() {
        return {
            toast: useToast(),
            isOpen: false,
            childForm: this.modelValue,
            menuList: [
                {
                    name: "Save",
                    color: "primary-one",
                    actions: "SAVE"
                },
                {
                    name: "Cancel",
                    color: "red-600",
                    actions: "CANCEL"
                }
            ]
        }
    },
    watch: {
        childForm(newForm) {
            this.$emit('update:modelValue', newForm);
        }
    },
    methods: {
        saveTodo() {
            this.$emit('save', this.childForm);
        },
        actionHandleMenu(action) {
            switch (action) {
                case 'SAVE':
                    //submit form program
                    if (this.childForm.name == '') {
                        return
                    }
                    if (this.childForm.dueDate == null) {
                        return
                    }
                    this.saveTodo()

                    break;

                default:
                    break;
            }
        },
        toggleOpen() {
            this.isOpen = !this.isOpen
        },
        auto_grow(event) {
            if (event.target.scrollHeight <= 57) {
                event.target.style.height = (event.target.scrollHeight) + "px";
            }
        }
    }
}
</script>