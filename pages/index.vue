<template>
    <div>
        <div class="flex items-start">
            <div class="divide w-[1px] bg-[#F2F2F2] min-h-screen ml-[282.5px]" />
            <div class="main-section w-full ml-1">
                <input type="text" class="bg-[#4F4F4F] search-parent">
                <transition v-if="isInbox || isTask" enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-out" leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0">
                    <InboxModal v-if="isInbox" />
                    <TodoListModal v-else />

                </transition>
            </div>
        </div>
        <CircleFloatingButton :childMenu="menuList" logo="lightning.png" />
    </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>

<script>
import TodoListModal from '~/components/todo-list/TodoListModal.vue';
import CircleFloatingButton from '../components/CircleFloatingButton.vue';

export default {
    setup() {
    },
    data() {
        return {
            isShowQuickButton: true,
            menuList: [
                {
                    action: 'TASK',
                    title: 'Task',
                    icon: 'book.png',
                    activeIcon: 'book-white.png',
                    activeBgColor: 'gold',
                    isActive: false
                },
                {
                    action: 'INBOX',
                    title: 'Inbox',
                    icon: 'message.png',
                    activeIcon: 'message-white.png',
                    activeBgColor: 'purple',
                    isActive: false
                },
            ]
        };
    },
    computed: {
        isInbox() {
            return this.menuList.find((child) => child.action == 'INBOX').isActive == true;
        },
        isTask() {
            return this.menuList.find((child) => child.action == 'TASK').isActive == true;
        }
    },
    methods: {
        showQuickButton() {
            this.isShowQuickButton = !this.isShowQuickButton;
        },
        isActiveChild() {
            this.$emit('active');
        }
    },
    components: { TodoListModal }
}
</script>