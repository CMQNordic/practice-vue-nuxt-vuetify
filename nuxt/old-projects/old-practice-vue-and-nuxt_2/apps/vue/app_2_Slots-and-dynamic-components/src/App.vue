<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br />
                <button class="btn btn-primary" @click="handleClick('appBlue', 'blue')">Load Blue Template</button>
                <button class="btn btn-success" @click="handleClick('appGreen', 'green')">Load Green Template</button>
                <button class="btn btn-danger" @click="handleClick('appRed', 'red')">Load Red Template</button>
                <hr />

                <component :is="selectedCmp">
                    <h3 slot="title">Hello</h3>
                    <p class="my-content" slot="content">This is {{ color }} component</p>
                </component>
<!--                 <app-blue>
                    <h3 slot="title">Hello</h3>
                    <p class="my-content" slot="content">This is {{ color }} component</p>
                </app-blue>
                <app-green>
                     <h3 slot="title">Hello</h3>
                    <p class="my-content" slot="content">This is {{ color }} component</p>
                </app-green>
                <app-red>
                     <h3 slot="title">Hello</h3>
                    <p class="my-content" slot="content">This is {{ color }} component</p>
                </app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
import Blue from './components/Blue.vue';
import Green from './components/Green.vue';
import Red from './components/Red.vue';

export default {
    components: {
        appBlue: Blue,
        appGreen: Green,
        appRed: Red,
    },
    data() {
        return {
            selectedCmp: 'appRed',
            color: 'red'
        }
    },
    methods: {
        handleClick(cmp, color) {
            this.selectedCmp = cmp;
            this.color = color;
        }
    },
};
</script>

<style scoped>
.my-content {
    color: darkcyan;
   font-size: larger;
}
</style>>

</style>
