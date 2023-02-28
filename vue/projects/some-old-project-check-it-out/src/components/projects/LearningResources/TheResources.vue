<template>
    <tabbed-components :tabbedComponents="tabbedComponents" />
</template>

<script>
import { shallowRef } from 'vue';
import ResourcesAll from './ResourcesAll.vue';
import ResourceAdd from './ResourceAdd.vue';
import TabbedComponents from '../../ui/TabbedComponents.vue';
export default {
    components: {
        TabbedComponents
    },
    props: ['learningResources'],
    computed: {
        tabbedComponents() {
            return [
                ['My Resources', shallowRef(ResourcesAll), { resources: this.learningResources }],
                ['Add New', shallowRef(ResourceAdd), null]
            ];
        }
    }
};
</script>