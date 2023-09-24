<template>
    <div
        class="bottom-[110px] overflow-y-auto right-0 fixed w-[734px] h-[737px] bg-white ml-auto mr-[34px] rounded-[5px] border-1 border-[#BDBDBD]">

        <transition :enter-active-class="'transition ease-out duration-3000 transform'" enter-from-class="translate-x-full"
            enter-to-class="translate-x-0" leave-active-class="transition ease-in duration-300 transform"
            leave-from-class="translate-x-0" leave-to-class="translate-x-full">
            <div class="mx-[22px] my-[24px] bg-white " v-if="!('id' in chatSelected)">
                <div class="header sticky top-4 bg-white ">
                    <SearchInput class="bg-white" />
                </div>
                <ChatList @setSelectedMessage="setSelectedMessage" />
            </div>
            <ChatRoom @backToListMessage="backToListMessage" :chatSelected="chatSelected" v-else />
        </transition>

        <LoadingIndicator v-if="isLoading" />
    </div>
</template>

<script>
import ChatRoom from './ChatRoom.vue';
import ChatList from './ChatList.vue';

export default {
    data() {
        return {
            chatSelected: {},
            isLoading: false
        }
    },
    methods: {
        setSelectedMessage(data) {
            this.chatSelected = data
        },
        backToListMessage(data) {
            this.chatSelected = data
            console.log(data)
        }
    },
    components: { ChatList, ChatRoom }
}
</script>