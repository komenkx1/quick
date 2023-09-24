<template>
    <div class="relative top-[255px]">
        <div class="text-center">
            <div class="bg-white ml-auto rounded-[5px] border-1 border-[#BDBDBD] ">
                <div class=" w-full">
                    <div class="loader">
                        <svg class="circular-loader" viewBox="25 25 50 50">
                            <circle class="loader-border" cx="50" cy="50" r="20"></circle>
                            <circle class="loader-path" cx="50" cy="50" r="20"></circle>
                        </svg>
                    </div>
                    <p class="text-center font-bold text-[#4F4F4F] mt-[12.7px]">{{ text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        text: {
            type: String,
            default: 'Loading Chats ...'
        }
    }
}
</script>