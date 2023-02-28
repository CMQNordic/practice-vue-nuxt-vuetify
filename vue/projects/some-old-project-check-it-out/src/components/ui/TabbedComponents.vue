<template>
    <ul class="TabbedComponents">
        <li v-for="(component, index) in tabbedComponents" :key="index">
            <button
                class="TabbedComponents__Tab"
                :class="{ 'TabbedComponents__Tab--isActive': index == currentTabIndex }"
                @click.stop="tabSelected(index, component)"
            >
                {{ component[0] }}
            </button>
        </li>
    </ul>
    <div class="WrapperOfSelectedComponent">
        <keep-alive>
            <component :is="currentComponent" v-bind="tabbedComponents[currentTabIndex][2]"></component>
        </keep-alive>
    </div>
</template>

<script>
export default {
    props: {
        tabbedComponents: {
            // Fixed structure: [ ['tab title', shallowRef(ComponentX), {props}] ]
            // Shall be served from "computed" for reactivity.
            // [0] - Tab title as string
            // [1] - Imported component shallowRef-ed for performance
            // [2] - props (as object) belonging to ComponentX. If no props set null.
            type: Array,
            required: false
        }
    },
    emits: [
        'on-SelectedComponent' // $emit('on-SelectedComponent', index);
    ],
    data() {
        return {
            currentTabIndex: 0,
            currentComponent: null
        };
    },
    mounted() {
        // Set initial values
        this.currentTabIndex = 0;
        this.currentComponent = this.tabbedComponents[0][1];
    },
    methods: {
        tabSelected(index, tab) {
            this.currentTabIndex = index;
            this.currentComponent = this.tabbedComponents[index][1];
            this.$emit('on-SelectedComponent', index);
        }
    }
};
</script>

<style scoped>
.TabbedComponents {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
}
.TabbedComponents__Tab {
    background-color: lightgray;
    font-size: 1.1rem;
    border-bottom: none;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    margin-right: 1px;
    cursor: pointer;
}
.TabbedComponents__Tab--isActive {
    color: #ce5c00;
    font-weight: 500;
    padding: 0 1.2rem;
}
.WrapperOfSelectedComponent {
    background-color: lightgray;
    border: thin solid gray;
    padding-top: 0.5rem;
    width: 100%;
    height: 600px;
}
</style>