<template>
    <li v-for="person in providedPersons" :key="person.id">
        <button @click="setSelection(person.id)" :class="{ selected: providedSelectedId_Reactive.id === person.id }">
            {{ person.name }}
        </button>
    </li>
</template>

<script>
export default {
    inject: ['providedPersons', 'providedSelectedId_Reactive', 'setSelection']
};
</script>

<style scoped>
.selected {
    background: yellow;
}
</style>