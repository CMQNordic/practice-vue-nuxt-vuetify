<template>
    <div v-if="debug" class="debug-wrapper">
        <div class="debug-wrapper__label">{{ debug }}</div>
        <slot></slot>
    </div>

    <div v-else>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        debug: {
            type: String,
            required: false,
            default: null
        }
    }
};
</script>

<style scoped>
.debug-wrapper {
    border: 1px dotted brown;
    position: relative;
    margin: 2px;
    padding-top: 18px;
}
.debug-wrapper__label {
    border-right: 1px dotted brown;
    border-bottom: 1px dotted brown;
    color: brown;
    font-size: 0.7rem;
    font-weight: 400;
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 5px;
}
</style>