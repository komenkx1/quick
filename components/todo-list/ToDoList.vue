
<template>
    <div v-for="todo in dataTodo">
        <div class="flex items-center mx-[29px] mt-[22px] flex-wrap cursor-pointer">
            <div class="header flex items-center">
                <input type="checkbox" v-model="todo.isComplate" :true-value="true" :false-value="false">
                <div class="w-[356px]" @click="toogleOpen(todo)">
                    <p :class="['ml-[22.5px] font-bold', todo.isComplate ? 'line-through text-[#828282]' : '']">{{ todo.name
                    }}</p>
                </div>
                <div class="date-time flex items-center mr-auto">
                    <div class="flex ml-[56.33px] gap-[19.75px] justify-end" @click="toogleOpen(todo)">
                        <span class="text-red-600 w-[70px]">
                            <p v-if="deadline(todo.dueDate) <= 10 && deadline(todo.dueDate) != 0 && !todo.isComplate">{{ deadline(todo.dueDate)
                            }} Days Left</p>
                        </span>
                        <span>{{ todo.dueDate }}</span>
                    </div>
                    <div class="action flex ml-[10.32px]">
                        <img class="w-[24px] h-[24px]" :src="`_nuxt/assets/images/arrow-up.svg`" v-if="todo.isOpen">
                        <img class="w-[24px] h-[24px]" :src="`_nuxt/assets/images/arrow-down.png`" v-else>
                        <Dropdown @action="actionHandleMenu" :menuList="menuList" :data="todo" />

                    </div>
                </div>
            </div>
            <transition enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-out" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <div class="body" v-if="todo.isOpen">
                    <div class="w-[543px] ml-[35px]">
                        <div class="input-date flex items-center gap-[18px]">
                            <img class="w-[20px] h-[20px]" v-if="todo.dueDate == null"
                                :src="`_nuxt/assets/images/clock-grey.png`">
                            <img class="w-[20px] h-[20px] bg-grey-5000" v-else :src="`_nuxt/assets/images/clock.png`">
                            <DatePicker value-type="MM/DD/YYYY" type="date" format="MM/DD/YYYY" v-model:value="todo.dueDate"
                                placeholder="Set Date" />
                        </div>
                        <div class="input-date flex items-start gap-[22px] mt-[13px]">
                            <img class="w-[15px] h-[15px]" v-if="todo.desc == ''"
                                :src="`_nuxt/assets/images/pencil-grey.png`">
                            <img class="w-[15px] h-[15px]" v-else :src="`_nuxt/assets/images/pencil.png`">
                            <textarea v-model="todo.desc" ref="textarea" @input="" placeholder="No Description"
                                class="w-full h-auto" style="resize: none;"></textarea>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <hr class="bg-[#828282]  mx-[29px] my-[22px]">
    </div>
    <NewTodoForm v-model="todo" v-if="isNewTask" @save="saveTodo" />
</template>

<script>
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';
import NewTodoForm from './NewTodoForm.vue'
import Dropdown from '../inbox/Dropdown.vue';
export default {
    props: {
        isNewTask: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        const store = useStore();

        return {
            store
        }
    },
    mounted() {
    },
    emits: ["closeForm"], // <--- add this line
    data() {
        return {
            isLoading: false,
            todo: {
                name: "",
                dueDate: null,
                isComplate: false,
                desc: "",
            },
            menuList: [
                {
                    name: "Delete",
                    color: "red-600",
                    actions: "DELETE"
                }
            ]
        }
    },
    watch: {
        dataTodo: {
            handler: function (val) {
            },
            deep: true
        }
    },
    computed: {
        dataTodo() {
            return this.store.$state.todoList
        }
    },
    created() {
        this.dataTodo.map((item) => {
            item.isOpen = false
        })
    },
    methods: {
        actionHandleMenu(action, data) {
            console.log(data)
            switch (action) {
                case 'DELETE':
                    this.store.removeTodoList(this.todo)
                    break;

                default:
                    break;
            }
        },
        saveTodo() {
            this.store.addNewTodoList(this.todo)
            this.$emit('closeForm')
        },
        toogleOpen(todo) {
            todo.isOpen = !todo.isOpen
        },
        deadline(date) {
            // Tanggal target
            var tanggalTarget = new Date(date);

            // Tanggal hari ini
            var tanggalHariIni = new Date();

            // Menghitung selisih waktu antara tanggal target dan tanggal hari ini
            var selisihWaktu = tanggalTarget - tanggalHariIni;

            // Menghitung sisa hari hanya jika hasilnya tidak negatif
            if (selisihWaktu >= 0) {
                var sisaHari = Math.floor(selisihWaktu / (1000 * 60 * 60 * 24));
                console.log('Sisa hari menuju tanggal ' + tanggalTarget.toLocaleDateString() + ' adalah ' + sisaHari + ' hari.');
                return sisaHari;
            } else {
                console.log('Tanggal target sudah lewat.');
                return 0
            }

        }


    },

    components: { DatePicker, NewTodoForm, Dropdown }

}
</script>