<template>
    <base-assignment>
        <template #title> Project: Reactive Dynamic Components </template>
        <template #description>
            Demo of components registered in parent sent to child and then toggled in child. | State presumed with
            keep-alive.
        </template>
        <template #content>
            <debug-wrapper debug="parent" class="parent flex-box">
                <div class="left">
                    <h3>I'm parent.</h3>
                    <div>I have two component registered:</div>
                    <div>import ComponentX from ...</div>
                    <div>import ComponentX from ...</div>
                    <br />
                    Labels:
                    <input type="text" v-model="LabelX" />
                    <input type="text" v-model="LabelY" /><br />
                    Data :
                    <input type="text" v-model="sentName" />
                    <input type="number" v-model="sentage" /><br />
                    <p><b>Sending those components to child...</b></p>
                </div>

                <debug-wrapper debug="child" class="child right">
                    <the-child :tabbedComponents="tabbedComponents" />
                </debug-wrapper>
            </debug-wrapper>
        </template>
    </base-assignment>
</template>

<script>
import { shallowRef } from 'vue';
import TheChild from './TheChild.vue';
import ComponentX from './ComponentX.vue';
import ComponentY from './ComponentY.vue';
export default {
    components: {
        TheChild
    },
    data() {
        return {
            LabelX: 'Component X',
            LabelY: 'Component Y',
            sentName: 'Martin',
            sentage: 45
        };
    },
    computed: {
        tabbedComponents() {
            return [
                [this.LabelX, shallowRef(ComponentX), { name: this.sentName }],
                [this.LabelY, shallowRef(ComponentY), { age: this.sentage }]
            ];
        }
    }
};
</script>

<style scoped>
.flex-box {
    display: flex;
}
.left {
    flex: 3;
}
.right {
    flex: 2;
}
.parent,
.child {
    border: thin solid black;
}
</style>