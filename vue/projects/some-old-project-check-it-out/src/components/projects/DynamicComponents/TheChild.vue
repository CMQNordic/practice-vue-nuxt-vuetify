<template>
    <div class="header">
        <h3>I'm the child</h3>
        <p>I use components registeed in parent!</p>
        <p>Choose the received component to show:</p>
        <button @click="showComponent(0)">{{ tabbedComponents[0][0] }}</button>
        <button @click="showComponent(1)">{{ tabbedComponents[1][0] }}</button>
    </div>
    <div class="components">
        <debug-wrapper debug="dynamical components">
            <keep-alive>
                <component :is="currentComponent" v-bind="tabbedComponents[currentIndex][2]"></component>
            </keep-alive>
        </debug-wrapper>
    </div>
</template>

<script>
export default {
    props: {
        tabbedComponents: {
            // Fixed structure: [ ['tab title', shallowRef(ComponentX), {props}] ]
            // Serve from "computed".
            // [0] - Tab title as string
            // [1] - Imported component shallowRef-ed for performance
            // [2] - props (as object) belonging to ComponentX. If no props set null.
            type: Array,
            required: false
        }
    },
    data() {
        return {
            currentIndex: 0,
            currentComponent: null
        };
    },
    mounted() {
        // Set initial values
        this.currentIndex = 0;
        this.currentComponent = this.tabbedComponents[0][1];
    },
    methods: {
        showComponent(index) {
            this.currentIndex = index;
            this.currentComponent = this.tabbedComponents[this.currentIndex][1];

            // console.log(this.componentsFromParent);
            // console.log(this.currentComponent);
        }
    },
    computed: {
        components() {
            return this.c;
        }
    }
};
</script>

<style scoped>
.header {
    border: this solid black;
}
.components {
    margin-top: 10px;
    border: this solid black;
    background: yellow;
}
</style>