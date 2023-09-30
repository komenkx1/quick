<template>
    <div class="relative">
        <div class="">
            <div class="header sticky top-0 bg-white z-10">
                <div class="px-[25px] py-[23px]  w-full ">
                    <div class="flex  items-center justify-between items-center mt-1">
                        <div class="left-section flex items-center gap-[14.43px] cursor-pointer">
                            <img @click="backToListMessage()" class="w-[24px] h-[24px]"
                                :src="`/images/left-arrow-white.png`">
                            <div class="info-time ">
                                <p class="text-primary-one font-bold text-[16px]">{{ chatSelected.chatName }}</p>
                                <p v-if="chatSelected.isGroup" class="text-[12px]">3 Participants</p>
                            </div>
                        </div>
                        <img class="w-[14px] h-[14px] cursor-pointer" :src="`/images/close.png`"
                            @click="backToListMessage()">
                    </div>
                </div>
                <hr class="bg-[#BDBDBD] my-[13px]">
            </div>

            <div class="body px-[25px] pb-[15px] relative  min-h-[500px]">
                <div class="" v-for="date in listDateMessage">
                    <div class="flex items-center my-[15px] group-by-date" v-if="date != dateToday">
                        <div class="bg-[#4F4F4F] w-full h-[1px]"></div>
                        <p class="w-full text-center text-[12px]">{{ date }}</p>
                        <div class="bg-[#4F4F4F] w-full h-[1px]"></div>
                    </div>
                    <div class="chat" v-for="chatItem in chatSelected.chat">
                        <div v-if="isContainDate(chatItem, date)">
                            <div class="flex items-center my-[15px] new-message" ref="newMessagePoint"
                                v-if="chatItem.isNewMessage">
                                <div class="bg-[#EB5757] w-full h-[1px]"></div>
                                <p class="w-full text-center text-[#EB5757] text-[12px]">New Message</p>
                                <div class="bg-[#EB5757] w-full h-[1px]"></div>
                            </div>
                            <div v-if="chatItem.sender != 'You'" class="inbox flex flex-col items-start my-[10px]">
                                <p
                                    :class="['font-bold', chatItem.sender == 'Mary Hilda' ? 'text-inbox-chat-title-1' : chatItem.sender == 'Obaidullah Amarkhil' ? 'text-inbox-chat-title-2' : 'text-primary-one']">
                                    {{ chatItem.sender }}</p>
                                <div class="flex items-start mt-2 gap-[5px]">
                                    <div
                                        :class="['max-w-[411px] message p-[10px] rounded-[5px]', chatItem.sender == 'Mary Hilda' ? 'bg-inbox-chat-1' : chatItem.sender == 'Obaidullah Amarkhil' ? 'bg-inbox-chat-2' : 'bg-[#F8F8F8]']">
                                        <p class="text-[12px] text-primary-two">{{ chatItem.message }}</p>
                                        <p class="mt-1 text-[12px] text-primary-two">19:32</p>
                                    </div>
                                    <div class="relative">
                                        <div class="relative cursor-pointer">
                                            <Dropdown @action="actionHandleMenu" :menuList="dropDownReciver"
                                                :data="chatItem" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-if="chatItem.sender == 'You'" class="outbox flex flex-col items-end my-[10px]">
                                <p class="font-bold text-outbox-chat-title">You</p>
                                <div class="bg-[#F2F2F2] p-[10px] text-[12px] rounded-[5px] border-[1px] border-[#E0E0E0]"
                                    v-if="('id' in chatItem.replyMessage)">
                                    {{ chatItem.replyMessage?.message }}
                                </div>
                                <div class="flex items-start mt-2 gap-[5px]">
                                    <div class="relative">
                                        <div class="relative cursor-pointer">
                                            <Dropdown @action="actionHandleMenu" :menuList="dropDownSender"
                                                :data="chatItem" />
                                        </div>
                                    </div>
                                    <div class="max-w-[518px] message bg-outbox-chat p-[10px] rounded-[5px]">
                                        <p class="text-[12px] text-primary-two">{{ chatItem.message }}</p>
                                        <p class="mt-1 text-[12px] text-primary-two">19:32</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div @click="scrollDown()" v-if="!isVisibleNewMessage && newMessagePoint != null"
                class="newMessageIndicator sticky bottom-[90px]">
                <div class="flex justify-center cursor-pointer">
                    <p class="p-[8px] text-primary-one rounded-[5px] bg-sticker-primary text-center">New
                        Message</p>
                </div>
            </div>
            <div v-if="!chatSelected.isGroup"
                class=" bg-sticker-primary text-primary-one rounded-[5px] sticky bottom-[80px] mx-[17px]">
                <div class="flex py-[20px] px-[10px] items-center gap-[11px]">
                    <svg class="animate-spin -ml-1 mr-3 h-[34.41px] w-[34.41px] text-[#2F80ED]"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                    </svg>
                    <p class="text-black font-bold">Please wait while we connect you with one of our team ...</p>
                </div>
            </div>
        </div>

        <div class="form-message sticky bottom-0 z-10">
            <div class="flex justify-center">
                <div class="w-full">
                    <div class="flex p-[20px] items-end gap-3 bg-white">
                        <TypeBar :key="keyTypeBar" @update:modelValue="value => this.inputMessage = value" class="w-full"
                            v-model="inputMessage" :messageReply="replyChat" @cancel="cancelReply" />
                        <BaseButton text="send" class="text-white" @click="submitForm()" />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
  
<script>
import { ref, watch } from 'vue'
import { rand, useElementVisibility } from '@vueuse/core'
import Dropdown from './Dropdown.vue'

export default {
    props: {
        chatSelected: {
            type: Object,
            default: () => { }
        }
    },
    setup() {
        const store = useStore();
        const newMessagePoint = ref(null);
        const isVisibleNewMessage = useElementVisibility(newMessagePoint);
        return {
            store,
            newMessagePoint,
            isVisibleNewMessage,
        };
    },
    components: { Dropdown },
    computed: {
        dateToday() {
            const date = new Date();
            const month = date.toLocaleString('default', { month: 'long' }); // Ambil nama bulan
            const day = date.getDate(); // Ambil tanggal
            const chatDate = `${month} ${day}, ${date.getFullYear()}`;
            return chatDate
        },
        listDateMessage() {
            const date = [...new Set(this.chatSelected.chat.map(item => item.date))];
            const formattedDates = date.map(dateString => {
                const date = new Date(dateString);
                const month = date.toLocaleString('default', { month: 'long' }); // Ambil nama bulan
                const day = date.getDate(); // Ambil tanggal

                return `${month} ${day}, ${date.getFullYear()}`;
            });
            return formattedDates
        }
    },
    data() {
        return {
            keyTypeBar: 0,
            inputMessage: "",
            dropDownSender: [
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
            dropDownReciver: [
                {
                    name: "Share",
                    color: "primary-one",
                    actions: "Share"
                },
                {
                    name: "Reply",
                    color: "primary-one",
                    actions: "REPLY"
                },
            ],
            replyChat: {},
            editedChat: {},
            isEdit: false
        }
    },
    mounted() {
    },
    updated() {
        // whenever data changes and the component re-renders, this is called.
        this.$nextTick(() => this.scrollDown());
    },
    methods: {
        cancelReply() {
            this.replyChat = {}
        },
        isContainDate(chat, checkDate) {
            const date = new Date(chat.date);
            const month = date.toLocaleString('default', { month: 'long' }); // Ambil nama bulan
            const day = date.getDate(); // Ambil tanggal
            const chatDate = `${month} ${day}, ${date.getFullYear()}`;
            return chatDate === checkDate;
        },
        actionHandleMenu(action, data) {
            switch (action) {
                case 'REPLY':
                    this.replyChat = data
                    break;
                case 'DELETE':
                    this.store.removeChat(this.chatSelected, data)
                    break;
                case 'EDIT':
                    this.isEdit = true
                    this.editedChat = data
                    this.inputMessage = data.message
                    this.keyTypeBar++
                    break;
                default:
                    break;
            }
        },
        scrollDown() {
            this.$emit('scrollDown')
        },
        submitForm() {
            this.isEdit ? this.editMessage() : this.sendMessage(this.chatSelected)
        },
        editMessage() {
            this.editedChat.message = this.inputMessage
            this.store.editChat(this.chatSelected, this.editedChat)
            this.inputMessage = ""
            this.replyChat = {}
            this.isEdit = false
            this.editedChat = {}
            this.keyTypeBar++
        },
        sendMessage(message) {
            this.store.addChat(message, {
                id: rand(1, 100),
                isNewMessage: false,
                sender: "You",
                message: this.inputMessage,
                replyMessage: this.replyChat ?? {},
                date: "September 30,2023 19:32",
            })
            this.inputMessage = ""
            this.replyChat = {}
            this.chatSelected.chat.forEach(element => {
                element.isNewMessage = false
            });
            this.keyTypeBar++

        },
        backToListMessage() {
            this.$emit('backToListMessage', {})
        }
    }
}
</script>
  