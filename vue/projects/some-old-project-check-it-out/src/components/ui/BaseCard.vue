<template>
    <div class="BaseCard">
        <slot> </slot>
    </div>
</template>

<style scoped>
.BaseCard {
    border: thin solid rgba(0, 0, 0, 0.1);
    box-shadow: -3px 2px 3px 2px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.1) 0px 1px 6px;
    border-radius: 0.5rem;
}
</style>