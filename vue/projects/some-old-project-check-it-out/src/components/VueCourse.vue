<template>
    <assignment-2 />
    <assignment-3 />
    <assignment-4 />
    <assignment-5 />
    <assignment-6 />
    <monster-slayer />
    <provide-and-inject />
    <dynamic-components />
    <learning-resources />
</template>

<script>
import Assignment2 from './assignments/Assignment2.vue';
import Assignment3 from './assignments/Assignment3.vue';
import Assignment4 from './assignments/Assignment4.vue';
import Assignment5 from './assignments/Assignment5.vue';
import Assignment6 from './assignments/assignment-6/Assignment6.vue';
import MonsterSlayer from './projects/MonsterSlayer/MonsterSlayer.vue';
import ProvideAndInject from './projects/ProvideAndInject/ProvideAndInject.vue';
import DynamicComponents from './projects/DynamicComponents/DynamicComponents.vue';
import LearningResources from './projects/LearningResources/LearningResources.vue';
export default {
    components: {
        Assignment2,
        Assignment3,
        Assignment4,
        Assignment5,
        Assignment6,
        MonsterSlayer,
        ProvideAndInject,
        DynamicComponents,
        LearningResources
    }
};
</script>
