<template>
    <form>
        <h3>Add a resource!</h3>
        <div>
            <label for="title">Title:</label>
            <input type="text" id="title" ref="title" />
        </div>
        <div>
            <label for="description">Description:</label>
            <input type="text" id="description" ref="description" />
        </div>
        <div>
            <label for="link">Link:</label>
            <input type="url" id="link" ref="link" />
        </div>
        <button @click.prevent="onclick">Add</button>
    </form>
</template>

<script>
export default {
    inject: ['providedModifyResourcesCallback'],
    methods: {
        onclick(event) {
            const newResource = {
                title: this.$refs.title.value,
                description: this.$refs.description.value,
                link: this.$refs.link.value,
                id: Date.now() + Math.random()
            };
            this.providedModifyResourcesCallback(null, 'ADD', newResource);
        }
    }
};
</script>

<style>
</style>