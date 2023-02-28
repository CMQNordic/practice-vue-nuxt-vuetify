<template>
    <li v-for="person in providedPersons" :key="person.id">
        <!-- Note! Bad Example! Do not ever mutate data outside component that hosts the data. -->
        <!-- Note! Here we use no reactive provided parameter that copies initial data when created -->
        <button
            @click="providedSelectedId_Reactive.id = person.id"
            :class="{ selected: providedSelectedId_NotReactive === person.id }"
        >
            {{ person.name }}
        </button>
    </li>
</template>

<script>
export default {
    inject: ['providedPersons', 'providedSelectedId_NotReactive', 'providedSelectedId_Reactive']
};
</script>

<style scoped>
.selected {
    background: yellow;
}
</style>