<template>
    <div
        class="bottom-[110px] overflow-y-auto right-0 fixed w-[764px] h-[537px] bg-white ml-auto mr-[34px] rounded-[5px] border-1 border-[#BDBDBD]">
        <LoadingIndicator v-if="isLoading" text="Loading Task List ..." />
        <transition v-else enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-out" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <div class="mx-[22px] my-[24px] bg-white">
                <div class="grid grid-cols-4 justify-end">
                    <select name="" id="" class="border-2 w-[Hug (118.55px)] rounded-md py-[10px] px-[14px] ml-auto">
                        <option value="" disabled selected hidden>My Task</option>
                        <option value="">Personal Errands</option>
                        <option value="">Urgent To-Do</option>
                    </select>
                    <BaseButton @click="toogleOpenForm" text="New Task" class="text-white ml-auto  col-span-3 " />
                </div>
                <ToDoList :isNewTask="isNewTask" @closeForm="closeForm" />
            </div>
        </transition>

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
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        show(val) {
            if (val) {
                this.isLoading = true
                setTimeout(() => {
                    this.isLoading = false
                }, 2000)
            }
        },
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