<template>
    <base-assignment>
        <template #title>Project. Provide And Inject</template>
        <template #description
            >Demo of providing data in parent and injecting/using it children. | Child-b mutates data and uses non
            reactive parameter. This is example of bad implementation!</template
        >
        <template #content>
            <debug-wrapper debug="parent" class="flex-box">
                <div class="flex-box__child--left">
                    <ul>
                        <li v-for="person in persons" :key="person.id">
                            <button @click="onSelectedPerson(person.id)">{{ person.name }}</button>
                            <span v-show="selectedId === person.id"> &#60; &#8212; selected</span>
                        </li>
                    </ul>
                    <div>
                        <input ref="person" placeholder="Write name.."/><button @click="addPerson($refs.person.value)">Add person</button>
                    </div>
                </div>
                <div class="flex-box__child--right">
                    <debug-wrapper debug="child-a" class="child-a">
                        <child-a />
                    </debug-wrapper>

                    <debug-wrapper debug="child-b (bad implementation)" class="child-b">
                        <child-b />
                    </debug-wrapper>
                </div>
            </debug-wrapper>
        </template>
    </base-assignment>
</template>

<script>
import ChildA from './ChildA.vue';
import ChildB from './ChildB.vue';
export default {
    components: {
        ChildA,
        ChildB
    },
    data() {
        return {
            persons: [
                { name: 'Martin', id: 11 },
                { name: 'Peter', id: 12 },
                { name: 'Anna', id: 13 }
            ],
            selectedId: 12,
            reactiveSelectedId: {
                id: 12
            }
        };
    },
    methods: {
        onSelectedPerson(id) {
            this.selectedId = id;
            this.reactiveSelectedId.id = id;
        },
        addPerson(name) {
            // Create a unique is so we can identify the person when removing
            this.persons.push({ name: name, id: Date.now() + Math.random() });
        }
    },
    provide() {
        return {
            // Provided values are not reactive by default.
            // Generally avoid using provide/inject and instead pass data around using props and events.
            providedPersons: this.persons,
            // when providing non-reference type (here string) then value is copied. non reactive.
            providedSelectedId_NotReactive: this.selectedId,
            // when providing reference type (here object) then pointer is sent. Reactive.
            providedSelectedId_Reactive: this.reactiveSelectedId,
            // providing pointer to function that child can call to modify data
            setSelection: this.onSelectedPerson
        };
    }
};
</script>

<style scoped>
/* This wrapper class is passed down to child. Why??? */

.flex-box {
    background: white;
    border: thin solid gray;
    display: flex;
    justify-content: space-evenly;
}
.flex-box__child--left {
    flex: 1;
}
.flex-box__child--right {
    flex: 1;
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