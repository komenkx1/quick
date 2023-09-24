<template>
    <div>
        <button :class="[`rounded-[5px] px-[16px] py-[8px] bg-${color}`]">
            <p class="font-bold">{{ text }}</p>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: 'Click me'
        },
        color:{
            type: String,
            default: 'primary-one'
        },
    }
}
</script>