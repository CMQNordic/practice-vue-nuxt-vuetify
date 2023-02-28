<template>
    <ul>
        <resource-item
            v-for="res in resources"
            :key="res.id"
            :id="res.id"
            :title="res.title"
            :description="res.description"
            :link="res.link"
            @modify-resources="onModifyResource($event.id, $event.action)"
        />
    </ul>
</template>

<script>
import ResourceItem from './ResourceItem.vue';
export default {
    components: {
        ResourceItem
    },
    props: ['resources'],
    inject: ['providedModifyResourcesCallback'],
    methods: {
        onModifyResource(id, action) {
            console.log(id);
            console.log(action);
            // We call the injected callback function that modifies (deletes/adds) resources
            this.providedModifyResourcesCallback(id, action, null);
        }
    }
};
</script>

<style scoped>
ul {
    list-style-type: none;
    background-color: white;
    margin: 0 5px;
    padding: 0;
}
</style>