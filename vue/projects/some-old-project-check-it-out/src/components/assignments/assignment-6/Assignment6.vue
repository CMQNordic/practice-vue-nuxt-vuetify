<template>
    <base-assignment>
        <template #title>Components, props and emits.</template>
        <template #description
            >Section 8. Assignment 6 | props: {name: {type:String, required:false, default:""}} | input ref="username"
            --> let n = $refs.username.value | :age="+submittedData.age"
        </template>
        <template #content>
            <debug-wrapper debug="parent" class="flex-box">
                <div class="flex-box__child--left">
                    <div><b>Data received as event from child-a:</b></div>
                    <div>name: {{ name }}</div>
                    <div>age: {{ age }}</div>
                    <br />
                    <div><b>Text A sent as prop to child-b:</b></div>
                    <input type="text" v-model="aText" />
                    <div><b>Text B sent as prop to child-b:</b></div>
                    <input type="text" v-model="bText" />
                    <div><b>Text C sent as prop to child-b:</b></div>
                    <input type="text" v-model="cText" />
                </div>
                <div class="flex-box__child--right">
                    <debug-wrapper debug="child-a" class="child-a">
                        <input-frame
                            @name-changed="onNameChanged"
                            @age-changed="age = $event"
                            @submitted="onSubmitted($event)"
                        ></input-frame>
                    </debug-wrapper>
                    <debug-wrapper debug="child-b" class="child-b">
                        <output-frame
                            :name="submittedData.name"
                            :age="+submittedData.age"
                            :textA="aText"
                            :textBStruct="sentTextB"
                            :textCStruct="sentTextC"
                        ></output-frame>
                    </debug-wrapper>
                </div>
            </debug-wrapper>
        </template>
    </base-assignment>
</template>

<script>
import InputFrame from './InputFrame.vue';
import OutputFrame from './OutputFrame.vue';

export default {
    components: {
        InputFrame,
        OutputFrame
    },
    data() {
        return {
            aText: 'text a',
            bText: 'text b',
            cText: 'text c',
            name: null,
            age: null,
            submittedData: {
                name: null,
                age: null
            }
        };
    },
    methods: {
        onNameChanged(string) {
            this.name = string;
        },
        onSubmitted(data) {
            this.submittedData.name = data.name;
            this.submittedData.age = data.age;
        }
    },
    computed: {
        sentTextB() {
            // return [{ textB: this.bText }];
            return { CompX: { textB: this.bText } };
        },
        sentTextC() {
            // return [{ textB: this.bText }];
            return [['dummy', { textC: this.cText }]];
        }
    }
};
</script>

<style scoped>
.flex-box {
    background: white;
    border: thin solid gray;
    display: flex;
    justify-content: space-evenly;
}
.flex-box__child--left {
    flex: 2;
}
.flex-box__child--right {
    flex: 2;
}
.child-a,
.child-b {
    margin: 5px;
    background-color: lightgray;
    border: thin solid gray;
    min-height: 50px;
    width: auto;
}
</style>