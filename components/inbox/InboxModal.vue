<template>
    <div
        class="bottom-[110px] overflow-y-auto right-0 fixed w-[764px] h-[537px] bg-white ml-auto mr-[34px] rounded-[5px] border-1 border-[#BDBDBD]">

        <LoadingIndicator v-if="isLoading" text="Loading Chats ..." />

        <transition v-else enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-out" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <div class="">

                <div class="mx-[22px] my-[24px] bg-white " v-if="!('id' in chatSelected)">
                    <div class="header sticky top-4 bg-white z-[9999]">
                        <SearchInput class="bg-white" v-model="searchInput" />
                    </div>
                    <ChatList :chatData="chatData" @setSelectedMessage="setSelectedMessage" />
                </div>
                <ChatRoom @backToListMessage="backToListMessage" :chatSelected="chatSelected" v-else />
            </div>
        </transition>

    </div>
</template>

<script>
import ChatRoom from './ChatRoom.vue';
import ChatList from './ChatList.vue';

export default {
    setup() {
        const store = useStore()
        return {
            store
        }
    },
    data() {
        return {
            chatSelected: {},
            isLoading: false,
            searchInput: '',
            chatData: this.store.$state.listChat
        }
    },
    mounted() {
        this.isLoading = true
        setTimeout(() => {
            this.isLoading = false
        }, 2000)
    },
    watch: {
        searchInput(newSearch) {
            const searchInput = this.searchInput

            const data = this.chatData.filter((chat) => {
                return chat.chatName.toLowerCase().includes(searchInput.toLowerCase())
            })
            if (searchInput == '') {
                this.chatData = this.store.$state.listChat
            } else {
                this.chatData = data
            }
        }
    },
    computed: {

    },
    methods: {
        setSelectedMessage(data) {
            this.chatSelected = data
        },
        backToListMessage(data) {
            this.chatSelected = data
        }
    },
    components: { ChatList, ChatRoom }
}
</script>