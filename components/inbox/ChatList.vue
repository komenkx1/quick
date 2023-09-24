<template>
    <div class=" px-1 my-1">

        <div @click="setSelectedMessage(chat)" v-for="(chat, i) in listChat" :key="i"
            class=" hover:bg-blue-200 hover:rounded-[5px] p-[2px] cursor-pointer ">
            <div class="list-chat">
                <div class=" items-center">
                    <div class="item-chat my-[22px] ">
                        <div class="flex gap-[37px]">
                            <div class="profile-pict-group">
                                <div v-if="!chat.isGroup"
                                    :class="[`bg-primary-one z-20 p-[6px] relative left-[10px] text-center text-white rounded-full w-[34px] h-[34px] flex items-center justify-center shadow-lg`]">
                                    <p>F</p>
                                </div>
                                <div v-else>
                                    <div
                                        :class="[`bg-primary-one z-50 p-[6px] absolute ml-[15px]  text-white rounded-full w-[34px] h-[34px] flex items-center justify-center shadow-lg`]">
                                        <img class="w-[18px] h-[18px]" :src="`/images/person-white.png`" />
                                    </div>
                                    <div
                                        :class="[`bg-[#E0E0E0] z-20 p-[6px] right-[0px]  text-white rounded-full w-[34px] h-[34px] flex items-center justify-center shadow-lg`]">
                                        <img class="w-[12px] h-[12px]" :src="`/images/person_black.png`" />
                                    </div>
                                </div>
                            </div>

                            <div class="item-info w-full">
                                <div class="info-time flex gap-[16px] items-start">
                                    <p class="text-primary-one font-bold text-[16px] max-w-[446px]">{{ chat.chatName }}</p>
                                    <p class="mr-1 mt-[2px] text-end text-[14px]">{{ chat.date }}</p>
                                </div>
                                <div class="grid grid-cols-2 w-full">
                                    <div class="desc">
                                        <div class="name" v-if="chat.isGroup">
                                            <p class="text-primary-two font-bold text-[14px]">
                                                {{ chat.lastChatPreview.sender }} :
                                            </p>
                                        </div>
                                        <div class="preview-message">
                                            <p class="text-primary-two font-regular text-[14px]">
                                                {{ chat.lastChatPreview.message }}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="ml-auto text-end rounded-full bg-[#EB5757] h-[10px] w-[10px]"
                                        v-if="chat.lastChatPreview.isNewMessage"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="time">
                    </div>
                </div>
                <hr class="bg-primary-three">
            </div>
        </div>

    </div>
</template>

<script>

export default {
    setup() {
        const store = useStore();

        return {
            store
        }
    },
    mounted() {
    },
    computed: {
        listChat() {
            const listChat = this.store.$state.listChat
            listChat.map((chat) => {
                chat.lastChatPreview = chat.chat[chat.chat.length - 1]
            })
            return this.store.$state.listChat
        }
    },
    methods: {
        setSelectedMessage(row) {
            this.$emit('setSelectedMessage', row)
        }
    }
}
</script>