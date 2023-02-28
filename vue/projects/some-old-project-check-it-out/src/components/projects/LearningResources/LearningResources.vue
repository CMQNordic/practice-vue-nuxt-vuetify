<template>
    <base-assignment>
        <template #title>Project. Learning Resources </template>
        <template #description> Section 10. Slots & Dynamic components. </template>
        <template #content>
            <the-resources :learningResources="storedResources" />
        </template>
    </base-assignment>
</template>

<script>
import TheResources from './TheResources.vue';
export default {
    components: {
        TheResources
    },
    data() {
        return {
            storedResources: [
                {
                    id: 1,
                    title: 'Google',
                    description: 'A good resource to search for things',
                    link: 'http://www.google.com'
                },
                {
                    id: 2,
                    title: 'LinkedIn',
                    description: 'A good resource to find skilled personal',
                    link: 'http://www.linkedin.com'
                },
                {
                    id: 3,
                    title: 'YouTube',
                    description: 'A good resource',
                    link: 'http://www.youtube.com'
                }
            ]
        };
    },
    provide() {
        return {
            providedModifyResourcesCallback: this.onModifyResources // Children can use this method to modify data.
        };
    },
    methods: {
        onModifyResources(id, action, newObject) {
            let result = null;
            console.log('Action to ' + action + ' resource.');

            if (action === 'DELETE') {
                // Note! Filter do not work as it overwrites pointer distributed to children.
                //this.resources = this.resources.filter((res) => res.id != id)
                const index = this.storedResources.findIndex((res) => res.id === id);
                result = this.storedResources.splice(index, 1);
            } else if (action === 'ADD') {
                result = this.storedResources.unshift(newObject);
            }

            if (result) {
                console.log('Successful ' + action + '. Current number of elements: ' + this.storedResources.length);
            } else {
                console.error('Failed to ' + action);
            }
        }
    }
};
</script>
