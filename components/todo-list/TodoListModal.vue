<template>
    <div
        class="bottom-[110px] overflow-y-auto right-0 fixed w-[734px] h-[537px] bg-white ml-auto mr-[34px] rounded-[5px] border-1 border-[#BDBDBD]">

        <transition :enter-active-class="'transition ease-out duration-3000 transform'" enter-from-class="translate-x-full"
            enter-to-class="translate-x-0" leave-active-class="transition ease-in duration-300 transform"
            leave-from-class="translate-x-0" leave-to-class="translate-x-full">
            <div class="mx-[22px] my-[24px] bg-white">
                <div class="grid grid-cols-4 justify-end">
                    <select name="" id="" class="border-2 w-[Hug (118.55px)] rounded-md py-[10px] px-[14px] ml-auto">
                        <option value="" disabled selected hidden>My Task</option>
                        <option value="" >Personal Errands</option>
                        <option value="" >Urgent To-Do</option>
                    </select>
                    <BaseButton @click="toogleOpenForm" text="New Task" class="text-white ml-auto  col-span-3 " />
                </div>
                <ToDoList :isNewTask="isNewTask" @closeForm="closeForm" />
            </div>
        </transition>

        <LoadingIndicator v-if="isLoading" />
    </div>
</template>

<script>

import ToDoList from './ToDoList'

export default {
    setup() {
        const store = useStore();

        return {
            store
        }
    },
    mounted() {

    },
    data() {
        return {
            isLoading: false,
            isNewTask: false,
        }
    },
    methods: {
        toogleOpenForm() {
            this.isNewTask = !this.isNewTask
        },
        closeForm() {
            this.isNewTask = false
        }
    },
    components: { ToDoList }
}
</script>